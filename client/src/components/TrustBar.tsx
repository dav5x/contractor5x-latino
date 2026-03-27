/*
 * DESIGN: Industrial Brutalism — Dark trust bar with scrolling stats/logos
 */
import { useEffect, useRef } from "react";
import { Star, Shield, Award, Users } from "lucide-react";

const trustItems = [
  { icon: Users, text: "500+ Active Contractors" },
  { icon: Star, text: "4.9★ Average Rating" },
  { icon: Shield, text: "14-Day Free Trial" },
  { icon: Award, text: "#1 AI Marketing for Trades" },
  { icon: Users, text: "HVAC · Plumbing · Electrical · Roofing" },
  { icon: Star, text: "Results in 30 Days or Less" },
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
