/*
 * DESIGN: Industrial Brutalism — Solution landing page template
 * Dark bg, orange accents, Barlow Condensed headlines, asymmetric layout
 */
import { useEffect, useRef } from "react";
import { CheckCircle2, ArrowRight, ChevronRight } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "wouter";

export interface SolutionData {
  id: string;
  number: string;
  icon: React.ElementType;
  label: string;
  title: string;
  tagline: string;
  quote: string;
  heroDesc: string;
  desc: string;
  stats: { value: string; label: string }[];
  features: string[];
  benefits: { title: string; desc: string }[];
  howItWorks: { step: string; title: string; desc: string }[];
  image: string;
  imageAlt: string;
  color?: string;
}

interface Props {
  solution: SolutionData;
  allSolutions: { id: string; title: string; href: string; icon: React.ElementType }[];
}

export default function SolutionPage({ solution, allSolutions }: Props) {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    const el = pageRef.current;
    if (el) el.querySelectorAll(".fade-up, .fade-in").forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, [solution.id]);

  const Icon = solution.icon;

  return (
    <div className="min-h-screen bg-[#0A0A0A]" ref={pageRef}>
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#111] to-[#0A0A0A]" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5"
          style={{ background: "radial-gradient(ellipse at top right, #F97316 0%, transparent 70%)" }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#F97316 1px, transparent 1px), linear-gradient(90deg, #F97316 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="container relative">
          {/* Breadcrumb */}
          <div className="fade-up flex items-center gap-2 mb-8 text-sm text-white/40" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/#services" className="hover:text-white/70 transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#F97316]">{solution.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="fade-up flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#F97316] flex items-center justify-center rounded-sm">
                  <Icon className="w-5 h-5 text-black" />
                </div>
                <span className="section-label text-xs">{solution.label}</span>
              </div>

              <h1
                className="fade-up text-[clamp(3rem,7vw,5.5rem)] font-900 text-white uppercase leading-[0.9] mb-4"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, transitionDelay: "100ms" }}
              >
                {solution.title}
              </h1>
              <p
                className="fade-up text-[#F97316] text-xl font-medium mb-6"
                style={{ fontFamily: "'DM Sans', sans-serif", transitionDelay: "150ms" }}
              >
                {solution.tagline}
              </p>
              <p
                className="fade-up text-white/65 text-lg leading-relaxed mb-8 max-w-lg"
                style={{ fontFamily: "'DM Sans', sans-serif", transitionDelay: "200ms" }}
              >
                {solution.heroDesc}
              </p>

              {/* Stats row */}
              <div className="fade-up flex flex-wrap gap-6 mb-10" style={{ transitionDelay: "250ms" }}>
                {solution.stats.map((stat) => (
                  <div key={stat.label}>
                    <div
                      className="text-3xl font-900 text-[#F97316]"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-white/50 text-xs uppercase tracking-wider mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="fade-up flex flex-wrap gap-3" style={{ transitionDelay: "300ms" }}>
                <a
                  href="/#contact"
                  className="btn-glow pulse-glow inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A] text-black font-semibold px-7 py-4 rounded-sm transition-all duration-200"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/#how-it-works"
                  className="inline-flex items-center gap-2 border border-white/15 text-white/70 hover:text-white hover:border-white/30 font-medium px-7 py-4 rounded-sm transition-all duration-200"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  See How It Works
                </a>
              </div>
            </div>

            {/* Right: Image */}
            <div className="fade-in relative" style={{ transitionDelay: "200ms" }}>
              <div className="relative rounded-sm overflow-hidden border border-white/8">
                <img
                  src={solution.image}
                  alt={solution.imageAlt}
                  className="w-full h-80 lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent" />
                {/* Number overlay */}
                <div
                  className="absolute bottom-4 right-4 text-[8rem] font-900 text-white/5 leading-none select-none"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
                >
                  {solution.number}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quote / Pain Point ── */}
      <section className="py-16 bg-[#111] border-y border-white/5">
        <div className="container max-w-4xl">
          <blockquote
            className="fade-up text-[clamp(1.1rem,2.5vw,1.5rem)] text-white/70 leading-relaxed italic text-center"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {solution.quote}
          </blockquote>
          <p className="fade-up text-center text-[#F97316] text-sm mt-4 uppercase tracking-widest" style={{ fontFamily: "'DM Sans', sans-serif", transitionDelay: "100ms" }}>
            Sound familiar? We built {solution.title} to fix exactly this.
          </p>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Description + features */}
            <div>
              <div className="fade-up mb-4">
                <span className="section-label">What's Included</span>
              </div>
              <h2
                className="fade-up text-[clamp(2rem,4vw,3.5rem)] font-900 text-white uppercase leading-tight mb-6"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, transitionDelay: "100ms" }}
              >
                Everything You Get With{" "}
                <span className="text-[#F97316]">{solution.title}</span>
              </h2>
              <p
                className="fade-up text-white/60 text-lg leading-relaxed mb-8"
                style={{ fontFamily: "'DM Sans', sans-serif", transitionDelay: "150ms" }}
              >
                {solution.desc}
              </p>

              <div className="fade-up grid grid-cols-1 sm:grid-cols-2 gap-3" style={{ transitionDelay: "200ms" }}>
                {solution.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-3 py-3 border-b border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0" />
                    <span className="text-white/75 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Benefits */}
            <div className="space-y-5">
              {solution.benefits.map((benefit, i) => (
                <div
                  key={benefit.title}
                  className="fade-up p-6 bg-[#111] border border-white/5 rounded-sm hover:border-[#F97316]/20 transition-colors duration-300"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#F97316]/10 border border-[#F97316]/20 flex items-center justify-center rounded-sm flex-shrink-0 mt-0.5">
                      <span className="text-[#F97316] text-xs font-700" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h3
                        className="text-white font-700 text-base mb-1 uppercase"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}
                      >
                        {benefit.title}
                      </h3>
                      <p className="text-white/55 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-24 bg-[#0D0D0D] border-t border-white/5">
        <div className="container">
          <div className="mb-14 text-center">
            <div className="fade-up mb-4">
              <span className="section-label">The Process</span>
            </div>
            <h2
              className="fade-up text-[clamp(2rem,4vw,3.5rem)] font-900 text-white uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, transitionDelay: "100ms" }}
            >
              How <span className="text-[#F97316]">{solution.title}</span> Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {solution.howItWorks.map((step, i) => (
              <div
                key={step.step}
                className="fade-up relative text-center"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 bg-[#F97316] flex items-center justify-center rounded-sm mx-auto mb-5">
                  <span
                    className="text-black font-900 text-xl"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
                  >
                    {step.step}
                  </span>
                </div>
                <h3
                  className="text-white font-700 text-lg mb-2 uppercase"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}
                >
                  {step.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {step.desc}
                </p>
                {i < solution.howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[calc(50%+2rem)] right-[calc(-50%+2rem)] h-px bg-gradient-to-r from-[#F97316]/30 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#111] border-t border-white/5">
        <div className="container text-center">
          <div className="fade-up mb-4">
            <span className="section-label">Ready to Start?</span>
          </div>
          <h2
            className="fade-up text-[clamp(2rem,5vw,4rem)] font-900 text-white uppercase mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, transitionDelay: "100ms" }}
          >
            Start Using <span className="text-[#F97316]">{solution.title}</span> Today
          </h2>
          <p
            className="fade-up text-white/55 text-lg mb-8 max-w-xl mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", transitionDelay: "150ms" }}
          >
            Join 500+ contractors who are already growing their business with AI marketing.
          </p>
          <div className="fade-up flex flex-wrap justify-center gap-4" style={{ transitionDelay: "200ms" }}>
            <a
              href="/#contact"
              className="btn-glow pulse-glow inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A] text-black font-semibold px-8 py-4 rounded-sm transition-all duration-200 text-base"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 border border-white/15 text-white/70 hover:text-white hover:border-white/30 font-medium px-8 py-4 rounded-sm transition-all duration-200 text-base"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              View All Solutions
            </Link>
          </div>
          <p className="fade-up text-white/30 text-sm mt-4" style={{ fontFamily: "'DM Sans', sans-serif", transitionDelay: "250ms" }}>
            30-day money back guarantee · Results in 30 days or less
          </p>
        </div>
      </section>

      {/* ── Other Solutions ── */}
      <section className="py-16 bg-[#0A0A0A] border-t border-white/5">
        <div className="container">
          <h3
            className="fade-up text-white/40 text-sm uppercase tracking-widest mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Explore Other Solutions
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {allSolutions.filter((s) => s.id !== solution.id).map((s, i) => {
              const SIcon = s.icon;
              return (
                <Link
                  key={s.id}
                  href={s.href}
                  className="fade-up group flex flex-col items-center gap-2 p-4 bg-[#111] border border-white/5 rounded-sm hover:border-[#F97316]/30 hover:bg-[#F97316]/5 transition-all duration-200 text-center"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <SIcon className="w-5 h-5 text-[#F97316]/60 group-hover:text-[#F97316] transition-colors" />
                  <span className="text-white/60 group-hover:text-white text-xs font-medium transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {s.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
