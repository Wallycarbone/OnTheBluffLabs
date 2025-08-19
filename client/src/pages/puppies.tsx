import Navigation from "@/components/navigation";
import Puppies from "@/components/puppies";
import Footer from "@/components/footer";

export default function PuppiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Puppies />
      <Footer />
    </div>
  );
}