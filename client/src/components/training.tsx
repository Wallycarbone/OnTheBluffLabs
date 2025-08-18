import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, CheckCircle, Heart, Star, GraduationCap, Sprout } from "lucide-react";

export default function Training() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trainingServices = [
    {
      title: "Bachelor's Degree",
      description: "Essential Socialization, Foundational Training & House Manners for Puppies 8–10 Weeks",
      features: ["Bring the puppy home after their initial fear period, reducing stress from day one", "Establishes healthy routines for potty training, crate comfort, and polite behavior in the home", "Helps you and your puppy start building clear communication and trust right away", "Includes virtual training support and a free day of board and train with the purchase of a board & train week in the future"],
      duration: "2-week program",
      icon: <Sprout className="w-6 h-6" style={{color: '#6d761d'}} />,
      image: "/attached_assets/Puppies 5x4 (3)_1755534520644.png",
      imageAlt: "Young black Labrador puppy with colorful training toys, representing early socialization and play-based learning",
      imagePosition: "50% 40%"
    },
    {
      title: "Master's Degree",
      description: "Next-Level Puppy Foundations: Socialization & Training for Polite, Well-Mannered Family Companions 8–14 Weeks",
      features: ["Everyone in the Bachelor's program, plus:", "Essential cues like stay, which to promotes patience and self-control", "Establishes healthy leash walking habits for enjoyable, stress-free outings", "Introduces public socialization to build confidence in new environments and around people", "Includes virtual training support and a free day of board & train with the purchase of a future week-long program"],
      duration: "6-week program", 
      icon: <Award className="w-6 h-6" style={{color: '#6d761d'}} />,
      image: "/attached_assets/Puppies 5x4 (4)_1755535459095.png",
      imageAlt: "Young golden Labrador puppy outdoors demonstrating confident stance and public socialization readiness",
      imagePosition: "50% 50%"
    },
    {
      title: "Puppy PhD",
      description: "Elite Puppy Program: Comprehensive Evaluation & One-on-One Training Built Just for Your Home and Family",
      features: ["Receive a comprehensive evaluation to design a training plan tailored to your puppy and family's unique goals", "Address specific needs with fully customized lessons beyond standard obedience", "Develop advanced focus, impulse control, and calm behaviors essential for therapy or service prospects", "Strengthen confidence and adaptability through guided socialization in diverse environments", "Foster deep connection and communication, preparing your puppy for meaningful partnership work", "Benefit from ongoing trainer support and flexible program adjustments as your puppy progresses"],
      duration: "4-month program",
      icon: <GraduationCap className="w-6 h-6" style={{color: '#6d761d'}} />,
      image: "/attached_assets/Black and White Minimalist New Collection Social Media Mockup Instagram Post (78)_1755526844923.png",
      imageAlt: "Chocolate Labrador showcasing advanced training and confident temperament in outdoor setting",
      imagePosition: "50% 60%"
    }
  ];

  return (
    <section id="training" className="py-24" style={{backgroundColor: '#fffbe8'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-oswald font-normal mb-6 tracking-wide" style={{color: '#11100f'}}>
            THE LEGACY LIVES ON
          </h2>
          <h3 className="text-2xl md:text-3xl font-source-sans font-light mb-8 tracking-wide" style={{color: '#6d761d'}}>
            Training Tomorrow's Labradors
          </h3>
        </div>

        {/* Training Philosophy Essay - Part 1 with Image */}
        <div className="mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/attached_assets/Y30A2897LucyOliverpeacepaw (3)_1755544486604.JPG"
                  alt="Black Labrador puppy with colorful training balls, showcasing playful early socialization and developmental activities"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  style={{objectPosition: '50% 35%'}}
                />
              </div>
              
              <div>
                <p className="font-source-sans text-lg leading-[1.6] mb-6 text-left" style={{color: '#4b4b4b'}}>
                  In 2019, Swedish researchers found that dogs mirror their owners' stress levels with remarkable accuracy, highlighting the profound impact stress can have on both canine welfare and family life. <strong>Puppies exposed to stress during their critical developmental period can become trapped in a cycle where anxiety feeds their owner's frustration, which in turn heightens the dog's stress. Professionally trained puppies break this cycle, allowing families to start their relationship with calm, cooperative bonds.</strong>
                </p>
                
                <p className="font-source-sans text-lg leading-[1.6] mb-6 text-left" style={{color: '#4b4b4b'}}>
                  The training process that unfolds at On the Bluff represents a systematic approach to canine development that addresses the full spectrum of skills necessary for modern family life. From the earliest stages, where puppies master fundamental cues like sit, down, and recall, through advanced protocols that include sustained stays, public socialization, and complex behavioral chains, each dog progresses through carefully structured phases designed to build both competence and confidence.
                </p>
              </div>
            </div>
          </div>
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
                    Our Labradors are bred for naturally intelligent, cooperative temperaments that provide an exceptional foundation for training. Our training center builds upon these inherent qualities using gentle methods that strengthen the natural bond between dog and family.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{color: '#6d761d'}} />
                      <span className="text-sm font-source-sans" style={{color: '#4b4b4b'}}>
                        Individual evaluation that guides each puppy's program
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{color: '#6d761d'}} />
                      <span className="text-sm font-source-sans" style={{color: '#4b4b4b'}}>
                        Evidence-based positive reinforcement methods that build confidence
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{color: '#6d761d'}} />
                      <span className="text-sm font-source-sans" style={{color: '#4b4b4b'}}>
                        Ongoing behavior support available after puppy pickup
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <img 
                    src="/attached_assets/Y30A3361chehkovaspinglow (1)_1754773436225.JPG"
                    alt="Adorable chocolate Lab puppy with training toys, showcasing early development and learning readiness"
                    className="w-full h-96 object-cover rounded-xl shadow-lg"
                    style={{objectPosition: '50% 40%'}}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Training Philosophy Essay - Part 2 */}
        <div className="mb-20">
          <div className="max-w-5xl mx-auto">
            <p className="font-source-sans text-lg leading-[1.6] mb-6 text-left" style={{color: '#4b4b4b'}}>
              Perhaps the most valuable aspect of our integrated program is how it allows each puppy to reach their individual potential while maintaining the behavioral foundation necessary for family life. We don't train every dog identically—we develop their unique abilities while ensuring they all possess the core skills necessary for success. <strong>This approach creates what researchers call "confident versatility"—dogs who are both reliably well-behaved and adaptable to new situations.</strong>
            </p>
            
            <p className="font-source-sans text-lg leading-[1.6] mb-12 text-left" style={{color: '#4b4b4b'}}>
              By observing patterns across genetic lines, we refine both our breeding and training programs, continuously improving temperament, trainability, and emotional intelligence. <strong>The result: puppies who enter their families as confident, emotionally stable companions, ready to form deep, lasting bonds and bring the intelligence, joy, and loyalty that make Labradors so beloved.</strong>
            </p>
          </div>
        </div>

        {/* Training Services */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingServices.map((service, index) => (
              <Card key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Image Section */}
                <div className="h-80 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover"
                    style={{objectPosition: service.imagePosition || '50% 50%'}}
                  />
                </div>
                
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


      </div>
    </section>
  );
}