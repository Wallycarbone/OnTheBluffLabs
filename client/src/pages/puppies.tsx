import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Puppies from "@/components/puppies";
import Footer from "@/components/footer";
import puppyImage from "@assets/Puppies 5x4 (4 x 4 in) (23)_1756660633586.png";

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

    // Set Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Available Labrador Puppies - On The Bluff Labradors | Champion Bloodlines' },
      { property: 'og:description', content: 'Exceptional Labrador puppies from champion bloodlines. Expert puppy placement with 50+ years breeding experience. Health tested parents, early training included.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:site_name', content: 'On The Bluff Labradors' },
      { property: 'og:image', content: `${window.location.origin}${puppyImage}` }
    ];

    // Set Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Available Labrador Puppies - On The Bluff Labradors' },
      { name: 'twitter:description', content: 'Exceptional Labrador puppies from champion bloodlines. Expert puppy placement with 50+ years breeding experience.' },
      { name: 'twitter:image', content: `${window.location.origin}${puppyImage}` }
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
      <Puppies />
      <Footer />
    </div>
  );
}