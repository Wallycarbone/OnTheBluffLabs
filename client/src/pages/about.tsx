import { useEffect } from "react";
import Navigation from "@/components/navigation";
import About from "@/components/about";
import Footer from "@/components/footer";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Our Labrador Breeding Heritage - On The Bluff Labradors | 50+ Years Excellence";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover our 50+ year legacy of breeding exceptional English Labradors. Learn about our holistic approach, preservation breeding philosophy, and commitment to excellence.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Discover our 50+ year legacy of breeding exceptional English Labradors. Learn about our holistic approach, preservation breeding philosophy, and commitment to excellence.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <About />
      <Footer />
    </div>
  );
}