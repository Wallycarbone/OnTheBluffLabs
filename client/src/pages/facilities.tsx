import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Facilities from "@/components/facilities";
import Footer from "@/components/footer";

export default function FacilitiesPage() {
  useEffect(() => {
    document.title = "Our Breeding Facilities - On The Bluff Labradors | Professional Dog Breeding Facility";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Tour our state-of-the-art Labrador breeding facilities in Germantown, NY. Clean, spacious, and designed for optimal health and comfort of our dogs.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Tour our state-of-the-art Labrador breeding facilities in Germantown, NY. Clean, spacious, and designed for optimal health and comfort of our dogs.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Facilities />
      <Footer />
    </div>
  );
}