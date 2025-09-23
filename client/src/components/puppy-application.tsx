import { useEffect } from "react";

// Declare HubSpot types for TypeScript
declare global {
  interface Window {
    hbspt: any;
  }
}

export default function PuppyApplication() {
  useEffect(() => {
    // Load HubSpot forms script
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.async = true;

    script.onload = () => {
      // Create HubSpot form once script is loaded
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "44843117",
          formId: "f5c4c18d-5722-43bd-8e6b-94fcb10c4343",
          region: "na1",
          target: '#hubspot-form-container'
        });
      }
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom right, #fefefe 0%, #ebebeb 100%)' }}>
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-oswald font-normal tracking-wide mb-6" style={{color: '#11100f'}}>
            PUPPY MATCHING QUESTIONNAIRE
          </h1>
          <p className="text-xl font-source-sans leading-relaxed max-w-3xl mx-auto" style={{color: '#4b4b4b'}}>
            Help us find your perfect companion! Complete this questionnaire so we can match you with the ideal puppy for your family and lifestyle.
          </p>
        </div>

        {/* HubSpot Form Container */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div id="hubspot-form-container" className="hubspot-form-wrapper">
            {/* HubSpot form will be injected here */}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <p className="text-lg font-source-sans" style={{color: '#6d761d'}}>
            Questions about the application process? 
            <span className="block mt-2 text-warm-gray">
              Contact us at <strong>info@ontheblufflabradors.com</strong> or call <strong>(518) 537-6035</strong>
            </span>
          </p>
        </div>
      </div>

      <style>{`
        .hubspot-form-wrapper .hs-form fieldset {
          max-width: none !important;
        }
        
        .hubspot-form-wrapper .hs-form .hs-form-field {
          margin-bottom: 1.5rem;
        }
        
        .hubspot-form-wrapper .hs-form label {
          font-family: 'Oswald', sans-serif;
          font-weight: 400;
          color: #6d761d;
          margin-bottom: 0.5rem;
          display: block;
        }
        
        .hubspot-form-wrapper .hs-form input,
        .hubspot-form-wrapper .hs-form textarea,
        .hubspot-form-wrapper .hs-form select {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid #e5e7eb;
          border-radius: 0.5rem;
          font-family: 'Source Sans Pro', sans-serif;
          font-size: 1rem;
          transition: border-color 0.2s ease;
        }
        
        .hubspot-form-wrapper .hs-form input:focus,
        .hubspot-form-wrapper .hs-form textarea:focus,
        .hubspot-form-wrapper .hs-form select:focus {
          outline: none;
          border-color: #6d761d;
        }
        
        .hubspot-form-wrapper .hs-form .hs-button {
          background: linear-gradient(135deg, #6d761d 0%, #8b9123 30%, #a5b028 70%, #8b9123 100%);
          color: #fefefe;
          padding: 1rem 2rem;
          border: none;
          border-radius: 0.75rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(109, 118, 29, 0.2);
        }
        
        .hubspot-form-wrapper .hs-form .hs-button:hover {
          background: linear-gradient(135deg, #8b9123 0%, #a5b028 30%, #c4d12a 70%, #a5b028 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 15px rgba(109, 118, 29, 0.3);
        }
      `}</style>
    </div>
  );
}