import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="shadow-lg sticky top-0 z-50" style={{backgroundColor: '#fefefe'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-oswald font-semibold tracking-wide" style={{color: '#11100f'}}>ON THE BLUFF LABRADORS</h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="px-3 py-2 text-sm font-medium transition-colors"
                style={{color: '#4b4b4b'}}
                onMouseEnter={(e) => e.currentTarget.style.color = '#11100f'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4b4b4b'}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="px-3 py-2 text-sm font-medium transition-colors"
                style={{color: '#4b4b4b'}}
                onMouseEnter={(e) => e.currentTarget.style.color = '#11100f'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4b4b4b'}
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('puppies')}
                className="px-3 py-2 text-sm font-medium transition-colors"
                style={{color: '#4b4b4b'}}
                onMouseEnter={(e) => e.currentTarget.style.color = '#11100f'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4b4b4b'}
              >
                Available Puppies
              </button>
              <button 
                onClick={() => scrollToSection('breeding')}
                className="px-3 py-2 text-sm font-medium transition-colors"
                style={{color: '#4b4b4b'}}
                onMouseEnter={(e) => e.currentTarget.style.color = '#11100f'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4b4b4b'}
              >
                Our Dogs
              </button>
              <button 
                onClick={() => scrollToSection('health')}
                className="px-3 py-2 text-sm font-medium transition-colors"
                style={{color: '#4b4b4b'}}
                onMouseEnter={(e) => e.currentTarget.style.color = '#11100f'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4b4b4b'}
              >
                Health Testing
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="px-3 py-2 text-sm font-medium transition-colors"
                style={{color: '#4b4b4b'}}
                onMouseEnter={(e) => e.currentTarget.style.color = '#11100f'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4b4b4b'}
              >
                Testimonials
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                style={{backgroundColor: '#e3b404', color: '#fefefe'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#644f06'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e3b404'}
              >
                Contact
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t" style={{backgroundColor: '#fefefe'}}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => scrollToSection('home')}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-slate-900 w-full text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-slate-900 w-full text-left"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('puppies')}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-slate-900 w-full text-left"
            >
              Available Puppies
            </button>
            <button 
              onClick={() => scrollToSection('breeding')}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-slate-900 w-full text-left"
            >
              Our Dogs
            </button>
            <button 
              onClick={() => scrollToSection('health')}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-slate-900 w-full text-left"
            >
              Health Testing
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-slate-900 w-full text-left"
            >
              Testimonials
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-yellow-600 text-white hover:bg-yellow-700 w-full mt-2"
            >
              Contact
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
