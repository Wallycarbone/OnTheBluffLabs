import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, CheckCircle, Heart, Star } from "lucide-react";

export default function Training() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trainingServices = [
    {
      title: "Puppy Foundation Training",
      description: "Essential socialization, basic commands, and house training for puppies 8-16 weeks",
      features: ["Basic commands (sit, stay, come)", "House training", "Crate training", "Socialization basics"],
      duration: "4-week program",
      icon: <Heart className="w-6 h-6" style={{color: '#6d761d'}} />
    },
    {
      title: "Basic Obedience",
      description: "Comprehensive training for well-mannered family companions",
      features: ["Leash walking", "Door manners", "Recall training", "Stay commands"],
      duration: "6-week program", 
      icon: <Award className="w-6 h-6" style={{color: '#6d761d'}} />
    },
    {
      title: "Behavioral Consultation",
      description: "Professional assessment and customized training plans for specific behavioral issues",
      features: ["Behavioral assessment", "Custom training plan", "Follow-up support", "Family coaching"],
      duration: "Initial consultation + follow-ups",
      icon: <Users className="w-6 h-6" style={{color: '#6d761d'}} />
    }
  ];

  return (
    <section id="training" className="py-20" style={{backgroundColor: '#f8f9fa'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-oswald font-normal mb-6 tracking-wide" style={{color: '#11100f'}}>
            PROFESSIONAL TRAINING
          </h2>
          <p className="text-xl font-source-sans max-w-3xl mx-auto" style={{color: '#4b4b4b'}}>
            Led by our Training Director, Jess Kelley-Madera CPDT-KA, 
            using gentle, positive reinforcement methods to build strong bonds between dogs and families.
          </p>
        </div>

        {/* Training Philosophy */}
        <div className="mb-16">
          <Card className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-oswald font-normal mb-4 tracking-wide" style={{color: '#11100f'}}>
                    Our Training Philosophy
                  </h3>
                  <p className="text-base font-source-sans mb-4 leading-relaxed" style={{color: '#4b4b4b'}}>
                    Our Labradors are bred for naturally intelligent, cooperative temperaments that provide an 
                    exceptional foundation for training. We build upon these inherent qualities using gentle, 
                    veterinarian-recommended methods that strengthen the natural bond between dog and family. 
                    By working with your dog's intelligence and personality, we create lasting training success.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{color: '#6d761d'}} />
                      <span className="text-sm font-source-sans" style={{color: '#4b4b4b'}}>
                        Veterinarian-recommended positive reinforcement methods that build confidence
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{color: '#6d761d'}} />
                      <span className="text-sm font-source-sans" style={{color: '#4b4b4b'}}>
                        Building on natural intelligence and eager temperaments
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{color: '#6d761d'}} />
                      <span className="text-sm font-source-sans" style={{color: '#4b4b4b'}}>
                        Family-focused approach ensuring lasting results
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <img 
                    src="/attached_assets/Y30A9681 (2)_1753209299551.JPG"
                    alt="Professional dog training session demonstrating hand signals with red Labrador"
                    className="w-full h-96 object-cover rounded-xl shadow-lg"
                    style={{objectPosition: '50% 45%'}}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Training Services */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingServices.map((service, index) => (
              <Card key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    {service.icon}
                    <div className="ml-3">
                      <h3 className="text-lg font-oswald font-normal tracking-wide" style={{color: '#11100f'}}>
                        {service.title}
                      </h3>
                      <div className="flex items-center mt-1">
                        <Clock className="w-4 h-4 mr-1" style={{color: '#6d761d'}} />
                        <span className="text-xs font-montserrat font-medium" style={{color: '#6d761d'}}>
                          {service.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm font-source-sans mb-4 leading-relaxed" style={{color: '#4b4b4b'}}>
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <Star className="w-3 h-3 mr-2 mt-1 flex-shrink-0" style={{color: '#6d761d'}} />
                        <span className="text-xs font-source-sans" style={{color: '#4b4b4b'}}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={scrollToContact}
                    className="w-full font-montserrat font-medium text-sm h-auto py-3 rounded-lg"
                    style={{backgroundColor: '#6d761d', color: '#fefefe'}}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#644f06'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6d761d'}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trainer Credentials */}
        <div className="text-center">
          <Card className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <Award className="w-8 h-8 mr-3" style={{color: '#6d761d'}} />
                <h3 className="text-2xl font-oswald font-normal tracking-wide" style={{color: '#11100f'}}>
                  Professional Credentials
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="text-lg font-oswald font-normal mb-3" style={{color: '#11100f'}}>
                    Jess Kelley-Madera, CPDT-KA
                  </h4>
                  <p className="text-sm font-source-sans mb-4" style={{color: '#4b4b4b'}}>
                    Our Training Director brings years of professional experience 
                    and certification from the Certification Council for Professional Dog Trainers.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5" style={{color: '#6d761d'}} />
                    <span className="text-sm font-source-sans" style={{color: '#4b4b4b'}}>
                      Certified Professional Dog Trainer - Knowledge Assessed (CPDT-KA)
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5" style={{color: '#6d761d'}} />
                    <span className="text-sm font-source-sans" style={{color: '#4b4b4b'}}>
                      Specialized in positive reinforcement behavioral methods
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5" style={{color: '#6d761d'}} />
                    <span className="text-sm font-source-sans" style={{color: '#4b4b4b'}}>
                      Extensive experience with Labrador temperament and training
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}