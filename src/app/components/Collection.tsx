import type { CSSProperties } from "react";
import { useScrollReveal } from "./useScrollReveal";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const MINIMALISM_WALLET_IMG =
  "https://images.unsplash.com/photo-1771096095800-fe1f49993bf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBsZWF0aGVyJTIwd2FsbGV0JTIwZGFyayUyMGJhY2tncm91bmQlMjBsdXh0cnl8ZW58MXx8fHwxNzc2NzA5NjcyfDA&ixlib=rb-4.1.0&q=80&w=800";

type Pillar = {
  id: string;
  title: string;
  desc: string;
  image: string;
  imageStyle?: CSSProperties;
};

const pillars: Pillar[] = [
  {
    id: "materia",
    title: "Matéria Prima",
    desc: "O couro é o começo de tudo. Selecionado à mão por textura, espessura e resistência. Antes de qualquer corte.",
    image:
      "https://images.unsplash.com/photo-1763674292700-317879c2038c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwbGVhdGhlciUyMHRleHR1cmUlMjBtYWNybyUyMGRhcmt8ZW58MXx8fHwxNzc2ODc0NjExfDA&ixlib=rb-4.1.0&q=80&w=800",
  },
  {
    id: "costura",
    title: "Costura dupla",
    desc: "Linha reforçada por dentro e por fora. Resistência que não aparece, mas dura.",
    image:
      "https://images.unsplash.com/photo-1696628045025-ce19418d9475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwY3JhZnRzbWFuJTIwaGFuZHMlMjBzdGl0Y2hpbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzY4NzQ2MTF8MA&ixlib=rb-4.1.0&q=80&w=800",
  },
  {
    id: "estrutura",
    title: "Estrutura firme",
    desc: "Mantém a forma ao longo dos anos. Sem deformações, sem volume desnecessário.",
    image:
      "https://images.unsplash.com/photo-1772651983030-565c2b7be181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYnJvd24lMjBsZWF0aGVyJTIwbWF0ZXJpYWwlMjBsdXh1cnklMjBxdWFsaXR5fGVufDF8fHx8MTc3Njg3NDYxMXww&ixlib=rb-4.1.0&q=80&w=800",
  },
  {
    id: "borda",
    title: "Borda selada",
    desc: "Acabamento a fio quente. O detalhe que separa o artesanal do industrial.",
    image:
      "https://images.unsplash.com/photo-1759523069474-3c45494a6679?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwZWRnZSUyMGJ1cm5pc2hpbmclMjBkZXRhaWwlMjBjbG9zZSUyMHVwJTIwYXJ0aXNhbnxlbnwxfHx8fDE3NzY4NzQ2MTR8MA&ixlib=rb-4.1.0&q=80&w=800",
  },
  {
    id: "minimalismo",
    title: "Minimalismo funcional",
    desc: "Cada elemento existe por uma razão. Sem ornamento. Sem excesso. Só o que é necessário.",
    image: "https://images.unsplash.com/photo-1620109433606-a7dfa6107d28?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageStyle: { objectPosition: "78% center" },
  },
  {
    id: "processo",
    title: "Processo rigoroso",
    desc: "Cada peça passa por etapas manuais de controle. Não há atalho para o padrão que buscamos.",
    image:
      "https://images.unsplash.com/photo-1647502210988-19681f03a7a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwd29ya3Nob3AlMjB0b29scyUyMGN1dHRpbmclMjBrbmlmZSUyMHRhYmxlfGVufDF8fHx8MTc3Njg3NDYxN3ww&ixlib=rb-4.1.0&q=80&w=800",
  },
];

const openPopup = () =>
  window.dispatchEvent(new CustomEvent("kn:open-popup"));

export function Collection() {
  const headerRef = useScrollReveal(0.1);
  const gridRef = useScrollReveal(0.05);

  return (
    <section
      id="pilares"
      className="kn-section"
      style={{
        background: "var(--kn-surface-1)",
        paddingBottom: 0,
      }}
    >
      <div className="kn-container">
        <div
          ref={headerRef}
          className="kn-collection-header kn-reveal"
        >
          <div>
            <p
              className="kn-label"
              style={{ marginBottom: "24px" }}
            >
              O que estamos construindo
            </p>
            <h2 className="kn-collection-title">
              Seis pilares.
              <br />
              <em>Um padrão.</em>
            </h2>
          </div>
          <div>
            <p className="kn-collection-sub">
              Ainda em desenvolvimento, cada detalhe já está
              definido. Estes são os compromissos que regem cada
              peça NEGREIROS.
            </p>
            <button
              className="kn-btn kn-btn--ghost"
              style={{ marginTop: "32px" }}
              onClick={openPopup}
            >
              Entrar na lista de lançamento
            </button>
          </div>
        </div>
      </div>

      <div ref={gridRef} className="kn-collection">
        {pillars.map((pillar, i) => (
          <div
            key={pillar.id}
            className={`kn-card kn-reveal kn-reveal--delay-${Math.min((i % 3) + 1, 6)}`}
          >
            <ImageWithFallback
              src={pillar.image}
              alt={pillar.title}
              className="kn-card__image"
              style={pillar.imageStyle}
            />
            <div className="kn-card__overlay">
              <h3 className="kn-card__name">{pillar.title}</h3>
              <p className="kn-card__tagline">{pillar.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
