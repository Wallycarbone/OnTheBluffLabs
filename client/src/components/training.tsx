import React from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, CheckCircle, Heart, Star, GraduationCap, Sprout } from "lucide-react";
import trainingHeroImage from '@assets/Untitled design - 2025-09-22T163745.168_1758573553127.png';

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
          backgroundPosition: 'center calc(50% + 40px)',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0" style={{background: 'linear-gradient(to right, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0.85) 100%)'}}></div>
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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-oswald font-normal mb-8 tracking-wide" style={{color: '#11100f'}}>
              Early Training, Lasting Belonging
            </h2>
            <p className="font-source-sans text-lg leading-[1.6] text-center" style={{color: '#4b4b4b'}}>
              From the very first weeks, our puppies are guided through experiences that shape not only how they behave, but how they feel about the world. Each step—whether it's resting quietly in the kitchen, riding in the car, or learning to sit—builds confidence and trust. The goal isn't just obedience. It's a foundation for belonging: a puppy who moves easily through family life, secure in themselves, and ready to grow into a steady lifelong companion.
            </p>
          </div>
        </div>

        </div>
      </section>

      {/* The Bachelor's Degree Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-oswald font-normal mb-6 tracking-wide" style={{color: '#11100f'}}>
                The Bachelor's Degree — $7,500
              </h3>
              <p className="text-base font-source-sans mb-4 leading-relaxed" style={{color: '#4b4b4b'}}>
                Puppy manners are essential, and the Bachelor's Degree is where life as a family companion begins. Training starts at 7 weeks of age and extends through nearly 200 hours of guidance and socialization.
              </p>
              <p className="text-base font-source-sans mb-4 leading-relaxed" style={{color: '#4b4b4b'}}>
                Graduates of this program leave with more than the basics. They recognize beginning cues through both verbal and hand cues. They are comfortable in the kitchen, at the dinner table, and in the quiet hum of family evenings. The Bachelor's Degree lays a foundation strong enough for any home to continue building upon.
              </p>
              <p className="text-base font-source-sans mb-4 leading-relaxed" style={{color: '#4b4b4b'}}>
                We provide the curriculum and ongoing support, but the real partnership begins when your puppy comes home. Families can expect to spend about 30 minutes a day reinforcing what has already been learned. For those willing to carry the lessons forward, this program builds the bridge—from our home, where your puppy was born, to yours.
              </p>
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
          
          {/* Training Details for Bachelor's Degree */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Lifestyle Training Column */}
            <div>
              <h3 className="text-2xl font-oswald font-normal mb-6 tracking-wide" style={{color: '#11100f'}}>
                Lifestyle Training
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-source-sans font-semibold mb-2" style={{color: '#11100f'}}>
                    Kitchen Time:
                  </h4>
                  <p className="text-base font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                    Puppies spend stretches in the kitchen, padding across the floor while meals are prepared, hearing the clatter of pots and catching the drift of new smells. In that busy room, they learn how to be present without being underfoot.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-source-sans font-semibold mb-2" style={{color: '#11100f'}}>
                    Family Time:
                  </h4>
                  <p className="text-base font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                    Evenings are quieter. Puppies settle nearby while conversations wander, and the computer or TV monitor flickers in the background. They come to know that belonging doesn't always mean being the center of attention.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-source-sans font-semibold mb-2" style={{color: '#11100f'}}>
                    Travel Readiness:
                  </h4>
                  <p className="text-base font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                    The car becomes familiar in small steps—doors opening, engines starting, the rise and fall of the road. Over time, the motion itself begins to feel like the start of something worth looking forward to.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-source-sans font-semibold mb-2" style={{color: '#11100f'}}>
                    Vet Socialization:
                  </h4>
                  <p className="text-base font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                    Gentle handling of paws, ears, and teeth is woven into everyday play. By the time a stethoscope appears, it feels like more of the same—just another set of hands, another kind of care.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-source-sans font-semibold mb-2" style={{color: '#11100f'}}>
                    Older Dog Socialization:
                  </h4>
                  <p className="text-base font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                    Time with our steady adults gives the young ones models to follow. Puppies learn the subtle give-and-take of canine manners, lessons best taught by example.
                  </p>
                </div>
              </div>
            </div>

            {/* Behavioral Training Column */}
            <div>
              <h3 className="text-2xl font-oswald font-normal mb-6 tracking-wide" style={{color: '#11100f'}}>
                Behavioral Training
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-source-sans font-semibold mb-2" style={{color: '#11100f'}}>
                    Leash Training:
                  </h4>
                  <p className="text-base font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                    A light lead, a few careful steps, a pause when the pulling starts—bit by bit, the rhythm of walking together emerges.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-source-sans font-semibold mb-2" style={{color: '#11100f'}}>
                    Crate Training:
                  </h4>
                  <p className="text-base font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                    The crate is introduced as a place of calm. Short sessions, quiet rewards, the gentle habit of resting. What begins as an enclosure slowly becomes a den.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-source-sans font-semibold mb-2" style={{color: '#11100f'}}>
                    Sit & Stay:
                  </h4>
                  <p className="text-base font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                    A hand motion, a single word, the stillness that follows. First for seconds, then for longer.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-source-sans font-semibold mb-2" style={{color: '#11100f'}}>
                    Fetch:
                  </h4>
                  <p className="text-base font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                    A ball tossed, the joyful chase, the triumphant return. Again and again. The game becomes its own reward.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-source-sans font-semibold mb-2" style={{color: '#11100f'}}>
                    House Training:
                  </h4>
                  <p className="text-base font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                    The habit - instilled by nature and shaped by reinforcement - to use the bathroom outside in a designated area.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-source-sans font-semibold mb-2" style={{color: '#11100f'}}>
                    Come When Called:
                  </h4>
                  <p className="text-base font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                    The beginning of a cue that spells freedom in nature.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="training" className="py-24" style={{backgroundColor: '#fffbe8'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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