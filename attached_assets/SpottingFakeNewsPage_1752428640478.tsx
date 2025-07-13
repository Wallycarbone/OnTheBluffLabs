import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import spottingFakeNewsImage from "../assets/images/spotting-fake-news.png";

export default function SpottingFakeNewsPage() {
  useEffect(() => {
    document.title = "Guide to Spotting Fake News - TTN";
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F9FAFB] pt-20 pb-20">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center mb-10">
          <div className="md:w-1/2 text-left md:pr-8">
            <h1 className="text-4xl font-bold mb-4 text-[#222222]">🕵️‍♂️ Guide to Spotting Fake News</h1>
            <p className="text-xl text-[#222222] mb-4">
              Learn the telltale signs of misinformation — and how to verify before you share.
            </p>
            <p className="text-[#222222] font-medium mb-4">
              In an age where misinformation spreads faster than facts, knowing how to spot fake news isn't just smart — it's essential. 
              Here's how to protect yourself (and your community) from getting fooled:
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <img 
              src={spottingFakeNewsImage} 
              alt="Hand holding phone with fake news detection" 
              className="max-w-full h-auto rounded-lg shadow-lg" 
              style={{ maxHeight: '400px' }}
            />
          </div>
        </div>
        
        <div className="mb-12">
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-red-600 mb-6">⚠️ Red Flags of Fake News</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Sensational Headlines</h3>
                  <p className="text-gray-600">If it sounds too outrageous or dramatic to be true... it probably is.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800">No Author or Source</h3>
                  <p className="text-gray-600">Legitimate news outlets cite reporters and sources. Be skeptical of anonymous claims.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Spelling & Grammar Errors</h3>
                  <p className="text-gray-600">Many fake stories are rushed or poorly written. That's a giveaway.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Emotion Over Facts</h3>
                  <p className="text-gray-600">If the article's goal is to make you angry or afraid — not inform you — step back.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800">No Publication Date or Context</h3>
                  <p className="text-gray-600">Fake news often recycles old stories or removes crucial info.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800">One-Sided or Biased Reporting</h3>
                  <p className="text-gray-600">Check if it gives all sides of the story. If it reads like a rant, it's probably not journalism.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">🛠️ How to Check a Story</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-[#222222]">Use Our Fact-Checking Tools</h3>
                  <p className="text-[#444444]">
                    Search claims on <a href="https://www.snopes.com" target="_blank" rel="noreferrer" className="text-[#276EF1] hover:underline">Snopes</a>, 
                    <a href="https://www.politifact.com" target="_blank" rel="noreferrer" className="text-[#276EF1] hover:underline"> PolitiFact</a>, or 
                    <a href="https://www.factcheck.org" target="_blank" rel="noreferrer" className="text-[#276EF1] hover:underline"> FactCheck.org</a>.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-[#222222]">Google the Headline</h3>
                  <p className="text-[#444444]">See if other credible outlets are reporting it — or debunking it.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-[#222222]">Check the URL</h3>
                  <p className="text-[#444444]">Scam sites often imitate real ones (e.g., "cnn.com.co" is not CNN).</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-[#222222]">Use Reverse Image Search</h3>
                  <p className="text-[#444444]">Right-click a photo and select "Search image with Google" to see where it really came from.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-[#222222]">Look Up the Source</h3>
                  <p className="text-[#444444]">
                    Use <a href="https://mediabiasfactcheck.com" target="_blank" rel="noreferrer" className="text-[#276EF1] hover:underline">Media Bias/Fact Check</a> to 
                    assess the reliability of unfamiliar sites.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-[#222222]">Use the SIFT Method</h3>
                  <p className="text-[#444444]">Stop, Investigate the source, Find better coverage, Trace the claim to its original.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-green-600 mb-6">✅ Before You Share, Ask:</h2>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">•</span>
                <span className="text-[#222222]">Is this from a trustworthy source?</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">•</span>
                <span className="text-[#222222]">Can I verify it with a second source?</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">•</span>
                <span className="text-[#222222]">Is it recent and in context?</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">•</span>
                <span className="text-[#222222]">Am I sharing it just because it confirms my beliefs?</span>
              </li>
            </ul>
            
            <div className="mt-6 text-center font-bold text-[#222222] text-xl">
              Sharing is power. Use it responsibly.
            </div>
          </div>
          
          <div className="bg-[#EFF6FF] rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6 text-[#222222]">Why This Matters</h2>
            
            <p className="text-[#222222] mb-6">
              Misinformation thrives when we don't pause to think. Each time we share without verifying, we potentially contribute to the 
              spread of false information that can cause real harm:
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-[#276EF1] mr-2 font-bold">→</span>
                <span className="text-[#222222]">Health misinformation can lead to dangerous medical decisions</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#276EF1] mr-2 font-bold">→</span>
                <span className="text-[#222222]">Political falsehoods can undermine democratic processes</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#276EF1] mr-2 font-bold">→</span>
                <span className="text-[#222222]">Social division can be amplified by emotionally charged, false narratives</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#276EF1] mr-2 font-bold">→</span>
                <span className="text-[#222222]">Personal reputations can be damaged by unchecked rumors</span>
              </li>
            </ul>
            
            <p className="text-[#222222] text-center font-medium">
              Be part of the solution — not the spread.
            </p>
          </div>
        </div>
        
        <div className="text-center flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/fact-check">
            <Button size="lg" className="bg-[#276EF1] hover:bg-[#1d5dc9] text-white">
              Try Our Fact-Checking Tool
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </Link>
          
          <Link href="/k12-education">
            <Button size="lg" variant="outline" className="border-[#276EF1] text-[#276EF1] hover:bg-[#276EF1] hover:text-white">
              Explore Our K-12 Media Literacy Programs
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}