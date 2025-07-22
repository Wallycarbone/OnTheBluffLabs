import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Navigation Button Component
function NavButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button 
      onClick={onClick}
      className="px-3 py-2 text-sm font-montserrat font-medium transition-colors rounded-lg hover:bg-gray-100"
      style={{color: '#4b4b4b'}}
      onMouseEnter={(e) => e.currentTarget.style.color = '#6d761d'}
      onMouseLeave={(e) => e.currentTarget.style.color = '#4b4b4b'}
    >
      {label}
    </button>
  );
}

// Mobile Navigation Button Component
function MobileNavButton({ onClick, label, primary = false }: { onClick: () => void; label: string; primary?: boolean }) {
  if (primary) {
    return (
      <button 
        onClick={onClick}
        className="w-full px-4 py-3 text-left font-montserrat font-medium text-white rounded-lg transition-all"
        style={{backgroundColor: '#6d761d'}}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5a5f18'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6d761d'}
      >
        {label}
      </button>
    );
  }
  
  return (
    <button 
      onClick={onClick}
      className="w-full px-4 py-2 text-left font-montserrat font-medium transition-colors rounded-lg hover:bg-gray-100"
      style={{color: '#4b4b4b'}}
      onMouseEnter={(e) => e.currentTarget.style.color = '#6d761d'}
      onMouseLeave={(e) => e.currentTarget.style.color = '#4b4b4b'}
    >
      {label}
    </button>
  );
}

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
    <nav className="shadow-md sticky top-0 z-50 backdrop-blur-sm" style={{backgroundColor: 'rgba(254, 254, 254, 0.95)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 
                className="text-xl lg:text-2xl font-oswald font-normal tracking-wide cursor-pointer transition-colors"
                style={{color: '#11100f'}}
                onClick={() => scrollToSection('home')}
                onMouseEnter={(e) => e.currentTarget.style.color = '#6d761d'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#11100f'}
              >
                ON THE BLUFF LABRADORS
              </h1>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {/* Primary Navigation */}
              <div className="flex items-center space-x-1">
                <NavButton onClick={() => scrollToSection('puppies')} label="Puppies" />
                <NavButton onClick={() => scrollToSection('breeding')} label="Our Dogs" />
                <NavButton onClick={() => scrollToSection('health')} label="Health" />
              </div>
              
              {/* Divider */}
              <div className="h-6 w-px bg-gray-300 mx-4"></div>
              
              {/* Secondary Navigation */}
              <div className="flex items-center space-x-1">
                <NavButton onClick={() => scrollToSection('training')} label="Training" />
                <NavButton onClick={() => scrollToSection('boarding')} label="Board & Train" />
                <NavButton onClick={() => scrollToSection('about')} label="About" />
              </div>
              
              {/* Contact Button */}
              <div className="ml-6">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-2 font-montserrat font-medium text-sm rounded-full transition-all hover:scale-105"
                  style={{backgroundColor: '#6d761d', color: '#fefefe'}}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5a5f18'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6d761d'}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>

          {/* Tablet Navigation (hidden on mobile and desktop) */}
          <div className="hidden md:block lg:hidden">
            <div className="flex items-center space-x-1">
              <NavButton onClick={() => scrollToSection('puppies')} label="Puppies" />
              <NavButton onClick={() => scrollToSection('breeding')} label="Dogs" />
              <NavButton onClick={() => scrollToSection('training')} label="Training" />
              <NavButton onClick={() => scrollToSection('about')} label="About" />
              <Button 
                onClick={() => scrollToSection('contact')}
                className="px-4 py-2 font-montserrat font-medium text-sm rounded-full ml-4"
                style={{backgroundColor: '#6d761d', color: '#fefefe'}}
              >
                Contact
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t shadow-lg" style={{backgroundColor: 'rgba(254, 254, 254, 0.98)'}}>
          <div className="px-4 py-4 space-y-2">
            {/* Primary Actions */}
            <div className="space-y-2 pb-4 border-b border-gray-200">
              <MobileNavButton onClick={() => scrollToSection('puppies')} label="Available Puppies" primary />
              <MobileNavButton onClick={() => scrollToSection('contact')} label="Contact Us" primary />
            </div>
            
            {/* Secondary Navigation */}
            <div className="space-y-1 pt-2">
              <MobileNavButton onClick={() => scrollToSection('breeding')} label="Our Dogs" />
              <MobileNavButton onClick={() => scrollToSection('health')} label="Health Testing" />
              <MobileNavButton onClick={() => scrollToSection('training')} label="Training Programs" />
              <MobileNavButton onClick={() => scrollToSection('boarding')} label="Board & Train" />
              <MobileNavButton onClick={() => scrollToSection('about')} label="About Us" />
              <MobileNavButton onClick={() => scrollToSection('testimonials')} label="Testimonials" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
