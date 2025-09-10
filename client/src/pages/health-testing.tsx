import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HealthTesting from "@/components/health-testing";
import Footer from "@/components/footer";
import healthImage from "@assets/Breeding Dogs 5x4 (27)_1755633649595.png";

export default function HealthTestingPage() {
  useEffect(() => {
    document.title = "Holistic Health Testing - On The Bluff Labradors | Health Certified Breeding";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive health testing & holistic care for our Labrador breeding program. Hip, elbow, eye, heart clearances plus nutrition and wellness expertise.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Comprehensive health testing & holistic care for our Labrador breeding program. Hip, elbow, eye, heart clearances plus nutrition and wellness expertise.';
      document.head.appendChild(meta);
    }

    // Set Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Holistic Health Testing - On The Bluff Labradors | Health Certified Breeding' },
      { property: 'og:description', content: 'Comprehensive health testing & holistic care for our Labrador breeding program. Hip, elbow, eye, heart clearances plus nutrition and wellness expertise.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:site_name', content: 'On The Bluff Labradors' },
      { property: 'og:image', content: `${window.location.origin}${healthImage}` }
    ];

    // Set Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Holistic Health Testing - On The Bluff Labradors' },
      { name: 'twitter:description', content: 'Comprehensive health testing & holistic care for our Labrador breeding program. Hip, elbow, eye, heart clearances plus nutrition.' },
      { name: 'twitter:image', content: `${window.location.origin}${healthImage}` }
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
      <HealthTesting />
      <Footer />
    </div>
  );
}