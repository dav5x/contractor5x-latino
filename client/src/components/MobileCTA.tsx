/*
 * DESIGN: Industrial Brutalism — Sticky bottom CTA bar for mobile users
 */
import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0A0A0A]/95 backdrop-blur-md border-t border-white/10 p-4 flex gap-3">
      <a
        href="tel:5551234567"
        className="flex-1 flex items-center justify-center gap-2 bg-white/8 border border-white/15 text-white font-semibold py-3 rounded-sm text-sm"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <Phone className="w-4 h-4" />
        Call Us
      </a>
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="flex-2 flex-grow flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A] text-black font-semibold py-3 rounded-sm text-sm"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        Book Free Demo
      </a>
    </div>
  );
}
