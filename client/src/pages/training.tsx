import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Training from "@/components/training";
import Footer from "@/components/footer";

export default function TrainingPage() {
  useEffect(() => {
    document.title = "Labrador Training Programs - On The Bluff Labradors | Expert Dog Training";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional Labrador training programs by expert breeders. Early puppy training, behavior development, and specialized programs for optimal temperament.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional Labrador training programs by expert breeders. Early puppy training, behavior development, and specialized programs for optimal temperament.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Training />
      <Footer />
    </div>
  );
}