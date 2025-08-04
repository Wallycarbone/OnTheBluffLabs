import Navigation from "@/components/navigation";
import Facilities from "@/components/facilities";
import Footer from "@/components/footer";

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Facilities />
      <Footer />
    </div>
  );
}