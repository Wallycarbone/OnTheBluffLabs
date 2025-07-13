import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-6">
              On The Bluff Labradors
            </h3>
            <p className="text-gray-300 mb-4">
              Breeding exceptional Labrador Retrievers with love, care, and dedication since 2003.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-golden transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-golden transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-golden transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-playfair font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-golden transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('puppies')}
                  className="text-gray-300 hover:text-golden transition-colors"
                >
                  Available Puppies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('breeding')}
                  className="text-gray-300 hover:text-golden transition-colors"
                >
                  Our Dogs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('health')}
                  className="text-gray-300 hover:text-golden transition-colors"
                >
                  Health Testing
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-playfair font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-golden transition-colors">
                  Puppy Care Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-golden transition-colors">
                  Training Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-golden transition-colors">
                  Health Information
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-golden transition-colors">
                  Breeding Ethics
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-playfair font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">1234 Bluff Ridge Road</li>
              <li className="text-gray-300">Countryside, State 12345</li>
              <li className="text-gray-300">(555) 123-4567</li>
              <li className="text-gray-300">info@ontheblufflabradors.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2024 On The Bluff Labradors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
