import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Puppies() {
  const puppies = [
    {
      name: "Sunny",
      gender: "Female",
      color: "Yellow",
      age: "8 weeks",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    },
    {
      name: "Cocoa",
      gender: "Male",
      color: "Chocolate",
      age: "8 weeks",
      image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    },
    {
      name: "Storm",
      gender: "Male",
      color: "Black",
      age: "8 weeks",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    },
    {
      name: "Daisy",
      gender: "Female",
      color: "Yellow",
      age: "8 weeks",
      image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    },
  ];

  return (
    <section id="puppies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6">
            Available Puppies
          </h2>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto">
            Our current litter of exceptional Labrador puppies, ready to join loving families.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {puppies.map((puppy, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={puppy.image} 
                alt={`${puppy.color} Labrador puppy`} 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-bold text-navy mb-2">
                  {puppy.name}
                </h3>
                <p className="text-warm-gray mb-2">
                  {puppy.gender} • {puppy.color} • {puppy.age}
                </p>
                <div className="flex items-center mb-4">
                  <Star className="text-golden mr-1 w-4 h-4 fill-current" />
                  <span className="text-sm text-warm-gray">Champion Bloodline</span>
                </div>
                <Button className="w-full bg-golden text-white hover:bg-yellow-600 font-montserrat font-medium">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
