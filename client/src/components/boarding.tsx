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
      title: "Lab-Specific Solutions",
      description: "We have solutions designed specifically for Labradors, tailored to their unique temperaments and learning styles."
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
    <section id="boarding" className="py-24" style={{backgroundColor: '#fefefe'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-oswald font-normal mb-6 tracking-wide" style={{color: '#11100f'}}>
            RETREAT TO THE BLUFF
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 rounded-full" style={{backgroundColor: '#6d761d'}}></div>
          <p className="text-xl font-source-sans max-w-3xl mx-auto" style={{color: '#4b4b4b'}}>
            Shaping Lifelong Companions Through Focused Board and Train
          </p>
        </div>

        {/* Essay Section */}
        <div className="mb-16">
          <Card className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-6 font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
              <p className="text-lg">
                At On The Bluff Labradors, every dog carries forward a legacy — decades of careful breeding, intelligence, and gentle strength that define the English Labrador. Retreat to the Bluff is more than a training program; it's a dedicated time away where your adult dog can grow, learn, and thrive.
              </p>
              
              <p className="text-lg">
                Set in a quiet corner of our serene grounds, your dog receives personalized instruction and structured socialization, guided by trainers who understand the Labrador temperament inside and out. This focused environment accelerates learning, builds confidence, and shapes lasting, positive habits.
              </p>
              
              <div className="text-lg">
                <p className="mb-4 font-medium" style={{color: '#11100f'}}>What makes Retreat to the Bluff special:</p>
                <ul className="space-y-3 pl-0">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" style={{backgroundColor: '#6d761d'}}></span>
                    <span><strong style={{color: '#11100f'}}>Labrador-Specific Methodology:</strong> Cultivating the traits that make Labradors extraordinary — loyalty, intelligence, and companionship.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" style={{backgroundColor: '#6d761d'}}></span>
                    <span><strong style={{color: '#11100f'}}>Tailored Training:</strong> Every plan is customized to your dog's temperament and needs.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" style={{backgroundColor: '#6d761d'}}></span>
                    <span><strong style={{color: '#11100f'}}>Focused Transformation:</strong> Away from everyday distractions, growth happens quickly and with care.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" style={{backgroundColor: '#6d761d'}}></span>
                    <span><strong style={{color: '#11100f'}}>Stress-Free Environment:</strong> With our gentle host dog, Lilly, your dog feels calm, safe, and supported throughout their stay.</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-lg">
                Retreat to the Bluff isn't just training — it's a transformational experience, honoring the heritage of the Labrador while shaping your companion for a lifetime of joy, confidence, and companionship.
              </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Boarding Information */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-oswald font-normal mb-4 tracking-wide" style={{color: '#11100f'}}>
                    Focused Training on Everyday Behaviors
                  </h3>
                  <p className="text-base font-source-sans mb-4 leading-relaxed" style={{color: '#4b4b4b'}}>
                    At On The Bluff, we know that every adult dog has the potential to grow and thrive with the right guidance. Our goal is not just manners — it's helping you and your dog establish a foundation of positive habits that make everyday life more harmonious. Some of the behaviors we are most often asked to work on include:
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#6d761d'}}></span>
                      <span className="text-base font-source-sans" style={{color: '#4b4b4b'}}>
                        <strong style={{color: '#11100f'}}>Leash Walking:</strong> Teaching calm, focused walking so you and your dog enjoy strolls safely.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#6d761d'}}></span>
                      <span className="text-base font-source-sans" style={{color: '#4b4b4b'}}>
                        <strong style={{color: '#11100f'}}>No Jumping:</strong> Reinforcing polite greetings and respectful interactions with family, friends, and visitors.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#6d761d'}}></span>
                      <span className="text-base font-source-sans" style={{color: '#4b4b4b'}}>
                        <strong style={{color: '#11100f'}}>No Counter Surfing:</strong> Helping your dog resist temptation and develop self-control around food and household items.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: '#6d761d'}}></span>
                      <span className="text-base font-source-sans" style={{color: '#4b4b4b'}}>
                        <strong style={{color: '#11100f'}}>Reliable Recall:</strong> Ensuring your dog responds consistently to your call, giving you freedom and confidence during outings.
                      </span>
                    </li>
                  </ul>
                  
                  <p className="text-base font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                    Each behavior is approached with consistency, patience, and positive reinforcement, giving your dog the tools to succeed both at the Bluff and at home. With our guidance and your custom go-home plan, these lessons become lasting habits, shaping a companion who is confident, well-mannered, and a joy to be around.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="/attached_assets/Black and White Minimalist New Collection Social Media Mockup Instagram Post (81)_1756151379866.png"
                    alt="Professional dog training session - trainer working with golden Labrador in backyard setting"
                    className="max-w-xs h-[600px] object-cover rounded-xl shadow-lg"
                    style={{objectPosition: '50% 40%'}}
                  />
                </div>
          </div>
        </div>

        {/* Meet Lilly Section */}
        <div className="mb-16">
          <Card className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center order-2 lg:order-1">
                  <img 
                    src="/attached_assets/Black and White Minimalist New Collection Social Media Mockup Instagram Post (82)_1756151491098.png"
                    alt="Lilly, the gentle host dog - chocolate Labrador in green field"
                    className="max-w-xs h-[600px] object-cover rounded-xl shadow-lg"
                    style={{objectPosition: '50% 30%'}}
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-oswald font-normal mb-4 tracking-wide" style={{color: '#11100f'}}>
                    Meet Lilly, Your Dog's Gentle Host
                  </h3>
                  <p className="text-base font-source-sans mb-4 leading-relaxed" style={{color: '#4b4b4b'}}>
                    Every dog who stays at the Bluff is welcomed by Lilly, our calm and experienced host dog. With her gentle temperament and natural ability to put other dogs at ease, Lilly creates a stress-free environment where learning can flourish.
                  </p>
                  <p className="text-base font-source-sans mb-4 leading-relaxed" style={{color: '#4b4b4b'}}>
                    Lilly's presence helps visiting dogs feel at home from day one. She models calm behavior, provides companionship during downtime, and serves as a reassuring friend throughout their stay. Her steady, supportive nature is especially valuable for dogs who may feel anxious about being away from home.
                  </p>
                  <div className="flex items-center">
                    <Heart className="w-5 h-5 mr-3" style={{color: '#6d761d'}} />
                    <span className="text-sm font-montserrat font-medium" style={{color: '#4b4b4b'}}>
                      Lilly: Creating comfort and confidence for every guest
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
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
                      Custom training plan created for every dog
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
                      Behavioral modification for specific issues
                    </span>
                  </div>
                  <div className="flex items-start">
                    <Star className="w-4 h-4 mr-3 mt-1 flex-shrink-0" style={{color: '#6d761d'}} />
                    <span className="text-sm font-source-sans" style={{color: '#4b4b4b'}}>
                      Owner education session upon pickup
                    </span>
                  </div>
                  <div className="flex items-start">
                    <Star className="w-4 h-4 mr-3 mt-1 flex-shrink-0" style={{color: '#6d761d'}} />
                    <span className="text-sm font-source-sans" style={{color: '#4b4b4b'}}>
                      Raw dog food meals included
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
                Give your companion the gift of transformation with us. We welcome only a few dogs at a time, ensuring personalized attention and meaningful progress for every guest.
              </p>
              <Button 
                onClick={scrollToContact}
                className="px-8 py-3 font-montserrat font-medium text-base h-auto rounded-lg"
                style={{backgroundColor: '#6d761d', color: '#fefefe'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#644f06'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6d761d'}
              >
                Request a Retreat
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}