import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import oneRoomSchoolHouseImage from "../assets/images/one-room-school-house.png";

export default function OneRoomSchoolHousePage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      // This would connect to the newsletter API in a real implementation
      // await fetch("/api/newsletter", {...})
      
      toast({
        title: "Thank you for your interest!",
        description: "We'll keep you updated about Our One Room School House.",
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="bg-[#276EF1] text-white py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">Our One Room School House</h1>
          <p className="text-xl italic mb-0">A media literacy initiative for homeschoolers and rural youth</p>
        </div>
      </section>

      <section className="py-12 bg-[#F9F7F4]">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex justify-center">
            <img 
              src={oneRoomSchoolHouseImage} 
              alt="A traditional one-room schoolhouse with a teacher reading to attentive students"
              className="rounded-lg shadow-lg max-w-full h-auto max-h-[500px]" 
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl">
              Welcome to <strong>Our One Room School House</strong> — a place where curiosity,
              common sense, and critical thinking come together. Modeled on the spirit of
              the original one-room schools that once dotted the American landscape, this
              program offers children — especially homeschoolers and those in rural
              communities — the tools to navigate the complex world of modern media.
            </p>

            <p className="font-bold text-xl text-center my-8">
              We don't teach kids what to think. We teach them how to ask better questions.
            </p>

            <h2 className="text-2xl font-bold text-[#5C4438] mt-10">Why This Matters</h2>
            <p>
              In today's world, media is everywhere. From social feeds to streaming news,
              kids are constantly surrounded by images, headlines, and opinions. But much
              of what they see is shaped by algorithms, agendas, and advertising. We help
              young people slow down, look deeper, and think clearly.
            </p>

            <h2 className="text-2xl font-bold text-[#5C4438] mt-10">What We Teach</h2>
            <ul className="space-y-2">
              <li><strong>How to ask "What's missing?"</strong> – Every story has a surface — and a depth.</li>
              <li><strong>Spotting spin, bias, and persuasion tactics</strong> – Read between the lines.</li>
              <li><strong>Understanding sources and why they matter</strong> – Trace claims to their roots.</li>
              <li><strong>Finding truth in a noisy world</strong> – Not left. Not right. Just thoughtful.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#5C4438] mt-10">Who It's For</h2>
            <ul className="space-y-2">
              <li>Homeschooling families</li>
              <li>Rural educators and co-ops</li>
              <li>Independent learners</li>
              <li>Parents who want their kids to think freely and clearly</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#5C4438] mt-10">How It Works</h2>
            <ul className="space-y-2">
              <li>Modular lessons for mixed-age learners</li>
              <li>Printable guides and interactive exercises</li>
              <li>Video, storytelling, and offline discussion</li>
              <li>Rooted in community values, not political divides</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#5C4438] mt-10">Coming Fall 2025</h2>
            <p>
              We're piloting <strong>Our One Room School House</strong> this fall. Sign up below to stay informed
              and get early access to materials.
            </p>

            <blockquote className="italic border-l-4 border-gray-300 pl-4 my-8 text-gray-600">
              Because critical thinking shouldn't be a luxury — it should be a birthright.
            </blockquote>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-6 text-[#222222]">Stay Informed</h2>
          <p className="mb-6 text-[#222222]">
            Sign up to receive updates about the One Room School House program and be first to access our educational materials.
          </p>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow"
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-[#276EF1] hover:bg-[#1d5dc9] text-white"
            >
              {isSubmitting ? "Signing up..." : "Sign Up"}
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}