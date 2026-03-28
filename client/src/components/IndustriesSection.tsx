/*
 * DESIGN: Industrial Brutalism — Dark grid of trade industries with icon accents
 */
import { useEffect, useRef } from "react";
import {
  Thermometer,
  Bug,
  HardHat,
  Square,
  TreePine,
  Layers,
  Droplets,
  Zap,
  Paintbrush,
  Wrench,
  Home,
  MoreHorizontal,
} from "lucide-react";

const industries = [
  { icon: Thermometer, name: "HVAC", desc: "Calefacción, cooling y ventilación" },
  { icon: Bug, name: "Control de Plagas", desc: "Residencial y comercial" },
  { icon: HardHat, name: "Contratista General", desc: "Construye y renueva" },
  { icon: Square, name: "Ventanas y Puertas", desc: "Instalación y reemplazo" },
  { icon: TreePine, name: "Servicio de Árboles", desc: "Poda y remoción" },
  { icon: Layers, name: "Hardscaping", desc: "Patios, caminos y más" },
  { icon: Droplets, name: "Plomería", desc: "Residencial y comercial" },
  { icon: Zap, name: "Eléctrico", desc: "Cableado e instalaciones" },
  { icon: Paintbrush, name: "Pintura", desc: "Interior y exterior" },
  { icon: Wrench, name: "Reparación de Electrodomésticos", desc: "Todas las marcas principales" },
  { icon: Home, name: "Roofing", desc: "Reparación y reemplazo" },
  { icon: MoreHorizontal, name: "Y Más", desc: "Atendemos todos los trades" },
];

export default function IndustriesSection() {
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
    <section id="industries" className="py-24 bg-[#0A0A0A]" ref={sectionRef}>
      <div className="container">
        <div className="mb-14">
          <div className="fade-up mb-4">
            <span className="section-label">Hecho Para Cada Trade</span>
          </div>
          <h2
            className="fade-up text-[clamp(2.5rem,5vw,4rem)] font-900 text-white uppercase leading-tight max-w-2xl"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, transitionDelay: "100ms" }}
          >
            Desde HVAC hasta Hardscaping —{" "}
            <span className="text-[#F97316]">Aquí Estamos Para Ti</span>
          </h2>
          <p
            className="fade-up text-white/60 text-lg mt-3 max-w-xl"
            style={{ fontFamily: "'DM Sans', sans-serif", transitionDelay: "200ms" }}
          >
            Nuestras soluciones de marketing con AI están hechas a la medida para las necesidades específicas de los negocios locales en todos los specialties.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.name}
                className="fade-up feature-card bg-[#141414] border border-white/8 p-4 rounded-sm flex flex-col items-center text-center gap-3"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="w-10 h-10 bg-[#F97316]/10 border border-[#F97316]/20 rounded-sm flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#F97316]" />
                </div>
                <div>
                  <div
                    className="text-white font-semibold text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {industry.name}
                  </div>
                  <div
                    className="text-white/40 text-xs mt-0.5"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {industry.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}