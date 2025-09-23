import React, { useState } from "react";
import { useLocation, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// Gallery images - Previous puppies for "Generations of Excellence"
import previousCooper from "@assets/Puppies 5x4 (2)_1755530661173.png";
import previousShadow from "@assets/Puppies 5x4 (3)_1755534520644.png";
import previousSunny from "@assets/Puppies 5x4 (4)_1755535459095.png";
import previousChocolate1 from "@assets/Puppies 5x4 (5)_1755546201192.png";
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
import blackPinkDiamond from "@assets/Y30A1549black pink diamond (2)_1758549186938.jpg";
import blackPinkDiamond2 from "@assets/Y30A1551black pink diamond (3)_1758549403882.jpg";
import foxRedWithBalls from "@assets/Untitled design - 2025-09-22T095844.149_1758549602932.png";
import foxRedSitting from "@assets/Untitled design - 2025-09-22T100714.391_1758550044367.png";
import lightYellowWithBall from "@assets/Y30A4742awillixatticusshamrock (1)_1758550186620.jpg";
import darkChocolateWithToy from "@assets/Y30A4863aureliagrizzlymrfishy_1758550232555.jpg";
import lightYellowWithToys from "@assets/Y30A4990estrahuckmrxmasplaid (1)_1758550270871.jpg";
import chocolateWithRopes from "@assets/Y30A1358AlohaHoldenmrleafmotif (1)_1758550407159.jpg";
import chocolateStanding from "@assets/Y30A1431AlohaHoldenmrstarsandstripes (3)_1758550438488.jpg";

// Core dog images
import grizzlyImage from "@assets/Y30A9312grizzly_1753041221558.jpg";
import harperLeeImage from "@assets/Harper Lee 5x4_1753563791440.png";
import moonImage from "@assets/Moon 5x4_1753563791440.png";
import moonImage2 from "@assets/Moon 5x4_1753565341801.png";
import moonImage3 from "@assets/Moon 5x4_1753627311757.png";
import noraImage from "@assets/Nora 5x4_1753565326175.png";
import queenBoudicaImage from "@assets/Queen Boudica 5x4_1753565170818.png";
import topoGigioImage from "@assets/Black and White Minimalist New Collection Social Media Mockup Instagram Post (83)_1756671954087.png";
import foxxyImage from "@assets/Untitled design - 2025-09-23T110331.298_1758639819973.png";
import booRadleyImage from "@assets/Breeding Dogs 5x4 (12)_1755286977779.png";
import piperImage from "@assets/Breeding Dogs 5x4 (14)_1755287062398.png";
import breedingDogsImage from "@assets/Breeding Dogs 5x4_1753626746448.png";
import breedingDogs2Image from "@assets/Breeding Dogs 5x4_1753626932987.png";

// Puppy images for Moon & Foxxy litter
import mrPeacockImage from "@assets/Mr. Peacock_1753621328199.png";
import mrTurtlesImage from "@assets/Mr. Turtles_1753621328201.png";
import msAlohaImage from "@assets/Ms. Aloha_1753621328202.png";
import msSunflowerImage from "@assets/Ms. Sunflower_1753621328202.png";
import mrSuperstarImage from "@assets/Mr. Superstar_1753621328202.png";
import mrPenguinPartyImage from "@assets/Mr. Penguin Party_1753621328202.png";
import msAlpineGlowImage from "@assets/Ms. Alpine Glow_1753621328203.png";

// Additional litter images
import pearlTurtlesImage from "@assets/Pearl (Turtles 5x4)_1753626048336.png";
import hollyPuppyLoveImage from "@assets/Holly (Puppy Love 5x4)_1753626044736.png";
import hazelPeacockImage from "@assets/Hazel (Peacock 5x4)_1753626048340.png";

export default function Puppies() {
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{src: string, name: string} | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({});
  const [isPedigreePopupOpen, setIsPedigreePopupOpen] = useState(false);
  const [selectedLitter, setSelectedLitter] = useState<any>(null);
  const [isTopoPopupOpen, setIsTopoPopupOpen] = useState(false);
  
  const [, setLocation] = useLocation();

  // 15 curated puppy photos showcasing full color spectrum
  const generationsGalleryImages = [
    { src: previousChocolateRainbow, name: "Chocolate Labrador puppy with rainbow toy" },
    { src: previousYellowRope, name: "Yellow Labrador puppy with rope toy" },
    { src: previousShadow, name: "Black Labrador puppy with alert stance" },
    { src: previousWhitePuppy, name: "White Labrador puppy in portrait" },
    { src: chocolateStanding, name: "Chocolate Labrador puppy standing alert with tail up in natural grass setting" },
    { src: previousFoxRedPuppy, name: "Fox red Labrador puppy with unique coloring" },
    { src: blackPinkDiamond, name: "Light yellow Labrador puppy in natural outdoor setting" },
    { src: darkChocolateWithToy, name: "Dark chocolate Labrador puppy with polka dot plush toy" },
    { src: blackPinkDiamond2, name: "Light yellow Labrador puppy sitting in grass with sweet expression" },
    { src: foxRedWithBalls, name: "Fox red Labrador puppy playing with colorful balls in grass" },
    { src: lightYellowWithBall, name: "Light yellow Labrador puppy sitting with red spiky ball toy" },
    { src: foxRedSitting, name: "Fox red Labrador puppy with beautiful golden coat sitting in natural setting" },
    { src: lightYellowWithToys, name: "Light yellow Labrador puppy with collection of colorful toys" },
    { src: chocolateWithRopes, name: "Chocolate Labrador puppy relaxing with colorful rope toys in grass" },
    { src: previousWhiteWithToys, name: "White Labrador puppy with toys" }
  ];

  const openImagePopup = (image: {src: string, name: string}) => {
    setSelectedImage(image);
    setIsImagePopupOpen(true);
  };

  const scrollToContact = () => {
    setLocation('/contact');
  };

  const openPedigreePopup = (litter: any) => {
    setSelectedLitter(litter);
    setIsPedigreePopupOpen(true);
  };

  const calculateAge = (birthDate: string) => {
    if (birthDate.includes('Due')) {
      return 'Expected';
    }
    
    const birth = new Date(birthDate);
    const today = new Date();
    const diffTime = today.getTime() - birth.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 7) {
      return `${diffDays} days old`;
    } else {
      const weeks = Math.floor(diffDays / 7);
      return `${weeks} week${weeks > 1 ? 's' : ''} old`;
    }
  };

  const getLitterStatus = (birthDate: string, originalStatus: string) => {
    if (birthDate.includes('Due')) {
      return 'Upcoming';
    }
    
    const birth = new Date(birthDate);
    const today = new Date();
    const diffTime = today.getTime() - birth.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(diffDays / 7);
    
    if (weeks > 10) {
      return 'Trained';
    }
    
    if (weeks >= 8) {
      return 'Ready';
    }
    
    return 'Ready Soon';
  };

  const categorizeLitters = (allLitters: any[]) => {
    const selectLitters = [];
    const upcomingLitters = [];
    
    for (const litter of allLitters) {
      if (litter.birthDate.includes('Due')) {
        upcomingLitters.push(litter);
      } else {
        const birth = new Date(litter.birthDate);
        const today = new Date();
        const diffTime = today.getTime() - birth.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const weeks = Math.floor(diffDays / 7);
        
        if (weeks >= 5) {
          selectLitters.push(litter);
        } else {
          upcomingLitters.push(litter);
        }
      }
    }
    
    // Sort selectLitters from youngest to oldest (newest birth date first)
    selectLitters.sort((a, b) => {
      const dateA = new Date(a.birthDate);
      const dateB = new Date(b.birthDate);
      return dateB.getTime() - dateA.getTime(); // Newest first
    });
    
    // Sort upcomingLitters from youngest to oldest (latest due date first)
    upcomingLitters.sort((a, b) => {
      const dateA = new Date(a.birthDate);
      const dateB = new Date(b.birthDate);
      return dateB.getTime() - dateA.getTime(); // Latest due date first
    });
    
    return { selectLitters, upcomingLitters };
  };

  const moonFoxxyPuppyImages = [
    mrPeacockImage,
    mrTurtlesImage,
    msAlohaImage,
    msSunflowerImage,
    mrSuperstarImage,
    mrPenguinPartyImage,
    msAlpineGlowImage
  ];

  const allLitters = [
    {
      name: "Moon & Foxxy",
      sire: "Moon",
      dam: "Foxxy",
      birthDate: "June 5, 2025",
      puppiesCount: 7,
      available: "Yellow Males & Females (Strawberry Blonde)",
      readyDate: "August 2025",
      images: [moonImage3, foxxyImage, ...moonFoxxyPuppyImages],
      status: "Current",
      description: "Seven puppies born June 5, 2025"
    },
    {
      name: "Moon & Nora",
      sire: "Moon",
      dam: "Nora",
      birthDate: "June 21, 2025",
      puppiesCount: 2,
      available: "One Black Female & One Yellow Female",
      readyDate: "August 2025",
      image: moonImage2,
      image2: noraImage,
      status: "Current",
      description: "One black female and one yellow female available"
    },
    {
      name: "Grizzly & Guinevere",
      sire: "Grizzly",
      dam: "Guinevere",
      birthDate: "April 5, 2025",
      puppiesCount: 8,
      available: "Chocolate Females",
      readyDate: "Ready Now",
      images: [breedingDogsImage, breedingDogs2Image, pearlTurtlesImage, hollyPuppyLoveImage, hazelPeacockImage],
      status: "Ready",
      description: "Chocolate female puppies available"
    },
    {
      name: "Boo Radley & Queen Boudica",
      sire: "Boo Radley",
      dam: "Queen Boudica",
      birthDate: "August 7, 2025",
      puppiesCount: "TBD",
      available: "Accepting Deposits",
      readyDate: "October 2025",
      image: booRadleyImage,
      image2: queenBoudicaImage,
      status: "Upcoming",
      description: "Born August 7, 2025"
    },
    {
      name: "Moon & Harper Lee",
      sire: "Moon",
      dam: "Harper Lee",
      birthDate: "July 27, 2025",
      puppiesCount: "TBD",
      available: "Accepting Deposits",
      readyDate: "September 2025",
      image: moonImage,
      image2: harperLeeImage,
      status: "Upcoming",
      description: "Bred in May, due in July 2025"
    },
    {
      name: "Moon & Piper",
      sire: "Moon",
      dam: "Piper",
      birthDate: "September 18, 2025",
      puppiesCount: "TBD",
      available: "Accepting Deposits",
      readyDate: "November 2025",
      image: moonImage,
      image2: piperImage,
      status: "Upcoming",
      description: "Born September 18, 2025"
    }
  ];

  const { selectLitters, upcomingLitters } = categorizeLitters(allLitters);

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
          
        </div>

        {/* Four Steps Process Section */}
        <div className="py-20 px-4 sm:px-6 lg:px-8 mb-20" style={{backgroundColor: '#f8f9f0'}}>
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-oswald font-normal tracking-wide mb-12" style={{color: '#11100f'}}>
              GENERATIONS OF DISTINCTION
            </h2>
            
            {/* Legacy Statement */}
            <div className="max-w-4xl mx-auto mb-16">
              <p className="text-2xl md:text-3xl font-source-sans leading-relaxed mb-8" style={{color: '#6d761d'}}>
                Every Labrador we raise carries forward a legacy of love, loyalty, and lifelong companionship.
              </p>
              <div className="w-24 h-1 mx-auto mb-12" style={{backgroundColor: '#6d761d'}}></div>
              <p className="text-xl md:text-2xl font-source-sans" style={{color: '#4b4b4b'}}>
                Here's how we guide you in bringing one home:
              </p>
            </div>

            {/* Process Steps */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-12">
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex-1">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-2xl font-oswald font-bold" style={{backgroundColor: '#6d761d', color: '#fefefe'}}>
                  1
                </div>
                <h3 className="text-2xl font-oswald font-normal tracking-wide mb-4" style={{color: '#6d761d'}}>
                  Inquire & Apply
                </h3>
                <p className="text-lg font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                  Share your story with us so we can understand your hopes for a new companion.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex-1">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-2xl font-oswald font-bold" style={{backgroundColor: '#6d761d', color: '#fefefe'}}>
                  2
                </div>
                <h3 className="text-2xl font-oswald font-normal tracking-wide mb-4" style={{color: '#6d761d'}}>
                  Match
                </h3>
                <p className="text-lg font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                  We thoughtfully pair you with the puppy whose temperament best fits your family and lifestyle.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex-1">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-2xl font-oswald font-bold" style={{backgroundColor: '#6d761d', color: '#fefefe'}}>
                  3
                </div>
                <h3 className="text-2xl font-oswald font-normal tracking-wide mb-4" style={{color: '#6d761d'}}>
                  Choose Training
                </h3>
                <p className="text-lg font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                  Select a training package that gives your pup the foundation they need to thrive.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex-1">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-2xl font-oswald font-bold" style={{backgroundColor: '#6d761d', color: '#fefefe'}}>
                  4
                </div>
                <h3 className="text-2xl font-oswald font-normal tracking-wide mb-4" style={{color: '#6d761d'}}>
                  Welcome Home
                </h3>
                <p className="text-lg font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                  Finally, bring your puppy home—prepared, confident, and ready to begin a lifetime of love.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <Link href="/puppy-application">
                <Button 
                  className="font-montserrat font-bold text-xl h-auto py-6 px-16 rounded-2xl shadow-2xl hover:shadow-[0_25px_50px_rgba(109,118,29,0.5)] transition-all duration-500 transform hover:scale-110 hover:-translate-y-3"
                  style={{
                    background: 'linear-gradient(135deg, #6d761d 0%, #8b9123 30%, #a5b028 70%, #8b9123 100%)',
                    color: '#fefefe',
                    textShadow: '0 3px 6px rgba(0,0,0,0.4)',
                    boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.2)'
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
              </Link>
            </div>
          </div>
        </div>

        {/* Current Litters Section */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-oswald font-normal tracking-wide" style={{color: '#11100f'}}>
              SELECT LITTERS
            </h2>
            <p className="text-lg font-source-sans mt-6 max-w-4xl mx-auto" style={{color: '#4b4b4b'}}>
              Litters are listed here only after our clients on the wait list have been placed with a puppy. Therefore, joining the wait list is the best way to ensure that you have the most options.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-12">
            {selectLitters.map((litter, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {/* First Photo */}
                    <div className="flex justify-center">
                      {litter.images ? (
                        <img 
                          src={litter.images[0]}
                          alt={`${litter.name} litter photo 1`}
                          className="w-full aspect-square object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={() => openImagePopup({src: litter.images[0], name: `${litter.name} litter`})}
                        />
                      ) : (
                        <img 
                          src={litter.image}
                          alt={`${litter.sire} - sire`}
                          className="w-full aspect-square object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={() => openImagePopup({src: litter.image, name: litter.sire})}
                        />
                      )}
                    </div>

                    {/* Info in Middle */}
                    <div className="text-center md:text-left px-2 h-full flex flex-col justify-between">
                      {/* Top Section - Header and Details */}
                      <div className="space-y-3">
                        {/* Header Section */}
                        <div className="space-y-2">
                          <h3 className="text-2xl font-oswald font-normal tracking-wide leading-tight" style={{color: '#11100f'}}>
                            {litter.name}
                          </h3>
                          <div className="flex justify-center md:justify-start">
                            <span 
                              className="px-3 py-1 rounded-full text-xs font-medium shadow-sm"
                              style={{
                                backgroundColor: (() => {
                                  const status = getLitterStatus(litter.birthDate, litter.status);
                                  if (status === 'Trained') return '#4a5c0a'; // Darker olive green for trained
                                  if (status === 'Ready') return '#6d761d'; // Regular olive green for ready
                                  return '#f59e0b'; // Orange for other statuses
                                })(),
                                color: '#fefefe'
                              }}
                            >
                              {getLitterStatus(litter.birthDate, litter.status)}
                            </span>
                          </div>
                        </div>

                        {/* Litter Details */}
                        <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                          <div className="grid grid-cols-1 gap-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium" style={{color: '#6d761d'}}>Birth Date:</span>
                              <span className="text-sm font-source-sans font-medium" style={{color: '#11100f'}}>
                                {litter.birthDate}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium" style={{color: '#6d761d'}}>Current Age:</span>
                              <span className="text-sm font-source-sans font-medium" style={{color: '#11100f'}}>
                                {calculateAge(litter.birthDate)}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Available Info */}
                        {litter.available && (
                          <div className="text-center md:text-left">
                            <p className="text-sm font-source-sans font-medium" style={{color: '#6d761d'}}>
                              Available: {litter.available}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Bottom Section - Action Buttons */}
                      <div className="flex flex-col gap-2 max-w-sm mx-auto md:mx-0">
                        <Button 
                          onClick={() => openPedigreePopup(litter)}
                          className="font-montserrat font-medium text-xs h-auto py-2 px-3 rounded-lg w-full shadow-sm hover:shadow-md transition-all duration-300"
                          style={{backgroundColor: '#6d761d', color: '#fefefe'}}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8b9123'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6d761d'}
                        >
                          View Pedigree
                        </Button>
                        <Link href="/puppy-application" className="w-full">
                          <Button 
                            variant="outline"
                            className="font-montserrat font-medium text-xs h-auto py-2 px-3 rounded-lg w-full shadow-sm hover:shadow-md transition-all duration-300"
                            style={{borderColor: '#6d761d', color: '#6d761d', borderWidth: '1px'}}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#6d761d';
                              e.currentTarget.style.color = '#fefefe';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.color = '#6d761d';
                            }}
                          >
                            Contact About This Litter
                          </Button>
                        </Link>
                      </div>
                    </div>

                    {/* Second Photo */}
                    <div className="flex justify-center">
                      {litter.images ? (
                        <img 
                          src={litter.images[1] || litter.images[0]}
                          alt={`${litter.name} litter photo 2`}
                          className="w-full aspect-square object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={() => openImagePopup({src: litter.images[1] || litter.images[0], name: `${litter.name} litter`})}
                        />
                      ) : (
                        <img 
                          src={litter.image2}
                          alt={`${litter.dam} - dam`}
                          className="w-full aspect-square object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={() => openImagePopup({src: litter.image2, name: litter.dam})}
                        />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Upcoming Litters */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-oswald font-normal tracking-wide mb-4" style={{color: '#11100f'}}>
              Upcoming Litters
            </h2>
            <p className="text-lg font-source-sans" style={{color: '#4b4b4b'}}>
              Future breeding plans and expected litters - accepting deposits now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {upcomingLitters.map((litter, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-oswald font-normal tracking-wide" style={{color: '#11100f'}}>
                        {litter.name}
                      </h3>
                      <span 
                        className="px-2 py-1 rounded-full text-xs font-medium"
                        style={{backgroundColor: '#9ca3af', color: '#fefefe'}}
                      >
                        {litter.status}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <img 
                        src={litter.image}
                        alt={`${litter.sire} - sire`}
                        className="w-full aspect-square object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openImagePopup({src: litter.image, name: litter.sire})}
                      />
                      <img 
                        src={litter.image2}
                        alt={`${litter.dam} - dam`}
                        className="w-full aspect-square object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openImagePopup({src: litter.image2, name: litter.dam})}
                      />
                    </div>

                    <div className="space-y-2 text-sm">
                      <p className="font-source-sans" style={{color: '#4b4b4b'}}>
                        <strong>Expected:</strong> {litter.birthDate}
                      </p>
                      <p className="font-source-sans" style={{color: '#4b4b4b'}}>
                        <strong>Ready:</strong> {litter.readyDate}
                      </p>
                      <p className="font-source-sans" style={{color: '#4b4b4b'}}>
                        <strong>Status:</strong> {litter.available}
                      </p>
                    </div>

                    <Button 
                      onClick={scrollToContact}
                      className="w-full font-montserrat font-medium text-sm h-auto py-2"
                      style={{backgroundColor: '#6d761d', color: '#fefefe'}}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#644f06'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6d761d'}
                    >
                      Reserve Your Spot
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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

      {/* Pedigree Popup Dialog */}
      <Dialog open={isPedigreePopupOpen} onOpenChange={setIsPedigreePopupOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-oswald font-normal tracking-wide" style={{color: '#11100f'}}>
              {selectedLitter?.name} Pedigree
            </DialogTitle>
          </DialogHeader>
          {selectedLitter && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-oswald font-normal mb-3" style={{color: '#11100f'}}>
                    Sire: {selectedLitter.sire}
                  </h3>
                  <p className="text-sm font-source-sans" style={{color: '#4b4b4b'}}>
                    Champion bloodline with exceptional lineage and Westminster connections.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-oswald font-normal mb-3" style={{color: '#11100f'}}>
                    Dam: {selectedLitter.dam}
                  </h3>
                  <p className="text-sm font-source-sans" style={{color: '#4b4b4b'}}>
                    Proven mother with excellent temperament and conformation.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-base font-oswald font-normal" style={{color: '#11100f'}}>
                  Pedigree Highlights
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedLitter.images ? selectedLitter.images.slice(0, 4).map((img: string, index: number) => (
                    <img 
                      key={index}
                      src={img}
                      alt={`Pedigree photo ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => openImagePopup({src: img, name: `${selectedLitter.name} lineage`})}
                    />
                  )) : (
                    <>
                      <img 
                        src={selectedLitter.image}
                        alt={selectedLitter.sire}
                        className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openImagePopup({src: selectedLitter.image, name: selectedLitter.sire})}
                      />
                      <img 
                        src={selectedLitter.image2}
                        alt={selectedLitter.dam}
                        className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openImagePopup({src: selectedLitter.image2, name: selectedLitter.dam})}
                      />
                    </>
                  )}
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <Link href="/puppy-application">
                  <Button 
                    className="w-full font-montserrat font-medium text-sm h-auto py-3"
                    style={{backgroundColor: '#6d761d', color: '#fefefe'}}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#644f06'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6d761d'}
                  >
                    Contact About This Litter
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Topo Gigio Popup Dialog */}
      <Dialog open={isTopoPopupOpen} onOpenChange={setIsTopoPopupOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-oswald font-normal tracking-wide" style={{color: '#11100f'}}>
              2019 Westminster Best of Breed
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <img 
              src={topoGigioImage} 
              alt="Farnfield Topo Gigio - 2019 Westminster Best of Breed winner"
              className="w-full h-auto rounded-lg"
            />
            <div className="space-y-2">
              <h3 className="text-xl font-oswald font-normal" style={{color: '#11100f'}}>
                Farnfield Topo Gigio
              </h3>
              <p className="text-base font-source-sans" style={{color: '#4b4b4b'}}>
                Winner of the 2019 Westminster Dog Show Best of Breed in the Labrador Retriever category. 
                Topo Gigio represents the pinnacle of Labrador conformation and bloodline excellence.
              </p>
              <p className="text-sm font-source-sans" style={{color: '#6d761d'}}>
                Our Moon litters are directly descended from this exceptional champion, bringing world-class genetics to your family.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}