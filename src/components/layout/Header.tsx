"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Filosofia", href: "#filosofia" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Cases", href: "#cases" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 80], [0, 1]);

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 40));
    return unsub;
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-navy/90 backdrop-blur-md border-b border-white/5"
      />

      <div className="relative max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-heading font-bold text-xl tracking-wider text-cream hover:text-gold transition-colors duration-300"
        >
          BRAIND
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray text-sm tracking-wider uppercase hover:text-cream transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 border border-gold/40 text-gold text-xs tracking-[0.15em] uppercase font-heading font-medium hover:bg-gold hover:text-navy transition-all duration-300"
        >
          Diagnóstico
        </a>
      </div>
    </motion.header>
  );
}
