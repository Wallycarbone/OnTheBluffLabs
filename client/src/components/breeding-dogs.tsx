import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeartHandshake } from "lucide-react";
import harperLeeImage from "@assets/Y30A3321Harper Lee_1753040309126.JPG?url";
import grizzlyImage from "@assets/Y30A9312grizzly_1753041221558.jpg?url";

export default function BreedingDogs() {
  const sires = [
    {
      name: "Atticus Finch",
      formalName: "Ch. On The Bluff Atticus Finch",
      gender: "Male",
      color: "Yellow",
      age: "Retired",
      image: "https://i0.wp.com/ontheblufflabradors.com/wp-content/uploads/2024/12/Atticus.jpeg?resize=1080%2C721&ssl=1",
      description: "Outstanding English Labrador with exceptional temperament and conformation. Now retired from breeding.",
    },
    {
      name: "Oliver",
      formalName: "Ch. On The Bluff Oliver",
      gender: "Male",
      color: "Yellow",
      age: "Active Stud",
      image: "https://i0.wp.com/ontheblufflabradors.com/wp-content/uploads/2024/12/Atticus.jpeg?resize=1080%2C721&ssl=1",
      description: "Proven sire with excellent bloodlines and gentle temperament.",
    },
    {
      name: "Grizzly",
      formalName: "Endless Mt. Labrador Grizzly at On The Bluff",
      gender: "Male",
      color: "Chocolate",
      age: "Active Stud",
      image: grizzlyImage,
      description: "Handsome chocolate male with strong build and confident personality. Produces beautiful chocolate puppies with excellent temperaments.",
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
    <Card key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img 
        src={dog.image} 
        alt={`Champion ${dog.color} Labrador`} 
        className={`w-full h-64 object-cover ${dog.name === 'Grizzly' ? 'object-center' : ''}`}
        style={{ imageRendering: 'high-quality' }}
      />
      <CardContent className="p-6">
        <h3 className="text-xl font-oswald font-normal tracking-wide mb-2" style={{color: '#11100f'}}>
          {dog.name}
        </h3>
        <p className="text-warm-gray mb-2">
          {dog.formalName}
        </p>
        <div className="flex items-center mb-4">
          <HeartHandshake className="text-golden mr-1 w-4 h-4" />
          <span className="text-sm text-warm-gray">
            {dog.name === "Harper Lee" ? "Daughter of late sire Atticus Finch" : "AKC Champion"}
          </span>
        </div>
        <p className="text-sm text-warm-gray mb-4">
          {dog.description}
        </p>
        <Button className="w-full bg-navy text-white hover:bg-blue-800 font-montserrat font-medium">
          View Pedigree
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <section id="breeding" className="py-20 bg-white">
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
              Meet the exceptional female dogs that are the loving mothers of our champion litters.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dames.map((dog, index) => renderDogCard(dog, index + 100))}
          </div>
        </div>
      </div>
    </section>
  );
}
