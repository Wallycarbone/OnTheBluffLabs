import { Card, CardContent } from "@/components/ui/card";
import { Eye, Bone, Dna, Heart } from "lucide-react";

export default function HealthTesting() {
  const healthTests = [
    {
      icon: Eye,
      title: "Eye Clearance",
      description: "Annual CERF examinations by board-certified veterinary ophthalmologists.",
    },
    {
      icon: Bone,
      title: "Hip & Elbow",
      description: "OFA certification for hip and elbow dysplasia on all breeding dogs.",
    },
    {
      icon: Dna,
      title: "DNA Testing",
      description: "Comprehensive genetic testing for hereditary conditions.",
    },
    {
      icon: Heart,
      title: "Heart Clearance",
      description: "Cardiac examinations by veterinary cardiologists.",
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
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6">
            Health Testing & Certifications
          </h2>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto">
            Our commitment to breeding healthy dogs through comprehensive health testing and certification.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {healthTests.map((test, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-golden bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <test.icon className="text-golden w-8 h-8" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-navy mb-2">
                {test.title}
              </h3>
              <p className="text-warm-gray">
                {test.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-3xl font-playfair font-bold text-navy text-center mb-8">
            Our Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="mx-auto mb-4 rounded-lg shadow-md w-full max-w-[300px] h-48 object-cover"
                />
                <h4 className="text-lg font-playfair font-bold text-navy">
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
