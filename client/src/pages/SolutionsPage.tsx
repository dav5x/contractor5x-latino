/*
 * DESIGN: Industrial Brutalism — Solutions overview page
 */
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { solutionsData } from "@/lib/solutionsData";

export default function SolutionsPage() {
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
    if (el) el.querySelectorAll(".fade-up").forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A]" ref={pageRef}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#F97316 1px, transparent 1px), linear-gradient(90deg, #F97316 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="container relative text-center">
          <div className="fade-up mb-4">
            <span className="section-label">AI-Powered Solutions</span>
          </div>
          <h1
            className="fade-up text-[clamp(3rem,7vw,5.5rem)] font-900 text-white uppercase leading-[0.9] mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, transitionDelay: "100ms" }}
          >
            Six Tools. One <span className="text-[#F97316]">Mission.</span>
          </h1>
          <p
            className="fade-up text-white/60 text-xl max-w-2xl mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", transitionDelay: "150ms" }}
          >
            Every solution is built specifically for trade contractors — designed to fill your pipeline, protect your reputation, and grow your revenue without adding to your workload.
          </p>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionsData.map((solution, i) => {
              const Icon = solution.icon;
              return (
                <Link
                  key={solution.id}
                  href={`/solutions/${solution.id}`}
                  className="fade-up group relative p-8 bg-[#111] border border-white/5 rounded-sm hover:border-[#F97316]/30 hover:bg-[#F97316]/3 transition-all duration-300 flex flex-col"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-[#F97316]/10 border border-[#F97316]/20 flex items-center justify-center rounded-sm group-hover:bg-[#F97316] group-hover:border-[#F97316] transition-all duration-300">
                      <Icon className="w-5 h-5 text-[#F97316] group-hover:text-black transition-colors duration-300" />
                    </div>
                    <span
                      className="text-5xl font-900 text-white/5 group-hover:text-white/10 transition-colors"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
                    >
                      {solution.number}
                    </span>
                  </div>

                  <span className="text-[#F97316]/70 text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {solution.label}
                  </span>
                  <h2
                    className="text-white font-900 text-2xl uppercase mb-3 group-hover:text-[#F97316] transition-colors duration-300"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
                  >
                    {solution.title}
                  </h2>
                  <p className="text-white/55 text-sm leading-relaxed mb-6 flex-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {solution.tagline}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-6">
                    {solution.stats.slice(0, 2).map((stat) => (
                      <div key={stat.label}>
                        <div className="text-xl font-900 text-[#F97316]" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}>
                          {stat.value}
                        </div>
                        <div className="text-white/40 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-[#F97316] text-sm font-medium group-hover:gap-3 transition-all duration-200" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#111] border-t border-white/5">
        <div className="container text-center">
          <h2
            className="fade-up text-[clamp(2rem,5vw,4rem)] font-900 text-white uppercase mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
          >
            Ready to <span className="text-[#F97316]">Get Started?</span>
          </h2>
          <p className="fade-up text-white/55 text-lg mb-8 max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif", transitionDelay: "100ms" }}>
            All six solutions work together as one unified AI marketing system for your trade business.
          </p>
          <a
            href="/#contact"
            className="fade-up btn-glow pulse-glow inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A] text-black font-semibold px-8 py-4 rounded-sm transition-all duration-200 text-base"
            style={{ fontFamily: "'DM Sans', sans-serif", transitionDelay: "150ms" }}
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
