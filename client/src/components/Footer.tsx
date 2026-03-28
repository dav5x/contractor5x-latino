/*
 * DESIGN: Industrial Brutalism — Dark footer with orange logo, clean link columns
 */
import LogoLatino from "./LogoLatino";

const footerLinks = {
  Product: [
    { label: "Lead Closer", href: "#services" },
    { label: "Job Promoter", href: "#services" },
    { label: "AI Agent", href: "#services" },
    { label: "Smart Website", href: "#services" },
    { label: "Re-Activator", href: "#services" },
    { label: "Google Optimizer", href: "#services" },
  ],
  Company: [
    { label: "Sobre Nosotros", href: "#" },
    { label: "Cómo Funciona", href: "#how-it-works" },
    { label: "Precios", href: "#pricing" },
    { label: "Blog", href: "#" },
    { label: "Contacto", href: "#contact" },
  ],
  Industries: [
    { label: "HVAC", href: "#industries" },
    { label: "Plomería", href: "#industries" },
    { label: "Eléctrico", href: "#industries" },
    { label: "Contratista General", href: "#industries" },
    { label: "Roofing", href: "#industries" },
    { label: "Todos los Trades", href: "#industries" },
  ],
  Legal: [
    { label: "Política de Privacidad", href: "#" },
    { label: "Términos de Servicio", href: "#" },
    { label: "Política de Cookies", href: "#" },
  ],
};

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#080808] border-t border-white/5">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <LogoLatino heightClass="h-10" />
            </div>
            <p
              className="text-white/45 text-sm leading-relaxed mb-6 max-w-xs"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Ayudando a las compañías locales de trades a implementar soluciones de marketing con AI que liberan su carga de trabajo y les ayudan a atraer mejores jobs.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-white/40 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                500+ contractors creciendo con nosotros
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="text-white font-600 text-sm uppercase tracking-wider mb-4"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600 }}
              >
                {category === "Product" ? "Producto" : category === "Company" ? "Compañía" : category === "Industries" ? "Industrias" : category === "Legal" ? "Legal" : category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-white/45 hover:text-[#F97316] text-sm transition-colors duration-200"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-white/30 text-xs"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            © 2026 Contractor5x. Todos los derechos reservados. AI Marketing Para Los Trades.
          </p>
          <div className="flex items-center gap-1">
            <span className="text-white/20 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Hecho con
            </span>
            <span className="text-[#F97316] text-xs">♥</span>
            <span className="text-white/20 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              para contractors everywhere
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}