import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

// Declare HubSpot global for TypeScript
declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (options: {
          portalId: string;
          formId: string;
          region: string;
          target?: string;
        }) => void;
      };
    };
  }
}

export default function PuppyApplication() {
  useEffect(() => {
    // Load HubSpot forms script
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.async = true;
    
    script.onload = () => {
      // Create HubSpot form when script loads
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
    
    // Cleanup
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-stone-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Puppy Application
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-source-sans">
            Begin your journey with On The Bluff Labradors. Please complete this comprehensive application 
            to help us ensure the perfect match between you and one of our exceptional puppies.
          </p>
        </div>

        {/* HubSpot Form Container */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <div 
              id="hubspot-form-container" 
              data-testid="hubspot-form-container"
              className="hubspot-form-container"
            ></div>
          </CardContent>
        </Card>
      </div>

      {/* Custom styling for HubSpot form */}
      <style>{`
        .hubspot-form-container .hs-form-field {
          margin-bottom: 1.5rem;
        }
        
        .hubspot-form-container .hs-form-field label {
          font-family: 'Source Sans Pro', sans-serif;
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.5rem;
          display: block;
        }
        
        .hubspot-form-container .hs-input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          font-family: 'Source Sans Pro', sans-serif;
          font-size: 1rem;
          transition: border-color 0.2s ease;
        }
        
        .hubspot-form-container .hs-input:focus {
          outline: none;
          border-color: #6d761d;
          box-shadow: 0 0 0 3px rgba(109, 118, 29, 0.1);
        }
        
        .hubspot-form-container .hs-button {
          background-color: #6d761d;
          color: white;
          padding: 0.75rem 2rem;
          border: none;
          border-radius: 0.5rem;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        
        .hubspot-form-container .hs-button:hover {
          background-color: #5a5f18;
        }
        
        .hubspot-form-container .hs-error-msg {
          color: #dc2626;
          font-size: 0.875rem;
          margin-top: 0.25rem;
        }
        
        .hubspot-form-container .hs-form-required {
          color: #dc2626;
        }
        
        .hubspot-form-container .hs-form fieldset {
          border: none;
          padding: 0;
          margin: 0;
        }
        
        .hubspot-form-container .hs-form legend {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: #111827;
          margin-bottom: 1rem;
          padding: 0;
        }
        
        .hubspot-form-container textarea.hs-input {
          min-height: 100px;
          resize: vertical;
        }
        
        .hubspot-form-container select.hs-input {
          background-image: url("data:image/svg+xml;charset=US-ASCII,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'><path fill='%23666' d='M2 0L0 2h4zm0 5L0 3h4z'/></svg>");
          background-repeat: no-repeat;
          background-position: right 0.75rem center;
          background-size: 0.75rem;
          padding-right: 2.5rem;
        }
      `}</style>
    </div>
  );
}