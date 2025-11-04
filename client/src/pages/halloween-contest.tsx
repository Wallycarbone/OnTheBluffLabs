import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Calendar, Trophy } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useState } from "react";

interface ContestEntry {
  name: string;
  familyName: string;
  image: string;
}

export default function HalloweenContest() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; name: string; familyName: string } | null>(null);

  // Contest entries - add new entries here
  const contestEntries: ContestEntry[] = [
    {
      name: "Bodie and Gunnar",
      familyName: "McKenna",
      image: "/attached_assets/Bodie and Gunnar from the McKennas_1761926904216.jpeg"
    },
    {
      name: "Hank",
      familyName: "Carr",
      image: "/attached_assets/Hank from the Carrs_1761927976850.jpeg"
    },
    {
      name: "Talley",
      familyName: "Frost",
      image: "/attached_assets/Talley from the Frost Family_1761928042350.jpeg"
    },
    {
      name: "Ava",
      familyName: "Salamone",
      image: "/attached_assets/Ava Cropped_1761928978762.png"
    },
    {
      name: "Max",
      familyName: "Speck",
      image: "/attached_assets/Max from the Speck Family_1761928208826.jpg"
    },
    {
      name: "Luna",
      familyName: "Middleton",
      image: "/attached_assets/Luna from the Middleton Family_1761928236749.jpeg"
    },
    {
      name: "Murphy",
      familyName: "Skarupa",
      image: "/attached_assets/2025MurphyHalloween (1)_1761928720663.jpg"
    },
    {
      name: "Maggie",
      familyName: "Berman",
      image: "/attached_assets/Maggie_1761928772340.jpeg"
    },
    {
      name: "Timber",
      familyName: "Pacifico-Smith",
      image: "/attached_assets/Timber from the Pacifico-Smith Family_1761937075060.jpeg"
    },
    {
      name: "Zsa Zsa and Olga",
      familyName: "Hyatt",
      image: "/attached_assets/Zsa Zsa and Olga_1761937151661.jpeg"
    },
    {
      name: "Tedy",
      familyName: "Frost",
      image: "/attached_assets/Tedy from the Frost Family_1762016266440.jpeg"
    },
    {
      name: "Missy",
      familyName: "Deans",
      image: "/attached_assets/Missy from the Deans Family_1762016304402.jpeg"
    },
    {
      name: "Enzo Giuseppe",
      familyName: "Margiasso",
      image: "/attached_assets/Enzo Giuseppe Margiasso from the Margiasso Family_1762016333897.jpeg"
    },
    {
      name: "Oakley",
      familyName: "Culligan",
      image: "/attached_assets/Oakley from the Culligan Family_1762016454915.jpeg"
    },
    {
      name: "Oakley",
      familyName: "Fagan",
      image: "/attached_assets/Oakley from the Fagan Family_1762016505630.jpg"
    },
    {
      name: "Olive",
      familyName: "Kalin",
      image: "/attached_assets/Olive from the Kalin Family_1762016541048.jpeg"
    },
    {
      name: "Arrow",
      familyName: "Tedesco",
      image: "/attached_assets/Arrow from the Tedesco Family_1762016671214.png"
    },
    {
      name: "Maddie",
      familyName: "Kalin",
      image: "/attached_assets/Maddie from the Kalin Family_1762016706064.jpeg"
    },
    {
      name: "Millie",
      familyName: "Bogden",
      image: "/attached_assets/This is Millie from the Bogdan Family_1762016750971.jpeg"
    },
    {
      name: "Bodhi",
      familyName: "Polk",
      image: "/attached_assets/Bodhi_1762016784700.jpeg"
    },
    {
      name: "Ellie",
      familyName: "Favreau",
      image: "/attached_assets/Ellie_1762018055418.png"
    },
    {
      name: "Hugo",
      familyName: "Buchness",
      image: "/attached_assets/Hugo from the Buchness Family_1762016963976.png"
    },
    {
      name: "Walter",
      familyName: "Ziffer",
      image: "/attached_assets/Walter from the Ziffer Family_1762017050530.png"
    },
    {
      name: "Jake",
      familyName: "Whitaker",
      image: "/attached_assets/Jake from the Whitaker Family_1762017123066.jpeg"
    },
    {
      name: "Oliver and Charlie",
      familyName: "Gold",
      image: "/attached_assets/Gold_1762017217978.jpeg"
    },
    {
      name: "Cooper",
      familyName: "Aquino",
      image: "/attached_assets/Cooper from the Aquino Family_1762017302456.jpeg"
    },
    {
      name: "Shoals",
      familyName: "Rochlin Parker",
      image: "/attached_assets/Shoals from the Rochlin Parker Family_1762017364486.jpeg"
    },
    {
      name: "Atticus",
      familyName: "Burbank",
      image: "/attached_assets/Breeding Dogs 5x4 (4 x 4 in)_1762017729600.png"
    },
    {
      name: "Fellini",
      familyName: "Thomas",
      image: "/attached_assets/Fellini 2_1762017926271.png"
    },
    {
      name: "Olivia",
      familyName: "Caraway",
      image: "/attached_assets/Livy_1762018417945.jpeg"
    },
    {
      name: "Jagger",
      familyName: "Rayder",
      image: "/attached_assets/Jagger_1762027294411.jpeg"
    },
    {
      name: "Porter",
      familyName: "Nemeth",
      image: "/attached_assets/Porter_1762030020120.jpg"
    },
    {
      name: "Buck",
      familyName: "Field",
      image: "/attached_assets/Buck from the Field Family_1762030158642.jpeg"
    },
    {
      name: "Augie",
      familyName: "Bright",
      image: "/attached_assets/Augie Cropped_1762031415523.png"
    },
    {
      name: "Luke",
      familyName: "Sbarro",
      image: "/attached_assets/Hotdog_1762106351091.png"
    },
    {
      name: "Zeke",
      familyName: "Santa Maria",
      image: "/attached_assets/Zeke_1762106389224.jpeg"
    },
    {
      name: "Mikkola",
      familyName: "Lawlor",
      image: "/attached_assets/Mikkola_1762180226446.jpeg"
    },
    {
      name: "Holly",
      familyName: "Scheibel",
      image: "/attached_assets/Holly_1762180506326.jpeg"
    },
    {
      name: "Wilson",
      familyName: "Slutsky",
      image: "/attached_assets/Wilson_1762180542528.jpeg"
    },
    {
      name: "Leo",
      familyName: "Angelino",
      image: "/attached_assets/Leo Angelino_1762180784355.png"
    },
    {
      name: "Patrick James",
      familyName: "Lovely",
      image: "/attached_assets/39_1762266581534.png"
    },
    {
      name: "Remy",
      familyName: "Gomes",
      image: "/attached_assets/40_1762266993183.png"
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-orange-600 hover:bg-orange-700 text-white">
            🎃 Halloween 2025
          </Badge>
          <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Halloween Costume Contest
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
            Show off your pup's best Halloween costume and compete for amazing prizes!
          </p>
        </div>

        {/* Contest Details */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card data-testid="card-contest-dates">
            <CardHeader>
              <Calendar className="w-8 h-8 mb-2 text-orange-600" />
              <CardTitle>Contest Dates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Submissions open October 31st through November 3rd
              </p>
            </CardContent>
          </Card>

          <Card data-testid="card-contest-prizes">
            <CardHeader>
              <Trophy className="w-8 h-8 mb-2 text-orange-600" />
              <CardTitle>Voting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Voting will be open November 4th through November 6th
              </p>
            </CardContent>
          </Card>

          <Card data-testid="card-contest-judging">
            <CardHeader>
              <Award className="w-8 h-8 mb-2 text-orange-600" />
              <CardTitle>Judging</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Winners announced on Saturday, November 8th
              </p>
            </CardContent>
          </Card>
        </div>

        {/* How to Enter */}
        <Card className="mb-12" data-testid="card-how-to-enter">
          <CardHeader>
            <CardTitle className="text-3xl" style={{ fontFamily: 'Oswald, sans-serif' }}>
              How to Enter
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Dress Up Your Pup</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Get your dog ready in their best Halloween costume!
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Take a Photo</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Capture your pup's costume in a clear, well-lit photo.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Submit Your Entry</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Please use the link below to upload your photo!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contest Rules */}
        <Card data-testid="card-contest-rules">
          <CardHeader>
            <CardTitle className="text-3xl" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Contest Rules
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
              <li>• Open to all On The Bluff Labrador dogs & families</li>
              <li>• One entry per dog</li>
              <li>• Photos must be submitted by November 3rd, 2025</li>
              <li>• Costumes must be safe and comfortable for your dog</li>
              <li>• By entering, you grant permission to share photos on our website and social media</li>
            </ul>
          </CardContent>
        </Card>

        {/* Contest Entries Gallery */}
        {contestEntries.length > 0 && (
          <div className="mt-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Contest Entries
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
                Check out our amazing costume entries!
              </p>
              
              {/* Vote Button */}
              <div className="my-8">
                <a 
                  href="https://form.typeform.com/to/XCvKidoP"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    className="px-16 py-10 text-3xl font-bold rounded-full transition-all hover:scale-110 shadow-2xl animate-pulse hover:animate-none border-4 border-orange-300"
                    style={{ 
                      backgroundColor: '#ff6b35', 
                      color: '#ffffff',
                      boxShadow: '0 0 30px rgba(255, 107, 53, 0.6), 0 10px 40px rgba(0, 0, 0, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#ff8555';
                      e.currentTarget.style.boxShadow = '0 0 40px rgba(255, 107, 53, 0.8), 0 10px 50px rgba(0, 0, 0, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#ff6b35';
                      e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 107, 53, 0.6), 0 10px 40px rgba(0, 0, 0, 0.3)';
                    }}
                    data-testid="button-vote"
                  >
                    🎃 VOTE NOW! 🎃
                  </Button>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {contestEntries.map((entry, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => setSelectedImage({ src: entry.image, name: entry.name, familyName: entry.familyName })}
                  data-testid={`entry-${index}`}
                >
                  <div className="aspect-square">
                    <img
                      src={entry.image}
                      alt={`${entry.name} - ${entry.familyName} Family`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-white font-semibold text-lg" style={{ fontFamily: 'Oswald, sans-serif' }}>
                      {entry.name}
                    </h3>
                    <p className="text-white/90 text-sm" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
                      {entry.familyName} Family
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Image Popup Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            data-testid="image-popup"
          >
            <div className="relative max-w-4xl w-full">
              <button
                className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors"
                onClick={() => setSelectedImage(null)}
                data-testid="button-close-popup"
              >
                ×
              </button>
              <img
                src={selectedImage.src}
                alt={`${selectedImage.name} - ${selectedImage.familyName} Family`}
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="text-white text-2xl font-semibold mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  {selectedImage.name}
                </h3>
                <p className="text-white/90 text-lg" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
                  {selectedImage.familyName} Family
                </p>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
      <Footer />
    </>
  );
}
