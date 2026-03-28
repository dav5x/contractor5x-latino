/**
 * DESIGN: Industrial Brutalism — Case Study Detail Page
 * Dark background, orange accents, Barlow Condensed headlines
 * Full-bleed hero, metrics grid, quote block, body narrative
 */
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, ExternalLink, Play, Quote, CheckCircle2 } from "lucide-react";
import { getCaseStudyBySlug, caseStudies } from "@/lib/caseStudiesData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const study = getCaseStudyBySlug(slug || "");

  if (!study) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center">
        <Navbar />
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link href="/results">
            <Button>Back to Results</Button>
          </Link>
        </div>
      </div>
    );
  }

  const otherStudies = caseStudies.filter((cs) => cs.slug !== study.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${study.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/80 to-[#0D0D0D]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />

        <div className="relative z-10 container max-w-6xl mx-auto px-6 pb-16 pt-32">
          <Link href="/results" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors mb-6 text-sm font-medium tracking-wide uppercase">
            <ArrowLeft className="w-4 h-4" />
            Back to Results
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="bg-orange-500/20 border border-orange-500/40 text-orange-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Case Study
            </span>
            <span className="text-zinc-400 text-sm">{study.trade}</span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-400 text-sm">{study.location}</span>
          </div>

          <h1 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-black uppercase leading-none mb-4 max-w-3xl">
            {study.tagline}
          </h1>

          <p className="text-zinc-300 text-lg max-w-2xl leading-relaxed">
            {study.company} — {study.trade}
          </p>
        </div>
      </section>

      {/* Results Metrics */}
      <section className="bg-[#111111] border-y border-zinc-800">
        <div className="container max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {study.results.map((r, i) => (
              <div key={i} className="text-center">
                <div className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-black text-orange-500 leading-none mb-2">
                  {r.metric}
                </div>
                <div className="text-zinc-400 text-sm font-medium leading-tight">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Body */}
          <div className="lg:col-span-2 space-y-8">

            {/* Challenge */}
            <div>
              <h2 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase text-orange-500 tracking-wide mb-4">
                The Challenge
              </h2>
              <p className="text-zinc-300 leading-relaxed text-lg">{study.challenge}</p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase text-orange-500 tracking-wide mb-4">
                The Solution
              </h2>
              <p className="text-zinc-300 leading-relaxed text-lg">{study.solution}</p>
            </div>

            {/* Video Testimonial */}
            {study.videoTestimonial && (
              <div>
                <h2 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase text-orange-500 tracking-wide mb-4">
                  Hear It From {study.ownerName}
                </h2>
                <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800">
                  <iframe
                    src={`https://www.youtube.com/embed/${study.videoTestimonial}`}
                    title={`${study.company} Testimonial`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            )}

            {/* Full Story */}
            <div>
              <h2 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase text-orange-500 tracking-wide mb-6">
                The Full Story
              </h2>
              <div className="space-y-5">
                {study.bodyParagraphs.map((para, i) => (
                  <p key={i} className="text-zinc-300 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="relative bg-zinc-900 border-l-4 border-orange-500 rounded-r-xl p-8">
              <Quote className="w-8 h-8 text-orange-500/30 absolute top-6 right-6" />
              <p className="text-white text-xl leading-relaxed font-medium italic mb-4">
                "{study.quote}"
              </p>
              <p className="text-orange-400 font-bold text-sm uppercase tracking-wide">
                — {study.quoteAuthor}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Services Used */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="font-['Barlow_Condensed'] text-lg font-bold uppercase text-white tracking-wide mb-4">
                Solutions Used
              </h3>
              <div className="space-y-3">
                {study.services.map((svc, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span className="text-zinc-300 text-sm font-medium">{svc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="font-['Barlow_Condensed'] text-lg font-bold uppercase text-white tracking-wide mb-4">
                About {study.company}
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Trade</span>
                  <span className="text-zinc-300 font-medium text-right">{study.trade}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Location</span>
                  <span className="text-zinc-300 font-medium">{study.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Industry</span>
                  <span className="text-zinc-300 font-medium">{study.industry}</span>
                </div>
              </div>
              <a
                href={study.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
              >
                Visit Website <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl p-6">
              <h3 className="font-['Barlow_Condensed'] text-xl font-black uppercase text-white mb-2">
                Want Results Like These?
              </h3>
              <p className="text-orange-100 text-sm mb-4 leading-relaxed">
                See how Contractor5x can grow your trade business with AI marketing.
              </p>
              <Link href="/#contact">
                <Button className="w-full bg-white text-orange-600 hover:bg-orange-50 font-bold">
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Case Studies */}
      <section className="bg-[#111111] border-t border-zinc-800 py-16">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="font-['Barlow_Condensed'] text-3xl font-black uppercase text-white mb-8">
            More Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherStudies.map((cs) => (
              <Link key={cs.slug} href={`/results/${cs.slug}`}>
                <div className="group bg-zinc-900 border border-zinc-800 hover:border-orange-500/40 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={cs.heroImage}
                      alt={cs.company}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-orange-400 font-bold uppercase tracking-widest mb-1">{cs.trade}</div>
                    <h3 className="font-['Barlow_Condensed'] text-lg font-bold text-white uppercase leading-tight mb-2 group-hover:text-orange-400 transition-colors">
                      {cs.company}
                    </h3>
                    <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2">{cs.tagline}</p>
                    <div className="mt-3 flex items-center gap-1 text-orange-400 text-xs font-bold uppercase tracking-wide">
                      Read Story <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
