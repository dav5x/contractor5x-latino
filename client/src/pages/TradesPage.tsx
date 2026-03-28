/*
 * DESIGN: Industrial Brutalism — Trades index page
 * Dark near-black bg, orange accents, Barlow Condensed display, DM Sans body
 */
import { Link } from "wouter";
import { tradesData } from "@/lib/tradesData";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

export default function TradesPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      {/* Hero */}
      <section className="pt-36 pb-20 bg-[#0D0D0D] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, #F97316 0, #F97316 1px, transparent 0, transparent 60px), repeating-linear-gradient(90deg, #F97316 0, #F97316 1px, transparent 0, transparent 60px)" }} />
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-4">Trades Que Servimos</div>
          <h1 className="font-display text-5xl md:text-7xl font-black uppercase leading-none mb-6">
            AI Marketing para <span className="text-orange-500">Cada Trade</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl leading-relaxed mb-10">
            Contractor5x está hecho para negocios locales de trades. Ya seas plumber, roofer, landscaper o HVAC tech — tenemos un sistema de marketing hecho a la medida de cómo funciona tu negocio y lo que tus clientes necesitan ver antes de llamar.
          </p>
          <Link href="/#contact">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 text-base rounded-sm uppercase tracking-wide">
              Empieza Ya para Tu Trade <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Trades Grid */}
      <section className="py-20 bg-[#111111]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tradesData.map((trade, i) => (
              <Link key={trade.id} href={`/trades/${trade.id}`}>
                <div className="group border border-white/10 bg-white/[0.02] hover:border-orange-500/40 hover:bg-orange-500/[0.04] transition-all duration-300 cursor-pointer overflow-hidden">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={trade.heroImage}
                      alt={trade.heroImageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <span className="text-2xl">{trade.icon}</span>
                      <span className="font-display text-xl font-black uppercase text-white">{trade.name}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">{trade.tagline}</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{trade.description.substring(0, 120)}...</p>
                    <div className="flex items-center justify-between">
                      <div className="border-l-2 border-orange-500 pl-3">
                        <div className="font-display text-2xl font-black text-orange-500">{trade.accentStat}</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide leading-tight">{trade.accentStatLabel}</div>
                      </div>
                      <div className="flex items-center gap-1 text-orange-400 text-sm font-bold uppercase tracking-wide group-hover:gap-2 transition-all">
                        Aprende Más <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-[#0D0D0D] border-t border-white/10">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase mb-4">
            ¿No Ves Tu Trade? <span className="text-orange-500">Aquí También Te Cubrimos.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Trabajamos con todos los negocios locales de servicios. Si haces trabajo especializado en casas o negocios, nuestro sistema de marketing con AI va a funcionar para ti.
          </p>
          <Link href="/#contact">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 text-base rounded-sm uppercase tracking-wide">
              Habla Con Nosotros Sobre Tu Trade <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}