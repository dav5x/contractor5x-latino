/*
 * DESIGN: Industrial Brutalism — Four pricing tiers, orange popular badge, dark cards
 * Job Promoter included in all plans at tiered volumes
 * $500 setup fee waived — limited-time promo banner
 */
import { useEffect, useRef } from "react";
import { CheckCircle2, Zap, Tag } from "lucide-react";

const plans = [
  {
    name: "Essentials",
    price: "199",
    period: "/mo",
    badge: null,
    tagline: "Great for solo operators on a tight budget",
    subTagline: "Build your online reputation and get found locally.",
    jobPromoterLabel: "Low Volume",
    jobPromoterDetail: "Up to 4 posts/month",
    features: [
      "Google Listing Optimizer",
      "Automated Review Generation",
      "AI-Powered Review Replies",
      "4 Google Posts/Month",
      "Reputation Monitoring",
      "Job Promoter — Low Volume (4 posts/mo)",
      "Monthly Performance Report",
      "Onboarding Support",
    ],
    cta: "Get Started",
    popular: false,
    highlight: false,
  },
  {
    name: "Starter",
    price: "299",
    period: "/mo",
    badge: "Best Way to Start",
    tagline: "The smart entry point for growing contractors",
    subTagline: "Capture leads automatically and start showing up online.",
    jobPromoterLabel: "Medium Volume",
    jobPromoterDetail: "Up to 10 posts/month",
    features: [
      "Everything in Essentials, plus:",
      "Lead Closer (CRM + Automation)",
      "AI Agent (Calls & Chat)",
      "Custom Branded Intake Forms",
      "Two-way SMS & Call Tracking",
      "Email & SMS Campaigns",
      "Job Promoter — Medium Volume (10 posts/mo)",
      "Bi-Monthly Check-In Call",
    ],
    cta: "Get Started",
    popular: false,
    highlight: true,
  },
  {
    name: "Growth",
    price: "499",
    period: "/mo",
    badge: "Most Popular",
    tagline: "The complete AI marketing system for serious contractors",
    subTagline: "Full automation, more content, and a hands-off smart website.",
    jobPromoterLabel: "Higher Volume",
    jobPromoterDetail: "Up to 20 posts/month + video",
    features: [
      "Everything in Starter, plus:",
      "Hands Off Smart Website",
      "Customer Base Re-Activator",
      "Job Promoter — Higher Volume (20 posts/mo + video)",
      "Up to 15 Videos/Month",
      "Bi-Weekly Strategy Calls",
      "Priority Support",
    ],
    cta: "Get Started",
    popular: true,
    highlight: false,
  },
  {
    name: "Dominator",
    price: "999",
    period: "/mo",
    badge: null,
    tagline: "For contractors ready to own their local market",
    subTagline: "Maximum output, dedicated support, and paid ad management.",
    jobPromoterLabel: "Max Volume",
    jobPromoterDetail: "Up to 30 posts/month + video",
    features: [
      "Everything in Growth, plus:",
      "Dedicated Account Manager",
      "Custom AI Agent Training",
      "Advanced SEO & AIO Strategy",
      "Paid Ad Management",
      "Job Promoter — Max Volume (30 posts/mo + video)",
      "Up to 25 Videos/Month",
      "Weekly Strategy Calls",
      "White-Glove Onboarding",
    ],
    cta: "Book a Call",
    popular: false,
    highlight: false,
  },
];

export default function PricingSection() {
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
        <div className="mb-10 text-center">
          <div className="fade-up mb-4 flex justify-center">
            <span className="section-label">Simple, Transparent Pricing</span>
          </div>
          <h2
            className="fade-up text-[clamp(2.5rem,5vw,4rem)] font-900 text-white uppercase leading-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, transitionDelay: "100ms" }}
          >
            Invest in Your{" "}
            <span className="text-[#F97316]">Growth</span>
          </h2>
          <p
            className="fade-up text-white/60 text-lg mt-3 max-w-xl mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", transitionDelay: "200ms" }}
          >
            Every plan includes a 30-day money back guarantee. Cancel anytime.
          </p>
        </div>

        {/* ⚡ Setup Fee Waived Promo Banner */}
        <div className="fade-up mb-10 max-w-3xl mx-auto" style={{ transitionDelay: "250ms" }}>
          <div className="flex items-center justify-center gap-3 bg-[#F97316]/10 border border-[#F97316]/40 rounded-sm px-6 py-4">
            <Tag className="w-5 h-5 text-[#F97316] flex-shrink-0" />
            <p className="text-center" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-[#F97316] font-bold">LIMITED TIME:</span>{" "}
              <span className="text-white font-medium">$500 Setup Fee</span>{" "}
              <span className="text-white/70 line-through mr-1">$500</span>
              <span className="text-[#F97316] font-bold">WAIVED</span>
              <span className="text-white/60 ml-2 text-sm">— Start today, pay nothing to get set up.</span>
            </p>
          </div>
        </div>

        {/* Pricing cards — 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
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
                  className="text-white font-700 text-xl uppercase mb-1"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}
                >
                  {plan.name}
                </h3>
                <p className="text-[#F97316] text-xs font-semibold uppercase tracking-wide mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {plan.tagline}
                </p>
                <p className="text-white/45 text-xs leading-snug" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {plan.subTagline}
                </p>
              </div>

              {/* Price */}
              <div className="mb-4 pb-4 border-b border-white/10">
                <div className="flex items-end gap-1">
                  <span className="text-white/50 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>$</span>
                  <span
                    className="text-5xl font-500 text-white"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-white/50 text-sm mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {plan.period}
                  </span>
                </div>
                {/* Setup fee waived inline note */}
                <div className="mt-1.5 flex items-center gap-1.5">
                  <span className="text-white/35 text-xs line-through" style={{ fontFamily: "'DM Sans', sans-serif" }}>+$500 setup</span>
                  <span className="text-[#F97316] text-xs font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>FREE</span>
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
                            : "text-white/65"
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
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center fade-up" style={{ transitionDelay: "500ms" }}>
          <p className="text-white/40 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            All plans include onboarding support · No long-term contracts · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
