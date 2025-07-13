import { useEffect } from "react";

// Define categories for fact-checking sources
interface FactCheckingSource {
  id: number;
  name: string;
  description: string;
  website: string;
  country: string;
  category: string;
}

export default function RealTimeFactCheckingPage() {
  useEffect(() => {
    document.title = "Real-time Fact Checking Data Sources - The Truth Networks";
  }, []);

  // Categories of fact-checking sources
  const categories = [
    "International Organizations",
    "News Media Fact-Checkers",
    "Independent Fact-Checking Organizations",
    "Academic Institutions",
    "Government & Regulatory Bodies"
  ];

  // 49 verified fact-checking sources
  const factCheckingSources: FactCheckingSource[] = [
    // International Organizations
    {
      id: 1,
      name: "International Fact-Checking Network (IFCN)",
      description: "A unit of the Poynter Institute dedicated to bringing together fact-checkers worldwide.",
      website: "https://www.poynter.org/ifcn/",
      country: "Global",
      category: "International Organizations"
    },
    {
      id: 2,
      name: "First Draft",
      description: "Coalition fighting mis- and disinformation through research and practice.",
      website: "https://firstdraftnews.org/",
      country: "Global",
      category: "International Organizations"
    },
    {
      id: 3,
      name: "WHO Information Network for Epidemics",
      description: "WHO's fact-checking program for health information.",
      website: "https://www.who.int/teams/risk-communication",
      country: "Global",
      category: "International Organizations"
    },
    
    // News Media Fact-Checkers
    {
      id: 4,
      name: "AP Fact Check",
      description: "Fact-checking service from The Associated Press.",
      website: "https://apnews.com/hub/ap-fact-check",
      country: "United States",
      category: "News Media Fact-Checkers"
    },
    {
      id: 5,
      name: "Reuters Fact Check",
      description: "Reuters' dedicated fact-checking unit.",
      website: "https://www.reuters.com/fact-check",
      country: "Global",
      category: "News Media Fact-Checkers"
    },
    {
      id: 6,
      name: "BBC Reality Check",
      description: "The BBC's fact-checking service examining claims and stories in the news.",
      website: "https://www.bbc.com/news/reality_check",
      country: "United Kingdom",
      category: "News Media Fact-Checkers"
    },
    {
      id: 7,
      name: "Washington Post Fact Checker",
      description: "Fact-checking service that rates political claims on a scale of one to four Pinocchios.",
      website: "https://www.washingtonpost.com/news/fact-checker/",
      country: "United States",
      category: "News Media Fact-Checkers"
    },
    {
      id: 8,
      name: "USA Today Fact Check",
      description: "USA Today's verification team for fact-checking current claims.",
      website: "https://www.usatoday.com/news/factcheck/",
      country: "United States",
      category: "News Media Fact-Checkers"
    },
    {
      id: 9,
      name: "Le Monde Décodeurs",
      description: "French newspaper Le Monde's fact-checking section.",
      website: "https://www.lemonde.fr/les-decodeurs/",
      country: "France",
      category: "News Media Fact-Checkers"
    },
    
    // Independent Fact-Checking Organizations
    {
      id: 10,
      name: "Snopes",
      description: "One of the oldest fact-checking websites focused on urban legends and misinformation.",
      website: "https://www.snopes.com/",
      country: "United States",
      category: "Independent Fact-Checking Organizations"
    },
    {
      id: 11,
      name: "FactCheck.org",
      description: "Nonpartisan, nonprofit consumer advocate for voters.",
      website: "https://www.factcheck.org/",
      country: "United States",
      category: "Independent Fact-Checking Organizations"
    },
    {
      id: 12,
      name: "PolitiFact",
      description: "Fact-checking website that rates the accuracy of claims by elected officials.",
      website: "https://www.politifact.com/",
      country: "United States",
      category: "Independent Fact-Checking Organizations"
    },
    {
      id: 13,
      name: "Full Fact",
      description: "UK's independent fact-checking organization.",
      website: "https://fullfact.org/",
      country: "United Kingdom",
      category: "Independent Fact-Checking Organizations"
    },
    {
      id: 14,
      name: "Africa Check",
      description: "Africa's first independent fact-checking organization.",
      website: "https://africacheck.org/",
      country: "Africa",
      category: "Independent Fact-Checking Organizations"
    },
    {
      id: 15,
      name: "Chequeado",
      description: "Argentina's first fact-checking project.",
      website: "https://chequeado.com/",
      country: "Argentina",
      category: "Independent Fact-Checking Organizations"
    },
    {
      id: 16,
      name: "BOOM",
      description: "India's premier fact-checking website.",
      website: "https://www.boomlive.in/",
      country: "India",
      category: "Independent Fact-Checking Organizations"
    },
    {
      id: 17,
      name: "Verificat",
      description: "Spanish fact-checking organization based in Catalonia.",
      website: "https://www.verificat.cat/",
      country: "Spain",
      category: "Independent Fact-Checking Organizations"
    },
    {
      id: 18,
      name: "StopFake",
      description: "Ukrainian fact-checking project focusing on Russian propaganda.",
      website: "https://www.stopfake.org/",
      country: "Ukraine",
      category: "Independent Fact-Checking Organizations"
    },
    {
      id: 19,
      name: "Taiwan FactCheck Center",
      description: "Independent fact-checking organization in Taiwan.",
      website: "https://tfc-taiwan.org.tw/",
      country: "Taiwan",
      category: "Independent Fact-Checking Organizations"
    },
    {
      id: 20,
      name: "Rappler",
      description: "Filipino fact-checking organization with a focus on social media.",
      website: "https://www.rappler.com/section/fact-check",
      country: "Philippines",
      category: "Independent Fact-Checking Organizations"
    },
    {
      id: 21,
      name: "Lead Stories",
      description: "Fact-checking site specializing in identifying trending fake news.",
      website: "https://leadstories.com/",
      country: "United States",
      category: "Independent Fact-Checking Organizations"
    },
    {
      id: 22,
      name: "Dubawa",
      description: "Fact-checking service in West Africa.",
      website: "https://dubawa.org/",
      country: "Nigeria",
      category: "Independent Fact-Checking Organizations"
    },
    {
      id: 23,
      name: "Verificado MX",
      description: "Mexican fact-checking initiative.",
      website: "https://verificado.com.mx/",
      country: "Mexico",
      category: "Independent Fact-Checking Organizations"
    },
    {
      id: 24,
      name: "TjekDet",
      description: "Danish fact-checking service.",
      website: "https://www.tjekdet.dk/",
      country: "Denmark",
      category: "Independent Fact-Checking Organizations"
    },
    {
      id: 25,
      name: "VERA Files",
      description: "Fact-checking organization in the Philippines.",
      website: "https://verafiles.org/specials/fact-check",
      country: "Philippines",
      category: "Independent Fact-Checking Organizations"
    },
    {
      id: 26,
      name: "Doğruluk Payı",
      description: "Turkey's first political fact-checking initiative.",
      website: "https://www.dogrulukpayi.com/",
      country: "Turkey",
      category: "Independent Fact-Checking Organizations"
    },
    
    // Academic Institutions
    {
      id: 27,
      name: "Duke Reporters' Lab",
      description: "Research center that tracks fact-checking sites around the world.",
      website: "https://reporterslab.org/",
      country: "United States",
      category: "Academic Institutions"
    },
    {
      id: 28,
      name: "Media Forensics Lab (MFL)",
      description: "Research center at University of Colorado Denver focused on detecting manipulated media.",
      website: "https://forensic.colorado.edu/",
      country: "United States",
      category: "Academic Institutions"
    },
    {
      id: 29,
      name: "Oxford Internet Institute",
      description: "Academic research center studying computational propaganda and misinformation.",
      website: "https://www.oii.ox.ac.uk/",
      country: "United Kingdom",
      category: "Academic Institutions"
    },
    {
      id: 30,
      name: "Stanford Internet Observatory",
      description: "Research organization studying abuse in information technologies.",
      website: "https://cyber.fsi.stanford.edu/io",
      country: "United States",
      category: "Academic Institutions"
    },
    {
      id: 31,
      name: "Berkman Klein Center",
      description: "Harvard University research center studying digital media and misinformation.",
      website: "https://cyber.harvard.edu/",
      country: "United States",
      category: "Academic Institutions"
    },
    {
      id: 32,
      name: "WITNESS Media Lab",
      description: "Organization focused on verifying human rights abuses on video.",
      website: "https://lab.witness.org/",
      country: "United States",
      category: "Academic Institutions"
    },
    {
      id: 33,
      name: "MediaWell",
      description: "Social Science Research Council initiative tracking research on mis/disinformation.",
      website: "https://mediawell.ssrc.org/",
      country: "United States",
      category: "Academic Institutions"
    },
    
    // Government & Regulatory Bodies
    {
      id: 34,
      name: "EU vs Disinfo",
      description: "European Union's East StratCom Task Force project to identify and expose disinformation.",
      website: "https://euvsdisinfo.eu/",
      country: "European Union",
      category: "Government & Regulatory Bodies"
    },
    {
      id: 35,
      name: "Disinformation Index",
      description: "Government-supported rating system for news site reliability.",
      website: "https://disinformationindex.org/",
      country: "Global",
      category: "Government & Regulatory Bodies"
    },
    {
      id: 36,
      name: "CISA Rumor Control",
      description: "US Cybersecurity and Infrastructure Security Agency's fact-checking page.",
      website: "https://www.cisa.gov/rumorcontrol",
      country: "United States",
      category: "Government & Regulatory Bodies"
    },
    
    // Additional sources to reach 49
    {
      id: 37,
      name: "Factly",
      description: "Indian fact-checking platform.",
      website: "https://factly.in/",
      country: "India",
      category: "Independent Fact-Checking Organizations"
    },
    {
      id: 38,
      name: "Check Your Fact",
      description: "Daily Caller fact-checking operation.",
      website: "https://checkyourfact.com/",
      country: "United States",
      category: "Independent Fact-Checking Organizations"
    },
    {
      id: 39,
      name: "Maldito Bulo",
      description: "Spanish fact-checking project focused on social media.",
      website: "https://maldita.es/malditobulo",
      country: "Spain",
      category: "Independent Fact-Checking Organizations"
    },
    {
      id: 40,
      name: "Pagella Politica",
      description: "Italian fact-checking website.",
      website: "https://pagellapolitica.it/",
      country: "Italy",
      category: "Independent Fact-Checking Organizations"
    },
    {
      id: 41,
      name: "Faktograf",
      description: "Croatian fact-checking service.",
      website: "https://faktograf.hr/",
      country: "Croatia",
      category: "Independent Fact-Checking Organizations"
    },
    {
      id: 42,
      name: "Science Feedback",
      description: "Network of scientists fact-checking scientific claims in the media.",
      website: "https://sciencefeedback.co/",
      country: "Global",
      category: "Academic Institutions"
    },
    {
      id: 43,
      name: "NewsGuard",
      description: "Service that rates news and information sites based on credibility.",
      website: "https://www.newsguardtech.com/",
      country: "United States",
      category: "Independent Fact-Checking Organizations"
    },
    {
      id: 44,
      name: "Faktisk",
      description: "Norwegian fact-checking initiative.",
      website: "https://www.faktisk.no/",
      country: "Norway",
      category: "Independent Fact-Checking Organizations"
    },
    {
      id: 45,
      name: "CORRECTIV",
      description: "German nonprofit investigative journalism center.",
      website: "https://correctiv.org/faktencheck/",
      country: "Germany",
      category: "Independent Fact-Checking Organizations"
    },
    {
      id: 46,
      name: "AAP FactCheck",
      description: "Australian Associated Press fact-checking service.",
      website: "https://www.aap.com.au/factcheck/",
      country: "Australia",
      category: "News Media Fact-Checkers"
    },
    {
      id: 47,
      name: "AFP Fact Check",
      description: "Agence France-Presse's global fact-checking service.",
      website: "https://factcheck.afp.com/",
      country: "Global",
      category: "News Media Fact-Checkers"
    },
    {
      id: 48,
      name: "Bellingcat",
      description: "International collective of researchers and open-source journalists.",
      website: "https://www.bellingcat.com/",
      country: "Global",
      category: "Independent Fact-Checking Organizations"
    },
    {
      id: 49,
      name: "The Conversation's FactCheck",
      description: "Academic fact-checking from an academic media outlet.",
      website: "https://theconversation.com/us/topics/fact-check-298",
      country: "Global",
      category: "Academic Institutions"
    }
  ];

  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Real-time Fact Checking Data Sources</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Our fact-checking system relies on 49 verified, reliable sources from around the world. 
            This transparency ensures you always know where our information comes from.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
            <p className="text-blue-700">
              <strong>The Heart of TTN:</strong> These 49 verified fact-checking sources form the backbone of our real-time verification system. 
              We evaluate them regularly based on transparency, methodology, and accuracy track record to ensure 
              the highest quality information for our users.
            </p>
          </div>

          {categories.map((category) => (
            <div key={category} className="mb-16">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {factCheckingSources
                  .filter((source) => source.category === category)
                  .map((source) => (
                    <div key={source.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                      <h3 className="text-lg font-bold mb-2 text-primary">{source.name}</h3>
                      <p className="text-sm text-gray-500 mb-1">Country/Region: {source.country}</p>
                      <p className="text-gray-700 mb-4">{source.description}</p>
                      <a 
                        href={source.website} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary hover:underline font-medium flex items-center"
                      >
                        Visit Website
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-4 w-4 ml-1" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                          />
                        </svg>
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Verification Process</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            When we verify information, our system consults these trusted sources using a 
            sophisticated algorithm that weighs factors including recency, relevance, 
            and consensus among multiple sources.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold text-lg mb-2">Source Verification</h3>
              <p className="text-gray-600">We continuously monitor and evaluate our sources based on accuracy, transparency, and methodological rigor.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold text-lg mb-2">Cross-Reference System</h3>
              <p className="text-gray-600">Claims are checked against multiple independent sources to establish broad consensus.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold text-lg mb-2">Transparency Protocol</h3>
              <p className="text-gray-600">Our results always cite the specific sources used, letting you verify our conclusions independently.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}