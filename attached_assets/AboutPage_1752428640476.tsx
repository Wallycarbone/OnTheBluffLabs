import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Us - The Truth Networks";
  }, []);

  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn about our mission and values at The Truth Networks.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              We are living through an information revolution — and with it, a reckoning. Misinformation floods our feeds. Trust in institutions has fractured. The line between truth and falsehood has blurred.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              We came together — journalists, technologists, educators, and everyday truth-seekers — not simply to fight misinformation, but to reimagine how we engage with media itself. We realized that fact-checking alone wasn't enough. We needed something deeper: a rewiring of our relationship to information.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              That's how The Truth Networks was born.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              We are building tools and training that empower people to think critically, verify confidently, and navigate the digital world with clarity and courage. This isn't about returning to an old ideal — it's about shaping a new one. A future where truth is a shared pursuit, and media literacy is as essential as reading or math.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              This is our story — and it belongs to everyone who believes that truth still matters.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 text-blue-800 p-6 rounded-lg mb-8">
              <p className="text-lg font-medium">
                We're currently in formation as a nonprofit. Your contribution supports the early development of TTN's tools, media literacy programs, and public education efforts.
              </p>
            </div>
            
            <h2 className="text-3xl font-bold mt-12 mb-6">Our Values</h2>
            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">Truth & Accuracy</h3>
                <p className="text-gray-700">We pursue truth relentlessly and are committed to delivering information that is evidence-based, clear, and independently verified.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">Transparency</h3>
                <p className="text-gray-700">We show our work. Our sources, methods, and partnerships are open for all to see.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">Inclusivity</h3>
                <p className="text-gray-700">We serve diverse communities across language, geography, and experience — because truth must be accessible to everyone.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">Independence</h3>
                <p className="text-gray-700">We are not driven by political or commercial interests. Our only agenda is truth.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">Education</h3>
                <p className="text-gray-700">We believe education is the long game — and the most powerful tool we have to create a more informed, connected, and democratic society.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
