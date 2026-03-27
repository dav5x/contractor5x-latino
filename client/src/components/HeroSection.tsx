/*
 * DESIGN: Industrial Brutalism — Full-bleed hero, left-heavy asymmetric layout
 * Dark overlay on contractor photo, bold Barlow Condensed headline, orange accents
 */
import { useEffect, useRef } from "react";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485111386/DggHMYqYmKSoMpB2pB5sTZ/hero-bg-c4hcCPQ7mQ9RraSGaCj6Hh.webp";

const stats = [
  { value: "5X", label: "Average Revenue Growth" },
  { value: "78%", label: "More Leads Closed" },
  { value: "24/7", label: "AI Works For You" },
];

const badges = [
  "No credit card required",
  "14-day free trial",
  "Setup in under 10 minutes",
];

export default function HeroSection() {
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const el = headlineRef.current;
    if (el) {
      el.querySelectorAll(".fade-up, .fade-in").forEach((child) => {
        observer.observe(child);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Dark overlay — gradient from left */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/30" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container relative z-10 pt-28 pb-20" ref={headlineRef}>
        <div className="max-w-3xl">
          {/* Section label */}
          <div className="fade-up mb-6">
            <span className="section-label">
              <span className="w-1.5 h-1.5 bg-[#F97316] rounded-full inline-block" />
              AI Marketing For The Trades — 2026
            </span>
          </div>

          {/* Main headline */}
          <div className="fade-up" style={{ transitionDelay: "100ms" }}>
            <h1
              className="text-[clamp(3rem,8vw,6.5rem)] leading-[0.9] font-900 text-white uppercase mb-2"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
            >
              MULTIPLY YOUR
            </h1>
            <h1
              className="text-[clamp(3rem,8vw,6.5rem)] leading-[0.9] font-900 uppercase mb-6"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
            >
              <span className="text-[#F97316]">RESULTS 5X</span>
            </h1>
          </div>

          {/* Subheadline */}
          <div className="fade-up" style={{ transitionDelay: "200ms" }}>
            <p
              className="text-lg md:text-xl text-white/75 max-w-xl leading-relaxed mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              We deploy a team of AI agents inside your trade business — handling leads, 
              showcasing your work, and filling your pipeline while you focus on the job site.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="fade-up flex flex-wrap gap-4 mb-10" style={{ transitionDelay: "300ms" }}>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-glow pulse-glow bg-[#F97316] hover:bg-[#EA6C0A] text-black font-semibold px-7 py-4 rounded-sm transition-all duration-200 flex items-center gap-2 text-base"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Book a Free 15-Min Demo
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors px-4 py-4 border border-white/15 hover:border-white/30 rounded-sm"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
              </div>
              <span className="text-sm font-medium">See How It Works</span>
            </a>
          </div>

          {/* Trust badges */}
          <div className="fade-up flex flex-wrap gap-4" style={{ transitionDelay: "400ms" }}>
            {badges.map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-sm text-white/60">
                <CheckCircle2 className="w-4 h-4 text-[#F97316]" />
                <span style={{ fontFamily: "'DM Sans', sans-serif" }}>{badge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar — bottom of hero */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="grid grid-cols-3 gap-8 max-w-2xl">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="fade-up"
                style={{ transitionDelay: `${500 + i * 100}ms` }}
              >
                <div
                  className="stat-number"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs text-white/50 mt-1 uppercase tracking-wider"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom diagonal fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </section>
  );
}
