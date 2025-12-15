import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Gratitude() {
  return (
    <div className="min-h-screen bg-[#fefefe]">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-oswald font-normal tracking-wide mb-4" style={{color: '#11100f'}}>
              OTBL Gratitude for 2025
            </h1>
            <p className="text-lg font-source-sans" style={{color: '#4b4b4b'}}>
              A look back at our wonderful year
            </p>
          </div>

          <div 
            style={{
              position: 'relative', 
              width: '100%', 
              height: 0, 
              paddingTop: '56.25%',
              paddingBottom: 0, 
              boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', 
              marginTop: '1.6em', 
              marginBottom: '0.9em', 
              overflow: 'hidden',
              borderRadius: '8px', 
              willChange: 'transform'
            }}
          >
            <iframe 
              loading="lazy" 
              style={{
                position: 'absolute', 
                width: '100%', 
                height: '100%', 
                top: 0, 
                left: 0, 
                border: 'none', 
                padding: 0, 
                margin: 0
              }}
              src="https://www.canva.com/design/DAG7gE9vbQc/xGf6aGBTFyK8cqqekHDQBw/view?embed" 
              allowFullScreen 
              allow="fullscreen"
              data-testid="iframe-gratitude-presentation"
            />
          </div>
          
          <p className="text-center text-sm font-source-sans mt-4" style={{color: '#4b4b4b'}}>
            By Jessica Kelley
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
