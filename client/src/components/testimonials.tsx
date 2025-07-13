import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah & Mike Johnson",
      family: "Max's Family",
      testimonial: "Max is everything we hoped for and more. His temperament is perfect for our family with young children, and his intelligence amazes us daily.",
    },
    {
      name: "Jennifer Davis",
      family: "Luna's Family",
      testimonial: "The professionalism and care shown by On The Bluff Labradors is exceptional. Luna came home perfectly socialized and healthy.",
    },
    {
      name: "Robert & Lisa Chen",
      family: "Charlie's Family",
      testimonial: "Three years later, Charlie continues to be the perfect addition to our family. The ongoing support has been invaluable.",
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
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
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
