import { useScrollReveal } from './useScrollReveal';

const advantages = [
  {
    title: 'Couro legítimo',
    desc: 'Selecionado por textura, espessura e resistência.',
  },
  {
    title: 'Sem excessos',
    desc: 'Cada detalhe existe por uma razão.',
  },
  {
    title: 'Estrutura firme',
    desc: 'Mantém a forma. Resiste ao uso diário.',
  },
  {
    title: 'Uso rápido',
    desc: 'Acesso direto. Sem dobras desnecessárias.',
  },
  {
    title: 'Acabamento preciso',
    desc: 'Costura reforçada. Borda selada a fio.',
  },
  {
    title: 'Menos volume',
    desc: 'Espessura calculada. Bolso limpo.',
  },
];

export function Advantages() {
  const headerRef = useScrollReveal(0.1);
  const gridRef = useScrollReveal(0.05);

  return (
    <section className="kn-section" style={{ background: 'var(--kn-bg)' }}>
      <div className="kn-container">
        {/* Header */}
        <div
          ref={headerRef}
          className="kn-adv-header kn-reveal"
        >
          <div>
            <p className="kn-label" style={{ marginBottom: '24px' }}>
              Por que NEGREIROS
            </p>
            <h2 className="kn-adv-title">
              Menos volume.<br />
              <em>Mais eficiência.</em>
            </h2>
          </div>
          <p className="kn-adv-desc">
            Cada carteira é construída com o propósito de desaparecer no bolso
            e aparecer quando importa. Couro que responde ao tempo.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="kn-advantages">
          {advantages.map((adv, i) => (
            <div
              key={adv.title}
              className={`kn-advantage kn-reveal kn-reveal--delay-${Math.min(i + 1, 6)}`}
            >
              <h3 className="kn-advantage__title">{adv.title}</h3>
              <p className="kn-advantage__desc">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
