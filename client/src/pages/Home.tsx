/*
 * DESIGN: Industrial Brutalism meets Digital Precision
 * Full page assembly: Navbar → Hero → Problems → FeaturesOverview → Services → Industries → HowItWorks → Results → Pricing → Contact → Footer
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ProblemsSection from "@/components/ProblemsSection";
import FeaturesOverview from "@/components/FeaturesOverview";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ResultsSection from "@/components/ResultsSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <ProblemsSection />
      <FeaturesOverview />
      <ServicesSection />
      <IndustriesSection />
      <HowItWorksSection />
      <ResultsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
      <MobileCTA />
    </div>
  );
}
