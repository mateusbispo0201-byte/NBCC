"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Entendimento profundo: mercado, concorrência, audiência, propósito e onde a marca está hoje.",
  },
  {
    number: "02",
    title: "Estratégia",
    description:
      "Posicionamento, direção verbal, proposta de valor e arquitetura da marca.",
  },
  {
    number: "03",
    title: "Construção",
    description:
      "Sistema de identidade completo: visual, verbal e experiencial.",
  },
  {
    number: "04",
    title: "Consolidação",
    description:
      "Gestão da marca, consistência e crescimento no longo prazo.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="processo"
      className="py-32 md:py-40 relative overflow-hidden"
      style={{ backgroundColor: "#081428" }}
    >
      {/* Horizontal accent */}
      <div
        className="absolute left-0 top-0 w-full h-px opacity-15"
        style={{
          background:
            "linear-gradient(to right, transparent, #C9A227, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div
              className="h-px w-10"
              style={{ backgroundColor: "#C9A227", opacity: 0.5 }}
            />
            <span
              className="text-xs tracking-[0.35em] uppercase font-medium"
              style={{ color: "#C9A227", opacity: 0.7 }}
            >
              Processo
            </span>
            <div
              className="h-px w-10"
              style={{ backgroundColor: "#C9A227", opacity: 0.5 }}
            />
          </div>

          <h2
            className="font-heading text-4xl md:text-5xl font-bold"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              color: "#F5F3EE",
            }}
          >
            Como construímos{" "}
            <span style={{ color: "#C9A227" }}>marcas sérias.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div
            className="absolute left-[1.75rem] md:left-1/2 top-0 bottom-0 w-px hidden sm:block"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(201,162,39,0.2), transparent)",
            }}
          />

          <div className="grid md:grid-cols-4 gap-8 md:gap-6 relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.15 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative text-center"
              >
                {/* Number circle */}
                <div className="flex justify-center mb-6">
                  <div
                    className="w-14 h-14 flex items-center justify-center border"
                    style={{
                      borderColor: "rgba(201,162,39,0.3)",
                      backgroundColor: "rgba(201,162,39,0.05)",
                    }}
                  >
                    <span
                      className="font-heading font-bold text-sm tracking-[0.1em]"
                      style={{ color: "#C9A227" }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                <h3
                  className="font-heading font-bold text-xl mb-3"
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    color: "#F5F3EE",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#8A8A8A" }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
