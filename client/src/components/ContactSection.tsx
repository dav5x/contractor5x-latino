/*
 * DESIGN: Industrial Brutalism — Dark CTA section with orange form, bold headline
 */
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";

const benefits = [
  "See all 6 AI tools in action",
  "Get a custom growth plan for your trade",
  "No pressure, no obligation",
  "Takes only 15 minutes",
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    trade: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0A0A]" ref={sectionRef}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Content */}
          <div>
            <div className="fade-up mb-4">
              <span className="section-label">Free 15-Minute Demo</span>
            </div>
            <h2
              className="fade-up text-[clamp(2.5rem,5vw,4rem)] font-900 text-white uppercase leading-tight mb-6"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, transitionDelay: "100ms" }}
            >
              Ready to{" "}
              <span className="text-[#F97316]">5X Your Business?</span>
            </h2>
            <p
              className="fade-up text-white/65 text-lg leading-relaxed mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif", transitionDelay: "200ms" }}
            >
              Book a free 15-minute demo and see exactly how Contractor5x can transform your 
              trade business. We'll show you the tools, walk through your specific situation, 
              and give you a custom growth plan — no strings attached.
            </p>

            {/* Benefits */}
            <div className="fade-up space-y-3 mb-10" style={{ transitionDelay: "300ms" }}>
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F97316] flex-shrink-0" />
                  <span className="text-white/75" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="fade-up space-y-3 pt-8 border-t border-white/8" style={{ transitionDelay: "400ms" }}>
              <div className="flex items-center gap-3 text-white/50">
                <Phone className="w-4 h-4 text-[#F97316]" />
                <span className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  (555) 123-4567
                </span>
              </div>
              <div className="flex items-center gap-3 text-white/50">
                <Mail className="w-4 h-4 text-[#F97316]" />
                <span className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  hello@contractor5x.com
                </span>
              </div>
              <div className="flex items-center gap-3 text-white/50">
                <MapPin className="w-4 h-4 text-[#F97316]" />
                <span className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Serving contractors across the United States
                </span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="fade-up" style={{ transitionDelay: "200ms" }}>
            <div className="bg-[#141414] border border-white/10 rounded-sm p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#F97316]/15 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#F97316]" />
                  </div>
                  <h3
                    className="text-white text-2xl font-700 uppercase mb-3"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}
                  >
                    You're All Set!
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    We'll reach out within 24 hours to schedule your free demo. 
                    Get ready to see what AI can do for your business.
                  </p>
                </div>
              ) : (
                <>
                  <h3
                    className="text-white text-xl font-700 uppercase mb-6"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}
                  >
                    Book Your Free Demo
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/60 text-xs mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full bg-[#0D0D0D] border border-white/10 text-white placeholder-white/25 px-4 py-3 rounded-sm text-sm focus:border-[#F97316]/50 focus:outline-none transition-colors"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        />
                      </div>
                      <div>
                        <label className="block text-white/60 text-xs mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 000-0000"
                          className="w-full bg-[#0D0D0D] border border-white/10 text-white placeholder-white/25 px-4 py-3 rounded-sm text-sm focus:border-[#F97316]/50 focus:outline-none transition-colors"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/60 text-xs mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@yourcompany.com"
                        className="w-full bg-[#0D0D0D] border border-white/10 text-white placeholder-white/25 px-4 py-3 rounded-sm text-sm focus:border-[#F97316]/50 focus:outline-none transition-colors"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      />
                    </div>

                    <div>
                      <label className="block text-white/60 text-xs mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        Your Trade *
                      </label>
                      <select
                        name="trade"
                        required
                        value={formData.trade}
                        onChange={handleChange}
                        className="w-full bg-[#0D0D0D] border border-white/10 text-white px-4 py-3 rounded-sm text-sm focus:border-[#F97316]/50 focus:outline-none transition-colors appearance-none"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        <option value="" className="bg-[#0D0D0D]">Select your trade...</option>
                        <option value="hvac" className="bg-[#0D0D0D]">HVAC</option>
                        <option value="plumbing" className="bg-[#0D0D0D]">Plumbing</option>
                        <option value="electrical" className="bg-[#0D0D0D]">Electrical</option>
                        <option value="general" className="bg-[#0D0D0D]">General Contracting</option>
                        <option value="roofing" className="bg-[#0D0D0D]">Roofing</option>
                        <option value="pest" className="bg-[#0D0D0D]">Pest Control</option>
                        <option value="landscaping" className="bg-[#0D0D0D]">Landscaping/Hardscaping</option>
                        <option value="painting" className="bg-[#0D0D0D]">Painting</option>
                        <option value="tree" className="bg-[#0D0D0D]">Tree Service</option>
                        <option value="other" className="bg-[#0D0D0D]">Other Trade</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-white/60 text-xs mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        Biggest Challenge (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="What's your biggest marketing challenge right now?"
                        rows={3}
                        className="w-full bg-[#0D0D0D] border border-white/10 text-white placeholder-white/25 px-4 py-3 rounded-sm text-sm focus:border-[#F97316]/50 focus:outline-none transition-colors resize-none"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-glow w-full bg-[#F97316] hover:bg-[#EA6C0A] text-black font-semibold py-4 rounded-sm transition-all duration-200 flex items-center justify-center gap-2 text-base"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Book My Free Demo
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <p className="text-center text-white/35 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      No spam. No pressure. We'll reach out within 24 hours.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
