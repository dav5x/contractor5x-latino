import React, { useState, useEffect, useRef } from "react";
import { CheckCircle2, Zap, Tag, Info, Phone, MessageSquare, Mail, Bot, Mic, Star, Workflow, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/PricingSection";

const plans = [
  {
    name: "Essentials",
    price: { monthly: 199, yearly: 159 },
    badge: null,
    tagline: "Bueno para operaciones solas con bajo presupuesto",
    subTagline: "Construye tu reputación y hazte visible localmente — sin gastar mucho.",
    jobPromoterLabel: "Bajo Volumen",
    jobPromoterPosts: "Hasta 2 posts/mes",
    credits: 10,
    features: [
      "Google Listing Optimizer",
      "Generación Automática de Reviews",
      "Respuestas a Reviews con AI",
      "2 Google Posts/Mes",
      "Monitoreo de Reputación",
      "Job Promoter — Bajo Volumen (2 posts/mes)",
      "Reporte Mensual de Rendimiento",
      "Soporte de Onboarding",
      "$20 Créditos de Uso/Mes",
    ],
    cta: "Empieza Ya",
    popular: false,
    highlight: false,
    color: "border-white/10",
  },
  {
    name: "Starter",
    price: { monthly: 299, yearly: 239 },
    badge: "La Mejor Forma de Empezar",
    tagline: "El punto inteligente para crecer como contractor",
    subTagline: "Captura leads automáticamente y empieza a aparecer online.",
    jobPromoterLabel: "Volumen Medio",
    jobPromoterPosts: "Hasta 10 posts/mes",
    credits: 20,
    features: [
      "Todo en Essentials, más:",
      "Lead Closer (CRM + Automatización)",
      "AI Agent (Llamadas & Chat)",
      "Formularios de Intake con Marca Personalizada",
      "SMS Bidireccional & Seguimiento de Llamadas",
      "Campañas por Email & SMS",
      "Job Promoter — Volumen Medio (10 posts/mes)",
      "Llamada de Revisión Bimensual",
      "$30 Créditos de Uso/Mes",
    ],
    cta: "Empieza Ya",
    popular: false,
    highlight: true,
    color: "border-sky-500/40",
  },
  {
    name: "Growth",
    price: { monthly: 499, yearly: 399 },
    badge: "El Más Popular",
    tagline: "El sistema completo de marketing con AI",
    subTagline: "Automatización total, más contenido y un smart website sin que tengas que mover un dedo.",
    jobPromoterLabel: "Volumen Alto",
    jobPromoterPosts: "Hasta 15 posts/mes + video",
    credits: 40,
    features: [
      "Todo en Starter, más:",
      "Smart Website Hands Off",
      "Re-Activator para Base de Clientes",
      "Job Promoter — Volumen Alto (15 posts/mes + video)",
      "Hasta 15 Videos/Mes",
      "Llamadas Estratégicas Quincenales",
      "Soporte Prioritario",
      "$50 Créditos de Uso/Mes",
    ],
    cta: "Empieza Ya",
    popular: true,
    highlight: false,
    color: "border-[#F97316]",
  },
  {
    name: "Dominator",
    price: { monthly: 999, yearly: 799 },
    badge: null,
    tagline: "Domina tu mercado local",
    subTagline: "Máximo rendimiento, soporte dedicado y manejo de ads pagados.",
    jobPromoterLabel: "Volumen Máximo",
    jobPromoterPosts: "Hasta 25 posts/mes + video",
    credits: 90,
    features: [
      "Todo en Growth, más:",
      "Account Manager Dedicado",
      "Entrenamiento AI Agent Personalizado",
      "SEO Avanzado & Estrategia AIO",
      "Manejo de Ads Pagados",
      "Job Promoter — Volumen Máximo (25 posts/mes + video)",
      "Hasta 25 Videos/Mes",
      "Llamadas Estratégicas Semanales",
      "Onboarding White-Glove",
      "$100 Créditos de Uso/Mes",
    ],
    cta: "Agenda una Llamada",
    popular: false,
    highlight: false,
    color: "border-white/10",
  },
  {
    name: "Elite",
    price: { monthly: 1999, yearly: 1599 },
    badge: "Dominio Total del Mercado",
    tagline: "Domina toda tu región",
    subTagline: "Multi-locación, AI customizada y marketing de nivel enterprise.",
    jobPromoterLabel: "Volumen Ilimitado",
    jobPromoterPosts: "Posts ilimitados/mes + video",
    credits: 190,
    features: [
      "Todo en Dominator, más:",
      "Manejo Multi-Locación",
      "Construcción Custom de Workflow AI",
      "Ads Pagados Avanzados (Google + Meta)",
      "Campañas de Conquista a Competidores",
      "Equipo Creativo Dedicado",
      "Job Promoter — Volumen Ilimitado",
      "Videos Ilimitados/Mes",
      "Reporte Ejecutivo Mensual",
      "$200 Créditos de Uso/Mes",
    ],
    cta: "Agenda una Llamada",
    popular: false,
    highlight: false,
    color: "border-amber-400/40",
  },
];

const usageRates = [
  { icon: Phone, category: "Llamadas Telefónicas", rows: [
    { label: "Hacer Llamadas (Outbound)", rate: "$0.0147 / min", example: "Llamada de 10 min ≈ $0.15" },
    { label: "Recibir Llamadas (Inbound)", rate: "$0.0089 / min", example: "Llamada de 10 min ≈ $0.09" },
  ]},
  { icon: MessageSquare, category: "Mensajes de Texto", rows: [
    { label: "SMS (por segmento)", rate: "$0.0087 / segmento", example: "100 textos ≈ $0.87" },
    { label: "WhatsApp", rate: "$0.0777 / mensaje", example: "100 mensajes ≈ $7.77" },
  ]},
  { icon: Mail, category: "Email Marketing", rows: [
    { label: "Email (por email enviado)", rate: "$0.0020 / email", example: "1,000 emails = $2.00" },
  ]},
  { icon: Bot, category: "Content AI", rows: [
    { label: "Generación de Texto", rate: "$0.27 / 1,000 palabras", example: "Artículo de 500 palabras ≈ $0.14" },
    { label: "Generación de Imágenes", rate: "$0.18 / imagen", example: "10 imágenes = $1.80" },
  ]},
  { icon: Workflow, category: "Automatización de Workflow (Modelos AI)", rows: [
    { label: "Procesamiento de Entrada", rate: "$1.80 / 750K palabras", example: "≈ $0.0024 por 1,000 palabras" },
    { label: "Generación de Salida", rate: "$7.20 / 750K palabras", example: "≈ $0.0096 por 1,000 palabras" },
  ]},
  { icon: Mic, category: "Conversación & Voz AI", rows: [
    { label: "Mensajes de Chat", rate: "$0.06 / mensaje", example: "50 chats ≈ $3.00" },
    { label: "Llamadas con Voz AI", rate: "$0.39 / minuto", example: "Llamada AI de 5 min = $1.95" },
  ]},
  { icon: Star, category: "Reviews AI", rows: [
    { label: "Respuestas a Reviews", rate: "$0.03 / respuesta", example: "100 respuestas = $3.00" },
  ]},
];

const faqs = [
  {
    q: "¿Qué son los créditos de uso?",
    a: "Los créditos de uso son un saldo pre-cargado en tu wallet que viene con tu plan cada mes. Cubren acciones de pago por uso como llamadas, SMS, emails y funciones con AI. Piensa en ellos como minutos en un plan telefónico — solo pagas por lo que realmente usas.",
  },
  {
    q: "¿Qué pasa si uso más créditos de los incluidos?",
    a: "Tu cuenta tiene una wallet que puedes recargar en cualquier momento. Puedes poner un saldo mínimo y reglas de recarga automática para que tu AI nunca se detenga. Siempre verás un desglose detallado de lo que se cobró.",
  },
  {
    q: "¿Puedo cambiar de plan después?",
    a: "Sí — puedes subir o bajar de plan cuando quieras. No hay contratos a largo plazo. Si subes de plan a mitad de mes, te cobramos la diferencia prorrateada.",
  },
  {
    q: "¿A qué aplica el 20% de descuento anual?",
    a: "El 20% de descuento aplica al precio base mensual cuando pagas todo el año por adelantado. Los créditos de uso y recargas se facturan aparte con las mismas tarifas por unidad.",
  },
  {
    q: "¿De verdad se quita la tarifa de setup de $500?",
    a: "Sí — por tiempo limitado, la tarifa única de onboarding y setup de $500 está completamente gratis para todas las cuentas nuevas. Nuestro equipo hace todo el setup: Google listing, configuración del AI agent, construcción del website y pipeline de leads — todo listo para ti.",
  },
  {
    q: "¿Los créditos no usados se acumulan?",
    a: "Los créditos incluidos mensualmente no se acumulan — se renuevan cada ciclo de facturación. Pero los créditos que recargas manualmente sí se acumulan mes a mes.",
  },
  {
    q: "¿Qué es un segmento SMS y por qué importa?",
    a: "Cuando envías un texto, las compañías móviles lo dividen en segmentos — pedacitos de datos usados para calcular el cobro y la entrega. Cada segmento tiene 160 caracteres si usas texto estándar (letras, números y símbolos comunes). Si usas emojis o caracteres especiales, el límite baja a 70 caracteres por segmento. Así que un mensaje largo se convierte en 2 o más segmentos, aunque para el receptor parezca un solo texto. Por ejemplo: un mensaje corto como '¡Hola, recibimos tu solicitud!' es 1 segmento. Un mensaje más largo con link y emoji puede ser 2–3 segmentos. El precio del SMS se basa en segmentos, no mensajes — por eso mantener los textos cortos y claros ayuda a estirar tus créditos. Evita emojis innecesarios, usa acortadores de links y mantén los mensajes bajo 160 caracteres cuando puedas.",
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.05 }
    );
    const el = sectionRef.current;
    if (el) el.querySelectorAll(".fade-up").forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0D0D]" ref={sectionRef}>
      <Navbar />
      <Pricing />

      {/* Usage Rates Section */}
      <section className="py-20 bg-[#111111] border-t border-white/8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="fade-up mb-4 flex justify-center">
              <span className="section-label">Paga Solo Por Lo Que Usas</span>
            </div>
            <h2
              className="fade-up text-[clamp(2rem,4vw,3.5rem)] font-900 text-white uppercase leading-tight"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, transitionDelay: "100ms" }}
            >
              Tarifas de Uso &{" "}
              <span className="text-[#F97316]">Créditos</span>
            </h2>
          <p
            className="fade-up text-white text-lg mt-4 max-w-3xl mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", transitionDelay: "200ms" }}
          >
            Para ciertas acciones — llamadas telefónicas, SMS, emails y funciones con AI — hay un pequeño cargo por uso. Cada plan incluye créditos mensuales para cubrir tu uso típico. Piénsalo como un plan telefónico: tienes un límite mensual y solo pagas extra si te pasas.
          </p>
          <a
            href="#faq"
            className="fade-up inline-flex items-center gap-1.5 mt-4 text-[#F97316] text-base font-medium hover:underline"
            style={{ fontFamily: "'DM Sans', sans-serif", transitionDelay: "250ms" }}
          >
            <ChevronDown className="w-4 h-4" />
            ¿Cómo funcionan los segmentos SMS? Mira la explicación abajo
          </a>

            {/* Credits summary */}
            <div className="fade-up mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto" style={{ transitionDelay: "300ms" }}>
              {plans.map((p) => (
                <div key={p.name} className="bg-[#141414] border border-white/8 rounded-sm p-4 text-center">
                  <div className="text-white text-sm uppercase tracking-wide mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{p.name}</div>
                  <div className="text-[#F97316] text-2xl font-bold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>${p.credits}</div>
                  <div className="text-white text-xs mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>créditos/mes</div>
                </div>
              ))}
            </div>
          </div>

          {/* Usage rates by category */}
          <div className="space-y-6">
            {usageRates.map((category, ci) => {
              const Icon = category.icon;
              return (
                <div key={ci} className="fade-up bg-[#141414] border border-white/8 rounded-sm overflow-hidden" style={{ transitionDelay: `${ci * 60}ms` }}>
                  <div className="flex items-center gap-3 px-5 py-3 bg-white/3 border-b border-white/8">
                    <Icon className="w-4 h-4 text-[#F97316]" />
                    <span className="text-white font-semibold text-sm uppercase tracking-wide" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                      {category.category}
                    </span>
                  </div>
                  <div className="divide-y divide-white/5">
                    {category.rows.map((row, ri) => (
                      <div key={ri} className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-5 py-3 gap-1">
                        <span className="text-white/70 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{row.label}</span>
                        <div className="flex items-center gap-4">
                          <span className="text-[#F97316] font-semibold text-sm font-mono">{row.rate}</span>
                          <span className="text-white/35 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>{row.example}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Usage quick facts */}
          <div className="fade-up mt-8 bg-[#F97316]/8 border border-[#F97316]/25 rounded-sm p-5">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-semibold text-sm mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>Datos Rápidos de Uso</p>
                <ul className="space-y-1 text-white/55 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  <li>• Un solo mensaje de texto puede dividirse en varios segmentos según su longitud (SMS estándar = 160 caracteres por segmento)</li>
                  <li>• El precio de automatización de workflows se basa en la cantidad de palabras procesadas para entrada y salida</li>
                  <li>• Todas las tarifas son estimaciones — la facturación real refleja el uso y se detalla en tu dashboard</li>
                  <li>• Puedes establecer un saldo mínimo en tu wallet y reglas de recarga automática para que tu AI nunca se detenga</li>
                  <li>• Los créditos recargados manualmente en la wallet se acumulan mes a mes; los créditos incluidos en el plan se renuevan mensualmente</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Comparison Table */}
      <section className="py-20 bg-[#0D0D0D] border-t border-white/8">
        <div className="max-w-6xl mx-auto px-4 mb-10">
          <div className="text-center mb-10">
            <div className="fade-up mb-4 flex justify-center">
              <span className="section-label">Comparación Lado a Lado</span>
            </div>
            <h2 className="fade-up text-[clamp(2rem,4vw,3.5rem)] font-900 text-white uppercase leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, transitionDelay: "100ms" }}>
              Compara Todos los <span className="text-[#F97316]">Planes</span>
            </h2>
          </div>

          <div className="fade-up" style={{ overflowX: "auto", position: "relative" }}>
            <table className="w-full min-w-[700px] border-collapse">
              <thead>
                <tr>
                  <th className="text-left px-4 py-3 text-white/40 text-xs uppercase tracking-widest font-medium bg-[#111111] border-b border-white/8" style={{ fontFamily: "'DM Sans', sans-serif", width: "34%" }}>Funcionalidad</th>
                  {[
                    { name: "Essentials", price: annual ? 159 : 199, popular: false, highlight: false, elite: false },
                    { name: "Starter", price: annual ? 239 : 299, popular: false, highlight: true, elite: false },
                    { name: "Growth", price: annual ? 399 : 499, popular: true, highlight: false, elite: false },
                    { name: "Dominator", price: annual ? 799 : 999, popular: false, highlight: false, elite: false },
                    { name: "Elite", price: annual ? 1599 : 1999, popular: false, highlight: false, elite: true },
                  ].map((p) => (
                    <th key={p.name} className={`text-center px-4 py-3 text-xs uppercase tracking-widest font-semibold border-b ${
                      p.popular ? "bg-[#1A1208] border-[#F97316]/40 text-[#F97316]" : p.highlight ? "bg-[#111820] border-sky-500/20 text-sky-400" : p.elite ? "bg-[#1A1500] border-amber-400/30 text-amber-400" : "bg-[#111111] border-white/8 text-white/60"
                    }`} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>
                      <div>{p.name}</div>
                      <div className="text-lg font-bold mt-0.5">${p.price}<span className="text-xs font-normal opacity-60">/mes</span></div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { category: "Job Promoter", rows: [
                    { label: "Posts Mensuales", vals: ["Hasta 2", "Hasta 10", "Hasta 15", "Hasta 25", "Ilimitados"] },
                    { label: "Posts con Video", vals: ["—", "—", "✓ Incluido", "✓ Incluido", "✓ Ilimitado"] },
                    { label: "Nivel de Volumen", vals: ["Bajo", "Medio", "Alto", "Máximo", "Ilimitado"] },
                  ]},
                  { category: "Generación de Leads", rows: [
                    { label: "Lead Closer (CRM)", vals: ["—", "✓", "✓", "✓", "✓"] },
                    { label: "Seguimiento Automático", vals: ["—", "✓", "✓", "✓", "✓"] },
                    { label: "Formularios Personalizados", vals: ["—", "✓", "✓", "✓", "✓"] },
                    { label: "SMS & Llamadas Bidireccionales", vals: ["—", "✓", "✓", "✓", "✓"] },
                  ]},
                  { category: "AI Agent", rows: [
                    { label: "AI Phone & Chat Agent", vals: ["—", "✓", "✓", "✓", "✓"] },
                    { label: "Entrenamiento AI Personalizado", vals: ["—", "—", "—", "✓", "✓ Avanzado"] },
                    { label: "Llamadas con Voz AI", vals: ["—", "✓", "✓", "✓", "✓"] },
                  ]},
                  { category: "Google & Reviews", rows: [
                    { label: "Google Listing Optimizer", vals: ["✓", "✓", "✓", "✓", "✓"] },
                    { label: "Solicitudes Automáticas de Reviews", vals: ["✓", "✓", "✓", "✓", "✓"] },
                    { label: "Respuestas a Reviews con AI", vals: ["✓", "✓", "✓", "✓", "✓"] },
                    { label: "Monitoreo de Reputación", vals: ["✓", "✓", "✓", "✓", "✓"] },
                  ]},
                  { category: "Website", rows: [
                    { label: "Smart Website (Hecho Para Ti)", vals: ["—", "—", "✓", "✓", "✓ Construcción Custom"] },
                    { label: "Estrategia SEO & AIO", vals: ["—", "—", "—", "✓ Avanzada", "✓ Enterprise"] },
                  ]},
                  { category: "Re-Activator", rows: [
                    { label: "Campañas para Clientes Pasados", vals: ["—", "—", "✓", "✓", "✓"] },
                    { label: "Campañas por Email & SMS", vals: ["—", "✓", "✓", "✓", "✓"] },
                  ]},
                  { category: "Ads Pagados", rows: [
                    { label: "Manejo de Ads Pagados", vals: ["—", "—", "—", "✓", "✓ Google + Meta"] },
                    { label: "Campañas de Conquista a Competidores", vals: ["—", "—", "—", "—", "✓"] },
                  ]},
                  { category: "Multi-Locación", rows: [
                    { label: "Manejo Multi-Locación", vals: ["—", "—", "—", "—", "✓"] },
                    { label: "Construcción Custom de Workflow AI", vals: ["—", "—", "—", "—", "✓"] },
                    { label: "Equipo Creativo Dedicado", vals: ["—", "—", "—", "—", "✓"] },
                  ]},
                  { category: "Soporte & Reportes", rows: [
                    { label: "Reporte Mensual de Rendimiento", vals: ["✓", "✓", "✓", "✓", "✓ Ejecutivo"] },
                    { label: "Soporte de Onboarding", vals: ["✓", "✓", "✓", "White-Glove", "White-Glove"] },
                    { label: "Llamadas de Revisión", vals: ["—", "Bimensual", "Quincenal", "Semanal", "Semanal"] },
                    { label: "Account Manager Dedicado", vals: ["—", "—", "—", "✓", "✓"] },
                    { label: "Soporte Prioritario", vals: ["—", "—", "✓", "✓", "✓"] },
                  ]},
                  { category: "Créditos de Uso", rows: [
                    { label: "Créditos Mensuales Incluidos", vals: ["$20", "$30", "$50", "$100", "$200"] },
                    { label: "Tarifa de Setup", vals: ["$500 GRATIS*", "$500 GRATIS*", "$500 GRATIS*", "$500 GRATIS*", "$500 GRATIS*"] },
                  ]},
                ].map((section, si) => (
                  <React.Fragment key={`section-${si}`}>
                    <tr>
                      <td colSpan={6} className="px-4 py-2 bg-white/3 border-y border-white/8">
                        <span className="text-[#F97316] text-xs font-bold uppercase tracking-widest" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{section.category}</span>
                      </td>
                    </tr>
                    {section.rows.map((row, ri) => (
                      <tr key={`row-${si}-${ri}`} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                        <td className="px-4 py-3 text-white/60 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{row.label}</td>
                        {row.vals.map((val, vi) => {
                          const isPopular = vi === 2;
                          const isHighlight = vi === 1;
                          const isCheck = val === "✓";
                          const isDash = val === "—";
                          return (
                            <td key={vi} className={`px-4 py-3 text-center text-sm ${
                              isPopular ? "bg-[#1A1208]/60" : isHighlight ? "bg-[#111820]/40" : ""
                            }`} style={{ fontFamily: "'DM Sans', sans-serif" }}>
                              {isCheck ? (
                                <CheckCircle2 className="w-4 h-4 text-[#F97316] mx-auto" />
                              ) : isDash ? (
                                <span className="text-white/20">—</span>
                              ) : (
                                <span className={`font-semibold ${
                                  val.startsWith("$") || val === "GRATIS" ? "text-[#F97316]" :
                                  val.startsWith("✓") ? "text-[#F97316]" : "text-white/70"
                                }`}>{val}</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Comparison table footnote */}
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-white/55 text-sm text-center" style={{ fontFamily: "'DM Sans', sans-serif" }}>* La tarifa de setup de $500 está gratis por tiempo limitado para todas las cuentas nuevas. La tarifa estándar de $500 aplica cuando esta promoción termina.</p>
        </div>
      </section>
      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-[#0D0D0D] border-t border-white/8">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="fade-up mb-4 flex justify-center">
              <span className="section-label">Preguntas Comunes</span>
            </div>
            <h2
              className="fade-up text-[clamp(2rem,4vw,3.5rem)] font-900 text-white uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, transitionDelay: "100ms" }}
            >
              Preguntas <span className="text-[#F97316]">Frecuentes</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="fade-up bg-[#141414] border border-white/8 rounded-sm overflow-hidden"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-white font-semibold text-lg pr-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {faq.q}
                  </span>
                  <span className={`text-[#F97316] text-xl font-bold flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4">
                    <p className="text-white text-base leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#111111] border-t border-white/8 text-center px-4">
        <div className="fade-up max-w-2xl mx-auto">
          <h2
            className="text-[clamp(2rem,4vw,3.5rem)] font-900 text-white uppercase leading-tight mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
          >
            ¿Listo para <span className="text-[#F97316]">Empezar?</span>
          </h2>
          <p className="text-white text-base mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Sin contratos a largo plazo. Garantía de devolución de dinero por 30 días. Tarifa de setup gratis — tiempo limitado.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A] text-black font-bold px-10 py-4 rounded-sm text-base transition-all duration-200 pulse-glow"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <Zap className="w-5 h-5 fill-black" />
            Empieza Hoy
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}