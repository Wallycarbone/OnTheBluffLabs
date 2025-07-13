import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import CommunityWorkshopsSection from "@/components/workshops/CommunityWorkshopsSection";

export default function CommunityWorkshopsPage() {
  useEffect(() => {
    document.title = "Community Workshops - The Truth Networks";
  }, []);
  
  return (
    <>
      <section className="bg-gradient-to-r from-amber-500 to-amber-700 text-white py-8">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              Community Workshops
            </h1>
            <p className="text-lg mb-4 text-amber-100">
              Free, local and virtual workshops empowering communities to fight misinformation together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-white text-amber-700 hover:bg-amber-50">
                  Request a Workshop
                </Button>
              </Link>
              <Link href="#resources">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  View Resources
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
              Our workshops are open to the public and designed for every age and background. We teach the skills needed to spot false claims, verify sources, and have smarter conversations about what we see online — from social media to news headlines.
            </p>
          </div>
        </div>
      </section>
      
      <CommunityWorkshopsSection />
      
      <section id="resources" className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What We Cover</h2>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 mb-16">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-amber-600"><i className="fas fa-check-circle"></i></span>
                <span>How to spot misinformation and disinformation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-amber-600"><i className="fas fa-check-circle"></i></span>
                <span>How to fact-check online content in minutes</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-amber-600"><i className="fas fa-check-circle"></i></span>
                <span>How to evaluate the credibility of sources and images</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-amber-600"><i className="fas fa-check-circle"></i></span>
                <span>How to understand bias, algorithms, and echo chambers</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-amber-600"><i className="fas fa-check-circle"></i></span>
                <span>How to talk to others about misinformation constructively</span>
              </li>
            </ul>
          </div>
          
          <h2 className="text-3xl font-bold text-center mb-8">Fact-Checking Tools</h2>
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            These are free, trusted websites used by journalists, researchers, and educators:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <a href="https://www.snopes.com/" target="_blank" rel="noreferrer" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <i className="fas fa-search-location text-amber-600 mr-2"></i> Snopes
              </h3>
              <p className="text-gray-700">
                Investigates rumors, viral stories, and conspiracy theories.
              </p>
            </a>
            
            <a href="https://www.politifact.com/" target="_blank" rel="noreferrer" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <i className="fas fa-balance-scale text-amber-600 mr-2"></i> PolitiFact
              </h3>
              <p className="text-gray-700">
                Rates political claims on the Truth-O-Meter.
              </p>
            </a>
            
            <a href="https://www.factcheck.org/" target="_blank" rel="noreferrer" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <i className="fas fa-clipboard-check text-amber-600 mr-2"></i> FactCheck.org
              </h3>
              <p className="text-gray-700">
                A nonpartisan resource for checking U.S. political statements and ads.
              </p>
            </a>
            
            <a href="https://leadstories.com/" target="_blank" rel="noreferrer" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <i className="fas fa-newspaper text-amber-600 mr-2"></i> Lead Stories
              </h3>
              <p className="text-gray-700">
                Fact-checks trending stories and debunks hoaxes.
              </p>
            </a>
            
            <a href="https://factcheck.afp.com/" target="_blank" rel="noreferrer" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <i className="fas fa-globe text-amber-600 mr-2"></i> AFP Fact Check
              </h3>
              <p className="text-gray-700">
                Global fact-checking from Agence France-Presse, especially strong on image and video verification.
              </p>
            </a>
            
            <a href="https://toolbox.google.com/factcheck/explorer" target="_blank" rel="noreferrer" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <i className="fab fa-google text-amber-600 mr-2"></i> Google Fact Check Explorer
              </h3>
              <p className="text-gray-700">
                Search engine for fact-checks from reputable organizations.
              </p>
            </a>
            
            <a href="https://mediabiasfactcheck.com/" target="_blank" rel="noreferrer" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <i className="fas fa-filter text-amber-600 mr-2"></i> Media Bias/Fact Check
              </h3>
              <p className="text-gray-700">
                Assesses source bias and factual reporting records.
              </p>
            </a>
            
            <a href="https://www.newsguardtech.com/" target="_blank" rel="noreferrer" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <i className="fas fa-shield-alt text-amber-600 mr-2"></i> NewsGuard
              </h3>
              <p className="text-gray-700">
                Browser extension that provides trust ratings for news sources (freemium).
              </p>
            </a>
            
            <a href="https://infodemic.blog/2020/03/19/sift-the-four-moves/" target="_blank" rel="noreferrer" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <i className="fas fa-compass text-amber-600 mr-2"></i> The SIFT Method
              </h3>
              <p className="text-gray-700">
                A simple, effective 4-step strategy: Stop, Investigate the source, Find better coverage, Trace claims to the original.
              </p>
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-amber-50 shadow-xl p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-center mb-8">Bring a Workshop to Your School, Library, or Community Center</h2>
            <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-10">
              We offer customized sessions for:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-graduation-cap text-amber-600 text-xl"></i>
                </div>
                <h3 className="font-bold mb-2">Teens and students</h3>
                <p className="text-gray-600">Grades 6–12</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-user-friends text-amber-600 text-xl"></i>
                </div>
                <h3 className="font-bold mb-2">Seniors and lifelong learners</h3>
                <p className="text-gray-600">All ages welcome</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-chalkboard-teacher text-amber-600 text-xl"></i>
                </div>
                <h3 className="font-bold mb-2">Parents and educators</h3>
                <p className="text-gray-600">Special curriculum</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-building text-amber-600 text-xl"></i>
                </div>
                <h3 className="font-bold mb-2">Civic organizations</h3>
                <p className="text-gray-600">And local media</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-xl font-bold italic text-gray-800 mb-8">
                "We believe the truth is a team effort."
              </p>
              <div className="max-w-md mx-auto">
                <p className="text-gray-700 mb-8">
                  If you're interested in hosting a workshop or collaborating with us, get in touch here — or sign up for an upcoming virtual session.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/contact">
                    <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                      Contact Us
                    </Button>
                  </Link>
                  <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
                    <i className="fas fa-calendar-alt mr-2"></i> View Schedule
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}