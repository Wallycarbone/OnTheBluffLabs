import { Card, CardContent } from "@/components/ui/card";
import healthyStartImage from "@assets/Puppies 5x4 (4 x 4 in) (2)_1754768185491.png";

export default function HealthTesting() {
  const healthTests = [
    {
      image: healthyStartImage,
      title: "Healthy Start",
      description: "From birth through early weeks, we provide optimal nutrition, veterinary care, and environmental enrichment for the strongest foundation.",
    },
    {
      image: "/attached_assets/Breeding Dogs 5x4 (5)_1754340347869.png",
      title: "Delay Spay & Neuter",
      description: "We recommend delaying spay and neuter procedures until after 24 months to allow proper joint and bone development.",
    },
    {
      image: "/attached_assets/Breeding Dogs 5x4 (6)_1754674032280.png",
      title: "Raw Dog Food",
      description: "Raw feeding promotes healthier coats, better digestion, stronger immune systems, and naturally cleaner teeth.",
    },
    {
      image: "/attached_assets/Y30A9681 (3)_1754673832851.jpg",
      title: "Reduce Vaccinations",
      description: "We carefully avoid unnecessary vaccinations to prevent immune system overload and maintain natural immunity.",
    },
    {
      image: "/attached_assets/Y30A9815 (7)_1754682245597.JPG",
      title: "DNA & OFA Testing",
      description: "We conduct comprehensive testing for common Labrador genetic conditions, plus hip dysplasia screening through OFA certification.",
    },
  ];



  return (
    <section id="health" className="py-24" style={{backgroundColor: '#fefefe'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-oswald font-normal mb-6 tracking-wide" style={{color: '#11100f'}}>
            HEALTH TESTING & CARE
          </h2>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto">
            Our holistic approach to canine wellness through natural health practices and essential testing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {healthTests.map((test, index) => (
            <Card key={index} className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-full h-48 rounded-xl overflow-hidden mx-auto mb-6">
                <img 
                  src={test.image} 
                  alt={`${test.title} - Health and wellness pillar`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-oswald font-normal tracking-wide mb-4" style={{color: '#11100f'}}>
                {test.title}
              </h3>
              <p className="leading-relaxed text-sm font-source-sans" style={{color: '#4b4b4b', lineHeight: '1.6'}}>
                {test.description}
              </p>
            </Card>
          ))}
        </div>


      </div>
    </section>
  );
}
