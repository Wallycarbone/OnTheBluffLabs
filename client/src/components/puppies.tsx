import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import moonFoxxyPuppies from "@assets/Copy of Gallery Image - Landscape (23)_1752527442943.png";

export default function Puppies() {
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
  const currentLitters = [
    {
      name: "Moon & Foxxy Litter",
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
      name: "Moon & Nora Litter",
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
      name: "Grizzly & Guinevere Litter",
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
      name: "Holden & Alola Litter",
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
      name: "Boo Radley & Queen Boudica Litter",
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
      name: "Moon & Harper Lee Litter",
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
    <Card key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img 
        src={litter.image} 
        alt={`${litter.name} Labrador litter`} 
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-oswald font-normal tracking-wide" style={{color: '#11100f'}}>
            {litter.name}
          </h3>
          <span className={`px-3 py-1 rounded-full text-xs font-montserrat font-medium ${
            litter.status === 'Ready' ? 'bg-green-100 text-green-800' :
            litter.status === 'Current' ? 'bg-blue-100 text-blue-800' :
            'bg-orange-100 text-orange-800'
          }`}>
            {litter.status}
          </span>
        </div>

        <div className="space-y-2 mb-4">
          <p className="text-sm font-source-sans" style={{color: '#4b4b4b'}}>
            <span className="font-medium">Sire:</span> {litter.sire}
          </p>
          <p className="text-sm font-source-sans" style={{color: '#4b4b4b'}}>
            <span className="font-medium">Dam:</span> {litter.dam}
          </p>
          <p className="text-sm font-source-sans" style={{color: '#4b4b4b'}}>
            <span className="font-medium">Born:</span> {litter.birthDate}
          </p>
          <p className="text-sm font-source-sans" style={{color: '#4b4b4b'}}>
            <span className="font-medium">Age:</span> {calculateAge(litter.birthDate)}
          </p>
          <p className="text-sm font-source-sans" style={{color: '#4b4b4b'}}>
            <span className="font-medium">Available:</span> {litter.available}
          </p>
        </div>
        <div className="flex items-start mb-4">
          <Star className="w-4 h-4 mr-1 mt-0.5" style={{color: '#6d761d'}} />
          <span className="text-sm font-source-sans" style={{color: '#4b4b4b'}}>
            {litter.name === "Moon & Foxxy Litter" 
              ? "Descended from 2019 Westminster Best of Breed Farnfield Topo Gigio"
              : litter.name === "Moon & Nora Litter"
              ? "Descended from 2019 Westminster Best of Breed Farnfield Topo Gigio"
              : litter.name === "Grizzly & Guinevere Litter"
              ? "Descended from 2016 Westminster Best of Breed Shalimar's The Animator"
              : litter.name === "Holden & Alola Litter"
              ? "Descended from 2011 AKC Grand Champion Highcaliber Labradale Expresso"
              : litter.name === "Boo Radley & Queen Boudica Litter"
              ? "Champion bloodlines with exceptional temperament"
              : litter.name === "Moon & Harper Lee Litter"
              ? "Descended from 2019 Westminster Best of Breed Farnfield Topo Gigio"
              : "Champion Bloodline"
            }
          </span>
        </div>
        <Button 
          onClick={scrollToContact}
          className="w-full font-montserrat font-medium h-auto py-3"
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
    <section id="puppies" className="py-20" style={{backgroundColor: '#fff3c5'}}>
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
            {[...currentLitters, ...upcomingLitters].map((litter, index) => renderLitterCard(litter, index))}
          </div>
        </div>

        {/* Mature Dogs Section */}
        <div className="text-center">
          <Card className="bg-white rounded-xl shadow-lg overflow-hidden max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-oswald font-normal mb-4 tracking-wide" style={{color: '#11100f'}}>
                MATURE DOGS AVAILABLE
              </h3>
              <p className="text-lg font-source-sans mb-6" style={{color: '#4b4b4b'}}>
                Looking for an older puppy or adult dog? We occasionally have mature dogs available from our breeding program.
              </p>
              <img 
                src="https://i0.wp.com/ontheblufflabradors.com/wp-content/uploads/2024/05/Y30A3237-1.jpg?resize=1080%2C864&ssl=1"
                alt="Pippi Longstocking - Mature dog available"
                className="w-full h-96 object-cover rounded-lg mb-6"
                style={{objectPosition: '50% 20%'}}
              />
              <Button 
                onClick={scrollToContact}
                className="font-montserrat font-medium h-auto py-3 px-8"
                style={{backgroundColor: '#6d761d', color: '#fefefe'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#644f06'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6d761d'}
              >
                Request Mature Dog Information
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
