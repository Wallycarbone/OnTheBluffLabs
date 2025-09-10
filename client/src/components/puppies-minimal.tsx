import React from "react";
import { Button } from "@/components/ui/button";

export default function Puppies() {
  return (
    <section id="puppies" className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Our Puppies
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover our beautiful Labrador puppies from champion bloodlines.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            Contact Us About Puppies
          </Button>
        </div>
      </div>
    </section>
  );
}