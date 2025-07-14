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
    <section id="home" className="min-h-screen bg-gradient-to-br from-warm-brown to-golden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Content with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Award className="w-8 h-8 text-golden mr-3" />
              <span className="text-golden font-montserrat font-semibold text-lg">
                50+ Years of Excellence
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
              On The Bluff Labradors
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
              Where exceptional bloodlines meet dedicated breeding practices. 
              Trusted by families for over five decades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
          
          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="https://i0.wp.com/ontheblufflabradors.com/wp-content/uploads/2024/12/Atticus.jpeg?resize=1080%2C721&ssl=1"
                alt="Atticus - Beautiful white English Labrador from On The Bluff Labradors"
                className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg px-4 py-2 shadow-lg">
                <p className="text-navy font-montserrat font-semibold text-sm">Meet Atticus</p>
                <p className="text-warm-gray text-xs">English Labrador</p>
              </div>
            </div>
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
