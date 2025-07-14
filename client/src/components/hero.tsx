import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart, Award } from "lucide-react";
import { useState } from "react";
import dukeAtlasImage from "@assets/Duke and Atlas_1752524044867.webp";

export default function Hero() {
  const [expandedTestimonials, setExpandedTestimonials] = useState<{[key: number]: boolean}>({});
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTestimonial = (index: number) => {
    setExpandedTestimonials(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const featuredTestimonials = [
    {
      name: "Duke and Atlas",
      testimonial: "Atlas here, is not our first, but actually is our second trained OTB pup. The choice to get a trained pup is incredibly clear, especially once you bring your furbaby home. Atlas, (and his big bro Duke), have the best manners you could ever see in puppies and are incredibly affectionate. We chalk this up to the weeks of training they had before coming to our home. Both of them were wonderfully crate trained, rarely had accidents, knew basic commands, and are great with other dogs and people, including children. Having a dog with the proper foundation takes the work and stress away from worrying about if what you're doing is right. Plus, training a puppy is very demanding and as someone who already has a full-time job, the training program is a no-brainer. My husband and I got both our OTB pups with 12 weeks of training, and I'm certain we will do it over and over again in the future.",
      dog: "Duke & Atlas",
      degree: "Master's Degree Training Grad",
      parents: "Duke: Charlies x Annie, Atlas: Oliver x Luna",
      location: "",
      image: dukeAtlasImage
    },
    {
      name: "The Henderson Family",
      testimonial: "Duke's personality is everything we hoped for. He's wonderful with our children and has that perfect Labrador spirit. The support from On The Bluff has been exceptional.",
      dog: "Duke", 
      degree: "Therapy Dog Certified",
      parents: "Noble Duke x Sweet Molly",
      location: "Montana"
    },
    {
      name: "Jennifer & Tom Davis",
      testimonial: "Mikkola came home perfectly socialized and ready to be part of our family. The professionalism and care shown throughout the process was outstanding.",
      dog: "Mikkola",
      degree: "Advanced Obedience Title",
      parents: "Atticus Finch x Golden Grace",
      location: "Wyoming"
    }
  ];

  return (
    <section id="home" className="min-h-screen" style={{backgroundColor: '#fffbe8'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Content with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-8">
              <div className="flex items-center rounded-full px-4 py-2 shadow-sm" style={{backgroundColor: '#fefefe'}}>
                <Award className="w-6 h-6 mr-2" style={{color: '#6d761d'}} />
                <span className="font-source-sans font-semibold text-base" style={{color: '#11100f'}}>
                  50+ Years of Excellence
                </span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-oswald font-normal mb-8 tracking-wide leading-tight" style={{color: '#11100f'}}>
              ON THE BLUFF<br />
              <span style={{color: '#6d761d'}}>LABRADORS</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 font-source-sans font-light leading-relaxed" style={{color: '#4b4b4b'}}>
              English Labradors Bred for Beauty and Temperament
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('puppies')}
                className="px-10 py-5 text-lg font-montserrat font-medium h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{backgroundColor: '#6d761d', color: '#fefefe'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#644f06'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6d761d'}
              >
                View Available Litters
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-2 px-10 py-5 text-lg font-montserrat font-medium h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{borderColor: '#6d761d', color: '#6d761d', backgroundColor: 'white'}}
                onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#6d761d'; e.currentTarget.style.color = '#fefefe'}}
                onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = '#6d761d'}}
              >
                Contact Us
              </Button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
              <img 
                src="https://i0.wp.com/ontheblufflabradors.com/wp-content/uploads/2024/12/Atticus.jpeg?resize=1080%2C721&ssl=1"
                alt="Atticus - Beautiful white English Labrador from On The Bluff Labradors"
                className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl relative z-10 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute -bottom-6 -right-6 rounded-2xl px-6 py-3 shadow-xl backdrop-blur-sm border border-white/20" style={{backgroundColor: 'rgba(109, 118, 29, 0.95)'}}>
                <p className="font-montserrat font-semibold text-base" style={{color: '#fefefe'}}>Atticus Finch</p>
                <p className="text-sm" style={{color: '#f2d86b'}}>Cherished Sire</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center rounded-full px-6 py-3 shadow-sm" style={{backgroundColor: '#fefefe'}}>
                <Heart className="w-6 h-6 mr-3" style={{color: '#6d761d'}} />
                <h2 className="text-3xl md:text-4xl font-oswald font-normal tracking-wide" style={{color: '#11100f'}}>
                  STORIES FROM OUR FAMILIES
                </h2>
              </div>
            </div>
            <p className="max-w-3xl mx-auto font-source-sans text-lg leading-relaxed" style={{color: '#4b4b4b'}}>
              Every puppy we place becomes part of a loving family. Here are some of their stories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <Card key={index} className="rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden" style={{backgroundColor: 'white'}}>
                <CardContent className="p-8 relative">
                  <div className="absolute top-0 left-0 w-full h-1" style={{backgroundColor: '#6d761d'}}></div>
                  <div className="flex items-center mb-6">
                    <div className="flex" style={{color: '#6d761d'}}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div className="mb-6">
                    <p className="italic font-source-sans text-sm leading-relaxed mb-3" style={{color: '#4b4b4b'}}>
                      "{expandedTestimonials[index] ? testimonial.testimonial : truncateText(testimonial.testimonial, 150)}"
                    </p>
                    {expandedTestimonials[index] && testimonial.image && (
                      <div className="mb-4">
                        <img 
                          src={testimonial.image} 
                          alt={`${testimonial.dog} - ${testimonial.name}'s beloved companions`}
                          className="w-full rounded-lg shadow-md"
                        />
                      </div>
                    )}
                    {testimonial.testimonial.length > 150 && (
                      <button
                        onClick={() => toggleTestimonial(index)}
                        className="text-xs font-source-sans font-medium hover:underline transition-colors"
                        style={{color: '#6d761d'}}
                      >
                        {expandedTestimonials[index] ? 'Read Less' : 'Read More'}
                      </button>
                    )}
                  </div>
                  <div className="border-t pt-6" style={{borderColor: '#6d761d'}}>
                    <h4 className="font-oswald font-normal text-lg mb-2 tracking-wide" style={{color: '#11100f'}}>
                      {testimonial.name}
                    </h4>
                    <p className="font-medium text-sm mb-1" style={{color: '#6d761d'}}>
                      {testimonial.dog}'s Family
                    </p>
                    <p className="text-sm font-source-sans mb-1" style={{color: '#4b4b4b'}}>
                      <span className="font-medium">Achievement:</span> {testimonial.degree}
                    </p>
                    <p className="text-sm font-source-sans mb-1" style={{color: '#4b4b4b'}}>
                      <span className="font-medium">Parents:</span> {testimonial.parents}
                    </p>
                    {testimonial.location && (
                      <p className="text-sm font-source-sans" style={{color: '#4b4b4b'}}>
                        {testimonial.location}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="rounded-3xl p-12 max-w-3xl mx-auto shadow-2xl border border-white/20" style={{backgroundColor: 'rgba(254, 254, 254, 0.85)'}}>
            <h3 className="text-3xl md:text-4xl font-oswald font-normal mb-6 tracking-wide leading-tight" style={{color: '#11100f'}}>
              READY TO FIND YOUR<br />
              <span style={{color: '#6d761d'}}>PERFECT COMPANION?</span>
            </h3>
            <p className="mb-8 text-lg font-source-sans leading-relaxed max-w-2xl mx-auto" style={{color: '#4b4b4b'}}>
              Join the families who have trusted us for over 50 years to provide exceptional Labradors with champion bloodlines, holistic care, and gentle training.
            </p>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="px-12 py-6 text-xl font-montserrat font-medium h-auto rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
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
