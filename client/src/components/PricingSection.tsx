/*
 * DESIGN: Industrial Brutalism — Three pricing tiers, orange popular badge, dark cards
 */
import { useEffect, useRef } from "react";
import { CheckCircle2, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "497",
    period: "/mo",
    tagline: "Perfect for getting started with AI marketing",
    features: [
      "Lead Closer (CRM + Automation)",
      "AI Agent (Calls & Chat)",
      "Google Listing Optimizer",
      "Basic Website Setup",
      "Email & SMS Campaigns",
      "Monthly Performance Report",
      "Onboarding Support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Growth",
    price: "997",
    period: "/mo",
    tagline: "The complete AI marketing system for serious contractors",
    features: [
      "Everything in Starter, plus:",
      "Job Promoter (Photos, Video, Social)",
      "Hands Off Smart Website",
      "Customer Base Re-Activator",
      "Up to 25 Videos/Month",
      "Bi-Weekly Strategy Calls",
      "Priority Support",
      "Competitor Analysis",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Dominator",
    price: "1,997",
    period: "/mo",
    tagline: "For contractors ready to dominate their local market",
    features: [
      "Everything in Growth, plus:",
      "Dedicated Account Manager",
      "Custom AI Agent Training",
      "Advanced SEO & AIO Strategy",
      "Paid Ad Management",
      "Weekly Strategy Calls",
      "White-Glove Onboarding",
      "Custom Integrations",
    ],
    cta: "Book a Call",
    popular: false,
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
        <div className="mb-14 text-center">
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

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`fade-up relative rounded-sm p-7 flex flex-col ${
                plan.popular
                  ? "bg-[#1A1208] border-2 border-[#F97316]"
                  : "bg-[#141414] border border-white/8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1.5 bg-[#F97316] text-black text-xs font-semibold px-4 py-1.5 rounded-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <Zap className="w-3 h-3 fill-black" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan name */}
              <div className="mb-6">
                <h3
                  className="text-white font-700 text-xl uppercase mb-1"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}
                >
                  {plan.name}
                </h3>
                <p className="text-white/50 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {plan.tagline}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-white/10">
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
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {plan.features.map((feature) => (
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
                className={`btn-glow w-full text-center py-3.5 rounded-sm font-semibold text-sm transition-all duration-200 ${
                  plan.popular
                    ? "bg-[#F97316] hover:bg-[#EA6C0A] text-black pulse-glow"
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
