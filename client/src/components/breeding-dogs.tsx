import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Star } from "lucide-react";
import harperLeeImage from "@assets/Y30A3321Harper Lee_1753040309126.JPG?url";
import grizzlyImage from "@assets/Y30A9231grizzly_1753818390893.jpg?url";
import boscoImage from "@assets/bosco1_1753815440343.avif?url";
import hannahImage from "@assets/Hannah_1753736053468.png?url";
import cyrusImage from "@assets/CyrusBodyL (1)_1753815517271.jpg?url";
import simmerImage from "@assets/Simmer_1753810570980.avif?url";
import brodyImage from "@assets/Brody_1753811205545.jpg?url";

export default function BreedingDogs() {
  const [isPedigreePopupOpen, setIsPedigreePopupOpen] = useState(false);
  const [selectedDog, setSelectedDog] = useState<any>(null);
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

  const openPedigreePopup = (dog: any) => {
    setSelectedDog(dog);
    setIsPedigreePopupOpen(true);
  };

  const getDogPedigreeData = (dogName: string) => {
    const pedigrees: { [key: string]: any } = {
      "Grizzly": {
        name: "Grizzly",
        formalName: "Endless Mountain's Grizzly Bear at On The Bluff (\"Grizzly\")",
        titles: [],
        image: grizzlyImage,
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
        formalName: "On The Bluff Moon",
        titles: ["CH"],
        sire: {
          name: "Farnfield Topo Gigio",
          titles: ["2019 Westminster BOB", "CH", "GCH"],
          sire: {
            name: "Topo's Sire",
            titles: ["CH", "GCH"],
            sire: {
              name: "Topo's Paternal Great-Grandsire",
              titles: ["CH"]
            },
            dam: {
              name: "Topo's Paternal Great-Granddam",
              titles: ["CH"]
            }
          },
          dam: {
            name: "Topo's Dam",
            titles: ["CH"],
            sire: {
              name: "Topo's Maternal Great-Grandsire",
              titles: ["CH"]
            },
            dam: {
              name: "Topo's Maternal Great-Granddam",
              titles: ["CH"]
            }
          }
        },
        dam: {
          name: "Moon's Dam",
          titles: ["CH"],
          sire: {
            name: "Moon's Maternal Grandsire",
            titles: ["CH"],
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
            name: "Moon's Maternal Granddam",
            titles: ["CH"],
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
      description: "Handsome chocolate male from Endless Mt Labrador with champion and field title bloodlines. Produces beautiful chocolate puppies with excellent temperaments and natural hunting abilities.",
    },
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
        
        <div className="bg-cream/30 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <Star className="text-golden mr-3 w-5 h-5 mt-1 fill-current flex-shrink-0" />
            <span className="text-sm text-warm-gray leading-relaxed">
              {dog.name === "Harper Lee" ? "Daughter of late sire Atticus Finch" : "Descended from 2016 Westminster Best of Breed Shalimar's The Animator"}
            </span>
          </div>
        </div>
        
        <p className="text-warm-gray mb-6 leading-relaxed">
          {dog.description}
        </p>
        
        <div className="space-y-4">
          {/* Pedigree Summary */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-center mb-3">
              <h4 className="font-oswald font-medium text-sm" style={{color: '#11100f'}}>
                PEDIGREE OVERVIEW
              </h4>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="font-montserrat font-semibold uppercase tracking-wider" style={{color: '#6d761d'}}>Sire</span>
                <p className="font-source-sans" style={{color: '#11100f'}}>
                  {dog.name === "Grizzly" 
                    ? "Greenstone Chocoholic at Loretta (\"Bosco\")"
                    : dog.name === "Harper Lee"
                    ? "Atticus Finch"
                    : `${dog.name}'s Sire`
                  }
                </p>
              </div>
              <div>
                <span className="font-montserrat font-semibold uppercase tracking-wider" style={{color: '#6d761d'}}>Dam</span>
                <p className="font-source-sans" style={{color: '#11100f'}}>
                  {`${dog.name}'s Dam`}
                </p>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap justify-center gap-1">
              <span className="px-2 py-1 text-xs font-montserrat font-medium rounded-full" style={{backgroundColor: '#6d761d', color: '#fefefe'}}>
                CH
              </span>
              {dog.name === "Grizzly" && (
                <span className="px-2 py-1 text-xs font-montserrat font-medium rounded-full" style={{backgroundColor: '#8a8f28', color: '#fefefe'}}>
                  Westminster Line
                </span>
              )}
            </div>
          </div>
          
          <Button 
            onClick={() => openPedigreePopup(dog)}
            className="w-full bg-navy text-white hover:bg-blue-800 font-montserrat font-medium py-3 rounded-lg transition-colors"
          >
            View Full Pedigree
          </Button>
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
                        <h3 className="text-2xl font-oswald font-normal mb-2" style={{color: '#11100f'}}>
                          {pedigreeData.name}
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
                          <h6 className="font-oswald text-sm font-medium mb-1 text-center" style={{color: '#11100f'}}>
                            {pedigreeData.dam.dam.name}
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

                    {/* Notable Bloodlines */}
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="text-lg font-oswald font-normal mb-4 text-center" style={{color: '#11100f'}}>
                        NOTABLE ANCESTORS
                      </h4>
                      <div className="text-center">
                        {selectedDog.name === "Grizzly" && (
                          <div className="space-y-2">
                            <p className="font-source-sans text-sm" style={{color: '#4b4b4b'}}>
                              Son of <strong>Greenstone Chocoholic at Loretta ("Bosco")</strong> and <strong>Endless Mountain's Hannah</strong>, 
                              featuring exceptional bloodlines with multiple Grand Champions. Notable ancestors include 
                              <strong>Shalimar's The Animator ("Cyrus")</strong> with GCH, CH, and MBISS titles, and <strong>Bosco</strong> brings Champion and Master Agility excellence.
                            </p>
                            <span className="inline-block px-3 py-1 text-xs font-montserrat font-medium rounded-full" style={{backgroundColor: '#a5aa35', color: '#fefefe'}}>
                              Grand Champion & Multi-Title Line
                            </span>
                          </div>
                        )}
                        {selectedDog.name === "Harper Lee" && (
                          <div className="space-y-2">
                            <p className="font-source-sans text-sm" style={{color: '#4b4b4b'}}>
                              Daughter of our late champion sire <strong>Atticus Finch</strong>, continuing his exceptional legacy
                            </p>
                            <span className="inline-block px-3 py-1 text-xs font-montserrat font-medium rounded-full" style={{backgroundColor: '#a5aa35', color: '#fefefe'}}>
                              Legacy Champion Line
                            </span>
                          </div>
                        )}
                        {(selectedDog.name === "Moon" || selectedDog.name === "Foxxy" || selectedDog.name === "Nora") && (
                          <div className="space-y-2">
                            <p className="font-source-sans text-sm" style={{color: '#4b4b4b'}}>
                              Champion bloodlines with exceptional conformation and temperament
                            </p>
                            <span className="inline-block px-3 py-1 text-xs font-montserrat font-medium rounded-full" style={{backgroundColor: '#a5aa35', color: '#fefefe'}}>
                              Champion Bloodline
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
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
    </section>
  );
}
