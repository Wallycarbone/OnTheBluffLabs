import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/Breeding Dogs 5x4 (27)_1755633649595.png";
import ourDogsImage from "@assets/Breeding Dogs 5x4 (35)_1757524581256.png";
import puppiesImage from "@assets/Puppies 5x4 (4 x 4 in) (23)_1756660633586.png";
import behaviorAcademyImage from "@assets/Puppies 5x4 (4 x 4 in) (24)_1756668372760.png";

export default function Hero() {

  return (
    <>
      <section 
        id="home" 
                className="min-h-screen relative overflow-hidden"
        style={{ backgroundColor: '#f8f4e6' }}
      >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        {/* Desktop Image */}
        <img 
          src={heroImage}
          alt="Beautiful Labrador sitting on stone overlooking mountains - On The Bluff Labradors"
          className="hidden md:block w-full h-full object-cover"
          style={{ objectPosition: 'center 10%' }}
          onError={(e) => {
            console.log('Desktop image failed to load:', heroImage);
            e.currentTarget.style.display = 'none';
          }}
          onLoad={() => console.log('Desktop image loaded successfully:', heroImage)}
        />
        {/* Mobile Image - Better positioning to show dog more centrally */}
        <img 
          src={heroImage}
          alt="Beautiful Labrador sitting on stone overlooking mountains - On The Bluff Labradors"
          className="block md:hidden w-full h-full object-cover"
          style={{ objectPosition: '82.5% 100%', transform: 'translateY(-5%)' }}
          onError={(e) => {
            console.log('Mobile image failed to load:', heroImage);
            e.currentTarget.style.display = 'none';
          }}
          onLoad={() => console.log('Mobile image loaded successfully:', heroImage)}
        />
        {/* Desktop Gradient Overlay */}
        <div 
          className="hidden md:block absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.3) 55%, rgba(0, 0, 0, 0.1) 80%, rgba(0, 0, 0, 0) 100%)'
          }}
        ></div>
        {/* Mobile Gradient Overlay - Light top, dark bottom for text readability */}
        <div 
          className="block md:hidden absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 70%, rgba(0, 0, 0, 0.9) 100%)'
          }}
        ></div>
      </div>
      
      {/* Content Overlay - Responsive positioning */}
      <div className="relative z-20 min-h-screen flex items-end md:items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full">
          <div className="text-left max-w-xl lg:max-w-2xl">
            {/* Excellence Badge */}
            <div className="flex items-center justify-start mb-4 md:mb-8">
              <div className="flex items-center rounded-full px-4 md:px-6 py-2 md:py-3 shadow-lg backdrop-blur-sm" style={{backgroundColor: 'rgba(254, 254, 254, 0.95)'}}>
                <Award className="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-3" style={{color: '#6d761d'}} />
                <span className="font-source-sans font-semibold text-sm md:text-lg" style={{color: '#11100f'}}>
                  50+ Years of Excellence
                </span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl md:text-8xl font-oswald font-normal mb-4 md:mb-8 tracking-wide leading-tight text-white drop-shadow-2xl">
              ON THE BLUFF<br />
              <span style={{color: '#6d761d', textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>LABRADORS</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm md:text-3xl mb-4 md:mb-8 font-source-sans font-light leading-relaxed text-white drop-shadow-lg">
              English Labradors Bred for Beauty and Temperament
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-6 justify-start">
              <Link href="/breeding-dogs">
                <Button 
                  className="px-6 md:px-12 py-3 md:py-6 text-sm md:text-xl font-montserrat font-medium h-auto rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                  style={{backgroundColor: 'rgba(109, 118, 29, 0.95)', color: '#fefefe'}}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(100, 79, 6, 0.95)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(109, 118, 29, 0.95)'}
                >
                  Meet Our Dogs
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  variant="outline"
                  className="border-2 px-6 md:px-12 py-3 md:py-6 text-sm md:text-xl font-montserrat font-medium h-auto rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
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
          <h2 className="text-4xl md:text-5xl font-oswald font-normal mb-3 tracking-wide leading-tight" style={{color: '#11100f'}}>
            PRESERVATION BREEDING
          </h2>
          <h3 className="text-2xl md:text-3xl font-source-sans font-light mb-8 tracking-wide" style={{color: '#6d761d'}}>
            Safeguarding the Legacy of the Perfect Companion
          </h3>
            <div className="max-w-5xl mx-auto mb-16 prose prose-lg prose-gray">
              <p className="font-source-sans text-lg leading-[1.6] mb-6 text-left" style={{color: '#4b4b4b'}}>
                For fifty years, we've dedicated ourselves to Labrador Retrievers — raising puppies, studying bloodlines, and preserving what makes this breed extraordinary: loyalty, intelligence, and an unmatched ability to connect with humans.
              </p>
              
              <p className="font-source-sans text-lg leading-[1.6] mb-6 text-left" style={{color: '#4b4b4b'}}>
                The Westminster and Crufts champions — magnificent as they are — represent just the latest chapter in a much longer story. Their true relevance, their deepest value, wasn't created in a show ring or a professional handler's setup. It was forged in a tiny shed on the coldest of winter nights, with a dog curled up at the feet of some lonely artisan learning what it really meant to be essential to human survival.
              </p>
              
              <p className="font-source-sans text-lg leading-[1.6] mb-6 text-left" style={{color: '#4b4b4b'}}>
                That's the dog we've spent decades trying to preserve and honor. In our small way, we've tried to be worthy custodians of something that began long before us and will continue long after we're gone. Every time one of our dogs bonds instantly with a new family, shows that famous Labrador intuition, demonstrates that uncanny ability to read human emotions — they're drawing on centuries of genetic memory, expressing traits that were literally carved into their DNA by survival itself.
              </p>
              
              <p className="font-source-sans text-lg leading-[1.6] mb-6 text-left" style={{color: '#4b4b4b'}}>
                <strong>We invite you to join us on this path: by welcoming an On The Bluff Labrador into your home, you become part of this legacy, ensuring that what makes the Labrador so extraordinary endures into the future.</strong>
              </p>
              
              <p className="font-source-sans text-base leading-relaxed mb-0 text-left italic" style={{color: '#4b4b4b'}}>
                Sincerely,<br />
                The Team at On The Bluff Labradors
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Our Dogs Section */}
              <Link href="/breeding-dogs">
                <div className="group cursor-pointer rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-96 overflow-hidden">
                    <img 
                      src={ourDogsImage}
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

              {/* Puppies Section */}
              <Link href="/puppies">
                <div className="group cursor-pointer rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-96 overflow-hidden">
                    <img 
                      src={puppiesImage}
                      alt="Adorable black Labrador puppy playing outdoors with toys"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-oswald font-normal mb-2 tracking-wide">PUPPY PLACEMENT</h3>
                      <p className="text-sm font-source-sans opacity-90">
                        Learn about our expert puppy matchmaking process
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Behavior Academy Options Section */}
              <Link href="/training">
                <div className="group cursor-pointer rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-96 overflow-hidden">
                    <img 
                      src={behaviorAcademyImage}
                      alt="Professional dog training and behavior development programs"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-oswald font-normal mb-2 tracking-wide">BEHAVIOR ACADEMY OPTIONS</h3>
                      <p className="text-sm font-source-sans opacity-90">
                        Select a training program to prepare your puppy for their homecoming day
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>





      {/* Call to Action Section */}
      <section className="py-20" style={{backgroundColor: '#fffbe8'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="rounded-3xl p-12 max-w-3xl mx-auto shadow-2xl border border-white/20" style={{backgroundColor: 'rgba(254, 254, 254, 0.95)'}}>
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
