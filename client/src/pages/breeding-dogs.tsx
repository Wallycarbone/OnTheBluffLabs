import { useEffect } from "react";
import Navigation from "@/components/navigation";
import BreedingDogs from "@/components/breeding-dogs";
import Footer from "@/components/footer";
import breedingImage from "@assets/Breeding Dogs 5x4 (33)_1757522940993.png";

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

    // Set Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Our Champion Breeding Dogs - On The Bluff Labradors | Westminster & Crufts Bloodlines' },
      { property: 'og:description', content: 'Meet our exceptional breeding Labradors with Westminster & Crufts champion bloodlines. Health tested, temperament proven English Labs from master breeders.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:site_name', content: 'On The Bluff Labradors' },
      { property: 'og:image', content: `${window.location.origin}${breedingImage}` }
    ];

    // Set Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Our Champion Breeding Dogs - On The Bluff Labradors' },
      { name: 'twitter:description', content: 'Meet our exceptional breeding Labradors with Westminster & Crufts champion bloodlines. Health tested, temperament proven English Labs.' },
      { name: 'twitter:image', content: `${window.location.origin}${breedingImage}` }
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
      <BreedingDogs />
      <Footer />
    </div>
  );
}