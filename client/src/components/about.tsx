import { Award, Heart, Shield, Home } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Award,
      title: "AKC Breeder of Merit Recognition",
    },
    {
      icon: Heart,
      title: "Health Testing on All Breeding Dogs",
    },
    {
      icon: Shield,
      title: "Champion Bloodlines",
    },
    {
      icon: Home,
      title: "Lifetime Breeder Support",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-slate-900 mb-6">
            About On The Bluff Labradors
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Dedicated to preserving the finest qualities of the Labrador Retriever through ethical breeding practices and unwavering commitment to excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional breeder with champion Labrador" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-3xl font-playfair font-bold text-slate-900 mb-6">
              Our Mission & Values
            </h3>
            <p className="text-lg text-slate-700 mb-6">
              For over two decades, we have been committed to breeding exceptional Labrador Retrievers that embody the breed's finest qualities: intelligence, loyalty, and gentle temperament. Our approach combines traditional breeding wisdom with modern genetic health testing.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <feature.icon className="text-yellow-600 text-2xl mr-4 w-6 h-6" />
                  <span className="text-lg text-slate-800">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
