import { useEffect, useState } from 'react';

async function enviarFormulario({
  nome,
  email,
  telefone,
}: {
  nome: string;
  email: string;
  telefone: string;
}) {
  const dados = {
    nome,
    email,
    telefone,
    origem: window.location.href,
    website: '',
  };

  const response = await fetch('/api/lead', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dados),
  });

  if (!response.ok) {
    throw new Error('Falha ao enviar cadastro');
  }
}

export function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [form, setForm] = useState({ nome: '', email: '', telefone: '' });
  const [errors, setErrors] = useState({ nome: false, email: false, telefone: false });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const alreadySeen = localStorage.getItem('kn_popup_dismissed');

    const openPopup = () => {
      setIsOpen(true);
      requestAnimationFrame(() => setTimeout(() => setVisible(true), 20));
    };

    let timer: ReturnType<typeof setTimeout> | undefined;

    if (!alreadySeen) {
      timer = setTimeout(() => {
        openPopup();
      }, 10000);
    }

    window.addEventListener('kn:open-popup', openPopup);

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener('kn:open-popup', openPopup);
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      setIsOpen(false);
      localStorage.setItem('kn_popup_dismissed', '1');
    }, 500);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) handleClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: false }));
    setSubmitError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const newErrors = {
      nome: !form.nome.trim(),
      email: !form.email.trim() || !form.email.includes('@'),
      telefone: !form.telefone.trim(),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      await enviarFormulario(form);
      setSubmitted(true);
      localStorage.setItem('kn_popup_dismissed', '1');
    } catch {
      setSubmitError('Não deu para enviar agora. Tente de novo em instantes.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`kn-popup-overlay${visible ? ' kn-popup-overlay--visible' : ''}`}
      onClick={handleOverlayClick}
    >
      <div className={`kn-popup${visible ? ' kn-popup--visible' : ''}`}>
        <button className="kn-popup__close" onClick={handleClose} aria-label="Fechar janela">
          &times;
        </button>

        {!submitted ? (
          <>
            <p className="kn-popup__eyebrow">NEGREIROS</p>
            <h2 className="kn-popup__title">
              Fique por
              <br />
              <em>perto.</em>
            </h2>
            <p className="kn-popup__sub">
              Deixe seu nome e eu aviso quando houver coisa nova na bancada.
            </p>

            <form className="kn-popup__form" onSubmit={handleSubmit} noValidate>
              <div className={`kn-popup__field${errors.nome ? ' kn-popup__field--error' : ''}`}>
                <label className="kn-popup__label">Nome</label>
                <input
                  className="kn-popup__input"
                  type="text"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  autoComplete="name"
                  disabled={isSubmitting}
                />
                {errors.nome && <span className="kn-popup__error-msg">Preciso desse campo</span>}
              </div>

              <div className={`kn-popup__field${errors.email ? ' kn-popup__field--error' : ''}`}>
                <label className="kn-popup__label">E-mail</label>
                <input
                  className="kn-popup__input"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="voce@exemplo.com"
                  autoComplete="email"
                  disabled={isSubmitting}
                />
                {errors.email && <span className="kn-popup__error-msg">E-mail inválido</span>}
              </div>

              <div className={`kn-popup__field${errors.telefone ? ' kn-popup__field--error' : ''}`}>
                <label className="kn-popup__label">Telefone</label>
                <input
                  className="kn-popup__input"
                  type="tel"
                  name="telefone"
                  value={form.telefone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  autoComplete="tel"
                  disabled={isSubmitting}
                />
                {errors.telefone && <span className="kn-popup__error-msg">Preciso desse campo</span>}
              </div>

              <button type="submit" className="kn-popup__submit" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Quero acompanhar'}
              </button>

              {submitError && <span className="kn-popup__error-msg">{submitError}</span>}
            </form>

            <p className="kn-popup__disclaimer">
              Escrevo pouco. Só quando houver assunto.
            </p>
          </>
        ) : (
          <div className="kn-popup__success">
            <div className="kn-popup__success-icon">&#10022;</div>
            <h2 className="kn-popup__title">
              Nome
              <br />
              <em>anotado.</em>
            </h2>
            <p className="kn-popup__sub">
              Quando eu tiver algo novo para mostrar, você vai saber.
            </p>
            <button className="kn-popup__close-btn" onClick={handleClose}>
              Fechar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
