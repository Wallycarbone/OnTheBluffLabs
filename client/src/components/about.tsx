import { Award, Heart, Shield, Home } from "lucide-react";
import puppyImage from "@assets/Copy of Gallery Image - Landscape (22)_1752522247837.png";

export default function About() {
  const features = [
    {
      icon: Shield,
      title: "Champion Bloodlines",
    },
    {
      icon: Heart,
      title: "Health Testing",
    },
    {
      icon: Award,
      title: "Puppy Training Program",
    },
    {
      icon: Home,
      title: "Behavior Support",
    },
  ];

  return (
    <section id="about" className="py-20" style={{backgroundColor: '#fefefe'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-oswald font-normal mb-6 tracking-wide" style={{color: '#11100f'}}>
            ABOUT ON THE BLUFF LABRADORS
          </h2>
          <p className="text-xl max-w-3xl mx-auto font-source-sans" style={{color: '#4b4b4b'}}>
            Dedicated to preserving the finest qualities of the Labrador Retriever through ethical breeding practices and unwavering commitment to excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={puppyImage} 
              alt="Beautiful yellow English Labrador puppy from On The Bluff Labradors" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-3xl font-oswald font-normal mb-6 tracking-wide" style={{color: '#11100f'}}>
              OUR MISSION & VALUES
            </h3>
            <p className="text-lg mb-6 font-source-sans" style={{color: '#4b4b4b'}}>
              For decades, we have been committed to breeding exceptional Labrador Retrievers that embody the breed's finest qualities: intelligence, loyalty, and gentle temperament. Our holistic approach nurtures the whole dog - from careful bloodline selection to a raw meat diet that promotes optimal health, proper socialization, and ongoing support for families.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <feature.icon className="text-2xl mr-4 w-6 h-6" style={{color: '#e3b404'}} />
                  <span className="text-lg" style={{color: '#11100f'}}>{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
