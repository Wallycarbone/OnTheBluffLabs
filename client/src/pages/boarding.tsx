import Navigation from "@/components/navigation";
import Boarding from "@/components/boarding";
import Footer from "@/components/footer";

export default function BoardingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Boarding />
      <Footer />
    </div>
  );
}