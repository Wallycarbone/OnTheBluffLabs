import Navigation from "@/components/navigation";
import About from "@/components/about";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <About />
      <Footer />
    </div>
  );
}