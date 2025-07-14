import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Puppies() {
  const litters = [
    {
      name: "Spring 2024 Litter",
      sire: "Champion Jasper",
      dam: "Lady Bella",
      birthDate: "March 15, 2024",
      puppiesCount: 8,
      availableCount: 3,
      colors: ["Yellow", "Chocolate"],
      readyDate: "May 10, 2024",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      status: "Available"
    },
    {
      name: "Summer 2024 Litter",
      sire: "Noble Duke",
      dam: "Sweet Molly",
      birthDate: "June 20, 2024",
      puppiesCount: 6,
      availableCount: 2,
      colors: ["Yellow", "Black"],
      readyDate: "August 15, 2024",
      image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      status: "Available"
    },
    {
      name: "Fall 2024 Litter",
      sire: "Atticus Finch",
      dam: "Golden Grace",
      birthDate: "September 10, 2024",
      puppiesCount: 7,
      availableCount: 4,
      colors: ["Yellow", "Chocolate", "Black"],
      readyDate: "November 5, 2024",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      status: "Available"
    }
  ];

  return (
    <section id="puppies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-oswald font-normal mb-6 tracking-wide" style={{color: '#11100f'}}>
            AVAILABLE LITTERS
          </h2>
          <p className="text-xl font-source-sans max-w-3xl mx-auto" style={{color: '#4b4b4b'}}>
            Our current litters of exceptional Labrador puppies from champion bloodlines, ready to join loving families.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {litters.map((litter, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={litter.image} 
                alt={`${litter.name} Labrador litter`} 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-oswald font-normal mb-2 tracking-wide" style={{color: '#11100f'}}>
                  {litter.name}
                </h3>
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
                    <span className="font-medium">Available:</span> {litter.availableCount} of {litter.puppiesCount} puppies
                  </p>
                  <p className="text-sm font-source-sans" style={{color: '#4b4b4b'}}>
                    <span className="font-medium">Colors:</span> {litter.colors.join(", ")}
                  </p>
                </div>
                <div className="flex items-center mb-4">
                  <Star className="w-4 h-4 fill-current mr-1" style={{color: '#6d761d'}} />
                  <span className="text-sm font-source-sans" style={{color: '#4b4b4b'}}>Champion Bloodline</span>
                </div>
                <Button 
                  className="w-full font-montserrat font-medium h-auto py-3"
                  style={{backgroundColor: '#6d761d', color: '#fefefe'}}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#644f06'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6d761d'}
                >
                  Inquire About Litter
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
