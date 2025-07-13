import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import puppetStringsImage from "../assets/images/media-puppet-strings.png";

export default function UnderstandingMediaBiasPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Hero section with gradient background */}
        <div className="relative mb-12 p-8 rounded-xl overflow-hidden bg-gradient-to-r from-[#276EF1] to-[#1d5dc9]">
          <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yNS45MjEgMjEuNjQ1bDguNTAzLTQuODU1YzEuMDA1LS41NyAyLjI2MS0uMjYyIDIuODE1LjY5M2wyLjg2NSA0Ljg5MmExLjk4IDEuOTggMCAwMC44MSAyLjE5M2MxLjE0Ni42MDMgMS4xIDIuNDI3LS4wODcgMi45NjdsLTguNTAzIDQuODU1Yy0xLjAwNS41Ny0yLjI2MS4yNjItMi44MTUtLjY5M2wtMi44NjUtNC44OTJhMS45OCAxLjk4IDAgMDAtLjgxLTIuMTkzYy0xLjE0Ni0uNjAzLTEuMS0yLjQyNy4wODctMi45Njd6TTQwIDMwYzAgNS41MjMtNC40NzcgMTAtMTAgMTBzLTEwLTQuNDc3LTEwLTEwIDQuNDc3LTEwIDEwLTEwIDEwIDQuNDc3IDEwIDEweiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9Ii41IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+')]"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-4 text-white">
                🧠 Understanding Media Bias
              </h1>
              <p className="text-xl text-white/90 mb-4">
                Explore how to identify different types of bias in news reporting and media coverage.
              </p>
              <p className="text-white/80">
                Not all media bias is fake news — but it can distort the truth, intentionally or not. 
                Learning to recognize different types of bias helps you become a more thoughtful 
                consumer of news and a smarter sharer of information.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src={puppetStringsImage} 
                alt="News media as puppets on strings - illustrated concept" 
                className="rounded-lg w-full h-auto shadow-xl bg-white p-4" 
              />
            </div>
          </div>
        </div>

        <div className="mb-12 flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3">
            <img 
              src="https://images.unsplash.com/photo-1504465039542-a4bfbef5c2a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Split screen news broadcast showing different perspectives" 
              className="rounded-lg w-full h-auto object-cover shadow-lg" 
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              🗂️ Types of Media Bias & Real-World Examples
            </h2>
            <p className="text-lg text-gray-600">
              Media bias comes in many forms. Learning to recognize these patterns is the first step 
              toward becoming a more critical consumer of news and information. Explore the common 
              types of bias below with real-world examples.
            </p>
          </div>
        </div>

        {/* Framing Bias */}
        <Card className="mb-8 border-l-4 border-l-[#276EF1] bg-gradient-to-r from-[#EFF6FF] to-white">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-2 text-[#276EF1]">📦 1. Framing Bias</h3>
            <p className="mb-4 font-medium text-[#222222]">
              What it is: How the same facts are presented can dramatically affect how we interpret them. 
              This includes the choice of language, tone, or visual imagery.
            </p>
            
            <div className="bg-[#DBEAFE] p-4 rounded-md mb-4">
              <h4 className="font-semibold mb-2 text-[#1E40AF]">Example:</h4>
              <p className="text-[#222222]">
                📺 <strong>Can You Spot the Media Bias? | MSNBC, Fox News</strong>
              </p>
              <p className="text-sm text-[#276EF1]">
                This segment compares how two networks covered the same story, using different framing 
                to shape audience interpretation.
              </p>
            </div>
            
            <div className="bg-[#EFF6FF] p-4 rounded-md border border-[#BFDBFE]">
              <h4 className="font-semibold mb-2 text-[#1E40AF]">Why it matters:</h4>
              <p className="text-[#276EF1]">
                Framing steers perception — it can make a protest look like a riot, or a politician 
                look heroic or corrupt, without changing the facts.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Selection Bias */}
        <Card className="mb-8 border-l-4 border-l-blue-500 bg-gradient-to-r from-blue-50 to-white">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-2 text-blue-700">📋 2. Selection Bias (Story Choice)</h3>
            <p className="mb-4 font-medium">
              What it is: Newsrooms can shape public focus by choosing which stories to cover — 
              and which ones to ignore.
            </p>
            
            <div className="bg-blue-100 p-4 rounded-md mb-4">
              <h4 className="font-semibold mb-2 text-blue-800">Example:</h4>
              <p>
                📺 <strong>Selection and Omission - The Most Deceptive of all Biases</strong>
              </p>
              <p className="text-sm text-blue-600">
                This video reveals how the inclusion or exclusion of stories can dramatically 
                change public understanding of the world.
              </p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
              <h4 className="font-semibold mb-2 text-blue-800">Why it matters:</h4>
              <p className="text-blue-700">
                When important stories are left out, audiences may miss context or form views 
                based on incomplete information.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Omission Bias */}
        <Card className="mb-8 border-l-4 border-l-blue-500 bg-gradient-to-r from-blue-50 to-white">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-2 text-blue-700">🕳 3. Omission Bias</h3>
            <p className="mb-4 font-medium">
              What it is: Leaving out key facts, perspectives, or background that would give a more 
              balanced understanding.
            </p>
            
            <div className="bg-blue-100 p-4 rounded-md mb-4">
              <h4 className="font-semibold mb-2 text-blue-800">Example:</h4>
              <p>
                📺 <strong>What Are Some Examples Of Bias In News?</strong>
              </p>
              <p className="text-sm text-blue-600">
                This explainer highlights how critical omissions alter the meaning or impact of news stories.
              </p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
              <h4 className="font-semibold mb-2 text-blue-800">Why it matters:</h4>
              <p className="text-blue-700">
                Facts that are "left out" are just as powerful as those included. Omission creates one-sided narratives.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Placement Bias */}
        <Card className="mb-8 border-l-4 border-l-blue-500 bg-gradient-to-r from-blue-50 to-white">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-2 text-blue-700">📍 4. Placement Bias</h3>
            <p className="mb-4 font-medium">
              What it is: Story placement affects how important or urgent a story appears — on a webpage, 
              newspaper, or broadcast.
            </p>
            
            <div className="bg-blue-100 p-4 rounded-md mb-4">
              <h4 className="font-semibold mb-2 text-blue-800">Example:</h4>
              <p>
                📺 <strong>Breaking the News: Understanding Media Bias</strong>
              </p>
              <p className="text-sm text-blue-600">
                This piece explains how prominence and sequencing of news affect perception.
              </p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
              <h4 className="font-semibold mb-2 text-blue-800">Why it matters:</h4>
              <p className="text-blue-700">
                A front-page headline shapes national conversation. A buried story may go unnoticed — 
                even if it's more significant.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Tone Bias */}
        <Card className="mb-8 border-l-4 border-l-blue-500 bg-gradient-to-r from-blue-50 to-white">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-2 text-blue-700">🗣 5. Tone Bias</h3>
            <p className="mb-4 font-medium">
              What it is: Emotionally loaded or sarcastic language can shape reader opinion 
              without changing the facts.
            </p>
            
            <div className="bg-blue-100 p-4 rounded-md mb-4">
              <h4 className="font-semibold mb-2 text-blue-800">Example:</h4>
              <p>
                📺 <strong>Media Bias - John Stossel</strong>
              </p>
              <p className="text-sm text-blue-600">
                Stossel breaks down how emotional language, sarcasm, or slant can bias coverage.
              </p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
              <h4 className="font-semibold mb-2 text-blue-800">Why it matters:</h4>
              <p className="text-blue-700">
                Tone manipulates emotion. It can subtly persuade us before we've critically examined the facts.
              </p>
            </div>
          </CardContent>
        </Card>

        <Separator className="my-12" />
        
        {/* How to Fight Bias Section */}
        <div className="mb-12 bg-gradient-to-r from-[#EFF6FF] via-[#DBEAFE] to-[#EFF6FF] p-8 rounded-xl border border-[#BFDBFE] shadow-md">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#276EF1] to-[#1d5dc9] bg-clip-text text-transparent">
            🛠️ How to Fight Bias When You See It
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start bg-white p-3 rounded-lg shadow-sm border border-[#BFDBFE]">
              <span className="text-[#276EF1] text-xl mr-3">•</span>
              <span><strong className="text-[#276EF1]">Check multiple sources</strong> — see how different outlets report the same story.</span>
            </li>
            <li className="flex items-start bg-white p-3 rounded-lg shadow-sm border border-[#BFDBFE]">
              <span className="text-[#276EF1] text-xl mr-3">•</span>
              <span><strong className="text-[#276EF1]">Use bias-rating tools</strong> — like Media Bias/Fact Check or AllSides.</span>
            </li>
            <li className="flex items-start bg-white p-3 rounded-lg shadow-sm border border-[#BFDBFE]">
              <span className="text-[#276EF1] text-xl mr-3">•</span>
              <span><strong className="text-[#276EF1]">Look up omitted context</strong> — who benefits from this version of the truth?</span>
            </li>
            <li className="flex items-start bg-white p-3 rounded-lg shadow-sm border border-[#BFDBFE]">
              <span className="text-[#276EF1] text-xl mr-3">•</span>
              <span><strong className="text-[#276EF1]">Be mindful of your own confirmation bias</strong> — we all tend to believe stories that support what we already think.</span>
            </li>
            <li className="flex items-start bg-white p-3 rounded-lg shadow-sm border border-[#BFDBFE]">
              <span className="text-[#276EF1] text-xl mr-3">•</span>
              <span><strong className="text-[#276EF1]">Pay attention to language</strong> — emotional terms and loaded words reveal underlying biases.</span>
            </li>
          </ul>
        </div>
        
        {/* Conclusion */}
        <div className="relative bg-gradient-to-r from-[#276EF1] to-[#1d5dc9] rounded-2xl overflow-hidden mb-8 text-white">
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yNS45MjEgMjEuNjQ1bDguNTAzLTQuODU1YzEuMDA1LS41NyAyLjI2MS0uMjYyIDIuODE1LjY5M2wyLjg2NSA0Ljg5MmExLjk4IDEuOTggMCAwMC44MSAyLjE5M2MxLjE0Ni42MDMgMS4xIDIuNDI3LS4wODcgMi45NjdsLTguNTAzIDQuODU1Yy0xLjAwNS41Ny0yLjI2MS4yNjItMi44MTUtLjY5M2wtMi44NjUtNC44OTJhMS45OCAxLjk4IDAgMDAtLjgxLTIuMTkzYy0xLjE0Ni0uNjAzLTEuMS0yLjQyNy4wODctMi45Njd6TTQwIDMwYzAgNS41MjMtNC40NzcgMTAtMTAgMTBzLTEwLTQuNDc3LTEwLTEwIDQuNDc3LTEwIDEwLTEwIDEwIDQuNDc3IDEwIDEweiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9Ii41IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+')]"></div>
          <div className="relative p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  🎯 The goal isn't to find "perfectly neutral" media — it's to become bias-aware.
                </h3>
                <p className="text-lg text-white/90 md:text-xl">
                  When we can recognize media bias, we gain the power to think more critically, make better decisions, 
                  and strengthen our democracy.
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm max-w-md">
                <blockquote className="text-lg italic">
                  "The problem is not that the press is liberal or conservative. The problem is that it's becoming increasingly homogeneous and simplistic."
                  <footer className="mt-2 text-white/70 not-italic font-medium">
                    — Media Literacy Expert
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}