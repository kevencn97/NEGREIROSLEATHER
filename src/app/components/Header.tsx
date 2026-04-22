import { useState, useEffect } from 'react';

const openPopup = () =>
  window.dispatchEvent(new CustomEvent('kn:open-popup'));

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`kn-header${scrolled ? ' scrolled' : ''}`}>
      {/* Wordmark */}
      <span className="kn-header__wordmark">NEGREIROS</span>

      <nav>
        <ul className="kn-header__nav">
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
      </nav>

      <button className="kn-btn kn-btn--ghost" onClick={openPopup}>
        Lista de lançamento
      </button>
    </header>
  );
}
