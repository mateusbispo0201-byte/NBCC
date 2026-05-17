"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const phrases = [
  "Marcas bonitas chamam atenção.",
  "Marcas inteligentes dominam mercados.",
];

const differentials = [
  {
    label: "Pensamento estratégico",
    text: "Antes de qualquer traço visual, estabelecemos a direção estratégica completa da marca.",
  },
  {
    label: "Profundidade de processo",
    text: "Não trabalhamos em camadas superficiais. Cada entrega é sustentada por raciocínio profundo.",
  },
  {
    label: "Visão de mercado",
    text: "Entendemos o contexto competitivo antes de posicionar. Timing e relevância cultural são vantagem.",
  },
  {
    label: "Identidade duradoura",
    text: "Construímos marcas para permanecer no tempo, não para parecer bem no lançamento.",
  },
  {
    label: "Integração verbal e visual",
    text: "Tom de voz e identidade visual nascem da mesma fonte estratégica. Consistência total.",
  },
  {
    label: "Direção de percepção",
    text: "Controlamos como sua marca é sentida antes de ser vista. Percepção não é acidente.",
  },
];

export default function Differentials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="py-32 md:py-40 relative overflow-hidden"
      style={{ backgroundColor: "#050505" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Statement block */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="mb-24 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-10">
            <div
              className="h-px w-10"
              style={{ backgroundColor: "#C9A227", opacity: 0.5 }}
            />
            <span
              className="text-xs tracking-[0.35em] uppercase font-medium"
              style={{ color: "#C9A227", opacity: 0.7 }}
            >
              Por que a BRAIND
            </span>
            <div
              className="h-px w-10"
              style={{ backgroundColor: "#C9A227", opacity: 0.5 }}
            />
          </div>

          <div className="space-y-3">
            {phrases.map((phrase, i) => (
              <motion.p
                key={phrase}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.9,
                  delay: i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-heading text-3xl md:text-5xl font-bold"
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  color: i === 0 ? "#8A8A8A" : "#F5F3EE",
                }}
              >
                {phrase}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((d, i) => (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group p-6 border border-white/5 hover:border-gold/20 transition-colors duration-400"
              style={{ backgroundColor: "rgba(8, 20, 40, 0.5)" }}
            >
              <div
                className="w-1 h-6 mb-4 transition-all duration-300 group-hover:h-8"
                style={{ backgroundColor: "#C9A227" }}
              />
              <h3
                className="font-heading font-semibold text-sm mb-2 tracking-wide"
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  color: "#F5F3EE",
                }}
              >
                {d.label}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#8A8A8A" }}>
                {d.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
