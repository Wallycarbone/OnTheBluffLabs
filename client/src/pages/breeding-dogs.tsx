import { useEffect } from "react";
import Navigation from "@/components/navigation";
import BreedingDogs from "@/components/breeding-dogs";
import Footer from "@/components/footer";

export default function BreedingDogsPage() {
  useEffect(() => {
    document.title = "Our Champion Breeding Dogs - On The Bluff Labradors | Westminster & Crufts Bloodlines";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Meet our exceptional breeding Labradors with Westminster & Crufts champion bloodlines. Health tested, temperament proven English Labs from master breeders.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Meet our exceptional breeding Labradors with Westminster & Crufts champion bloodlines. Health tested, temperament proven English Labs from master breeders.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <BreedingDogs />
      <Footer />
    </div>
  );
}