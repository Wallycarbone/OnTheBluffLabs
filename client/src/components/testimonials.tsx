import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Toniann & Michael",
      family: "Duke & Atlas's Family",
      testimonial: "Atlas here, is not our first, but actually is our second trained OTB pup. The choice to get a trained pup is incredibly clear, especially once you bring your furbaby home. Both of them were wonderfully crate trained, rarely had accidents, knew basic commands, and are great with other dogs and people, including children.",
      image: "https://i0.wp.com/ontheblufflabradors.com/wp-content/uploads/2025/01/image2-1-rotated.jpeg?resize=1080%2C1440&ssl=1",
    },
    {
      name: "Jen",
      family: "Mikkola's Family",
      testimonial: "I had been wanting a pup from On The Bluff Labs for quite some time. I was lucky enough to get a pup from the magnificent Atticus before he was officially retired. He was honestly the easiest puppy that I've ever raised. The on-site trainer, Jess, is amazing.",
      image: "https://i0.wp.com/ontheblufflabradors.com/wp-content/uploads/2025/01/Black-and-White-Minimalist-New-Collection-Social-Media-Mockup-Instagram-Post-37.png?resize=1080%2C1350&ssl=1",
    },
    {
      name: "Tessa & Kaitlyn",
      family: "Frankie's Family",
      testimonial: "Our experience with On the Bluff Labradors has been exceptional from getting matched with the right pup that would fit our lifestyle, to settling in with training, we were guided every step of the way. The staff here is incredibly knowledgeable and was eager to share their expertise with us.",
      image: "https://i0.wp.com/ontheblufflabradors.com/wp-content/uploads/2025/01/IMG_5015.jpeg?resize=1080%2C1440&ssl=1",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            What Families Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from families who have welcomed our Labradors into their homes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="flex text-golden">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-warm-gray mb-6 italic">
                  "{testimonial.testimonial}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name} with their puppy`}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-playfair font-bold text-navy">
                      {testimonial.name}
                    </h4>
                    <p className="text-warm-gray text-sm">
                      {testimonial.family}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
