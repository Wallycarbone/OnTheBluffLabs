import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import DogFoodPage from "@/components/dog-food";
import dogFoodImage from "@assets/Breeding Dogs 5x4 (27)_1755633649595.png";

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

    // Set Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Raw Dog Food & Nutrition - On The Bluff Labradors | Holistic Labrador Nutrition' },
      { property: 'og:description', content: 'Expert raw dog food & nutrition guidance from professional Labrador breeders. 50+ years experience in optimal canine nutrition and holistic health.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:site_name', content: 'On The Bluff Labradors' },
      { property: 'og:image', content: `${window.location.origin}${dogFoodImage}` }
    ];

    // Set Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Raw Dog Food & Nutrition - On The Bluff Labradors' },
      { name: 'twitter:description', content: 'Expert raw dog food & nutrition guidance from professional Labrador breeders. 50+ years experience in optimal canine nutrition.' },
      { name: 'twitter:image', content: `${window.location.origin}${dogFoodImage}` }
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
    <div className="min-h-screen bg-white">
      <Navigation />
      <DogFoodPage />
      <Footer />
    </div>
  );
}