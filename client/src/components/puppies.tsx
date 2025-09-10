import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Image imports from available assets
import puppy1 from '@assets/Puppies 5x4 (4 x 4 in) (1)_1754683514419.png';
import puppy2 from '@assets/Puppies 5x4 (4 x 4 in) (2)_1754768185491.png';
import puppy3 from '@assets/Puppies 5x4 (4 x 4 in) (3)_1754771887076.png';
import puppy4 from '@assets/Puppies 5x4 (4 x 4 in) (4)_1754772138020.png';
import puppy5 from '@assets/Puppies 5x4 (4 x 4 in) (5)_1754772005588.png';
import puppy6 from '@assets/Puppies 5x4 (4 x 4 in) (6)_1754772143268.png';
import puppy7 from '@assets/Puppies 5x4 (4 x 4 in) (7)_1754774561852.png';
import puppy8 from '@assets/Puppies 5x4 (4 x 4 in) (8)_1754774682894.png';
import puppy9 from '@assets/Puppies 5x4 (4 x 4 in) (9)_1754774819506.png';
import puppy10 from '@assets/Puppies 5x4 (4 x 4 in) (10)_1755528477213.png';
import puppy11 from '@assets/Puppies 5x4 (4 x 4 in) (11)_1755546531140.png';
import puppy12 from '@assets/Puppies 5x4 (4 x 4 in) (12)_1755546531132.png';
import puppy13 from '@assets/Puppies 5x4 (4 x 4 in) (13)_1755546695617.png';
import puppy15 from '@assets/Puppies 5x4 (4 x 4 in) (15)_1755549884489.png';
import puppy16 from '@assets/Puppies 5x4 (4 x 4 in) (16)_1755550036481.png';

// import topoGigioImage from '@assets/topo-gigio-westminster.jpg';
// import matureDogsImage from '@assets/duke-atlas-outdoor.jpg';

export default function Puppies() {
  const [selectedImage, setSelectedImage] = useState<{src: string, name: string} | null>(null);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedLitter, setSelectedLitter] = useState<any>(null);
  const [isPedigreePopupOpen, setIsPedigreePopupOpen] = useState(false);
  const [isTopoPopupOpen, setIsTopoPopupOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState<{abbreviation: string, fullName: string} | null>(null);
  const [isTitlePopupOpen, setIsTitlePopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: string]: number}>({});

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const calculateAge = (birthDate: string) => {
    if (birthDate.includes('Due')) return 'Expected Soon';
    
    const birth = new Date(birthDate);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - birth.getTime());
    const diffWeeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
    
    if (diffWeeks < 4) {
      return `${diffWeeks} weeks old`;
    } else if (diffWeeks < 8) {
      return `${diffWeeks} weeks old`;
    } else {
      const diffMonths = Math.floor(diffWeeks / 4.33);
      return `${diffMonths} months old`;
    }
  };

  const getLitterStatus = (birthDate: string, status?: string) => {
    if (status) return status;
    
    if (birthDate.includes('Due')) return 'Expected';
    
    const birth = new Date(birthDate);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - birth.getTime());
    const diffWeeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
    
    if (diffWeeks >= 8) return 'Ready';
    if (diffWeeks >= 6) return 'Ready Soon';
    return 'Growing';
  };

  const upcomingLitters = [
    {
      name: "Moon & Oso",
      birthDate: "Due July 2025",
      image: "placeholder.jpg",
      status: "Expected"
    }
  ];

  const currentLitters = [
    {
      name: "Moon & Grizzly", 
      birthDate: "April 15, 2024",
      image: "placeholder.jpg",
      status: "Available"
    }
  ];

  return (
    <>
      <section id="puppies" className="bg-gray-50">
        {/* Full Width Puppy Photo Gallery */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-8">
            {[
              { src: puppy1, alt: "Previous puppy - White Lab puppy with colorful toys", name: "White" },
              { src: puppy2, alt: "Previous puppy - Black Lab puppy on rocks with polka dot toy", name: "Black" },
              { src: puppy3, alt: "Previous puppy - Yellow Lab sitting in green grass", name: "Yellow" },
              { src: puppy4, alt: "Previous puppy - Chocolate Lab puppy standing in grass", name: "Chocolate" },
              { src: puppy5, alt: "Previous puppy - Fox red Lab puppy with pink toy", name: "Fox Red" },
              { src: puppy6, alt: "Previous puppy - Golden Lab standing with colorful toys", name: "Golden" },
              { src: puppy7, alt: "Previous puppy - Chocolate Lab with colorful toys", name: "Chocolate" },
              { src: puppy8, alt: "Previous puppy - Black Lab with yellow banana toy", name: "Black" },
              { src: puppy9, alt: "Previous puppy - White Lab standing outdoors", name: "White" },
              { src: puppy10, alt: "Previous puppy - Yellow Lab with colorful toys", name: "Yellow" },
              { src: puppy11, alt: "Previous puppy - Yellow Lab with colorful rope toy", name: "Yellow" },
              { src: puppy12, alt: "Previous puppy - Lab with unique saddle markings and toys", name: "Saddled" },
              { src: puppy13, alt: "Previous puppy - Chocolate Lab with rainbow toy", name: "Chocolate" },
              { src: puppy15, alt: "Previous puppy - Black Lab with yellow toy", name: "Black" },
              { src: puppy16, alt: "Previous puppy - White Lab puppy in grass", name: "White" },
            ].map((puppy, index) => (
              <div 
                key={index} 
                className="group cursor-pointer"
                onClick={() => {
                  setSelectedImage({src: puppy.src, name: puppy.name});
                  setIsImagePopupOpen(true);
                }}
              >
                <div className="aspect-square overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                  <img 
                    src={puppy.src}
                    alt={puppy.alt}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-oswald font-normal tracking-wide mb-4" style={{color: '#11100f'}}>
              GENERATIONS OF EXCELLENCE
            </h2>
            <p className="text-lg font-source-sans max-w-4xl mx-auto" style={{color: '#4b4b4b'}}>
              A showcase of our previous puppies, representing the exceptional quality and diverse colors we consistently produce through careful breeding practices.
            </p>
          </div>
        </div>

        {/* All Litters */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-oswald font-normal tracking-wide" style={{color: '#11100f'}}>
              SELECT LITTERS
            </h2>
            <p className="text-lg font-source-sans mt-6 max-w-4xl mx-auto" style={{color: '#4b4b4b'}}>
              Litters are listed here only after our clients on the wait list have been placed with a puppy. Therefore, joining the wait list is the best way to ensure that you have the most options.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...upcomingLitters, ...currentLitters]
              .sort((a, b) => {
                // If both are upcoming (due dates), sort by due date
                if (a.birthDate.includes('Due') && b.birthDate.includes('Due')) {
                  const aMonth = a.birthDate.includes('July') ? 7 : 8;
                  const bMonth = b.birthDate.includes('July') ? 7 : 8;
                  return aMonth - bMonth;
                }
                // If one is upcoming and one isn't, upcoming comes first
                if (a.birthDate.includes('Due') && !b.birthDate.includes('Due')) return -1;
                if (!a.birthDate.includes('Due') && b.birthDate.includes('Due')) return 1;
                // If both have birth dates, sort by birth date (newest first for youngest pups)
                return new Date(b.birthDate).getTime() - new Date(a.birthDate).getTime();
              })
              .map((litter, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-4">
                  <h3 className="text-xl font-oswald font-normal mb-2" style={{color: '#11100f'}}>
                    {litter.name}
                  </h3>
                  <p className="text-sm font-source-sans mb-2" style={{color: '#4b4b4b'}}>
                    Born: {litter.birthDate}
                  </p>
                  <p className="text-sm font-source-sans mb-4" style={{color: '#4b4b4b'}}>
                    Age: {calculateAge(litter.birthDate)}
                  </p>
                  <div className="text-center">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                          style={{backgroundColor: '#6d761d'}}>
                      {getLitterStatus(litter.birthDate, litter.status)}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Start Your Journey Today Button */}
        <div className="text-center mt-16 mb-12">
          <Button 
            onClick={scrollToContact}
            className="font-montserrat font-bold text-2xl h-auto py-8 px-20 rounded-2xl shadow-2xl hover:shadow-[0_30px_60px_rgba(109,118,29,0.6)] transition-all duration-500 transform hover:scale-110 hover:-translate-y-4 ring-4 ring-opacity-40 ring-amber-300 border-2 border-amber-400"
            style={{
              background: 'linear-gradient(135deg, #6d761d 0%, #8b9123 30%, #a5b028 70%, #8b9123 100%)',
              color: '#fefefe',
              textShadow: '0 3px 6px rgba(0,0,0,0.4)',
              boxShadow: '0 0 20px rgba(165, 176, 40, 0.4), inset 0 2px 4px rgba(255,255,255,0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #8b9123 0%, #a5b028 30%, #c4d12a 70%, #a5b028 100%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #6d761d 0%, #8b9123 30%, #a5b028 70%, #8b9123 100%)';
            }}
          >
            Start Your Journey Today
          </Button>
          <p className="text-base font-source-sans mt-4 opacity-80" style={{color: '#4b4b4b'}}>
            Take the first step toward welcoming your perfect companion
          </p>
        </div>

        {/* Mature Dogs Section */}
        <div className="text-center mt-12">
          <Card className="bg-white rounded-lg shadow-md overflow-hidden max-w-3xl mx-auto">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2 text-left">
                  <h3 className="text-lg font-oswald font-normal mb-3 tracking-wide" style={{color: '#11100f'}}>
                    MATURE DOGS AVAILABLE
                  </h3>
                  <p className="text-sm font-source-sans mb-4" style={{color: '#4b4b4b'}}>
                    Sometimes we have young adult dogs or mature puppies available for families seeking a slightly older companion.
                  </p>
                  <Button 
                    onClick={scrollToContact}
                    className="font-montserrat font-medium text-sm h-auto py-2 px-6"
                    style={{backgroundColor: '#6d761d', color: '#fefefe'}}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#644f06'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6d761d'}
                  >
                    Inquire About Mature Dogs
                  </Button>
                </div>
                <div className="flex justify-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-md flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Photo</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Image Popup Dialog */}
      <Dialog open={isImagePopupOpen} onOpenChange={setIsImagePopupOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-oswald font-normal tracking-wide" style={{color: '#11100f'}}>
              {selectedImage?.name}
            </DialogTitle>
          </DialogHeader>
          {selectedImage && (
            <div className="space-y-4">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.name}
                className="w-full h-auto rounded-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}