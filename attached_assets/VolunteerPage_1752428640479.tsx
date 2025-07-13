import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function VolunteerPage() {
  useEffect(() => {
    document.title = "Volunteer - The Truth Networks";
  }, []);

  return (
    <>
      {/* Header Section with Cobalt Blue background */}
      <section className="bg-[#276EF1] text-white py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">Join Us — a Call to Volunteers</h1>
          
          <div className="prose prose-lg prose-invert max-w-3xl mx-auto mb-10">
            <p className="text-xl leading-relaxed">
              The Truth Networks Foundation is building something bigger than a project.
              We are building a movement. A movement to restore trust. A movement to rebuild the bridge between fact and understanding.
              A movement to bring truth back into the heart of public life — one community, one conversation, one mind at a time.
            </p>
            
            <p className="text-2xl font-bold mt-8">
              And we need you.
            </p>
          </div>
        </div>
      </section>

      {/* Body Section with white background */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-[#222222]">
            <p className="text-xl leading-relaxed">
              We welcome people of all ages and backgrounds to participate in our mission to combat misinformation and promote media literacy. The Truth Networks Foundation is proudly nonpartisan, open to individuals from all political traditions who share our commitment to truth, accuracy, and the importance of reliable information in a democracy.
            </p>
            
            <p className="text-xl leading-relaxed mt-6">
              Whether you're experienced in journalism, education, public service, or any other field, your perspective and skills can contribute to our collective effort. We believe that diverse viewpoints strengthen our work and help us reach more communities with crucial media literacy tools and resources.
            </p>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-10 text-[#222222]">Who We Need</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Category 1 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-[#222222]">Journalists and Writers</h3>
                <ul className="list-disc list-inside space-y-2 text-[#222222]">
                  <li>Fact-checking and source verification</li>
                  <li>Creating educational content about media literacy</li>
                  <li>Contributing to our truth-focused publications</li>
                  <li>Mentoring aspiring truth-tellers</li>
                </ul>
              </div>
              
              {/* Category 2 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-[#222222]">Educators and Teachers</h3>
                <ul className="list-disc list-inside space-y-2 text-[#222222]">
                  <li>Developing curriculum for K-12 media literacy</li>
                  <li>Facilitating community workshops</li>
                  <li>Creating assessment tools for critical thinking</li>
                  <li>Training other educators in media literacy techniques</li>
                </ul>
              </div>
              
              {/* Category 3 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-[#222222]">Current and Former Public Servants</h3>
                <ul className="list-disc list-inside space-y-2 text-[#222222]">
                  <li>Providing expertise on information transparency</li>
                  <li>Advising on policy recommendations</li>
                  <li>Building bridges between communities and institutions</li>
                  <li>Supporting civic education initiatives</li>
                </ul>
              </div>
              
              {/* Category 4 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-[#222222]">Professionals from the Private Sector</h3>
                <ul className="list-disc list-inside space-y-2 text-[#222222]">
                  <li>Offering business and operational expertise</li>
                  <li>Supporting technology development</li>
                  <li>Assisting with marketing and communications</li>
                  <li>Providing legal and financial guidance</li>
                </ul>
              </div>
              
              {/* Category 5 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-[#222222]">Faith Leaders, Artists, Engineers, Veterans</h3>
                <ul className="list-disc list-inside space-y-2 text-[#222222]">
                  <li>Connecting communities with media literacy resources</li>
                  <li>Creating engaging content about truth and trust</li>
                  <li>Building tools for information verification</li>
                  <li>Sharing diverse perspectives on information integrity</li>
                </ul>
              </div>
              
              {/* Category 6 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-[#222222]">Dreamers and Changemakers</h3>
                <ul className="list-disc list-inside space-y-2 text-[#222222]">
                  <li>Bringing fresh ideas to fight misinformation</li>
                  <li>Engaging young people in media literacy</li>
                  <li>Designing innovative solutions for information challenges</li>
                  <li>Connecting across generations for truth advocacy</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <a 
                href="https://forms.gle/e9LQkVj9u33qpsox9" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  className="bg-[#14532D] hover:bg-[#1a6538] text-white font-bold py-4 px-8 rounded-md text-lg"
                >
                  Become a Volunteer
                </Button>
              </a>
              
              <p className="text-[#222222] mt-6">
                To join our volunteer team, you can also email us at <a href="mailto:volunteer@thetruthnetworks.com" className="text-[#276EF1] font-medium hover:underline">volunteer@thetruthnetworks.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}