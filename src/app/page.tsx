import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import CoreFeaturesSwiper from "@/components/CoreFeaturesSwiper";
import FeaturesStripSwiper from "@/components/FeaturesStripSwiper";
import HowItWorksSection from "@/components/HowItWorksSection";
import SalonProSection from "@/components/SalonProSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F6F6F6]">
      <Hero />
      <AboutSection />
      <CoreFeaturesSwiper />
      <FeaturesStripSwiper />
      <HowItWorksSection />
      <SalonProSection />
    </main>
  );
}
