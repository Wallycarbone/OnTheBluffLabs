import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Star } from "lucide-react";
import harperLeeImage from "@assets/Y30A3321Harper Lee_1753040309126.JPG?url";
import grizzlyImage from "@assets/Untitled design (90)_1753041702842.png?url";
import grizzlyPedigreeImage from "@assets/Y30A9815 (7)_1754682245597.JPG?url";
import boscoImage from "@assets/bosco1_1753815440343.avif?url";
import hannahImage from "@assets/Hannah_1753736053468.png?url";
import cyrusImage from "@assets/CyrusBodyL (1)_1753815517271.jpg?url";
import simmerImage from "@assets/Simmer_1753810570980.avif?url";
import brodyImage from "@assets/Brody_1753811205545.jpg?url";
import atticusImage from "@assets/Atticus_1754340164760.jpeg";
import newGrizzlyImage from "@assets/Breeding Dogs 5x4 (8)_1755286717960.png";
import newMoonImage from "@assets/Breeding Dogs 5x4 (9)_1755286823265.png";
import newHoldenImage from "@assets/Breeding Dogs 5x4 (10)_1755286862112.png";
import newHarperLeeImage from "@assets/Breeding Dogs 5x4 (11)_1755286940346.png";
import booRadleyImage from "@assets/Breeding Dogs 5x4 (12)_1755286977779.png";
import piperImage from "@assets/Breeding Dogs 5x4 (14)_1755287062398.png";
import arabellaImage from "@assets/Breeding Dogs 5x4 (19)_1755290951573.png";
import chekhovImage from "@assets/Breeding Dogs 5x4 (16)_1755287286323.png";
import frannyGlassImage from "@assets/Breeding Dogs 5x4 (17)_1755287949069.png";
import sterlingImage from "@assets/Sterling-name-2-515x412_1755289517437.jpg";
import stoliImage from "@assets/Stoli_1755288962958.jpg";
import layLayImage from "@assets/Double Layer Cake_1755289022650.webp";
import sequelImage from "@assets/Sequel_1755289144473.webp";
import hamburgImage from "@assets/Hamburg_1755289182545.jpg";
import duffyImage from "@assets/duffy-04_1755289259124.jpeg";
import stormTrooperImage from "@assets/Storm Trooper_1755290311684.avif";
import stormChargerImage from "@assets/Charger_1755290357983.avif";
import heroLabradorImage from "@assets/Boo_Edit_v01 (1)_1758636279471.jpg";
import newHeroLabradorImage from "@assets/Breeding Dogs 5x4 (42)_1758917417269.png";
import updatedHeroLabradorImage from "@assets/Breeding Dogs 5x4 (43)_1758917718475.png";
import latestHeroLabradorImage from "@assets/Breeding Dogs 5x4 (44)_1758918651622.png";
import twainPedigreeImage from "@assets/Untitled design - 2025-09-26T164138.333_1758919329281.png";
import grizzlyOfficialPedigreeImage from "@assets/grizzly-pedigree.png";
import msRippleCreekImage from "@assets/ms-ripple-creek.jpg";
import msButterflyImage from "@assets/ms-butterfly.jpg";
import mrBlingBonesImage from "@assets/mr-bling-bones.jpg";
import msFairIsleImage from "@assets/ms-fair-isle.jpg";
import mrPandaImage from "@assets/mr-panda.jpg";
import mrJesterImage from "@assets/mr-jester.jpg";
// Puppy images
import moonPeacock from "@assets/Mr. Peacock_1753621328199.png";
import moonTurtles from "@assets/Mr. Turtles_1753621328201.png";
import moonAloha from "@assets/Ms. Aloha_1753621328202.png";
import moonSunflower from "@assets/Ms. Sunflower_1753621328202.png";
import moonSuperstar from "@assets/Mr. Superstar_1753621328202.png";
import moonPenguin from "@assets/Mr. Penguin Party_1753621328202.png";
import moonAlpine from "@assets/Ms. Alpine Glow_1753621328203.png";
import holdenSummer from "@assets/Summer (Butterfly 5x4)_1753623366075.png";
import holdenFern from "@assets/Fern (Apple Pie 5x4)_1753623366073.png";
import holdenWillow from "@assets/Willow (Seaglass 5x4)_1753623366078.png";
import grizzlyPearl from "@assets/Puppies 5x4 (4 x 4 in) (1)_1754683514419.png";
import grizzlyHolly from "@assets/Y30A1114GuinevereGrizzlymssweethearts (2)_1754683799995.jpg";
import grizzlyPedigreePdf from "@assets/grizzly_single_page_1754684286991.pdf";
import moonPedigreePdf from "@assets/moon_pedigree_processed_1754684932098.pdf";
import moonImage from "@assets/Moon_1754685152680.png";
import topoGigioImage from "@assets/Black and White Minimalist New Collection Social Media Mockup Instagram Post (83)_1756670819994.png";
import roccoImage from "@assets/Rocco_1754686890866.avif";
import candyImage from "@assets/Candy_1754687171237.webp";
import atticusFinchImage from "@assets/Breeding Dogs 5x4 (27)_1756672406925.png";
import markTwainImage from "@assets/Breeding Dogs 5x4 (25)_1755461082022.png";
import flyUnderRadarImage from "@assets/Breeding Dogs 5x4 (21)_1755444196054.png";
import martingaleImage from "@assets/martybodymarch06 (1)_1755444963570.jpg";
import emmaImage from "@assets/Breeding Dogs 5x4 (23)_1755446219053.png";
import chaseImage from "@assets/Chase_1755458617995.avif";
import expressoImage from "@assets/expresso_new3_1755458950324.webp";
// import mrDarcyImage from "@assets/Screenshot 2025-08-08 at 4.49.59 PM_1754686444295.png";


// Harper Lee pedigree highlight updated
export default function BreedingDogs() {
  const [isPedigreePopupOpen, setIsPedigreePopupOpen] = useState(false);
  const [selectedDog, setSelectedDog] = useState<any>(null);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{src: string, name: string} | null>(null);
  const [isTitlePopupOpen, setIsTitlePopupOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState<{abbreviation: string, fullName: string} | null>(null);
  const [isPuppyGalleryOpen, setIsPuppyGalleryOpen] = useState(false);
  const [selectedDogForPuppies, setSelectedDogForPuppies] = useState<any>(null);

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

  const openPedigreePopup = (dog: any) => {
    setSelectedDog(dog);
    setIsPedigreePopupOpen(true);
  };

  const openPuppyGallery = (dog: any) => {
    setSelectedDogForPuppies(dog);
    setIsPuppyGalleryOpen(true);
  };

  const getPuppyGalleryData = (dogName: string) => {
    const puppyData: { [key: string]: any } = {
      "Grizzly": {
        name: "Grizzly",
        litters: [
          {
            name: "Grizzly & Guinevere",
            dam: "Guinevere",
            birthDate: "April 5, 2025",
            status: "available",
            puppies: [
              { name: "Pearl (Turtles)", image: grizzlyPearl, available: true, gender: "Female", color: "Yellow" },
              { name: "Holly (Puppy Love)", image: grizzlyHolly, available: true, gender: "Female", color: "Yellow" }
            ]
          }
        ]
      },
      "Moon": {
        name: "Moon", 
        litters: [
          {
            name: "Moon & Foxxy",
            dam: "Foxxy",
            birthDate: "June 5, 2025",
            puppies: [
              { name: "Mr. Peacock", image: moonPeacock, gender: "Male", color: "Yellow" },
              { name: "Mr. Turtles", image: moonTurtles, gender: "Male", color: "Yellow" },
              { name: "Ms. Aloha", image: moonAloha, gender: "Female", color: "Yellow" },
              { name: "Ms. Sunflower", image: moonSunflower, gender: "Female", color: "Yellow" },
              { name: "Mr. Superstar", image: moonSuperstar, gender: "Male", color: "Yellow" },
              { name: "Mr. Penguin Party", image: moonPenguin, gender: "Male", color: "Yellow" },
              { name: "Ms. Alpine Glow", image: moonAlpine, gender: "Female", color: "Yellow" }
            ]
          }
        ]
      },
      "Boo Radley": {
        name: "Boo Radley",
        litters: [
          {
            name: "Boo Radley & Boudica",
            dam: "Boudica",
            birthDate: "August 7, 2025",
            puppies: [
              { name: "Ms. Ripple Creek", image: msRippleCreekImage, gender: "Female", color: "Yellow" },
              { name: "Ms. Butterfly", image: msButterflyImage, gender: "Female", color: "Yellow" },
              { name: "Mr. Bling Bones", image: mrBlingBonesImage, gender: "Male", color: "Yellow" },
              { name: "Ms. Fair Isle", image: msFairIsleImage, gender: "Female", color: "Yellow" },
              { name: "Mr. Panda", image: mrPandaImage, gender: "Male", color: "Yellow" },
              { name: "Mr. Jester", image: mrJesterImage, gender: "Male", color: "Yellow" }
            ]
          }
        ]
      }
    };
    
    return puppyData[dogName] || null;
  };

  const getDogPedigreeData = (dogName: string) => {
    const pedigrees: { [key: string]: any } = {
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
              name: "Hannah's Paternal Great-Grandsire",
              titles: ["CH"],
              sire: {
                name: "Hannah's Paternal Great-Great-Grandsire",
                titles: ["CH"]
              },
              dam: {
                name: "Hannah's Paternal Great-Great-Granddam",
                titles: ["CH"]
              }
            },
            dam: {
              name: "Hannah's Paternal Great-Granddam",
              titles: ["CH"],
              sire: {
                name: "Hannah's Paternal Maternal Great-Great-Grandsire",
                titles: ["CH"]
              },
              dam: {
                name: "Hannah's Paternal Maternal Great-Great-Granddam",
                titles: ["CH"]
              }
            }
          },
          dam: {
            name: "Endless Mountain's Georgia On My Mind",
            titles: [],
            sire: {
              name: "Hannah's Maternal Great-Grandsire",
              titles: ["CH"],
              sire: {
                name: "Hannah's Maternal Great-Great-Grandsire",
                titles: ["CH"]
              },
              dam: {
                name: "Hannah's Maternal Great-Great-Granddam",
                titles: ["CH"]
              }
            },
            dam: {
              name: "Hannah's Maternal Great-Granddam",
              titles: ["CH"],
              sire: {
                name: "Hannah's Maternal Maternal Great-Great-Grandsire",
                titles: ["CH"]
              },
              dam: {
                name: "Hannah's Maternal Maternal Great-Great-Granddam",
                titles: ["CH"]
              }
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
          image: arabellaImage,
          sire: {
            name: "Scarfone's Mark Twain",
            titles: [],
            image: markTwainImage,
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
      },
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
            // image: mrDarcyImage,
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
      "Foxxy": {
        name: "Foxxy",
        formalName: "On The Bluff Foxxy",
        titles: ["CH"],
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
        formalName: "On The Bluff Nora",
        titles: ["CH"],
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
          name: "Endless Mt On The Bluff's Franny Glass (\"Franny\")",
          titles: [],
          image: frannyGlassImage,
          sire: {
            name: "Endless Mt Shines Like Sterling (\"Sterling\")",
            titles: ["CH"],
            image: sterlingImage,
            sire: {
              name: "GCHB Willcare To Fly Under The Radar RN",
              titles: ["GCHB", "RN"]
            },
            dam: {
              name: "Endless Mt Jl Black Sphinx",
              titles: []
            }
          },
          dam: {
            name: "Endless Mt's Gertrude Hawk",
            titles: [],
            sire: {
              name: "Erinhill's You Had Me From Hello",
              titles: []
            },
            dam: {
              name: "Endless Mt. Cuddle Bug",
              titles: []
            }
          }
        }
      },
      "Chekhov": {
        name: "Chekhov",
        formalName: "Belquest Conclusion's Anton Chekhov",
        titles: [],
        image: chekhovImage,
        sire: {
          name: "Belquest Conclusion Stolichnaya (\"Stoli\")",
          titles: [],
          image: stoliImage,
          sire: {
            name: "Aster Liberti Labro Hamburg",
            titles: ["CH"],
            image: hamburgImage,
            sire: {
              name: "Night Single Great Genus Winners",
              titles: []
            },
            dam: {
              name: "Aster Liberti Labro Gollandiya",
              titles: []
            }
          },
          dam: {
            name: "Belquest Prequel To The Sequel (\"Sequel\")",
            titles: ["CGC"],
            image: sequelImage,
            sire: {
              name: "GCH Highcaliber Labradale Expresso",
              titles: ["GCH"]
            },
            dam: {
              name: "Trinity's Ultimate Sequel",
              titles: []
            }
          }
        },
        dam: {
          name: "Belquest Conclusion Double Layer Cake (\"Lay Lay\")",
          titles: [],
          image: layLayImage,
          sire: {
            name: "Atlantic's Ace Of Cakes At Big Sky (\"Duffy\")",
            titles: ["CH"],
            image: duffyImage,
            sire: {
              name: "GCH Big Sky's Stone Kutter",
              titles: ["GCH"]
            },
            dam: {
              name: "Atlantic's Hidden Gem",
              titles: []
            }
          },
          dam: {
            name: "Belquest Double Shot Expresso Of Waterberry",
            titles: [],
            sire: {
              name: "GCH Highcaliber Labradale Expresso",
              titles: ["GCH"]
            },
            dam: {
              name: "Waterberry Expresso Belquest",
              titles: []
            }
          }
        }
      },
      "Boo Radley": {
        name: "Boo Radley",
        formalName: "On The Bluff's Mr. Boo Radley",
        titles: [],
        image: booRadleyImage,
        sire: {
          name: "Heartlands Storm Trooper",
          titles: [],
          image: stormTrooperImage,
          sire: {
            name: "Heartlands Storm Charger",
            titles: [],
            image: stormChargerImage,
            sire: {
              name: "Centrecourt Black Jake At Ceasarscreek",
              titles: []
            },
            dam: {
              name: "Heartlands Arctic Princess",
              titles: []
            }
          },
          dam: {
            name: "Heartlands Sienna",
            titles: [],
            sire: {
              name: "Heartlands Polar Bear Chase",
              titles: []
            },
            dam: {
              name: "Heartlands Sierra Mist",
              titles: []
            }
          }
        },
        dam: {
          name: "Heartlands Lunar Eclipse",
          titles: [],
          sire: {
            name: "Heartlands Cash",
            titles: [],
            sire: {
              name: "Heartlands Polar Bear Chase",
              titles: []
            },
            dam: {
              name: "Heartlands Some Like It Sweet",
              titles: []
            }
          },
          dam: {
            name: "Heartlands Haley's Comet",
            titles: [],
            sire: {
              name: "Heartlands Mighty Sampson",
              titles: []
            },
            dam: {
              name: "Heartlands Frosty",
              titles: []
            }
          }
        }
      },
      "Piper": {
        name: "Piper",
        formalName: "On The Bluff's Pied Piper",
        titles: [],
        image: piperImage,
        sire: {
          name: "Scarfone's Mark Twain",
          titles: [],
          image: markTwainImage,
          sire: {
            name: "Valhalla's One Little Victory JH",
            titles: ["JH"],
            sire: {
              name: "CH Lubberline Martingale",
              titles: ["CH"],
              image: martingaleImage
            },
            dam: {
              name: "Brimars N-Vogue JH",
              titles: ["JH"]
            }
          },
          dam: {
            name: "Bateshaus Stop To Smell The Roses",
            titles: [],
            sire: {
              name: "CH Stormy C's Superbad",
              titles: ["CH"]
            },
            dam: {
              name: "CH Batescreek Emma",
              titles: ["CH"],
              image: emmaImage
            }
          }
        },
        dam: {
          name: "On The Bluff's Foxxy",
          titles: [],
          sire: {
            name: "Keepsake Thorn On The Bluff",
            titles: [],
            sire: {
              name: "Keepsake Puttin On The Ritz",
              titles: []
            },
            dam: {
              name: "Keepsake Random Red",
              titles: []
            }
          },
          dam: {
            name: "Keepsake's Pippi Longstocking On The Bluff",
            titles: [],
            sire: {
              name: "Keepsake It Isn't Easy Being Red",
              titles: []
            },
            dam: {
              name: "Keepsake Help Me Rhonda",
              titles: []
            }
          }
        }
      },
      "Twain": {
        name: "Twain",
        formalName: "Scarfone's Mark Twain",
        titles: [],
        image: markTwainImage,
        sire: {
          name: "Valhalla's One Little Victory JH",
          titles: ["JH"],
          sire: {
            name: "CH Lubberline Martingale",
            titles: ["CH"],
            image: martingaleImage,
            sire: {
              name: "CH Hunt Club Clayview Funny Bear",
              titles: ["CH"]
            },
            dam: {
              name: "CH Hennings Bill Lubberline JH",
              titles: ["CH", "JH"]
            }
          },
          dam: {
            name: "Brimars N-Vogue JH",
            titles: ["JH"],
            sire: {
              name: "CH Sandylands Star Trend",
              titles: ["CH"]
            },
            dam: {
              name: "Brinar's Gem At Poplar Forest JH",
              titles: ["JH"]
            }
          }
        },
        dam: {
          name: "Bateshaus Stop To Smell The Roses",
          titles: [],
          sire: {
            name: "CH Stormy C's Superbad",
            titles: ["CH"],
            sire: {
              name: "CH Blackwing Superfine",
              titles: ["CH"]
            },
            dam: {
              name: "Casbar's Red Hot Chili Pepper RN",
              titles: ["RN"]
            }
          },
          dam: {
            name: "CH Batescreek Emma",
            titles: ["CH"],
            image: emmaImage,
            sire: {
              name: "CH Zinfindel Brigham",
              titles: ["CH"]
            },
            dam: {
              name: "CH Berryhill Grand River Crystal",
              titles: ["CH"]
            }
          }
        }
      }
    };
    
    return pedigrees[dogName] || null;
  };

  const sires = [
    {
      name: "Twain",
      formalName: "Scarfone's Mark Twain",
      gender: "Male",
      color: "Yellow",
      age: "Active Stud",
      image: markTwainImage,
      description: "Twain is an exceptional yellow male with distinguished lineage and gentle temperament. His bloodlines trace to Lubberline, a kennel renowned for exceptional temperaments and cognitive flexibility. His wise expression and calm demeanor make him an ideal sire for producing intelligent and well-balanced offspring.",
      hasPuppies: false
    },
    {
      name: "Grizzly",
      formalName: "Endless Mt. Labrador Grizzly at On The Bluff",
      gender: "Male",
      color: "Chocolate",
      age: "Active Stud",
      image: newGrizzlyImage,
      description: "Grizzly is a distinguished chocolate male with exceptional emotional intelligence and substantial heavy bone structure. His intuitive nature and powerful build exemplify quality English Labradors, producing puppies with remarkable social intelligence and robust physical presence.",
      hasPuppies: true
    },
    {
      name: "Boo Radley",
      formalName: "On The Bluff's Mr. Boo Radley",
      gender: "Male",
      color: "Yellow",
      age: "Active Stud",
      image: booRadleyImage,
      description: "Boo Radley is a gentle and affectionate white male with a heart of gold. He possesses exceptional loyalty and courage, making him an ideal father figure who passes on both gentle temperament and emotional intuition to his offspring.",
      hasPuppies: true
    },
    {
      name: "Holden",
      formalName: "On The Bluff's Holden Morrisey Caulfield",
      gender: "Male",
      color: "Chocolate", 
      age: "Previous Stud",
      image: newHoldenImage,
      description: "Holden is a gentle-natured chocolate male with a distinctive blocky head that exemplifies classic English Labrador conformation. His calm, patient temperament and substantial bone structure make him an ideal sire, consistently producing offspring with his trademark gentle disposition and impressive blocky head.",
      hasPuppies: false
    },
    {
      name: "Moon",
      formalName: "Belquest Conclusion Super Moon Rising",
      gender: "Male", 
      color: "Yellow",
      age: "Active Stud",
      image: newMoonImage,
      description: "Moon is an exceptional yellow male with outstanding pigmentation, deeply affectionate personality, and strong body structure. His rich cream coat color and loving temperament combine with powerful conformation to produce beautiful puppies with both striking appearance and gentle dispositions.",
      hasPuppies: true
    },
    {
      name: "Chekhov",
      formalName: "Belquest Conclusion's Anton Chekhov",
      gender: "Male",
      color: "Chocolate",
      age: "Active Stud",
      image: chekhovImage,
      description: "Chekhov is a stately chocolate male with penetrating amber eyes and profound intelligence. His contemplative nature and noble bearing reflect generations of quality breeding, producing offspring with both striking appearance and thoughtful temperament.",
      hasPuppies: false
    }
  ];

  const dames = [
    {
      name: "Harper Lee",
      formalName: "On The Bluff's Harper Lee",
      gender: "Female",
      color: "Yellow",
      age: "Breeding Female",
      image: newHarperLeeImage,
      description: "Like her father before her, Harper Lee is a stunning yellow female with an intuitive, loving temperament. Her calm, loving nature makes her an ideal mother and her puppies inherit her gentle demeanor.",
    },
    {
      name: "Piper",
      formalName: "On The Bluff's Pied Piper",
      gender: "Female",
      color: "Fox Red",
      age: "Breeding Female",
      image: piperImage,
      description: "Piper is an affectionate and calm female with a gentle disposition. Her loving nature and serene temperament make her both an excellent companion and devoted mother, passing on her peaceful personality to her puppies.",
    },
    {
      name: "Arabella",
      formalName: "On The Bluff Arabella",
      gender: "Female",
      color: "Yellow",
      age: "Breeding Female",
      image: arabellaImage,
      description: "Arabella is an elegant and serene yellow female with a regal presence. Her calm confidence and nurturing instincts make her an exceptional mother, producing puppies with both beauty and temperament that reflect her graceful nature.",
    },
  ];

  const renderDogCard = (dog: any, index: number) => (
    <Card key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <img 
        src={dog.image} 
        alt={`Champion ${dog.color} Labrador`} 
        className="w-full h-72 object-cover"
      />
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-oswald font-normal tracking-wide mb-3" style={{color: '#11100f'}}>
            {dog.name}
          </h3>
          <p className="text-warm-gray text-lg font-medium italic">
            {dog.formalName}
          </p>
        </div>
        
        <div className="space-y-4">
          {/* Pedigree Highlight */}
          <div className="bg-gray-50 rounded p-4">
            <div className="text-center mb-3">
              <h4 className="font-oswald font-medium text-sm" style={{color: '#11100f'}}>
                PEDIGREE HIGHLIGHT
              </h4>
            </div>
            
            {dog.name === "Grizzly" ? (
              <div className="text-center">
                <p className="text-sm text-warm-gray leading-relaxed">
                  Descended from 2016 Westminster Best of Breed <button 
                    className="text-golden underline hover:text-golden/80 font-medium"
                    onClick={() => {
                      setSelectedImage({
                        src: cyrusImage,
                        name: "Shalimar's The Animator (\"Cyrus\")"
                      });
                      setIsImagePopupOpen(true);
                    }}
                  >
                    Shalimar's The Animator
                  </button>
                </p>
              </div>
            ) : dog.name === "Moon" ? (
              <div className="text-center">
                <p className="text-sm text-warm-gray leading-relaxed">
                  Descended from 2019 Westminster Best of Breed <button 
                    className="text-golden underline hover:text-golden/80 font-medium"
                    onClick={() => {
                      setSelectedImage({
                        src: topoGigioImage,
                        name: "Farnfield Topo Gigio"
                      });
                      setIsImagePopupOpen(true);
                    }}
                  >
                    Farnfield Topo Gigio
                  </button>
                </p>
              </div>
            ) : dog.name === "Harper Lee" ? (
              <div className="text-center">
                <p className="text-sm text-warm-gray leading-relaxed">
                  Daughter of our beloved late sire, <button 
                    className="text-golden underline hover:text-golden/80 font-medium"
                    onClick={() => {
                      setSelectedImage({
                        src: atticusFinchImage,
                        name: "Atticus Finch"
                      });
                      setIsImagePopupOpen(true);
                    }}
                  >
                    Atticus Finch
                  </button>
                </p>
              </div>
            ) : dog.name === "Piper" ? (
              <div className="text-center">
                <p className="text-sm text-warm-gray leading-relaxed">
                  Descended from 2004 Westminster Best of Breed <button 
                    className="text-golden underline hover:text-golden/80 font-medium"
                    onClick={() => {
                      setSelectedImage({
                        src: martingaleImage,
                        name: "Lubberline's Martingale"
                      });
                      setIsImagePopupOpen(true);
                    }}
                  >
                    Lubberline's Martingale
                  </button> through her sire, Twain
                </p>
              </div>
            ) : dog.name === "Holden" ? (
              <div className="text-center">
                <p className="text-sm text-warm-gray leading-relaxed">
                  Descended from Grand Champion and Canine Good Citizen <button 
                    className="text-golden underline hover:text-golden/80 font-medium"
                    onClick={() => {
                      setSelectedImage({
                        src: flyUnderRadarImage,
                        name: "Willcare To Fly Under The Radar"
                      });
                      setIsImagePopupOpen(true);
                    }}
                  >
                    Willcare To Fly Under The Radar
                  </button>
                </p>
              </div>
            ) : dog.name === "Twain" ? (
              <div className="text-center">
                <p className="text-sm text-warm-gray leading-relaxed">
                  Descended from 2004 Westminster Best of Breed <button 
                    className="text-golden underline hover:text-golden/80 font-medium"
                    onClick={() => {
                      setSelectedImage({
                        src: martingaleImage,
                        name: "Lubberline's Martingale"
                      });
                      setIsImagePopupOpen(true);
                    }}
                  >
                    Lubberline's Martingale
                  </button>
                </p>
              </div>
            ) : dog.name === "Boo Radley" ? (
              <div className="text-center">
                <p className="text-sm text-warm-gray leading-relaxed">
                  Descended from <button 
                    className="text-golden underline hover:text-golden/80 font-medium"
                    onClick={() => {
                      setSelectedImage({
                        src: chaseImage,
                        name: "Heartland's Polar Bear Chase"
                      });
                      setIsImagePopupOpen(true);
                    }}
                  >
                    Heartland's Polar Bear Chase
                  </button>, the same line as our beloved late sire Atticus
                </p>
              </div>
            ) : dog.name === "Chekhov" ? (
              <div className="text-center">
                <p className="text-sm text-warm-gray leading-relaxed">
                  Descended from American & Canadian Grand Champion <button 
                    className="text-golden underline hover:text-golden/80 font-medium"
                    onClick={() => {
                      setSelectedImage({
                        src: expressoImage,
                        name: "Highcaliber Labradale Expresso"
                      });
                      setIsImagePopupOpen(true);
                    }}
                  >
                    Highcaliber Labradale Expresso
                  </button>
                </p>
              </div>
            ) : dog.name === "Arabella" ? (
              <div className="text-center">
                <p className="text-sm text-warm-gray leading-relaxed">
                  Descended from 2004 Westminster Best of Breed <button 
                    className="text-golden underline hover:text-golden/80 font-medium"
                    onClick={() => {
                      setSelectedImage({
                        src: martingaleImage,
                        name: "Lubberline's Martingale"
                      });
                      setIsImagePopupOpen(true);
                    }}
                  >
                    Lubberline's Martingale
                  </button> through her sire, Twain
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="font-montserrat font-semibold uppercase tracking-wider" style={{color: '#6d761d'}}>Sire</span>
                  <p className="font-source-sans" style={{color: '#11100f'}}>
                    {`${dog.name}'s Sire`}
                  </p>
                </div>
                <div>
                  <span className="font-montserrat font-semibold uppercase tracking-wider" style={{color: '#6d761d'}}>Dam</span>
                  <p className="font-source-sans" style={{color: '#11100f'}}>
                    {`${dog.name}'s Dam`}
                  </p>
                </div>
              </div>
            )}
          </div>
        
        <p className="text-warm-gray mb-6 leading-relaxed">
          {dog.description}
        </p>
          
          <div className="space-y-3">
            <Button 
              onClick={() => openPedigreePopup(dog)}
              className="w-full text-white font-montserrat font-medium py-3 rounded transition-colors"
              style={{
                backgroundColor: '#6d761d'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#5a6318';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#6d761d';
              }}
            >
              View Full Pedigree
            </Button>
            
            {dog.hasPuppies && (
              <Button 
                onClick={() => openPuppyGallery(dog)}
                className="w-full font-montserrat font-medium py-3 rounded transition-colors border-2"
                style={{borderColor: '#6d761d', color: '#6d761d', backgroundColor: 'transparent'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#6d761d';
                  e.currentTarget.style.color = '#fefefe';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#6d761d';
                }}
              >
                Puppies by {dog.name}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <>
      {/* Hero Section with Labrador Background */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-end justify-center overflow-hidden bg-gray-100">
        <img 
          src={latestHeroLabradorImage}
          alt="Beautiful Labrador portrait - On The Bluff Breeding Dogs"
          className="absolute inset-0 w-full h-full object-cover object-[50%_30%]"
          onError={(e) => {
            console.log('Our Dogs hero image failed to load:', latestHeroLabradorImage);
            e.currentTarget.style.display = 'none';
          }}
          onLoad={() => console.log('Our Dogs hero image loaded successfully:', latestHeroLabradorImage)}
        />
        <div className="absolute inset-0 z-10" style={{background: 'linear-gradient(to right, transparent 0%, transparent 50%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0.8) 100%)'}}></div>
        <div className="text-right z-10 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full flex justify-end">
          <div className="max-w-xl">
            <h1 className="text-6xl md:text-8xl font-oswald font-normal mb-6 tracking-wide leading-tight text-white drop-shadow-2xl">
              HEIRS OF <span style={{color: '#a4b548', textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>EXCELLENCE</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-source-sans font-light tracking-wide text-white drop-shadow-lg">
              Meet Our Labradors
            </h2>
          </div>
        </div>
      </section>

      <section id="breeding" className="py-24" style={{backgroundColor: '#fffbe8'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Introduction Essay */}
        <div className="text-center mb-20">
          <div className="max-w-5xl mx-auto">
            <p className="font-source-sans text-lg leading-[1.6] mb-6 text-left" style={{color: '#4b4b4b'}}>
              At On the Bluff Labradors, we have built our kennel on the shoulders of champions. We've studied the great dogs, traced the influential bloodlines, and learned from the masters who came before us. We know the names that matter: Banchory Bolo, the Sandylands legends, the Buccleuch foundation stock.
            </p>
            
            <p className="font-source-sans text-lg leading-[1.6] mb-6 text-left" style={{color: '#4b4b4b'}}>
              Their legacy extends far beyond the pedigrees and kennel records they left behind. <strong>They created dogs whose minds were so sophisticated, so finely tuned to human partnership, that they would prove capable of roles no one could have imagined</strong>: guiding the blind through city streets, comforting traumatized veterans, alerting diabetics to dangerous blood sugar levels, and serving as emotional anchors for families dealing with autism, anxiety, and countless other challenges.
            </p>
            
            <p className="font-source-sans text-lg leading-[1.6] mb-12 text-left" style={{color: '#4b4b4b'}}>
              <strong>Every dog in our kennel has been selected to carry out this legacy of social flexibility and emotional intuition. Our dogs' lineages extend from these great kennels through to today's Grand Champions.</strong> We welcome you to meet our dogs:
            </p>
          </div>
        </div>

        {/* Our Sires Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-oswald font-normal mb-6 tracking-wide" style={{color: '#11100f'}}>
              OUR SIRES
            </h2>
            <p className="text-xl text-warm-gray max-w-3xl mx-auto">
              Meet the exceptional male dogs that bring champion bloodlines to our breeding program.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sires.map((dog, index) => renderDogCard(dog, index))}
          </div>
        </div>

        {/* Our Dames Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-oswald font-normal mb-6 tracking-wide" style={{color: '#11100f'}}>
              OUR DAMES
            </h2>
            <p className="text-xl text-warm-gray max-w-3xl mx-auto">
              Meet the exceptional female dogs that are the loving mothers of our outstanding puppies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dames.map((dog, index) => renderDogCard(dog, index + 100))}
          </div>
        </div>
      </div>

      {/* Individual Dog Pedigree Popup Dialog */}
      <Dialog open={isPedigreePopupOpen} onOpenChange={setIsPedigreePopupOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-auto" aria-describedby="pedigree-popup-description">
          <DialogHeader>
            <DialogTitle className="text-2xl font-oswald font-normal tracking-wide" style={{color: '#11100f'}}>
              {selectedDog?.name}
            </DialogTitle>
          </DialogHeader>
          <div id="pedigree-popup-description">
            {selectedDog && (() => {
            const pedigreeData = getDogPedigreeData(selectedDog.name);
            if (!pedigreeData) return <p>Pedigree information not available</p>;
            
            return (
              <div className="space-y-6">
                {/* Traditional Pedigree Layout - Clean and Organized */}
                <div className="overflow-x-auto p-8">
                      <div className="relative" style={{ width: '1200px', height: '900px' }}>
                        {/* Current Dog - Generation 0 - Centered between parents */}
                        <div className="absolute" style={{ left: '50px', top: '290px', width: '180px' }}>
                          <div className="rounded p-4 border-2" style={{backgroundColor: '#f8f9f0', borderColor: '#6d761d'}}>
                            <div className="text-center">
                              {pedigreeData.image && (
                                <div className="mb-3">
                                  <img 
                                    src={pedigreeData.image}
                                    alt={pedigreeData.name}
                                    className="w-24 h-18 rounded object-cover mx-auto"
                                    style={{ imageRendering: 'crisp-edges', filter: 'contrast(1.1) brightness(1.05)' }}
                                  />
                                </div>
                              )}
                              <h3 className="text-sm font-oswald font-normal mb-2" style={{color: '#11100f'}}>
                                {pedigreeData.image ? (
                                  <button 
                                    onClick={() => {
                                      setSelectedImage({src: pedigreeData.image, name: pedigreeData.name});
                                      setIsImagePopupOpen(true);
                                    }}
                                    className="underline cursor-pointer hover:opacity-80 transition-opacity"
                                    style={{color: '#6d761d'}}
                                  >
                                    {pedigreeData.name}
                                  </button>
                                ) : pedigreeData.name}
                              </h3>
                              <div className="flex flex-wrap justify-center gap-1">
                                {pedigreeData.titles.map((title: string, index: number) => (
                                  <span key={index} className="px-1.5 py-0.5 text-xs font-montserrat font-medium rounded" style={{backgroundColor: '#6d761d', color: '#fefefe'}}>
                                    {title}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Main connection system from current dog to parents */}
                        {/* Horizontal line from current dog to T-junction */}
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
                              {pedigreeData.sire.image && (
                                <div className="mb-2">
                                  <img 
                                    src={pedigreeData.sire.image} 
                                    alt={pedigreeData.sire.name}
                                    className="w-16 h-12 rounded object-cover mx-auto cursor-pointer"
                                    style={{ imageRendering: 'crisp-edges', filter: 'contrast(1.1) brightness(1.05)' }}
                                    onClick={() => {
                                      setSelectedImage({src: pedigreeData.sire.image, name: pedigreeData.sire.name});
                                      setIsImagePopupOpen(true);
                                    }}
                                  />
                                </div>
                              )}
                              <h5 className="font-oswald text-sm font-normal mb-1" style={{color: '#11100f'}}>
                                {pedigreeData.sire.image ? (
                                  <button 
                                    onClick={() => {
                                      setSelectedImage({src: pedigreeData.sire.image, name: pedigreeData.sire.name});
                                      setIsImagePopupOpen(true);
                                    }}
                                    className="underline cursor-pointer hover:opacity-80 transition-opacity"
                                    style={{color: '#6d761d'}}
                                  >
                                    {pedigreeData.sire.name}
                                  </button>
                                ) : pedigreeData.sire.name}
                              </h5>
                              <div className="flex flex-wrap justify-center gap-1">
                                {pedigreeData.sire.titles.map((title: string, index: number) => (
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
                              {pedigreeData.dam.image && (
                                <div className="mb-2">
                                  <img 
                                    src={pedigreeData.dam.image} 
                                    alt={pedigreeData.dam.name}
                                    className="w-16 h-12 rounded object-cover mx-auto cursor-pointer"
                                    style={{ imageRendering: 'crisp-edges', filter: 'contrast(1.1) brightness(1.05)' }}
                                    onClick={() => {
                                      setSelectedImage({src: pedigreeData.dam.image, name: pedigreeData.dam.name});
                                      setIsImagePopupOpen(true);
                                    }}
                                  />
                                </div>
                              )}
                              <h5 className="font-oswald text-sm font-normal mb-1" style={{color: '#11100f'}}>
                                {pedigreeData.dam.image ? (
                                  <button 
                                    onClick={() => {
                                      setSelectedImage({src: pedigreeData.dam.image, name: pedigreeData.dam.name});
                                      setIsImagePopupOpen(true);
                                    }}
                                    className="underline cursor-pointer hover:opacity-80 transition-opacity"
                                    style={{color: '#6d761d'}}
                                  >
                                    {pedigreeData.dam.name}
                                  </button>
                                ) : pedigreeData.dam.name}
                              </h5>
                              <div className="flex flex-wrap justify-center gap-1">
                                {pedigreeData.dam.titles.map((title: string, index: number) => (
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
                              {pedigreeData.sire.sire.image && (
                                <div className="mb-2">
                                  <img 
                                    src={pedigreeData.sire.sire.image} 
                                    alt={pedigreeData.sire.sire.name}
                                    className="w-16 h-12 rounded object-cover mx-auto cursor-pointer"
                                    style={{ imageRendering: 'crisp-edges', filter: 'contrast(1.1) brightness(1.05)' }}
                                    onClick={() => {
                                      setSelectedImage({src: pedigreeData.sire.sire.image, name: pedigreeData.sire.sire.name});
                                      setIsImagePopupOpen(true);
                                    }}
                                  />
                                </div>
                              )}
                              <h6 className="font-oswald text-sm font-normal mb-1" style={{color: '#11100f'}}>
                                {pedigreeData.sire.sire.image ? (
                                  <button 
                                    onClick={() => {
                                      setSelectedImage({src: pedigreeData.sire.sire.image, name: pedigreeData.sire.sire.name});
                                      setIsImagePopupOpen(true);
                                    }}
                                    className="underline cursor-pointer hover:opacity-80 transition-opacity"
                                    style={{color: '#6d761d'}}
                                  >
                                    {pedigreeData.sire.sire.name}
                                  </button>
                                ) : pedigreeData.sire.sire.name}
                              </h6>
                              <div className="flex flex-wrap justify-center gap-1">
                                {pedigreeData.sire.sire.titles.map((title: string, index: number) => (
                                  <button 
                                    key={index}
                                    onClick={() => {
                                      setSelectedTitle({abbreviation: title, fullName: getTitleFullName(title)});
                                      setIsTitlePopupOpen(true);
                                    }}
                                    className="px-1 py-0.5 text-xs font-montserrat rounded cursor-pointer hover:opacity-80 transition-opacity"
                                    style={{backgroundColor: '#a5aa35', color: '#fefefe'}}
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
                              {pedigreeData.sire.dam.image && (
                                <div className="mb-2">
                                  <img 
                                    src={pedigreeData.sire.dam.image} 
                                    alt={pedigreeData.sire.dam.name}
                                    className="w-16 h-12 rounded object-cover mx-auto cursor-pointer"
                                    style={{ imageRendering: 'crisp-edges', filter: 'contrast(1.1) brightness(1.05)' }}
                                    onClick={() => {
                                      setSelectedImage({src: pedigreeData.sire.dam.image, name: pedigreeData.sire.dam.name});
                                      setIsImagePopupOpen(true);
                                    }}
                                  />
                                </div>
                              )}
                              <h6 className="font-oswald text-sm font-normal mb-1" style={{color: '#11100f'}}>
                                {pedigreeData.sire.dam.image ? (
                                  <button 
                                    onClick={() => {
                                      setSelectedImage({src: pedigreeData.sire.dam.image, name: pedigreeData.sire.dam.name});
                                      setIsImagePopupOpen(true);
                                    }}
                                    className="underline cursor-pointer hover:opacity-80 transition-opacity"
                                    style={{color: '#6d761d'}}
                                  >
                                    {pedigreeData.sire.dam.name}
                                  </button>
                                ) : pedigreeData.sire.dam.name}
                              </h6>
                              <div className="flex flex-wrap justify-center gap-1">
                                {pedigreeData.sire.dam.titles.map((title: string, index: number) => (
                                  <button 
                                    key={index}
                                    onClick={() => {
                                      setSelectedTitle({abbreviation: title, fullName: getTitleFullName(title)});
                                      setIsTitlePopupOpen(true);
                                    }}
                                    className="px-1 py-0.5 text-xs font-montserrat rounded cursor-pointer hover:opacity-80 transition-opacity"
                                    style={{backgroundColor: '#a5aa35', color: '#fefefe'}}
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
                              {pedigreeData.dam.sire.image && (
                                <div className="mb-2">
                                  <img 
                                    src={pedigreeData.dam.sire.image} 
                                    alt={pedigreeData.dam.sire.name}
                                    className="w-16 h-12 rounded object-cover mx-auto cursor-pointer"
                                    style={{ imageRendering: 'crisp-edges', filter: 'contrast(1.1) brightness(1.05)' }}
                                    onClick={() => {
                                      setSelectedImage({src: pedigreeData.dam.sire.image, name: pedigreeData.dam.sire.name});
                                      setIsImagePopupOpen(true);
                                    }}
                                  />
                                </div>
                              )}
                              <h6 className="font-oswald text-sm font-normal mb-1" style={{color: '#11100f'}}>
                                {pedigreeData.dam.sire.image ? (
                                  <button 
                                    onClick={() => {
                                      setSelectedImage({src: pedigreeData.dam.sire.image, name: pedigreeData.dam.sire.name});
                                      setIsImagePopupOpen(true);
                                    }}
                                    className="underline cursor-pointer hover:opacity-80 transition-opacity"
                                    style={{color: '#6d761d'}}
                                  >
                                    {pedigreeData.dam.sire.name}
                                  </button>
                                ) : pedigreeData.dam.sire.name}
                              </h6>
                              <div className="flex flex-wrap justify-center gap-1">
                                {pedigreeData.dam.sire.titles.map((title: string, index: number) => (
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
                              {pedigreeData.dam.dam.image && (
                                <div className="mb-2">
                                  <img 
                                    src={pedigreeData.dam.dam.image} 
                                    alt={pedigreeData.dam.dam.name}
                                    className="w-16 h-12 rounded object-cover mx-auto cursor-pointer"
                                    style={{ imageRendering: 'crisp-edges', filter: 'contrast(1.1) brightness(1.05)' }}
                                    onClick={() => {
                                      setSelectedImage({src: pedigreeData.dam.dam.image, name: pedigreeData.dam.dam.name});
                                      setIsImagePopupOpen(true);
                                    }}
                                  />
                                </div>
                              )}
                              <h6 className="font-oswald text-sm font-normal mb-1" style={{color: '#11100f'}}>
                                {pedigreeData.dam.dam.image ? (
                                  <button 
                                    onClick={() => {
                                      setSelectedImage({src: pedigreeData.dam.dam.image, name: pedigreeData.dam.dam.name});
                                      setIsImagePopupOpen(true);
                                    }}
                                    className="underline cursor-pointer hover:opacity-80 transition-opacity"
                                    style={{color: '#6d761d'}}
                                  >
                                    {pedigreeData.dam.dam.name}
                                  </button>
                                ) : pedigreeData.dam.dam.name}
                              </h6>
                              <div className="flex flex-wrap justify-center gap-1">
                                {pedigreeData.dam.dam.titles.map((title: string, index: number) => (
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
                
                {/* Official Pedigree Document Section */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-xl font-oswald font-normal mb-4 text-center" style={{color: '#11100f'}}>
                    Official AKC Certified Pedigree
                  </h3>
                  <div className="text-center">
                    {selectedDog?.name === "Twain" ? (
                      <img 
                        src={twainPedigreeImage}
                        alt={`Official AKC Pedigree for ${selectedDog?.name}`}
                        className="max-w-full h-auto rounded-lg border shadow-lg cursor-pointer hover:opacity-90 transition-opacity mx-auto"
                        style={{ maxHeight: '800px' }}
                        onClick={() => {
                          setSelectedImage({
                            src: twainPedigreeImage, 
                            name: `Official AKC Pedigree - ${selectedDog?.name}`
                          });
                          setIsImagePopupOpen(true);
                        }}
                      />
                    ) : selectedDog?.name === "Grizzly" ? (
                      <img 
                        src={grizzlyOfficialPedigreeImage}
                        alt={`Official AKC Pedigree for ${selectedDog?.name}`}
                        className="max-w-full h-auto rounded-lg border shadow-lg cursor-pointer hover:opacity-90 transition-opacity mx-auto"
                        style={{ maxHeight: '800px' }}
                        onClick={() => {
                          setSelectedImage({
                            src: grizzlyOfficialPedigreeImage, 
                            name: `Official AKC Pedigree - ${selectedDog?.name}`
                          });
                          setIsImagePopupOpen(true);
                        }}
                      />
                    ) : (
                      <div className="bg-gray-100 rounded-lg p-8 text-center">
                        <p className="text-gray-600 font-source-sans">
                          Official pedigree document available upon request
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </DialogContent>
    </Dialog>

      {/* Title Popup Dialog */}
      <Dialog open={isTitlePopupOpen} onOpenChange={setIsTitlePopupOpen}>
        <DialogContent className="max-w-md" aria-describedby="title-popup-description">
          <DialogHeader>
            <DialogTitle className="font-oswald text-lg font-normal" style={{color: '#11100f'}}>
              {selectedTitle?.abbreviation}
            </DialogTitle>
          </DialogHeader>
          <div id="title-popup-description" className="text-center">
            <p className="font-source-sans text-sm text-gray-700">
              {selectedTitle?.fullName}
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Puppy Gallery Dialog */}
      <Dialog open={isPuppyGalleryOpen} onOpenChange={setIsPuppyGalleryOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto" aria-describedby="puppy-gallery-description">
          <DialogHeader>
            <DialogTitle className="text-xl font-oswald font-normal text-center" style={{color: '#11100f'}}>
              Puppies by {selectedDogForPuppies?.name}
            </DialogTitle>
          </DialogHeader>
          <div id="puppy-gallery-description" className="space-y-6">
            {(() => {
              const puppyData = getPuppyGalleryData(selectedDogForPuppies?.name);
              if (!puppyData || !puppyData.litters || puppyData.litters.length === 0) {
                return (
                  <p className="text-center text-gray-600 font-source-sans">
                    No puppy information available for {selectedDogForPuppies?.name}
                  </p>
                );
              }

              return puppyData.litters.map((litter: any, litterIndex: number) => (
                <div key={litterIndex} className="space-y-4">
                  <div className="text-center pb-2 border-b border-gray-200">
                    <h4 className="font-oswald text-lg font-normal" style={{color: '#11100f'}}>
                      Born: {litter.birthDate} | Dam: {litter.dam}
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {litter.puppies.map((puppy: any, puppyIndex: number) => (
                      <div key={puppyIndex} className="text-center">
                        <img 
                          src={puppy.image} 
                          alt={puppy.name}
                          className="w-full h-48 object-cover rounded mb-2"
                        />
                        <p className="font-oswald text-sm font-medium" style={{color: '#11100f'}}>
                          {puppy.name}
                        </p>
                        <p className="font-source-sans text-xs text-gray-600">
                          {puppy.gender} • {puppy.color}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ));
            })()}
          </div>
        </DialogContent>
      </Dialog>

      {/* Image Popup Dialog */}
      <Dialog open={isImagePopupOpen} onOpenChange={setIsImagePopupOpen}>
        <DialogContent className="max-w-2xl" aria-describedby="image-popup-description">
          <DialogHeader>
            <DialogTitle className="font-oswald text-lg font-normal" style={{color: '#11100f'}}>
              {selectedImage?.name}
            </DialogTitle>
          </DialogHeader>
          <div id="image-popup-description" className="text-center">
            {selectedImage && (
              <img 
                src={selectedImage.src} 
                alt={selectedImage.name}
                className="max-w-full max-h-96 rounded object-contain mx-auto"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      </section>
    </>
  );
};
