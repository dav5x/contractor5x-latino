/*
 * DESIGN: Industrial Brutalism — Dark surface cards, orange X icons, bold problem statements
 */
import { useEffect, useRef } from "react";
import { XCircle } from "lucide-react";

const problems = [
  {
    title: "Amazing Work, Zero Visibility",
    desc: "You complete high-quality projects, but potential clients never see them. Your best work is gathering dust in your phone's camera roll.",
  },
  {
    title: "Wearing Too Many Hats",
    desc: "Running the business, managing crews, answering calls, following up on leads — there aren't enough hours in the day.",
  },
  {
    title: "Leads Falling Through the Cracks",
    desc: "Someone inquires, you get busy with a job, and by the time you follow up, they've already hired someone else.",
  },
  {
    title: "Invisible on Google",
    desc: "Your competitor with half your skill is showing up first in local search because they have more reviews and an optimized listing.",
  },
  {
    title: "Past Customers Forget You",
    desc: "You've served hundreds of customers, but you only hear from them when something breaks — missing out on repeat and referral revenue.",
  },
  {
    title: "No Time for Marketing",
    desc: "You know you need a professional website and social presence, but between estimates and jobs, marketing is the last thing on your mind.",
  },
];

export default function ProblemsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const el = sectionRef.current;
    if (el) {
      el.querySelectorAll(".fade-up").forEach((child) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-[#0A0A0A]" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="mb-14">
          <div className="fade-up mb-4">
            <span className="section-label">Sound Familiar?</span>
          </div>
          <h2
            className="fade-up text-[clamp(2.5rem,5vw,4rem)] font-900 text-white uppercase leading-tight max-w-2xl"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, transitionDelay: "100ms" }}
          >
            The Problems Holding Contractors Back
          </h2>
          <p
            className="fade-up text-white/60 text-lg mt-4 max-w-xl"
            style={{ fontFamily: "'DM Sans', sans-serif", transitionDelay: "200ms" }}
          >
            Every contractor we talk to faces the same six challenges. 
            We built Contractor5x specifically to eliminate all of them.
          </p>
        </div>

        {/* Problem cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((problem, i) => (
            <div
              key={problem.title}
              className="fade-up feature-card bg-[#141414] border border-white/8 p-6 rounded-sm"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-0.5">
                  <XCircle className="w-5 h-5 text-red-500/70" />
                </div>
                <div>
                  <h3
                    className="text-white font-semibold text-base mb-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {problem.title}
                  </h3>
                  <p
                    className="text-white/50 text-sm leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {problem.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transition statement */}
        <div className="mt-16 text-center fade-up" style={{ transitionDelay: "600ms" }}>
          <div className="inline-block">
            <span className="orange-rule mx-auto" style={{ display: "block", margin: "0 auto 1rem" }} />
            <p
              className="text-xl text-white/80 font-medium"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              We built <span className="text-[#F97316] font-semibold">six AI-powered tools</span> to solve every single one of these.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
