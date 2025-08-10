import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const dogFoodOrderSchema = z.object({
  customerName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  dogName: z.string().min(1, "Dog name is required"),
  dogAge: z.string().min(1, "Dog age is required"),
  dogWeight: z.string().min(1, "Dog weight is required"),
  foodType: z.string().min(1, "Please select a food type"),
  quantity: z.string().min(1, "Please specify quantity"),
  deliveryAddress: z.string().min(10, "Please provide complete delivery address"),
  specialInstructions: z.string().optional(),
});

type DogFoodOrderForm = z.infer<typeof dogFoodOrderSchema>;

const foodProducts = [
  {
    id: "raw-blend-adult",
    name: "On The Bluff Breakfast Blend",
    description: "Complete raw food blend featuring chicken, turkey, fish, and vegetables with natural supplements specifically formulated for adult Labradors",
    price: 28,
    unit: "5 lb block",
    benefits: ["100% raw ingredients", "Farm-fresh proteins", "No preservatives", "Supports natural digestion", "Promotes healthy coat"]
  },
  {
    id: "raw-blend-puppy",
    name: "On The Bluff Dinner Blend", 
    description: "Nutrient-dense raw food blend featuring beef and vegetables with optimal protein ratios and essential fatty acids for proper development",
    price: 28,
    unit: "5 lb block",
    benefits: ["Growth-optimized nutrition", "Raw bone content for teeth", "Brain development support", "Natural enzyme preservation", "Easy transition from mother's milk"]
  },
  {
    id: "senior-formula",
    name: "Fresh Raw Senior Formula",
    description: "Gentle raw blend with softer textures and joint-supporting ingredients, specially crafted for senior Labradors with aging nutritional needs",
    price: 98,
    unit: "20 lb portion", 
    benefits: ["Softer raw textures", "Anti-inflammatory ingredients", "Digestive enzyme support", "Glucosamine for joints", "Heart-healthy omega oils"]
  },
  {
    id: "raw-treats",
    name: "Premium Raw Training Treats",
    description: "Single-ingredient freeze-dried raw treats made from premium organ meats and muscle meat for high-value training rewards",
    price: 45,
    unit: "1 lb bag",
    benefits: ["Single-ingredient raw", "High protein content", "Perfect training size", "No artificial additives", "Long-lasting freshness"]
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
      dogName: "",
      dogAge: "",
      dogWeight: "",
      foodType: "",
      quantity: "",
      deliveryAddress: "",
      specialInstructions: "",
    },
  });

  const onSubmit = async (data: DogFoodOrderForm) => {
    try {
      // TODO: Implement actual order submission to backend
      console.log("Dog food order submitted:", data);
      
      toast({
        title: "Order Submitted",
        description: "We've received your dog food order and will contact you within 24 hours to confirm details and arrange delivery.",
      });
      
      form.reset();
      setSelectedProduct("");
    } catch (error) {
      toast({
        title: "Order Failed",
        description: "There was an error submitting your order. Please try again or call us directly.",
        variant: "destructive",
      });
    }
  };

  const selectedProductDetails = foodProducts.find(p => p.id === selectedProduct);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-oswald font-normal text-stone-900 mb-6 tracking-wide">
            Premium Raw Dog Food
          </h1>
          <p className="text-xl text-stone-700 max-w-3xl mx-auto font-source-sans leading-relaxed">
            We feed our dogs fresh raw food made up of high-quality proteins, fresh vegetables, 
            and essential supplements. Raw feeding preserves natural enzymes, provides optimal nutrition, 
            and supports the digestive health that has kept our Labradors thriving for over 50 years. 
            Experience the difference that species-appropriate raw nutrition can make for your Labrador.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Selection */}
          <div>
            <h2 className="text-3xl font-oswald font-normal text-stone-900 mb-6 tracking-wide">
              Fresh Raw Food Products
            </h2>
            
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
                        <CardTitle className="text-xl font-oswald text-stone-900 tracking-wide">
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

                    {/* Dog Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-oswald font-normal text-stone-800 tracking-wide">Dog Information</h3>
                      
                      <FormField
                        control={form.control}
                        name="dogName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Dog's Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your dog's name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="dogAge"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Age</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., 2 years, 8 months" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="dogWeight"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Weight</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., 65 lbs" {...field} />
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

                      <FormField
                        control={form.control}
                        name="deliveryAddress"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Delivery Address</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Enter complete delivery address including city, state, and zip code"
                                {...field}
                                rows={3}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="specialInstructions"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Special Instructions (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Any special dietary needs, delivery instructions, or other notes"
                                {...field}
                                rows={3}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
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
                <CardTitle className="text-blue-800 font-oswald tracking-wide">Raw Food Order Process</CardTitle>
              </CardHeader>
              <CardContent className="text-blue-700 space-y-2 font-source-sans">
                <p>• We'll contact you within 24 hours to confirm your raw food order</p>
                <p>• Payment is collected upon delivery or pickup</p>
                <p>• Local delivery available within 50 miles of Germantown, NY</p>
                <p>• Pickup available at our facility by appointment only</p>
                <p>• Fresh raw food prepared weekly - orders require 5-7 days notice</p>
                <p>• All raw food is flash-frozen for freshness and safety</p>
                <p>• Detailed feeding guidelines included with every order</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}