/*
 * DESIGN: Industrial Brutalism — Dark sticky nav, Barlow Condensed logo, orange CTA
 */
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[#F97316] flex items-center justify-center rounded-sm">
              <Zap className="w-4 h-4 text-black fill-black" />
            </div>
            <span
              className="font-display text-2xl font-900 tracking-tight text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
            >
              CONTRACTOR<span className="text-[#F97316]">5X</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 orange-underline"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://contractor5x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors px-3 py-2"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Login
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="btn-glow pulse-glow bg-[#F97316] hover:bg-[#EA6C0A] text-black font-semibold text-sm px-5 py-2.5 rounded-sm transition-all duration-200 flex items-center gap-2"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Book Free Demo
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A0A0A]/98 backdrop-blur-md border-t border-white/5">
          <div className="container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-white/80 hover:text-[#F97316] transition-colors py-3 border-b border-white/5"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="mt-4 bg-[#F97316] text-black font-semibold text-sm px-5 py-3 rounded-sm text-center"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Book Free Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
