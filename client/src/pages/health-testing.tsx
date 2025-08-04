import Navigation from "@/components/navigation";
import HealthTesting from "@/components/health-testing";
import Footer from "@/components/footer";

export default function HealthTestingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HealthTesting />
      <Footer />
    </div>
  );
}