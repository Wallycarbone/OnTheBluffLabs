import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import DogFoodPage from "@/components/dog-food";

export default function DogFood() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <DogFoodPage />
      <Footer />
    </div>
  );
}