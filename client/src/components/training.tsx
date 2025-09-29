import React from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Award, Users, Clock, CheckCircle, Heart, Star, GraduationCap, Sprout } from "lucide-react";
import trainingHeroImage from '@assets/Untitled design - 2025-09-22T163745.168_1758573553127.png';
import doctorateImage from '@assets/Untitled design - 2025-09-23T093300.325_1758634393210.png';
import bachelorsImage from '@assets/Untitled (5 x 4 in)_1758635023416.png';

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
      <section className="relative h-[90vh] md:h-[80vh] flex items-end md:items-center justify-center md:justify-end overflow-hidden">
        {/* Desktop Background Image */}
        <div 
          className="hidden md:block absolute inset-0"
          style={{
            backgroundImage: `url(${trainingHeroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center calc(50% + 40px)',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        {/* Mobile Background Image */}
        <div 
          className="block md:hidden absolute inset-0"
          style={{
            backgroundImage: `url(${trainingHeroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: '13% center',
            backgroundRepeat: 'no-repeat',
            transform: 'translateY(0%)'
          }}
        ></div>
        {/* Desktop Gradient */}
        <div className="hidden md:block absolute inset-0" style={{background: 'linear-gradient(to right, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.95) 100%)'}}></div>
        {/* Mobile Gradient */}
        <div className="block md:hidden absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 45%, rgba(0, 0, 0, 0.6) 70%, rgba(0, 0, 0, 0.9) 100%)'}}></div>
        <div className="relative z-10 text-center md:text-right text-white px-4 pb-8 md:pb-0 md:pr-16">
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
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <AspectRatio ratio={5/4}>
                  {/* Blurred background fill */}
                  <img 
                    src={bachelorsImage}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-60"
                  />
                  {/* Main image with preserved content */}
                  <img 
                    src={bachelorsImage}
                    alt="Black Labrador puppy with colorful training balls, showcasing playful early socialization and developmental activities"
                    className="absolute inset-0 z-10 w-full h-full object-contain"
                  />
                </AspectRatio>
              </div>
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
          
          {/* Outcome Statement */}
          <div className="mt-12 text-center">
            <p className="text-lg font-source-sans font-semibold" style={{color: '#11100f'}}>
              <span className="text-amber-600 font-bold">Outcome:</span> A puppy who understands the basics, feels at home in family settings, and is ready to keep learning at your side.
            </p>
          </div>
        </div>
      </section>

      {/* The Master's Degree Section */}
      <section className="py-24" style={{backgroundColor: '#fffbe8'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-oswald font-normal mb-6 tracking-wide" style={{color: '#11100f'}}>
                The Master's Degree — $12,500
              </h3>
              <p className="text-base font-source-sans mb-4 leading-relaxed" style={{color: '#4b4b4b'}}>
                For families who want their puppy to arrive not just with a foundation, but with maturity already taking root, the Master's Degree extends training to nearly 400 hours. Beginning at 12 weeks of age, it deepens every lesson from the Bachelor's Degree and layers in composure, consistency, and self-control.
              </p>
              <p className="text-base font-source-sans mb-4 leading-relaxed" style={{color: '#4b4b4b'}}>
                By this stage, puppies aren't just learning cues; they are practicing them in more complex environments—with distractions, longer time spans, and higher expectations. The result is a companion who can walk into a family gathering, a busy park, or a car ride and behave with confidence.
              </p>
              <p className="text-base font-source-sans mb-4 leading-relaxed" style={{color: '#4b4b4b'}}>
                We've designed this program for families who want to spend less time teaching the basics and more time simply enjoying their puppy from day one.
              </p>
            </div>
            <div className="text-center">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <AspectRatio ratio={5/4}>
                  {/* Blurred background fill */}
                  <img 
                    src="/attached_assets/Puppies 5x4 (4)_1755535459095.png"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-60"
                  />
                  {/* Main image with preserved content */}
                  <img 
                    src="/attached_assets/Puppies 5x4 (4)_1755535459095.png"
                    alt="Young golden Labrador puppy outdoors demonstrating confident stance and public socialization readiness"
                    className="absolute inset-0 z-10 w-full h-full object-contain"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
          
          {/* Training Details for Master's Degree */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Lifestyle Training Column */}
            <div>
              <h3 className="text-2xl font-oswald font-normal mb-6 tracking-wide" style={{color: '#11100f'}}>
                Lifestyle Training
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-source-sans font-semibold mb-2" style={{color: '#11100f'}}>
                    Public Outings:
                  </h4>
                  <p className="text-base font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                    Puppies are carefully introduced to busier spaces—parks, sidewalks, neighborhood shops. They experience new sounds and faces and learn to stay composed.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-source-sans font-semibold mb-2" style={{color: '#11100f'}}>
                    Household Etiquette:
                  </h4>
                  <p className="text-base font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                    Mealtimes, guest arrivals, and evenings at home become practice grounds for patience and self-restraint. Puppies learn to settle quietly rather than compete for attention.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-source-sans font-semibold mb-2" style={{color: '#11100f'}}>
                    Extended Travel Readiness:
                  </h4>
                  <p className="text-base font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                    Longer car rides and varied destinations help puppies understand that travel is part of daily life, not a disruption.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-source-sans font-semibold mb-2" style={{color: '#11100f'}}>
                    Calm / Settle:
                  </h4>
                  <p className="text-base font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                    Puppies practice returning to balance after bursts of excitement, reinforcing self-regulation as a habit.
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
                    Reliable Leash Walking:
                  </h4>
                  <p className="text-base font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                    At this stage, leash skills become steady. Puppies learn to walk at your side with only light guidance.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-source-sans font-semibold mb-2" style={{color: '#11100f'}}>
                    Crate & House Training:
                  </h4>
                  <p className="text-base font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                    Puppies are nearly house trained, sleeping comfortably in their crate and following consistent schedules.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-source-sans font-semibold mb-2" style={{color: '#11100f'}}>
                    Cue Expansion:
                  </h4>
                  <p className="text-base font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                    Beyond sit and stay in our yards, puppies practice their cues in public places and varied environments. This makes them stronger and more versatile.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-source-sans font-semibold mb-2" style={{color: '#11100f'}}>
                    Impulse Control:
                  </h4>
                  <p className="text-base font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                    Whether at the door, the food bowl, or when meeting new people, puppies learn that calm patience is rewarded.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-source-sans font-semibold mb-2" style={{color: '#11100f'}}>
                    Retrieve & Release:
                  </h4>
                  <p className="text-base font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                    Fetch evolves into a structured retrieve, with puppies returning items consistently and releasing them on cue.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Outcome Statement */}
          <div className="mt-12 text-center">
            <p className="text-lg font-source-sans font-semibold" style={{color: '#11100f'}}>
              <span className="text-amber-600 font-bold">Outcome:</span> By the time your puppy graduates from the Master's Degree, you'll welcome home a companion who not only understands basic cuess, but demonstrates them with reliability. The groundwork has been laid for a calm, well-mannered family member who transitions seamlessly into household life.
            </p>
          </div>
        </div>
      </section>

      {/* The PhD Program Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-oswald font-normal mb-6 tracking-wide" style={{color: '#11100f'}}>
                The Doctorate Degree — $17,500
              </h3>
              <p className="text-base font-source-sans mb-4 leading-relaxed" style={{color: '#4b4b4b'}}>
                The Doctorate Degree is our most advanced offering, designed for families who want a puppy fully prepared for family life, public spaces, and the highest level of behavioral certification. Spanning more than 600 hours of training, it culminates in preparation for the AKC Canine Good Citizen examination —the gold standard of canine manners, and a foundation for many service dogs.
              </p>
              <p className="text-base font-source-sans mb-4 leading-relaxed" style={{color: '#4b4b4b'}}>
                This is the program where early lessons are not just reinforced but perfected. House training is completed, obedience is reliable in distracting environments, and puppies learn to handle grooming, equipment, and household chaos with grace. The Doctorate is the point at which a puppy doesn't simply know how to behave—they know how to adapt.
              </p>
            </div>
            <div className="text-center">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <AspectRatio ratio={5/4}>
                  {/* Blurred background fill */}
                  <img 
                    src={doctorateImage}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-60"
                  />
                  {/* Main image with preserved content */}
                  <img 
                    src={doctorateImage}
                    alt="Chocolate Labrador puppy sitting confidently on green grass, demonstrating the poised temperament achieved through doctorate-level training"
                    className="absolute inset-0 z-10 w-full h-full object-contain"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
          
          {/* Training Details for PhD Program */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Lifestyle Training Column */}
            <div>
              <h3 className="text-2xl font-oswald font-normal mb-6 tracking-wide" style={{color: '#11100f'}}>
                Lifestyle Training
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-source-sans font-semibold mb-2" style={{color: '#11100f'}}>
                    House Training to Completion:
                  </h4>
                  <p className="text-base font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                    Puppies graduate fully house trained, holding needs for 6–8 hours when kenneled, with consistent schedules and clean habits.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-source-sans font-semibold mb-2" style={{color: '#11100f'}}>
                    Confidence in Any Setting:
                  </h4>
                  <p className="text-base font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                    Exposure expands to a wide range of environments: unusual surfaces (foil, cardboard, bubble wrap), loud tools (vacuums, drills, lawn mowers), farm animals, strollers, umbrellas, even thunderstorms and fireworks. These challenges build resilience.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-source-sans font-semibold mb-2" style={{color: '#11100f'}}>
                    Handling & Grooming:
                  </h4>
                  <p className="text-base font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                    Puppies accept brushing, bathing, blow drying, nail trims, ear checks, and scales with calm familiarity, turning routine care into routine ease.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-source-sans font-semibold mb-2" style={{color: '#11100f'}}>
                    Stairs & Surfaces:
                  </h4>
                  <p className="text-base font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                    Training includes navigating ramps, stairs, elevated and moving platforms, and enclosed walkways—ensuring comfort in any space.
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
                    Place:
                  </h4>
                  <p className="text-base font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                    Puppies learn to go to a designated spot and remain there, even when guests arrive or the household is active.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-source-sans font-semibold mb-2" style={{color: '#11100f'}}>
                    Wait:
                  </h4>
                  <p className="text-base font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                    Puppies master patience at thresholds—doors, gates, crates, or feeding times—preventing rushing or excitement from becoming dangerous.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-source-sans font-semibold mb-2" style={{color: '#11100f'}}>
                    Heel / Leash Mastery:
                  </h4>
                  <p className="text-base font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                    Walking becomes a true partnership: loose leash, steady pace, attentive focus.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-source-sans font-semibold mb-2" style={{color: '#11100f'}}>
                    Pick Your Trick:
                  </h4>
                  <p className="text-base font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                    Families select a fun specialty—spin, crawl, touch, or legs—that reinforces responsiveness while adding joy to training.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-source-sans font-semibold mb-2" style={{color: '#11100f'}}>
                    AKC Canine Good Citizen Examination:
                  </h4>
                  <p className="text-base font-source-sans leading-relaxed" style={{color: '#4b4b4b'}}>
                    The program culminates with this training milestone, providing the chance for puppies to showcase their training and composure in a nationally recognized evaluation
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Outcome Statement */}
          <div className="mt-12 text-center">
            <p className="text-lg font-source-sans font-semibold" style={{color: '#11100f'}}>
              <span className="text-amber-600 font-bold">Outcome:</span> A polished, confident graduate prepared not just for your home, but for the world. These puppies enter family life ready for anything—public outings, gatherings, travel, or simply quiet evenings at your side. The hundreds of hours invested here yield years of ease and joy, backed by certification that proves your companion's reliability.
            </p>
          </div>
        </div>
      </section>

      {/* A Lifetime of Care Section */}
      <section className="py-24" style={{backgroundColor: '#fffbe8'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-oswald font-normal mb-8 tracking-wide" style={{color: '#11100f'}}>
              A Lifetime of Care
            </h2>
            <p className="font-source-sans text-lg leading-[1.6] text-center mb-12" style={{color: '#4b4b4b'}}>
              With over fifty years of experience, we don't just place puppies—we partner with families for the life of each dog. From food and health questions to training refreshers, boarding, and crisis guidance, we remain a steady presence. Many families return again and again, knowing their Labrador is always welcome in the place they were born.
            </p>
            
            {/* Call to Action Box */}
            <Card className="border-2 rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto" style={{background: 'linear-gradient(135deg, #7a8020 0%, #6d761d 50%, #5a5f18 100%)', borderColor: '#7a8020'}}>
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-oswald font-normal mb-6 tracking-wide text-white">
                  GROWING INTO FAMILY
                </h2>
                <p className="font-source-sans text-lg leading-relaxed mb-8 max-w-3xl mx-auto text-white">
                  From the Bachelor's first steps to the Doctorate's final polish, each program prepares your puppy not only to obey, but to belong. By the time your companion comes home, the early chapters have been written with care. The rest of the story—of joy, loyalty, and love—will unfold in your hands.
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