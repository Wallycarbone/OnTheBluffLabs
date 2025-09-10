import React, { useState, useCallback, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Star, X, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';

// Gallery images - Previous puppies for "Generations of Excellence"
import previousCooper from "@assets/Puppies 5x4 (2)_1755530661173.png";
import previousShadow from "@assets/Puppies 5x4 (3)_1755534520644.png";
import previousSunny from "@assets/Puppies 5x4 (4)_1755535459095.png";
import previousChocolate1 from "@assets/Puppies 5x4 (5)_1755546201192.png";
import previousChocolate2 from "@assets/Puppies 5x4 (5)_1755544596778.png";
import previousYellowRope from "@assets/Puppies 5x4 (4 x 4 in) (12)_1755546531132.png";
import previousBlackToy from "@assets/Puppies 5x4 (4 x 4 in) (11)_1755546531140.png";
import previousChocolateToys from "@assets/Puppies 5x4 (4 x 4 in) (13)_1755546695617.png";
import previousChocolateRainbow from "@assets/34_1755546892072.png";
import previousWhitePuppy from "@assets/35_1755546892077.png";
import previousWhiteWithToys from "@assets/36_1755547953541.png";
import previousChocolateStanding from "@assets/37_1755547953551.png";
import previousFoxRedPuppy from "@assets/38_1755547953551.png";
import newYellowSitting from "@assets/39_1755549645613.png";
import newWhiteStanding from "@assets/40_1755549645619.png";

// Core dog images
import grizzlyImage from "@assets/Y30A9312grizzly_1753041221558.jpg";
import harperLeeImage from "@assets/Harper Lee 5x4_1753563791440.png";
import moonImage from "@assets/Moon 5x4_1753563791440.png";
import moonImage2 from "@assets/Moon 5x4_1753565341801.png";
import noraImage from "@assets/Nora 5x4_1753565326175.png";
import queenBoudicaImage from "@assets/Queen Boudica 5x4_1753565170818.png";
import topoGigioImage from "@assets/Black and White Minimalist New Collection Social Media Mockup Instagram Post (83)_1756671954087.png";

export default function Puppies() {
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{src: string, name: string} | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({});

  // 15 curated puppy photos showcasing full color spectrum
  const generationsGalleryImages = [
    { src: previousCooper, name: "Golden Labrador puppy with gentle expression" },
    { src: previousShadow, name: "Black Labrador puppy with alert stance" },
    { src: previousSunny, name: "Yellow Labrador puppy in natural pose" },
    { src: previousChocolate1, name: "Chocolate Labrador puppy with toy" },
    { src: previousChocolate2, name: "Chocolate Labrador puppy with playful demeanor" },
    { src: previousYellowRope, name: "Yellow Labrador puppy with rope toy" },
    { src: previousBlackToy, name: "Black Labrador puppy with favorite toy" },
    { src: previousChocolateToys, name: "Chocolate Labrador puppy with colorful toys" },
    { src: previousChocolateRainbow, name: "Chocolate Labrador puppy with rainbow toy" },
    { src: previousWhitePuppy, name: "White Labrador puppy in portrait" },
    { src: previousWhiteWithToys, name: "White Labrador puppy with toys" },
    { src: previousChocolateStanding, name: "Chocolate Labrador puppy standing proud" },
    { src: previousFoxRedPuppy, name: "Fox red Labrador puppy with unique coloring" },
    { src: newYellowSitting, name: "Yellow Labrador puppy in sitting pose" },
    { src: newWhiteStanding, name: "White Labrador puppy with confident stance" }
  ];

  const openImagePopup = (image: {src: string, name: string}) => {
    setSelectedImage(image);
    setIsImagePopupOpen(true);
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Generations of Excellence Gallery - Full Width */}
        <div className="w-full">
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5">
            {generationsGalleryImages.map((image, index) => (
              <div 
                key={index}
                className="aspect-square overflow-hidden cursor-pointer relative group"
                onClick={() => openImagePopup(image)}
              >
                <img 
                  src={image.src}
                  alt={image.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
            ))}
          </div>
          
          {/* Title positioned below gallery */}
          <div className="text-center py-8">
            <h1 className="text-4xl lg:text-5xl font-oswald font-normal tracking-wide" style={{color: '#11100f'}}>
              Generations of Excellence
            </h1>
            <p className="text-lg font-source-sans mt-4 max-w-2xl mx-auto" style={{color: '#4b4b4b'}}>
              Discover the authentic bloodlines and exceptional puppies from On The Bluff Labradors, 
              showcasing our commitment to breeding excellence across generations.
            </p>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-oswald font-normal tracking-wide mb-4" style={{color: '#11100f'}}>
              Current & Upcoming Litters
            </h2>
            <p className="text-lg font-source-sans" style={{color: '#4b4b4b'}}>
              Stay tuned for announcements about our upcoming breeding plans and available puppies.
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-oswald font-normal tracking-wide" style={{color: '#11100f'}}>
                  Future Litters Planned
                </h3>
                <p className="text-base font-source-sans max-w-2xl mx-auto" style={{color: '#4b4b4b'}}>
                  We are carefully planning our next breeding combinations to continue our tradition 
                  of exceptional Labrador retrievers with champion bloodlines and excellent temperaments.
                </p>
                <Button 
                  className="font-montserrat font-medium text-sm h-auto py-3 px-8 mt-6"
                  style={{backgroundColor: '#6d761d', color: '#fefefe'}}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#644f06'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6d761d'}
                  onClick={() => window.location.href = '/contact'}
                >
                  Join Our Waiting List
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Image Popup Dialog */}
      <Dialog open={isImagePopupOpen} onOpenChange={setIsImagePopupOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-oswald font-normal tracking-wide" style={{color: '#11100f'}}>
              Puppy Gallery
            </DialogTitle>
          </DialogHeader>
          {selectedImage && (
            <div className="space-y-4">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.name}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-base font-source-sans" style={{color: '#4b4b4b'}}>
                {selectedImage.name}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}