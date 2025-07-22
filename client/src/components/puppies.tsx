import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Star, X } from "lucide-react";
import moonFoxxyPuppies from "@assets/Copy of Gallery Image - Landscape (23)_1752527442943.png";
import topoGigioImage from "@assets/Topo Gigio_1753196469536.jpg";

export default function Puppies() {
  const [isTopoPopupOpen, setIsTopoPopupOpen] = useState(false);
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
      available: "Strawberry Blonde Males & Females",
      readyDate: "August 2025",
      image: moonFoxxyPuppies,
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
      image: "https://i0.wp.com/ontheblufflabradors.com/wp-content/uploads/2025/06/58.png?resize=1080%2C810&ssl=1",
      status: "Current",
      description: "One black female and one yellow female available"
    },
    {
      name: "Grizzly & Guinevere",
      sire: "Grizzly",
      dam: "Guinevere",
      birthDate: "April 5, 2025",
      puppiesCount: 8,
      available: "Chocolate Males & Females",
      readyDate: "Ready Now",
      image: "https://i0.wp.com/ontheblufflabradors.com/wp-content/uploads/2025/06/52.png?fit=1080%2C810&ssl=1",
      status: "Ready",
      description: "Eight chocolate puppies - males and females available"
    },
    {
      name: "Holden & Alola",
      sire: "Holden",
      dam: "Alola",
      birthDate: "March 21, 2025",
      puppiesCount: 8,
      available: "Chocolate Females",
      readyDate: "Ready Now",
      image: "https://i0.wp.com/ontheblufflabradors.com/wp-content/uploads/2025/05/40.png?fit=1080%2C810&ssl=1",
      status: "Ready",
      description: "Three chocolate females available"
    }
  ];

  const upcomingLitters = [
    {
      name: "Boo Radley & Queen Boudica",
      sire: "Boo Radley",
      dam: "Queen Boudica",
      birthDate: "Due August 2025",
      puppiesCount: "TBD",
      available: "Accepting Deposits",
      readyDate: "October 2025",
      image: "https://i0.wp.com/ontheblufflabradors.com/wp-content/uploads/2025/02/Black-and-White-Minimalist-New-Collection-Social-Media-Mockup-Instagram-Post-41.png?resize=1080%2C1350&ssl=1",
      status: "Upcoming",
      description: "Bred in June, due in August 2025"
    },
    {
      name: "Moon & Harper Lee",
      sire: "Moon",
      dam: "Harper Lee",
      birthDate: "Due July 2025",
      puppiesCount: "TBD",
      available: "Accepting Deposits",
      readyDate: "September 2025",
      image: "https://i0.wp.com/ontheblufflabradors.com/wp-content/uploads/2025/01/52.png?resize=1080%2C1350&ssl=1",
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

  const renderLitterCard = (litter: any, index: number) => (
    <Card key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-0">
      <div className="relative">
        <img 
          src={litter.image} 
          alt={`${litter.name} Labrador litter`} 
          className="w-full h-56 object-cover"
        />
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
          <div className="space-y-3">
            <div>
              <span className="text-xs font-montserrat font-semibold uppercase tracking-wider" style={{color: '#6d761d'}}>Sire</span>
              <p className="text-sm font-source-sans font-medium" style={{color: '#11100f'}}>{litter.sire}</p>
            </div>
            <div>
              <span className="text-xs font-montserrat font-semibold uppercase tracking-wider" style={{color: '#6d761d'}}>Dam</span>
              <p className="text-sm font-source-sans font-medium" style={{color: '#11100f'}}>{litter.dam}</p>
            </div>
            <div>
              <span className="text-xs font-montserrat font-semibold uppercase tracking-wider" style={{color: '#6d761d'}}>Born</span>
              <p className="text-sm font-source-sans font-medium" style={{color: '#11100f'}}>{litter.birthDate}</p>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <span className="text-xs font-montserrat font-semibold uppercase tracking-wider" style={{color: '#6d761d'}}>Age</span>
              <p className="text-sm font-source-sans font-medium" style={{color: '#11100f'}}>{calculateAge(litter.birthDate)}</p>
            </div>
            <div>
              <span className="text-xs font-montserrat font-semibold uppercase tracking-wider" style={{color: '#6d761d'}}>Available</span>
              <p className="text-sm font-source-sans font-medium" style={{color: '#11100f'}}>{litter.available}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <Star className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" style={{color: '#6d761d'}} />
            <span className="text-sm font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
              {litter.name === "Moon & Foxxy" 
                ? (
                    <>
                      Descended from 2019 Westminster Best of Breed Farnfield <button 
                        onClick={() => setIsTopoPopupOpen(true)}
                        className="underline cursor-pointer hover:opacity-80 transition-opacity font-medium"
                        style={{color: '#6d761d'}}
                      >
                        Topo Gigio
                      </button>
                    </>
                  )
                : litter.name === "Moon & Nora"
                ? (
                    <>
                      Descended from 2019 Westminster Best of Breed Farnfield <button 
                        onClick={() => setIsTopoPopupOpen(true)}
                        className="underline cursor-pointer hover:opacity-80 transition-opacity font-medium"
                        style={{color: '#6d761d'}}
                      >
                        Topo Gigio
                      </button>
                    </>
                  )
                : litter.name === "Grizzly & Guinevere"
                ? "Descended from 2016 Westminster Best of Breed Shalimar's The Animator"
                : litter.name === "Holden & Alola"
                ? "Descended from 2011 AKC Grand Champion Highcaliber Labradale Expresso"
                : litter.name === "Boo Radley & Queen Boudica"
                ? "Champion bloodlines with exceptional temperament"
                : litter.name === "Moon & Harper Lee"
                ? (
                    <>
                      Descended from 2019 Westminster Best of Breed Farnfield <button 
                        onClick={() => setIsTopoPopupOpen(true)}
                        className="underline cursor-pointer hover:opacity-80 transition-opacity font-medium"
                        style={{color: '#6d761d'}}
                      >
                        Topo Gigio
                      </button>
                    </>
                  )
                : "Champion Bloodline"
              }
            </span>
          </div>
        </div>

        <Button 
          onClick={scrollToContact}
          className="w-full font-montserrat font-semibold text-base h-auto py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          style={{backgroundColor: '#6d761d', color: '#fefefe'}}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#644f06'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6d761d'}
        >
          Apply for This Litter
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <section id="puppies" className="py-20" style={{backgroundColor: '#fffbe8'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-oswald font-normal mb-6 tracking-wide" style={{color: '#11100f'}}>
            AVAILABLE LITTERS
          </h2>
          <p className="text-xl font-source-sans max-w-3xl mx-auto" style={{color: '#4b4b4b'}}>
            Our current and upcoming litters of exceptional Labrador puppies from champion bloodlines, ready to join loving families.
          </p>
        </div>
        
        {/* All Litters */}
        <div className="mb-16">
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

        {/* Mature Dogs Section */}
        <div className="text-center mt-12">
          <Card className="bg-white rounded-lg shadow-md overflow-hidden max-w-lg mx-auto">
            <CardContent className="p-6">
              <h3 className="text-lg font-oswald font-normal mb-3 tracking-wide" style={{color: '#11100f'}}>
                MATURE DOGS AVAILABLE
              </h3>
              <p className="text-sm font-source-sans mb-4" style={{color: '#4b4b4b'}}>
                We occasionally have older puppies or adult dogs available from our breeding program.
              </p>
              <img 
                src="https://i0.wp.com/ontheblufflabradors.com/wp-content/uploads/2024/05/Y30A3237-1.jpg?resize=1080%2C864&ssl=1"
                alt="Pippi Longstocking - Mature dog available"
                className="w-full h-48 object-cover rounded-md mb-4"
                style={{objectPosition: '50% 20%'}}
              />
              <Button 
                onClick={scrollToContact}
                className="font-montserrat font-medium text-sm h-auto py-2 px-6"
                style={{backgroundColor: '#6d761d', color: '#fefefe'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#644f06'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6d761d'}
              >
                Inquire About Mature Dogs
              </Button>
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
    </section>
  );
}
