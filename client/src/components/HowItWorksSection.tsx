/*
 * DESIGN: Industrial Brutalism — Large numbered steps, orange connecting line, dark bg
 */
import { useEffect, useRef } from "react";
import { Upload, TrendingUp, Settings, DollarSign } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Ponemos Tu Negocio en Marcha",
    desc: "Nuestro equipo configura tus AI agents, optimiza tu Google listing, crea tu website y arma tu lead pipeline — todo listo para ti en menos de una semana.",
  },
  {
    number: "02",
    icon: Settings,
    title: "El AI Trabaja 24/7",
    desc: "Tu equipo de AI contesta llamadas, responde leads, publica tu trabajo en social media y mantiene a tus clientes pasados activos — todo automático, todo el tiempo.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Los Leads Llegan Consistentemente",
    desc: "Tu ranking en Google sube, tu presencia online crece, y los leads calificados vienen a ti en vez de que tú los persigas.",
  },
  {
    number: "04",
    icon: DollarSign,
    title: "Cierras Más y Ganas Más",
    desc: "Cuando un lead está caliente, te notificamos. Tú entras, cierras el trato y vuelves a lo que te gusta — entregar trabajo excepcional.",
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    const el = sectionRef.current;
    if (el) el.querySelectorAll(".fade-up").forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="py-24 bg-[#0D0D0D]" ref={sectionRef}>
      <div className="container">
        <div className="mb-16">
          <div className="fade-up mb-4">
            <span className="section-label">Proceso Simple</span>
          </div>
          <h2
            className="fade-up text-[clamp(2.5rem,5vw,4rem)] font-900 text-white uppercase leading-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, transitionDelay: "100ms" }}
          >
            Listo y Funcionando en{" "}
            <span className="text-[#F97316]">Menos de Una Semana</span>
          </h2>
          <p
            className="fade-up text-white/60 text-lg mt-3 max-w-xl"
            style={{ fontFamily: "'DM Sans', sans-serif", transitionDelay: "200ms" }}
          >
            No necesitas skills técnicas. Nuestro equipo se encarga de todo — tú solo llegas y haces buen trabajo.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[calc(12.5%-1px)] right-[calc(12.5%-1px)] h-px bg-gradient-to-r from-transparent via-[#F97316]/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="fade-up relative"
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {/* Step number + icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="relative">
                      <div className="w-12 h-12 bg-[#F97316] flex items-center justify-center rounded-sm">
                        <Icon className="w-5 h-5 text-black" />
                      </div>
                    </div>
                    <span
                      className="text-4xl font-900 text-white/10 select-none"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3
                    className="text-white font-700 text-xl mb-3 uppercase"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-white/55 text-sm leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {step.desc}
                  </p>

                  {/* Connector arrow (mobile) */}
                  {i < steps.length - 1 && (
                    <div className="lg:hidden mt-6 flex justify-center">
                      <div className="w-px h-8 bg-[#F97316]/30" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center fade-up" style={{ transitionDelay: "600ms" }}>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-glow pulse-glow inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A] text-black font-semibold px-8 py-4 rounded-sm transition-all duration-200 text-base"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Empieza Ya — Demo Gratis
          </a>
          <p className="text-white/40 text-sm mt-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Garantía de 30 días o te devolvemos tu dinero · Resultados en 30 días o menos
          </p>
        </div>
      </div>
    </section>
  );
}