import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12" style={{backgroundColor: '#11100f', color: '#fefefe'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-oswald font-normal mb-6 tracking-wide">
              ON THE BLUFF LABRADORS
            </h3>
            <p className="mb-4 font-source-sans" style={{color: '#ebebeb'}}>
              Breeding exceptional Labrador Retrievers with love, care, and dedication since 2003.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="transition-colors" style={{color: '#ebebeb'}} onMouseEnter={(e) => e.currentTarget.style.color = '#e3b404'} onMouseLeave={(e) => e.currentTarget.style.color = '#ebebeb'}>
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="transition-colors" style={{color: '#ebebeb'}} onMouseEnter={(e) => e.currentTarget.style.color = '#e3b404'} onMouseLeave={(e) => e.currentTarget.style.color = '#ebebeb'}>
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="transition-colors" style={{color: '#ebebeb'}} onMouseEnter={(e) => e.currentTarget.style.color = '#e3b404'} onMouseLeave={(e) => e.currentTarget.style.color = '#ebebeb'}>
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-oswald font-normal mb-4 tracking-wide">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="font-source-sans text-gray-300 hover:text-golden transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('puppies')}
                  className="font-source-sans text-gray-300 hover:text-golden transition-colors"
                >
                  Available Puppies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('breeding')}
                  className="font-source-sans text-gray-300 hover:text-golden transition-colors"
                >
                  Our Dogs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('health')}
                  className="font-source-sans text-gray-300 hover:text-golden transition-colors"
                >
                  Health Testing
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-oswald font-normal mb-4 tracking-wide">RESOURCES</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-source-sans text-gray-300 hover:text-golden transition-colors">
                  Puppy Care Guide
                </a>
              </li>
              <li>
                <a href="#" className="font-source-sans text-gray-300 hover:text-golden transition-colors">
                  Training Tips
                </a>
              </li>
              <li>
                <a href="#" className="font-source-sans text-gray-300 hover:text-golden transition-colors">
                  Health Information
                </a>
              </li>
              <li>
                <a href="#" className="font-source-sans text-gray-300 hover:text-golden transition-colors">
                  Breeding Ethics
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-oswald font-normal mb-4 tracking-wide">CONTACT INFO</h4>
            <ul className="space-y-2">
              <li className="font-source-sans text-gray-300">1234 Bluff Ridge Road</li>
              <li className="font-source-sans text-gray-300">Countryside, State 12345</li>
              <li className="font-source-sans text-gray-300">(555) 123-4567</li>
              <li className="font-source-sans text-gray-300">info@ontheblufflabradors.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="font-source-sans text-gray-300">
            &copy; 2024 On The Bluff Labradors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
