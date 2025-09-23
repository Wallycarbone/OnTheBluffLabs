import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import dogFoodHeroImage from '@assets/Untitled design - 2025-09-23T094717.321_1758635261590.png';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const dogFoodOrderSchema = z.object({
  customerName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  foodType: z.string().min(1, "Please select a food type"),
  quantity: z.string().min(1, "Please specify quantity"),
  pickupDate: z.date({
    required_error: "Please select a pickup date",
  }),
  pickupTime: z.string().min(1, "Please select a pickup time"),
});

type DogFoodOrderForm = z.infer<typeof dogFoodOrderSchema>;

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
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const { toast } = useToast();

  const form = useForm<DogFoodOrderForm>({
    resolver: zodResolver(dogFoodOrderSchema),
    defaultValues: {
      customerName: "",
      email: "",
      phone: "",
      foodType: "",
      quantity: "1",
      pickupTime: "",
    },
  });

  const onSubmit = async (data: DogFoodOrderForm) => {
    try {
      // Find the selected product details
      const product = foodProducts.find(p => p.id === data.foodType);
      if (!product) {
        throw new Error("Product not found");
      }

      // Prepare the order data for the backend
      const orderData = {
        customerName: data.customerName,
        email: data.email,
        phone: data.phone,
        address: "165 Northern Boulevard, Germantown NY (Pickup Only)",
        productId: product.id,
        productName: product.name,
        productPrice: product.price,
        quantity: parseInt(data.quantity),
        totalAmount: product.price * parseInt(data.quantity),
        notes: `Pickup scheduled for ${format(data.pickupDate, "PPP")} at ${data.pickupTime}`,
        pickupDate: format(data.pickupDate, "yyyy-MM-dd"),
        pickupTime: data.pickupTime,
      };

      // Submit to backend API
      const response = await fetch("/api/dog-food-orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit order");
      }

      toast({
        title: "Order Submitted",
        description: "We've received your dog food order and will contact you within 24 hours to confirm details and arrange pickup.",
      });
      
      form.reset();
      setSelectedProduct("");
    } catch (error) {
      console.error("Order submission error:", error);
      toast({
        title: "Order Failed",
        description: "There was an error submitting your order. Please try again or call us directly.",
        variant: "destructive",
      });
    }
  };

  const selectedProductDetails = foodProducts.find(p => p.id === selectedProduct);

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
            Premium Fresh Dog Food
          </h1>
          <p className="text-xl md:text-2xl font-source-sans font-light max-w-3xl mx-auto">
            Nourishing Labradors with Fresh, Wholesome Nutrition for Over 50 Years
          </p>
        </div>
      </section>

      <div className="bg-gradient-to-b from-stone-50 to-stone-100 py-16">
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

        {/* Fresh Feeding Essay Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-oswald font-normal tracking-wide mb-8 text-center text-stone-900">
            Our Philosophy on Fresh Feeding
          </h2>
          
          <div className="mb-8">
            <div className="font-source-sans leading-relaxed text-justify space-y-6 max-w-4xl mx-auto" 
              style={{
                color: '#2d3748', 
                lineHeight: '1.8',
                fontSize: '16px',
                letterSpacing: '0.02em'
              }}
            >
                <p>For over fifty years, we have fed our Labradors fresh, species-appropriate nutrition that mirrors what dogs would consume in their natural environment. Fresh feeding isn't just a trend—it's a return to the fundamental nutrition that has sustained healthy dogs for thousands of years.</p>

                <p>We feed our dogs fresh food made up of high-quality proteins such as meat, fish, and poultry, combined with fresh vegetables—mainly nutrient-dense greens, a variety of seasonal fruits, beneficial oils, and carefully selected supplements. When you provide your dog with varied, fresh nutrition, synthetic supplements become largely unnecessary.</p>

                <p>Our fresh food diet includes proteins from local butchers, whole fish with bones, heads, tails, and organs (their absolute favorite!), fresh vegetables like kale, collard greens, dandelion greens, broccoli, and green beans, plus sweet potatoes. We incorporate olive oil, cod liver oil, and salmon oil for essential fatty acids.</p>

                <p>Fresh bones are exceptional for dental health and provide natural nutrition—chicken backs are particularly beneficial and economical. Fresh bones remain soft enough for developing teeth while providing mental stimulation and natural teeth cleaning. Never feed cooked bones, which can splinter dangerously.</p>

                <p>We add fresh garlic for flavor and its traditional benefits in helping ward off fleas and ticks. Seasonal fruits like pears, apples, and berries provide antioxidants and natural variety. Each dog develops individual preferences, making mealtime both nutritious and enjoyable.</p>

                <p>Fresh feeding preserves natural enzymes that are destroyed in commercial processing, supports optimal digestion, maintains healthy weight, promotes lustrous coats, and provides the sustained energy that keeps our Labradors thriving well into their senior years. The difference in vitality, coat quality, and overall health is unmistakable.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedProduct === product.id 
                      ? 'ring-2 ring-olive-600 shadow-lg' 
                      : 'hover:shadow-md'
                  }`}
                  onClick={() => {
                    setSelectedProduct(product.id);
                    form.setValue('foodType', product.id);
                  }}
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

            {selectedProductDetails && (
              <Card className="mt-6 bg-olive-50 border-olive-200">
                <CardHeader>
                  <CardTitle className="text-olive-800 font-oswald tracking-wide">Selected Product</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-oswald font-normal text-olive-900 tracking-wide">{selectedProductDetails.name}</h3>
                  <p className="text-olive-700 text-sm mt-1 font-source-sans">{selectedProductDetails.description}</p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-olive-600 font-source-sans">Price: ${selectedProductDetails.price} per {selectedProductDetails.unit}</span>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Form */}
          <div>
            <h2 className="text-3xl font-oswald font-normal text-stone-900 mb-6 tracking-wide">
              Place Your Order
            </h2>

            <Card>
              <CardHeader>
                <CardTitle className="font-oswald tracking-wide">Order Information</CardTitle>
                <CardDescription className="font-source-sans">
                  Fill out the form below to place your dog food order. We'll contact you to confirm details and arrange delivery.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Customer Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-oswald font-normal text-stone-800 tracking-wide">Customer Information</h3>
                      
                      <FormField
                        control={form.control}
                        name="customerName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input placeholder="your@email.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="(555) 123-4567" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <Separator />

                    {/* Order Details */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-oswald font-normal text-stone-800 tracking-wide">Order Details</h3>
                      
                      <FormField
                        control={form.control}
                        name="foodType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Food Type</FormLabel>
                            <Select 
                              onValueChange={(value) => {
                                field.onChange(value);
                                setSelectedProduct(value);
                              }} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a food type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {foodProducts.map((product) => (
                                  <SelectItem key={product.id} value={product.id}>
                                    {product.name} - ${product.price}/{product.unit}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="quantity"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Quantity</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., 2 bags, 1 month supply" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Separator />

                    {/* Pickup Scheduling */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-oswald font-normal text-stone-800 tracking-wide">Pickup Schedule</h3>
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                        <p className="text-amber-800 font-source-sans text-sm">
                          <strong>Pickup Only:</strong> All fresh food orders must be picked up at our facility in Germantown, NY. Orders require 14 days advance notice. Please select your preferred pickup date and time.
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="pickupDate"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Pickup Date</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "w-full pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP")
                                      ) : (
                                        <span>Pick a date</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) => {
                                      const today = new Date();
                                      const minDate = new Date();
                                      minDate.setDate(today.getDate() + 14);
                                      return date < minDate || date < new Date("1900-01-01");
                                    }}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="pickupTime"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Pickup Time</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select pickup time" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                                  <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                                  <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                                  <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                                  <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                                  <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                                  <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                                  <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                                  <SelectItem value="5:00 PM">5:00 PM</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>



                    <Button 
                      type="submit" 
                      className="w-full bg-olive-600 hover:bg-olive-700 text-white font-source-sans font-semibold py-3"
                    >
                      Submit Order Request
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Order Information */}
            <Card className="mt-6 bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800 font-oswald tracking-wide">Fresh Food Order Process</CardTitle>
              </CardHeader>
              <CardContent className="text-blue-700 space-y-2 font-source-sans">
                <p>• <strong>Pickup Only:</strong> All orders must be picked up at our Germantown, NY facility</p>
                <p>• We'll contact you within 24 hours to confirm your order and pickup appointment</p>
                <p>• Payment is collected at pickup (cash or check preferred)</p>
                <p>• Fresh food prepared weekly - orders require 14 days advance notice</p>
                <p>• Please bring a cooler for transport to maintain food quality</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}