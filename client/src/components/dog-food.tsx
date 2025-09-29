import dogFoodHeroImage from '@assets/Untitled design - 2025-09-23T094717.321_1758635261590.png';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const foodProducts = [
  {
    id: "raw-blend-adult",
    name: "On The Bluff Breakfast Blend",
    description: "Complete fresh food blend featuring chicken, turkey, fish, and vegetables with natural supplements specifically formulated for adult Labradors",
    price: 28,
    unit: "5 lb block",
    benefits: ["100% fresh ingredients", "Farm-fresh proteins", "No preservatives", "Supports natural digestion", "Promotes healthy coat"]
  },
  {
    id: "raw-blend-puppy",
    name: "On The Bluff Dinner Blend", 
    description: "Nutrient-dense fresh food blend featuring beef and vegetables with optimal protein ratios and essential fatty acids for proper development",
    price: 28,
    unit: "5 lb block",
    benefits: ["Growth-optimized nutrition", "Fresh bone content for teeth", "Brain development support", "Natural enzyme preservation", "Easy transition from mother's milk"]
  },
  {
    id: "senior-formula",
    name: "On The Bluff Butcher Bags",
    description: "Fresh beef with tripe blend featuring softer textures and joint-supporting ingredients, specially crafted for senior Labradors with aging nutritional needs",
    price: 30,
    unit: "15 lb portion", 
    benefits: ["Softer fresh textures", "Anti-inflammatory ingredients", "Digestive enzyme support", "Glucosamine for joints", "Heart-healthy omega oils"]
  }
];

export default function DogFoodPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section 
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: `url(${dogFoodHeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 100%)'}}></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-oswald font-normal mb-4 tracking-wide">
            PREMIUM FRESH DOG FOOD
          </h1>
          <p className="text-xl md:text-2xl font-source-sans font-light max-w-3xl mx-auto">
            Nourishing Labradors with Fresh, Wholesome Nutrition for Over 50 Years
          </p>
        </div>
      </section>

      <div className="py-16" style={{backgroundColor: '#fffbe8'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction Section */}
          <div className="text-center mb-12">
            <p className="text-xl text-stone-700 max-w-3xl mx-auto font-source-sans leading-relaxed">
              We feed our dogs fresh food made up of high-quality proteins, fresh vegetables, 
              and essential supplements. Fresh feeding preserves natural enzymes, provides optimal nutrition, 
              and supports the digestive health that has kept our Labradors thriving for over 50 years. 
              Experience the difference that species-appropriate fresh nutrition can make for your Labrador.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Product Selection */}
            <div>
              <h2 className="text-3xl font-oswald font-normal text-stone-900 mb-2 tracking-wide">
                Fresh Food Products
              </h2>
              <p className="text-lg font-source-sans text-stone-600 mb-6 italic">Pickup Only</p>
              
              <div className="space-y-6">
                {foodProducts.map((product) => (
                  <Card 
                    key={product.id}
                    className="transition-all duration-200 hover:shadow-md"
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl font-oswald font-normal text-stone-900 tracking-wide">
                            {product.name}
                          </CardTitle>
                          <CardDescription className="text-stone-600 mt-2 font-source-sans">
                            {product.description}
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-olive-600">
                            ${product.price}
                          </div>
                          <div className="text-sm text-stone-500 font-source-sans">
                            per {product.unit}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {product.benefits.map((benefit, index) => (
                          <Badge 
                            key={index} 
                            variant="secondary" 
                            className="bg-olive-100 text-olive-800 hover:bg-olive-200"
                          >
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Order Button */}
            <div className="text-center mt-16 mb-16 py-8 bg-stone-50 rounded-lg">
              <h3 className="text-2xl font-oswald font-normal text-stone-900 mb-6 tracking-wide">
                Ready to Order?
              </h3>
              <a 
                href="https://app.acuityscheduling.com/schedule.php?owner=13384245" 
                target="_blank" 
                rel="noopener noreferrer"
                data-testid="button-place-order"
                className="inline-block font-source-sans font-bold py-6 px-12 text-xl shadow-lg rounded-lg transition-colors duration-200 hover:opacity-90"
                style={{backgroundColor: '#6d761d', color: 'white', textDecoration: 'none', border: 'none'}}
              >
                Place Your Order Here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}