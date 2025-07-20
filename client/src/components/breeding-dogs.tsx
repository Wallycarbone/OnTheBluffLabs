import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";

export default function BreedingDogs() {
  const dogs = [
    {
      name: "Atticus Finch",
      gender: "Male",
      color: "Yellow",
      age: "Retired",
      image: "https://i0.wp.com/ontheblufflabradors.com/wp-content/uploads/2024/12/Atticus.jpeg?resize=1080%2C721&ssl=1",
      description: "Outstanding English Labrador with exceptional temperament and conformation. Now retired from breeding.",
    },
    {
      name: "Oliver",
      gender: "Male",
      color: "Yellow",
      age: "Active Stud",
      image: "https://i0.wp.com/ontheblufflabradors.com/wp-content/uploads/2024/12/Atticus.jpeg?resize=1080%2C721&ssl=1",
      description: "Proven sire with excellent bloodlines and gentle temperament.",
    },
    {
      name: "Luna",
      gender: "Female",
      color: "Yellow",
      age: "Breeding Female",
      image: "https://i0.wp.com/ontheblufflabradors.com/wp-content/uploads/2024/12/Atticus.jpeg?resize=1080%2C721&ssl=1",
      description: "Exceptional mother with perfect breed type and loving nature.",
    },
  ];

  return (
    <section id="breeding" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-oswald font-normal mb-6 tracking-wide" style={{color: '#11100f'}}>
            OUR BREEDING DOGS
          </h2>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto">
            Meet the exceptional dogs that form the foundation of our breeding program.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dogs.map((dog, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={dog.image} 
                alt={`Champion ${dog.color} Labrador`} 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-oswald font-normal tracking-wide mb-2" style={{color: '#11100f'}}>
                  {dog.name}
                </h3>
                <p className="text-warm-gray mb-2">
                  {dog.gender} • {dog.color} • {dog.age}
                </p>
                <div className="flex items-center mb-4">
                  <Trophy className="text-golden mr-1 w-4 h-4" />
                  <span className="text-sm text-warm-gray">AKC Champion</span>
                </div>
                <p className="text-sm text-warm-gray mb-4">
                  {dog.description}
                </p>
                <Button className="w-full bg-navy text-white hover:bg-blue-800 font-montserrat font-medium">
                  View Pedigree
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
