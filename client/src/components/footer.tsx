import { useState } from "react";
import { Link } from "wouter";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <footer className="py-12" style={{backgroundColor: '#11100f', color: '#fefefe'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-2xl font-oswald font-normal mb-6 tracking-wide">
              ON THE BLUFF LABRADORS
            </h3>
            <p className="mb-4 font-source-sans" style={{color: '#ebebeb'}}>
              English Labradors Bred for Beauty & Temperament
            </p>
            <a href="https://www.bbb.org/us/ny/germantown/profile/dog-training/on-the-bluff-labradors-0041-235983130/#sealclick" target="_blank" rel="nofollow">
              <img src="https://seal-upstateny.bbb.org/seals/black-seal-150-110-whitetxt-bbb-235983130.png" style={{border: 0}} alt="On the Bluff Labradors BBB Business Review" />
            </a>
          </div>
          
          <div>
            <h4 className="text-lg font-oswald font-normal mb-4 tracking-wide">QUICK LINKS</h4>
            <ul className="grid grid-cols-2 gap-2">
              <li>
                <Link 
                  href="/breeding-dogs"
                  className="font-source-sans text-gray-300 hover:text-golden transition-colors"
                >
                  Our Dogs
                </Link>
              </li>
              <li>
                <Link 
                  href="/puppies"
                  className="font-source-sans text-gray-300 hover:text-golden transition-colors"
                >
                  Puppy Placement
                </Link>
              </li>
              <li>
                <Link 
                  href="/training"
                  className="font-source-sans text-gray-300 hover:text-golden transition-colors"
                >
                  Training
                </Link>
              </li>
              <li>
                <Link 
                  href="/raw-dog-food"
                  className="font-source-sans text-gray-300 hover:text-golden transition-colors"
                >
                  Raw Dog Food
                </Link>
              </li>
              <li>
                <Link 
                  href="/boarding"
                  className="font-source-sans text-gray-300 hover:text-golden transition-colors"
                >
                  Board & Train
                </Link>
              </li>
              <li>
                <Link 
                  href="/health-testing"
                  className="font-source-sans text-gray-300 hover:text-golden transition-colors"
                >
                  Holistic Health
                </Link>
              </li>
              <li>
                <Link 
                  href="/facilities"
                  className="font-source-sans text-gray-300 hover:text-golden transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact"
                  className="font-source-sans text-gray-300 hover:text-golden transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-oswald font-normal mb-4 tracking-wide">PHOTO ARCHIVE</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/halloween-contest"
                  className="font-source-sans text-gray-300 hover:text-golden transition-colors"
                >
                  2025 Halloween Costume Contest
                </Link>
              </li>
              <li>
                <Link 
                  href="/gratitude"
                  className="font-source-sans text-gray-300 hover:text-golden transition-colors"
                >
                  Gratitude for 2025
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-oswald font-normal mb-4 tracking-wide">CONTACT INFO</h4>
            <ul className="space-y-2">
              <li className="font-source-sans text-gray-300">165 Northern Boulevard</li>
              <li className="font-source-sans text-gray-300">Germantown, NY</li>
              <li className="font-source-sans text-gray-300 text-sm mt-2 italic">
                Visits to our grounds are by appointment ONLY.<br />
                Unannounced visitors will be turned away, without exception.
              </li>
              <li className="font-source-sans text-gray-300 mt-3">(518) 537-7000</li>
              <li className="font-source-sans text-gray-300">info@ontheblufflabradors.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="font-source-sans text-gray-300">
            &copy; 2025 On The Bluff Labradors. All rights reserved.
          </p>
          <button
            onClick={() => setIsPrivacyOpen(true)}
            className="font-source-sans text-gray-400 hover:text-golden transition-colors text-sm mt-2 underline"
          >
            Privacy Policy
          </button>
        </div>
      </div>

      <Dialog open={isPrivacyOpen} onOpenChange={setIsPrivacyOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-oswald text-2xl font-normal tracking-wide">Privacy Notice</DialogTitle>
          </DialogHeader>
          <div className="font-source-sans text-sm text-gray-700 space-y-4">
            <p>This privacy notice discloses the privacy practices for ontheblufflabradors.com. This privacy notice applies solely to information collected by this website. It will notify you of the following:</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>What personally identifiable information is collected from you through the website, how it is used and with whom it may be shared.</li>
              <li>What choices are available to you regarding the use of your data.</li>
              <li>The security procedures in place to protect the misuse of your information.</li>
              <li>How you can correct any inaccuracies in the information.</li>
            </ol>

            <h3 className="font-oswald text-lg font-normal tracking-wide text-gray-900 pt-2">Information Collection, Use, and Sharing</h3>
            <p>We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone.</p>
            <p>We will use your information to respond to you regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order.</p>
            <p>Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.</p>

            <h3 className="font-oswald text-lg font-normal tracking-wide text-gray-900 pt-2">Your Access to and Control Over Information</h3>
            <p>You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>See what data we have about you, if any.</li>
              <li>Change/correct any data we have about you.</li>
              <li>Have us delete any data we have about you.</li>
              <li>Express any concern you have about our use of your data.</li>
            </ul>

            <h3 className="font-oswald text-lg font-normal tracking-wide text-gray-900 pt-2">Security</h3>
            <p>We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.</p>
            <p>Wherever we collect sensitive information (such as credit card data), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a closed lock icon at the bottom of your web browser, or looking for "https" at the beginning of the address of the web page.</p>
            <p>While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.</p>
            <p>If you feel that we are not abiding by this privacy policy, you should contact us immediately via telephone at <strong>(518) 537-7000</strong> or via email at <strong>info@ontheblufflabradors.com</strong>.</p>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
}
