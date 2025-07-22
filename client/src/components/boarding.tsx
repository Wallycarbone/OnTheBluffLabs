import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Heart, Shield, Clock, Star, Users } from "lucide-react";

export default function Boarding() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const boardingFeatures = [
    {
      icon: <Home className="w-6 h-6" style={{color: '#6d761d'}} />,
      title: "Professional Training",
      description: "Daily training sessions with our training team using positive reinforcement methods."
    },
    {
      icon: <Heart className="w-6 h-6" style={{color: '#6d761d'}} />,
      title: "Lab Friendly Policies",
      description: "We welcome intact dogs and feed raw dog food, with policies specifically designed for Labrador temperaments and learning styles."
    },
    {
      icon: <Shield className="w-6 h-6" style={{color: '#6d761d'}} />,
      title: "Customized Programs",
      description: "Training plans tailored to your dog's specific behavioral needs and your family's goals."
    },
    {
      icon: <Users className="w-6 h-6" style={{color: '#6d761d'}} />,
      title: "Owner Education",
      description: "Comprehensive handoff training to ensure you can maintain and build upon your dog's new skills."
    }
  ];

  return (
    <section id="boarding" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-oswald font-normal mb-6 tracking-wide" style={{color: '#11100f'}}>
            BOARD & TRAIN PROGRAM
          </h2>
          <p className="text-xl font-source-sans max-w-3xl mx-auto" style={{color: '#4b4b4b'}}>
            Comprehensive board and train services combining professional training with premium boarding care.
          </p>
        </div>

        {/* Main Boarding Information */}
        <div className="mb-16">
          <Card className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-oswald font-normal mb-4 tracking-wide" style={{color: '#11100f'}}>
                    Professional Training Immersion
                  </h3>
                  <p className="text-base font-source-sans mb-4 leading-relaxed" style={{color: '#4b4b4b'}}>
                    Our board and train program combines the benefits of professional training with premium boarding care. Your dog stays 
                    at our facility while receiving intensive, daily training sessions from our training team.
                  </p>
                  <p className="text-base font-source-sans mb-6 leading-relaxed" style={{color: '#4b4b4b'}}>
                    Using gentle, positive reinforcement methods, we reinforce good behavior, relearn positive habits, and teach new skills 
                    in our controlled training environment. This immersive approach accelerates learning and helps dogs generalize their training to real-world situations.
                  </p>
                  <div className="flex items-center mb-4">
                    <Clock className="w-5 h-5 mr-3" style={{color: '#6d761d'}} />
                    <span className="text-sm font-montserrat font-medium" style={{color: '#4b4b4b'}}>
                      2-week, 4-week, and 6-week programs available
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <img 
                    src="/attached_assets/Cassie_1753107944446.webp"
                    alt="Happy Labrador enjoying boarding care at On The Bluff Labradors"
                    className="w-full h-96 object-cover rounded-xl shadow-lg"
                    style={{objectPosition: '50% 30%'}}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Boarding Features */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardingFeatures.map((feature, index) => (
              <Card key={index} className="bg-white rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-oswald font-normal mb-3 tracking-wide" style={{color: '#11100f'}}>
                    {feature.title}
                  </h3>
                  <p className="text-sm font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What's Included */}
        <div className="mb-16">
          <Card className="bg-white rounded-xl shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-oswald font-normal mb-6 text-center tracking-wide" style={{color: '#11100f'}}>
                What's Included
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Star className="w-4 h-4 mr-3 mt-1 flex-shrink-0" style={{color: '#6d761d'}} />
                    <span className="text-sm font-source-sans" style={{color: '#4b4b4b'}}>
                      Daily professional training sessions with our training team
                    </span>
                  </div>
                  <div className="flex items-start">
                    <Star className="w-4 h-4 mr-3 mt-1 flex-shrink-0" style={{color: '#6d761d'}} />
                    <span className="text-sm font-source-sans" style={{color: '#4b4b4b'}}>
                      Basic obedience: sit, stay, down, come, heel
                    </span>
                  </div>
                  <div className="flex items-start">
                    <Star className="w-4 h-4 mr-3 mt-1 flex-shrink-0" style={{color: '#6d761d'}} />
                    <span className="text-sm font-source-sans" style={{color: '#4b4b4b'}}>
                      House training and crate training reinforcement
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Star className="w-4 h-4 mr-3 mt-1 flex-shrink-0" style={{color: '#6d761d'}} />
                    <span className="text-sm font-source-sans" style={{color: '#4b4b4b'}}>
                      Leash walking and loose leash training
                    </span>
                  </div>
                  <div className="flex items-start">
                    <Star className="w-4 h-4 mr-3 mt-1 flex-shrink-0" style={{color: '#6d761d'}} />
                    <span className="text-sm font-source-sans" style={{color: '#4b4b4b'}}>
                      Behavioral modification for specific issues
                    </span>
                  </div>
                  <div className="flex items-start">
                    <Star className="w-4 h-4 mr-3 mt-1 flex-shrink-0" style={{color: '#6d761d'}} />
                    <span className="text-sm font-source-sans" style={{color: '#4b4b4b'}}>
                      Owner education session upon pickup
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-white rounded-xl shadow-lg max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-oswald font-normal mb-4 tracking-wide" style={{color: '#11100f'}}>
                Transform Your Dog's Behavior
              </h3>
              <p className="text-base font-source-sans mb-6 leading-relaxed" style={{color: '#4b4b4b'}}>
                Limited spaces available for our intensive board and train programs. Contact us to discuss your dog's training needs.
              </p>
              <Button 
                onClick={scrollToContact}
                className="px-8 py-3 font-montserrat font-medium text-base h-auto rounded-lg"
                style={{backgroundColor: '#6d761d', color: '#fefefe'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#644f06'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6d761d'}
              >
                Inquire About Board & Train
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}