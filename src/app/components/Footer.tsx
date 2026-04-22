const openPopup = () =>
  window.dispatchEvent(new CustomEvent('kn:open-popup'));

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="kn-footer">
      <div className="kn-container">
        <div className="kn-footer__grid">
          {/* Brand */}
          <div>
            <span className="kn-footer__wordmark">NEGREIROS</span>
            <p className="kn-footer__tagline">
              Carteiras masculinas de couro legítimo.<br />
              Em desenvolvimento. Lançamento em breve.
            </p>
            <button
              className="kn-btn kn-btn--ghost"
              style={{ marginTop: '28px', fontSize: '0.68rem' }}
              onClick={openPopup}
            >
              Entrar na lista
            </button>
          </div>

          {/* Navigation */}
          <div>
            <p className="kn-footer__heading">Navegação</p>
            <ul className="kn-footer__nav">
              <li>
                <a
                  href="#pilares"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('pilares');
                  }}
                >
                  Os Pilares
                </a>
              </li>
              <li>
                <a
                  href="#processo"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('processo');
                  }}
                >
                  Processo
                </a>
              </li>
              <li>
                <a
                  href="#editorial"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('editorial');
                  }}
                >
                  Editorial
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('contato');
                  }}
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="kn-footer__heading">Contato</p>
            <p className="kn-footer__contact-item">
              <a href="mailto:contato@kevennegreiros.com.br">
                contato@kevennegreiros.com.br
              </a>
            </p>
            <p className="kn-footer__contact-item">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </p>
            <p
              className="kn-footer__contact-item"
              style={{ marginTop: '28px' }}
            >
              Brasil. Entrega nacional
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="kn-footer__bottom">
          <p className="kn-footer__copy">
            © 2025 NEGREIROS. Todos os direitos reservados
          </p>
          <div className="kn-footer__social">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              TikTok
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
