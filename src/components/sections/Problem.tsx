"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const statements = [
  {
    number: "01",
    text: "Marcas sem direção competem por preço.",
    sub: "Quando não há posicionamento claro, o único argumento é o custo.",
  },
  {
    number: "02",
    text: "Estética sem estratégia gera esquecimento.",
    sub: "Ser bonito não é suficiente. É preciso ser necessário.",
  },
  {
    number: "03",
    text: "Ser visto não significa ser relevante.",
    sub: "Atenção é alugada. Relevância é construída.",
  },
  {
    number: "04",
    text: "A maioria das marcas não sabe quem é.",
    sub: "Sem identidade clara, não há direção. Sem direção, não há destino.",
  },
];

function StatCard({
  item,
  index,
}: {
  item: (typeof statements)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative border-b border-white/8 py-10 px-2 hover:border-gold/30 transition-colors duration-500"
    >
      <div className="flex items-start gap-8">
        <span
          className="font-heading text-xs tracking-[0.2em] mt-1.5 shrink-0"
          style={{ color: "#C9A227", opacity: 0.6 }}
        >
          {item.number}
        </span>
        <div>
          <h3
            className="font-heading text-2xl md:text-3xl font-semibold leading-tight mb-3 group-hover:text-cream transition-colors duration-300"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              color: "#F5F3EE",
            }}
          >
            {item.text}
          </h3>
          <p className="text-base leading-relaxed" style={{ color: "#8A8A8A" }}>
            {item.sub}
          </p>
        </div>
      </div>

      <motion.div
        className="absolute left-0 top-0 w-0 h-px"
        style={{ backgroundColor: "#C9A227" }}
        animate={inView ? { width: "100%" } : { width: 0 }}
        transition={{ duration: 1, delay: index * 0.12 + 0.3, ease: "easeOut" }}
      />
    </motion.div>
  );
}

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 md:py-40" style={{ backgroundColor: "#050505" }}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10" style={{ backgroundColor: "#C9A227", opacity: 0.5 }} />
            <span
              className="text-xs tracking-[0.35em] uppercase font-medium"
              style={{ color: "#C9A227", opacity: 0.7 }}
            >
              O Problema
            </span>
          </div>

          <h2
            className="font-heading text-4xl md:text-5xl font-bold leading-tight max-w-2xl"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              color: "#F5F3EE",
            }}
          >
            O maior erro das marcas é nascerem{" "}
            <span style={{ color: "#C9A227" }}>bonitas</span> e morrerem{" "}
            <span style={{ color: "#C9A227" }}>irrelevantes.</span>
          </h2>
        </motion.div>

        <div>
          {statements.map((item, i) => (
            <StatCard key={item.number} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
