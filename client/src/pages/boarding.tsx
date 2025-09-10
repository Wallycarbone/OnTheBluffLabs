import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Boarding from "@/components/boarding";
import Footer from "@/components/footer";
import boardingImage from "@assets/Breeding Dogs 5x4 (27)_1755633649595.png";

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

    // Set Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Board & Train Programs - On The Bluff Labradors | Professional Labrador Boarding' },
      { property: 'og:description', content: 'Professional board & train programs for Labradors by expert breeders. Comprehensive training, socialization, and care in our Germantown, NY facilities.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:site_name', content: 'On The Bluff Labradors' },
      { property: 'og:image', content: `${window.location.origin}${boardingImage}` }
    ];

    // Set Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Board & Train Programs - On The Bluff Labradors' },
      { name: 'twitter:description', content: 'Professional board & train programs for Labradors by expert breeders. Comprehensive training, socialization, and care.' },
      { name: 'twitter:image', content: `${window.location.origin}${boardingImage}` }
    ];

    // Add or update Open Graph tags
    ogTags.forEach(tag => {
      let existingTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const newTag = document.createElement('meta');
        newTag.setAttribute('property', tag.property);
        newTag.setAttribute('content', tag.content);
        document.head.appendChild(newTag);
      }
    });

    // Add or update Twitter Card tags
    twitterTags.forEach(tag => {
      let existingTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const newTag = document.createElement('meta');
        newTag.setAttribute('name', tag.name);
        newTag.setAttribute('content', tag.content);
        document.head.appendChild(newTag);
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Boarding />
      <Footer />
    </div>
  );
}