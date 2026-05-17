"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Filosofia", href: "#filosofia" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Cases", href: "#cases" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 80], [0, 1]);

  // Trava o scroll quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  function close() {
    setMenuOpen(false);
  }

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <motion.div
          style={{ opacity, backgroundColor: "rgba(8,20,40,0.92)" }}
          className="absolute inset-0 backdrop-blur-md border-b border-white/5"
        />

        <div className="relative max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={close}
            className="font-heading font-bold text-xl tracking-wider transition-colors duration-300"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif", color: "#F5F3EE" }}
          >
            BRAIND
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-wider uppercase font-medium transition-colors duration-300"
                style={{ color: "#8A8A8A" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F3EE")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8A8A8A")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contato"
            className="hidden md:inline-flex items-center px-5 py-2.5 border text-xs tracking-[0.15em] uppercase font-heading font-medium transition-all duration-300"
            style={{
              borderColor: "rgba(201,162,39,0.4)",
              color: "#C9A227",
              fontFamily: "var(--font-space-grotesk), sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#C9A227";
              e.currentTarget.style.color = "#081428";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#C9A227";
            }}
          >
            Diagnóstico
          </a>

          {/* Hamburger button (mobile only) */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] relative z-50"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-6 h-px origin-center"
              style={{ backgroundColor: "#F5F3EE" }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-px origin-center"
              style={{ backgroundColor: "#F5F3EE" }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-6 h-px origin-center"
              style={{ backgroundColor: "#F5F3EE" }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col pt-24 px-8 pb-12 md:hidden"
            style={{ backgroundColor: "#081428" }}
          >
            {/* Nav links */}
            <nav className="flex flex-col gap-2 flex-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="font-heading font-bold text-4xl py-4 border-b transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    color: "#F5F3EE",
                    borderColor: "rgba(255,255,255,0.06)",
                  }}
                  onTouchStart={(e) => (e.currentTarget.style.color = "#C9A227")}
                  onTouchEnd={(e) => (e.currentTarget.style.color = "#F5F3EE")}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Bottom CTA */}
            <motion.a
              href="#contato"
              onClick={close}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="mt-8 w-full py-5 text-center text-sm tracking-[0.15em] uppercase font-heading font-bold"
              style={{
                backgroundColor: "#C9A227",
                color: "#081428",
                fontFamily: "var(--font-space-grotesk), sans-serif",
              }}
            >
              Agendar diagnóstico
            </motion.a>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-center text-xs tracking-[0.25em] uppercase"
              style={{ color: "#3A3A3A" }}
            >
              Onde marcas unem instinto com inteligência.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
