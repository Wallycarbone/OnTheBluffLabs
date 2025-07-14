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
    <section id="home" className="min-h-screen" style={{backgroundColor: '#fff3c5'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Content with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Award className="w-8 h-8 mr-3" style={{color: '#4b4b4b'}} />
              <span className="font-montserrat font-semibold text-lg" style={{color: '#4b4b4b'}}>
                50+ Years of Excellence
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6" style={{color: '#11100f'}}>
              On The Bluff Labradors
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light" style={{color: '#6d761d'}}>
              Where exceptional bloodlines meet dedicated breeding practices. 
              Trusted by families for over five decades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('puppies')}
                className="px-8 py-4 text-lg font-montserrat font-medium h-auto"
                style={{backgroundColor: '#6d761d', color: '#fefefe'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#644f06'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6d761d'}
              >
                View Available Puppies
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-2 px-8 py-4 text-lg font-montserrat font-medium h-auto"
                style={{borderColor: '#6d761d', color: '#6d761d'}}
                onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#6d761d'; e.currentTarget.style.color = '#fefefe'}}
                onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#6d761d'}}
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
              <div className="absolute -bottom-4 -right-4 rounded-lg px-4 py-2 shadow-lg" style={{backgroundColor: '#6d761d'}}>
                <p className="font-montserrat font-semibold text-sm" style={{color: '#fefefe'}}>Meet Atticus</p>
                <p className="text-xs" style={{color: '#ebebeb'}}>English Labrador</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 mr-2" style={{color: '#6d761d'}} />
              <h2 className="text-3xl md:text-4xl font-playfair font-bold" style={{color: '#11100f'}}>
                Stories from Our Families
              </h2>
            </div>
            <p className="max-w-2xl mx-auto" style={{color: '#6d761d'}}>
              Every puppy we place becomes part of a loving family. Here are some of their stories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <Card key={index} className="rounded-xl shadow-lg hover:shadow-xl transition-shadow" style={{backgroundColor: '#6d761d'}}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-golden">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="mb-4 italic font-source-sans" style={{color: '#ebebeb'}}>
                    "{testimonial.testimonial}"
                  </p>
                  <div className="border-t pt-4">
                    <h4 className="font-playfair font-bold mb-1" style={{color: '#fefefe'}}>
                      {testimonial.name}
                    </h4>
                    <p className="font-medium text-sm mb-1" style={{color: '#f2d86b'}}>
                      {testimonial.dog}'s Family
                    </p>
                    <p className="text-sm" style={{color: '#ebebeb'}}>
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
            <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4" style={{color: '#11100f'}}>
              Ready to Find Your Perfect Companion?
            </h3>
            <p className="mb-6" style={{color: '#6d761d'}}>
              Join the families who have trusted us for over 50 years to provide exceptional Labradors.
            </p>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 text-lg font-montserrat font-medium h-auto"
              style={{backgroundColor: '#6d761d', color: '#fefefe'}}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#644f06'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6d761d'}
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
