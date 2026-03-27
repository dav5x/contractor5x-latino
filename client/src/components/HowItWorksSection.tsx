/*
 * DESIGN: Industrial Brutalism — Large numbered steps, orange connecting line, dark bg
 */
import { useEffect, useRef } from "react";
import { Upload, TrendingUp, Settings, DollarSign } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "We Onboard Your Business",
    desc: "Our team sets up your AI agents, optimizes your Google listing, builds your website, and configures your lead pipeline — all done for you in under a week.",
  },
  {
    number: "02",
    icon: Settings,
    title: "AI Goes to Work 24/7",
    desc: "Your AI team answers calls, responds to leads, posts your work on social media, and keeps your past customers engaged — automatically, around the clock.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Leads Flow In Consistently",
    desc: "Your Google ranking climbs, your online presence grows, and qualified leads start coming to you instead of you chasing them down.",
  },
  {
    number: "04",
    icon: DollarSign,
    title: "You Close More & Earn More",
    desc: "When a lead is hot, you get notified. You jump in, close the deal, and get back to doing what you love — delivering exceptional work.",
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    const el = sectionRef.current;
    if (el) el.querySelectorAll(".fade-up").forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="py-24 bg-[#0D0D0D]" ref={sectionRef}>
      <div className="container">
        <div className="mb-16">
          <div className="fade-up mb-4">
            <span className="section-label">Simple Process</span>
          </div>
          <h2
            className="fade-up text-[clamp(2.5rem,5vw,4rem)] font-900 text-white uppercase leading-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, transitionDelay: "100ms" }}
          >
            Up and Running in{" "}
            <span className="text-[#F97316]">Under a Week</span>
          </h2>
          <p
            className="fade-up text-white/60 text-lg mt-3 max-w-xl"
            style={{ fontFamily: "'DM Sans', sans-serif", transitionDelay: "200ms" }}
          >
            No technical skills required. Our team handles everything — you just show up and do great work.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[calc(12.5%-1px)] right-[calc(12.5%-1px)] h-px bg-gradient-to-r from-transparent via-[#F97316]/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="fade-up relative"
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {/* Step number + icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="relative">
                      <div className="w-12 h-12 bg-[#F97316] flex items-center justify-center rounded-sm">
                        <Icon className="w-5 h-5 text-black" />
                      </div>
                    </div>
                    <span
                      className="text-4xl font-900 text-white/10 select-none"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3
                    className="text-white font-700 text-xl mb-3 uppercase"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-white/55 text-sm leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {step.desc}
                  </p>

                  {/* Connector arrow (mobile) */}
                  {i < steps.length - 1 && (
                    <div className="lg:hidden mt-6 flex justify-center">
                      <div className="w-px h-8 bg-[#F97316]/30" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center fade-up" style={{ transitionDelay: "600ms" }}>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-glow pulse-glow inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A] text-black font-semibold px-8 py-4 rounded-sm transition-all duration-200 text-base"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Get Started Today — Free Demo
          </a>
          <p className="text-white/40 text-sm mt-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            No credit card required · Setup in under 10 minutes
          </p>
        </div>
      </div>
    </section>
  );
}
