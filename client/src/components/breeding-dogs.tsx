import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";

export default function BreedingDogs() {
  const dogs = [
    {
      name: "CH Thunder's Legacy",
      gender: "Male",
      color: "Yellow",
      age: "4 years",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      description: "Outstanding temperament and conformation. Multiple Best in Show winner.",
    },
    {
      name: "CH Bluff's Golden Belle",
      gender: "Female",
      color: "Yellow",
      age: "3 years",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      description: "Exceptional mother with perfect breed type and gentle nature.",
    },
    {
      name: "CH Chocolate Dream",
      gender: "Female",
      color: "Chocolate",
      age: "5 years",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      description: "Rare chocolate coloring with exceptional hunting instincts.",
    },
  ];

  return (
    <section id="breeding" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6">
            Our Breeding Dogs
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
                <h3 className="text-xl font-playfair font-bold text-navy mb-2">
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
