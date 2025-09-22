import React from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, CheckCircle, Heart, Star, GraduationCap, Sprout } from "lucide-react";
import trainingHeroImage from '@assets/Untitled design - 2025-09-22T131900.891_1758561548419.png';

export default function Training() {

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
    <div>
      {/* Hero Section with Background Image */}
      <section 
        className="relative h-96 flex items-center justify-end"
        style={{
          backgroundImage: `url(${trainingHeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top -120px',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0" style={{background: 'linear-gradient(to right, rgba(0,0,0,0.01), rgba(0,0,0,0.45))'}}></div>
        <div className="relative z-10 text-right text-white pr-8 md:pr-16">
          <h1 className="text-5xl md:text-6xl font-oswald font-normal mb-4 tracking-wide">
            THE LEGACY<br />LIVES ON
          </h1>
          <p className="text-xl md:text-2xl font-source-sans font-light">
            Training Tomorrow's Labradors
          </p>
        </div>
      </section>

      <section id="training" className="py-24" style={{backgroundColor: '#fffbe8'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Training Philosophy Essay */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <p className="font-source-sans text-lg leading-[1.6] mb-6 text-center" style={{color: '#4b4b4b'}}>
              In 2019, Swedish researchers found that dogs mirror their owners' stress levels with remarkable accuracy, highlighting the profound impact stress can have on both canine welfare and family life. <strong>Puppies exposed to stress during their critical developmental period can become trapped in a cycle where anxiety feeds their owner's frustration, which in turn heightens the dog's stress. Professionally trained puppies break this cycle, allowing families to start their relationship with calm, cooperative bonds.</strong>
            </p>
            
            <p className="font-source-sans text-lg leading-[1.6] mb-6 text-center" style={{color: '#4b4b4b'}}>
              The training process that unfolds at On the Bluff represents a systematic approach to canine development that addresses the full spectrum of skills necessary for modern family life. From the earliest stages, where puppies master fundamental cues like sit, down, and recall, through advanced protocols that include sustained stays, public socialization, and complex behavioral chains, each dog progresses through carefully structured phases designed to build both competence and confidence.
            </p>
          </div>
        </div>

        {/* Training Philosophy */}
        <div className="mb-20">
          <Card className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <CardContent className="p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-oswald font-normal mb-6 tracking-wide" style={{color: '#11100f'}}>
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
                    src="/attached_assets/Y30A2897LucyOliverpeacepaw (3)_1755544617044.JPG"
                    alt="Black Labrador puppy with colorful training balls, showcasing playful early socialization and developmental activities"
                    className="w-full h-96 object-cover rounded-xl shadow-lg"
                    style={{objectPosition: '50% 35%'}}
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
            
            <p className="font-source-sans text-lg leading-[1.6] mb-8 text-left" style={{color: '#4b4b4b'}}>
              By observing patterns across genetic lines, we refine both our breeding and training programs, continuously improving temperament, trainability, and emotional intelligence.
            </p>
            
            {/* Emphasized Result Statement */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-400 p-6 rounded-lg shadow-sm mb-12">
              <p className="font-source-sans text-xl font-semibold leading-[1.6] text-left" style={{color: '#2d3748'}}>
                <span className="text-amber-600 font-bold">The result:</span> puppies who enter their families as confident, emotionally stable companions, ready to form deep, lasting bonds and bring the intelligence, joy, and loyalty that make Labradors so beloved.
              </p>
            </div>
          </div>
        </div>

        {/* Training Services */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingServices.map((service, index) => (
              <Card key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Image Section */}
                <div className="h-80 overflow-hidden relative">
                  <img 
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    style={{objectPosition: service.imagePosition || '50% 50%'}}
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-7">
                  <div className="mb-5">
                    <h3 className="text-xl font-oswald font-normal tracking-wide mb-2" style={{color: '#11100f'}}>
                      {service.title}
                    </h3>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" style={{color: '#6d761d'}} />
                      <span className="text-sm font-montserrat font-medium" style={{color: '#6d761d'}}>
                        {service.duration}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-sm font-source-sans mb-6 leading-relaxed" style={{color: '#4b4b4b'}}>
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#6d761d'}}></div>
                        <span className="text-sm font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-20">
          <Card className="border-2 rounded-2xl shadow-xl overflow-hidden" style={{background: 'linear-gradient(135deg, #7a8020 0%, #6d761d 50%, #5a5f18 100%)', borderColor: '#7a8020'}}>
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-oswald font-normal mb-6 tracking-wide text-white">
                Start Your Puppy's Training Journey
              </h2>
              <p className="font-source-sans text-lg leading-relaxed mb-8 max-w-3xl mx-auto text-white">
                Our comprehensive training programs are designed to bring out the best in your Labrador. From foundational skills to advanced behavioral development, we'll work with you to ensure your puppy becomes the confident, well-trained companion your family deserves.
              </p>
              <div className="flex justify-center">
                <Button 
                  asChild
                  className="font-montserrat font-medium text-base h-auto py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all bg-white hover:bg-gray-50"
                  style={{color: '#6d761d'}}
                >
                  <Link href="/puppy-application" data-testid="link-apply-from-training">
                    Begin Your Journey
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
    </div>
  );
}