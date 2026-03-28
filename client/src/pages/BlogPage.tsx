/*
 * DESIGN: Industrial Brutalism — Blog / Learn page
 * Dark bg, orange accents, Barlow Condensed headlines, card grid layout
 */
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/blogData";

const categories = ["Todo", "Lead Generation", "Google & Reviews", "Website & SEO", "Social Media", "AI Marketing", "Customer Retention", "Business Growth"];

export default function BlogPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("Todo");

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.06 }
    );
    const el = pageRef.current;
    if (el) el.querySelectorAll(".fade-up").forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, [activeCategory]);

  const filtered = activeCategory === "Todo" ? blogPosts : blogPosts.filter((p) => p.category === activeCategory);
  const featured = blogPosts[0];

  return (
    <div className="min-h-screen bg-[#0A0A0A]" ref={pageRef}>
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#F97316 1px, transparent 1px), linear-gradient(90deg, #F97316 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="container relative">
          <div className="fade-up mb-4">
            <span className="section-label">El Manual del Contractor</span>
          </div>
          <h1
            className="fade-up text-[clamp(3rem,7vw,5.5rem)] font-900 text-white uppercase leading-[0.9] mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, transitionDelay: "100ms" }}
          >
            Aprende Cómo <span className="text-[#F97316]">Hacer Crecer Tu</span> Negocio de Trade
          </h1>
          <p
            className="fade-up text-white/60 text-xl max-w-2xl"
            style={{ fontFamily: "'DM Sans', sans-serif", transitionDelay: "150ms" }}
          >
            Guías prácticas, sin rodeos, escritas específicamente para contractors. Sin jerga tech, sin estrategias complicadas — solo lo que funciona.
          </p>
        </div>
      </section>

      {/* ── Featured Post ── */}
      <section className="pb-12 bg-[#0A0A0A]">
        <div className="container">
          <Link href={`/learn/${featured.slug}`} className="fade-up group block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#111] border border-white/5 rounded-sm overflow-hidden hover:border-[#F97316]/25 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.imageAlt}
                  className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ minHeight: "280px" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111]/40" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#F97316] text-black text-xs font-700 px-3 py-1 uppercase tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>
                    Destacado
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#F97316] text-xs uppercase tracking-widest" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {featured.category}
                  </span>
                  <span className="text-white/20">·</span>
                  <span className="text-white/40 text-xs flex items-center gap-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <Clock className="w-3 h-3" /> {featured.readTime}
                  </span>
                </div>
                <h2
                  className="text-[clamp(1.5rem,3vw,2.5rem)] font-900 text-white uppercase leading-tight mb-3 group-hover:text-[#F97316] transition-colors duration-300"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
                >
                  {featured.title}
                </h2>
                <p className="text-white/55 text-base leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-2 text-[#F97316] text-sm font-medium group-hover:gap-3 transition-all duration-200" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Leer Artículo <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Category Filter ── */}
      <section className="py-8 bg-[#0A0A0A] border-t border-white/5">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-sm border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#F97316] text-black border-[#F97316]"
                    : "bg-transparent text-white/55 border-white/10 hover:border-white/25 hover:text-white"
                }`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Posts Grid ── */}
      <section className="py-12 bg-[#0A0A0A]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <Link
                key={post.id}
                href={`/learn/${post.slug}`}
                className="fade-up group flex flex-col bg-[#111] border border-white/5 rounded-sm overflow-hidden hover:border-[#F97316]/25 transition-all duration-300"
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111]/60 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#0A0A0A]/80 backdrop-blur-sm text-[#F97316] text-xs font-medium px-2.5 py-1 border border-[#F97316]/20 flex items-center gap-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <Tag className="w-2.5 h-2.5" /> {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-white/35 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>{post.date}</span>
                    <span className="text-white/20">·</span>
                    <span className="text-white/35 text-xs flex items-center gap-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3
                    className="text-white font-700 text-lg uppercase leading-tight mb-2 group-hover:text-[#F97316] transition-colors duration-300 flex-1"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[#F97316] text-sm font-medium group-hover:gap-3 transition-all duration-200 mt-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Leer Más <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#111] border-t border-white/5">
        <div className="container text-center">
          <h2
            className="fade-up text-[clamp(2rem,5vw,3.5rem)] font-900 text-white uppercase mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
          >
            ¿Listo para Poner Esto en <span className="text-[#F97316]">Acción?</span>
          </h2>
          <p className="fade-up text-white/55 text-lg mb-8 max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif", transitionDelay: "100ms" }}>
            Deja de leer sobre marketing y empieza a hacerlo. Nuestro sistema AI hace todo por ti — automáticamente.
          </p>
          <a
            href="/#contact"
            className="fade-up btn-glow pulse-glow inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A] text-black font-semibold px-8 py-4 rounded-sm transition-all duration-200 text-base"
            style={{ fontFamily: "'DM Sans', sans-serif", transitionDelay: "150ms" }}
          >
            Empieza Ya <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}