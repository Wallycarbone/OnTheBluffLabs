import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import MissionSection from "@/components/sections/MissionSection";
import ServicesSection from "@/components/sections/ServicesSection";
import DifferenceSection from "@/components/sections/DifferenceSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import ContactSection from "@/components/sections/ContactSection";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClick = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    // Delay adding the event to prevent immediate closing
    const timer = setTimeout(() => {
      document.addEventListener("click", handleClick);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleClick);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      <main className="flex-grow">
        <HeroSection />
        <MissionSection />
        <ServicesSection />
        <DifferenceSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
