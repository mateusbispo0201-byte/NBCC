"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

function ParticleField() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated: Particle[] = Array.from({ length: 45 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.45 + 0.08,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: "#C9A227",
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

const headline = [
  { text: "Marcas", gold: false },
  { text: "inteligentes", gold: false },
  { text: "não", gold: false },
  { text: "disputam", gold: false },
  { text: "atenção.", gold: false },
  { text: "Dominam", gold: true },
  { text: "percepção.", gold: true },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,162,39,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, #081428 100%)",
        }}
      />

      {/* Gold glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,162,39,0.07) 0%, transparent 65%)",
        }}
      />

      <ParticleField />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-24">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-4 mb-14"
        >
          <div className="h-px w-10 bg-gold opacity-50" />
          <span
            className="text-xs tracking-[0.35em] uppercase font-medium"
            style={{ color: "#C9A227", opacity: 0.75 }}
          >
            Branding Intelligence
          </span>
          <div className="h-px w-10 bg-gold opacity-50" />
        </motion.div>

        {/* Headline */}
        <h1
          className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.06] tracking-tight mb-8"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          {headline.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.08 + i * 0.075,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block mr-[0.22em]"
              style={{ color: word.gold ? "#C9A227" : "#F5F3EE" }}
            >
              {word.text}
            </motion.span>
          ))}
        </h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed"
          style={{ color: "#8A8A8A" }}
        >
          Estratégia, branding e posicionamento para marcas que querem
          relevância real no mercado.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#contato"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 text-sm tracking-[0.12em] uppercase font-heading font-semibold transition-all duration-300"
            style={{
              backgroundColor: "#C9A227",
              color: "#081428",
              fontFamily: "var(--font-space-grotesk), sans-serif",
            }}
          >
            Construir minha marca
          </motion.a>

          <motion.a
            href="#servicos"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 text-sm tracking-[0.12em] uppercase font-heading font-medium border transition-all duration-300 hover:border-gold/60"
            style={{
              color: "#F5F3EE",
              borderColor: "rgba(245,243,238,0.2)",
              fontFamily: "var(--font-space-grotesk), sans-serif",
            }}
          >
            Ver serviços
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-28 flex flex-col items-center gap-3"
        >
          <span
            className="text-xs tracking-[0.25em] uppercase"
            style={{ color: "#8A8A8A" }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ scaleY: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10"
            style={{
              background: "linear-gradient(to bottom, #C9A227, transparent)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
