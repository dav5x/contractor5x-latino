/*
 * DESIGN: Industrial Brutalism — Dark surface cards, orange X icons, bold problem statements
 */
import { useEffect, useRef } from "react";
import { XCircle } from "lucide-react";

const problems = [
  {
    title: "Trabajo Increíble, Cero Visibilidad",
    desc: "Haces proyectos de alta calidad, pero los clientes potenciales nunca los ven. Tu mejor trabajo está acumulando polvo en el rollo de la cámara de tu teléfono.",
  },
  {
    title: "Demasiados Roles a la Vez",
    desc: "Manejar el negocio, coordinar crews, contestar llamadas, dar seguimiento a leads — no hay suficientes horas en el día.",
  },
  {
    title: "Leads Que Se Pierden",
    desc: "Alguien pregunta, te ocupas con un job, y cuando das follow-up, ya contrataron a otro.",
  },
  {
    title: "Invisible en Google",
    desc: "Tu competidor con la mitad de tu skill aparece primero en la búsqueda local porque tiene más reviews y un listing optimizado.",
  },
  {
    title: "Clientes Viejos Te Olvidan",
    desc: "Has servido a cientos de clientes, pero solo te buscan cuando algo se rompe — perdiendo ingresos de repeat y referrals.",
  },
  {
    title: "Sin Tiempo Para Marketing",
    desc: "Sabes que necesitas un website profesional y presencia social, pero entre estimates y jobs, el marketing es lo último en tu mente.",
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
            <span className="section-label">¿Te Suena Familiar?</span>
          </div>
          <h2
            className="fade-up text-[clamp(2.5rem,5vw,4rem)] font-900 text-white uppercase leading-tight max-w-2xl"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, transitionDelay: "100ms" }}
          >
            Los Problemas Que Frenan a los Contractors
          </h2>
          <p
            className="fade-up text-white/60 text-lg mt-4 max-w-xl"
            style={{ fontFamily: "'DM Sans', sans-serif", transitionDelay: "200ms" }}
          >
            Cada contractor con quien hablamos enfrenta estos seis retos. 
            Construimos Contractor5x específicamente para eliminarlos todos.
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
              Construimos <span className="text-[#F97316] font-semibold">seis herramientas con AI</span> para resolver cada uno de estos problemas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}