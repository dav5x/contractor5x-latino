/**
 * DESIGN: Industrial Brutalism — Results / Case Studies Index Page
 * Dark background, orange accents, Barlow Condensed headlines
 * Hero stats bar, 4 case study cards, CTA
 */
import { Link } from "wouter";
import { ArrowRight, Star, TrendingUp, Users, Award } from "lucide-react";
import { caseStudies } from "@/lib/caseStudiesData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const overallStats = [
  { metric: "4.2×", label: "Average Lead Increase", icon: TrendingUp },
  { metric: "200+", label: "5-Star Reviews Generated", icon: Star },
  { metric: "30 Days", label: "Average Time to First Results", icon: Award },
  { metric: "100%", label: "Client Retention Rate", icon: Users },
];

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(249,115,22,0.08)_0%,_transparent_60%)]" />
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-orange-500/20 border border-orange-500/40 text-orange-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Real Results
            </span>
          </div>
          <h1 className="font-['Barlow_Condensed'] text-5xl md:text-7xl font-black uppercase leading-none mb-6">
            CONTRACTORS WHO <br />
            <span className="text-orange-500">CHOSE TO 5X</span>
          </h1>
          <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed">
            Real trade businesses. Real numbers. See how local contractors across San Diego are using AI marketing to fill their calendars and dominate local search.
          </p>
        </div>
      </section>

      {/* Overall Stats */}
      <section className="bg-[#111111] border-y border-zinc-800">
        <div className="container max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {overallStats.map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                <div className="font-['Barlow_Condensed'] text-4xl font-black text-white leading-none mb-1">
                  {stat.metric}
                </div>
                <div className="text-zinc-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="container max-w-6xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {caseStudies.map((study, i) => (
            <Link key={study.slug} href={`/results/${study.slug}`}>
              <div className="group bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer">
                <div className="grid grid-cols-1 md:grid-cols-5">

                  {/* Image */}
                  <div className="md:col-span-2 relative h-56 md:h-auto overflow-hidden">
                    <img
                      src={study.heroImage}
                      alt={study.company}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900/50 hidden md:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent md:hidden" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                        Case Study #{i + 1}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3 p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-orange-400 text-xs font-bold uppercase tracking-widest">
                          {study.trade}
                        </span>
                        <span className="text-zinc-600">·</span>
                        <span className="text-zinc-500 text-xs">{study.location}</span>
                      </div>
                      <h2 className="font-['Barlow_Condensed'] text-2xl md:text-3xl font-black uppercase text-white group-hover:text-orange-400 transition-colors leading-tight mb-3">
                        {study.company}
                      </h2>
                      <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-2">
                        {study.tagline}
                      </p>

                      {/* Mini metrics */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        {study.results.map((r, ri) => (
                          <div key={ri} className="bg-zinc-800/50 rounded-lg p-3 text-center">
                            <div className="font-['Barlow_Condensed'] text-xl font-black text-orange-500 leading-none mb-1">
                              {r.metric}
                            </div>
                            <div className="text-zinc-500 text-xs leading-tight">{r.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Services */}
                      <div className="flex flex-wrap gap-2">
                        {study.services.map((svc, si) => (
                          <span
                            key={si}
                            className="bg-zinc-800 text-zinc-400 text-xs px-2 py-1 rounded-md border border-zinc-700"
                          >
                            {svc}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex items-center gap-2 text-orange-400 font-bold text-sm uppercase tracking-wide group-hover:gap-4 transition-all">
                      Read Full Case Study <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111111] border-t border-zinc-800 py-20">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-black uppercase text-white mb-4">
            YOUR BUSINESS COULD BE <span className="text-orange-500">NEXT</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
            Join the trade contractors across San Diego who are using AI to fill their calendars and grow their revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 text-lg">
                Get Started Today
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800 px-8 py-3 text-lg">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
