import { useEffect } from "react";
import { Link } from "wouter";

interface WorkItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface Tool {
  id: number;
  title: string;
  icon: string;
  description: string;
  link: string;
}

export default function OurWorkPage() {
  useEffect(() => {
    document.title = "Our Work - The Truth Networks";
  }, []);

  const workItems: WorkItem[] = [
    {
      id: 1,
      title: "K-12 Media Literacy Program",
      description: "A comprehensive curriculum helping students develop critical thinking skills about media consumption.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "/k12-education"
    },
    {
      id: 2,
      title: "Community Workshops",
      description: "Free workshops teaching communities how to identify misinformation and verify sources.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "/community-workshops"
    },
    {
      id: 3,
      title: "Journalism Support Initiative",
      description: "Supporting local journalism through grants, training, and technological resources.",
      image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "/journalism-support"
    }
  ];

  const tools: Tool[] = [
    {
      id: 1,
      title: "Fact Check Tool",
      icon: "fa-check-circle",
      description: "Our AI-powered tool helps verify claims by cross-referencing with reliable sources and identifying common patterns in misinformation.",
      link: "/fact-check"
    },
    {
      id: 2,
      title: "Media Bias Detector",
      icon: "fa-balance-scale",
      description: "Analyze news articles to identify potential bias in reporting and understand different perspectives on current events.",
      link: "/understanding-media-bias"
    },
    {
      id: 3,
      title: "Real-time Fact Checking Data Sources",
      icon: "fa-database",
      description: "Access our network of 49 verified fact-checking sources that provide the foundation for our real-time verification system.",
      link: "/real-time-fact-checking"
    }
  ];

  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Work</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our initiatives, tools, and resources designed to combat misinformation and enhance media literacy.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Current Initiatives</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workItems.map(item => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-gray-200">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <Link href={item.link} className="text-primary font-medium hover:text-primary/90">
                    Learn More <i className="fas fa-arrow-right ml-1"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Tools</h2>
          
          <div className="space-y-8">
            {tools.map(tool => (
              <div key={tool.id} className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="flex items-center text-xl font-bold mb-4">
                  <i className={`fas ${tool.icon} text-primary mr-3`}></i>
                  {tool.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {tool.description}
                </p>
                <Link href={tool.link} className="text-primary font-medium hover:text-primary/90">
                  Try This Tool <i className="fas fa-external-link-alt ml-1"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Media Literacy Resources</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
            Explore our educational resources designed for teachers, students, journalists, and anyone interested in developing critical media analysis skills.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
            <Link 
              href="/k12-education" 
              className="inline-block bg-blue-600 text-white font-bold px-6 py-3 rounded-md hover:bg-blue-700 transition-all"
            >
              K-12 Education Programs <i className="fas fa-graduation-cap ml-2"></i>
            </Link>
            
            <Link 
              href="/understanding-media-bias" 
              className="inline-block bg-green-600 text-white font-bold px-6 py-3 rounded-md hover:bg-green-700 transition-all"
            >
              Understanding Media Bias <i className="fas fa-balance-scale ml-2"></i>
            </Link>
            
            <Link 
              href="/community-workshops" 
              className="inline-block bg-amber-600 text-white font-bold px-6 py-3 rounded-md hover:bg-amber-700 transition-all"
            >
              Community Workshops <i className="fas fa-users ml-2"></i>
            </Link>
            
            <Link 
              href="/journalism-support" 
              className="inline-block bg-blue-800 text-white font-bold px-6 py-3 rounded-md hover:bg-blue-900 transition-all"
            >
              Journalism Support <i className="fas fa-newspaper ml-2"></i>
            </Link>
            
            <Link 
              href="/our-work" 
              className="inline-block bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 rounded-md transition-all"
            >
              Browse All Resources
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
