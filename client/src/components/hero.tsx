import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1551717743-49959800b1f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">
          Exceptional Labradors
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light">
          Breeding championship bloodlines with love, care, and dedication for over 20 years
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => scrollToSection('puppies')}
            className="bg-golden text-white px-8 py-4 text-lg font-montserrat font-medium hover:bg-yellow-600 h-auto"
          >
            View Available Puppies
          </Button>
          <Button 
            variant="outline"
            onClick={() => scrollToSection('about')}
            className="border-2 border-white text-white px-8 py-4 text-lg font-montserrat font-medium hover:bg-white hover:text-navy h-auto"
          >
            Learn Our Story
          </Button>
        </div>
      </div>
    </section>
  );
}
