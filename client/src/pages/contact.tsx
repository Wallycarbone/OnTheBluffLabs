import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import contactImage from "@assets/Breeding Dogs 5x4 (27)_1755633649595.png";

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

    // Set Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Contact Us - On The Bluff Labradors | Labrador Breeders Germantown, NY' },
      { property: 'og:description', content: 'Contact On The Bluff Labradors for puppy inquiries. Located in Germantown, NY. 50+ years breeding exceptional English Labradors. (518) 855-6705.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:site_name', content: 'On The Bluff Labradors' },
      { property: 'og:image', content: `${window.location.origin}${contactImage}` }
    ];

    // Set Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Contact Us - On The Bluff Labradors' },
      { name: 'twitter:description', content: 'Contact On The Bluff Labradors for puppy inquiries. Located in Germantown, NY. 50+ years breeding exceptional English Labradors.' },
      { name: 'twitter:image', content: `${window.location.origin}${contactImage}` }
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
      <Contact />
      <Footer />
    </div>
  );
}