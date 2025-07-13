import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import K12ProgramsSection from "@/components/education/K12ProgramsSection";
import k12StudentsImage from "../assets/images/k12-media-literacy-students.png";
import misinformationShieldImage from "../assets/images/k12-misinformation-shield.png";

export default function K12EducationPage() {
  useEffect(() => {
    document.title = "K-12 Media Literacy Programs - The Truth Networks";
  }, []);
  
  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Media Literacy for K-12 Students
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Equipping young minds with the skills to navigate today's information landscape and become responsible digital citizens.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-white text-blue-800 hover:bg-blue-50">
                    Request Program
                  </Button>
                </Link>
                <Link href="#resources">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Explore Resources
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img 
                src={k12StudentsImage} 
                alt="Students with media literacy skills" 
                className="rounded-lg w-full h-auto shadow-xl border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </section>
      
      <K12ProgramsSection />
      
      <section id="resources" className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Classroom Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center">
                <i className="fas fa-file-pdf text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Lesson Plans</h3>
              <p className="text-gray-600 mb-4">
                Ready-to-use, standards-aligned lessons for all grade levels that integrate media literacy into core subjects.
              </p>
              <Link href="/our-work">
                <Button variant="outline" size="sm">Download Plans</Button>
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <i className="fas fa-video text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Educational Videos</h3>
              <p className="text-gray-600 mb-4">
                Engaging video series on fact-checking, spotting misinformation, and understanding media bias.
              </p>
              <Link href="/our-work">
                <Button variant="outline" size="sm">Watch Videos</Button>
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                <i className="fas fa-gamepad text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Interactive Activities</h3>
              <p className="text-gray-600 mb-4">
                Games, quizzes, and hands-on exercises that make learning about media literacy fun and engaging.
              </p>
              <Link href="/our-work">
                <Button variant="outline" size="sm">Try Activities</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Impact of Our K-12 Programs</h2>
            <p className="text-lg text-gray-700 mb-10">
              Our programs have reached over 500 schools and 100,000 students nationwide, with measurable improvements in critical thinking and media analysis skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">94%</h3>
              <p className="text-gray-600">of teachers report improved student critical thinking skills</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">87%</h3>
              <p className="text-gray-600">of students show increased ability to identify misinformation</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
              <p className="text-gray-600">schools have adopted our curriculum nationwide</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">100k+</h3>
              <p className="text-gray-600">students reached through our educational programs</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 sm:py-20 bg-blue-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-white shadow-xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl font-bold mb-6">Bring Media Literacy to Your School</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our team works with schools, districts, and educational organizations to implement customized media literacy programs that meet specific educational objectives.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-green-500"><i className="fas fa-check-circle"></i></span>
                    <span>Customized to your curriculum and standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-green-500"><i className="fas fa-check-circle"></i></span>
                    <span>Teacher training and ongoing support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-green-500"><i className="fas fa-check-circle"></i></span>
                    <span>Assessment tools to measure impact</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-green-500"><i className="fas fa-check-circle"></i></span>
                    <span>Parent resources and community workshops</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Request a Consultation
                  </Button>
                </Link>
              </div>
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <img 
                    src={misinformationShieldImage} 
                    alt="Student with shield protecting against misinformation" 
                    className="max-w-full h-auto rounded-lg mx-auto mb-4 shadow-md" 
                  />
                  <h3 className="text-xl font-bold text-orange-800 mb-2">Armor Students Against Misinformation</h3>
                  <p className="text-orange-700">
                    Our programs build digital resilience and critical thinking skills that protect students from misleading content online.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}