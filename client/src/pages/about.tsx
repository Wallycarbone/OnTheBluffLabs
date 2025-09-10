import { useEffect } from "react";
import Navigation from "@/components/navigation";
import About from "@/components/about";
import Footer from "@/components/footer";
import aboutImage from "@assets/Breeding Dogs 5x4 (27)_1755633649595.png";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Our Labrador Breeding Heritage - On The Bluff Labradors | 50+ Years Excellence";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover our 50+ year legacy of breeding exceptional English Labradors. Learn about our holistic approach, preservation breeding philosophy, and commitment to excellence.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Discover our 50+ year legacy of breeding exceptional English Labradors. Learn about our holistic approach, preservation breeding philosophy, and commitment to excellence.';
      document.head.appendChild(meta);
    }

    // Set Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'About Our Labrador Breeding Heritage - On The Bluff Labradors | 50+ Years Excellence' },
      { property: 'og:description', content: 'Discover our 50+ year legacy of breeding exceptional English Labradors. Learn about our holistic approach, preservation breeding philosophy, and commitment to excellence.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:site_name', content: 'On The Bluff Labradors' },
      { property: 'og:image', content: `${window.location.origin}${aboutImage}` }
    ];

    // Set Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'About Our Labrador Breeding Heritage - On The Bluff Labradors' },
      { name: 'twitter:description', content: 'Discover our 50+ year legacy of breeding exceptional English Labradors. Learn about our holistic approach and commitment to excellence.' },
      { name: 'twitter:image', content: `${window.location.origin}${aboutImage}` }
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
      <About />
      <Footer />
    </div>
  );
}