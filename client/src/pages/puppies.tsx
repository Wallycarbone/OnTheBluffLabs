import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

function PuppiesTest() {
  return (
    <section id="puppies" className="bg-gray-50">
      <div>
        <h1 className="text-4xl font-bold text-center py-8">Puppies Page</h1>
        <p className="text-center">Puppies component temporarily simplified for debugging</p>
      </div>
    </section>
  );
}

export default function PuppiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <PuppiesTest />
      <Footer />
    </div>
  );
}