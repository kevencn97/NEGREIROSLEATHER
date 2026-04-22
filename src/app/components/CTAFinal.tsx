import { useScrollReveal } from './useScrollReveal';

const openPopup = () =>
  window.dispatchEvent(new CustomEvent('kn:open-popup'));

export function CTAFinal() {
  const ref = useScrollReveal(0.15);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="kn-cta">
      <div
        ref={ref}
        className="kn-reveal"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <p className="kn-cta__label">NEGREIROS. Em breve</p>

        <h2 className="kn-cta__title">
          Estamos<br />
          <em>chegando.</em>
        </h2>

        <p className="kn-cta__subtitle">
          Cadastre-se e seja o primeiro a saber quando a coleção for lançada.
        </p>

        <div className="kn-cta__actions">
          <button className="kn-btn kn-btn--solid" onClick={openPopup}>
            Entrar na lista
          </button>
          <a
            href="#editorial"
            className="kn-btn kn-btn--outline"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('editorial');
            }}
          >
            Conhecer a marca
          </a>
        </div>
      </div>
    </section>
  );
}
