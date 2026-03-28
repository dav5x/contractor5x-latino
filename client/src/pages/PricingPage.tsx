/*
 * DESIGN: Industrial Brutalism — Dedicated pricing landing page
 * Monthly/Annual toggle (20% off), 4 plan cards, monthly credits per plan,
 * full usage rates table from local5x.com, FAQ section
 */
import { useState, useEffect, useRef } from "react";
import { CheckCircle2, Zap, Tag, Info, Phone, MessageSquare, Mail, Bot, Mic, Star, Workflow } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plans = [
  {
    name: "Essentials",
    price: { monthly: 199, yearly: 159 },
    badge: null,
    tagline: "Good for low-budget solo operations",
    subTagline: "Build your reputation and get found locally — without breaking the bank.",
    jobPromoterLabel: "Low Volume",
    jobPromoterPosts: "Up to 2 posts/month",
    credits: 20,
    features: [
      "Google Listing Optimizer",
      "Automated Review Generation",
      "AI-Powered Review Replies",
      "2 Google Posts/Month",
      "Reputation Monitoring",
      "Job Promoter — Low Volume (2 posts/mo)",
      "Monthly Performance Report",
      "Onboarding Support",
      "$20 Usage Credits/Month",
    ],
    cta: "Get Started",
    popular: false,
    highlight: false,
    color: "border-white/10",
  },
  {
    name: "Starter",
    price: { monthly: 299, yearly: 239 },
    badge: "Best Way to Start",
    tagline: "The smart entry point for growing contractors",
    subTagline: "Capture leads automatically and start showing up online.",
    jobPromoterLabel: "Medium Volume",
    jobPromoterPosts: "Up to 10 posts/month",
    credits: 30,
    features: [
      "Everything in Essentials, plus:",
      "Lead Closer (CRM + Automation)",
      "AI Agent (Calls & Chat)",
      "Custom Branded Intake Forms",
      "Two-way SMS & Call Tracking",
      "Email & SMS Campaigns",
      "Job Promoter — Medium Volume (10 posts/mo)",
      "Bi-Monthly Check-In Call",
      "$30 Usage Credits/Month",
    ],
    cta: "Get Started",
    popular: false,
    highlight: true,
    color: "border-sky-500/40",
  },
  {
    name: "Growth",
    price: { monthly: 499, yearly: 399 },
    badge: "Most Popular",
    tagline: "The complete AI marketing system",
    subTagline: "Full automation, more content, and a hands-off smart website.",
    jobPromoterLabel: "Higher Volume",
    jobPromoterPosts: "Up to 15 posts/month + video",
    credits: 50,
    features: [
      "Everything in Starter, plus:",
      "Hands Off Smart Website",
      "Customer Base Re-Activator",
      "Job Promoter — Higher Volume (15 posts/mo + video)",
      "Up to 15 Videos/Month",
      "Bi-Weekly Strategy Calls",
      "Priority Support",
      "$50 Usage Credits/Month",
    ],
    cta: "Get Started",
    popular: true,
    highlight: false,
    color: "border-[#F97316]",
  },
  {
    name: "Dominator",
    price: { monthly: 999, yearly: 799 },
    badge: null,
    tagline: "Own your local market",
    subTagline: "Maximum output, dedicated support, and paid ad management.",
    jobPromoterLabel: "Max Volume",
    jobPromoterPosts: "Up to 25 posts/month + video",
    credits: 100,
    features: [
      "Everything in Growth, plus:",
      "Dedicated Account Manager",
      "Custom AI Agent Training",
      "Advanced SEO & AIO Strategy",
      "Paid Ad Management",
      "Job Promoter — Max Volume (25 posts/mo + video)",
      "Up to 25 Videos/Month",
      "Weekly Strategy Calls",
      "White-Glove Onboarding",
      "$100 Usage Credits/Month",
    ],
    cta: "Book a Call",
    popular: false,
    highlight: false,
    color: "border-white/10",
  },
];

const usageRates = [
  { icon: Phone, category: "Phone Calls", rows: [
    { label: "Making Calls (Outbound)", rate: "$0.0147 / min", example: "10-min call ≈ $0.15" },
    { label: "Receiving Calls (Inbound)", rate: "$0.0089 / min", example: "10-min call ≈ $0.09" },
  ]},
  { icon: MessageSquare, category: "Text Messaging", rows: [
    { label: "SMS (per segment)", rate: "$0.0087 / segment", example: "100 texts ≈ $0.87" },
    { label: "WhatsApp", rate: "$0.0777 / message", example: "100 messages ≈ $7.77" },
  ]},
  { icon: Mail, category: "Email Marketing", rows: [
    { label: "Email (per email sent)", rate: "$0.0020 / email", example: "1,000 emails = $2.00" },
  ]},
  { icon: Bot, category: "Content AI", rows: [
    { label: "Text Generation", rate: "$0.27 / 1,000 words", example: "500-word article ≈ $0.14" },
    { label: "Image Generation", rate: "$0.18 / image", example: "10 images = $1.80" },
  ]},
  { icon: Workflow, category: "Workflow Automation (AI Models)", rows: [
    { label: "Input Processing", rate: "$1.80 / 750K words", example: "≈ $0.0024 per 1,000 words" },
    { label: "Output Generation", rate: "$7.20 / 750K words", example: "≈ $0.0096 per 1,000 words" },
  ]},
  { icon: Mic, category: "Conversation & Voice AI", rows: [
    { label: "Chat Messages", rate: "$0.06 / message", example: "50 chats ≈ $3.00" },
    { label: "Voice AI Calls", rate: "$0.39 / minute", example: "5-min AI call = $1.95" },
  ]},
  { icon: Star, category: "Reviews AI", rows: [
    { label: "Review Responses", rate: "$0.03 / response", example: "100 replies = $3.00" },
  ]},
];

const faqs = [
  {
    q: "What are usage credits?",
    a: "Usage credits are a pre-loaded wallet balance included with your plan each month. They cover pay-per-use actions like phone calls, SMS, emails, and AI-powered features. Think of them like minutes on a phone plan — you only pay for what you actually use.",
  },
  {
    q: "What happens if I use more than my included credits?",
    a: "Your account has a wallet you can top up at any time. You can set a minimum balance and an auto-recharge rule so your AI never stops working. You'll always see a detailed breakdown of exactly what was charged.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes — you can upgrade or downgrade your plan at any time. There are no long-term contracts. If you upgrade mid-month, you'll be prorated for the difference.",
  },
  {
    q: "What does the 20% annual discount apply to?",
    a: "The 20% discount applies to the base monthly subscription price when you pay annually upfront. Usage credits and any top-up amounts are billed separately at the same per-unit rates.",
  },
  {
    q: "Is the $500 setup fee really waived?",
    a: "Yes — for a limited time, the one-time $500 onboarding and setup fee is completely waived for all new accounts. Our team handles your full setup: Google listing, AI agent configuration, website build, and lead pipeline — all done for you.",
  },
  {
    q: "Do unused credits roll over?",
    a: "Monthly included credits do not roll over — they refresh each billing cycle. However, any credits you manually top up to your wallet do carry over month to month.",
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.05 }
    );
    const el = sectionRef.current;
    if (el) el.querySelectorAll(".fade-up").forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0D0D]" ref={sectionRef}>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 text-center px-4">
        <div className="fade-up mb-4 flex justify-center">
          <span className="section-label">Simple, Transparent Pricing</span>
        </div>
        <h1
          className="fade-up text-[clamp(2.8rem,6vw,5rem)] font-900 text-white uppercase leading-tight"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, transitionDelay: "100ms" }}
        >
          Invest in Your{" "}
          <span className="text-[#F97316]">Growth</span>
        </h1>
        <p
          className="fade-up text-white/60 text-lg mt-4 max-w-2xl mx-auto"
          style={{ fontFamily: "'DM Sans', sans-serif", transitionDelay: "200ms" }}
        >
          Four plans built for every stage of your trade business. All include a 30-day money back guarantee, onboarding support, and monthly usage credits.
        </p>

        {/* Monthly / Annual toggle */}
        <div className="fade-up mt-8 flex items-center justify-center gap-4" style={{ transitionDelay: "300ms" }}>
          <span
            className={`text-sm font-medium transition-colors ${!annual ? "text-white" : "text-white/40"}`}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${annual ? "bg-[#F97316]" : "bg-white/15"}`}
            aria-label="Toggle annual billing"
          >
            <span
              className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ${annual ? "translate-x-8" : "translate-x-1"}`}
            />
          </button>
          <span
            className={`text-sm font-medium transition-colors ${annual ? "text-white" : "text-white/40"}`}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Annual
            <span className="ml-2 bg-[#F97316]/20 text-[#F97316] text-xs font-bold px-2 py-0.5 rounded-sm">
              SAVE 20%
            </span>
          </span>
        </div>
      </section>

      {/* Setup fee waived banner */}
      <div className="fade-up max-w-3xl mx-auto px-4 mb-10" style={{ transitionDelay: "350ms" }}>
        <div className="flex items-center justify-center gap-3 bg-[#F97316]/10 border border-[#F97316]/40 rounded-sm px-6 py-4">
          <Tag className="w-5 h-5 text-[#F97316] flex-shrink-0" />
          <p className="text-center" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <span className="text-[#F97316] font-bold">LIMITED TIME:</span>{" "}
            <span className="text-white font-medium">$500 Setup Fee</span>{" "}
            <span className="text-white/50 line-through mr-1">$500</span>
            <span className="text-[#F97316] font-bold">WAIVED</span>
            <span className="text-white/60 ml-2 text-sm">— Start today, pay nothing to get set up.</span>
          </p>
        </div>
      </div>

      {/* Plan cards */}
      <section className="pb-20 px-4">
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
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span
                    className={`flex items-center gap-1.5 text-xs font-semibold px-4 py-1.5 rounded-sm whitespace-nowrap ${
                      plan.popular ? "bg-[#F97316] text-black" : "bg-sky-500 text-white"
                    }`}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {plan.popular && <Zap className="w-3 h-3 fill-black" />}
                    {plan.badge}
                  </span>
                </div>
              )}

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
                    className="text-5xl font-500 text-white transition-all duration-300"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {annual ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-white/50 text-sm mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>/mo</span>
                </div>
                {annual && (
                  <div className="mt-1 text-white/35 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Billed annually · was ${plan.price.monthly}/mo
                  </div>
                )}
                <div className="mt-1.5 flex items-center gap-1.5">
                  <span className="text-white/35 text-xs line-through" style={{ fontFamily: "'DM Sans', sans-serif" }}>+$500 setup</span>
                  <span className="text-[#F97316] text-xs font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>FREE</span>
                </div>
              </div>

              {/* Job Promoter volume badge */}
              <div className="mb-3 flex items-center gap-2 bg-white/4 border border-white/8 rounded-sm px-3 py-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F97316] flex-shrink-0" />
                <div>
                  <div className="text-[#F97316] text-xs font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Job Promoter — {plan.jobPromoterLabel}
                  </div>
                  <div className="text-white/45 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {plan.jobPromoterPosts}
                  </div>
                </div>
              </div>

              {/* Credits badge */}
              <div className="mb-4 flex items-center gap-2 bg-[#F97316]/8 border border-[#F97316]/20 rounded-sm px-3 py-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F97316] flex-shrink-0" />
                <div className="text-[#F97316] text-xs font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  ${plan.credits} Usage Credits Included/Month
                </div>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2 mb-6 flex-1">
                {plan.features
                  .filter((f) => !f.toLowerCase().includes("job promoter") && !f.toLowerCase().includes("usage credits"))
                  .map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.popular ? "text-[#F97316]" : "text-[#F97316]/60"}`}
                      />
                      <span
                        className={`text-sm ${feature.startsWith("Everything") ? "text-[#F97316] font-medium" : "text-white/65"}`}
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
              </ul>

              <a
                href="#contact-pricing"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/#contact";
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

        <p className="text-center text-white/40 text-sm mt-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          All plans include onboarding support · No long-term contracts · Cancel anytime
        </p>
      </section>

      {/* Usage Rates Section */}
      <section className="py-20 bg-[#111111] border-t border-white/8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="fade-up mb-4 flex justify-center">
              <span className="section-label">Pay Only for What You Use</span>
            </div>
            <h2
              className="fade-up text-[clamp(2rem,4vw,3.5rem)] font-900 text-white uppercase leading-tight"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, transitionDelay: "100ms" }}
            >
              Usage Rates &{" "}
              <span className="text-[#F97316]">Credits</span>
            </h2>
            <p
              className="fade-up text-white/55 text-base mt-4 max-w-2xl mx-auto"
              style={{ fontFamily: "'DM Sans', sans-serif", transitionDelay: "200ms" }}
            >
              For certain actions — phone calls, SMS, emails, and AI-powered features — there is a small pay-per-use charge. Each plan includes monthly credits to cover your typical usage. Think of it like a phone plan: you get a monthly allowance, and you only pay extra if you go over.
            </p>

            {/* Credits summary */}
            <div className="fade-up mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto" style={{ transitionDelay: "300ms" }}>
              {plans.map((p) => (
                <div key={p.name} className="bg-[#141414] border border-white/8 rounded-sm p-4 text-center">
                  <div className="text-white/50 text-xs uppercase tracking-wide mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{p.name}</div>
                  <div className="text-[#F97316] text-2xl font-bold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>${p.credits}</div>
                  <div className="text-white/40 text-xs mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>credits/mo</div>
                </div>
              ))}
            </div>
          </div>

          {/* Usage rates by category */}
          <div className="space-y-6">
            {usageRates.map((category, ci) => {
              const Icon = category.icon;
              return (
                <div key={ci} className="fade-up bg-[#141414] border border-white/8 rounded-sm overflow-hidden" style={{ transitionDelay: `${ci * 60}ms` }}>
                  <div className="flex items-center gap-3 px-5 py-3 bg-white/3 border-b border-white/8">
                    <Icon className="w-4 h-4 text-[#F97316]" />
                    <span className="text-white font-semibold text-sm uppercase tracking-wide" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                      {category.category}
                    </span>
                  </div>
                  <div className="divide-y divide-white/5">
                    {category.rows.map((row, ri) => (
                      <div key={ri} className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-5 py-3 gap-1">
                        <span className="text-white/70 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{row.label}</span>
                        <div className="flex items-center gap-4">
                          <span className="text-[#F97316] font-semibold text-sm font-mono">{row.rate}</span>
                          <span className="text-white/35 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>{row.example}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Usage quick facts */}
          <div className="fade-up mt-8 bg-[#F97316]/8 border border-[#F97316]/25 rounded-sm p-5">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-semibold text-sm mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>Usage Quick Facts</p>
                <ul className="space-y-1 text-white/55 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  <li>• A single text message can span multiple segments depending on length (standard SMS = 160 characters per segment)</li>
                  <li>• Workflow automation pricing is based on processed word count for both input and output</li>
                  <li>• All rates are estimates — actual billing reflects real usage and is itemized in your dashboard</li>
                  <li>• You can set a minimum wallet balance and auto-recharge rules so your AI never stops working</li>
                  <li>• Manually topped-up wallet credits carry over month to month; included plan credits refresh monthly</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#0D0D0D] border-t border-white/8">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="fade-up mb-4 flex justify-center">
              <span className="section-label">Common Questions</span>
            </div>
            <h2
              className="fade-up text-[clamp(2rem,4vw,3.5rem)] font-900 text-white uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, transitionDelay: "100ms" }}
            >
              Pricing <span className="text-[#F97316]">FAQ</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="fade-up bg-[#141414] border border-white/8 rounded-sm overflow-hidden"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-white font-semibold text-sm pr-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {faq.q}
                  </span>
                  <span className={`text-[#F97316] text-xl font-bold flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4">
                    <p className="text-white/55 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#111111] border-t border-white/8 text-center px-4">
        <div className="fade-up max-w-2xl mx-auto">
          <h2
            className="text-[clamp(2rem,4vw,3.5rem)] font-900 text-white uppercase leading-tight mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
          >
            Ready to <span className="text-[#F97316]">Get Started?</span>
          </h2>
          <p className="text-white/55 text-base mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            No long-term contracts. 30-day money back guarantee. Setup fee waived — limited time.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A] text-black font-bold px-10 py-4 rounded-sm text-base transition-all duration-200 pulse-glow"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <Zap className="w-5 h-5 fill-black" />
            Get Started Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
