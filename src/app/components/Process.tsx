import { useScrollReveal } from './useScrollReveal';

const steps = [
  {
    num: '01',
    title: 'Seleção',
    desc: 'Couro escolhido a mão. Textura, espessura, procedência.',
  },
  {
    num: '02',
    title: 'Corte',
    desc: 'Molde preciso. Sem margem de erro.',
  },
  {
    num: '03',
    title: 'Marcação',
    desc: 'Guias para costura. Cada ponto tem posição.',
  },
  {
    num: '04',
    title: 'Costura',
    desc: 'Linha reforçada. Ponto sela duplo.',
  },
  {
    num: '05',
    title: 'Acabamento',
    desc: 'Borda selada, chanfrada e polida.',
  },
  {
    num: '06',
    title: 'Entrega',
    desc: 'Embalagem sóbria. Pronto para uso imediato.',
  },
];

export function Process() {
  const headerRef = useScrollReveal(0.1);
  const stepsRef = useScrollReveal(0.05);

  return (
    <section id="processo" className="kn-section kn-process-wrap">
      <div className="kn-container">
        {/* Header */}
        <div
          ref={headerRef}
          className="kn-process-header kn-reveal"
        >
          <p className="kn-label" style={{ marginBottom: '24px' }}>
            Processo
          </p>
          <h2 className="kn-adv-title">
            Seis etapas.<br />
            <em>Nenhuma a mais.</em>
          </h2>
        </div>

        {/* Steps */}
        <div
          ref={stepsRef}
          className="kn-process__steps"
        >
          <div className="kn-process__line" />

          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`kn-process__step kn-reveal kn-reveal--delay-${Math.min(i + 1, 6)}`}
            >
              <div className="kn-process__step-num">{step.num}</div>
              <h4 className="kn-process__step-title">{step.title}</h4>
              <p className="kn-process__step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}