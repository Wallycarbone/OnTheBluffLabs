import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    document.title = "On The Bluff Labradors - Premium English Labs | 50+ Years Breeding Excellence";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Premium English Labrador Retrievers bred for beauty & temperament. 50+ years expertise, champion bloodlines, holistic health. Located in Germantown, NY.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Premium English Labrador Retrievers bred for beauty & temperament. 50+ years expertise, champion bloodlines, holistic health. Located in Germantown, NY.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <Footer />
    </div>
  );
}
