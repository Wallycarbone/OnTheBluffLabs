import { useEffect } from "react";
import Navigation from "@/components/navigation";
import PuppyApplication from "@/components/puppy-application";
import Footer from "@/components/footer";
import applicationImage from "@assets/Puppies 5x4 (4 x 4 in) (23)_1756660633586.png";

export default function PuppyApplicationPage() {
  useEffect(() => {
    document.title = "Puppy Application - On The Bluff Labradors | Apply for Your Perfect Companion";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Apply for your perfect Labrador companion from On The Bluff Labradors. Complete application for champion bloodline puppies with 50+ years breeding expertise.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Apply for your perfect Labrador companion from On The Bluff Labradors. Complete application for champion bloodline puppies with 50+ years breeding expertise.';
      document.head.appendChild(meta);
    }

    // Set Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Puppy Application - On The Bluff Labradors | Apply for Your Perfect Companion' },
      { property: 'og:description', content: 'Apply for your perfect Labrador companion from On The Bluff Labradors. Complete application for champion bloodline puppies with 50+ years breeding expertise.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:site_name', content: 'On The Bluff Labradors' },
      { property: 'og:image', content: `${window.location.origin}${applicationImage}` }
    ];

    // Set Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Puppy Application - On The Bluff Labradors' },
      { name: 'twitter:description', content: 'Apply for your perfect Labrador companion from On The Bluff Labradors. Complete application for champion bloodline puppies.' },
      { name: 'twitter:image', content: `${window.location.origin}${applicationImage}` }
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
      <PuppyApplication />
      <Footer />
    </div>
  );
}