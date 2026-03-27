/*
 * DESIGN: Industrial Brutalism — Tabbed services with large feature numbers, orange accents
 * Alternating text/image layout for each service
 */
import { useState, useEffect, useRef } from "react";
import {
  Zap,
  Camera,
  Bot,
  Globe,
  RefreshCw,
  Star,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

const AI_DASHBOARD = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485111386/DggHMYqYmKSoMpB2pB5sTZ/ai-dashboard-ZQvQg4K9jvT4urMpz8tHsh.webp";
const LEAD_CLOSER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485111386/DggHMYqYmKSoMpB2pB5sTZ/lead-closer-2mGVu2toi2ThpCWjbnyWaU.webp";
const CONTRACTOR_WORK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485111386/DggHMYqYmKSoMpB2pB5sTZ/contractor-work-n3H8tibW5po8kuFCJYpTqK.webp";
const GOOGLE_REVIEWS = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485111386/DggHMYqYmKSoMpB2pB5sTZ/google-reviews-NjJWK5X2ixFWSDXEKDaQGJ.webp";

const services = [
  {
    id: "lead-closer",
    number: "01",
    icon: Zap,
    label: "Your 24/7 Sales Machine",
    title: "Lead Closer",
    tagline: "Never lose a lead to a competitor again.",
    quote:
      '"You\'re out on a job site, covered in drywall dust, and your phone buzzes with 3 new quote requests. By the time you get home, those leads have already called your competitor."',
    desc: "Lead Closer responds instantly, qualifies leads, and keeps them warm until you're ready to close. Your pipeline stays full while you focus on the work you love.",
    stats: [
      { value: "78%", label: "of leads go to first responder" },
      { value: "5 min", label: "optimal response time" },
      { value: "3X", label: "more conversions" },
    ],
    features: [
      "Smart Pipeline Dashboard",
      "Custom Branded Intake Forms",
      "Two-way SMS & Call Tracking",
      "Automated Drip Campaigns",
      "Set-and-Forget Workflows",
      "Email & SMS Outreach",
    ],
    image: LEAD_CLOSER,
    imageAlt: "Contractor checking leads on phone at job site",
  },
  {
    id: "job-promoter",
    number: "02",
    icon: Camera,
    label: "Your Work Speaks — We Make It Loud",
    title: "Job Promoter",
    tagline: "Your craftsmanship finally gets the attention it deserves.",
    quote:
      '"Your Instagram is empty. Your website shows work from 3 years ago. Meanwhile, a competitor with half your skill is booking jobs because they look more professional online."',
    desc: "We capture your best work with professional lookbooks, videos, and before/afters — then distribute them across every platform that matters.",
    stats: [
      { value: "93%", label: "check reviews before hiring" },
      { value: "4X", label: "more engagement with video" },
      { value: "87%", label: "trust visuals over text" },
    ],
    features: [
      "Magazine-Quality Lookbooks",
      "Organized Photo Gallery",
      "Detailed Case Studies",
      "SEO & AI Optimization",
      "Up to 25 Videos/Month",
      "Consistent Social Posting",
    ],
    image: CONTRACTOR_WORK,
    imageAlt: "Professional contractors at work on residential project",
  },
  {
    id: "ai-agent",
    number: "03",
    icon: Bot,
    label: "Never Miss Another Call",
    title: "AI Agent",
    tagline: "Every call answered. Every lead captured. 24/7.",
    quote:
      '"You can\'t answer every call when you\'re 20 feet up on a ladder or knee-deep in a renovation. But every missed call is money walking out the door."',
    desc: "Our AI Agent answers every call and chat instantly, 24/7. It sounds natural, answers questions, qualifies leads, and books appointments — all while you focus on the job.",
    stats: [
      { value: "85%", label: "of callers won't leave voicemail" },
      { value: "24/7", label: "availability without hiring" },
      { value: "$0", label: "extra staff cost" },
    ],
    features: [
      "Natural-Sounding AI Voice",
      "Instant Lead Qualification",
      "Appointment Booking",
      "FAQ Auto-Responses",
      "Call Recording & Transcripts",
      "Seamless CRM Integration",
    ],
    image: AI_DASHBOARD,
    imageAlt: "AI marketing dashboard with lead pipeline",
  },
  {
    id: "smart-website",
    number: "04",
    icon: Globe,
    label: "A Website That Works As Hard As You Do",
    title: "Hands Off Smart Website",
    tagline: "Professional, converting, and completely maintenance-free.",
    quote:
      '"You know you need a professional website, but who has time to manage it? Between estimates, jobs, and running a business, web design is the last thing on your mind."',
    desc: "We build, maintain, and continuously optimize your website — you never touch it. It's always updated, always secure, and always converting visitors into leads.",
    stats: [
      { value: "75%", label: "judge credibility by website" },
      { value: "0.05s", label: "to make first impression" },
      { value: "0hrs", label: "maintenance on your end" },
    ],
    features: [
      "Custom Professional Design",
      "Regular Content Updates",
      "Security & Maintenance",
      "Smart Chat Widget",
      "Universal Inbox",
      "Local SEO Optimized",
    ],
    image: CONTRACTOR_WORK,
    imageAlt: "Professional contractor team",
  },
  {
    id: "reactivator",
    number: "05",
    icon: RefreshCw,
    label: "Your Past Customers Are Gold",
    title: "Customer Re-Activator",
    tagline: "Turn your existing customer base into a revenue engine.",
    quote:
      '"You\'ve served hundreds of customers over the years, but you only hear from them when something breaks. Meanwhile, they\'re hiring other contractors for jobs you could have had."',
    desc: "Re-Activator automatically stays in touch with your past customers — birthday wishes, seasonal reminders, special offers. When they need a contractor, your name is first.",
    stats: [
      { value: "5X", label: "cheaper than new customers" },
      { value: "67%", label: "more likely to buy again" },
      { value: "∞", label: "lifetime value potential" },
    ],
    features: [
      "Automated Holiday Campaigns",
      "Win-Back Targeted Offers",
      "Birthday & Anniversary Touches",
      "Seasonal Service Reminders",
      "Referral Program Automation",
      "Feedback & Review Requests",
    ],
    image: LEAD_CLOSER,
    imageAlt: "Contractor managing customer relationships",
  },
  {
    id: "google-optimizer",
    number: "06",
    icon: Star,
    label: "Own Your Local Search Results",
    title: "Google Listing Optimizer",
    tagline: "Dominate local search and become the obvious choice.",
    quote:
      '"Your Google listing has 4 reviews from 2019. Your competitor has 87 reviews and shows up first for every search. You\'re invisible to customers actively looking for you."',
    desc: "We optimize your Google Business Profile, generate consistent reviews, and respond to every one with AI. Your listing climbs the rankings and becomes a lead machine.",
    stats: [
      { value: "46%", label: "of Google searches are local" },
      { value: "88%", label: "trust online reviews" },
      { value: "#1", label: "position gets 33% of clicks" },
    ],
    features: [
      "Complete Profile Optimization",
      "Automated Review Generation",
      "AI-Powered Review Replies",
      "4 Google Posts/Month",
      "Reputation Monitoring",
      "Competitor Analysis",
    ],
    image: GOOGLE_REVIEWS,
    imageAlt: "Google Business Profile with 5-star reviews",
  },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("lead-closer");
  const sectionRef = useRef<HTMLDivElement>(null);

  const activeService = services.find((s) => s.id === activeTab) || services[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.05 }
    );

    const el = sectionRef.current;
    if (el) {
      el.querySelectorAll(".fade-up, .fade-in").forEach((child) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 bg-[#0D0D0D] grid-pattern" ref={sectionRef}>
      <div className="container">
        {/* Section header */}
        <div className="mb-12">
          <div className="fade-up mb-4">
            <span className="section-label">Powerful Solutions for Contractors</span>
          </div>
          <h2
            className="fade-up text-[clamp(2.5rem,5vw,4rem)] font-900 text-white uppercase leading-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, transitionDelay: "100ms" }}
          >
            Everything You Need to{" "}
            <span className="text-[#F97316]">Grow 5X</span>
          </h2>
          <p
            className="fade-up text-white/60 text-lg mt-3 max-w-xl"
            style={{ fontFamily: "'DM Sans', sans-serif", transitionDelay: "200ms" }}
          >
            Six AI-powered tools designed specifically for contractors who want to spend less
            time chasing leads and more time doing what they love.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="fade-up mb-10 overflow-x-auto" style={{ transitionDelay: "300ms" }}>
          <div className="flex gap-2 min-w-max pb-2">
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = activeTab === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-sm text-sm font-medium transition-all duration-200 border ${
                    isActive
                      ? "bg-[#F97316] text-black border-[#F97316]"
                      : "bg-transparent text-white/60 border-white/10 hover:border-white/25 hover:text-white"
                  }`}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {service.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active service detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div key={activeService.id + "-content"}>
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-[#F97316]/30 font-900 text-6xl leading-none select-none"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
              >
                {activeService.number}
              </span>
              <div>
                <span className="section-label text-xs">{activeService.label}</span>
              </div>
            </div>

            <h3
              className="text-[clamp(2rem,4vw,3rem)] font-900 text-white uppercase mb-2"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
            >
              {activeService.title}
            </h3>
            <p className="text-[#F97316] font-medium mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {activeService.tagline}
            </p>

            {/* Quote */}
            <blockquote className="border-l-2 border-[#F97316]/40 pl-4 mb-6">
              <p className="text-white/50 text-sm italic leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {activeService.quote}
              </p>
            </blockquote>

            <p className="text-white/70 mb-8 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {activeService.desc}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-white/3 border border-white/8 rounded-sm">
              {activeService.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-2xl font-500 text-[#F97316]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/40 mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Features list */}
            <div className="grid grid-cols-2 gap-2 mb-8">
              {activeService.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0" />
                  <span className="text-sm text-white/70" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A] text-black font-semibold px-6 py-3 rounded-sm transition-all duration-200 text-sm"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Learn More About {activeService.title}
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Image */}
          <div key={activeService.id + "-image"} className="relative">
            <div className="relative rounded-sm overflow-hidden aspect-[4/3] border border-white/10">
              <img
                src={activeService.image}
                alt={activeService.imageAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              {/* Service badge overlay */}
              <div className="absolute bottom-4 left-4">
                <span className="section-label text-xs">{activeService.title}</span>
              </div>
            </div>
            {/* Decorative orange border accent */}
            <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-2 border-r-2 border-[#F97316]/40" />
            <div className="absolute -top-2 -left-2 w-16 h-16 border-t-2 border-l-2 border-[#F97316]/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
