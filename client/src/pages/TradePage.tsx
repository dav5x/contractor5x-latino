/*
 * DESIGN: Industrial Brutalism — Trade Landing Page
 * Dark near-black bg, orange (#F97316) accents, Barlow Condensed display, DM Sans body
 * Asymmetric layout, diagonal cuts, oversized stats, scroll-triggered animations
 */
import { Link, useParams } from "wouter";
import { tradesById, tradesData, TradeData } from "@/lib/tradesData";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ChevronRight, Star, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function TradePage() {
  const { tradeId } = useParams<{ tradeId: string }>();
  const trade = tradesById[tradeId ?? ""];

  useEffect(() => { window.scrollTo(0, 0); }, [tradeId]);

  if (!trade) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] flex flex-col items-center justify-center text-white">
        <Navbar />
        <h1 className="text-4xl font-black mb-4 mt-32">Trade No Encontrado</h1>
        <Link href="/trades"><Button className="bg-orange-500 hover:bg-orange-600">Ver Todos los Trades</Button></Link>
        <Footer />
      </div>
    );
  }

  const otherTrades = tradesData.filter((t) => t.id !== trade.id).slice(0, 6);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <Navbar />
      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${trade.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/85 to-[#0D0D0D]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />

        <div className="relative z-10 container max-w-7xl mx-auto px-6 py-24">
          {/* breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-orange-400 transition-colors">Inicio</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/trades" className="hover:text-orange-400 transition-colors">Oficios</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-orange-400">{trade.name}</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-orange-500/40 bg-orange-500/10 text-orange-400 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-sm mb-6">
              <span className="text-xl">{trade.icon}</span>
              <span>{trade.tagline}</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-black uppercase leading-none mb-6 tracking-tight">
              {trade.headline.split("for ")[0]}
              <br />
              <span className="text-orange-500">para {trade.name}</span>
            </h1>

            <p className="text-xl text-gray-300 mb-4 max-w-2xl leading-relaxed">
              {trade.subheadline}
            </p>
            <p className="text-gray-400 mb-10 max-w-2xl leading-relaxed">
              {trade.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link href="/#contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 text-base rounded-sm uppercase tracking-wide">
                  Empieza Ya <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/#how-it-works">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold px-8 py-4 text-base rounded-sm uppercase tracking-wide">
                  Mira Cómo Funciona
                </Button>
              </Link>
            </div>

            {/* accent stat */}
            <div className="inline-block border-l-4 border-orange-500 pl-6">
              <div className="font-display text-5xl font-black text-orange-500">{trade.accentStat}</div>
              <div className="text-sm text-gray-400 uppercase tracking-widest mt-1">{trade.accentStatLabel}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS ── */}
      <PainPointsSection trade={trade} />

      {/* ── SOLUTIONS ── */}
      <SolutionsSection trade={trade} />

      {/* ── TESTIMONIAL ── */}
      <TestimonialSection trade={trade} />

      {/* ── FAQ ── */}
      <FAQSection trade={trade} />

      {/* ── OTHER TRADES ── */}
      <OtherTradesSection otherTrades={otherTrades} />

      {/* ── BOTTOM CTA ── */}
      <BottomCTA trade={trade} />
      <Footer />
    </div>
  );
}

function PainPointsSection({ trade }: { trade: TradeData }) {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-24 bg-[#111111]">
      <div className="container max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-4">Los Problemas Reales</div>
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase mb-4">
            Qué Está Deteniendo Tu Negocio de <span className="text-orange-500">{trade.name}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mb-16">
            No son solo molestias — te están costando miles de dólares cada mes. Esto es lo que más vemos que luchan los contratistas de {trade.name.toLowerCase()}.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {trade.painPoints.map((pp, i) => (
            <div
              key={i}
              className={`border border-white/10 bg-white/[0.03] p-8 transition-all duration-700 delay-${i * 100} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-orange-500/15 border border-orange-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-500 font-display font-black text-sm">0{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-black uppercase mb-2">{pp.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{pp.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionsSection({ trade }: { trade: TradeData }) {
  const { ref, inView } = useInView();
  const toolColors: Record<string, string> = {
    "Lead Closer": "from-orange-500/20 to-orange-500/5 border-orange-500/30",
    "Job Promoter": "from-blue-500/20 to-blue-500/5 border-blue-500/30",
    "AI Agent": "from-purple-500/20 to-purple-500/5 border-purple-500/30",
    "Smart Website": "from-green-500/20 to-green-500/5 border-green-500/30",
    "Re-Activator": "from-yellow-500/20 to-yellow-500/5 border-yellow-500/30",
    "Google Optimizer": "from-red-500/20 to-red-500/5 border-red-500/30",
  };
  const toolIcons: Record<string, string> = {
    "Lead Closer": "⚡",
    "Job Promoter": "📸",
    "AI Agent": "🤖",
    "Smart Website": "🌐",
    "Re-Activator": "🔄",
    "Google Optimizer": "🎯",
  };

  return (
    <section ref={ref} className="py-24 bg-[#0D0D0D]">
      <div className="container max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-4">La Solución</div>
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase mb-4">
            Herramientas AI Hechas para Contratistas de <span className="text-orange-500">{trade.name}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mb-16">
            Cada herramienta está configurada específicamente para la industria de {trade.name.toLowerCase()} — no es software genérico de marketing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {trade.solutions.map((sol, i) => (
            <div
              key={i}
              className={`relative border bg-gradient-to-br p-8 transition-all duration-700 delay-${i * 100} ${toolColors[sol.tool] ?? "from-white/5 to-white/0 border-white/10"} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{toolIcons[sol.tool]}</span>
                <span className="text-xs font-bold tracking-widest uppercase text-gray-400 border border-white/20 px-3 py-1 rounded-sm">{sol.tool}</span>
              </div>
              <h3 className="font-display text-2xl font-black uppercase mb-3">{sol.headline}</h3>
              <p className="text-gray-400 leading-relaxed mb-6">{sol.desc}</p>
              <div className="flex items-baseline gap-2 border-t border-white/10 pt-4">
                <span className="font-display text-3xl font-black text-orange-500">{sol.stat}</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">{sol.statLabel}</span>
              </div>
              <Link href={`/solutions/${sol.tool.toLowerCase().replace(/\s+/g, "-")}`}>
                <button className="mt-4 text-orange-400 text-sm font-bold uppercase tracking-wide flex items-center gap-1 hover:gap-2 transition-all">
                  Aprende Más <ArrowRight className="w-3 h-3" />
                </button>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/#contact">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 text-base rounded-sm uppercase tracking-wide">
              Consigue Todas las Herramientas para Tu Negocio de {trade.name} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function TestimonialSection({ trade }: { trade: TradeData }) {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-24 bg-orange-500 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
      <div className="relative z-10 container max-w-5xl mx-auto px-6 text-center">
        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-white text-white" />)}
          </div>
          <blockquote className="font-display text-2xl md:text-3xl font-black text-white uppercase leading-tight mb-8">
            "{trade.testimonial.quote}"
          </blockquote>
          <div className="text-white/80 font-bold mb-2">{trade.testimonial.name} — {trade.testimonial.role}</div>
          <div className="inline-block bg-black/20 text-white text-sm font-bold px-4 py-2 rounded-sm uppercase tracking-wide">
            ✓ {trade.testimonial.result}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection({ trade }: { trade: TradeData }) {
  const { ref, inView } = useInView();
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section ref={ref} className="py-24 bg-[#111111]">
      <div className="container max-w-4xl mx-auto px-6">
        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-4">Preguntas Frecuentes</div>
          <h2 className="font-display text-4xl font-black uppercase mb-12">
            Preguntas Comunes de Contratistas de <span className="text-orange-500">{trade.name}</span>
          </h2>
        </div>
        <div className="space-y-3">
          {trade.faqs.map((faq: { q: string; a: string }, i: number) => (
            <div key={i} className={`border border-white/10 transition-all duration-700 delay-${i * 100} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.03] transition-colors"
              >
                <span className="font-bold text-white pr-4">{faq.q}</span>
                <span className={`text-orange-500 font-black text-xl flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/10 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OtherTradesSection({ otherTrades }: { otherTrades: TradeData[] }) {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-24 bg-[#0D0D0D]">
      <div className="container max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-3xl font-black uppercase mb-12">
            También Servimos a <span className="text-orange-500">Estos Trades</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {otherTrades.map((t, i) => (
            <Link key={t.id} href={`/trades/${t.id}`}>
              <div className={`border border-white/10 bg-white/[0.03] p-5 text-center hover:border-orange-500/40 hover:bg-orange-500/5 transition-all duration-300 cursor-pointer group transition-all duration-700 delay-${i * 50} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <div className="text-3xl mb-3">{t.icon}</div>
                <div className="font-display font-black text-sm uppercase group-hover:text-orange-400 transition-colors">{t.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function BottomCTA({ trade }: { trade: TradeData }) {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-24 bg-[#111111] border-t border-white/10">
      <div className="container max-w-4xl mx-auto px-6 text-center">
        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Zap className="w-12 h-12 text-orange-500 mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase mb-4">
            ¿Listo para Crecer Tu Negocio de <span className="text-orange-500">{trade.name}?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Únete a cientos de contratistas de {trade.name.toLowerCase()} que ya usan Contractor5x para llenar su pipeline y aumentar sus ingresos.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="/#contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 text-base rounded-sm uppercase tracking-wide">
                Empieza Hoy <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/#pricing">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold px-10 py-4 text-base rounded-sm uppercase tracking-wide">
                Ver Precios
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            {["Garantía de 30 días o te devolvemos tu dinero", "Resultados en 30 días o menos", "Soporte dedicado para onboarding"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-500" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}