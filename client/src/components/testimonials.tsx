import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Candice and Ken",
      family: "Teddy (by Twain and Akadia, Bachelor's Degree Grad, Strawberry Blonde puppy on Right in Photo)",
      testimonial: "I was drawn to On The Bluff Labradors because of their philosophy, from their approach to nutrition and diet, vaccination insight, crate training, and socialization skills to their extensive experience in breeding. They were accommodating and helpful as we looked at possibly getting one of their puppies and all my questions. Having lost two dogs in the past year from the same litter to Osteosarcoma, I was still feeling anxious about whether I was ready for the next step. The research was essential to me, and like most, I wanted to do anything I could to be preventive for our future furries. Jessica was so patient with me, understanding and explaining, always available to answer any questions, and never once did I feel any pressure to move forward. They communicate often and go above and beyond to make the process of adding a new family member easy and seamless, from weekly updates, pre-pickup Zoom meetings, and a communicative pickup to review all the details. We can't say enough good things about our boy, Theodore, 'Teddy'— he settled right in winning his new big brother over in minutes, he's very handsome and expressive, intelligent, cuddly, friendly, was quickly housebroken, a great traveler, and a true sweetheart. His temperament and personality are exceptional. We have never had a labrador quite like this, and I am certain we will have another one from On The Bluff in the next year or two.",
      image: "https://i0.wp.com/ontheblufflabradors.com/wp-content/uploads/2025/01/image2-1-rotated.jpeg?resize=1080%2C1440&ssl=1",
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
