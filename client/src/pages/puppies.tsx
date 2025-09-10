import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Puppies from "@/components/puppies";
import Footer from "@/components/footer";

export default function PuppiesPage() {
  useEffect(() => {
    document.title = "Available Labrador Puppies - On The Bluff Labradors | Champion Bloodlines";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Exceptional Labrador puppies from champion bloodlines. Expert puppy placement with 50+ years breeding experience. Health tested parents, early training included.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Exceptional Labrador puppies from champion bloodlines. Expert puppy placement with 50+ years breeding experience. Health tested parents, early training included.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Puppies />
      <Footer />
    </div>
  );
}