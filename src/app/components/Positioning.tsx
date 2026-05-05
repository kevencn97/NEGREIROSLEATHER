import { useScrollReveal } from './useScrollReveal';

const phrases = [
  {
    id: 1,
    text: ['O couro ', 'responde', '\nao tempo.'],
    italic: 'responde',
    meta: 'Durabilidade',
  },
  {
    id: 2,
    text: ['Solidez que\nvocê ', 'sente.', ''],
    italic: 'sente.',
    meta: 'Qualidade',
  },
  {
    id: 3,
    text: ['Feito para quem\n', 'decide.', ''],
    italic: 'decide.',
    meta: 'Posicionamento',
  },
];

export function Positioning() {
  const ref1 = useScrollReveal(0.1);
  const ref2 = useScrollReveal(0.1);
  const ref3 = useScrollReveal(0.1);
  const refs = [ref1, ref2, ref3];

  return (
    <section className="kn-positioning" style={{ background: 'var(--kn-bg)' }}>
      <div className="kn-container">

        {/* Phrase 1 */}
        <div ref={refs[0]} className="kn-pos-phrase kn-reveal">
          <h2 className="kn-pos-text">
            O couro muda.<br />
            <em>A peça acompanha.</em>
          </h2>
          <span className="kn-pos-meta">Tempo</span>
        </div>

        {/* Phrase 2 */}
        <div ref={refs[1]} className="kn-pos-phrase kn-reveal">
          <h2 className="kn-pos-text">
            Firmeza aparece<br />
            na mão <em>e no bolso.</em>
          </h2>
          <span className="kn-pos-meta">Corpo</span>
        </div>

        {/* Phrase 3 */}
        <div ref={refs[2]} className="kn-pos-phrase kn-reveal">
          <h2 className="kn-pos-text">
            Quem corta com calma<br />
            <em>escolhe melhor.</em>
          </h2>
          <span className="kn-pos-meta">Ofício</span>
        </div>

      </div>
    </section>
  );
}
