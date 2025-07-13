import { useEffect } from "react";
import ContactSection from "@/components/contact/ContactSection";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact Us - The Truth Networks";
  }, []);

  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with our team for inquiries, partnerships, or support.
          </p>
        </div>
      </section>

      <ContactSection />

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Volunteer With Us</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            We're always looking for passionate volunteers to help with our mission. Whether you're a researcher, educator, technologist, or simply someone who cares about fighting misinformation, we'd love to have you join our team.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Current Volunteer Opportunities</h3>
            <ul className="text-left space-y-3 mb-6">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-[#2e7d32] mt-1 mr-3"></i>
                <span><strong>Fact Checkers:</strong> Help verify information and research claims.</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-[#2e7d32] mt-1 mr-3"></i>
                <span><strong>Workshop Facilitators:</strong> Lead media literacy workshops in communities.</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-[#2e7d32] mt-1 mr-3"></i>
                <span><strong>Content Creators:</strong> Develop educational materials about media literacy.</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-[#2e7d32] mt-1 mr-3"></i>
                <span><strong>Tech Volunteers:</strong> Support our digital tools and platforms.</span>
              </li>
            </ul>
            <p className="mb-6">
              To volunteer, please email us at <a href="mailto:volunteer@thetruthnetworks.com" className="text-primary hover:underline">volunteer@thetruthnetworks.com</a> with your areas of interest and availability.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
