import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Puppies from "@/components/puppies";
import BreedingDogs from "@/components/breeding-dogs";
import HealthTesting from "@/components/health-testing";
import Testimonials from "@/components/testimonials";
import Facilities from "@/components/facilities";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <About />
      <Puppies />
      <BreedingDogs />
      <HealthTesting />
      <Testimonials />
      <Facilities />
      <Contact />
      <Footer />
    </div>
  );
}
