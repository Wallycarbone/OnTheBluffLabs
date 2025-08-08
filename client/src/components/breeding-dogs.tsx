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
import topoGigioImage from "@assets/Gino_1754685352006.webp";
import roccoImage from "@assets/Rocco_1754686890866.avif";
import candyImage from "@assets/Candy_1754687171237.webp";
// import mrDarcyImage from "@assets/Screenshot 2025-08-08 at 4.49.59 PM_1754686444295.png";


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
              { name: "Pearl (Turtles)", image: grizzlyPearl, available: true },
              { name: "Holly (Puppy Love)", image: grizzlyHolly, available: true }
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
              { name: "Mr. Peacock", image: moonPeacock },
              { name: "Mr. Turtles", image: moonTurtles },
              { name: "Ms. Aloha", image: moonAloha },
              { name: "Ms. Sunflower", image: moonSunflower },
              { name: "Mr. Superstar", image: moonSuperstar },
              { name: "Mr. Penguin Party", image: moonPenguin },
              { name: "Ms. Alpine Glow", image: moonAlpine }
            ]
          }
        ]
      },
      "Holden": {
        name: "Holden",
        litters: [
          {
            name: "Holden & Alola", 
            dam: "Alola",
            birthDate: "March 15, 2025",
            puppies: [
              { name: "Summer (Butterfly)", image: holdenSummer },
              { name: "Fern (Apple Pie)", image: holdenFern },
              { name: "Willow (Seaglass)", image: holdenWillow }
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
        image: grizzlyPedigreeImage,
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
        formalName: "On The Bluff Harper Lee",
        titles: ["CH"],
        image: harperLeeImage,
        sire: {
          name: "Atticus Finch",
          titles: ["CH", "Late Sire"],
          sire: {
            name: "Atticus's Sire",
            titles: ["CH"],
            sire: {
              name: "Atticus's Paternal Great-Grandsire",
              titles: ["CH"]
            },
            dam: {
              name: "Atticus's Paternal Great-Granddam",
              titles: ["CH"]
            }
          },
          dam: {
            name: "Atticus's Dam",
            titles: ["CH"],
            sire: {
              name: "Atticus's Maternal Great-Grandsire",
              titles: ["CH"]
            },
            dam: {
              name: "Atticus's Maternal Great-Granddam",
              titles: ["CH"]
            }
          }
        },
        dam: {
          name: "Harper Lee's Dam",
          titles: ["CH"],
          sire: {
            name: "Harper Lee's Maternal Grandsire",
            titles: ["CH"],
            sire: {
              name: "Harper Lee's Maternal Great-Grandsire",
              titles: ["CH"]
            },
            dam: {
              name: "Harper Lee's Maternal Great-Granddam",
              titles: ["CH"]
            }
          },
          dam: {
            name: "Harper Lee's Maternal Granddam",
            titles: ["CH"],
            sire: {
              name: "Harper Lee's Dam's Maternal Great-Grandsire",
              titles: ["CH"]
            },
            dam: {
              name: "Harper Lee's Dam's Maternal Great-Granddam",
              titles: ["CH"]
            }
          }
        }
      },
      "Moon": {
        name: "Moon",
        formalName: "Belquest Conclusion Super Moon Rising",
        titles: ["CH"],
        sire: {
          name: "Farnfield Topo Gigio (\"Gino\")",
          titles: ["GCH", "CH"],
          image: topoGigioImage,
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
      }
    };
    
    return pedigrees[dogName] || null;
  };

  const sires = [
    {
      name: "Grizzly",
      formalName: "Endless Mt. Labrador Grizzly at On The Bluff",
      gender: "Male",
      color: "Chocolate",
      age: "Active Stud",
      image: grizzlyImage,
      description: "Distinguished chocolate male with exceptional emotional intelligence and substantial heavy bone structure. His intuitive nature and powerful build exemplify quality English Labradors, producing puppies with remarkable social intelligence and robust physical presence.",
      hasPuppies: true
    },
    {
      name: "Moon",
      formalName: "Belquest Conclusion Super Moon Rising",
      gender: "Male", 
      color: "Yellow",
      age: "Active Stud",
      image: moonImage,
      description: "Exceptional yellow male with outstanding temperament and conformation. Produces beautiful yellow puppies with gentle dispositions.",
      hasPuppies: true
    },
    {
      name: "Holden",
      formalName: "On The Bluff Holden",
      gender: "Male",
      color: "Yellow", 
      age: "Previous Stud",
      image: grizzlyImage, // Using placeholder, would need actual Holden image
      description: "Former breeding sire with excellent bloodlines. Father to beautiful chocolate females.",
      hasPuppies: true
    }
  ];

  const dames = [
    {
      name: "Harper Lee",
      formalName: "On The Bluff Harper Lee",
      gender: "Female",
      color: "Yellow",
      age: "Breeding Female",
      image: harperLeeImage,
      description: "Stunning yellow female with a naturally gentle temperament. Her calm, loving nature makes her an ideal mother.",
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
          <div className="bg-gray-50 rounded-lg p-4">
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
                  Daughter of late sire <button 
                    className="text-golden underline hover:text-golden/80 font-medium"
                    onClick={() => {
                      setSelectedImage({
                        src: atticusImage,
                        name: "Atticus Finch"
                      });
                      setIsImagePopupOpen(true);
                    }}
                  >
                    Atticus Finch
                  </button>
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
              className="w-full bg-navy text-white hover:bg-blue-800 font-montserrat font-medium py-3 rounded-lg transition-colors"
            >
              View Full Pedigree
            </Button>
            
            {dog.hasPuppies && (
              <Button 
                onClick={() => openPuppyGallery(dog)}
                className="w-full font-montserrat font-medium py-3 rounded-lg transition-colors border-2"
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
    <section id="breeding" className="py-24" style={{backgroundColor: '#fffbe8'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-oswald font-normal tracking-wide" style={{color: '#11100f'}}>
              {selectedDog?.name}
            </DialogTitle>
          </DialogHeader>
          {selectedDog && (
            <div className="space-y-6">
              {(() => {
                const pedigreeData = getDogPedigreeData(selectedDog.name);
                if (!pedigreeData) return <p>Pedigree information not available</p>;
                
                return (
                  <div className="space-y-6">
                    {/* Dog Information */}
                    <div className="rounded-lg p-6" style={{backgroundColor: '#f8f9f0'}}>
                      <div className="text-center">
                        {pedigreeData.image && (
                          <div className="mb-4">
                            <img 
                              src={pedigreeData.image}
                              alt={pedigreeData.name}
                              className="w-32 h-24 rounded-lg object-cover mx-auto border-2 border-golden/20"
                            />
                          </div>
                        )}
                        <h3 className="text-2xl font-oswald font-normal mb-2" style={{color: '#11100f'}}>
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
                        <p className="text-lg font-source-sans italic mb-2 text-gray-700">
                          {pedigreeData.formalName}
                        </p>

                        <div className="flex flex-wrap justify-center gap-2">
                          {pedigreeData.titles.map((title: string, index: number) => (
                            <span key={index} className="px-3 py-1 text-sm font-montserrat font-medium rounded-full" style={{backgroundColor: '#6d761d', color: '#fefefe'}}>
                              {title}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Full 5-Generation Pedigree Tree */}
                    <div className="space-y-6">
                      {/* Generation 1 - Parents */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Sire */}
                        <div className="bg-white rounded-lg p-3 border-2" style={{borderColor: '#8a8f28'}}>
                          <div className="text-center">
                            {pedigreeData.sire.image && (
                              <div className="mb-3">
                                <img 
                                  src={pedigreeData.sire.image} 
                                  alt={pedigreeData.sire.name}
                                  className="w-24 h-20 rounded-lg object-cover mx-auto cursor-pointer hover:opacity-80 transition-opacity"
                                  onClick={() => {
                                    setSelectedImage({src: pedigreeData.sire.image, name: pedigreeData.sire.name});
                                    setIsImagePopupOpen(true);
                                  }}
                                />
                              </div>
                            )}
                            <h5 className="font-oswald font-normal text-base mb-1" style={{color: '#11100f'}}>
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
                                  className="px-1.5 py-0.5 text-xs font-montserrat rounded-full cursor-pointer hover:opacity-80 transition-opacity"
                                  style={{backgroundColor: '#8a8f28', color: '#fefefe'}}
                                >
                                  {title}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                        {/* Dam */}
                        <div className="bg-white rounded-lg p-3 border-2" style={{borderColor: '#6d761d'}}>
                          <div className="text-center">
                            {pedigreeData.dam.image && (
                              <div className="mb-3">
                                <img 
                                  src={pedigreeData.dam.image} 
                                  alt={pedigreeData.dam.name}
                                  className="w-24 h-20 rounded-lg object-cover mx-auto cursor-pointer hover:opacity-80 transition-opacity"
                                  onClick={() => {
                                    setSelectedImage({src: pedigreeData.dam.image, name: pedigreeData.dam.name});
                                    setIsImagePopupOpen(true);
                                  }}
                                />
                              </div>
                            )}
                            <h5 className="font-oswald font-normal text-base mb-1" style={{color: '#11100f'}}>
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
                                  className="px-1.5 py-0.5 text-xs font-montserrat rounded-full cursor-pointer hover:opacity-80 transition-opacity"
                                  style={{backgroundColor: '#6d761d', color: '#fefefe'}}
                                >
                                  {title}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Generation 3 - Grandparents */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {/* Sire's Sire */}
                        <div className="bg-white rounded-lg p-2 border" style={{borderColor: '#a5aa35'}}>
                          {pedigreeData.sire.sire.image && (
                            <div className="mb-2">
                              <img 
                                src={pedigreeData.sire.sire.image} 
                                alt={pedigreeData.sire.sire.name}
                                className="w-20 h-16 rounded-lg object-cover mx-auto cursor-pointer hover:opacity-80 transition-opacity"
                                onClick={() => {
                                  setSelectedImage({src: pedigreeData.sire.sire.image, name: pedigreeData.sire.sire.name});
                                  setIsImagePopupOpen(true);
                                }}
                              />
                            </div>
                          )}
                          <h6 className="font-oswald text-sm font-medium mb-1 text-center" style={{color: '#11100f'}}>
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
                                className="px-1 py-0.5 text-xs font-montserrat rounded-full cursor-pointer hover:opacity-80 transition-opacity"
                                style={{backgroundColor: '#a5aa35', color: '#fefefe'}}
                              >
                                {title}
                              </button>
                            ))}
                          </div>
                        </div>
                        {/* Sire's Dam */}
                        <div className="bg-white rounded-lg p-2 border" style={{borderColor: '#a5aa35'}}>
                          {pedigreeData.sire.dam.image && (
                            <div className="mb-2">
                              <img 
                                src={pedigreeData.sire.dam.image} 
                                alt={pedigreeData.sire.dam.name}
                                className="w-20 h-16 rounded-lg object-cover mx-auto cursor-pointer hover:opacity-80 transition-opacity"
                                onClick={() => {
                                  setSelectedImage({src: pedigreeData.sire.dam.image, name: pedigreeData.sire.dam.name});
                                  setIsImagePopupOpen(true);
                                }}
                              />
                            </div>
                          )}
                          <h6 className="font-oswald text-sm font-medium mb-1 text-center" style={{color: '#11100f'}}>
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
                                className="px-1 py-0.5 text-xs font-montserrat rounded-full cursor-pointer hover:opacity-80 transition-opacity"
                                style={{backgroundColor: '#a5aa35', color: '#fefefe'}}
                              >
                                {title}
                              </button>
                            ))}
                          </div>
                        </div>
                        {/* Dam's Sire */}
                        <div className="bg-white rounded-lg p-2 border" style={{borderColor: '#a5aa35'}}>
                          {pedigreeData.dam.sire.image && (
                            <div className="mb-2">
                              <img 
                                src={pedigreeData.dam.sire.image} 
                                alt={pedigreeData.dam.sire.name}
                                className="w-20 h-16 rounded-lg object-cover mx-auto cursor-pointer hover:opacity-80 transition-opacity"
                                onClick={() => {
                                  setSelectedImage({src: pedigreeData.dam.sire.image, name: pedigreeData.dam.sire.name});
                                  setIsImagePopupOpen(true);
                                }}
                              />
                            </div>
                          )}
                          <h6 className="font-oswald text-sm font-medium mb-1 text-center" style={{color: '#11100f'}}>
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
                                className="px-1 py-0.5 text-xs font-montserrat rounded-full cursor-pointer hover:opacity-80 transition-opacity"
                                style={{backgroundColor: '#a5aa35', color: '#fefefe'}}
                              >
                                {title}
                              </button>
                            ))}
                          </div>
                        </div>
                        {/* Dam's Dam */}
                        <div className="bg-white rounded-lg p-2 border" style={{borderColor: '#a5aa35'}}>
                          {pedigreeData.dam.dam.image && (
                            <div className="mb-2">
                              <img 
                                src={pedigreeData.dam.dam.image} 
                                alt={pedigreeData.dam.dam.name}
                                className="w-20 h-16 rounded-lg object-cover mx-auto cursor-pointer hover:opacity-80 transition-opacity"
                                onClick={() => {
                                  setSelectedImage({src: pedigreeData.dam.dam.image, name: pedigreeData.dam.dam.name});
                                  setIsImagePopupOpen(true);
                                }}
                              />
                            </div>
                          )}
                          <h6 className="font-oswald text-sm font-medium mb-1 text-center" style={{color: '#11100f'}}>
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
                                className="px-1 py-0.5 text-xs font-montserrat rounded-full cursor-pointer hover:opacity-80 transition-opacity"
                                style={{backgroundColor: '#a5aa35', color: '#fefefe'}}
                              >
                                {title}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>


                    </div>

                    {/* Official Pedigree Document */}
                    {selectedDog.name === "Grizzly" && (
                      <div className="bg-gray-50 rounded-lg p-6 text-center">
                        <h4 className="text-lg font-oswald font-normal mb-4" style={{color: '#11100f'}}>
                          OFFICIAL PEDIGREE
                        </h4>
                        <a 
                          href={grizzlyPedigreePdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 rounded-lg font-montserrat font-medium text-white transition-all hover:opacity-90"
                          style={{backgroundColor: '#6d761d'}}
                        >
                          View Official Pedigree Document
                        </a>
                        <p className="text-xs font-source-sans text-gray-600 mt-2">
                          Opens in new tab • PDF format
                        </p>
                      </div>
                    )}
                    
                    {selectedDog.name === "Moon" && (
                      <div className="bg-gray-50 rounded-lg p-6 text-center">
                        <h4 className="text-lg font-oswald font-normal mb-4" style={{color: '#11100f'}}>
                          OFFICIAL PEDIGREE
                        </h4>
                        <a 
                          href={moonPedigreePdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 rounded-lg font-montserrat font-medium text-white transition-all hover:opacity-90"
                          style={{backgroundColor: '#6d761d'}}
                        >
                          View Official Pedigree Document
                        </a>
                        <p className="text-xs font-source-sans text-gray-600 mt-2">
                          Opens in new tab • PDF format
                        </p>
                      </div>
                    )}

                  </div>
                );
              })()}
              

            </div>
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

      {/* Puppy Gallery Popup */}
      <Dialog open={isPuppyGalleryOpen} onOpenChange={setIsPuppyGalleryOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-auto" aria-describedby="puppy-gallery-description">
          <DialogHeader>
            <DialogTitle className="text-2xl font-oswald font-normal tracking-wide" style={{color: '#11100f'}}>
              Puppies by {selectedDogForPuppies?.name}
            </DialogTitle>
          </DialogHeader>
          {selectedDogForPuppies && (
            <div className="space-y-8">
              <p id="puppy-gallery-description" className="text-sm font-source-sans text-gray-600 text-center">
                Litters and puppies sired by {selectedDogForPuppies.name}
              </p>
              {(() => {
                const puppyData = getPuppyGalleryData(selectedDogForPuppies.name);
                if (!puppyData) return <p>No puppy information available</p>;
                
                const availableLitters = puppyData.litters.filter((litter: any) => litter.status === "available");
                const previousLitters = puppyData.litters.filter((litter: any) => litter.status === "previous");
                
                return (
                  <div className="space-y-12">
                    {/* Available Puppies Section */}
                    {availableLitters.length > 0 && (
                      <div className="space-y-6">
                        <div className="text-center">
                          <h3 className="text-2xl font-oswald font-normal mb-2" style={{color: '#6d761d'}}>
                            Available Puppies
                          </h3>
                          <div className="w-24 h-0.5 mx-auto" style={{backgroundColor: '#6d761d'}}></div>
                        </div>
                        
                        {availableLitters.map((litter: any, litterIndex: number) => (
                          <div key={`available-${litterIndex}`} className="space-y-6">
                            {/* Litter Header */}
                            <div className="text-center space-y-2">
                              <h4 className="text-xl font-oswald font-normal" style={{color: '#11100f'}}>
                                {litter.name}
                              </h4>
                              <p className="text-sm font-source-sans text-gray-600">
                                Born: {litter.birthDate} • Dam: {litter.dam}
                              </p>
                            </div>
                            
                            {/* Puppy Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {litter.puppies.map((puppy: any, puppyIndex: number) => (
                                <div key={puppyIndex} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                  <div className="aspect-[5/4] overflow-hidden">
                                    <img 
                                      src={puppy.image} 
                                      alt={puppy.name}
                                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                  </div>
                                  <div className="p-4 text-center">
                                    <h5 className="font-montserrat font-medium text-sm" style={{color: '#11100f'}}>
                                      {puppy.name}
                                    </h5>
                                    {puppy.available && (
                                      <span className="inline-block mt-2 px-2 py-1 text-xs font-montserrat font-medium rounded-full text-white" style={{backgroundColor: '#6d761d'}}>
                                        Available
                                      </span>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Previous Puppies Section */}
                    {previousLitters.length > 0 && (
                      <div className="space-y-6">
                        <div className="text-center">
                          <h3 className="text-2xl font-oswald font-normal mb-2" style={{color: '#11100f'}}>
                            Previous Puppies
                          </h3>
                          <div className="w-24 h-0.5 mx-auto bg-gray-400"></div>
                        </div>
                        
                        {previousLitters.map((litter: any, litterIndex: number) => (
                          <div key={`previous-${litterIndex}`} className="space-y-6">
                            {/* Litter Header */}
                            <div className="text-center space-y-2">
                              <h4 className="text-xl font-oswald font-normal" style={{color: '#11100f'}}>
                                {litter.name}
                              </h4>
                              <p className="text-sm font-source-sans text-gray-600">
                                Born: {litter.birthDate} • Dam: {litter.dam}
                              </p>
                            </div>
                            
                            {/* Puppy Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {litter.puppies.map((puppy: any, puppyIndex: number) => (
                                <div key={puppyIndex} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow opacity-75">
                                  <div className="aspect-[5/4] overflow-hidden">
                                    <img 
                                      src={puppy.image} 
                                      alt={puppy.name}
                                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                  </div>
                                  <div className="p-4 text-center">
                                    <h5 className="font-montserrat font-medium text-sm" style={{color: '#11100f'}}>
                                      {puppy.name}
                                    </h5>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
