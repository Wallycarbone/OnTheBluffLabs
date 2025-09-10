import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Facilities from "@/components/facilities";
import Footer from "@/components/footer";
import facilitiesImage from "@assets/Breeding Dogs 5x4 (27)_1755633649595.png";

export default function FacilitiesPage() {
  useEffect(() => {
    document.title = "Our Breeding Facilities - On The Bluff Labradors | Professional Dog Breeding Facility";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Tour our state-of-the-art Labrador breeding facilities in Germantown, NY. Clean, spacious, and designed for optimal health and comfort of our dogs.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Tour our state-of-the-art Labrador breeding facilities in Germantown, NY. Clean, spacious, and designed for optimal health and comfort of our dogs.';
      document.head.appendChild(meta);
    }

    // Set Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Our Breeding Facilities - On The Bluff Labradors | Professional Dog Breeding Facility' },
      { property: 'og:description', content: 'Tour our state-of-the-art Labrador breeding facilities in Germantown, NY. Clean, spacious, and designed for optimal health and comfort of our dogs.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:site_name', content: 'On The Bluff Labradors' },
      { property: 'og:image', content: `${window.location.origin}${facilitiesImage}` }
    ];

    // Set Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Our Breeding Facilities - On The Bluff Labradors' },
      { name: 'twitter:description', content: 'Tour our state-of-the-art Labrador breeding facilities in Germantown, NY. Clean, spacious, and designed for optimal health.' },
      { name: 'twitter:image', content: `${window.location.origin}${facilitiesImage}` }
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
      <Facilities />
      <Footer />
    </div>
  );
}