/*
 * DESIGN: Industrial Brutalism — Dark sticky nav, orange CTA
 * Mega menus: Solutions (6 tools), Learn (blog categories), Trades (12 trades)
 */
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Zap, Camera, Bot, Globe, RefreshCw, Star, BookOpen, ArrowRight, Wrench } from "lucide-react";
import { Link, useLocation } from "wouter";
import { tradesData } from "@/lib/tradesData";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485111386/DggHMYqYmKSoMpB2pB5sTZ/contractor5x-real-logo_be9501fc.png";

const solutions = [
  { id: "lead-closer", title: "Lead Closer", label: "24/7 Sales Machine", icon: Zap, href: "/solutions/lead-closer" },
  { id: "job-promoter", title: "Job Promoter", label: "Visual Content Engine", icon: Camera, href: "/solutions/job-promoter" },
  { id: "ai-agent", title: "AI Agent", label: "Never Miss a Call", icon: Bot, href: "/solutions/ai-agent" },
  { id: "smart-website", title: "Smart Website", label: "Done-For-You Website", icon: Globe, href: "/solutions/smart-website" },
  { id: "reactivator", title: "Re-Activator", label: "Win Back Past Customers", icon: RefreshCw, href: "/solutions/reactivator" },
  { id: "google-optimizer", title: "Google Optimizer", label: "Dominate Local Search", icon: Star, href: "/solutions/google-optimizer" },
];

const learnLinks = [
  { label: "All Articles", href: "/learn", desc: "Browse all contractor guides" },
  { label: "Lead Generation", href: "/learn?cat=Lead+Generation", desc: "Get more leads, close more jobs" },
  { label: "Google & Reviews", href: "/learn?cat=Google+%26+Reviews", desc: "Rank higher, get more reviews" },
  { label: "AI Marketing", href: "/learn?cat=AI+Marketing", desc: "How AI is changing the trades" },
  { label: "Business Growth", href: "/learn?cat=Business+Growth", desc: "Scale your trade business" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const [tradesOpen, setTradesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileLearnOpen, setMobileLearnOpen] = useState(false);
  const [mobileTradesOpen, setMobileTradesOpen] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const learnRef = useRef<HTMLDivElement>(null);
  const tradesRef = useRef<HTMLDivElement>(null);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (solutionsRef.current && !solutionsRef.current.contains(e.target as Node)) setSolutionsOpen(false);
      if (learnRef.current && !learnRef.current.contains(e.target as Node)) setLearnOpen(false);
      if (tradesRef.current && !tradesRef.current.contains(e.target as Node)) setTradesOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSolutionsOpen(false);
    setLearnOpen(false);
    setTradesOpen(false);
  }, [location]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      if (location !== "/") { window.location.href = "/" + href; return; }
      const el = document.querySelector(href);
      if (el) { el.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); }
    }
  };

  const closeAll = () => { setSolutionsOpen(false); setLearnOpen(false); setTradesOpen(false); };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/40" : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img src={LOGO_URL} alt="Contractor5x" className="h-9 md:h-11 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Solutions mega menu */}
            <div className="relative" ref={solutionsRef}>
              <button
                onClick={() => { setSolutionsOpen(!solutionsOpen); setLearnOpen(false); setTradesOpen(false); }}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${solutionsOpen ? "text-[#F97316]" : "text-white/70 hover:text-white"}`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Solutions
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? "rotate-180 text-[#F97316]" : ""}`} />
              </button>

              {solutionsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[640px] bg-[#0D0D0D] border border-white/10 shadow-2xl shadow-black/60 rounded-sm overflow-hidden">
                  <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
                    <div>
                      <p className="text-white text-sm uppercase font-black" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>AI Marketing Solutions</p>
                      <p className="text-white/40 text-xs mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>Six tools built specifically for trade contractors</p>
                    </div>
                    <Link href="/solutions" onClick={closeAll} className="text-[#F97316] text-xs font-medium flex items-center gap-1 hover:gap-2 transition-all duration-200" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      View All <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-px bg-white/5 p-px">
                    {solutions.map((sol) => {
                      const Icon = sol.icon;
                      return (
                        <Link key={sol.id} href={sol.href} onClick={closeAll} className="group flex items-start gap-3 p-4 bg-[#0D0D0D] hover:bg-[#F97316]/5 transition-colors duration-200">
                          <div className="w-8 h-8 bg-[#F97316]/10 border border-[#F97316]/15 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#F97316] group-hover:border-[#F97316] transition-all duration-200">
                            <Icon className="w-4 h-4 text-[#F97316] group-hover:text-black transition-colors duration-200" />
                          </div>
                          <div>
                            <p className="text-white text-sm font-black uppercase group-hover:text-[#F97316] transition-colors duration-200" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{sol.title}</p>
                            <p className="text-white/40 text-xs mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{sol.label}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="px-6 py-3 bg-[#F97316]/5 border-t border-[#F97316]/10 flex items-center justify-between">
                    <p className="text-white/40 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>All solutions work together as one unified system</p>
                    <a href="/#contact" onClick={closeAll} className="bg-[#F97316] hover:bg-[#EA6C0A] text-black text-xs font-semibold px-4 py-2 rounded-sm transition-colors duration-200" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Get Started
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Learn dropdown */}
            <div className="relative" ref={learnRef}>
              <button
                onClick={() => { setLearnOpen(!learnOpen); setSolutionsOpen(false); setTradesOpen(false); }}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${learnOpen ? "text-[#F97316]" : "text-white/70 hover:text-white"}`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Learn
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${learnOpen ? "rotate-180 text-[#F97316]" : ""}`} />
              </button>

              {learnOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-[#0D0D0D] border border-white/10 shadow-2xl shadow-black/60 rounded-sm overflow-hidden">
                  <div className="px-5 py-3 border-b border-white/5">
                    <p className="text-white text-sm uppercase font-black flex items-center gap-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                      <BookOpen className="w-4 h-4 text-[#F97316]" /> The Contractor's Playbook
                    </p>
                    <p className="text-white/40 text-xs mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>Practical guides for trade business owners</p>
                  </div>
                  <div className="py-2">
                    {learnLinks.map((link) => (
                      <Link key={link.href} href={link.href} onClick={closeAll} className="group flex flex-col px-5 py-3 hover:bg-[#F97316]/5 transition-colors duration-200">
                        <span className="text-white/80 text-sm font-medium group-hover:text-[#F97316] transition-colors duration-200" style={{ fontFamily: "'DM Sans', sans-serif" }}>{link.label}</span>
                        <span className="text-white/35 text-xs mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{link.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Trades mega menu */}
            <div className="relative" ref={tradesRef}>
              <button
                onClick={() => { setTradesOpen(!tradesOpen); setSolutionsOpen(false); setLearnOpen(false); }}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${tradesOpen ? "text-[#F97316]" : "text-white/70 hover:text-white"}`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Trades
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${tradesOpen ? "rotate-180 text-[#F97316]" : ""}`} />
              </button>

              {tradesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[720px] bg-[#0D0D0D] border border-white/10 shadow-2xl shadow-black/60 rounded-sm overflow-hidden">
                  <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
                    <div>
                      <p className="text-white text-sm uppercase font-black" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Trades We Serve</p>
                      <p className="text-white/40 text-xs mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>AI marketing tailored to your specific trade</p>
                    </div>
                    <Link href="/trades" onClick={closeAll} className="text-[#F97316] text-xs font-medium flex items-center gap-1 hover:gap-2 transition-all duration-200" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      View All Trades <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-3 gap-px bg-white/5 p-px">
                    {tradesData.map((trade) => (
                      <Link key={trade.id} href={`/trades/${trade.id}`} onClick={closeAll} className="group flex items-center gap-3 p-4 bg-[#0D0D0D] hover:bg-[#F97316]/5 transition-colors duration-200">
                        <span className="text-xl flex-shrink-0">{trade.icon}</span>
                        <div>
                          <p className="text-white text-sm font-black uppercase group-hover:text-[#F97316] transition-colors duration-200" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{trade.name}</p>
                          <p className="text-white/35 text-xs mt-0.5 leading-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>{trade.tagline}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="px-6 py-3 bg-[#F97316]/5 border-t border-[#F97316]/10 flex items-center justify-between">
                    <p className="text-white/40 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>Don't see your trade? We work with all local service businesses.</p>
                    <a href="/#contact" onClick={closeAll} className="bg-[#F97316] hover:bg-[#EA6C0A] text-black text-xs font-semibold px-4 py-2 rounded-sm transition-colors duration-200" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Get Started
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Static links */}
            <a
              href="/pricing"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Pricing
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://contractor5x.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white/70 hover:text-white transition-colors px-3 py-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Login
            </a>
            <a href="/#contact" onClick={(e) => scrollToSection(e, "#contact")} className="bg-[#F97316] hover:bg-[#EA6C0A] text-black font-semibold text-sm px-5 py-2.5 rounded-sm transition-all duration-200 flex items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Get Started
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A0A0A]/98 backdrop-blur-md border-t border-white/5 max-h-[80vh] overflow-y-auto">
          <div className="container py-4 flex flex-col gap-1">
            {/* Solutions accordion */}
            <button onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)} className="flex items-center justify-between text-base font-medium text-white/80 hover:text-[#F97316] transition-colors py-3 border-b border-white/5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Solutions
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSolutionsOpen ? "rotate-180 text-[#F97316]" : ""}`} />
            </button>
            {mobileSolutionsOpen && (
              <div className="pl-4 pb-2 space-y-1">
                {solutions.map((sol) => {
                  const Icon = sol.icon;
                  return (
                    <Link key={sol.id} href={sol.href} onClick={() => setMenuOpen(false)} className="flex items-center gap-3 py-2.5 text-white/65 hover:text-[#F97316] transition-colors">
                      <Icon className="w-4 h-4 text-[#F97316]/60" />
                      <span className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{sol.title}</span>
                    </Link>
                  );
                })}
                <Link href="/solutions" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 py-2 text-[#F97316] text-sm font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  View All Solutions <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}

            {/* Learn accordion */}
            <button onClick={() => setMobileLearnOpen(!mobileLearnOpen)} className="flex items-center justify-between text-base font-medium text-white/80 hover:text-[#F97316] transition-colors py-3 border-b border-white/5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Learn
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileLearnOpen ? "rotate-180 text-[#F97316]" : ""}`} />
            </button>
            {mobileLearnOpen && (
              <div className="pl-4 pb-2 space-y-1">
                {learnLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block py-2.5 text-sm text-white/65 hover:text-[#F97316] transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Trades accordion */}
            <button onClick={() => setMobileTradesOpen(!mobileTradesOpen)} className="flex items-center justify-between text-base font-medium text-white/80 hover:text-[#F97316] transition-colors py-3 border-b border-white/5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Trades
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileTradesOpen ? "rotate-180 text-[#F97316]" : ""}`} />
            </button>
            {mobileTradesOpen && (
              <div className="pl-4 pb-2 space-y-1">
                {tradesData.map((trade) => (
                  <Link key={trade.id} href={`/trades/${trade.id}`} onClick={() => setMenuOpen(false)} className="flex items-center gap-3 py-2.5 text-white/65 hover:text-[#F97316] transition-colors">
                    <span className="text-base">{trade.icon}</span>
                    <span className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{trade.name}</span>
                  </Link>
                ))}
                <Link href="/trades" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 py-2 text-[#F97316] text-sm font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  View All Trades <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}

            <Link href="/pricing" onClick={() => setMenuOpen(false)} className="text-base font-medium text-white/80 hover:text-[#F97316] transition-colors py-3 border-b border-white/5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Pricing
            </Link>

            <a href="/#contact" onClick={(e) => { scrollToSection(e, "#contact"); setMenuOpen(false); }} className="mt-4 bg-[#F97316] text-black font-semibold text-sm px-5 py-3 rounded-sm text-center" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
