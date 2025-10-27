import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, Trophy } from "lucide-react";

export default function HalloweenContest() {
  return (
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
                Submissions open October 1st through midnight on November 2nd
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
                Voting will be open November 3rd through November 5th
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
                  Share your photo with us via email or social media.
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
              <li>• Photos must be submitted by midnight on November 2nd, 2025</li>
              <li>• Costumes must be safe and comfortable for your dog</li>
              <li>• By entering, you grant permission to share photos on our website and social media</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
