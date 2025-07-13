import HeroSection from "@/components/home/HeroSection";
import MissionSection from "@/components/home/MissionSection";
import ServicesSection from "@/components/home/ServicesSection";
import DifferenceSection from "@/components/home/DifferenceSection";
import FactCheckToolSection from "@/components/home/FactCheckToolSection";
import RealTimeFactCheckingSection from "@/components/home/RealTimeFactCheckingSection";
import MediaLiteracySection from "@/components/home/MediaLiteracySection";
import CtaSection from "@/components/home/CtaSection";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    document.title = "The Truth Networks - Fighting Misinformation";
  }, []);
  
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ServicesSection />
      <DifferenceSection />
      <RealTimeFactCheckingSection />
      <FactCheckToolSection />
      <MediaLiteracySection />
      <CtaSection />
    </>
  );
}
