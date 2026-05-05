import { useEffect, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1628483212179-49f29440423e?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const openPopup = () =>
    window.dispatchEvent(new CustomEvent('kn:open-popup'));

  return (
    <section className={`kn-hero${loaded ? ' kn-hero--loaded' : ''}`}>
      {/* Left — Content */}
      <div className="kn-hero__content">
        <span className="kn-hero__label">Carteiras de couro feitas à mão</span>

        <h1 className="kn-hero__title">
          Cada peça começa<br />
          na <em>bancada.</em>
        </h1>

        <p className="kn-hero__subtitle">
          O desenho vem primeiro.<br />
          Depois entram mão, medida e tempo.
        </p>

        <div className="kn-hero__actions">
          <button
            className="kn-btn kn-btn--solid"
            onClick={openPopup}
          >
            Acompanhar o trabalho
          </button>
          <a
            href="#processo"
            className="kn-btn kn-btn--outline"
            onClick={(e) => { e.preventDefault(); scrollTo('processo'); }}
          >
            Ver o processo
          </a>
        </div>
      </div>

      {/* Right — Image */}
      <div className="kn-hero__image-wrap">
        <div className="kn-hero__overlay" />
        <ImageWithFallback
          src={HERO_IMAGE}
          alt="Carteira de couro sobre fundo escuro"
          className="kn-hero__image"
        />
      </div>

      {/* Scroll hint */}
      <div className="kn-hero__scroll-hint">
        <div className="kn-hero__scroll-line" />
        <span className="kn-hero__scroll-text">Desça</span>
      </div>
    </section>
  );
}
