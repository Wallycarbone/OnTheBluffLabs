import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Gratitude() {
  return (
    <div className="min-h-screen bg-[#fefefe]">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
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
              src="https://www.youtube.com/embed/-gEG1pnSCco" 
              allowFullScreen 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              data-testid="iframe-gratitude-video"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
