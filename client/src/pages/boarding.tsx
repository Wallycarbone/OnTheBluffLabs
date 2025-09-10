import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Boarding from "@/components/boarding";
import Footer from "@/components/footer";

export default function BoardingPage() {
  useEffect(() => {
    document.title = "Board & Train Programs - On The Bluff Labradors | Professional Labrador Boarding";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional board & train programs for Labradors by expert breeders. Comprehensive training, socialization, and care in our Germantown, NY facilities.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional board & train programs for Labradors by expert breeders. Comprehensive training, socialization, and care in our Germantown, NY facilities.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Boarding />
      <Footer />
    </div>
  );
}