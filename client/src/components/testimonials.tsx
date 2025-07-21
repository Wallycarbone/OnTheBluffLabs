import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import teddyImage from "@assets/Untitled design (91)_1753107861899.png";
import cassieImage from "@assets/Cassie_1753107944446.webp";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Candice and Ken",
      family: "Teddy, by Twain and Akadia, Bachelor's Degree Grad",
      testimonial: "We can't say enough good things about our boy, Theodore, 'Teddy'— he settled right in winning his new big brother over in minutes, he's very handsome and expressive, intelligent, cuddly, friendly, was quickly housebroken, a great traveler, and a true sweetheart. His temperament and personality are exceptional. We have never had a labrador quite like this, and I am certain we will have another one from On The Bluff in the next year or two.",
      image: teddyImage,
    },
    {
      name: "Michelle and Carey",
      family: "Cassie, by Oliver and Bea, Bachelor's Degree Grad",
      testimonial: "Cassie has truly exceeded all our expectations. Her temperament is perfect—calm, affectionate, and eager to please. Whether she's playing with Chase or cuddling with the family, she brings endless smiles to our faces. On the Bluff Labradors is an exceptional breeder, and we highly recommend them to anyone looking for a high-quality, well-trained lab with a fantastic disposition.",
      image: cassieImage,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-oswald font-normal mb-6 tracking-wide" style={{color: '#fefefe'}}>
            WHAT FAMILIES SAY
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
