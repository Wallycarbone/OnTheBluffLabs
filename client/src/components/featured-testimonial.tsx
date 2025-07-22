import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import dogsImage from "@assets/Black and White Minimalist New Collection Social Media Mockup Instagram Post (77)_1753195641041.png";

export default function FeaturedTestimonial() {
  const testimonial = {
    name: "Candice and Ken",
    family: "Teddy, by Twain and Akadia, Bachelor's Degree Grad",
    testimonial: "We can't say enough good things about our boy, Theodore, 'Teddy'— he settled right in winning his new big brother over in minutes, he's very handsome and expressive, intelligent, cuddly, friendly, was quickly housebroken, a great traveler, and a true sweetheart. His temperament and personality are exceptional. We have never had a labrador quite like this, and I am certain we will have another one from On The Bluff in the next year or two.",
    image: dogsImage,
  };

  return (
    <section className="py-24" style={{backgroundColor: '#fefefe'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="lg:w-1/3">
                <img 
                  src={testimonial.image} 
                  alt="Labrador dogs cuddling together" 
                  className="w-full h-48 lg:h-full object-cover"
                />
              </div>
              
              {/* Content Section */}
              <div className="lg:w-2/3 p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <Quote className="text-olive-green w-12 h-12 mb-4" />
                </div>
                
                {/* Star Rating */}
                <div className="flex mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-6 h-6 fill-current text-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-warm-gray text-lg leading-relaxed mb-6 italic">
                  "{testimonial.testimonial}"
                </p>
                
                {/* Attribution */}
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-xl font-oswald font-normal tracking-wide mb-2" style={{color: '#11100f'}}>
                    {testimonial.name}
                  </h4>
                  <p className="text-olive-green font-medium">
                    {testimonial.family}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}