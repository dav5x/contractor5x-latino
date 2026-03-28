/*
 * DESIGN: Industrial Brutalism — Blog post detail page
 * Dark bg, orange accents, readable body text, sidebar with related posts
 */
import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Clock, Tag, ChevronRight } from "lucide-react";
import { Link, useParams } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts, type BlogSection } from "@/lib/blogData";
import NotFound from "./NotFound";

function RenderSection({ section }: { section: BlogSection }) {
  switch (section.type) {
    case "paragraph":
      return (
        <p className="text-white/70 text-base leading-relaxed mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {section.text}
        </p>
      );
    case "heading":
      return (
        <h2
          className="text-[clamp(1.4rem,3vw,2rem)] font-900 text-white uppercase mt-10 mb-4"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
        >
          {section.text}
        </h2>
      );
    case "subheading":
      return (
        <h3
          className="text-lg font-700 text-white uppercase mt-6 mb-3"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}
        >
          {section.text}
        </h3>
      );
    case "list":
      return (
        <ul className="mb-6 space-y-3">
          {section.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-white/70 text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="w-5 h-5 bg-[#F97316]/15 border border-[#F97316]/30 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#F97316] text-xs font-700" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>
                {String(i + 1)}
              </span>
              {item}
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <blockquote className="my-8 pl-5 border-l-4 border-[#F97316] bg-[#F97316]/5 py-4 pr-4 rounded-r-sm">
          <p className="text-white/85 text-lg italic leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {section.text}
          </p>
        </blockquote>
      );
    case "tip":
      return (
        <div className="my-8 p-5 bg-[#111] border border-[#F97316]/20 rounded-sm">
          <div className="flex items-start gap-3">
            <span className="bg-[#F97316] text-black text-xs font-700 px-2 py-0.5 uppercase tracking-wider flex-shrink-0 mt-0.5" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>
              Pro Tip
            </span>
            <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {section.text?.replace(/^Pro Tip: /, "")}
            </p>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default function BlogPostPage() {
  const params = useParams<{ slug: string }>();
  const pageRef = useRef<HTMLDivElement>(null);
  const post = blogPosts.find((p) => p.slug === params.slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.slug]);

  if (!post) return <NotFound />;

  const related = blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 2);
  const otherPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#0A0A0A]" ref={pageRef}>
      <Navbar />

      {/* ── Hero Image ── */}
      <section className="relative pt-20">
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img src={post.image} alt={post.imageAlt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
        </div>
      </section>

      {/* ── Article ── */}
      <section className="py-12 bg-[#0A0A0A]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 mb-6 text-sm text-white/35" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <Link href="/learn" className="hover:text-white/60 transition-colors">Learn</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-[#F97316] truncate max-w-[200px]">{post.title}</span>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="bg-[#F97316]/10 border border-[#F97316]/20 text-[#F97316] text-xs font-medium px-3 py-1 flex items-center gap-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  <Tag className="w-3 h-3" /> {post.category}
                </span>
                <span className="text-white/35 text-xs flex items-center gap-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
                <span className="text-white/35 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>{post.date}</span>
              </div>

              {/* Title */}
              <h1
                className="text-[clamp(2rem,5vw,3.5rem)] font-900 text-white uppercase leading-tight mb-3"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
              >
                {post.title}
              </h1>
              <p className="text-[#F97316] text-lg font-medium mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {post.subtitle}
              </p>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-[#F97316]/40 to-transparent mb-8" />

              {/* Content */}
              <div>
                {post.content.map((section, i) => (
                  <RenderSection key={i} section={section} />
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-white/5 my-10" />

              {/* CTA */}
              <div className="p-8 bg-[#111] border border-[#F97316]/20 rounded-sm text-center">
                <h3
                  className="text-2xl font-900 text-white uppercase mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
                >
                  Ready to Put This Into <span className="text-[#F97316]">Action?</span>
                </h3>
                <p className="text-white/55 text-sm mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Let us handle your marketing so you can focus on the work you love.
                </p>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A] text-black font-semibold px-6 py-3 rounded-sm transition-all duration-200 text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Back */}
              <div className="mt-8">
                <Link
                  href="/learn"
                  className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <ArrowLeft className="w-4 h-4" /> Back to All Articles
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Related posts */}
              {related.length > 0 && (
                <div>
                  <h3
                    className="text-white/40 text-xs uppercase tracking-widest mb-4"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {related.map((rp) => (
                      <Link key={rp.id} href={`/learn/${rp.slug}`} className="group block">
                        <div className="flex gap-3 p-4 bg-[#111] border border-white/5 rounded-sm hover:border-[#F97316]/20 transition-all duration-200">
                          <img src={rp.image} alt={rp.imageAlt} className="w-16 h-16 object-cover rounded-sm flex-shrink-0" />
                          <div>
                            <p
                              className="text-white/70 text-sm font-medium leading-snug group-hover:text-[#F97316] transition-colors"
                              style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                              {rp.title}
                            </p>
                            <p className="text-white/30 text-xs mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{rp.readTime}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* More posts */}
              <div>
                <h3
                  className="text-white/40 text-xs uppercase tracking-widest mb-4"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  More Articles
                </h3>
                <div className="space-y-3">
                  {otherPosts.map((op) => (
                    <Link key={op.id} href={`/learn/${op.slug}`} className="group flex items-start gap-2 py-2 border-b border-white/5">
                      <ArrowRight className="w-3.5 h-3.5 text-[#F97316]/50 group-hover:text-[#F97316] flex-shrink-0 mt-0.5 transition-colors" />
                      <span
                        className="text-white/55 text-sm leading-snug group-hover:text-white transition-colors"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {op.title}
                      </span>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/learn"
                  className="inline-flex items-center gap-2 text-[#F97316] text-sm font-medium mt-4 hover:gap-3 transition-all duration-200"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  View All Articles <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Sticky CTA */}
              <div className="p-6 bg-[#F97316]/5 border border-[#F97316]/15 rounded-sm">
                <h4
                  className="text-white font-900 text-xl uppercase mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
                >
                  Want More Leads?
                </h4>
                <p className="text-white/55 text-sm mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  We handle all your marketing on autopilot. Get started today.
                </p>
                <a
                  href="/#contact"
                  className="block text-center bg-[#F97316] hover:bg-[#EA6C0A] text-black font-semibold text-sm px-4 py-3 rounded-sm transition-all duration-200"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Get Started Free
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
