"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const mockCases = [
  {
    id: "01",
    category: "Branding Estratégico",
    title: "Identidade de Autoridade",
    description:
      "Reposicionamento completo de uma empresa de consultoria financeira. De genérica para referência no segmento.",
    result: "Percepção premium estabelecida em 90 dias.",
    palette: ["#0B1C3D", "#C9A227", "#F5F3EE"],
  },
  {
    id: "02",
    category: "Identidade Visual",
    title: "Sistema Visual Premium",
    description:
      "Criação de universo visual para startup de tecnologia que precisava transmitir sofisticação e confiança.",
    result: "Sistema visual aplicado em 14 touchpoints.",
    palette: ["#050505", "#C9A227", "#3A3A3A"],
  },
  {
    id: "03",
    category: "Rebranding",
    title: "Transformação de Marca",
    description:
      "Rebranding estratégico de marca regional que queria expansão nacional. Clareza de comunicação e novo posicionamento.",
    result: "Expansão para 3 novos mercados após rebranding.",
    palette: ["#081428", "#F5F3EE", "#C9A227"],
  },
];

function CaseCard({
  item,
  index,
}: {
  item: (typeof mockCases)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.9,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative border border-white/6 hover:border-gold/25 transition-all duration-500 overflow-hidden"
    >
      {/* Visual area */}
      <div
        className="h-52 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${item.palette[0]} 0%, ${item.palette[1]}22 60%, ${item.palette[0]} 100%)`,
        }}
      >
        {/* Abstract composition */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-24 h-24 border opacity-30 rotate-45 group-hover:rotate-[60deg] transition-transform duration-1000"
            style={{ borderColor: item.palette[1] }}
          />
          <div
            className="absolute w-16 h-16 border opacity-20 -rotate-12 group-hover:rotate-0 transition-transform duration-1000"
            style={{ borderColor: item.palette[2] }}
          />
          <div
            className="absolute w-6 h-6 rounded-full opacity-60"
            style={{ backgroundColor: item.palette[1] }}
          />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,162,39,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,1) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span
            className="text-xs px-3 py-1 border tracking-wider uppercase"
            style={{
              color: "#C9A227",
              borderColor: "rgba(201,162,39,0.3)",
              backgroundColor: "rgba(8,20,40,0.8)",
            }}
          >
            {item.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-7" style={{ backgroundColor: "rgba(8, 20, 40, 0.8)" }}>
        <div className="flex items-start justify-between mb-4">
          <h3
            className="font-heading font-bold text-xl leading-snug"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              color: "#F5F3EE",
            }}
          >
            {item.title}
          </h3>
          <span
            className="font-heading text-xs tracking-[0.2em] opacity-40 ml-4 shrink-0"
            style={{ color: "#C9A227" }}
          >
            {item.id}
          </span>
        </div>

        <p className="text-sm leading-relaxed mb-5" style={{ color: "#8A8A8A" }}>
          {item.description}
        </p>

        <div
          className="text-xs tracking-wide pt-4 border-t"
          style={{ color: "#C9A227", borderColor: "rgba(201,162,39,0.15)" }}
        >
          → {item.result}
        </div>
      </div>
    </motion.div>
  );
}

export default function Cases() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="cases"
      className="py-32 md:py-40"
      style={{ backgroundColor: "#081428" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div
              className="h-px w-10"
              style={{ backgroundColor: "#C9A227", opacity: 0.5 }}
            />
            <span
              className="text-xs tracking-[0.35em] uppercase font-medium"
              style={{ color: "#C9A227", opacity: 0.7 }}
            >
              Trabalhos
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2
              className="font-heading text-4xl md:text-5xl font-bold leading-tight"
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                color: "#F5F3EE",
              }}
            >
              Marcas que{" "}
              <span style={{ color: "#C9A227" }}>construímos.</span>
            </h2>

            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "#8A8A8A" }}
            >
              Cada projeto nasce de um diagnóstico profundo e resulta em marcas
              impossíveis de ignorar.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {mockCases.map((c, i) => (
            <CaseCard key={c.id} item={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
