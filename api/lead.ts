type LeadPayload = {
  nome?: string;
  email?: string;
  telefone?: string;
  origem?: string;
  website?: string;
};

declare const process: {
  env: Record<string, string | undefined>;
};

const JSON_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: JSON_HEADERS,
  });
}

export default {
  async fetch(request: Request) {
    if (request.method !== 'POST') {
      return json({ error: 'Method not allowed' }, 405);
    }

    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

    if (!scriptUrl) {
      return json({ error: 'Missing GOOGLE_APPS_SCRIPT_URL' }, 500);
    }

    let body: LeadPayload;

    try {
      body = await request.json();
    } catch {
      return json({ error: 'Invalid JSON body' }, 400);
    }

    const payload = {
      nome: body.nome?.trim() ?? '',
      email: body.email?.trim() ?? '',
      telefone: body.telefone?.trim() ?? '',
      origem: body.origem?.trim() ?? '',
      website: body.website?.trim() ?? '',
    };

    if (payload.website) {
      return json({ ok: true });
    }

    if (!payload.nome || !payload.email || !payload.telefone) {
      return json({ error: 'Missing required fields' }, 400);
    }

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return json({ error: 'Failed to forward lead' }, 502);
    }

    return json({ ok: true });
  },
};
