import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PrototypePage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6 lg:py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
          🧪 TTN Prototype: Truth in Real Time
        </h1>
        
        <p className="text-lg mb-8">
          <strong>The Truth Networks</strong> is building a public platform that verifies claims as they're spoken—live, visible, and powered by real facts.
        </p>

        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          🔍 Live Demo (Coming Soon)
        </h2>
        
        <p className="mb-4">
          Below you'll see our embedded prototype. When active, it will show speech-to-text results alongside real-time fact verification.
        </p>

        <Card className="border-2 border-gray-300 rounded-lg overflow-hidden h-[600px] mb-8">
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Prototype Coming Soon</h3>
              <p className="text-gray-600 mb-4">We're working on our real-time fact checking demo</p>
              <Button variant="outline" className="bg-blue-50">
                Notify Me When It's Ready
              </Button>
            </div>
          </div>
        </Card>

        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          🧰 What This Prototype Does
        </h2>
        
        <ul className="list-none space-y-2 mb-8">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✅</span>
            <span>Converts live or recorded speech to text</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✅</span>
            <span>Parses claims and checks them against reliable sources</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✅</span>
            <span>Displays results using color-coded truth icons</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          💡 What's Coming Next
        </h2>
        
        <p className="mb-8">
          This is just the start. We're working on full video stream integration, speaker detection, and scaling to serve educators, journalists, and everyday truth-seekers.
        </p>

        <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}