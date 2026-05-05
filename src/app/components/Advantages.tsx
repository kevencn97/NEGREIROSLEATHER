import { useScrollReveal } from './useScrollReveal';

const advantages = [
  {
    title: 'Couro bem escolhido',
    desc: 'Antes do corte, a mão já sabe o que vale seguir.',
  },
  {
    title: 'Só o necessário',
    desc: 'Se não ajuda no uso, fica fora da peça.',
  },
  {
    title: 'Forma que se sustenta',
    desc: 'O corpo precisa ficar firme sem pesar no conjunto.',
  },
  {
    title: 'Abertura limpa',
    desc: 'Cartão e nota saem sem disputa nem dobra.',
  },
  {
    title: 'Beira bem feita',
    desc: 'Costura assentada. Borda trabalhada até fechar direito.',
  },
  {
    title: 'Volume contado',
    desc: 'A espessura é pensada para o bolso seguir leve.',
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
              O bolso não perdoa excesso
            </p>
            <h2 className="kn-adv-title">
              Faço carteira para uso diário,<br />
              <em>não para vitrine.</em>
            </h2>
          </div>
          <p className="kn-adv-desc">
            A peça precisa entrar e sair da rotina sem chamar atenção. É aí que
            eu acerto a mão.
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
