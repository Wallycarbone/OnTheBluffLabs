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

  const openPedigreePopup = (litter: any) => {
    setSelectedLitter(litter);
    setIsPedigreePopupOpen(true);
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

      {/* Test button to verify pedigree data */}
      <div className="p-8">
        <Button
          onClick={() => {
            const testData = getPedigreeData("Moon & Foxxy");
            console.log("Pedigree data test:", testData);
            if (testData) {
              setSelectedLitter({ name: "Moon & Foxxy" });
              setIsPedigreePopupOpen(true);
            } else {
              alert("Pedigree data not found");
            }
          }}
          className="mb-4"
        >
          Test View Pedigree (Moon & Foxxy)
        </Button>
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

                {/* Pedigree Tree Display */}
                <div className="relative w-full overflow-x-auto">
                  <div className="min-w-[800px] h-[400px] relative bg-stone-50 rounded-lg p-4">
                    
                    {/* Sire Side (Top) */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-3 text-center min-w-[160px]">
                        <div className="font-semibold text-blue-800">{pedigreeData.sire.name}</div>
                        <div className="text-xs text-blue-600">{pedigreeData.sire.formalName}</div>
                        {pedigreeData.sire.titles?.length > 0 && (
                          <div className="text-xs font-medium text-blue-700">
                            {pedigreeData.sire.titles.join(', ')}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Dam Side (Bottom) */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-pink-100 border-2 border-pink-300 rounded-lg p-3 text-center min-w-[160px]">
                        <div className="font-semibold text-pink-800">{pedigreeData.dam.name}</div>
                        <div className="text-xs text-pink-600">{pedigreeData.dam.formalName}</div>
                        {pedigreeData.dam.titles?.length > 0 && (
                          <div className="text-xs font-medium text-pink-700">
                            {pedigreeData.dam.titles.join(', ')}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Sire's Parents */}
                    {pedigreeData.sire.sire && (
                      <div className="absolute top-4 left-16">
                        <div className="bg-blue-50 border border-blue-200 rounded p-2 text-center min-w-[120px]">
                          <div className="text-sm font-medium text-blue-800">{pedigreeData.sire.sire.name}</div>
                          {pedigreeData.sire.sire.titles?.length > 0 && (
                            <div className="text-xs text-blue-600">{pedigreeData.sire.sire.titles.join(', ')}</div>
                          )}
                        </div>
                      </div>
                    )}
                    
                    {pedigreeData.sire.dam && (
                      <div className="absolute top-4 right-16">
                        <div className="bg-blue-50 border border-blue-200 rounded p-2 text-center min-w-[120px]">
                          <div className="text-sm font-medium text-blue-800">{pedigreeData.sire.dam.name}</div>
                          {pedigreeData.sire.dam.titles?.length > 0 && (
                            <div className="text-xs text-blue-600">{pedigreeData.sire.dam.titles.join(', ')}</div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Dam's Parents */}
                    {pedigreeData.dam.sire && (
                      <div className="absolute bottom-4 left-16">
                        <div className="bg-pink-50 border border-pink-200 rounded p-2 text-center min-w-[120px]">
                          <div className="text-sm font-medium text-pink-800">{pedigreeData.dam.sire.name}</div>
                          {pedigreeData.dam.sire.titles?.length > 0 && (
                            <div className="text-xs text-pink-600">{pedigreeData.dam.sire.titles.join(', ')}</div>
                          )}
                        </div>
                      </div>
                    )}
                    
                    {pedigreeData.dam.dam && (
                      <div className="absolute bottom-4 right-16">
                        <div className="bg-pink-50 border border-pink-200 rounded p-2 text-center min-w-[120px]">
                          <div className="text-sm font-medium text-pink-800">{pedigreeData.dam.dam.name}</div>
                          {pedigreeData.dam.dam.titles?.length > 0 && (
                            <div className="text-xs text-pink-600">{pedigreeData.dam.dam.titles.join(', ')}</div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Connecting Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      {/* Center vertical line */}
                      <line x1="50%" y1="20%" x2="50%" y2="80%" stroke="#666" strokeWidth="2"/>
                      
                      {/* Sire horizontal lines */}
                      <line x1="50%" y1="20%" x2="20%" y2="20%" stroke="#666" strokeWidth="1"/>
                      <line x1="50%" y1="20%" x2="80%" y2="20%" stroke="#666" strokeWidth="1"/>
                      
                      {/* Dam horizontal lines */}
                      <line x1="50%" y1="80%" x2="20%" y2="80%" stroke="#666" strokeWidth="1"/>
                      <line x1="50%" y1="80%" x2="80%" y2="80%" stroke="#666" strokeWidth="1"/>
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