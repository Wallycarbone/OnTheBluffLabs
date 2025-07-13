import { useEffect, useState } from "react";
import { Link } from "wouter";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

interface DonationOption {
  id: number;
  amount: number;
  title: string;
  description: string;
}

export default function ContributePage() {
  useEffect(() => {
    document.title = "Contribute - The Truth Networks";
  }, []);

  return (
    <>
      {/* Top section with Cobalt Blue background */}
      <section className="bg-[#276EF1] text-white py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Support The Truth Networks Foundation</h1>
          
          <div className="prose prose-lg prose-invert max-w-3xl mx-auto mb-8">
            <p className="text-xl mb-6">
              Your contribution fuels our work to defend truth, empower communities, and strengthen media literacy across the country.
            </p>
            
            <p className="mb-8 text-white/90 text-base">
              The Truth Networks Foundation has officially applied for 501(c)(3) tax-exempt status with the IRS. Once approved, our exemption will be retroactive to the date of filing, and contributions made during this period may be treated as tax-deductible to the extent allowed by law.
            </p>
            
            <p className="font-medium text-xl italic">
              "Together, we can rebuild trust — one truth at a time."
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Contribute Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-10 text-[#222222]">Ways to Contribute</h2>
          
          <div className="flex flex-col gap-6 mb-12">
            <a 
              href="#" 
              className="bg-[#276EF1] hover:bg-[#1d5dc9] text-white font-bold py-4 px-6 rounded-md transition-all text-lg"
            >
              Donate via Credit Card (Square)
            </a>
            
            <a 
              href="#" 
              className="bg-[#14532D] hover:bg-[#0f3d22] text-white font-bold py-4 px-6 rounded-md transition-all text-lg"
            >
              Donate via PayPal
            </a>
          </div>
          
          <div className="mt-16 text-left">
            <h3 className="text-2xl font-bold mb-4 text-[#222222]">Important Tax Information</h3>
            <p className="text-[#222222]">
              The Truth Networks Foundation operates under Hudson River Products (DBA: The Truth Networks Foundation) while our nonprofit status is pending. Contributions made during this time are expected to qualify for tax-deductibility once 501(c)(3) status is granted. Please consult your tax advisor for personal guidance.
            </p>
          </div>
        </div>
      </section>
      
      {/* Seed Fund Contributors Section */}
      <section className="py-16 bg-[#EFF6FF]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-center mb-6 text-[#222222]">SEED FUND CONTRIBUTORS</h2>
            <p className="text-lg mb-10 text-[#222222]">
              We extend our deepest gratitude to our earliest supporters who believed in our mission and helped launch The Truth Networks.
            </p>
            
            <div className="bg-white rounded-lg p-8 shadow-md">
              <p className="text-lg mb-4 text-[#222222]">
                To discuss major contributions and learn more about our seed fund, please contact us directly.
              </p>
            </div>
            
            <p className="mt-8 text-[#222222]">
              To join our seed fund contributors and be recognized on our website, please contact us at <a href="mailto:contributions@thetruthnetworks.com" className="text-[#276EF1] font-medium">contributions@thetruthnetworks.com</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
