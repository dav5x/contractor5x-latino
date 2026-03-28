/*
 * DESIGN: Industrial Brutalism — Tabbed services with large feature numbers, orange accents
 * Alternating text/image layout for each service
 */
import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import {
  Zap,
  Camera,
  Bot,
  Globe,
  RefreshCw,
  Star,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

const AI_DASHBOARD = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485111386/DggHMYqYmKSoMpB2pB5sTZ/ai-dashboard-ZQvQg4K9jvT4urMpz8tHsh.webp";
const LEAD_CLOSER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485111386/DggHMYqYmKSoMpB2pB5sTZ/lead-closer-2mGVu2toi2ThpCWjbnyWaU.webp";
const CONTRACTOR_WORK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485111386/DggHMYqYmKSoMpB2pB5sTZ/contractor-work-n3H8tibW5po8kuFCJYpTqK.webp";
const GOOGLE_REVIEWS = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485111386/DggHMYqYmKSoMpB2pB5sTZ/google-reviews-NjJWK5X2ixFWSDXEKDaQGJ.webp";

const services = [
  {
    id: "lead-closer",
    number: "01",
    icon: Zap,
    label: "Tu Máquina de Ventas 24/7",
    title: "Lead Closer",
    tagline: "Nunca pierdas un lead a la competencia otra vez.",
    quote:
      '"Estás en un job site, cubierto de polvo de drywall, y tu teléfono vibra con 3 nuevas solicitudes de cotización. Para cuando llegas a casa, esos leads ya llamaron a tu competencia."',
    desc: "Lead Closer responde al instante, califica leads y los mantiene calientes hasta que estés listo para cerrar. Tu pipeline se mantiene lleno mientras tú haces el trabajo que amas.",
    stats: [
      { value: "78%", label: "de los leads van al primer respondedor" },
      { value: "5 min", label: "tiempo óptimo de respuesta" },
      { value: "3X", label: "más conversiones" },
    ],
    features: [
      "Smart Pipeline Dashboard",
      "Custom Branded Intake Forms",
      "Two-way SMS & Call Tracking",
      "Automated Drip Campaigns",
      "Set-and-Forget Workflows",
      "Email & SMS Outreach",
    ],
    image: LEAD_CLOSER,
    imageAlt: "Contratista revisando leads en el teléfono en el job site",
  },
  {
    id: "job-promoter",
    number: "02",
    icon: Camera,
    label: "Tu Trabajo Habla — Nosotros Lo Hacemos Sonar",
    title: "Job Promoter",
    tagline: "Tu craftsmanship finalmente recibe la atención que merece.",
    quote:
      '"Tu Instagram está vacío. Tu website muestra trabajos de hace 3 años. Mientras tanto, un competidor con la mitad de tu skill está cerrando jobs porque se ve más profesional online."',
    desc: "Capturamos tu mejor trabajo con lookbooks profesionales, videos y antes/después — y los distribuimos en todas las plataformas que importan.",
    stats: [
      { value: "93%", label: "revisan reviews antes de contratar" },
      { value: "4X", label: "más engagement con video" },
      { value: "87%", label: "confían más en visuales que en texto" },
    ],
    features: [
      "Lookbooks de calidad revista",
      "Galería de fotos organizada",
      "Estudios de caso detallados",
      "SEO & AI Optimization",
      "Hasta 25 videos/mes",
      "Publicaciones sociales consistentes",
    ],
    image: CONTRACTOR_WORK,
    imageAlt: "Contratistas profesionales trabajando en proyecto residencial",
  },
  {
    id: "ai-agent",
    number: "03",
    icon: Bot,
    label: "Nunca Pierdas Otra Llamada",
    title: "AI Agent",
    tagline: "Cada llamada contestada. Cada lead capturado. 24/7.",
    quote:
      '"No puedes contestar cada llamada cuando estás a 20 pies en una escalera o hasta las rodillas en una remodelación. Pero cada llamada perdida es dinero saliendo por la puerta."',
    desc: "Nuestro AI Agent contesta cada llamada y chat al instante, 24/7. Suena natural, responde preguntas, califica leads y agenda citas — mientras tú te concentras en el trabajo.",
    stats: [
      { value: "85%", label: "de los que llaman no dejan buzón" },
      { value: "24/7", label: "disponibilidad sin contratar más gente" },
      { value: "$0", label: "costo extra de personal" },
    ],
    features: [
      "Voz AI que suena natural",
      "Calificación instantánea de leads",
      "Agendamiento de citas",
      "Respuestas automáticas a FAQs",
      "Grabación de llamadas y transcripciones",
      "Integración perfecta con CRM",
    ],
    image: AI_DASHBOARD,
    imageAlt: "Dashboard de marketing AI con pipeline de leads",
  },
  {
    id: "smart-website",
    number: "04",
    icon: Globe,
    label: "Un Website Que Trabaja Tan Duro Como Tú",
    title: "Hands Off Smart Website",
    tagline: "Profesional, que convierte, y sin mantenimiento para ti.",
    quote:
      '"Sabes que necesitas un website profesional, pero ¿quién tiene tiempo para manejarlo? Entre estimados, jobs y manejar el negocio, el diseño web es lo último en tu mente."',
    desc: "Construimos, mantenemos y optimizamos continuamente tu website — tú nunca lo tocas. Siempre actualizado, seguro y convirtiendo visitantes en leads.",
    stats: [
      { value: "75%", label: "juzgan credibilidad por el website" },
      { value: "0.05s", label: "para causar primera impresión" },
      { value: "0hrs", label: "mantenimiento de tu parte" },
    ],
    features: [
      "Diseño profesional personalizado",
      "Actualizaciones regulares de contenido",
      "Seguridad y mantenimiento",
      "Smart Chat Widget",
      "Bandeja de entrada universal",
      "Optimizado para SEO local",
    ],
    image: CONTRACTOR_WORK,
    imageAlt: "Equipo profesional de contratistas",
  },
  {
    id: "reactivator",
    number: "05",
    icon: RefreshCw,
    label: "Tus Clientes Pasados Son Oro",
    title: "Customer Re-Activator",
    tagline: "Convierte tu base de clientes en una máquina de ingresos.",
    quote:
      '"Has servido a cientos de clientes con los años, pero solo escuchas de ellos cuando algo se rompe. Mientras tanto, están contratando otros contractors para jobs que tú pudiste haber tenido."',
    desc: "Re-Activator se mantiene en contacto automáticamente con tus clientes pasados — deseos de cumpleaños, recordatorios estacionales, ofertas especiales. Cuando necesiten un contractor, tu nombre es el primero.",
    stats: [
      { value: "5X", label: "más barato que conseguir clientes nuevos" },
      { value: "67%", label: "más probable que compren otra vez" },
      { value: "∞", label: "potencial de valor de por vida" },
    ],
    features: [
      "Campañas automáticas para fiestas",
      "Ofertas dirigidas para recuperar clientes",
      "Toques de cumpleaños y aniversarios",
      "Recordatorios de servicio estacionales",
      "Automatización de programa de referidos",
      "Solicitudes de feedback y reviews",
    ],
    image: LEAD_CLOSER,
    imageAlt: "Contratista manejando relaciones con clientes",
  },
  {
    id: "google-optimizer",
    number: "06",
    icon: Star,
    label: "Dueño de Tus Resultados Locales",
    title: "Google Listing Optimizer",
    tagline: "Domina la búsqueda local y sé la opción obvia.",
    quote:
      '"Tu Google listing tiene 4 reviews de 2019. Tu competencia tiene 87 reviews y aparece primero en todas las búsquedas. Eres invisible para clientes que te buscan activamente."',
    desc: "Optimizamos tu Google Business Profile, generamos reviews consistentes y respondemos a cada una con AI. Tu listing sube en el ranking y se vuelve una máquina de leads.",
    stats: [
      { value: "46%", label: "de las búsquedas en Google son locales" },
      { value: "88%", label: "confían en reviews online" },
      { value: "#1", label: "la posición #1 recibe 33% de clicks" },
    ],
    features: [
      "Optimización completa del perfil",
      "Generación automática de reviews",
      "Respuestas con AI a reviews",
      "4 posts de Google/mes",
      "Monitoreo de reputación",
      "Análisis de competencia",
    ],
    image: GOOGLE_REVIEWS,
    imageAlt: "Google Business Profile con reviews de 5 estrellas",
  },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("lead-closer");
  const sectionRef = useRef<HTMLDivElement>(null);

  const activeService = services.find((s) => s.id === activeTab) || services[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.05 }
    );

    const el = sectionRef.current;
    if (el) {
      el.querySelectorAll(".fade-up, .fade-in").forEach((child) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 bg-[#0D0D0D] grid-pattern" ref={sectionRef}>
      <div className="container">
        {/* Section header */}
        <div className="mb-12">
          <div className="fade-up mb-4">
            <span className="section-label">Soluciones Poderosas para Contratistas</span>
          </div>
          <h2
            className="fade-up text-[clamp(2.5rem,5vw,4rem)] font-900 text-white uppercase leading-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, transitionDelay: "100ms" }}
          >
            Todo Lo Que Necesitas Para{" "}
            <span className="text-[#F97316]">Crecer 5X</span>
          </h2>
          <p
            className="fade-up text-white/60 text-lg mt-3 max-w-xl"
            style={{ fontFamily: "'DM Sans', sans-serif", transitionDelay: "200ms" }}
          >
            Seis herramientas con AI diseñadas específicamente para contratistas que quieren pasar menos tiempo persiguiendo leads y más tiempo haciendo lo que aman.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="fade-up mb-10 overflow-x-auto" style={{ transitionDelay: "300ms" }}>
          <div className="flex gap-2 min-w-max pb-2">
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = activeTab === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-sm text-sm font-medium transition-all duration-200 border ${
                    isActive
                      ? "bg-[#F97316] text-black border-[#F97316]"
                      : "bg-transparent text-white/60 border-white/10 hover:border-white/25 hover:text-white"
                  }`}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {service.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active service detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div key={activeService.id + "-content"}>
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-[#F97316]/30 font-900 text-6xl leading-none select-none"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
              >
                {activeService.number}
              </span>
              <div>
                <span className="section-label text-xs">{activeService.label}</span>
              </div>
            </div>

            <h3
              className="text-[clamp(2rem,4vw,3rem)] font-900 text-white uppercase mb-2"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
            >
              {activeService.title}
            </h3>
            <p className="text-[#F97316] font-medium mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {activeService.tagline}
            </p>

            {/* Quote */}
            <blockquote className="border-l-2 border-[#F97316]/40 pl-4 mb-6">
              <p className="text-white/50 text-sm italic leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {activeService.quote}
              </p>
            </blockquote>

            <p className="text-white/70 mb-8 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {activeService.desc}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-white/3 border border-white/8 rounded-sm">
              {activeService.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-2xl font-500 text-[#F97316]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/40 mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Features list */}
            <div className="grid grid-cols-2 gap-2 mb-8">
              {activeService.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0" />
                  <span className="text-sm text-white/70" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href={`/solutions/${activeService.id}`}
              className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A] text-black font-semibold px-6 py-3 rounded-sm transition-all duration-200 text-sm"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Aprende Más Sobre {activeService.title}
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Image */}
          <div key={activeService.id + "-image"} className="relative">
            <div className="relative rounded-sm overflow-hidden aspect-[4/3] border border-white/10">
              <img
                src={activeService.image}
                alt={activeService.imageAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              {/* Service badge overlay */}
              <div className="absolute bottom-4 left-4">
                <span className="section-label text-xs">{activeService.title}</span>
              </div>
            </div>
            {/* Decorative orange border accent */}
            <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-2 border-r-2 border-[#F97316]/40" />
            <div className="absolute -top-2 -left-2 w-16 h-16 border-t-2 border-l-2 border-[#F97316]/20" />
          </div>
        </div>
      </div>
    </section>
  );
}