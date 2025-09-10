import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import DogFoodPage from "@/components/dog-food";

export default function DogFood() {
  useEffect(() => {
    document.title = "Raw Dog Food & Nutrition - On The Bluff Labradors | Holistic Labrador Nutrition";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert raw dog food & nutrition guidance from professional Labrador breeders. 50+ years experience in optimal canine nutrition and holistic health.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Expert raw dog food & nutrition guidance from professional Labrador breeders. 50+ years experience in optimal canine nutrition and holistic health.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <DogFoodPage />
      <Footer />
    </div>
  );
}