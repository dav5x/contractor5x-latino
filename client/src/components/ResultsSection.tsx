/*
 * DESIGN: Industrial Brutalism — Results Section (Home Page)
 * Features 4 real case study cards + animated counters + link to /results
 * Dark background, orange accents, Barlow Condensed headlines
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Star, Quote, Play } from "lucide-react";
import { caseStudies } from "@/lib/caseStudiesData";
import { Button } from "@/components/ui/button";

const bigStats = [
  { value: 420, suffix: "%", label: "Aumento Promedio de Leads", decimal: false },
  { value: 200, suffix: "+", label: "Reseñas 5 Estrellas Generadas", decimal: false },
  { value: 4.9, suffix: "★", label: "Calificación Promedio de Clientes", decimal: true },
  { value: 100, suffix: "%", label: "Tasa de Retención de Clientes", decimal: false },
];

function AnimatedCounter({ value, suffix, decimal }: { value: number; suffix: string; decimal?: boolean }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const duration = 1500;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(decimal ? Math.round(current * 10) / 10 : Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, started, decimal]);

  return (
    <div ref={ref} className="stat-number" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}>
      {decimal ? count.toFixed(1) : count}{suffix}
    </div>
  );
}

export default function ResultsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.05 }
    );
    const el = sectionRef.current;
    if (el) el.querySelectorAll(".fade-up").forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="results" className="py-24 bg-[#0A0A0A]" ref={sectionRef}>
      <div className="container">

        {/* Header */}
        <div className="mb-12">
          <div className="fade-up mb-4">
            <span className="section-label">Resultados Reales</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2
              className="fade-up text-[clamp(2.5rem,5vw,4rem)] font-900 text-white uppercase leading-tight"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, transitionDelay: "100ms" }}
            >
              A los Contractors Les Encanta{" "}
              <span className="text-[#F97316]">5X</span>
            </h2>
            <Link href="/results">
              <Button
                variant="outline"
                className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10 whitespace-nowrap fade-up"
                style={{ transitionDelay: "200ms" }}
              >
                Todos los Case Studies <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Big stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 p-8 bg-[#141414] border border-white/8 rounded-sm">
          {bigStats.map((stat, i) => (
            <div
              key={stat.label}
              className="fade-up text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} decimal={stat.decimal} />
              <div className="text-white text-base mt-2 uppercase tracking-wider" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {caseStudies.map((study, i) => (
            <Link key={study.slug} href={`/results/${study.slug}`}>
              <div
                className="fade-up group bg-[#141414] border border-white/8 hover:border-orange-500/50 rounded-sm overflow-hidden transition-all duration-300 cursor-pointer h-full"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={study.heroImage}
                    alt={study.company}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/30 to-transparent" />
                  {study.videoTestimonial && (
                    <div className="absolute top-3 right-3 bg-orange-500 rounded-full p-2">
                      <Play className="w-3 h-3 text-white fill-white" />
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-orange-500/20 border border-orange-500/40 text-orange-400 text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-widest">
                      {study.trade}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-4xl font-black uppercase text-white group-hover:text-orange-400 transition-colors leading-tight mb-2"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {study.company}
                  </h3>
                  <p className="text-white text-base mb-4 line-clamp-2">{study.tagline}</p>

                  {/* Top 2 metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {study.results.slice(0, 2).map((r, ri) => (
                      <div key={ri} className="bg-[#1A1A1A] border border-white/5 rounded-sm p-3">
                        <div
                          className="text-2xl font-black text-orange-500 leading-none mb-1"
                          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                        >
                          {r.metric}
                        </div>
                        <div className="text-white text-sm leading-tight">{r.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Quote snippet */}
                  <div className="border-l-2 border-orange-500/40 pl-3 mb-4">
                    <p className="text-white/40 text-xs italic line-clamp-2">"{study.quote}"</p>
                    <p className="text-orange-400 text-xs font-bold mt-1">— {study.ownerName}</p>
                  </div>

                  <div className="flex items-center gap-2 text-orange-400 text-sm font-bold uppercase tracking-wide group-hover:gap-4 transition-all">
                    Lee la Historia Completa <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="fade-up text-center">
          <p className="text-white text-base mb-4">¿Quieres resultados así para tu negocio de trade?</p>
          <Link href="/#contact">
            <Button className="bg-[#F97316] hover:bg-[#EA6C0A] text-white font-bold px-8 py-3">
              Empieza Ya Hoy
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}