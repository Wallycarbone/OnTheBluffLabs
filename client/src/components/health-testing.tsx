import { Card, CardContent } from "@/components/ui/card";
import { Eye, Bone, Dna, Heart } from "lucide-react";

export default function HealthTesting() {
  const healthTests = [
    {
      icon: Bone,
      title: "Delay Spay & Neuter",
      description: "We recommend delaying spay/neuter until after 24 months to allow proper joint and bone development.",
    },
    {
      icon: Dna,
      title: "Raw Dog Food",
      description: "Raw feeding promotes healthier coats, better digestion, stronger immune systems, and cleaner teeth naturally.",
    },
    {
      icon: Heart,
      title: "Reduce Vaccinations",
      description: "We avoid unnecessary vaccinations to prevent immune system overload and maintain natural immunity.",
    },
    {
      icon: Eye,
      title: "DNA & OFA",
      description: "We test for common Labrador genetic problems, plus hip dysplasia screening through OFA certification.",
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {healthTests.map((test, index) => (
            <Card key={index} className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-golden bg-opacity-15 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <test.icon className="text-golden w-10 h-10" />
              </div>
              <h3 className="text-xl font-oswald font-normal tracking-wide mb-4" style={{color: '#11100f'}}>
                {test.title}
              </h3>
              <p className="text-warm-gray leading-relaxed text-sm">
                {test.description}
              </p>
            </Card>
          ))}
        </div>


      </div>
    </section>
  );
}
