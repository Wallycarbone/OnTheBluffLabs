import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart, Award, GraduationCap, Shield, Puzzle } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import dukeAtlasImage from "@assets/Duke and Atlas_1752524044867.webp";
import mikkolaImage from "@assets/Mikkola_1752525173263.webp";
import frankieImage from "@assets/Frankie_1752525510895.webp";
import heroImage from "@assets/Breeding Dogs 5x4 (5)_1754340347869.png";

export default function Hero() {
  const [expandedTestimonials, setExpandedTestimonials] = useState<{[key: number]: boolean}>({});
  


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
      name: "Toniann & Michael",
      testimonial: "Atlas here, is not our first, but actually is our second trained OTB pup. The choice to get a trained pup is incredibly clear, especially once you bring your furbaby home. Atlas, (and his big bro Duke), have the best manners you could ever see in puppies and are incredibly affectionate. We chalk this up to the weeks of training they had before coming to our home. Both of them were wonderfully crate trained, rarely had accidents, knew basic commands, and are great with other dogs and people, including children. Having a dog with the proper foundation takes the work and stress away from worrying about if what you're doing is right. Plus, training a puppy is very demanding and as someone who already has a full-time job, the training program is a no-brainer. My husband and I got both our OTB pups with 12 weeks of training, and I'm certain we will do it over and over again in the future.",
      dog: "Duke & Atlas",
      degree: "Master's Degree Training Grad",
      parents: "Duke: Charlies x Annie, Atlas: Oliver x Luna",
      location: "",
      image: dukeAtlasImage
    },
    {
      name: "Jen",
      testimonial: "I had been wanting a pup from On The Bluff Labs for quite some time. I was lucky enough to get a pup from the magnificent Atticus before he was officially retired. The pups from OTB have wonderful, sound temperaments and are truly beautiful as a bonus! One of my family members also has an OTB pup. I am so happy with my pup, Mikkola. Jess did a great job picking out a pup for us that matched our family's lifestyle, desires and expectations. I have a young, active son and it was very important to have a dog that was playful, yet gentle and well-balanced. He was honestly the easiest puppy that I've ever raised. The on-site trainer, Jess, is amazing. Mikkola came home with me knowing essentially all basic commands, was trained to eliminate outside and was already crate trained! Incredible. Mikkola did the training program with Jess and it was ABSOLUTELY worth spending the extra money. I would encourage anyone to make the investment initially, to help to avoid potential issues in the future. Experienced dog owners know that the time and money that will actually be saved in the long-run by purchasing a trained, well-socialized, well-adjusted, healthy pup cannot be overstated.",
      dog: "Mikkola",
      degree: "Master's Degree Training Grad",
      parents: "Atticus x Awillix",
      location: "",
      image: mikkolaImage
    },
    {
      name: "Tessa & Kaitlyn",
      testimonial: "Our experience with On the Bluff Labradors has been exceptional from getting matched with the right pup that would fit our lifestyle, to settling in with training, we were guided every step of the way. The staff here is incredibly knowledgable and was eager to share their expertise with us to ensure we had a stress free experience. Jess was even kind enough to give us training tips months after we brought him home! It is easy to see how much the staff cares about the dogs here and it made us even more confident bringing home our new puppy. We could not be more grateful for the team here and our puppy who has grown into a gorgeous and loyal dog. His temperament is amazing and is a perfect mix between a snuggly boy, and an energetic pro swimmer (so he thinks). We could not be more thankful for our experience here.",
      dog: "Frankie",
      degree: "Bachelor's Degree Training Grad",
      parents: "Grizzly x Vivien",
      location: "",
      image: frankieImage
    }
  ];

  return (
    <>
      <section 
        id="home" 
                className="min-h-screen relative overflow-hidden"
        style={{ backgroundColor: '#f8f4e6' }}
      >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={heroImage}
          alt="Beautiful Labrador sitting on stone overlooking mountains - On The Bluff Labradors"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 10%' }}
          onError={(e) => {
            console.log('Image failed to load:', heroImage);
            e.currentTarget.style.display = 'none';
          }}
          onLoad={() => console.log('Image loaded successfully:', heroImage)}
        />
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.3) 55%, rgba(0, 0, 0, 0.1) 80%, rgba(0, 0, 0, 0) 100%)'
          }}
        ></div>
      </div>
      
      {/* Content Overlay - Left Side */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
          <div className="text-left max-w-xl lg:max-w-2xl">
            {/* Excellence Badge */}
            <div className="flex items-center justify-start mb-8">
              <div className="flex items-center rounded-full px-6 py-3 shadow-lg backdrop-blur-sm" style={{backgroundColor: 'rgba(254, 254, 254, 0.95)'}}>
                <Award className="w-6 h-6 mr-3" style={{color: '#6d761d'}} />
                <span className="font-source-sans font-semibold text-lg" style={{color: '#11100f'}}>
                  50+ Years of Excellence
                </span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl font-oswald font-normal mb-8 tracking-wide leading-tight text-white drop-shadow-2xl">
              ON THE BLUFF<br />
              <span style={{color: '#6d761d', textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>LABRADORS</span>
            </h1>

            {/* Subtitle */}
            <p className="text-2xl md:text-3xl mb-8 font-source-sans font-light leading-relaxed text-white drop-shadow-lg">
              English Labradors Bred for Beauty and Temperament
            </p>



            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-start">
              <Link href="/puppies">
                <Button 
                  className="px-12 py-6 text-xl font-montserrat font-medium h-auto rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                  style={{backgroundColor: 'rgba(109, 118, 29, 0.95)', color: '#fefefe'}}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(100, 79, 6, 0.95)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(109, 118, 29, 0.95)'}
                >
                  View Available Litters
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  variant="outline"
                  className="border-2 px-12 py-6 text-xl font-montserrat font-medium h-auto rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                  style={{borderColor: '#fefefe', color: '#fefefe', backgroundColor: 'rgba(255, 255, 255, 0.1)'}}
                  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'; e.currentTarget.style.color = '#6d761d'}}
                  onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.color = '#fefefe'}}
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </section>
    
      {/* Welcome Section */}
      <section className="py-20" style={{backgroundColor: '#fffbe8'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-oswald font-normal mb-6 tracking-wide leading-tight" style={{color: '#11100f'}}>
            WELCOME TO<br />
            <span style={{color: '#6d761d'}}>ON THE BLUFF LABRADORS</span>
          </h2>
            <p className="max-w-4xl mx-auto font-source-sans text-xl leading-relaxed mb-8" style={{color: '#4b4b4b'}}>
              For more than fifty years, we've been devoted preservation breeders of exceptional English Labradors—committed to 
              safeguarding what makes this breed truly special: their social intelligence, natural beauty, and steady temperament. 
              Our breeding program combines time-honored practices with holistic health protocols and early training, all carefully 
              chosen to preserve and enhance the finest qualities of the English Labrador.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{backgroundColor: '#6d761d'}}>
                  <Award className="w-8 h-8" style={{color: '#fefefe'}} />
                </div>
                <h3 className="text-xl font-oswald font-normal mb-3 tracking-wide" style={{color: '#11100f'}}>CHAMPION BLOODLINES</h3>
                <p className="font-source-sans text-base leading-relaxed" style={{color: '#4b4b4b'}}>
                  Our breeding program features dogs with proven champion genetics and exceptional conformation.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{backgroundColor: '#6d761d'}}>
                  <Heart className="w-8 h-8" style={{color: '#fefefe'}} />
                </div>
                <h3 className="text-xl font-oswald font-normal mb-3 tracking-wide" style={{color: '#11100f'}}>EXCEPTIONAL TEMPERAMENT</h3>
                <p className="font-source-sans text-base leading-relaxed" style={{color: '#4b4b4b'}}>
                  Each puppy is raised with love and socialization to ensure gentle, well-balanced family companions.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{backgroundColor: '#6d761d'}}>
                  <Shield className="w-8 h-8" style={{color: '#fefefe'}} />
                </div>
                <h3 className="text-xl font-oswald font-normal mb-3 tracking-wide" style={{color: '#11100f'}}>COMPREHENSIVE HEALTH</h3>
                <p className="font-source-sans text-base leading-relaxed" style={{color: '#4b4b4b'}}>
                  Rigorous health testing and certification ensure the healthiest puppies for your family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections Links */}
      <section className="py-16" style={{backgroundColor: '#f8f4e6'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-oswald font-normal mb-4 tracking-wide" style={{color: '#11100f'}}>
              EXPLORE OUR WORLD
            </h2>
            <p className="text-lg font-source-sans" style={{color: '#4b4b4b'}}>
              Discover the heart of our breeding program through these key areas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Our Dogs Section */}
            <Link href="/breeding-dogs">
              <div className="group cursor-pointer rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={heroImage}
                    alt="Our exceptional breeding dogs with champion bloodlines"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-oswald font-normal mb-2 tracking-wide">OUR DOGS</h3>
                    <p className="text-sm font-source-sans opacity-90">
                      Meet our exceptional breeding dogs with champion bloodlines and proven temperaments
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Training Section */}
            <Link href="/training">
              <div className="group cursor-pointer rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={dukeAtlasImage}
                    alt="Professional training programs for Labrador puppies"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-oswald font-normal mb-2 tracking-wide">TRAINING</h3>
                    <p className="text-sm font-source-sans opacity-90">
                      Comprehensive training programs that build confident, well-mannered companions
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Raw Dog Food Section */}
            <Link href="/raw-dog-food">
              <div className="group cursor-pointer rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={mikkolaImage}
                    alt="Premium raw dog food nutrition programs"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-oswald font-normal mb-2 tracking-wide">RAW DOG FOOD</h3>
                    <p className="text-sm font-source-sans opacity-90">
                      Premium nutrition programs supporting optimal health and development
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <div className="bg-gradient-to-b from-transparent via-white/95 to-white py-20" style={{backgroundColor: '#fffbe8'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    {testimonial.dog === "Duke & Atlas" ? (
                      <div className="flex items-center px-4 py-2 rounded-full" style={{backgroundColor: '#6d761d'}}>
                        <GraduationCap className="w-4 h-4 mr-2" style={{color: '#fefefe'}} />
                        <span className="text-sm font-source-sans font-medium" style={{color: '#fefefe'}}>
                          2nd Generation OTB Family
                        </span>
                      </div>
                    ) : testimonial.dog === "Mikkola" ? (
                      <div className="flex items-center px-4 py-2 rounded-full" style={{backgroundColor: '#6d761d'}}>
                        <Shield className="w-4 h-4 mr-2" style={{color: '#fefefe'}} />
                        <span className="text-sm font-source-sans font-medium" style={{color: '#fefefe'}}>
                          Perfect Family Temperament
                        </span>
                      </div>
                    ) : testimonial.dog === "Frankie" ? (
                      <div className="flex items-center px-4 py-2 rounded-full" style={{backgroundColor: '#6d761d'}}>
                        <Puzzle className="w-4 h-4 mr-2" style={{color: '#fefefe'}} />
                        <span className="text-sm font-source-sans font-medium" style={{color: '#fefefe'}}>
                          Expert Lifestyle Match
                        </span>
                      </div>
                    ) : (
                      <div className="flex" style={{color: '#6d761d'}}>
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                    )}
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
                      <span className="font-medium">Program:</span> {testimonial.degree}
                    </p>
                    <div className="text-sm font-source-sans mb-1" style={{color: '#4b4b4b'}}>
                      <span className="font-medium">Parents:</span>
                      <div className="ml-2 mt-1">
                        {testimonial.parents.split(', ').map((parent, index) => (
                          <div key={index} className="text-xs">
                            {parent}
                          </div>
                        ))}
                      </div>
                    </div>
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
              Join the families who have trusted us for over 50 years to provide exceptional Labradors with champion bloodlines, holistic care, and a strong training foundation.
            </p>
            <Link href="/contact">
              <Button 
                className="px-12 py-6 text-xl font-montserrat font-medium h-auto rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                style={{backgroundColor: '#6d761d', color: '#fefefe'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#644f06'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6d761d'}
              >
                Start Your Journey
              </Button>
            </Link>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
