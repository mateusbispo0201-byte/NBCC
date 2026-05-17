"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTAFinal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contato"
      className="py-36 md:py-48 relative overflow-hidden"
      style={{ backgroundColor: "#050505" }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(201,162,39,0.05) 0%, transparent 65%)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,162,39,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
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
              Próximo passo
            </span>
            <div
              className="h-px w-10"
              style={{ backgroundColor: "#C9A227", opacity: 0.5 }}
            />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.06] tracking-tight mb-8"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              color: "#F5F3EE",
            }}
          >
            Sua marca pode continuar{" "}
            <span style={{ color: "#8A8A8A" }}>existindo.</span>
            <br />
            Ou começar a ser{" "}
            <span style={{ color: "#C9A227" }}>relevante.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg leading-relaxed mb-14 max-w-xl mx-auto"
            style={{ color: "#8A8A8A" }}
          >
            Comece com um diagnóstico gratuito. Entendemos sua marca e mostramos
            onde está o gap entre o que você é e o que poderia ser.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="mailto:contato@braind.com.br"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-5 text-sm tracking-[0.15em] uppercase font-heading font-bold transition-all duration-300"
              style={{
                backgroundColor: "#C9A227",
                color: "#081428",
                fontFamily: "var(--font-space-grotesk), sans-serif",
              }}
            >
              Vamos construir isso
            </motion.a>

            <motion.a
              href="mailto:contato@braind.com.br"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-5 text-sm tracking-[0.15em] uppercase font-heading font-medium border transition-all duration-300"
              style={{
                color: "#F5F3EE",
                borderColor: "rgba(245,243,238,0.15)",
                fontFamily: "var(--font-space-grotesk), sans-serif",
              }}
            >
              Agendar diagnóstico
            </motion.a>
          </motion.div>

          {/* Bottom label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-14 text-xs tracking-[0.25em] uppercase"
            style={{ color: "#3A3A3A" }}
          >
            Diagnóstico gratuito · Sem compromisso
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
