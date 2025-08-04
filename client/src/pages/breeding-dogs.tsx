import Navigation from "@/components/navigation";
import BreedingDogs from "@/components/breeding-dogs";
import Footer from "@/components/footer";

export default function BreedingDogsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <BreedingDogs />
      <Footer />
    </div>
  );
}