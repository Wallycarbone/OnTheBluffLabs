import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HealthTesting from "@/components/health-testing";
import Footer from "@/components/footer";

export default function HealthTestingPage() {
  useEffect(() => {
    document.title = "Holistic Health Testing - On The Bluff Labradors | Health Certified Breeding";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive health testing & holistic care for our Labrador breeding program. Hip, elbow, eye, heart clearances plus nutrition and wellness expertise.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Comprehensive health testing & holistic care for our Labrador breeding program. Hip, elbow, eye, heart clearances plus nutrition and wellness expertise.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HealthTesting />
      <Footer />
    </div>
  );
}