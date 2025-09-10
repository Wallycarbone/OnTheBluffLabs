import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import heroImage from "@assets/Breeding Dogs 5x4 (27)_1755633649595.png";

export default function Home() {
  useEffect(() => {
    document.title = "On The Bluff Labradors - Premium English Labs | 50+ Years Breeding Excellence";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Premium English Labrador Retrievers bred for beauty & temperament. 50+ years expertise, champion bloodlines, holistic health. Located in Germantown, NY.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Premium English Labrador Retrievers bred for beauty & temperament. 50+ years expertise, champion bloodlines, holistic health. Located in Germantown, NY.';
      document.head.appendChild(meta);
    }

    // Set Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'On The Bluff Labradors - Premium English Labs | 50+ Years Breeding Excellence' },
      { property: 'og:description', content: 'Premium English Labrador Retrievers bred for beauty & temperament. 50+ years expertise, champion bloodlines, holistic health. Located in Germantown, NY.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:site_name', content: 'On The Bluff Labradors' },
      { property: 'og:image', content: `${window.location.origin}${heroImage}` }
    ];

    // Set Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'On The Bluff Labradors - Premium English Labs | 50+ Years Breeding Excellence' },
      { name: 'twitter:description', content: 'Premium English Labrador Retrievers bred for beauty & temperament. 50+ years expertise, champion bloodlines, holistic health.' },
      { name: 'twitter:image', content: `${window.location.origin}${heroImage}` }
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
      <Hero />
      <Footer />
    </div>
  );
}
