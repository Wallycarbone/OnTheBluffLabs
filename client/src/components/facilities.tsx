import { Card, CardContent } from "@/components/ui/card";
import wallyCarlaImage from "@assets/Untitled design (92)_1753108643199.png";

export default function Team() {
  const teamMembers = [
    {
      name: "Wally & Carla",
      role: "Owners & Founders",
      description: "The passionate founders behind On The Bluff Labradors, dedicated to breeding exceptional Labradors with strong temperaments and health. Their hands-on approach ensures every puppy receives personalized care from birth.",
      image: wallyCarlaImage,
    },
    {
      name: "Dr. Sarah Mitchell",
      role: "Veterinary Consultant",
      description: "Board-certified veterinarian who oversees our health testing protocols and provides ongoing medical care for our breeding dogs and puppies.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    },
    {
      name: "Mike",
      role: "Facility Manager & Breeding Assistant",
      description: "Ensures our dogs receive the best daily care, manages feeding protocols, and assists with breeding program logistics and puppy socialization.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    },
    {
      name: "Lisa",
      role: "Puppy Socialization & Family Coordinator",
      description: "Specializes in early puppy socialization and helps match families with the perfect puppy based on lifestyle and preferences.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c96029d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-oswald font-normal mb-6 tracking-wide" style={{color: '#11100f'}}>
            OUR TEAM
          </h2>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto">
            Meet the dedicated professionals who make our exceptional breeding program possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-white rounded-2xl shadow-xl text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-oswald font-normal tracking-wide mb-2" style={{color: '#11100f'}}>
                  {member.name}
                </h3>
                <p className="text-sm font-medium mb-4" style={{color: '#6d761d'}}>
                  {member.role}
                </p>
                <p className="text-warm-gray text-sm leading-relaxed">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
