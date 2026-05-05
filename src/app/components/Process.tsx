import { useScrollReveal } from './useScrollReveal';

const steps = [
  {
    num: '01',
    title: 'Escolha',
    desc: 'Antes do corte, o couro passa pelo olho e pela mão.',
  },
  {
    num: '02',
    title: 'Corte',
    desc: 'O molde entra na medida. Desvio pequeno vira defeito grande.',
  },
  {
    num: '03',
    title: 'Marcação',
    desc: 'Cada ponto é riscado antes da linha começar o caminho.',
  },
  {
    num: '04',
    title: 'Costura',
    desc: 'A linha entra para segurar, não para aparecer.',
  },
  {
    num: '05',
    title: 'Acerto de borda',
    desc: 'A quina é aparada e trabalhada até assentar.',
  },
  {
    num: '06',
    title: 'Revisão',
    desc: 'No fim, a peça volta para a mão antes de sair da bancada.',
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
            É aqui que ela ganha forma
          </p>
          <h2 className="kn-adv-title">
            Uma peça dessas pede tempo.<br />
            <em>E mão firme.</em>
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
