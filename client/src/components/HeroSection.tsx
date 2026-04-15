import { useEffect, useRef } from "react";
import { ArrowRight, Play, Phone, CheckCircle2 } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485111386/DggHMYqYmKSoMpB2pB5sTZ/van-hero-no-qr_785ff1fc.png";

const stats = [
	{ value: "5X", label: "Multiplica los Resultados" },
	{ value: "78%", label: "Más Leads Cerrados" },
	{ value: "24/7", label: "El AI Trabaja Para Ti" },
];

const badges = [
	"Garantía de 30 días o te devolvemos tu dinero",
	"Resultados en 30 días o menos",
];

export default function HeroSection(){
	const headlineRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if(entry.isIntersecting){
						entry.target.classList.add("visible");
					}
				});
			},
			{ threshold: 0.1 }
		);

		const el = headlineRef.current;
		if(el){
			el.querySelectorAll(".fade-up, .fade-in").forEach((child) => {
				observer.observe(child);
			});
		}

		return () => observer.disconnect();
	}, []);

	return (
		<section className="relative min-h-screen flex items-center overflow-hidden">
			{/* Background Image */}
			<div className="absolute inset-0 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${HERO_BG})`, backgroundPosition: "75% center" }}/>

			{/* Dark overlay — solid on far left for text, fades to fully transparent on right to show full van */}
			<div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #0A0A0A 28%, rgba(10,10,10,0.55) 44%, rgba(10,10,10,0.0) 65%)' }} />
			<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />

			{/* Grid pattern overlay */}
			<div className="absolute inset-0 grid-pattern opacity-30" />

			<div className="container relative z-10 pt-28 pb-20" ref={headlineRef}>
				<div className="max-w-3xl">
					{/* Section label */}
					<div className="fade-up mb-6">
						<span className="section-label">
							<span className="w-1.5 h-1.5 bg-[#F97316] rounded-full inline-block" />AI Marketing Para los Trades</span>
						</div>

						{/* Main headline */}
						<div className="fade-up" style={{ transitionDelay: "100ms" }}>
							<h1 className="text-[clamp(3rem,8vw,6.5rem)] leading-[0.9] font-900 text-white uppercase mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}>
								MULTIPLICA TUS
							</h1>
							<h1 className="text-[clamp(3rem,8vw,6.5rem)] leading-[0.9] font-900 uppercase mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}>
								<span className="text-[#F97316]">RESULTADOS</span>
							</h1>
						</div>

						{/* Subheadline */}
						<div className="fade-up" style={{ transitionDelay: "200ms" }}>
							<p className="text-xl md:text-xl text-white max-w-2xl leading-relaxed mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>Ponemos un equipo de agentes humanos y AI para asegurar una presencia web espectaculary un manejo adecuado de leads, mostrando tu trabajo de manera eficaz y recurrente, y llenando tu pipeline mientras tú te concentras en el job site.</p>
						</div>

						{/* CTA Buttons */}
						<div className="fade-up flex flex-wrap gap-4 mb-10" style={{ transitionDelay: "300ms" }}>
							<a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });}} className="btn-glow pulse-glow bg-[#F97316] hover:bg-[#EA6C0A] text-black font-semibold px-7 py-4 rounded-sm transition-all duration-200 flex items-center gap-2 text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>
								Empieza Ya
								<ArrowRight className="w-4 h-4" />
							</a>

							<a href="#contact" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors px-4 py-4 border border-white/15 hover:border-white/30 rounded-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
								<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
									<Phone className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
								</div>
								<span className="text-sm font-medium">Agenda una llamada</span>
							</a>

							<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors px-4 py-4 border border-white/15 hover:border-white/30 rounded-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
								<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
									<Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
								</div>
								<span className="text-sm font-medium">Mira Cómo Funciona</span>
							</a>
						</div>

						{/* Trust badges */}
						<div className="fade-up flex flex-wrap gap-4" style={{ transitionDelay: "400ms" }}>
							{badges.map((badge) => (
								<div key={badge} className="flex items-center gap-2 text-sm text-white/60">
									<CheckCircle2 className="w-4 h-4 text-[#F97316]" />
									<span style={{ fontFamily: "'DM Sans', sans-serif" }}>{badge}</span>
								</div>
							))}
						</div>
					</div>

					{/* Stats bar — bottom of hero */}
					<div className="mt-16 pt-8 border-t border-white/10">
						<div className="grid grid-cols-3 gap-8 max-w-2xl">
							{stats.map((stat, i) => (
								<div key={stat.label} className="fade-up" style={{ transitionDelay: `${500 + i * 100}ms` }}>
									<div className="stat-number" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
										{stat.value}
									</div>
									<div className="text-base text-white mt-1 uppercase tracking-wider" style={{ fontFamily: "'DM Sans', sans-serif" }}>
										{stat.label}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Bottom diagonal fade */}
				<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
			</section>
		);
}