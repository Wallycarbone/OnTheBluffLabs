import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function JournalismSupportPage() {
  useEffect(() => {
    document.title = "Journalism Support Initiative - The Truth Networks";
  }, []);
  
  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              Journalism Support Initiative
            </h1>
            <p className="text-lg mb-4 text-blue-100">
              Empowering local journalists with resources, training, and tools to restore trust in the media.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#microgrants">
                <Button className="bg-white text-blue-700 hover:bg-blue-50">
                  Apply for Funding
                </Button>
              </Link>
              <Link href="#join">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Join the Network
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-4 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-4">
              In a time when misinformation spreads faster than facts, trustworthy journalism is more essential — and more endangered — than ever. The Journalism Support Initiative helps rebuild the foundation of local news and independent reporting.
            </p>
          </div>
        </div>
      </section>
      
      <section id="microgrants" className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block p-3 rounded-lg bg-blue-100 mb-4">
              <i className="fas fa-hand-holding-usd text-blue-600 text-3xl"></i>
            </div>
            <h2 className="text-3xl font-bold mb-4">Microgrants for Local Journalism</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We provide direct funding to support quality journalism where it's needed most.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="h-full transition-all hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full p-4 bg-blue-100 text-blue-600">
                    <i className="fas fa-search text-2xl"></i>
                  </div>
                </div>
                <CardTitle className="text-xl text-center">Investigative Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Support for in-depth investigations that hold power accountable and expose issues that affect your community.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="h-full transition-all hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full p-4 bg-blue-100 text-blue-600">
                    <i className="fas fa-newspaper text-2xl"></i>
                  </div>
                </div>
                <CardTitle className="text-xl text-center">Community Startups</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Funding for community-based news initiatives that fill information gaps in underserved areas.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="h-full transition-all hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full p-4 bg-blue-100 text-blue-600">
                    <i className="fas fa-graduation-cap text-2xl"></i>
                  </div>
                </div>
                <CardTitle className="text-xl text-center">Student Publications</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Grants for student-run or school-affiliated journalism projects that train the next generation of reporters.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="h-full transition-all hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full p-4 bg-blue-100 text-blue-600">
                    <i className="fas fa-users text-2xl"></i>
                  </div>
                </div>
                <CardTitle className="text-xl text-center">Diverse Voices</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Support for reporting on and by underrepresented communities, ensuring all perspectives are part of the public conversation.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Apply for a Microgrant
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block p-3 rounded-lg bg-blue-100 mb-4">
                <i className="fas fa-brain text-blue-600 text-3xl"></i>
              </div>
              <h2 className="text-3xl font-bold mb-6">Training & Mentorship</h2>
              <p className="text-lg text-gray-700 mb-8">
                We offer live and virtual workshops led by experienced journalists and media experts.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-blue-600"><i className="fas fa-check-circle"></i></span>
                  <span><strong>Media verification & digital investigation tools</strong> — Learn techniques to verify information in the digital age</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-blue-600"><i className="fas fa-check-circle"></i></span>
                  <span><strong>Reporting in the age of AI</strong> — Navigate algorithmic manipulation and leverage AI ethically</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-blue-600"><i className="fas fa-check-circle"></i></span>
                  <span><strong>Storytelling for impact</strong> — Craft narratives that drive civic engagement</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-blue-600"><i className="fas fa-check-circle"></i></span>
                  <span><strong>Trauma-informed reporting</strong> — Approach sensitive stories with care and responsibility</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-blue-600"><i className="fas fa-check-circle"></i></span>
                  <span><strong>Ethics and bias in journalism</strong> — Maintain integrity while navigating complex issues</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Request Training
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="rounded-lg shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Journalism training session" 
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block p-3 rounded-lg bg-blue-100 mb-4">
              <i className="fas fa-tools text-blue-600 text-3xl"></i>
            </div>
            <h2 className="text-3xl font-bold mb-4">Tech Tools for Newsrooms</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We're building and sharing open-source or low-cost tools to empower journalists in the digital age.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <i className="fas fa-check-double text-blue-600 mr-2"></i> Real-time Verification
              </h3>
              <p className="text-gray-700">
                Tools that help journalists quickly verify claims, images, and sources during breaking news situations.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <i className="fas fa-robot text-blue-600 mr-2"></i> Ethical AI Research
              </h3>
              <p className="text-gray-700">
                AI-assisted research tools designed to help journalists without introducing algorithmic bias or filter bubbles.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <i className="fas fa-tag text-blue-600 mr-2"></i> Trust-Building Tools
              </h3>
              <p className="text-gray-700">
                Source transparency tags, methodology explainers, and other tools to help audiences understand and trust your work.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <i className="fas fa-shield-alt text-blue-600 mr-2"></i> Secure Collaboration
              </h3>
              <p className="text-gray-700">
                Private, secure spaces for journalists to collaborate across newsrooms while protecting sources and sensitive information.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Access to Tools
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <section id="join" className="py-16 sm:py-20 bg-blue-800 text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block p-3 rounded-lg bg-white mb-4">
              <i className="fas fa-handshake text-blue-600 text-3xl"></i>
            </div>
            <h2 className="text-3xl font-bold mb-4">Calling All Journalists</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Whether you're an independent reporter, student journalist, or part of a newsroom — we want to work with you. We're building a network of truth defenders who believe in media as a public good.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-blue-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Get Involved</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3 text-blue-300"><i className="fas fa-arrow-right"></i></span>
                  <span>Submit your work for amplification</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-blue-300"><i className="fas fa-arrow-right"></i></span>
                  <span>Share your needs with us</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-blue-300"><i className="fas fa-arrow-right"></i></span>
                  <span>Join our media literacy workshops as a speaker</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-blue-300"><i className="fas fa-arrow-right"></i></span>
                  <span>Help us map where journalism is most at risk</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Why Join?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3 text-blue-300"><i className="fas fa-check"></i></span>
                  <span>Access to funding opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-blue-300"><i className="fas fa-check"></i></span>
                  <span>Professional development and training</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-blue-300"><i className="fas fa-check"></i></span>
                  <span>Collaboration with other journalists</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-blue-300"><i className="fas fa-check"></i></span>
                  <span>Technological tools and resources</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/contact">
              <Button className="bg-white text-blue-700 hover:bg-blue-50">
                Join the Journalism Support Network
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}