import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Calendar, Trophy, Upload } from "lucide-react";
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
      image: "/attached_assets/Ava_1761928101637.jpeg"
    },
    {
      name: "Max",
      familyName: "Speck",
      image: "/attached_assets/Max from the Speck Family_1761928208826.jpg"
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

        {/* Upload Button */}
        <div className="text-center mb-12">
          <a 
            href="https://qp565.share.hsforms.com/2Wl0ACs9PRcyQJFGjFh8mJA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              className="px-8 py-6 text-lg font-semibold rounded-full transition-all hover:scale-105 shadow-lg"
              style={{ backgroundColor: '#ff6b35', color: '#ffffff' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ff8555'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff6b35'}
              data-testid="button-upload-submission"
            >
              <Upload className="mr-2 h-5 w-5" />
              Upload Your Photo
            </Button>
          </a>
        </div>

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
              <p className="text-xl text-gray-600 dark:text-gray-300" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
                Check out our amazing costume entries!
              </p>
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
