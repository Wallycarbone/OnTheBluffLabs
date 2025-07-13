import { useEffect, useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

interface FactCheckResult {
  rating: string;
  ratingClass: string;
  analysisDate: string;
  analysis: string;
  truthful: string;
  misleading: string;
}

export default function FactCheckPage() {
  useEffect(() => {
    document.title = "Fact Checker - The Truth Networks";
  }, []);

  const [claimText, setClaimText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<FactCheckResult | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!claimText.trim()) {
      toast({
        title: "Empty claim",
        description: "Please enter a statement to verify.",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      const response = await apiRequest('POST', '/api/fact-check', { text: claimText });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to check the claim. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Fact Checking Tool</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Verify the accuracy of information with our AI-powered fact checking tool.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">How It Works</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold mr-4 mt-1">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Enter Content</h3>
                    <p className="text-gray-600">
                      Paste a claim, news headline, quote, or paragraph that you want to verify.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold mr-4 mt-1">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Analysis</h3>
                    <p className="text-gray-600">
                      Our system analyzes the content by checking against verified facts and credible sources.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold mr-4 mt-1">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Review Results</h3>
                    <p className="text-gray-600">
                      Get a comprehensive report on the accuracy of the content and what's true or misleading.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">How We Verify Information</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[#2e7d32] mt-1 mr-3"></i>
                    <span>Cross-referencing with multiple reliable sources</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[#2e7d32] mt-1 mr-3"></i>
                    <span>Looking for context and nuance that may be missing</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[#2e7d32] mt-1 mr-3"></i>
                    <span>Analyzing patterns common in misleading information</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[#2e7d32] mt-1 mr-3"></i>
                    <span>Evaluating credibility of original sources</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Verify a Claim</h2>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <label className="block text-gray-700 font-medium mb-2">
                        Enter the text to fact-check:
                      </label>
                      <Textarea 
                        placeholder="Paste a statement, claim, article excerpt, or social media post to verify..." 
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        rows={8}
                        value={claimText}
                        onChange={(e) => setClaimText(e.target.value)}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-md transition-all text-lg"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Analyzing...' : 'Check Accuracy'}
                    </Button>
                  </form>
                  
                  {isLoading && (
                    <div className="flex justify-center py-10">
                      <div className="text-center">
                        <i className="fas fa-circle-notch fa-spin text-4xl text-gray-400 mb-4"></i>
                        <p className="text-gray-600">Analyzing content and checking sources...</p>
                      </div>
                    </div>
                  )}
                  
                  {!isLoading && result && (
                    <div className="mt-8 border rounded-md p-6 bg-gray-50">
                      <div className="flex items-center mb-6">
                        <div className={`${result.ratingClass} px-3 py-1 rounded-md font-medium mr-3`}>
                          {result.rating}
                        </div>
                        <div className="text-sm text-gray-500">
                          Analyzed on <span>{result.analysisDate}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-bold text-lg mb-2">Analysis:</h4>
                          <p className="text-gray-700">
                            {result.analysis}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-lg mb-2">What's true:</h4>
                          <p className="text-gray-700">
                            {result.truthful}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-lg mb-2">What's missing or misleading:</h4>
                          <p className="text-gray-700">
                            {result.misleading}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
