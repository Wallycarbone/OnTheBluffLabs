import { Card, CardContent } from "@/components/ui/card";
import wallyCarlaImage from "@assets/Untitled design (92)_1753108643199.png";
import lyricaImage from "@assets/Black and White Minimalist New Collection Social Media Mockup Instagram Post (71)_1753110327800.png";
import jessImage from "@assets/Black and White Minimalist New Collection Social Media Mockup Instagram Post (72)_1753126495308.png";

export default function Team() {
  const teamMembers = [
    {
      name: "Wally & Carla",
      role: "Owners & Founders",
      description: "The passionate founders behind On The Bluff Labradors, dedicated to breeding exceptional Labradors with strong temperaments and health. Their hands-on approach ensures every puppy receives personalized care from birth.",
      image: wallyCarlaImage,
    },
    {
      name: "Lyrica Crosby, LVT",
      role: "General Manager & Licensed Veterinary Technician",
      description: "Lyrica is both our general manager and a licensed veterinary technician. She oversees breeding and whelping, ensures our health testing protocols are followed, and provides expert medical care for our breeding dogs and puppies.",
      image: lyricaImage,
    },
    {
      name: "Jess Kelley-Madera, CPDT-KA",
      role: "Head Trainer & Behavioral Specialist",
      description: "Our certified professional dog trainer develops each puppy's training program and works with families to facilitate smooth transitions. Using gentle methods, she reinforces good behavior in pups to help them grow into confident, easy-to-manage adult dogs.",
      image: jessImage,
    },
    {
      name: "Thomas Gambino",
      role: "Puppy Training & Family Coordinator",
      description: "Thomas trains puppies, helps with puppy placement, and is a valued member of one of our co-owner families. His hands-on experience and personal connection to our breeding program brings authentic insight to puppy development and family matching.",
      image: "/attached_assets/24_1754773881053.png",
    },
    {
      name: "Michaela Joyce",
      role: "Puppy Training & Care Specialist",
      description: "Michaela trains our puppies and provides dedicated care throughout their early development. Her nurturing approach ensures each puppy receives individual attention and develops the confident, well-adjusted temperament our families expect.",
      image: "/attached_assets/25_1754773927239.png",
    },
    {
      name: "David Rifenburgh",
      role: "Puppy Trainer",
      description: "David started as a puppy parent and developed an interest in training, so he joined our team. His experience as a Labrador owner brings valuable perspective to our training and puppy development programs.",
      image: "/attached_assets/Puppies 5x4 (4 x 4 in) (7)_1754774561852.png",
    },
    {
      name: "Poppy Tampasis",
      role: "Team Member", 
      description: "Poppy's family has co-owned for years, so Labradors are a family affair for him. This deep, multi-generational connection to our breeding program brings invaluable insight to facility operations and puppy development.",
      image: "/attached_assets/Puppies 5x4 (4 x 4 in) (9)_1754774819506.png",
    },
    {
      name: "Julie Rifenburgh",
      role: "Puppy Trainer",
      description: "Julie is a bachelor's candidate in SUNY Cobleskill's Canine Training and Management program, and she helps train our puppies. Her formal education in canine behavior and training methods enhances our puppy development programs.",
      image: "/attached_assets/Puppies 5x4 (4 x 4 in) (8)_1754774682894.png",
    },
    {
      name: "Drew Richards",
      role: "Puppy Trainer",
      description: "Drew brings extensive doggie daycare experience to our weekend puppy care team. His understanding of group dynamics and individual puppy needs ensures our young Labradors receive quality attention and socialization during their crucial early development phase.",
      image: "/attached_assets/Puppies 5x4 (4 x 4 in) (20)_1756152199562.png",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-oswald font-normal mb-6 tracking-wide" style={{color: '#11100f'}}>
            OUR TEAM
          </h2>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto">
            Meet the dedicated professionals who make our exceptional breeding program possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-white rounded-2xl shadow-xl text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-oswald font-normal tracking-wide mb-2" style={{color: '#11100f'}}>
                  {member.name}
                </h3>
                <p className="text-sm font-medium mb-4" style={{color: '#6d761d'}}>
                  {member.role}
                </p>
                <p className="text-warm-gray text-sm leading-relaxed">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
