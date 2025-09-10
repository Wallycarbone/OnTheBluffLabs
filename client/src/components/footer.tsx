import { Link } from "wouter";

export default function Footer() {

  return (
    <footer className="py-12" style={{backgroundColor: '#11100f', color: '#fefefe'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-oswald font-normal mb-6 tracking-wide">
              ON THE BLUFF LABRADORS
            </h3>
            <p className="mb-4 font-source-sans" style={{color: '#ebebeb'}}>
              Labradors Bred for Beauty & Temperament
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-oswald font-normal mb-4 tracking-wide">QUICK LINKS</h4>
            <ul className="grid grid-cols-2 gap-2">
              <li>
                <Link 
                  href="/about"
                  className="font-source-sans text-gray-300 hover:text-golden transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/puppies"
                  className="font-source-sans text-gray-300 hover:text-golden transition-colors"
                >
                  Available Puppies
                </Link>
              </li>
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
                  href="/health-testing"
                  className="font-source-sans text-gray-300 hover:text-golden transition-colors"
                >
                  Holistic Health
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
                  href="/facilities"
                  className="font-source-sans text-gray-300 hover:text-golden transition-colors"
                >
                  Facilities
                </Link>
              </li>
              <li>
                <Link 
                  href="/boarding"
                  className="font-source-sans text-gray-300 hover:text-golden transition-colors"
                >
                  Boarding
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
            <h4 className="text-lg font-oswald font-normal mb-4 tracking-wide">CONTACT INFO</h4>
            <ul className="space-y-2">
              <li className="font-source-sans text-gray-300">165 Northern Boulevard</li>
              <li className="font-source-sans text-gray-300">Germantown, NY</li>
              <li className="font-source-sans text-gray-300 text-sm mt-2 italic">
                Visits to our grounds are by appointment ONLY.<br />
                Unannounced visitors will be turned away, without exception.
              </li>
              <li className="font-source-sans text-gray-300 mt-3">(518) 855-6705</li>
              <li className="font-source-sans text-gray-300">info@ontheblufflabradors.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="font-source-sans text-gray-300">
&copy; 2025 On The Bluff Labradors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
