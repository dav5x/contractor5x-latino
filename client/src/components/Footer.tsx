/*
 * DESIGN: Industrial Brutalism — Dark footer with orange logo, clean link columns
 */
const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485111386/DggHMYqYmKSoMpB2pB5sTZ/contractor5x-real-logo_be9501fc.png";

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
    { label: "About Us", href: "#" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  Industries: [
    { label: "HVAC", href: "#industries" },
    { label: "Plumbing", href: "#industries" },
    { label: "Electrical", href: "#industries" },
    { label: "General Contracting", href: "#industries" },
    { label: "Roofing", href: "#industries" },
    { label: "All Trades", href: "#industries" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
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
              <img
                src={LOGO_URL}
                alt="Contractor5x"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p
              className="text-white/45 text-sm leading-relaxed mb-6 max-w-xs"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Helping local trade companies implement AI marketing solutions that free up 
              their workload and help them attract better jobs.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-white/40 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                500+ contractors growing with us
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
                {category}
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
            © 2026 Contractor5x. All rights reserved. AI Marketing For The Trades.
          </p>
          <div className="flex items-center gap-1">
            <span className="text-white/20 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Built with
            </span>
            <span className="text-[#F97316] text-xs">♥</span>
            <span className="text-white/20 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              for contractors everywhere
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
