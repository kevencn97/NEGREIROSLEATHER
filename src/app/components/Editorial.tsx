import { useScrollReveal } from './useScrollReveal';
import { ImageWithFallback } from './figma/ImageWithFallback';

const TEXTURE_IMG =
  'https://images.unsplash.com/photo-1741086154510-522e68f76933?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm93biUyMGxlYXRoZXIlMjB0ZXh0dXJlJTIwc3RpdGNoaW5nJTIwZGV0YWlsJTIwbWFjcm98ZW58MXx8fHwxNzc2NzA5Njc2fDA&ixlib=rb-4.1.0&q=80&w=1400';

const WORKBENCH_IMG =
  'https://images.unsplash.com/photo-1647502210988-19681f03a7a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwd29ya3Nob3AlMjB0b29scyUyMGN1dHRpbmclMjBrbmlmZSUyMHRhYmxlfGVufDF8fHx8MTc3Njg3NDYxN3ww&ixlib=rb-4.1.0&q=80&w=1400';

const STITCHING_IMG =
  'https://images.unsplash.com/photo-1696628045025-ce19418d9475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwYXJ0aXNhbiUyMGhhbmQlMjBzdGl0Y2hpbmclMjBwcmVtaXVtJTIwY3JhZnR8ZW58MXx8fHwxNzc2NzA5NjgzfDA&ixlib=rb-4.1.0&q=80&w=1400';

const FINISHING_IMG =
  'https://images.unsplash.com/photo-1759523069474-3c45494a6679?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwZWRnZSUyMGJ1cm5pc2hpbmclMjBkZXRhaWwlMjBjbG9zZSUyMHVwJTIwYXJ0aXNhbnxlbnwxfHx8fDE3NzY4NzQ2MTR8MA&ixlib=rb-4.1.0&q=80&w=1400';

export function Editorial() {
  const textRef = useScrollReveal(0.1);

  return (
    <div id="editorial">
      {/* Main editorial — image + text */}
      <div className="kn-editorial">
        <div className="kn-editorial__panel">
          <ImageWithFallback
            src={TEXTURE_IMG}
            alt="Textura do couro NEGREIROS"
            className="kn-editorial__image"
          />
        </div>

        <div
          ref={textRef}
          className="kn-editorial__text-panel kn-reveal kn-reveal--right"
        >
          <p className="kn-editorial__caption">Editorial</p>

          <h2 className="kn-editorial__title">
            Textura que<br />
            você <em>reconhece.</em>
          </h2>

          <p className="kn-editorial__body">
            Matéria-prima escolhida com critério.<br />
            Textura, presença e resistência.<br />
            Definida para a proposta de cada peça.
          </p>

          <div className="kn-editorial__divider" />

          <p className="kn-editorial__detail">
            Costura sela duplo. Padrão artesanal europeu.
          </p>
        </div>
      </div>

      {/* Craft strip — 4 images */}
      <div className="kn-craft">
        <div className="kn-craft__panel">
          <ImageWithFallback
            src={WORKBENCH_IMG}
            alt="Ferramentas de bancada"
            className="kn-craft__image"
          />
          <span className="kn-craft__caption">Bancada</span>
        </div>
        <div className="kn-craft__panel">
          <ImageWithFallback
            src={STITCHING_IMG}
            alt="Costura artesanal"
            className="kn-craft__image"
          />
          <span className="kn-craft__caption">Costura</span>
        </div>
        <div className="kn-craft__panel">
          <ImageWithFallback
            src={FINISHING_IMG}
            alt="Acabamento do couro"
            className="kn-craft__image"
          />
          <span className="kn-craft__caption">Acabamento</span>
        </div>
        <div className="kn-craft__panel">
          <ImageWithFallback
            src={TEXTURE_IMG}
            alt="Detalhe do couro"
            className="kn-craft__image"
            style={{ objectPosition: '20% center' }}
          />
          <span className="kn-craft__caption">Detalhe</span>
        </div>
      </div>
    </div>
  );
}
