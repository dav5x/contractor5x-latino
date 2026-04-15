import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function VideoPage(){
	const sectionRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
			{ threshold: 0.05 }
		);
		const el = sectionRef.current;
		if (el) el.querySelectorAll(".fade-up").forEach((child) => observer.observe(child));
		return () => observer.disconnect();
	}, []);

	return (
		<div className="min-h-screen bg-[#0D0D0D]" ref={sectionRef}>
			<Navbar />
			
			<section className="pt-40 pb-20 bg-[#0D0D0D] border-t border-white/8">
				<div className="max-w-4xl mx-auto px-4">
					<div className="text-center mb-12">
						<div className="fade-up mb-1 flex justify-center">
							<span className="section-label">Mejora tu negocio de construcci&oacute;n</span>
						</div>

						<h2 className="fade-up text-[clamp(2rem,4vw,3.5rem)] font-900 text-white uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, transitionDelay: "100ms" }}>
							Mejores Proyectos <span className="text-[#F97316]">Mas Ganancias</span>
						</h2>
					</div>
				</div>
				<div className="block max-w-5xl mx-auto overflow-hidden rounded-3xl">
					<iframe width="100%" height="700" src="https://www.youtube.com/embed/j_KWS3_GwxM?si=B4glihxTNsWuDN92" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
				</div>
			</section>
			
			<Footer />
		</div>
	);
}