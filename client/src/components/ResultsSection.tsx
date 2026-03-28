/*
 * DESIGN: Industrial Brutalism — Big stats, testimonial cards, orange accents
 * Counter animation on scroll entry
 */
import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const bigStats = [
  { value: 500, suffix: "+", label: "Contractors Served" },
  { value: 78, suffix: "%", label: "Average Lead Increase" },
  { value: 4.9, suffix: "★", label: "Average Client Rating", decimal: true },
  { value: 5, suffix: "X", label: "Average Revenue Growth" },
];

const testimonials = [
  {
    name: "Marcus T.",
    trade: "HVAC Contractor",
    location: "Phoenix, AZ",
    stars: 5,
    quote:
      "Before Contractor5x, I was losing leads every day because I couldn't respond fast enough. Now the AI handles all my initial inquiries and I'm booking 3x more jobs. Best investment I've made in my business.",
    result: "+312% leads in 90 days",
  },
  {
    name: "Shawn D.",
    trade: "Tile & Flooring",
    location: "Austin, TX",
    stars: 5,
    quote:
      "The Job Promoter completely transformed how I showcase my work. My Instagram went from empty to 2,000 followers in 3 months, and my Google reviews went from 8 to 67. Customers now call me instead of the other way around.",
    result: "67 Google reviews in 3 months",
  },
  {
    name: "Carlos R.",
    trade: "General Contractor",
    location: "Miami, FL",
    stars: 5,
    quote:
      "I was skeptical about AI, but Contractor5x made it simple. Their team set everything up, and now I have a system that works while I'm on the job site. My revenue is up 40% this year.",
    result: "+40% revenue year over year",
  },
  {
    name: "Jennifer K.",
    trade: "Pest Control",
    location: "Denver, CO",
    stars: 5,
    quote:
      "The Customer Re-Activator alone paid for the entire service. We re-engaged 200+ past customers in the first month and booked $18,000 in jobs we would have never gotten otherwise.",
    result: "$18K from re-activated customers",
  },
  {
    name: "Dave M.",
    trade: "Plumbing",
    location: "Chicago, IL",
    stars: 5,
    quote:
      "My Google ranking went from page 3 to the top 3 in my area within 6 weeks. The Google Listing Optimizer is worth every penny. I'm now the first result when anyone searches for plumbers near me.",
    result: "Top 3 Google ranking in 6 weeks",
  },
  {
    name: "Tony B.",
    trade: "Electrical",
    location: "Seattle, WA",
    stars: 5,
    quote:
      "The AI Agent never misses a call. I used to lose jobs because I couldn't answer while on a job site. Now every lead gets an immediate response and my close rate has doubled.",
    result: "2X close rate improvement",
  },
];

function AnimatedCounter({ value, suffix, decimal }: { value: number; suffix: string; decimal?: boolean }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const duration = 1500;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(decimal ? Math.round(current * 10) / 10 : Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, started, decimal]);

  return (
    <div ref={ref} className="stat-number" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      {decimal ? count.toFixed(1) : count}
      {suffix}
    </div>
  );
}

export default function ResultsSection() {
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
    <section id="results" className="py-24 bg-[#0A0A0A]" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="mb-16">
          <div className="fade-up mb-4">
            <span className="section-label">Proven Results</span>
          </div>
          <div
            className="fade-up flex flex-wrap items-center gap-x-4 gap-y-2"
            style={{ transitionDelay: "100ms" }}
          >
            <span
              className="text-[clamp(2.5rem,5vw,4rem)] font-900 text-white uppercase leading-tight"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
            >
              Contractors Love
            </span>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663485111386/DggHMYqYmKSoMpB2pB5sTZ/contractor5x-real-logo_be9501fc.png"
              alt="Contractor5x"
              className="h-[clamp(2.2rem,4.5vw,3.5rem)] w-auto object-contain inline-block"
              style={{ verticalAlign: "middle" }}
            />
          </div>
        </div>

        {/* Big stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 p-8 bg-[#141414] border border-white/8 rounded-sm">
          {bigStats.map((stat, i) => (
            <div
              key={stat.label}
              className="fade-up text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} decimal={stat.decimal} />
              <div className="text-white/50 text-sm mt-2 uppercase tracking-wider" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="fade-up feature-card bg-[#141414] border border-white/8 p-6 rounded-sm flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#F97316] text-[#F97316]" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote className="w-6 h-6 text-[#F97316]/30 mb-3" />

              {/* Quote text */}
              <p
                className="text-white/70 text-sm leading-relaxed flex-1 mb-5"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                "{t.quote}"
              </p>

              {/* Result badge */}
              <div className="mb-4">
                <span className="inline-block bg-[#F97316]/10 border border-[#F97316]/20 text-[#F97316] text-xs font-medium px-3 py-1 rounded-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {t.result}
                </span>
              </div>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                <div className="w-9 h-9 bg-[#F97316]/15 rounded-full flex items-center justify-center">
                  <span className="text-[#F97316] font-semibold text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white font-medium text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {t.name}
                  </div>
                  <div className="text-white/40 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {t.trade} · {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
