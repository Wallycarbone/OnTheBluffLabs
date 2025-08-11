import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import healthyStartImage from "@assets/Puppies 5x4 (4 x 4 in) (2)_1754768185491.png";

export default function HealthTesting() {
  const [isEssayOpen, setIsEssayOpen] = useState(false);
  const [selectedTest, setSelectedTest] = useState<any>(null);

  const openEssay = (test: any) => {
    setSelectedTest(test);
    setIsEssayOpen(true);
  };

  const healthTests = [
    {
      image: "/attached_assets/Puppies 5x4 (4 x 4 in) (5)_1754772005588.png",
      title: "Fresh Dog Food",
      description: "We feed fresh food with proteins, greens, fruits, and oils. We source from local butchers and add favorites like whole fish - our dogs' preferred meal.",
      essay: `We feed our dogs fresh food that is made up of some kind of protein such as meat, fish poultry, etc., and fresh vegetables, mainly greens, a variety of fruit, oils, garlic, probiotics, and different forms of supplements. If you feed your dog a variety of food, supplements are optional. Our treats consist of dehydrated animal organs. You can now buy this kind of food pre-made from fresh food companies or you can easily make it yourself or you can do a combination of both.

If you live in the country or near it, you can always approach a butcher in your area that is butchering off the hoof, (meaning he is starting with the whole animal) and see if he'd like to grind up parts of the animal he is discarding such as all the organs and off cuts that people do not eat. Most butchers would be happy to do this as they would be able to profit from what they are now discarding. If you can get the butcher to add tripe, (the lining of a cow's stomach), it is extremely nutritious for dogs. But we warn you, it is stinky. Smells like manure.

The vegetables we add are mostly greens such as kale, collard greens, dandelion greens, broccoli, and green beans and we also add sweet potato sometimes. We use olive oil, cod liver oil, and salmon oil and we also feed whole fish cut up with the bone in, head, tail, and innards. They love it! If our dogs could talk I think they would say that fish is their favorite meal. You can also feed canned fish such as sardines and salmon.

We add garlic for flavor because it is known, not scientifically proven as yet, to help fend off fleas and ticks. Whole chicken backs are great because they are so inexpensive. Nobody eats them. Fresh bone is good for their teeth and bones, and a chicken back will occupy your pup for a while as their teeth are not fully formed so they will mouth it into mush. NO cooked bones. These can splinter. But fresh bones are very nutritious.

All kinds of fruit are fine. Your dog will have his favorites. Most like pears and apples. Some like oranges. You will have to try them out. Berries are especially nutritious. We add these to our dogs' food. If, for the most part, you are a healthy eater, cooked food is fine for your dog. It is why they joined humans in the first place. They smelled the food around the camp fire and came around, offering up their services in exchange for food. So feed them your leftovers in their dish. They smelled it cooking. Now they get to share in the bounty.`
    },
    {
      image: "/attached_assets/Puppies 5x4 (4 x 4 in) (3)_1754771887076.png",
      title: "Delay Spay & Neuter",
      description: "We recommend delaying spay and neuter procedures until after 24 months to allow proper joint and bone development.",
      essay: `When it comes to spaying or neutering a large breed dog, timing matters—a lot. We strongly recommend that you wait until your dog is fully grown before making that decision. For most large breed Labradors, that means 24+ months old.

Why wait? Hormones like estrogen and testosterone don't just control reproduction—they play a major role in your Labrador's growth, muscle development, joint health, and even their mental maturity. Removing these hormones too early can disrupt normal development and increase the risk of long-term health problems. Studies have shown that early spay or neuter in Labradors is linked to higher rates of hip dysplasia, torn cruciate ligaments, arthritis, and certain cancers.

Labradors are a large, slow-maturing breed. Their growth plates—the soft cartilage at the ends of their bones—stay open longer than in smaller breeds. Spaying or neutering before those plates close can cause uneven bone growth, which may affect their movement, balance, and structural soundness for life. This is especially important for labs, who are naturally athletic and need a strong, healthy frame to stay active well into their senior years.

Regardless of whether you have a male or female, we invite you to keep the dog intact for their whole life (although we prohibit breeding of the dogs without our permission). The goal is to give your Lab the full benefit of their natural hormones during those critical growth stages so they develop into the strong, sound, and well-balanced dog they're meant to be.`
    },
    {
      image: "/attached_assets/Puppies 5x4 (4 x 4 in) (4)_1754772138020.png",
      title: "Reduce Vaccinations",
      description: "We carefully avoid unnecessary vaccinations to prevent immune system overload and maintain natural immunity.",
      essay: `Studies have shown that dogs are often fully immunized with one vaccination if administered at 16 weeks or older. We believe that not all vaccinations are necessary. The only one required by law is rabies. The others are up to you. Just remember, you are the customer. This is your dog and you must advocate for them.

The first immunization is usually the DA2LPP. We recommend that you do not give this shot at all. It is never good to immunize a dog with more than one vaccination at a time. The wombo combo shots, which is what they are often called, contain multiple modified live viruses mixed with various bacteria. Some are long-term vaccinations and can last over 3 years or a lifetime while others are not and may not last a year or are unnecessary, to begin with. If your dog has an adverse reaction, how would you know which vaccine caused it?

After puppyhood, giving vaccines too often—especially when they aren't needed—can put your dog at unnecessary risk without offering any real benefit. One of the best ways to avoid over-vaccinating is through antibody titer testing. This is a simple blood test that checks whether your dog is already protected against certain diseases.

A titer test measures the level of specific antibodies in the bloodstream. Antibodies are the immune system's "memory" cells—they're what your dog's body produces after a vaccination or natural exposure to an illness. If the antibody level is high enough, it means your dog is still protected and doesn't need another shot at that time.

The beauty of titer testing is that it takes the guesswork out of the equation. Instead of automatically re-vaccinating every year or two because "that's the schedule," you're basing your decision on your dog's actual immunity. This helps you avoid unnecessary vaccines, reduce the chance of side effects, and make vaccination choices that are tailored to your dog—not to a generic chart on the wall.`
    },
    {
      image: "/attached_assets/Puppies 5x4 (4 x 4 in) (6)_1754772143268.png",
      title: "DNA & OFA Testing",
      description: "We conduct comprehensive testing for common Labrador genetic conditions, plus hip dysplasia screening through OFA certification.",
      essay: `We believe that producing strong, healthy Labradors starts with choosing breeding dogs that meet the highest health standards.

Our breeding dogs are tested for the genetic conditions most often found in Labradors, including Progressive Retinal Atrophy (PRA) and Exercise Induced Collapse (EIC). Their hips are evaluated through the Orthopedic Foundation for Animals (OFA) to ensure they are sound and healthy for breeding.

We only breed dogs with passing hip grades. If a dog is found to be a carrier of a recessive condition, we make breeding decisions carefully—pairing them only with dogs that are clear—so no puppies are ever affected. This approach protects the health of our litters while keeping valuable genetic diversity in our lines.

Of course, these considerations go hand in hand with selecting dogs that uphold the original wisdom of the breed: emotional intelligence, cognitive flexibility, and physical beauty.`
    },
  ];



  return (
    <section id="health" className="py-24" style={{backgroundColor: '#fefefe'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-oswald font-normal mb-6 tracking-wide" style={{color: '#11100f'}}>
            HOLISTIC HEALTH
          </h2>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto">
            Our comprehensive approach to raising healthy Labradors through natural nutrition, thoughtful health care, and responsible breeding practices.
          </p>
        </div>

        {/* Healthy Start Essay Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <h3 className="text-3xl font-oswald font-normal tracking-wide mb-8 text-center" style={{color: '#11100f'}}>
            Healthy Start
          </h3>
          
          <div className="flex flex-col lg:flex-row gap-8 items-start mb-8">
            <div className="lg:w-1/3 flex-shrink-0">
              <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg mx-auto lg:mx-0">
                <img 
                  src="/attached_assets/Puppies 5x4 (4 x 4 in) (2)_1754770576607.png"
                  alt="Healthy Start - Beautiful yellow Lab puppy representing our breeding excellence"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="lg:w-2/3 flex-1">
              <div className="font-source-sans leading-relaxed text-justify space-y-6" 
                style={{
                  color: '#2d3748', 
                  lineHeight: '1.8',
                  fontSize: '16px',
                  letterSpacing: '0.02em'
                }}
              >
                <p>For nearly fifty years we have worked hard to create Labradors that are the best possible companion dogs for individuals and families.</p>

                <p>We strive for excellence in temperament, personality, with a physical structure that adheres to bred standard. We carefully research and select specific bloodlines to produce these desired qualities. The resulting progeny, combined with our distinct methods in early handling and socialization, have given our pups the best possible outcomes.</p>

                <p>Our breeding dogs live in a family environment. There are no kennel runs. Our dogs run free and are exercised throughout the day on 7 open acres and woodlands. They eat an exclusive fresh food diet made on our premises. Most importantly- they are handled and loved.</p>

                <p>Our pups are handled constantly from birth. Using advanced training methods, we challenge them to become independent as we expand their cognitive skills. At 5 or 6 weeks, they leave their inside whelping den and are placed outside in a large enclosure consisting of many different areas. Their world now has expanded exponentially. We train them in the use of a doggie door-an entrance to their own house (which is heated and air-conditioned). The early use of their own doggie door teaches them house training as well as independence. We use a puppy call to start feeding time- thus early on they learn how to come when called. We crate train each pup individually until they can stay in a crate comfortably for a minimum of 4 hours. The pups are periodically exposed to adult dogs to increase their socialization skills. And we continually train them to chew on appropriate objects, rather than our hands.</p>

                <p>Labradors are highly social creatures who thrive in small quarters with humans. They are all different from one another and have attributes that show themselves at an early age. Some will be good hunters, others attentive service dogs, and others built for the show ring. Some can happily lie in the sun all day and still others want nothing more than to fetch a stick. For that reason our approach to puppy placement has focused on compatible behavior. Pups change dramatically from week to week.</p>

                <p>After nearly 50 years of breeding we pride ourselves in picking the best puppy for you. Finally, we spend at least an hour and a half with you when you pick up your pup. We go over everything you will need to know to keep your pup healthy and well trained.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {healthTests.map((test, index) => (
            <Card 
              key={index} 
              className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => openEssay(test)}
            >
              <div className="w-32 h-32 rounded-xl overflow-hidden mx-auto mb-6">
                <img 
                  src={test.image} 
                  alt={`${test.title} - Health and wellness pillar`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-oswald font-normal tracking-wide mb-4" style={{color: '#11100f'}}>
                {test.title}
              </h3>
              <p className="leading-relaxed text-sm font-source-sans mb-4" style={{color: '#4b4b4b', lineHeight: '1.6'}}>
                {test.description}
              </p>
              <div className="text-xs font-montserrat font-medium" style={{color: '#6d761d'}}>
                Click to learn more
              </div>
            </Card>
          ))}
        </div>

        {/* Essay Popup Dialog */}
        <Dialog open={isEssayOpen} onOpenChange={setIsEssayOpen}>
          <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-white">
            <DialogHeader className="border-b pb-4 mb-6" style={{borderColor: '#e5e7eb'}}>
              <DialogTitle className="text-3xl font-oswald font-normal tracking-wide text-center" style={{color: '#11100f'}}>
                {selectedTest?.title}
              </DialogTitle>
            </DialogHeader>
            <div className="px-4">
              {selectedTest?.image ? (
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="lg:w-1/3 flex-shrink-0">
                    <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg mx-auto lg:mx-0 sticky top-0">
                      <img 
                        src={selectedTest.image} 
                        alt={`${selectedTest.title} - Detailed view`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                  <div className="lg:w-2/3 flex-1">
                    <div 
                      className="font-source-sans leading-relaxed whitespace-pre-line text-justify" 
                      style={{
                        color: '#2d3748', 
                        lineHeight: '1.8',
                        fontSize: '16px',
                        letterSpacing: '0.02em'
                      }}
                    >
                      {selectedTest?.essay}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="max-w-4xl mx-auto">
                  <div 
                    className="font-source-sans leading-relaxed whitespace-pre-line text-justify" 
                    style={{
                      color: '#2d3748', 
                      lineHeight: '1.8',
                      fontSize: '16px',
                      letterSpacing: '0.02em'
                    }}
                  >
                    {selectedTest?.essay}
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>


      </div>
    </section>
  );
}
