import React, { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Star, X, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import moonFoxxyPuppies from "@assets/Copy of Gallery Image - Landscape (23)_1752527442943.png";
import moonFoxxyPuppies2 from "@assets/Copy of Gallery Image - Landscape (22)_1752522247837.png";
import grizzlyImage from "@assets/Y30A9312grizzly_1753041221558.jpg";
import harperLeeImage from "@assets/Harper Lee 5x4_1753563791440.png";
import moonImage from "@assets/Moon 5x4_1753563791440.png";
import moonImage2 from "@assets/Moon 5x4_1753565341801.png";
import noraImage from "@assets/Nora 5x4_1753565326175.png";
import queenBoudicaImage from "@assets/Queen Boudica 5x4_1753565170818.png";
import topoGigioImage from "@assets/Gino_1754685352006.webp";
import holdenImage from "@assets/Holden (5x4)_1753627164132.png";
import alolaImage from "@assets/Alola (5x4)_1753627164133.png";
import foxxyImage from "@assets/Foxxy (5x4)_1753627279647.png";
import moonImage3 from "@assets/Moon 5x4_1753627311757.png";
import booRadleyImage from "@assets/Breeding Dogs 5x4 (12)_1755286977779.png";
import newGrizzlyImage from "@assets/Breeding Dogs 5x4 (8)_1755286717960.png";
import roccoImage from "@assets/Rocco_1754686890866.avif";
import candyImage from "@assets/Candy_1754687171237.webp";

export default function Puppies() {
  const [isTopoPopupOpen, setIsTopoPopupOpen] = useState(false);
  const [isPedigreePopupOpen, setIsPedigreePopupOpen] = useState(false);
  const [selectedLitter, setSelectedLitter] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({});
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{src: string, name: string} | null>(null);
  const [isTitlePopupOpen, setIsTitlePopupOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState<{abbreviation: string, fullName: string} | null>(null);

  const getTitleFullName = (abbreviation: string): string => {
    const titleMap: { [key: string]: string } = {
      "CH": "Champion",
      "LT": "Limited", 
      "MX": "Master Agility Excellent",
      "JH": "Junior Hunter",
      "SHR": "Senior Hunter Retriever", 
      "LIT": "Limited",
      "MBISS": "Multiple Best in Specialty Show",
      "GCH": "Grand Champion"
    };
    return titleMap[abbreviation] || abbreviation;
  };

  const litters = [
    {
      name: "Moon & Foxxy",
      sire: "Moon",
      dam: "Foxxy",
      birthDate: "3/28/2024",
      puppiesCount: "8 puppies",
      available: "Available Now",
      readyDate: "May 2024",
      image: moonFoxxyPuppies,
      image2: moonFoxxyPuppies2,
      status: "Ready",
      description: "Beautiful litter with excellent temperaments"
    },
    {
      name: "Grizzly & Guinevere",
      sire: "Grizzly",
      dam: "Guinevere",
      birthDate: "4/15/2024",
      puppiesCount: "6 puppies",
      available: "Available Now", 
      readyDate: "June 2024",
      image: grizzlyImage,
      image2: newGrizzlyImage,
      status: "Ready",
      description: "Strong, healthy puppies from champion bloodlines"
    },
    {
      name: "Holden & Alola",
      sire: "Holden",
      dam: "Alola", 
      birthDate: "5/10/2024",
      puppiesCount: "7 puppies",
      available: "Available Now",
      readyDate: "July 2024",
      image: holdenImage,
      image2: alolaImage,
      status: "Ready",
      description: "Exceptional litter with wonderful conformation"
    },
    {
      name: "Boo Radley & Queen Boudica",
      sire: "Boo Radley",
      dam: "Queen Boudica",
      birthDate: "6/1/2024", 
      puppiesCount: "5 puppies",
      available: "Available Now",
      readyDate: "August 2024",
      image: booRadleyImage,
      image2: queenBoudicaImage,
      status: "Ready",
      description: "Premium litter from our finest breeding stock"
    },
    {
      name: "Moon & Nora",
      sire: "Moon",
      dam: "Nora",
      birthDate: "8/15/2024",
      puppiesCount: "9 puppies",
      available: "Ready Soon",
      readyDate: "October 2024",
      image: moonImage,
      image2: noraImage,
      status: "Ready Soon",
      description: "Highly anticipated repeat breeding"
    },
    {
      name: "Moon & Harper Lee",
      sire: "Moon",
      dam: "Harper Lee",
      birthDate: "7/27/2025",
      puppiesCount: "TBD",
      available: "Accepting Deposits",
      readyDate: "September 2025",
      image: moonImage,
      image2: harperLeeImage,
      status: "Upcoming",
      description: "Bred in May, due in July 2025"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openPedigreePopup = (litter: any) => {
    setSelectedLitter(litter);
    setIsPedigreePopupOpen(true);
  };

  const getLitterStatus = (birthDate: string, status: string) => {
    if (status === "Upcoming") return "Accepting Deposits";
    
    const birth = new Date(birthDate);
    const today = new Date();
    const weeksSinceBirth = Math.floor((today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24 * 7));
    
    if (weeksSinceBirth >= 8) return "Ready";
    if (weeksSinceBirth >= 6) return "Ready Soon";
    return "Too Young";
  };

  // Real pedigree data from breeding dogs
  const getDogPedigreeData = (dogName: string) => {
    const pedigrees: { [key: string]: any } = {
      "Moon": {
        name: "Moon",
        formalName: "Belquest Conclusion Super Moon Rising",
        titles: ["CH"],
        image: moonImage,
        sire: {
          name: "Farnfield Topo Gigio (\"Gino\")",
          titles: ["GCH", "CH"],
          image: topoGigioImage,
          achievements: "2019 Westminster Best of Breed"
        },
        dam: {
          name: "Belquest Conclusion Frozen Margarita",
          titles: ["CH"],
          sire: {
            name: "Wiscoy's Rocco",
            titles: ["CH"],
            image: roccoImage
          },
          dam: {
            name: "Belquest Nostalgic Candy (\"Candy\")",
            titles: ["BOBBBE", "GCH", "CH"],
            image: candyImage,
            achievements: "2013 AKC/Eukanuba National Championship Best of Breed Bred-by-Exhibitor"
          }
        }
      },
      "Foxxy": {
        name: "Foxxy",
        formalName: "On The Bluff's Foxxy Lady",
        titles: [],
        image: foxxyImage,
        sire: {
          name: "Foxxy's Sire",
          titles: ["CH"]
        },
        dam: {
          name: "Foxxy's Dam",
          titles: ["CH"]
        }
      },
      "Grizzly": {
        name: "Grizzly",
        formalName: "On The Bluff's Grizzly Bear",
        titles: [],
        image: grizzlyImage,
        sire: {
          name: "Farnfield Topo Gigio (\"Gino\")",
          titles: ["GCH", "CH"],
          image: topoGigioImage,
          achievements: "2019 Westminster Best of Breed"
        },
        dam: {
          name: "Grizzly's Dam",
          titles: ["CH"]
        }
      },
      "Guinevere": {
        name: "Guinevere",
        formalName: "On The Bluff's Queen Guinevere",
        titles: [],
        image: newGrizzlyImage,
        sire: {
          name: "Guinevere's Sire",
          titles: ["CH"]
        },
        dam: {
          name: "Guinevere's Dam",
          titles: ["CH"]
        }
      },
      "Holden": {
        name: "Holden",
        formalName: "Holden Caulfield Salinger",
        titles: [],
        image: holdenImage,
        sire: {
          name: "Holden's Sire",
          titles: ["CH"]
        },
        dam: {
          name: "Holden's Dam",
          titles: ["CH"]
        }
      },
      "Alola": {
        name: "Alola",
        formalName: "On The Bluff's Alola",
        titles: [],
        image: alolaImage,
        sire: {
          name: "Alola's Sire",
          titles: ["CH"]
        },
        dam: {
          name: "Alola's Dam",
          titles: ["CH"]
        }
      },
      "Nora": {
        name: "Nora",
        formalName: "On The Bluff's Nora",
        titles: ["CH"],
        image: noraImage,
        sire: {
          name: "Nora's Sire",
          titles: ["CH"]
        },
        dam: {
          name: "Nora's Dam",
          titles: ["CH"]
        }
      },
      "Boo Radley": {
        name: "Boo Radley",
        formalName: "On The Bluff's Boo Radley",
        titles: [],
        image: booRadleyImage,
        sire: {
          name: "Boo Radley's Sire",
          titles: ["CH"]
        },
        dam: {
          name: "Boo Radley's Dam",
          titles: ["CH"]
        }
      },
      "Queen Boudica": {
        name: "Queen Boudica",
        formalName: "On The Bluff's Queen Boudica",
        titles: [],
        image: queenBoudicaImage,
        sire: {
          name: "Queen Boudica's Sire",
          titles: ["CH"]
        },
        dam: {
          name: "Queen Boudica's Dam",
          titles: ["CH"]
        }
      },
      "Harper Lee": {
        name: "Harper Lee",
        formalName: "On The Bluff's Harper Lee",
        titles: [],
        image: harperLeeImage,
        sire: {
          name: "Harper Lee's Sire",
          titles: ["CH"]
        },
        dam: {
          name: "Harper Lee's Dam",
          titles: ["CH"]
        }
      }
    };
    
    return pedigrees[dogName] || null;
  };

  const getPedigreeData = (litterName: string) => {
    // Extract sire and dam names from litter name
    const [sireName, damName] = litterName.split(' & ');
    
    // Get the actual pedigree data for both parents
    const sireData = getDogPedigreeData(sireName);
    const damData = getDogPedigreeData(damName);
    
    if (!sireData || !damData) {
      return null;
    }

    return {
      sire: sireData,
      dam: damData
    };
  };

  const renderLitterCard = (litter: any, index: number) => {
    const cardKey = `${litter.name}-${index}`;
    const currentIndex = currentImageIndex[cardKey] || 0;
    const images = litter.images || [litter.image, litter.image2].filter(Boolean);
    
    const nextImage = () => {
      setCurrentImageIndex(prev => ({
        ...prev,
        [cardKey]: (currentIndex + 1) % images.length
      }));
    };

    const prevImage = () => {
      setCurrentImageIndex(prev => ({
        ...prev,
        [cardKey]: currentIndex === 0 ? images.length - 1 : currentIndex - 1
      }));
    };

    return (
      <Card key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-0">
        <div className="relative">
          <img 
            src={images[currentIndex]} 
            alt={`${litter.name} Labrador litter - Photo ${currentIndex + 1}`} 
            className="w-full h-72 object-cover transition-all duration-300"
            style={{aspectRatio: '5/4'}}
          />
          
          {/* Image Navigation */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all duration-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all duration-200"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              
              {/* Image Dots Indicator */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_: string, imgIndex: number) => (
                  <button
                    key={imgIndex}
                    onClick={() => setCurrentImageIndex(prev => ({ ...prev, [cardKey]: imgIndex }))}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      imgIndex === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
          
          <div className="absolute top-4 right-4">
            <span className={`px-4 py-2 rounded-full text-sm font-montserrat font-semibold shadow-lg ${
              getLitterStatus(litter.birthDate, litter.status) === 'Ready' ? 'text-white' :
              getLitterStatus(litter.birthDate, litter.status) === 'Ready Soon' ? 'text-white' :
              'text-white'
            }`}
            style={{
              backgroundColor: getLitterStatus(litter.birthDate, litter.status) === 'Ready' ? '#6d761d' :
              getLitterStatus(litter.birthDate, litter.status) === 'Ready Soon' ? '#8a8f28' :
              '#a5aa35'
            }}>
              {getLitterStatus(litter.birthDate, litter.status)}
            </span>
          </div>
        </div>

        <CardContent className="p-6">
          <div className="text-center mb-4">
            <h3 className="text-2xl font-playfair text-stone-800 mb-2">{litter.name}</h3>
            <p className="text-stone-600 font-montserrat">{litter.description}</p>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-stone-600 font-montserrat">Birth Date:</span>
              <span className="font-semibold text-stone-800">{litter.birthDate}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-stone-600 font-montserrat">Litter Size:</span>
              <span className="font-semibold text-stone-800">{litter.puppiesCount}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-stone-600 font-montserrat">Ready Date:</span>
              <span className="font-semibold text-stone-800">{litter.readyDate}</span>
            </div>
          </div>

          <div className="space-y-3">
            <Button
              onClick={() => openPedigreePopup(litter)}
              variant="outline"
              className="w-full border-stone-300 text-stone-700 hover:bg-stone-50 font-montserrat"
            >
              View Pedigree
            </Button>
            <Button
              onClick={scrollToContact}
              className="w-full font-montserrat text-white"
              style={{ backgroundColor: '#6d761d' }}
            >
              Inquire About This Litter
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-playfair text-stone-800 mb-6">
          Current & Upcoming Litters
        </h1>
        <p className="text-lg text-stone-600 font-montserrat max-w-3xl mx-auto">
          Meet our beautiful Labrador litters and reserve your future companion
        </p>
      </div>

      {/* Litter Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 pb-16">
        {litters.map((litter, index) => renderLitterCard(litter, index))}
      </div>

      {/* Pedigree Popup */}
      <Dialog open={isPedigreePopupOpen} onOpenChange={setIsPedigreePopupOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-playfair text-stone-800 mb-4">
              {selectedLitter?.name} Pedigree
            </DialogTitle>
          </DialogHeader>
          
          {selectedLitter && (() => {
            const pedigreeData = getPedigreeData(selectedLitter.name);
            
            if (!pedigreeData) {
              return (
                <div className="text-center py-8">
                  <p className="text-stone-600">Pedigree information is available upon request.</p>
                </div>
              );
            }

            return (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-playfair text-stone-800">
                    Breeding Pair: {pedigreeData.sire.name} × {pedigreeData.dam.name}
                  </h3>
                </div>

                {/* Traditional Pedigree Tree Layout */}
                <div className="relative w-full overflow-x-auto">
                  <div className="min-w-[900px] h-[500px] relative bg-stone-50 rounded-lg p-6">
                    
                    {/* Litter in Center */}
                    <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
                      <div className="bg-green-100 border-2 border-green-400 rounded-lg p-4 text-center min-w-[140px]">
                        <div className="font-bold text-green-800 text-lg">Litter</div>
                        <div className="text-sm text-green-700">{selectedLitter.name}</div>
                      </div>
                    </div>

                    {/* Sire (Top Right) */}
                    <div className="absolute top-16 left-64">
                      <div className="bg-blue-100 border-2 border-blue-400 rounded-lg p-3 text-center min-w-[160px]">
                        <div className="font-semibold text-blue-800">{pedigreeData.sire.name}</div>
                        <div className="text-xs text-blue-600 mt-1">{pedigreeData.sire.formalName}</div>
                        {pedigreeData.sire.titles?.length > 0 && (
                          <div className="text-xs font-medium text-blue-700 mt-1">
                            {pedigreeData.sire.titles.join(', ')}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Dam (Bottom Right) */}
                    <div className="absolute bottom-16 left-64">
                      <div className="bg-pink-100 border-2 border-pink-400 rounded-lg p-3 text-center min-w-[160px]">
                        <div className="font-semibold text-pink-800">{pedigreeData.dam.name}</div>
                        <div className="text-xs text-pink-600 mt-1">{pedigreeData.dam.formalName}</div>
                        {pedigreeData.dam.titles?.length > 0 && (
                          <div className="text-xs font-medium text-pink-700 mt-1">
                            {pedigreeData.dam.titles.join(', ')}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Sire's Sire (Paternal Grandfather) */}
                    {pedigreeData.sire.sire && (
                      <div className="absolute top-8 left-[480px]">
                        <div className="bg-blue-50 border border-blue-300 rounded p-2 text-center min-w-[140px]">
                          <div className="text-sm font-medium text-blue-800">{pedigreeData.sire.sire.name}</div>
                          {pedigreeData.sire.sire.titles?.length > 0 && (
                            <div className="text-xs text-blue-600 mt-1">{pedigreeData.sire.sire.titles.join(', ')}</div>
                          )}
                          {pedigreeData.sire.sire.achievements && (
                            <div className="text-xs text-blue-500 mt-1 italic">{pedigreeData.sire.sire.achievements}</div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Sire's Dam (Paternal Grandmother) */}
                    {pedigreeData.sire.dam && (
                      <div className="absolute top-24 left-[480px]">
                        <div className="bg-blue-50 border border-blue-300 rounded p-2 text-center min-w-[140px]">
                          <div className="text-sm font-medium text-blue-800">{pedigreeData.sire.dam.name}</div>
                          {pedigreeData.sire.dam.titles?.length > 0 && (
                            <div className="text-xs text-blue-600 mt-1">{pedigreeData.sire.dam.titles.join(', ')}</div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Dam's Sire (Maternal Grandfather) */}
                    {pedigreeData.dam.sire && (
                      <div className="absolute bottom-24 left-[480px]">
                        <div className="bg-pink-50 border border-pink-300 rounded p-2 text-center min-w-[140px]">
                          <div className="text-sm font-medium text-pink-800">{pedigreeData.dam.sire.name}</div>
                          {pedigreeData.dam.sire.titles?.length > 0 && (
                            <div className="text-xs text-pink-600 mt-1">{pedigreeData.dam.sire.titles.join(', ')}</div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Dam's Dam (Maternal Grandmother) */}
                    {pedigreeData.dam.dam && (
                      <div className="absolute bottom-8 left-[480px]">
                        <div className="bg-pink-50 border border-pink-300 rounded p-2 text-center min-w-[140px]">
                          <div className="text-sm font-medium text-pink-800">{pedigreeData.dam.dam.name}</div>
                          {pedigreeData.dam.dam.titles?.length > 0 && (
                            <div className="text-xs text-pink-600 mt-1">{pedigreeData.dam.dam.titles.join(', ')}</div>
                          )}
                          {pedigreeData.dam.dam.achievements && (
                            <div className="text-xs text-pink-500 mt-1 italic">{pedigreeData.dam.dam.achievements}</div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Great-Grandparents (if available) */}
                    {pedigreeData.sire.sire?.sire && (
                      <div className="absolute top-4 left-[680px]">
                        <div className="bg-blue-25 border border-blue-200 rounded p-1 text-center min-w-[100px]">
                          <div className="text-xs text-blue-700">{pedigreeData.sire.sire.sire.name}</div>
                        </div>
                      </div>
                    )}

                    {pedigreeData.sire.sire?.dam && (
                      <div className="absolute top-12 left-[680px]">
                        <div className="bg-blue-25 border border-blue-200 rounded p-1 text-center min-w-[100px]">
                          <div className="text-xs text-blue-700">{pedigreeData.sire.sire.dam.name}</div>
                        </div>
                      </div>
                    )}

                    {pedigreeData.dam.dam?.sire && (
                      <div className="absolute bottom-12 left-[680px]">
                        <div className="bg-pink-25 border border-pink-200 rounded p-1 text-center min-w-[100px]">
                          <div className="text-xs text-pink-700">{pedigreeData.dam.dam.sire.name}</div>
                        </div>
                      </div>
                    )}

                    {pedigreeData.dam.dam?.dam && (
                      <div className="absolute bottom-4 left-[680px]">
                        <div className="bg-pink-25 border border-pink-200 rounded p-1 text-center min-w-[100px]">
                          <div className="text-xs text-pink-700">{pedigreeData.dam.dam.dam.name}</div>
                        </div>
                      </div>
                    )}

                    {/* Connecting Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      {/* Main horizontal line from litter */}
                      <line x1="148" y1="50%" x2="256" y2="50%" stroke="#666" strokeWidth="2"/>
                      
                      {/* Vertical line splitting to parents */}
                      <line x1="256" y1="50%" x2="256" y2="30%" stroke="#666" strokeWidth="2"/>
                      <line x1="256" y1="50%" x2="256" y2="70%" stroke="#666" strokeWidth="2"/>
                      
                      {/* Lines to sire and dam */}
                      <line x1="256" y1="30%" x2="344" y2="30%" stroke="#666" strokeWidth="2"/>
                      <line x1="256" y1="70%" x2="344" y2="70%" stroke="#666" strokeWidth="2"/>
                      
                      {/* Lines from sire to grandparents */}
                      <line x1="424" y1="30%" x2="480" y2="30%" stroke="#666" strokeWidth="1"/>
                      <line x1="480" y1="30%" x2="480" y2="20%" stroke="#666" strokeWidth="1"/>
                      <line x1="480" y1="30%" x2="480" y2="40%" stroke="#666" strokeWidth="1"/>
                      <line x1="480" y1="20%" x2="550" y2="20%" stroke="#666" strokeWidth="1"/>
                      <line x1="480" y1="40%" x2="550" y2="40%" stroke="#666" strokeWidth="1"/>
                      
                      {/* Lines from dam to grandparents */}
                      <line x1="424" y1="70%" x2="480" y2="70%" stroke="#666" strokeWidth="1"/>
                      <line x1="480" y1="70%" x2="480" y2="60%" stroke="#666" strokeWidth="1"/>
                      <line x1="480" y1="70%" x2="480" y2="80%" stroke="#666" strokeWidth="1"/>
                      <line x1="480" y1="60%" x2="550" y2="60%" stroke="#666" strokeWidth="1"/>
                      <line x1="480" y1="80%" x2="550" y2="80%" stroke="#666" strokeWidth="1"/>
                      
                      {/* Lines to great-grandparents (if they exist) */}
                      <line x1="620" y1="20%" x2="680" y2="20%" stroke="#666" strokeWidth="0.5"/>
                      <line x1="680" y1="20%" x2="680" y2="15%" stroke="#666" strokeWidth="0.5"/>
                      <line x1="680" y1="20%" x2="680" y2="25%" stroke="#666" strokeWidth="0.5"/>
                      <line x1="680" y1="15%" x2="730" y2="15%" stroke="#666" strokeWidth="0.5"/>
                      <line x1="680" y1="25%" x2="730" y2="25%" stroke="#666" strokeWidth="0.5"/>
                      
                      <line x1="620" y1="80%" x2="680" y2="80%" stroke="#666" strokeWidth="0.5"/>
                      <line x1="680" y1="80%" x2="680" y2="75%" stroke="#666" strokeWidth="0.5"/>
                      <line x1="680" y1="80%" x2="680" y2="85%" stroke="#666" strokeWidth="0.5"/>
                      <line x1="680" y1="75%" x2="730" y2="75%" stroke="#666" strokeWidth="0.5"/>
                      <line x1="680" y1="85%" x2="730" y2="85%" stroke="#666" strokeWidth="0.5"/>
                    </svg>
                  </div>
                </div>

                <div className="text-center text-sm text-stone-600 mt-4">
                  <p>This pedigree shows the direct lineage and championship titles of the breeding pair.</p>
                </div>
              </div>
            );
          })()}
        </DialogContent>
      </Dialog>
    </div>
  );
}