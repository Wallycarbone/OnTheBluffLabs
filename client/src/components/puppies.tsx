import React, { useState, useCallback, useEffect } from "react";
import { useLocation } from "wouter";
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

// Core dog images (avoiding duplicates below)  
import queenBoudicaImage from "@assets/Queen Boudica 5x4_1753565170818.png";
import topoGigioImage from "@assets/Black and White Minimalist New Collection Social Media Mockup Instagram Post (83)_1756671954087.png";
import boscoImage from "@assets/Bosco_1753734656860.avif";
import hannahImage from "@assets/Hannah_1753736053468.png";
import cyrusImage from "@assets/CyrusBodyL (1)_1753815517271.jpg";
import simmerImage from "@assets/Simmer_1753810570980.avif";
import brodyImage from "@assets/Brody_1753811205545.jpg";
import mrPeacockImage from "@assets/Mr. Peacock_1753621328199.png";
import mrTurtlesImage from "@assets/Mr. Turtles_1753621328201.png";
import msAlohaImage from "@assets/Ms. Aloha_1753621328202.png";
import msSunflowerImage from "@assets/Ms. Sunflower_1753621328202.png";
import mrSuperstarImage from "@assets/Mr. Superstar_1753621328202.png";
import mrPenguinPartyImage from "@assets/Mr. Penguin Party_1753621328202.png";
import msAlpineGlowImage from "@assets/Ms. Alpine Glow_1753621328203.png";
import fernApplePieImage from "@assets/Fern (Apple Pie 5x4)_1753623366073.png";
import summerButterflyImage from "@assets/Summer (Butterfly 5x4)_1753623366075.png";
import willowSeaglassImage from "@assets/Willow (Seaglass 5x4)_1753623366078.png";
import hollyPuppyLoveImage from "@assets/Holly (Puppy Love 5x4)_1753626044736.png";
import pearlTurtlesImage from "@assets/Pearl (Turtles 5x4)_1753626048336.png";
import hazelPeacockImage from "@assets/Hazel (Peacock 5x4)_1753626048340.png";
import breedingDogsImage from "@assets/Breeding Dogs 5x4_1753626746448.png";
import breedingDogs2Image from "@assets/Breeding Dogs 5x4_1753626932987.png";
import holdenImage from "@assets/Holden (5x4)_1753627164132.png";
import alolaImage from "@assets/Alola (5x4)_1753627164133.png";
import foxxyImage from "@assets/Foxxy (5x4)_1753627279647.png";
import moonImage3 from "@assets/Moon 5x4_1753627311757.png";
import matureDogsImage from "@assets/Breeding Dogs 5x4_1753642698754.png";
// Previous puppy images for "Generations of Distinction" gallery
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
import newYellowWithToys from "@assets/41_1755549645617.png";
import newBlackWithBanana from "@assets/Puppies 5x4 (4 x 4 in) (15)_1755549884489.png";
import newGoldenWithToys from "@assets/Puppies 5x4 (4 x 4 in) (16)_1755550036481.png";
import newSaddleMarked from "@assets/Puppies 5x4 (4 x 4 in) (17)_1755550198365.png";
import newBlackOnRocks from "@assets/Puppies 5x4 (4 x 4 in) (19)_1755550844479.png";
// Champion bloodline images for clickable highlights
import flyUnderRadarImage from "@assets/Breeding Dogs 5x4 (21)_1755444196054.png";
import martingaleImage from "@assets/martybodymarch06 (1)_1755444963570.jpg";
import chaseImage from "@assets/Chase_1755458617995.avif";
import expressoImage from "@assets/expresso_new3_1755458950324.webp";
// Additional breeding dog images for pedigree data
import newGrizzlyImage from "@assets/Breeding Dogs 5x4 (8)_1755286717960.png";
import newMoonImage from "@assets/Breeding Dogs 5x4 (9)_1755286823265.png";
import newHoldenImage from "@assets/Breeding Dogs 5x4 (10)_1755286862112.png";
import booRadleyImage from "@assets/Breeding Dogs 5x4 (12)_1755286977779.png";
import chekhovImage from "@assets/Breeding Dogs 5x4 (16)_1755287286323.png";
import twainBreedingImage from "@assets/Breeding Dogs 5x4 (25)_1755461082022.png";
import stoliImage from "@assets/Stoli_1755288962958.jpg";
import sequelImage from "@assets/Sequel_1755289144473.webp";
import frannyGlassImage from "@assets/Breeding Dogs 5x4 (17)_1755287949069.png";
import sterlingImage from "@assets/Sterling-name-2-515x412_1755289517437.jpg";
import stormTrooperImage from "@assets/Storm Trooper_1755290311684.avif";
import roccoImage from "@assets/Rocco_1754686890866.avif";
import candyImage from "@assets/Candy_1754687171237.webp";
import hamburgImage from "@assets/Hamburg_1755289182545.jpg";
// Additional imports for complete pedigree data (avoiding duplicates from above)
import newHarperLeeImage from "@assets/Harper Lee 5x4_1753563791440.png";
import atticusFinchImage from "@assets/Breeding Dogs 5x4 (27)_1756672406925.png";
// arabellaImage and markTwainImage temporarily commented out due to missing files
// import arabellaImage from "@assets/Arabella_1755287697962.jpg";
// import markTwainImage from "@assets/Mark Twain_1755287752095.avif";
// import piperImage from "@assets/Piper_1755287967893.avif"; // File not found
import layLayImage from "@assets/Double Layer Cake_1755289022650.webp";
import duffyImage from "@assets/duffy-04_1755289259124.jpeg";
// import emmaImage from "@assets/Emma_1755291275425.webp"; // File not found

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

  // Generate SVG puppy placeholders for Moon & Foxxy litter
  const generatePuppySVG = (puppyNumber: number, color: string, size: 'small' | 'medium' | 'large' = 'medium') => {
    const sizeMap = { small: 150, medium: 200, large: 250 };
    const svgSize = sizeMap[size];
    
    return `data:image/svg+xml,${encodeURIComponent(`
      <svg width="${svgSize}" height="${svgSize * 0.8}" viewBox="0 0 ${svgSize} ${svgSize * 0.8}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#f8f9fa"/>
        <circle cx="${svgSize * 0.5}" cy="${svgSize * 0.4}" r="${svgSize * 0.2}" fill="${color}" stroke="#6d761d" stroke-width="2"/>
        <circle cx="${svgSize * 0.4}" cy="${svgSize * 0.35}" r="${svgSize * 0.02}" fill="#000"/>
        <circle cx="${svgSize * 0.6}" cy="${svgSize * 0.35}" r="${svgSize * 0.02}" fill="#000"/>
        <ellipse cx="${svgSize * 0.5}" cy="${svgSize * 0.42}" rx="${svgSize * 0.01}" ry="${svgSize * 0.005}" fill="#000"/>
        <text x="${svgSize * 0.5}" y="${svgSize * 0.7}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${svgSize * 0.08}" fill="#6d761d" font-weight="bold">Puppy ${puppyNumber}</text>
      </svg>
    `)}`;
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

  const getSirePedigreeHighlight = (litterName: string) => {
    const sireName = litterName.split(' & ')[0];
    const pedigreeData = getDogPedigreeData(sireName);
    
    if (!pedigreeData) {
      return { text: "Champion Bloodline with exceptional lineage" };
    }

    // Generate highlight based on the sire's pedigree structure
    if (sireName === "Moon" && pedigreeData.sire) {
      return {
        text: (
          <>
            Descended from 2019 Westminster Best of Breed Farnfield <button 
              onClick={() => setIsTopoPopupOpen(true)}
              className="underline cursor-pointer hover:opacity-80 transition-opacity font-medium"
              style={{color: '#6d761d'}}
            >
              Topo Gigio
            </button> and our beloved late sire, Atticus Finch
          </>
        )
      };
    }
    
    if (sireName === "Grizzly" && pedigreeData.sire?.sire) {
      return {
        text: (
          <>
            Descended from 2016 Westminster Best of Breed <button
              onClick={() => {
                setSelectedImage({
                  src: cyrusImage,
                  name: "Shalimar's The Animator (\"Cyrus\")"
                });
                setIsImagePopupOpen(true);
              }}
              className="underline cursor-pointer hover:opacity-80 transition-opacity font-medium"
              style={{color: '#6d761d'}}
            >
              Cyrus
            </button>
          </>
        )
      };
    }

    if (sireName === "Holden") {
      return {
        text: "Descended from GCH Highcaliber Labradale Expresso - 2011 AKC Grand Champion"
      };
    }

    if (sireName === "Boo Radley" && pedigreeData.sire?.dam?.sire) {
      return {
        text: "Descended from 1983 Westminster Best of Breed St. Hubert's Higgins"
      };
    }
    
    return { text: "Champion bloodline with exceptional lineage" };
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
    
    if (weeks >= 8) {
      return 'Ready';
    }
    
    return 'Ready Soon';
  };
  const currentLitters = [
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
    }
  ];

  const upcomingLitters = [
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
    }
  ];

  const [, setLocation] = useLocation();

  const scrollToContact = () => {
    setLocation('/contact');
  };

  const openPedigreePopup = (litter: any) => {
    setSelectedLitter(litter);
    setIsPedigreePopupOpen(true);
  };

  // Import the real pedigree data from breeding dogs
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
          achievements: "2019 Westminster Best of Breed",
          dam: {
            name: "Kim Valley Star Attraction of Farnfield",
            titles: [],
          },
          sire: {
            name: "Charm Bluveil's Mr. Darcy",
            titles: ["CH"],
            sire: {
              name: "Topo's Paternal Great-Grandsire",
              titles: ["CH"]
            },
            dam: {
              name: "Topo's Paternal Great-Granddam",
              titles: ["CH"]
            }
          }
        },
        dam: {
          name: "Belquest Conclusion Frozen Margarita",
          titles: ["CH"],
          sire: {
            name: "Wiscoy's Rocco",
            titles: ["CH"],
            image: roccoImage,
            sire: {
              name: "Moon's Maternal Great-Grandsire",
              titles: ["CH"]
            },
            dam: {
              name: "Moon's Maternal Great-Granddam",
              titles: ["CH"]
            }
          },
          dam: {
            name: "Belquest Nostalgic Candy (\"Candy\")",
            titles: ["BOBBBE", "GCH", "CH"],
            image: candyImage,
            achievements: "2013 AKC/Eukanuba National Championship Best of Breed Bred-by-Exhibitor",
            sire: {
              name: "Moon's Dam's Maternal Great-Grandsire",
              titles: ["CH"]
            },
            dam: {
              name: "Moon's Dam's Maternal Great-Granddam",
              titles: ["CH"]
            }
          }
        }
      },
      "Grizzly": {
        name: "Grizzly",
        formalName: "Endless Mountain's Grizzly Bear at On The Bluff (\"Grizzly\")",
        titles: [],
        image: newGrizzlyImage,
        sire: {
          name: "Greenstone Chocoholic at Loretta (\"Bosco\")",
          titles: ["CH", "MX"],
          image: boscoImage,
          sire: {
            name: "Shalimar's The Animator (\"Cyrus\")",
            titles: ["GCH", "CH", "MBISS"],
            image: cyrusImage,
            sire: {
              name: "Cyrus's Sire",
              titles: ["CH"],
              sire: {
                name: "Cyrus's Paternal Great-Grandsire",
                titles: ["CH"]
              },
              dam: {
                name: "Cyrus's Paternal Great-Granddam",
                titles: ["CH"]
              }
            },
            dam: {
              name: "Cyrus's Dam",
              titles: ["CH"],
              sire: {
                name: "Cyrus's Maternal Great-Grandsire",
                titles: ["CH"]
              },
              dam: {
                name: "Cyrus's Maternal Great-Granddam",
                titles: ["CH"]
              }
            }
          },
          dam: {
            name: "Greenstone's Special Blend (\"Simmer\")",
            titles: ["CH"],
            image: simmerImage,
            sire: {
              name: "Loretta's Maternal Grandsire",
              titles: ["CH"],
              sire: {
                name: "Loretta's Paternal Great-Grandsire",
                titles: ["CH"]
              },
              dam: {
                name: "Loretta's Paternal Great-Granddam",
                titles: ["CH"]
              }
            },
            dam: {
              name: "Loretta's Maternal Granddam",
              titles: ["CH"],
              sire: {
                name: "Loretta's Maternal Great-Grandsire",
                titles: ["CH"]
              },
              dam: {
                name: "Loretta's Maternal Great-Granddam",
                titles: ["CH"]
              }
            }
          }
        },
        dam: {
          name: "Endless Mountain's Hannah",
          titles: [],
          image: hannahImage,
          sire: {
            name: "Endless Mountain's Second Son (\"Brody\")",
            titles: [],
            image: brodyImage,
            sire: {
              name: "Brody's Sire",
              titles: ["CH"],
              sire: {
                name: "Brody's Paternal Great-Grandsire",
                titles: ["CH"]
              },
              dam: {
                name: "Brody's Paternal Great-Granddam",
                titles: ["CH"]
              }
            },
            dam: {
              name: "Brody's Dam",
              titles: ["CH"],
              sire: {
                name: "Brody's Maternal Great-Grandsire",
                titles: ["CH"]
              },
              dam: {
                name: "Brody's Maternal Great-Granddam",
                titles: ["CH"]
              }
            }
          },
          dam: {
            name: "Hannah's Dam",
            titles: ["CH"],
            sire: {
              name: "Hannah's Maternal Grandsire",
              titles: ["CH"],
              sire: {
                name: "Hannah's Paternal Great-Grandsire",
                titles: ["CH"]
              },
              dam: {
                name: "Hannah's Paternal Great-Granddam",
                titles: ["CH"]
              }
            },
            dam: {
              name: "Hannah's Maternal Granddam",
              titles: ["CH"],
              sire: {
                name: "Hannah's Maternal Great-Grandsire",
                titles: ["CH"]
              },
              dam: {
                name: "Hannah's Maternal Great-Granddam",
                titles: ["CH"]
              }
            }
          }
        }
      },
      "Holden": {
        name: "Holden",
        formalName: "On The Bluff's Holden Morrisey Caulfield",
        titles: [],
        image: newHoldenImage,
        sire: {
          name: "Belquest Conclusion On The Bluff's Tristan (\"Tristan\")",
          titles: [],
          sire: {
            name: "Belquest Conclusion Stolichnaya (\"Stoli\")",
            titles: [],
            image: stoliImage,
            sire: {
              name: "Aster Liberti Labro Hamburg",
              titles: ["CH"],
              image: hamburgImage
            },
            dam: {
              name: "Belquest Prequel To The Sequel (\"Sequel\")",
              titles: [],
              image: sequelImage
            }
          },
          dam: {
            name: "Belquest Conclusion Seminary Old Time Rock & Roll",
            titles: [],
            sire: {
              name: "GCH Harlequin Like A Rock",
              titles: ["GCH"]
            },
            dam: {
              name: "Seminary Ridge's Reveille At Belquest CD BN RN JH CGC",
              titles: ["CD", "BN", "RN", "JH", "CGC"]
            }
          }
        },
        dam: {
          name: "Belquest Conclusion Double Layer Cake (\"Cake\")",
          titles: [],
          image: layLayImage,
          sire: {
            name: "Expresso",
            titles: ["GCH", "CH"],
            image: expressoImage,
            sire: {
              name: "Expresso's Sire",
              titles: ["CH"],
              sire: {
                name: "Expresso's Paternal Great-Grandsire",
                titles: ["CH"]
              },
              dam: {
                name: "Expresso's Paternal Great-Granddam",
                titles: ["CH"]
              }
            },
            dam: {
              name: "Expresso's Dam",
              titles: ["CH"],
              sire: {
                name: "Expresso's Maternal Great-Grandsire",
                titles: ["CH"]
              },
              dam: {
                name: "Expresso's Maternal Great-Granddam",
                titles: ["CH"]
              }
            }
          },
          dam: {
            name: "Belquest Conclusion Sterlin' Silver Serenade (\"Sterling\")",
            titles: [],
            image: sterlingImage,
            sire: {
              name: "Sterling's Sire",
              titles: ["CH"],
              sire: {
                name: "Sterling's Paternal Great-Grandsire",
                titles: ["CH"]
              },
              dam: {
                name: "Sterling's Paternal Great-Granddam",
                titles: ["CH"]
              }
            },
            dam: {
              name: "Sterling's Dam",
              titles: ["CH"],
              sire: {
                name: "Sterling's Maternal Great-Grandsire",
                titles: ["CH"]
              },
              dam: {
                name: "Sterling's Maternal Great-Granddam",
                titles: ["CH"]
              }
            }
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
          titles: ["CH"],
          sire: {
            name: "Foxxy's Paternal Grandsire",
            titles: ["CH"],
            sire: {
              name: "Foxxy's Paternal Great-Grandsire",
              titles: ["CH"]
            },
            dam: {
              name: "Foxxy's Paternal Great-Granddam",
              titles: ["CH"]
            }
          },
          dam: {
            name: "Foxxy's Paternal Granddam",
            titles: ["CH"],
            sire: {
              name: "Foxxy's Paternal Dam's Great-Grandsire",
              titles: ["CH"]
            },
            dam: {
              name: "Foxxy's Paternal Dam's Great-Granddam",
              titles: ["CH"]
            }
          }
        },
        dam: {
          name: "Foxxy's Dam",
          titles: ["CH"],
          sire: {
            name: "Foxxy's Maternal Grandsire",
            titles: ["CH"],
            sire: {
              name: "Foxxy's Maternal Great-Grandsire",
              titles: ["CH"]
            },
            dam: {
              name: "Foxxy's Maternal Great-Granddam",
              titles: ["CH"]
            }
          },
          dam: {
            name: "Foxxy's Maternal Granddam",
            titles: ["CH"],
            sire: {
              name: "Foxxy's Dam's Maternal Great-Grandsire",
              titles: ["CH"]
            },
            dam: {
              name: "Foxxy's Dam's Maternal Great-Granddam",
              titles: ["CH"]
            }
          }
        }
      },
      "Nora": {
        name: "Nora",
        formalName: "On The Bluff's Nora",
        titles: ["CH"],
        image: noraImage,
        sire: {
          name: "Nora's Sire",
          titles: ["CH"],
          sire: {
            name: "Nora's Paternal Grandsire",
            titles: ["CH"],
            sire: {
              name: "Nora's Paternal Great-Grandsire",
              titles: ["CH"]
            },
            dam: {
              name: "Nora's Paternal Great-Granddam",
              titles: ["CH"]
            }
          },
          dam: {
            name: "Nora's Paternal Granddam",
            titles: ["CH"],
            sire: {
              name: "Nora's Paternal Dam's Great-Grandsire",
              titles: ["CH"]
            },
            dam: {
              name: "Nora's Paternal Dam's Great-Granddam",
              titles: ["CH"]
            }
          }
        },
        dam: {
          name: "Nora's Dam",
          titles: ["CH"],
          sire: {
            name: "Nora's Maternal Grandsire",
            titles: ["CH"],
            sire: {
              name: "Nora's Maternal Great-Grandsire",
              titles: ["CH"]
            },
            dam: {
              name: "Nora's Maternal Great-Granddam",
              titles: ["CH"]
            }
          },
          dam: {
            name: "Nora's Maternal Granddam",
            titles: ["CH"],
            sire: {
              name: "Nora's Dam's Maternal Great-Grandsire",
              titles: ["CH"]
            },
            dam: {
              name: "Nora's Dam's Maternal Great-Granddam",
              titles: ["CH"]
            }
          }
        }
      },
      "Guinevere": {
        name: "Guinevere",
        formalName: "On The Bluff Guinevere",
        titles: ["CH"],
        sire: {
          name: "Guinevere's Sire",
          titles: ["CH"],
          sire: {
            name: "Guinevere's Paternal Grandsire",
            titles: ["CH"],
            sire: {
              name: "Guinevere's Paternal Great-Grandsire",
              titles: ["CH"]
            },
            dam: {
              name: "Guinevere's Paternal Great-Granddam",
              titles: ["CH"]
            }
          },
          dam: {
            name: "Guinevere's Paternal Granddam",
            titles: ["CH"],
            sire: {
              name: "Guinevere's Paternal Dam's Great-Grandsire",
              titles: ["CH"]
            },
            dam: {
              name: "Guinevere's Paternal Dam's Great-Granddam",
              titles: ["CH"]
            }
          }
        },
        dam: {
          name: "Guinevere's Dam",
          titles: ["CH"],
          sire: {
            name: "Guinevere's Maternal Grandsire",
            titles: ["CH"],
            sire: {
              name: "Guinevere's Maternal Great-Grandsire",
              titles: ["CH"]
            },
            dam: {
              name: "Guinevere's Maternal Great-Granddam",
              titles: ["CH"]
            }
          },
          dam: {
            name: "Guinevere's Maternal Granddam",
            titles: ["CH"],
            sire: {
              name: "Guinevere's Dam's Maternal Great-Grandsire",
              titles: ["CH"]
            },
            dam: {
              name: "Guinevere's Dam's Maternal Great-Granddam",
              titles: ["CH"]
            }
          }
        }
      },
      "Alola": {
        name: "Alola",
        formalName: "On The Bluff's Alola",
        titles: [],
        image: alolaImage,
        sire: {
          name: "Alola's Sire",
          titles: ["CH"],
          sire: {
            name: "Alola's Paternal Grandsire",
            titles: ["CH"],
            sire: {
              name: "Alola's Paternal Great-Grandsire",
              titles: ["CH"]
            },
            dam: {
              name: "Alola's Paternal Great-Granddam",
              titles: ["CH"]
            }
          },
          dam: {
            name: "Alola's Paternal Granddam",
            titles: ["CH"],
            sire: {
              name: "Alola's Paternal Dam's Great-Grandsire",
              titles: ["CH"]
            },
            dam: {
              name: "Alola's Paternal Dam's Great-Granddam",
              titles: ["CH"]
            }
          }
        },
        dam: {
          name: "Alola's Dam",
          titles: ["CH"],
          sire: {
            name: "Alola's Maternal Grandsire",
            titles: ["CH"],
            sire: {
              name: "Alola's Maternal Great-Grandsire",
              titles: ["CH"]
            },
            dam: {
              name: "Alola's Maternal Great-Granddam",
              titles: ["CH"]
            }
          },
          dam: {
            name: "Alola's Maternal Granddam",
            titles: ["CH"],
            sire: {
              name: "Alola's Dam's Maternal Great-Grandsire",
              titles: ["CH"]
            },
            dam: {
              name: "Alola's Dam's Maternal Great-Granddam",
              titles: ["CH"]
            }
          }
        }
      },
      "Harper Lee": {
        name: "Harper Lee",
        formalName: "On The Bluff's Harper Lee",
        titles: [],
        image: newHarperLeeImage,
        sire: {
          name: "On The Bluff's Atticus Finch",
          titles: [],
          image: atticusFinchImage,
          sire: {
            name: "Heartlands Polar Bear Chase",
            titles: [],
            image: chaseImage,
            sire: {
              name: "Walker's \"Chance\" Of A Lifetime",
              titles: []
            },
            dam: {
              name: "Starqueststruttontoktakafarms",
              titles: []
            }
          },
          dam: {
            name: "Heartlands Lily Of The Valley",
            titles: [],
            sire: {
              name: "Centrecourt Black Jake At Ceasarscreek",
              titles: []
            },
            dam: {
              name: "Heartlands Vanilla Frosty",
              titles: []
            }
          }
        },
        dam: {
          name: "On The Bluff's Arabella Tallant",
          titles: [],
          // image: arabellaImage, // Temporarily commented out due to missing file
          sire: {
            name: "Scarfone's Mark Twain",
            titles: [],
            // image: markTwainImage, // Temporarily commented out due to missing file
            sire: {
              name: "Valhalla's One Little Victory JH",
              titles: ["JH"]
            },
            dam: {
              name: "Bateshaus Stop To Smell The Roses",
              titles: []
            }
          },
          dam: {
            name: "Whispering Oaks Pattycake",
            titles: [],
            sire: {
              name: "GCH Bho's Major League RN",
              titles: ["GCH", "RN"]
            },
            dam: {
              name: "Summer Of Vantassel Manor Labradors",
              titles: []
            }
          }
        }
      }
    };

    return pedigrees[dogName] || null;
  };

  const renderPedigreeContent = (litter: any) => {
    const pedigreeData = getPedigreeData(litter.name);
    if (!pedigreeData) return <p>Pedigree information not available</p>;
    
    return (
      <div className="space-y-6">
        {/* Traditional Pedigree Layout - Clean and Organized */}
        <div className="overflow-x-auto p-8">
          <div className="relative" style={{ width: '1200px', height: '900px' }}>
            {/* Current Litter - Generation 0 - Centered between parents */}
            <div className="absolute" style={{ left: '50px', top: '290px', width: '180px' }}>
              <div className="rounded p-4 border-2" style={{backgroundColor: '#f8f9f0', borderColor: '#6d761d'}}>
                <div className="text-center">
                  <h3 className="text-sm font-oswald font-normal mb-2" style={{color: '#11100f'}}>
                    {litter?.name}
                  </h3>
                  <div className="text-xs text-gray-600">
                    Litter
                  </div>
                </div>
              </div>
            </div>

            {/* Main connection system from current litter to parents */}
            {/* Horizontal line from current litter to T-junction */}
            <div className="absolute rounded opacity-75 shadow-sm" style={{ left: '230px', top: '329px', width: '100px', height: '2px', backgroundColor: '#6d761d' }}></div>
            {/* Vertical line creating T-junction for sire and dam */}
            <div className="absolute rounded opacity-75 shadow-sm" style={{ left: '329px', top: '150px', width: '2px', height: '360px', backgroundColor: '#6d761d' }}></div>
            {/* Horizontal line from T-junction to sire */}
            <div className="absolute rounded opacity-75 shadow-sm" style={{ left: '330px', top: '149px', width: '50px', height: '2px', backgroundColor: '#6d761d' }}></div>
            {/* Horizontal line from T-junction to dam */}
            <div className="absolute rounded opacity-75 shadow-sm" style={{ left: '330px', top: '509px', width: '50px', height: '2px', backgroundColor: '#6d761d' }}></div>
            
            {/* Sire - Generation 1 - Centered between grandparents */}
            <div className="absolute" style={{ left: '380px', top: '110px', width: '180px' }}>
              <div className="bg-white rounded p-3 border-2" style={{borderColor: '#6d761d'}}>
                <div className="text-center">
                  {getPedigreeData(selectedLitter).sire.image && (
                    <div className="mb-2">
                      <img 
                        src={getPedigreeData(selectedLitter).sire.image} 
                        alt={getPedigreeData(selectedLitter).sire.name}
                        className="w-16 h-12 rounded object-cover mx-auto cursor-pointer"
                        style={{ imageRendering: 'crisp-edges', filter: 'contrast(1.1) brightness(1.05)' }}
                        onClick={() => {
                          setSelectedImage({src: getPedigreeData(selectedLitter).sire.image, name: getPedigreeData(selectedLitter).sire.name});
                          setIsImagePopupOpen(true);
                        }}
                      />
                    </div>
                  )}
                  <h5 className="font-oswald text-sm font-normal mb-1" style={{color: '#11100f'}}>
                    {getPedigreeData(selectedLitter).sire.image ? (
                      <button 
                        onClick={() => {
                          setSelectedImage({src: getPedigreeData(selectedLitter).sire.image, name: getPedigreeData(selectedLitter).sire.name});
                          setIsImagePopupOpen(true);
                        }}
                        className="underline cursor-pointer hover:opacity-80 transition-opacity"
                        style={{color: '#6d761d'}}
                      >
                        {getPedigreeData(selectedLitter).sire.name}
                      </button>
                    ) : getPedigreeData(selectedLitter).sire.name}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm font-source-sans" style={{color: '#4b4b4b'}}>
            This pedigree shows the 3-generation lineage for the {litter?.name} litter, 
            featuring champion bloodlines and exceptional breeding quality.
          </p>
        </div>
      </div>
    );
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
      
      <CardContent className="p-8">
        <div className="mb-6">
          <h3 className="text-2xl font-oswald font-normal tracking-wide mb-2" style={{color: '#11100f'}}>
            {litter.name}
          </h3>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4"></div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <span className="text-xs font-montserrat font-semibold uppercase tracking-wider" style={{color: '#6d761d'}}>Born</span>
            <p className="text-sm font-source-sans font-medium" style={{color: '#11100f'}}>{litter.birthDate}</p>
          </div>
          <div>
            <span className="text-xs font-montserrat font-semibold uppercase tracking-wider" style={{color: '#6d761d'}}>Age</span>
            <p className="text-sm font-source-sans font-medium" style={{color: '#11100f'}}>{calculateAge(litter.birthDate)}</p>
          </div>
        </div>


        <div className="flex justify-center">
          <Button 
            onClick={() => openPedigreePopup(litter)}
            variant="outline"
            className="font-montserrat font-medium text-sm h-auto py-3 px-8 rounded-lg border-2 transition-all duration-200"
            style={{borderColor: '#6d761d', color: '#6d761d', backgroundColor: 'white'}}
            onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#6d761d'; e.currentTarget.style.color = '#fefefe'}}
            onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = '#6d761d'}}
          >
            View Pedigree
          </Button>
        </div>
      </CardContent>
    </Card>
    );
  };

  return (
    <section id="puppies" className="bg-gray-50">
      <>
      {/* Full Width Puppy Photo Gallery */}
      <div className="mb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-8">
            {[
              { src: previousWhiteWithToys, alt: "Previous puppy - White Lab puppy with colorful toys", name: "White" },
              { src: newBlackOnRocks, alt: "Previous puppy - Black Lab puppy on rocks with polka dot toy", name: "Black" },
              { src: newYellowSitting, alt: "Previous puppy - Yellow Lab sitting in green grass", name: "Yellow" },
              { src: previousChocolateStanding, alt: "Previous puppy - Chocolate Lab puppy standing in grass", name: "Chocolate" },
              { src: previousFoxRedPuppy, alt: "Previous puppy - Fox red Lab puppy with pink toy", name: "Fox Red" },
              { src: newGoldenWithToys, alt: "Previous puppy - Golden Lab standing with colorful toys", name: "Golden" },
              { src: previousChocolateToys, alt: "Previous puppy - Chocolate Lab with colorful toys", name: "Chocolate" },
              { src: newBlackWithBanana, alt: "Previous puppy - Black Lab with yellow banana toy", name: "Black" },
              { src: newWhiteStanding, alt: "Previous puppy - White Lab standing outdoors", name: "White" },
              { src: newYellowWithToys, alt: "Previous puppy - Yellow Lab with colorful toys", name: "Yellow" },
              { src: previousYellowRope, alt: "Previous puppy - Yellow Lab with colorful rope toy", name: "Yellow" },
              { src: newSaddleMarked, alt: "Previous puppy - Lab with unique saddle markings and toys", name: "Saddled" },
              { src: previousChocolateRainbow, alt: "Previous puppy - Chocolate Lab with rainbow toy", name: "Chocolate" },
              { src: previousBlackToy, alt: "Previous puppy - Black Lab with yellow toy", name: "Black" },
              { src: previousWhitePuppy, alt: "Previous puppy - White Lab puppy in grass", name: "White" },

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
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

              </div>
            ))}
          </div>
          
        {/* Title Below Gallery */}
        <div className="bg-white py-20 px-4 sm:px-6 lg:px-8 mb-20">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
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
              
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
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
              
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
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
              
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
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
              <Button 
                onClick={scrollToContact}
                className="font-montserrat font-bold text-xl h-auto py-6 px-16 rounded-2xl shadow-2xl hover:shadow-[0_25px_50px_rgba(109,118,29,0.5)] transition-all duration-500 transform hover:scale-110 hover:-translate-y-3 ring-4 ring-opacity-40 ring-amber-300 border-2 border-amber-400"
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
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        
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
              .map((litter, index) => renderLitterCard(litter, index))}
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

        {/* Mature Dogs Section */
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
                  <img 
                    src={matureDogsImage}
                    alt="Mature Labrador available from On The Bluff Labradors"
                    className="w-32 h-32 object-cover rounded-md"
                    style={{objectPosition: '50% 20%'}}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

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

      {/* Pedigree Popup Dialog */}
      <Dialog open={isPedigreePopupOpen} onOpenChange={setIsPedigreePopupOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-oswald font-normal tracking-wide" style={{color: '#11100f'}}>
              {selectedLitter?.name} Pedigree
            </DialogTitle>
          </DialogHeader>
          {selectedLitter && (
            <>
              {renderPedigreeContent(selectedLitter)}
              <div className="space-y-6">
                {/* Traditional Pedigree Layout - Clean and Organized */}
                <div className="overflow-x-auto p-8">
                  <div className="relative" style={{ width: '1200px', height: '900px' }}>
                    {/* Current Litter - Generation 0 - Centered between parents */}
                    <div className="absolute" style={{ left: '50px', top: '290px', width: '180px' }}>
                      <div className="rounded p-4 border-2" style={{backgroundColor: '#f8f9f0', borderColor: '#6d761d'}}>
                        <div className="text-center">
                          <h3 className="text-sm font-oswald font-normal mb-2" style={{color: '#11100f'}}>
                            {selectedLitter?.name}
                          </h3>
                          <div className="text-xs text-gray-600">
                            Litter
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Main connection system from current litter to parents */}
                    {/* Horizontal line from current litter to T-junction */}
                    <div className="absolute rounded opacity-75 shadow-sm" style={{ left: '230px', top: '329px', width: '100px', height: '2px', backgroundColor: '#6d761d' }}></div>
                    {/* Vertical line creating T-junction for sire and dam */}
                    <div className="absolute rounded opacity-75 shadow-sm" style={{ left: '329px', top: '150px', width: '2px', height: '360px', backgroundColor: '#6d761d' }}></div>
                    {/* Horizontal line from T-junction to sire */}
                    <div className="absolute rounded opacity-75 shadow-sm" style={{ left: '330px', top: '149px', width: '50px', height: '2px', backgroundColor: '#6d761d' }}></div>
                    {/* Horizontal line from T-junction to dam */}
                    <div className="absolute rounded opacity-75 shadow-sm" style={{ left: '330px', top: '509px', width: '50px', height: '2px', backgroundColor: '#6d761d' }}></div>
                    
                    {/* Sire - Generation 1 - Centered between grandparents */}
                    <div className="absolute" style={{ left: '380px', top: '110px', width: '180px' }}>
                      <div className="bg-white rounded p-3 border-2" style={{borderColor: '#6d761d'}}>
                        <div className="text-center">
                          {getPedigreeData(selectedLitter).sire.image && (
                            <div className="mb-2">
                              <img 
                                src={getPedigreeData(selectedLitter).sire.image} 
                                alt={getPedigreeData(selectedLitter).sire.name}
                                className="w-16 h-12 rounded object-cover mx-auto cursor-pointer"
                                style={{ imageRendering: 'crisp-edges', filter: 'contrast(1.1) brightness(1.05)' }}
                                onClick={() => {
                                  setSelectedImage({src: getPedigreeData(selectedLitter).sire.image, name: getPedigreeData(selectedLitter).sire.name});
                                  setIsImagePopupOpen(true);
                                }}
                              />
                            </div>
                          )}
                          <h5 className="font-oswald text-sm font-normal mb-1" style={{color: '#11100f'}}>
                            {getPedigreeData(selectedLitter).sire.image ? (
                              <button 
                                onClick={() => {
                                  setSelectedImage({src: getPedigreeData(selectedLitter).sire.image, name: getPedigreeData(selectedLitter).sire.name});
                                  setIsImagePopupOpen(true);
                                }}
                                className="underline cursor-pointer hover:opacity-80 transition-opacity"
                                style={{color: '#6d761d'}}
                              >
                                {getPedigreeData(selectedLitter).sire.name}
                              </button>
                            ) : getPedigreeData(selectedLitter).sire.name}
                          </h5>
                          <div className="flex flex-wrap justify-center gap-1">
                            {getPedigreeData(selectedLitter).sire.titles.map((title: string, index: number) => (
                              <button 
                                key={index} 
                                onClick={() => {
                                  setSelectedTitle({abbreviation: title, fullName: getTitleFullName(title)});
                                  setIsTitlePopupOpen(true);
                                }}
                                className="px-1 py-0.5 text-xs font-montserrat rounded cursor-pointer hover:opacity-80 transition-opacity"
                                style={{backgroundColor: '#8a8f28', color: '#fefefe'}}
                              >
                                {title}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Dam - Generation 1 - Centered between grandparents */}
                    <div className="absolute" style={{ left: '380px', top: '470px', width: '180px' }}>
                      <div className="bg-white rounded p-3 border-2" style={{borderColor: '#6d761d'}}>
                        <div className="text-center">
                          {getPedigreeData(selectedLitter).dam.image && (
                            <div className="mb-2">
                              <img 
                                src={getPedigreeData(selectedLitter).dam.image} 
                                alt={getPedigreeData(selectedLitter).dam.name}
                                className="w-16 h-12 rounded object-cover mx-auto cursor-pointer"
                                style={{ imageRendering: 'crisp-edges', filter: 'contrast(1.1) brightness(1.05)' }}
                                onClick={() => {
                                  setSelectedImage({src: getPedigreeData(selectedLitter).dam.image, name: getPedigreeData(selectedLitter).dam.name});
                                  setIsImagePopupOpen(true);
                                }}
                              />
                            </div>
                          )}
                          <h5 className="font-oswald text-sm font-normal mb-1" style={{color: '#11100f'}}>
                            {getPedigreeData(selectedLitter).dam.image ? (
                              <button 
                                onClick={() => {
                                  setSelectedImage({src: getPedigreeData(selectedLitter).dam.image, name: getPedigreeData(selectedLitter).dam.name});
                                  setIsImagePopupOpen(true);
                                }}
                                className="underline cursor-pointer hover:opacity-80 transition-opacity"
                                style={{color: '#6d761d'}}
                              >
                                {getPedigreeData(selectedLitter).dam.name}
                              </button>
                            ) : getPedigreeData(selectedLitter).dam.name}
                          </h5>
                          <div className="flex flex-wrap justify-center gap-1">
                            {getPedigreeData(selectedLitter).dam.titles.map((title: string, index: number) => (
                              <button 
                                key={index}
                                onClick={() => {
                                  setSelectedTitle({abbreviation: title, fullName: getTitleFullName(title)});
                                  setIsTitlePopupOpen(true);
                                }}
                                className="px-1 py-0.5 text-xs font-montserrat rounded cursor-pointer hover:opacity-80 transition-opacity"
                                style={{backgroundColor: '#6d761d', color: '#fefefe'}}
                              >
                                {title}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Parent to grandparent connection system */}
                    {/* Sire to grandparents T-junction */}
                    <div className="absolute rounded opacity-75 shadow-sm" style={{ left: '560px', top: '149px', width: '80px', height: '2px', backgroundColor: '#6d761d' }}></div>
                    <div className="absolute rounded opacity-75 shadow-sm" style={{ left: '639px', top: '60px', width: '2px', height: '180px', backgroundColor: '#6d761d' }}></div>
                    <div className="absolute rounded opacity-75 shadow-sm" style={{ left: '640px', top: '59px', width: '50px', height: '2px', backgroundColor: '#6d761d' }}></div>
                    <div className="absolute rounded opacity-75 shadow-sm" style={{ left: '640px', top: '239px', width: '50px', height: '2px', backgroundColor: '#6d761d' }}></div>
                    
                    {/* Dam to grandparents T-junction */}
                    <div className="absolute rounded opacity-75 shadow-sm" style={{ left: '560px', top: '509px', width: '80px', height: '2px', backgroundColor: '#6d761d' }}></div>
                    <div className="absolute rounded opacity-75 shadow-sm" style={{ left: '639px', top: '420px', width: '2px', height: '180px', backgroundColor: '#6d761d' }}></div>
                    <div className="absolute rounded opacity-75 shadow-sm" style={{ left: '640px', top: '419px', width: '50px', height: '2px', backgroundColor: '#6d761d' }}></div>
                    <div className="absolute rounded opacity-75 shadow-sm" style={{ left: '640px', top: '599px', width: '50px', height: '2px', backgroundColor: '#6d761d' }}></div>

                    {/* Grandparents - Generation 2 */}
                    {/* Sire's Sire */}
                    <div className="absolute" style={{ left: '690px', top: '20px', width: '180px' }}>
                      <div className="bg-white rounded p-3 border-2" style={{borderColor: '#6d761d'}}>
                        <div className="text-center">
                          {getPedigreeData(selectedLitter).sire.sire.image && (
                            <div className="mb-2">
                              <img 
                                src={getPedigreeData(selectedLitter).sire.sire.image} 
                                alt={getPedigreeData(selectedLitter).sire.sire.name}
                                className="w-16 h-12 rounded object-cover mx-auto cursor-pointer"
                                style={{ imageRendering: 'crisp-edges', filter: 'contrast(1.1) brightness(1.05)' }}
                                onClick={() => {
                                  setSelectedImage({src: getPedigreeData(selectedLitter).sire.sire.image, name: getPedigreeData(selectedLitter).sire.sire.name});
                                  setIsImagePopupOpen(true);
                                }}
                              />
                            </div>
                          )}
                          <h6 className="font-oswald text-sm font-normal mb-1" style={{color: '#11100f'}}>
                            {getPedigreeData(selectedLitter).sire.sire.image ? (
                              <button 
                                onClick={() => {
                                  setSelectedImage({src: getPedigreeData(selectedLitter).sire.sire.image, name: getPedigreeData(selectedLitter).sire.sire.name});
                                  setIsImagePopupOpen(true);
                                }}
                                className="underline cursor-pointer hover:opacity-80 transition-opacity"
                                style={{color: '#6d761d'}}
                              >
                                {getPedigreeData(selectedLitter).sire.sire.name}
                              </button>
                            ) : getPedigreeData(selectedLitter).sire.sire.name}
                          </h6>
                          <div className="flex flex-wrap justify-center gap-1">
                            {getPedigreeData(selectedLitter).sire.sire.titles.map((title: string, index: number) => (
                              <button 
                                key={index}
                                onClick={() => {
                                  setSelectedTitle({abbreviation: title, fullName: getTitleFullName(title)});
                                  setIsTitlePopupOpen(true);
                                }}
                                className="px-1 py-0.5 text-xs font-montserrat rounded cursor-pointer hover:opacity-80 transition-opacity"
                                style={{backgroundColor: '#6d761d', color: '#fefefe'}}
                              >
                                {title}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Sire's Dam */}
                    <div className="absolute" style={{ left: '690px', top: '200px', width: '180px' }}>
                      <div className="bg-white rounded p-3 border-2" style={{borderColor: '#6d761d'}}>
                        <div className="text-center">
                          {getPedigreeData(selectedLitter).sire.dam.image && (
                            <div className="mb-2">
                              <img 
                                src={getPedigreeData(selectedLitter).sire.dam.image} 
                                alt={getPedigreeData(selectedLitter).sire.dam.name}
                                className="w-16 h-12 rounded object-cover mx-auto cursor-pointer"
                                style={{ imageRendering: 'crisp-edges', filter: 'contrast(1.1) brightness(1.05)' }}
                                onClick={() => {
                                  setSelectedImage({src: getPedigreeData(selectedLitter).sire.dam.image, name: getPedigreeData(selectedLitter).sire.dam.name});
                                  setIsImagePopupOpen(true);
                                }}
                              />
                            </div>
                          )}
                          <h6 className="font-oswald text-sm font-normal mb-1" style={{color: '#11100f'}}>
                            {getPedigreeData(selectedLitter).sire.dam.image ? (
                              <button 
                                onClick={() => {
                                  setSelectedImage({src: getPedigreeData(selectedLitter).sire.dam.image, name: getPedigreeData(selectedLitter).sire.dam.name});
                                  setIsImagePopupOpen(true);
                                }}
                                className="underline cursor-pointer hover:opacity-80 transition-opacity"
                                style={{color: '#6d761d'}}
                              >
                                {getPedigreeData(selectedLitter).sire.dam.name}
                              </button>
                            ) : getPedigreeData(selectedLitter).sire.dam.name}
                          </h6>
                          <div className="flex flex-wrap justify-center gap-1">
                            {getPedigreeData(selectedLitter).sire.dam.titles.map((title: string, index: number) => (
                              <button 
                                key={index}
                                onClick={() => {
                                  setSelectedTitle({abbreviation: title, fullName: getTitleFullName(title)});
                                  setIsTitlePopupOpen(true);
                                }}
                                className="px-1 py-0.5 text-xs font-montserrat rounded cursor-pointer hover:opacity-80 transition-opacity"
                                style={{backgroundColor: '#6d761d', color: '#fefefe'}}
                              >
                                {title}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Dam's Sire */}
                    <div className="absolute" style={{ left: '690px', top: '380px', width: '180px' }}>
                      <div className="bg-white rounded p-3 border-2" style={{borderColor: '#6d761d'}}>
                        <div className="text-center">
                          {getPedigreeData(selectedLitter).dam.sire.image && (
                            <div className="mb-2">
                              <img 
                                src={getPedigreeData(selectedLitter).dam.sire.image} 
                                alt={getPedigreeData(selectedLitter).dam.sire.name}
                                className="w-16 h-12 rounded object-cover mx-auto cursor-pointer"
                                style={{ imageRendering: 'crisp-edges', filter: 'contrast(1.1) brightness(1.05)' }}
                                onClick={() => {
                                  setSelectedImage({src: getPedigreeData(selectedLitter).dam.sire.image, name: getPedigreeData(selectedLitter).dam.sire.name});
                                  setIsImagePopupOpen(true);
                                }}
                              />
                            </div>
                          )}
                          <h6 className="font-oswald text-sm font-normal mb-1" style={{color: '#11100f'}}>
                            {getPedigreeData(selectedLitter).dam.sire.image ? (
                              <button 
                                onClick={() => {
                                  setSelectedImage({src: getPedigreeData(selectedLitter).dam.sire.image, name: getPedigreeData(selectedLitter).dam.sire.name});
                                  setIsImagePopupOpen(true);
                                }}
                                className="underline cursor-pointer hover:opacity-80 transition-opacity"
                                style={{color: '#6d761d'}}
                              >
                                {getPedigreeData(selectedLitter).dam.sire.name}
                              </button>
                            ) : getPedigreeData(selectedLitter).dam.sire.name}
                          </h6>
                          <div className="flex flex-wrap justify-center gap-1">
                            {getPedigreeData(selectedLitter).dam.sire.titles.map((title: string, index: number) => (
                              <button 
                                key={index}
                                onClick={() => {
                                  setSelectedTitle({abbreviation: title, fullName: getTitleFullName(title)});
                                  setIsTitlePopupOpen(true);
                                }}
                                className="px-1 py-0.5 text-xs font-montserrat rounded cursor-pointer hover:opacity-80 transition-opacity"
                                style={{backgroundColor: '#6d761d', color: '#fefefe'}}
                              >
                                {title}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Dam's Dam */}
                    <div className="absolute" style={{ left: '690px', top: '560px', width: '180px' }}>
                      <div className="bg-white rounded p-3 border-2" style={{borderColor: '#6d761d'}}>
                        <div className="text-center">
                          {getPedigreeData(selectedLitter).dam.dam.image && (
                            <div className="mb-2">
                              <img 
                                src={getPedigreeData(selectedLitter).dam.dam.image} 
                                alt={getPedigreeData(selectedLitter).dam.dam.name}
                                className="w-16 h-12 rounded object-cover mx-auto cursor-pointer"
                                style={{ imageRendering: 'crisp-edges', filter: 'contrast(1.1) brightness(1.05)' }}
                                onClick={() => {
                                  setSelectedImage({src: getPedigreeData(selectedLitter).dam.dam.image, name: getPedigreeData(selectedLitter).dam.dam.name});
                                  setIsImagePopupOpen(true);
                                }}
                              />
                            </div>
                          )}
                          <h6 className="font-oswald text-sm font-normal mb-1" style={{color: '#11100f'}}>
                            {getPedigreeData(selectedLitter).dam.dam.image ? (
                              <button 
                                onClick={() => {
                                  setSelectedImage({src: getPedigreeData(selectedLitter).dam.dam.image, name: getPedigreeData(selectedLitter).dam.dam.name});
                                  setIsImagePopupOpen(true);
                                }}
                                className="underline cursor-pointer hover:opacity-80 transition-opacity"
                                style={{color: '#6d761d'}}
                              >
                                {getPedigreeData(selectedLitter).dam.dam.name}
                              </button>
                            ) : getPedigreeData(selectedLitter).dam.dam.name}
                          </h6>
                          <div className="flex flex-wrap justify-center gap-1">
                            {getPedigreeData(selectedLitter).dam.dam.titles.map((title: string, index: number) => (
                              <button 
                                key={index}
                                onClick={() => {
                                  setSelectedTitle({abbreviation: title, fullName: getTitleFullName(title)});
                                  setIsTitlePopupOpen(true);
                                }}
                                className="px-1 py-0.5 text-xs font-montserrat rounded cursor-pointer hover:opacity-80 transition-opacity"
                                style={{backgroundColor: '#6d761d', color: '#fefefe'}}
                              >
                                {title}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center pt-4 border-t">
                  <p className="text-sm font-source-sans" style={{color: '#4b4b4b'}}>
                    This pedigree shows the 3-generation lineage for the {selectedLitter?.name} litter, 
                    featuring champion bloodlines and exceptional breeding quality.
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

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

      {/* Title Popup Dialog */}
      <Dialog open={isTitlePopupOpen} onOpenChange={setIsTitlePopupOpen}>
        <DialogContent className="max-w-md max-h-[90vh] overflow-auto" aria-describedby="title-description">
          <DialogHeader>
            <DialogTitle className="text-xl font-oswald font-normal tracking-wide" style={{color: '#11100f'}}>
              {selectedTitle?.abbreviation}
            </DialogTitle>
          </DialogHeader>
          {selectedTitle && (
            <div className="space-y-4">
              <p id="title-description" className="text-lg font-source-sans" style={{color: '#4b4b4b'}}>
                {selectedTitle.fullName}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
      </>
    </section>
  );
}
