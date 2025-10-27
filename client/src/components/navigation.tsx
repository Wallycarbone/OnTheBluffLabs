import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Navigation Button Component
function NavButton({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="px-2 md:px-3 py-3 text-xs lg:text-sm font-montserrat font-medium transition-colors rounded-lg hover:bg-gray-100 whitespace-nowrap"
      style={{color: '#4b4b4b'}}
      onMouseEnter={(e) => e.currentTarget.style.color = '#6d761d'}
      onMouseLeave={(e) => e.currentTarget.style.color = '#4b4b4b'}
    >
      {label}
    </Link>
  );
}


// Care & Lifestyle Dropdown Component
function CareLifestyleDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center px-2 md:px-3 py-3 text-xs lg:text-sm font-montserrat font-medium transition-colors rounded-lg hover:bg-gray-100 whitespace-nowrap"
          style={{color: '#4b4b4b'}}
          onMouseEnter={(e) => e.currentTarget.style.color = '#6d761d'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#4b4b4b'}
        >
          Care & Lifestyle
          <ChevronDown className="ml-1 h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-48">
        <DropdownMenuItem asChild>
          <Link href="/health-testing" className="w-full cursor-pointer">
            Holistic Health
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/raw-dog-food" className="w-full cursor-pointer">
            Raw Dog Food
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/boarding" className="w-full cursor-pointer">
            Board & Train
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/facilities" className="w-full cursor-pointer">
            Our Team
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Mobile Navigation Button Component
function MobileNavButton({ href, label, primary = false, onClick }: { href: string; label: string; primary?: boolean; onClick?: () => void }) {
  if (primary) {
    return (
      <Link href={href} 
        onClick={onClick}
        className="block w-full px-4 py-3 text-left font-montserrat font-medium text-white rounded-lg transition-all"
        style={{backgroundColor: '#6d761d'}}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5a5f18'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6d761d'}
      >
        {label}
      </Link>
    );
  }
  
  return (
    <Link href={href} 
      onClick={onClick}
      className="block w-full px-4 py-2 text-left font-montserrat font-medium transition-colors rounded-lg hover:bg-gray-100"
      style={{color: '#4b4b4b'}}
      onMouseEnter={(e) => e.currentTarget.style.color = '#6d761d'}
      onMouseLeave={(e) => e.currentTarget.style.color = '#4b4b4b'}
    >
      {label}
    </Link>
  );
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="shadow-md sticky top-0 z-50 backdrop-blur-sm" style={{backgroundColor: 'rgba(254, 254, 254, 0.95)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <h1 
                  className="text-xs md:text-sm lg:text-base xl:text-lg font-oswald font-normal tracking-wide cursor-pointer transition-colors whitespace-nowrap"
                  style={{color: '#11100f'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#6d761d'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#11100f'}
                >
                  ON THE BLUFF LABRADORS
                </h1>
              </Link>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1 xl:space-x-2">
              {/* Primary Navigation */}
              <div className="flex items-center space-x-2 xl:space-x-4">
                <NavButton href="/breeding-dogs" label="Our Dogs" />
                <NavButton href="/puppies" label="Puppy Placement" />
                <NavButton href="/training" label="Behavior Academy Options" />
              </div>
              
              {/* Divider */}
              <div className="h-6 w-px bg-gray-300 mx-2 xl:mx-4"></div>
              
              {/* Secondary Navigation */}
              <div className="flex items-center">
                <CareLifestyleDropdown />
              </div>
              
              {/* Book Button */}
              <div className="ml-3 xl:ml-6">
                <a href="https://truth-networks-foundation-wallycarbone.replit.app/book" target="_blank" rel="noopener noreferrer">
                  <Button 
                    className="px-4 py-2 font-montserrat font-bold text-xs lg:text-sm rounded-full transition-all hover:scale-105 shadow-lg"
                    style={{backgroundColor: '#b8860b', color: '#fefefe', border: '2px solid #daa520'}}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#daa520'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#b8860b'}
                  >
                    📖 Our Book
                  </Button>
                </a>
              </div>
              
              {/* Contact Button */}
              <div className="ml-2 xl:ml-3">
                <Link href="/contact">
                  <Button 
                    className="px-4 py-2 font-montserrat font-medium text-xs lg:text-sm rounded-full transition-all hover:scale-105"
                    style={{backgroundColor: '#6d761d', color: '#fefefe'}}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5a5f18'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6d761d'}
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Tablet Navigation (hidden on mobile and desktop) */}
          <div className="hidden md:block lg:hidden">
            <div className="flex items-center space-x-1 text-xs">
              <NavButton href="/breeding-dogs" label="Dogs" />
              <NavButton href="/puppies" label="Puppies" />
              <NavButton href="/training" label="Training" />
              <CareLifestyleDropdown />
              <a href="https://truth-networks-foundation-wallycarbone.replit.app/book" target="_blank" rel="noopener noreferrer">
                <Button 
                  className="px-2 py-2 font-montserrat font-bold text-xs rounded-full ml-1 shadow-lg"
                  style={{backgroundColor: '#b8860b', color: '#fefefe', border: '1px solid #daa520'}}
                >
                  📖 Book
                </Button>
              </a>
              <Link href="/contact">
                <Button 
                  className="px-2 py-2 font-montserrat font-medium text-xs rounded-full ml-1"
                  style={{backgroundColor: '#6d761d', color: '#fefefe'}}
                >
                  Contact
                </Button>
              </Link>
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
            {/* Primary Navigation */}
            <div className="space-y-1 pb-4 border-b border-gray-200">
              <MobileNavButton href="/breeding-dogs" label="Our Dogs" onClick={closeMenu} />
              <MobileNavButton href="/puppies" label="Puppy Placement" onClick={closeMenu} />
              <MobileNavButton href="/training" label="Behavior Academy Options" onClick={closeMenu} />
            </div>
            
            {/* Secondary Navigation - Care & Lifestyle */}
            <div className="space-y-1 pt-2 pb-4 border-b border-gray-200">
              <div className="text-xs font-montserrat font-semibold text-gray-500 uppercase tracking-wide mb-2">Care & Lifestyle</div>
              <MobileNavButton href="/health-testing" label="Holistic Health" onClick={closeMenu} />
              <MobileNavButton href="/raw-dog-food" label="Raw Dog Food" onClick={closeMenu} />
              <MobileNavButton href="/boarding" label="Board & Train" onClick={closeMenu} />
              <MobileNavButton href="/facilities" label="Our Team" onClick={closeMenu} />
            </div>
            
            {/* Book Button */}
            <div className="pt-2">
              <a href="https://truth-networks-foundation-wallycarbone.replit.app/book" target="_blank" rel="noopener noreferrer"
                 className="block w-full px-4 py-3 text-left font-montserrat font-bold text-white rounded-lg transition-all shadow-lg"
                 style={{backgroundColor: '#b8860b', border: '2px solid #daa520'}}
                 onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#daa520'}
                 onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#b8860b'}
              >
                📖 Our Book
              </a>
            </div>
            
            {/* Contact Button */}
            <div className="pt-2">
              <MobileNavButton href="/contact" label="Contact Us" primary onClick={closeMenu} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
