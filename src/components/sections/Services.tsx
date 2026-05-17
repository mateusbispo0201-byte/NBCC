"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    index: "01",
    title: "Branding Estratégico",
    description:
      "Posicionamento, arquitetura de marca, naming, estratégia verbal, tom de voz e manifesto. O alicerce antes da construção.",
    tags: ["Posicionamento", "Naming", "Manifesto", "Tom de Voz"],
  },
  {
    index: "02",
    title: "Identidade Visual",
    description:
      "Sistema visual completo: logo, tipografia, grid, aplicações e motion identity. O universo visual que sustenta a percepção.",
    tags: ["Logo", "Sistema Visual", "Motion", "Aplicações"],
  },
  {
    index: "03",
    title: "Rebranding",
    description:
      "Reposicionamento completo para marcas que precisam evoluir. Clareza, atualização estratégica e reestruturação visual.",
    tags: ["Reposicionamento", "Reestruturação", "Clareza"],
  },
  {
    index: "04",
    title: "Gestão de Marca",
    description:
      "Direção criativa contínua, consistência visual, planejamento estratégico e campanhas para manter a marca relevante.",
    tags: ["Direção Criativa", "Campanhas", "Consistência"],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative p-8 border border-white/6 hover:border-gold/25 transition-all duration-500 cursor-default"
      style={{ backgroundColor: "rgba(8, 20, 40, 0.6)" }}
    >
      {/* Top accent line */}
      <motion.div
        className="absolute top-0 left-0 h-px"
        style={{ backgroundColor: "#C9A227" }}
        initial={{ width: 0 }}
        animate={inView ? { width: "40%" } : { width: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
      />

      <div className="flex items-start justify-between mb-6">
        <span
          className="font-heading text-xs tracking-[0.2em]"
          style={{ color: "#C9A227", opacity: 0.55 }}
        >
          {service.index}
        </span>

        {/* Abstract icon */}
        <div className="relative w-10 h-10">
          <div
            className="absolute inset-0 border border-current opacity-20 rotate-45 group-hover:rotate-[60deg] transition-transform duration-700"
            style={{ color: "#C9A227" }}
          />
          <div
            className="absolute inset-2 border border-current opacity-40 -rotate-12 group-hover:rotate-0 transition-transform duration-700"
            style={{ color: "#C9A227" }}
          />
        </div>
      </div>

      <h3
        className="font-heading text-2xl font-bold mb-4 group-hover:text-gold transition-colors duration-300"
        style={{
          fontFamily: "var(--font-space-grotesk), sans-serif",
          color: "#F5F3EE",
        }}
      >
        {service.title}
      </h3>

      <p className="text-sm leading-relaxed mb-7" style={{ color: "#8A8A8A" }}>
        {service.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 border tracking-wider uppercase"
            style={{
              color: "#C9A227",
              borderColor: "rgba(201,162,39,0.2)",
              backgroundColor: "rgba(201,162,39,0.05)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="servicos"
      className="py-32 md:py-40"
      style={{ backgroundColor: "#050505" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div
                className="h-px w-10"
                style={{ backgroundColor: "#C9A227", opacity: 0.5 }}
              />
              <span
                className="text-xs tracking-[0.35em] uppercase font-medium"
                style={{ color: "#C9A227", opacity: 0.7 }}
              >
                Serviços
              </span>
            </div>
            <h2
              className="font-heading text-4xl md:text-5xl font-bold leading-tight"
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                color: "#F5F3EE",
              }}
            >
              O que a BRAIND{" "}
              <span style={{ color: "#C9A227" }}>entrega.</span>
            </h2>
          </div>

          <p
            className="text-base max-w-xs leading-relaxed md:text-right"
            style={{ color: "#8A8A8A" }}
          >
            Cada entrega é resultado de um processo estratégico profundo, não de
            uma execução superficial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.index} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
