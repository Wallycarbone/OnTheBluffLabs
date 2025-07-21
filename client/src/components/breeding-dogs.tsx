import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import harperLeeImage from "@assets/Y30A3321Harper Lee_1753040309126.JPG?url";
import grizzlyImage from "@assets/Untitled design (90)_1753041702842.png?url";

export default function BreedingDogs() {
  const sires = [
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
        
        <Button className="w-full bg-navy text-white hover:bg-blue-800 font-montserrat font-medium py-3 rounded-lg transition-colors">
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
              Meet the exceptional female dogs that are the loving mothers of our outstanding puppies.
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
