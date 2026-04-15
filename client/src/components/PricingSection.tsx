import { useState, useEffect, useRef } from "react";
import { CheckCircle2, Zap, Tag, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const basePlans = [
  {
    name: "Essentials",
    price: { monthly: 199, yearly: 159 },
    badge: null,
    tagline: "Perfecto para operadores solos con presupuesto ajustado",
    subTagline: "Construye tu reputación online y que te encuentren localmente.",
    jobPromoterLabel: "Low Volume",
    jobPromoterDetail: "Hasta 2 posts/mes",
    features: [
      "Google Listing Optimizer",
      "Smart Website sin esfuerzo",
      "Generación Automática de Reviews",
      "Respuestas a Reviews con AI",
      "Monitoreo de Reputación",
      "Reporte Mensual de Performance",
      "Soporte de Onboarding",
      "$10 Créditos de Uso/Mes",
    ],
    cta: "Empieza Ya",
    popular: false,
    highlight: false,
  },
  {
    name: "Starter",
    price: { monthly: 299, yearly: 239 },
    badge: "La Mejor Forma de Empezar",
    tagline: "El punto smart para contractors que quieren crecer",
    subTagline: "Captura leads automáticamente y empieza a aparecer online.",
    jobPromoterLabel: "Medium Volume",
    jobPromoterDetail: "Hasta 10 posts/mes",
    features: [
      "Todo en Essentials, más:",
      "Smart Website sin esfuerzo",
      "Lead Closer (CRM + Automatización)",
      "AI Agent (Llamadas & Chat)",
      "SMS & Call Tracking bidireccional",
      "Campañas por Email & SMS",
      "$20 Créditos de Uso/Mes",
    ],
    cta: "Empieza Ya",
    popular: false,
    highlight: true,
  },
  {
    name: "Growth",
    price: { monthly: 499, yearly: 399 },
    badge: "Más Popular",
    tagline: "El sistema completo de marketing con AI",
    subTagline: "Automatización total, más contenido y un smart website sin que tengas que mover un dedo.",
    jobPromoterLabel: "Higher Volume",
    jobPromoterDetail: "Hasta 15 posts/mes + video",
    features: [
      "Todo en Starter, más:",
      "Smart Website sin esfuerzo",
      "Re-Activator para tu base de clientes",
      "Hasta 15 videos/mes",
      "Soporte prioritario",
      "$30 Créditos de Uso/Mes",
    ],
    cta: "Empieza Ya",
    popular: true,
    highlight: false,
  },
  {
    name: "Dominator",
    price: { monthly: 999, yearly: 799 },
    badge: null,
    tagline: "Para contractors listos para dominar su mercado",
    subTagline: "Máximo output, soporte dedicado y manejo de ads pagados.",
    jobPromoterLabel: "Max Volume",
    jobPromoterDetail: "Hasta 25 posts/mes + video",
    features: [
      "Todo en Growth, más:",
      "Smart Website sin esfuerzo",
      "Account Manager dedicado",
      "Entrenamiento custom de AI Agent",
      "SEO avanzado & estrategia AIO",
      "Manejo de ads pagados",
      "Onboarding White-Glove",
      "$90 Créditos de Uso/Mes",
    ],
    cta: "Empieza Ya",
    popular: false,
    highlight: false,
  },
  {
    name: "Elite",
    price: { monthly: 1999, yearly: 1599 },
    badge: "Dominio Total del Mercado",
    tagline: "Para contractors que quieren dominar toda su región",
    subTagline: "Multi-locación, build-out custom y AI de nivel enterprise.",
    jobPromoterLabel: "Unlimited Volume",
    jobPromoterDetail: "Posts ilimitados/mes + video",
    features: [
      "Todo en Dominator, más:",
      "Smart Website sin esfuerzo",
      "Gestión multi-locación",
      "Build-out custom de workflows AI",
      "Ads pagados avanzados (Google + Meta)",
      "Campañas para conquistar competencia",
      "Equipo creativo dedicado",
      "Reporte ejecutivo mensual",
      "$190 Créditos de Uso/Mes",
    ],
    cta: "Empieza Ya",
    popular: false,
    highlight: false,
  },
];

export default function PricingSection(){
  const [annual, setAnnual] = useState(false);
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
    <section id="pricing" className="py-24 bg-[#0D0D0D] grid-pattern" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="fade-up mb-4 flex justify-center">
            <span className="section-label">Precios Simples y Transparentes</span>
          </div>
          <h2
            className="fade-up text-[clamp(2.5rem,5vw,4rem)] font-900 text-white uppercase leading-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, transitionDelay: "100ms" }}
          >
            Invierte en Tu{" "}
            <span className="text-[#F97316]">Crecimiento</span>
          </h2>
          <p
            className="fade-up text-white text-xl mt-3 max-w-2xl mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", transitionDelay: "200ms" }}
          >
            Cada plan incluye garantía de devolución de dinero por 30 días. Cancela cuando quieras.
          </p>

          {/* Monthly / Annual toggle */}
          <div className="fade-up mt-6 flex items-center justify-center gap-4" style={{ transitionDelay: "250ms" }}>
            <span
              className={`text-sm font-medium transition-colors ${!annual ? "text-white" : "text-white/40"}`}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Mensual
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${annual ? "bg-[#F97316]" : "bg-white/15"}`}
              aria-label="Toggle annual billing"
            >
              <span
                className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ${annual ? "translate-x-8" : "translate-x-1"}`}
              />
            </button>
            <span
              className={`text-sm font-medium transition-colors ${annual ? "text-white" : "text-white/40"}`}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Anual
              <span className="ml-2 bg-[#F97316]/20 text-[#F97316] text-xs font-bold px-2 py-0.5 rounded-sm">
                AHORRA 20%
              </span>
            </span>
          </div>
        </div>

        {/* Setup Fee Waived Promo Banner */}
        <div className="fade-up mb-10 max-w-5xl mx-auto" style={{ transitionDelay: "300ms" }}>
          <div className="flex items-center justify-center gap-3 bg-[#F97316]/10 border border-[#F97316]/40 rounded-sm px-6 py-4">
            <Tag className="w-5 h-5 text-[#F97316] flex-shrink-0" />
            <p className="text-center" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-[#F97316] font-bold">PROMO POR TIEMPO LIMITADO:</span>{" "}
              <span className="text-white font-medium">Setup Fee de $500</span>{" "}
              <span className="text-white/70 line-through mr-1">$500</span>
              <span className="text-[#F97316] font-bold">GRATIS</span>
              <span className="text-white ml-2 text-base">— Empieza hoy, no pagas nada para configurar.</span>
            </p>
          </div>
        </div>

        {/* Pricing cards — 5-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5 w-full mx-auto">
          {basePlans.map((plan, i) => {
            const displayPrice = annual ? plan.price.yearly : plan.price.monthly;
            return (
              <div
                key={plan.name}
                className={`fade-up relative rounded-sm p-6 flex flex-col ${
                  plan.popular
                    ? "bg-[#1A1208] border-2 border-[#F97316]"
                    : plan.highlight
                    ? "bg-[#111820] border-2 border-sky-500/40"
                    : "bg-[#141414] border border-white/8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`flex items-center gap-1.5 text-xs font-semibold px-4 py-1.5 rounded-sm whitespace-nowrap ${
                        plan.popular
                          ? "bg-[#F97316] text-black"
                          : "bg-sky-500 text-white"
                      }`}
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {plan.popular && <Zap className="w-3 h-3 fill-black" />}
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan name + tagline */}
                <div className="mb-4">
                  <h3
                    className="text-white font-700 text-2xl uppercase mb-1"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-[#F97316] text-sm font-semibold uppercase tracking-wide mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {plan.tagline}
                  </p>
                  <p className="text-white text-sm leading-snug" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {plan.subTagline}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-4 pb-4 border-b border-white/10">
                  <div className="flex items-end gap-1">
                    <span className="text-white text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>$</span>
                    <span
                      className="text-5xl font-500 text-white transition-all duration-300"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {displayPrice}
                    </span>
                    <span className="text-white text-sm mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>/mo</span>
                  </div>
                  {annual && (
                    <div className="mt-0.5 text-white text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Facturado anualmente · antes ${plan.price.monthly}/mo
                    </div>
                  )}
                  {/* Setup fee waived inline note */}
                  <div className="mt-1.5 flex items-center gap-1.5">
                    <span className="text-white text-xs line-through" style={{ fontFamily: "'DM Sans', sans-serif" }}>+$500 setup</span>
                    <span className="text-[#F97316] text-xs font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>GRATIS</span>
                  </div>
                </div>

                {/* Job Promoter volume badge */}
                <div className="mb-4 flex items-center gap-2 bg-white/4 border border-white/8 rounded-sm px-3 py-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F97316] flex-shrink-0" />
                  <div>
                    <div className="text-[#F97316] text-xs font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Job Promoter — {plan.jobPromoterLabel}
                    </div>
                    <div className="text-white/45 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {plan.jobPromoterDetail}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-2 mb-6 flex-1">
                  {plan.features
                    .filter((f) => !f.toLowerCase().includes("job promoter"))
                    .map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            plan.popular ? "text-[#F97316]" : "text-[#F97316]/60"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            feature.startsWith("Everything")
                              ? "text-[#F97316] font-medium"
                              : "text-white"
                          }`}
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`w-full text-center py-3.5 rounded-sm font-semibold text-sm transition-all duration-200 ${
                    plan.popular
                      ? "bg-[#F97316] hover:bg-[#EA6C0A] text-black pulse-glow"
                      : plan.highlight
                      ? "bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/40 hover:border-sky-500/60"
                      : "bg-white/8 hover:bg-white/12 text-white border border-white/15 hover:border-white/25"
                  }`}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom note + link to full pricing page */}
        <div className="mt-10 text-center fade-up flex flex-col items-center gap-4" style={{ transitionDelay: "500ms" }}>
          <p className="text-white text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Todos los planes incluyen soporte de onboarding · Sin contratos largos · Cancela cuando quieras
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-[#F97316] hover:text-white border border-[#F97316]/40 hover:border-[#F97316] hover:bg-[#F97316]/10 text-sm font-semibold px-6 py-2.5 rounded-sm transition-all duration-200"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Ver Detalles Completos & Comparar Todas las Features
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}