/*
 * DISEÑO: Brutalismo Industrial — Barra de confianza oscura con estadísticas/logos en scroll
 */
import { useEffect, useRef } from "react";
import { Star, Shield, Award, Users } from "lucide-react";

const trustItems = [
  { icon: Users, text: "500+ Contratistas Activos" },
  { icon: Star, text: "4.9★ Calificación Promedio" },
  { icon: Shield, text: "Garantía de 30 Días o Te Devolvemos Tu Dinero" },
  { icon: Award, text: "#1 Marketing AI para Trades" },
  { icon: Users, text: "HVAC · Plumbing · Electrical · Roofing" },
  { icon: Star, text: "Resultados en 30 Días o Menos" },
];

export default function TrustBar() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-[#141414] border-y border-white/5 py-3 overflow-hidden">
      <div className="flex gap-0 animate-[marquee_25s_linear_infinite]" ref={trackRef}>
        {[...trustItems, ...trustItems].map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-2 px-8 whitespace-nowrap flex-shrink-0"
            >
              <Icon className="w-3.5 h-3.5 text-[#F97316]" />
              <span
                className="text-white/50 text-sm"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {item.text}
              </span>
              <span className="text-[#F97316]/30 ml-6">·</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}