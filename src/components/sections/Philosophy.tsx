"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    title: "Estratégia antes da estética",
    body: "Criamos o motivo antes da forma. A beleza que não tem direção é só decoração.",
  },
  {
    title: "Inteligência criativa",
    body: "Cada decisão é sustentada por raciocínio estratégico. Criatividade sem propósito é ruído.",
  },
  {
    title: "Arquitetura de percepção",
    body: "Construímos como sua marca é sentida antes de ser vista. Percepção é o produto real.",
  },
  {
    title: "Relevância cultural",
    body: "Marcas que existem no tempo entendem o mundo em que operam. Contexto é vantagem competitiva.",
  },
];

export default function Philosophy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="filosofia"
      className="py-32 md:py-40 relative overflow-hidden"
      style={{ backgroundColor: "#081428" }}
    >
      {/* Subtle accent line */}
      <div
        className="absolute left-0 top-0 w-full h-px opacity-20"
        style={{
          background:
            "linear-gradient(to right, transparent, #C9A227, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-10" style={{ backgroundColor: "#C9A227", opacity: 0.5 }} />
              <span
                className="text-xs tracking-[0.35em] uppercase font-medium"
                style={{ color: "#C9A227", opacity: 0.7 }}
              >
                O que é a BRAIND
              </span>
            </div>

            <h2
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-8"
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                color: "#F5F3EE",
              }}
            >
              Não criamos apenas identidades.{" "}
              <span style={{ color: "#C9A227" }}>Criamos percepção.</span>
            </h2>

            <p className="text-lg leading-relaxed mb-6" style={{ color: "#8A8A8A" }}>
              A BRAIND é uma consultoria de branding estratégico. Existimos na
              interseção entre inteligência de mercado, arquitetura de marca e
              direção criativa.
            </p>

            <p className="text-base leading-relaxed mb-10" style={{ color: "#8A8A8A" }}>
              Não somos uma agência comum. Somos arquitetos de percepção que
              ajudam marcas a encontrar sua direção antes de ganhar sua forma.
            </p>

            <blockquote
              className="border-l-2 pl-6 py-1"
              style={{ borderColor: "#C9A227" }}
            >
              <p
                className="font-heading text-xl font-medium leading-snug italic"
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  color: "#F5F3EE",
                }}
              >
                &ldquo;Onde marcas unem instinto com inteligência.&rdquo;
              </p>
            </blockquote>
          </motion.div>

          {/* Right — pillars */}
          <div className="grid gap-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.15 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative p-6 border border-white/6 hover:border-gold/25 transition-all duration-500"
                style={{ backgroundColor: "rgba(11, 28, 61, 0.4)" }}
              >
                <div
                  className="absolute top-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700"
                  style={{ backgroundColor: "#C9A227", opacity: 0.5 }}
                />
                <h3
                  className="font-heading font-semibold text-base mb-2"
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    color: "#F5F3EE",
                  }}
                >
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8A8A8A" }}>
                  {pillar.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
