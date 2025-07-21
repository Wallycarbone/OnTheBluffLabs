import { Card, CardContent } from "@/components/ui/card";
import { Eye, Bone, Dna, Heart } from "lucide-react";

export default function HealthTesting() {
  const healthTests = [
    {
      icon: Eye,
      title: "DNA & OFA",
      description: "We test for common Labrador genetic problems, plus hip dysplasia screening through OFA certification.",
    },
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
  ];

  const certifications = [
    {
      title: "AKC Breeder of Merit",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200",
    },
    {
      title: "OFA Health Certification",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200",
    },
    {
      title: "Championship Awards",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200",
    },
  ];

  return (
    <section id="health" className="py-20 bg-gray-50">
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

        <div className="mt-20 bg-white rounded-2xl shadow-xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-oswald font-normal tracking-wide mb-4" style={{color: '#11100f'}}>
              OUR CERTIFICATIONS
            </h3>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto">
              Recognized achievements and certifications that demonstrate our commitment to excellence in breeding.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 rounded-2xl p-6 mb-6 group-hover:bg-cream/30 transition-colors">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="mx-auto rounded-xl shadow-lg w-full h-48 object-cover group-hover:shadow-xl transition-shadow"
                  />
                </div>
                <h4 className="text-xl font-oswald font-normal tracking-wide" style={{color: '#11100f'}}>
                  {cert.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
