import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact Us - On The Bluff Labradors | Labrador Breeders Germantown, NY";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact On The Bluff Labradors for puppy inquiries. Located in Germantown, NY. 50+ years breeding exceptional English Labradors. (518) 855-6705.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Contact On The Bluff Labradors for puppy inquiries. Located in Germantown, NY. 50+ years breeding exceptional English Labradors. (518) 855-6705.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Contact />
      <Footer />
    </div>
  );
}