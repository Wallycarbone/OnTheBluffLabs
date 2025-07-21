import { Card, CardContent } from "@/components/ui/card";

export default function Facilities() {
  const facilities = [
    {
      title: "Indoor/Outdoor Facilities",
      description: "Climate-controlled indoor areas with access to spacious outdoor runs for exercise and play.",
      image: "https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    },
    {
      title: "Whelping & Nursery",
      description: "Dedicated areas for birthing and early puppy development with 24/7 monitoring and care.",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    },
    {
      title: "Exercise & Training Areas",
      description: "Large, secure areas for exercise, training, and socialization activities.",
      image: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    },
    {
      title: "Grooming & Health Care",
      description: "Professional grooming stations and veterinary care facilities on-site.",
      image: "https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <Card key={index} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={facility.image} 
                alt={facility.title} 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-2xl font-playfair font-bold text-navy mb-4">
                  {facility.title}
                </h3>
                <p className="text-warm-gray">
                  {facility.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
