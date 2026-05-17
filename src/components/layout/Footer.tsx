export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-heading font-bold text-2xl tracking-wider text-cream">
              BRAIND
            </span>
            <p className="text-gray text-xs mt-1 tracking-widest uppercase">
              Branding Intelligence
            </p>
          </div>

          <p className="text-gray text-xs tracking-wider text-center">
            Onde marcas unem instinto com inteligência.
          </p>

          <p className="text-gray/50 text-xs">
            © {new Date().getFullYear()} BRAIND. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
