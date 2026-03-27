/*
 * DESIGN: Industrial Brutalism — Split layout with AI dashboard image + feature list
 */
import { useEffect, useRef } from "react";
import { Bot, TrendingUp, Clock, Shield } from "lucide-react";

const AI_DASHBOARD = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485111386/DggHMYqYmKSoMpB2pB5sTZ/ai-dashboard-ZQvQg4K9jvT4urMpz8tHsh.webp";

const features = [
  {
    icon: Bot,
    title: "AI Employees, Not Just Tools",
    desc: "Unlike software you have to manage, our AI agents work autonomously — answering calls, posting content, and following up with leads without any input from you.",
  },
  {
    icon: TrendingUp,
    title: "Done-For-You Implementation",
    desc: "Our human team sets everything up, trains your AI agents, and handles all the technical work. You never touch a dashboard unless you want to.",
  },
  {
    icon: Clock,
    title: "Results in 30 Days or Less",
    desc: "Most contractors see measurable results — more leads, better Google ranking, higher close rates — within the first month of working with us.",
  },
  {
    icon: Shield,
    title: "Built Specifically for Trades",
    desc: "We don't serve everyone. Our AI is trained on contractor-specific scenarios, language, and workflows — not generic business templates.",
  },
];

export default function FeaturesOverview() {
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
    <section className="py-24 bg-[#0D0D0D]" ref={sectionRef}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="fade-up relative order-2 lg:order-1">
            <div className="relative rounded-sm overflow-hidden border border-white/10">
              <img
                src={AI_DASHBOARD}
                alt="AI Marketing Dashboard for Contractors"
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-5 -right-5 bg-[#141414] border border-[#F97316]/30 rounded-sm p-4 shadow-xl shadow-black/50">
              <div
                className="text-3xl font-500 text-[#F97316]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                +312%
              </div>
              <div className="text-white/50 text-xs mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Average lead increase
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <div className="fade-up mb-4">
              <span className="section-label">The AI Advantage</span>
            </div>
            <h2
              className="fade-up text-[clamp(2.5rem,5vw,3.5rem)] font-900 text-white uppercase leading-tight mb-6"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, transitionDelay: "100ms" }}
            >
              AI That Works Like a{" "}
              <span className="text-[#F97316]">Full Marketing Team</span>
            </h2>
            <p
              className="fade-up text-white/65 text-lg leading-relaxed mb-10"
              style={{ fontFamily: "'DM Sans', sans-serif", transitionDelay: "200ms" }}
            >
              2026 is the year AI goes from a "tool I use" to an "employee that does things for me." 
              Don't miss this opportunity — let us build your AI marketing team.
            </p>

            <div className="space-y-6">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="fade-up flex gap-4"
                    style={{ transitionDelay: `${300 + i * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-[#F97316]/10 border border-[#F97316]/20 rounded-sm flex items-center justify-center mt-0.5">
                      <Icon className="w-5 h-5 text-[#F97316]" />
                    </div>
                    <div>
                      <h3
                        className="text-white font-semibold text-base mb-1"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className="text-white/55 text-sm leading-relaxed"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
