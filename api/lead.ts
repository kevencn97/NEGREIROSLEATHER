import { z } from 'zod';

declare const process: {
  env: Record<string, string | undefined>;
};

const UPSTREAM_TIMEOUT_MS = 9000;
const MAX_BODY_CHARS = 4096;
const GENERIC_ERROR_MESSAGE = 'Erro ao processar solicitacao';

const JSON_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store',
};

const leadSchema = z
  .object({
    nome: z
      .string()
      .trim()
      .min(2)
      .max(120)
      .regex(/^[\p{L}\p{M}'`. -]+$/u),
    email: z.string().trim().max(254).email(),
    telefone: z
      .string()
      .trim()
      .min(8)
      .max(20)
      .regex(/^\+?[0-9()\s-]{8,20}$/),
    origem: z.string().trim().max(2048).url(),
    website: z.string().trim().max(200).optional().default(''),
  })
  .strict();

type LeadPayload = z.infer<typeof leadSchema>;

function json(data: unknown, status = 200, requestId?: string) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...JSON_HEADERS,
      ...(requestId ? { 'X-Request-Id': requestId } : {}),
    },
  });
}

function errorResponse(status: number, requestId: string) {
  return json({ error: GENERIC_ERROR_MESSAGE }, status, requestId);
}

function getRequestId(request: Request) {
  return request.headers.get('x-request-id') || crypto.randomUUID();
}

function logInfo(event: string, requestId: string, context: Record<string, unknown> = {}) {
  console.info(
    JSON.stringify({
      level: 'info',
      event,
      requestId,
      ...context,
    }),
  );
}

function logError(event: string, requestId: string, context: Record<string, unknown> = {}) {
  console.error(
    JSON.stringify({
      level: 'error',
      event,
      requestId,
      ...context,
    }),
  );
}

function getValidationFields(result: z.SafeParseError<unknown>) {
  return result.error.issues.map((issue) => ({
    path: issue.path.join('.'),
    code: issue.code,
  }));
}

export default {
  async fetch(request: Request) {
    const requestId = getRequestId(request);
    const startedAt = Date.now();

    if (request.method !== 'POST') {
      logInfo('lead.method_not_allowed', requestId, {
        method: request.method,
      });
      return errorResponse(405, requestId);
    }

    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

    if (!scriptUrl) {
      logError('lead.config_error', requestId, {
        reason: 'missing_google_apps_script_url',
      });
      return errorResponse(500, requestId);
    }

    const contentType = request.headers.get('content-type') || '';

    if (!contentType.toLowerCase().includes('application/json')) {
      logInfo('lead.invalid_content_type', requestId, {
        contentType,
      });
      return errorResponse(400, requestId);
    }

    let rawBody = '';

    try {
      rawBody = await request.text();
    } catch {
      logError('lead.read_body_failed', requestId, {
        reason: 'body_read_error',
      });
      return errorResponse(400, requestId);
    }

    if (!rawBody || rawBody.length > MAX_BODY_CHARS) {
      logInfo('lead.invalid_body_size', requestId, {
        bodyLength: rawBody.length,
        maxBodyChars: MAX_BODY_CHARS,
      });
      return errorResponse(400, requestId);
    }

    let parsedJson: unknown;

    try {
      parsedJson = JSON.parse(rawBody);
    } catch {
      logInfo('lead.invalid_json', requestId, {
        reason: 'json_parse_error',
      });
      return errorResponse(400, requestId);
    }

    const parsedLead = leadSchema.safeParse(parsedJson);

    if (!parsedLead.success) {
      logInfo('lead.validation_failed', requestId, {
        invalidFields: getValidationFields(parsedLead),
      });
      return errorResponse(400, requestId);
    }

    const payload: LeadPayload = parsedLead.data;

    if (payload.website) {
      logInfo('lead.honeypot_triggered', requestId, {
        durationMs: Date.now() - startedAt,
      });
      return json({ ok: true }, 200, requestId);
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT_MS);

    try {
      const upstreamResponse = await fetch(scriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      if (!upstreamResponse.ok) {
        logError('lead.upstream_error', requestId, {
          reason: 'apps_script_non_ok',
          upstreamStatus: upstreamResponse.status,
          durationMs: Date.now() - startedAt,
        });
        return errorResponse(502, requestId);
      }

      logInfo('lead.forward_success', requestId, {
        durationMs: Date.now() - startedAt,
      });

      return json({ ok: true }, 200, requestId);
    } catch (error) {
      const isTimeout = error instanceof Error && error.name === 'AbortError';

      logError('lead.upstream_request_failed', requestId, {
        reason: isTimeout ? 'apps_script_timeout' : 'apps_script_fetch_error',
        durationMs: Date.now() - startedAt,
      });

      return errorResponse(isTimeout ? 504 : 502, requestId);
    } finally {
      clearTimeout(timeoutId);
    }
  },
};
