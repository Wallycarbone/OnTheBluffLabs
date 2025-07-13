import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart, Award } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const featuredTestimonials = [
    {
      name: "Sarah & Mike Johnson",
      testimonial: "Atticus has been an incredible addition to our family. His gentle temperament and intelligence continue to amaze us every day. The training program made all the difference.",
      dog: "Atticus",
      location: "Colorado"
    },
    {
      name: "The Henderson Family",
      testimonial: "Duke's personality is everything we hoped for. He's wonderful with our children and has that perfect Labrador spirit. The support from On The Bluff has been exceptional.",
      dog: "Duke", 
      location: "Montana"
    },
    {
      name: "Jennifer & Tom Davis",
      testimonial: "Mikkola came home perfectly socialized and ready to be part of our family. The professionalism and care shown throughout the process was outstanding.",
      dog: "Mikkola",
      location: "Wyoming"
    }
  ];

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-warm-brown to-golden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23B8860B;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23D2691E;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23bg)'/%3E%3Cg transform='translate(100 150)'%3E%3Cellipse cx='400' cy='300' rx='180' ry='120' fill='%23DEB887' opacity='0.3'/%3E%3Cellipse cx='400' cy='280' rx='160' ry='100' fill='%23D2B48C' opacity='0.4'/%3E%3Ccircle cx='370' cy='250' r='15' fill='%23654321'/%3E%3Ccircle cx='430' cy='250' r='15' fill='%23654321'/%3E%3Cpath d='M400 280 Q390 290 400 300 Q410 290 400 280' fill='%23654321'/%3E%3Cpath d='M350 200 Q370 180 390 200 Q400 190 410 200 Q430 180 450 200 Q460 210 450 220 Q430 230 410 220 Q400 230 390 220 Q370 230 350 220 Q340 210 350 200' fill='%23DEB887'/%3E%3C/g%3E%3Cg transform='translate(600 200)'%3E%3Cellipse cx='300' cy='250' rx='150' ry='100' fill='%23DEB887' opacity='0.3'/%3E%3Cellipse cx='300' cy='230' rx='130' ry='80' fill='%23D2B48C' opacity='0.4'/%3E%3Ccircle cx='280' cy='210' r='12' fill='%23654321'/%3E%3Ccircle cx='320' cy='210' r='12' fill='%23654321'/%3E%3Cpath d='M300 230 Q295 240 300 250 Q305 240 300 230' fill='%23654321'/%3E%3Cpath d='M270 170 Q285 155 300 170 Q305 165 310 170 Q325 155 340 170 Q345 180 340 190 Q325 200 310 190 Q305 200 300 190 Q285 200 270 190 Q265 180 270 170' fill='%23DEB887'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Award className="w-8 h-8 text-golden mr-3" />
            <span className="text-golden font-montserrat font-semibold text-lg">
              50+ Years of Excellence
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6">
            On The Bluff Labradors
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 font-light">
            Where exceptional bloodlines meet dedicated breeding practices. 
            Trusted by families for over five decades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('puppies')}
              className="bg-golden text-white px-8 py-4 text-lg font-montserrat font-medium hover:bg-yellow-600 h-auto"
            >
              View Available Puppies
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white px-8 py-4 text-lg font-montserrat font-medium hover:bg-white hover:text-navy h-auto"
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-golden mr-2" />
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white">
                Stories from Our Families
              </h2>
            </div>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Every puppy we place becomes part of a loving family. Here are some of their stories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-golden">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-warm-gray mb-4 italic font-source-sans">
                    "{testimonial.testimonial}"
                  </p>
                  <div className="border-t pt-4">
                    <h4 className="font-playfair font-bold text-navy mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-golden font-medium text-sm mb-1">
                      {testimonial.dog}'s Family
                    </p>
                    <p className="text-warm-gray text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-white mb-4">
              Ready to Find Your Perfect Companion?
            </h3>
            <p className="text-gray-200 mb-6">
              Join the families who have trusted us for over 50 years to provide exceptional Labradors.
            </p>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-golden text-white px-8 py-4 text-lg font-montserrat font-medium hover:bg-yellow-600 h-auto"
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
