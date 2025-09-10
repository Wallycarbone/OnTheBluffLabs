import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertApplicationSchema } from "@shared/schema";
import { Mail, Phone, MapPin, Heart, Users, Home } from "lucide-react";

// Extend the backend schema with additional UI validation
const applicationSchema = insertApplicationSchema.extend({
  // Add stricter validation for UI
  phone: z.string().min(10, "Please enter a valid phone number"),
  zipCode: z.string().min(5, "Please enter a valid ZIP code"),
  email: z.string().email("Please enter a valid email address"),
  homeVisitAgreed: z.boolean().refine(val => val === true, {
    message: "You must agree to a home visit"
  }),
  contractAgreed: z.boolean().refine(val => val === true, {
    message: "You must agree to the breeding contract terms"
  }),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

export default function PuppyApplication() {
  const { toast } = useToast();
  
  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      adults: "",
      children: "",
      childrenAges: "",
      otherPets: "",
      otherPetsDescription: "",
      housingType: "",
      ownRent: "",
      yardType: "",
      yardSize: "",
      fenced: "",
      puppyGender: "",
      puppyColor: "",
      specificLitter: "",
      timeline: "",
      previousExperience: "",
      experienceDescription: "",
      dailySchedule: "",
      exercisePlan: "",
      trainingApproach: "",
      veterinarian: "",
      vetPhone: "",
      reference1Name: "",
      reference1Phone: "",
      reference2Name: "",
      reference2Phone: "",
      whyLabrador: "",
      whyOnTheBluff: "",
      additionalInfo: "",
      homeVisitAgreed: false,
      contractAgreed: false,
    },
  });

  const submitApplication = useMutation({
    mutationFn: (data: ApplicationFormData) =>
      apiRequest("/api/applications", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }),
    onSuccess: () => {
      toast({
        title: "Application Submitted",
        description: "Thank you! Your puppy application has been submitted successfully. We'll be in touch soon.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Submission Error",
        description: error.message || "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ApplicationFormData) => {
    submitApplication.mutate(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-stone-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Puppy Application
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Begin your journey with On The Bluff Labradors. Please complete this comprehensive application 
            to help us ensure the perfect match between you and one of our exceptional puppies.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Information */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Mail className="h-6 w-6 text-olive-600 mr-3" />
                  <h2 className="text-2xl font-playfair font-semibold text-gray-900">
                    Personal Information
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input 
                            data-testid="input-firstName"
                            placeholder="Enter your first name" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input 
                            data-testid="input-lastName"
                            placeholder="Enter your last name" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            data-testid="input-email"
                            type="email"
                            placeholder="Enter your email address" 
                            {...field} 
                          />
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
                          <Input 
                            data-testid="input-phone"
                            type="tel"
                            placeholder="Enter your phone number" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>Street Address</FormLabel>
                        <FormControl>
                          <Input 
                            data-testid="input-address"
                            placeholder="Enter your street address" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input 
                            data-testid="input-city"
                            placeholder="Enter your city" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <Input 
                            data-testid="input-state"
                            placeholder="Enter your state" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="zipCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ZIP Code</FormLabel>
                        <FormControl>
                          <Input 
                            data-testid="input-zipCode"
                            placeholder="Enter your ZIP code" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Household Information */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="h-6 w-6 text-olive-600 mr-3" />
                  <h2 className="text-2xl font-playfair font-semibold text-gray-900">
                    Household Information
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="adults"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Adults in Household</FormLabel>
                        <FormControl>
                          <Select value={field.value} onValueChange={field.onChange}>
                            <SelectTrigger data-testid="select-adults">
                              <SelectValue placeholder="Select number of adults" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1</SelectItem>
                              <SelectItem value="2">2</SelectItem>
                              <SelectItem value="3">3</SelectItem>
                              <SelectItem value="4">4</SelectItem>
                              <SelectItem value="5+">5+</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="children"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Children in Household</FormLabel>
                        <FormControl>
                          <Select value={field.value} onValueChange={field.onChange}>
                            <SelectTrigger data-testid="select-children">
                              <SelectValue placeholder="Select number of children" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0">0</SelectItem>
                              <SelectItem value="1">1</SelectItem>
                              <SelectItem value="2">2</SelectItem>
                              <SelectItem value="3">3</SelectItem>
                              <SelectItem value="4">4</SelectItem>
                              <SelectItem value="5+">5+</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="childrenAges"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>Ages of Children (if any)</FormLabel>
                        <FormControl>
                          <Input 
                            data-testid="input-childrenAges"
                            placeholder="e.g., 5, 8, 12" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="otherPets"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Do you have other pets?</FormLabel>
                        <FormControl>
                          <Select value={field.value} onValueChange={field.onChange}>
                            <SelectTrigger data-testid="select-otherPets">
                              <SelectValue placeholder="Select yes or no" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="no">No</SelectItem>
                              <SelectItem value="yes">Yes</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="otherPetsDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Other Pets Description</FormLabel>
                        <FormControl>
                          <Input 
                            data-testid="input-otherPetsDescription"
                            placeholder="Describe your other pets" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Housing Information */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Home className="h-6 w-6 text-olive-600 mr-3" />
                  <h2 className="text-2xl font-playfair font-semibold text-gray-900">
                    Housing Information
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="housingType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type of Housing</FormLabel>
                        <FormControl>
                          <Select value={field.value} onValueChange={field.onChange}>
                            <SelectTrigger data-testid="select-housingType">
                              <SelectValue placeholder="Select housing type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="house">House</SelectItem>
                              <SelectItem value="apartment">Apartment</SelectItem>
                              <SelectItem value="condo">Condo</SelectItem>
                              <SelectItem value="townhouse">Townhouse</SelectItem>
                              <SelectItem value="farm">Farm/Ranch</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="ownRent"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Do you own or rent?</FormLabel>
                        <FormControl>
                          <Select value={field.value} onValueChange={field.onChange}>
                            <SelectTrigger data-testid="select-ownRent">
                              <SelectValue placeholder="Select own or rent" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="own">Own</SelectItem>
                              <SelectItem value="rent">Rent</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="yardType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Yard Type</FormLabel>
                        <FormControl>
                          <Select value={field.value} onValueChange={field.onChange}>
                            <SelectTrigger data-testid="select-yardType">
                              <SelectValue placeholder="Select yard type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="large">Large Yard</SelectItem>
                              <SelectItem value="medium">Medium Yard</SelectItem>
                              <SelectItem value="small">Small Yard</SelectItem>
                              <SelectItem value="none">No Yard</SelectItem>
                              <SelectItem value="acreage">Acreage</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="yardSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Approximate Yard Size</FormLabel>
                        <FormControl>
                          <Input 
                            data-testid="input-yardSize"
                            placeholder="e.g., 1/4 acre, 50x100 feet" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="fenced"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>Is your yard fenced?</FormLabel>
                        <FormControl>
                          <Select value={field.value} onValueChange={field.onChange}>
                            <SelectTrigger data-testid="select-fenced">
                              <SelectValue placeholder="Select fence status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="fully">Fully Fenced</SelectItem>
                              <SelectItem value="partially">Partially Fenced</SelectItem>
                              <SelectItem value="no">Not Fenced</SelectItem>
                              <SelectItem value="planning">Planning to Fence</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Puppy Preferences */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Heart className="h-6 w-6 text-olive-600 mr-3" />
                  <h2 className="text-2xl font-playfair font-semibold text-gray-900">
                    Puppy Preferences
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="puppyGender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Gender</FormLabel>
                        <FormControl>
                          <Select value={field.value} onValueChange={field.onChange}>
                            <SelectTrigger data-testid="select-puppyGender">
                              <SelectValue placeholder="Select gender preference" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="no-preference">No Preference</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="puppyColor"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Color</FormLabel>
                        <FormControl>
                          <Select value={field.value} onValueChange={field.onChange}>
                            <SelectTrigger data-testid="select-puppyColor">
                              <SelectValue placeholder="Select color preference" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="black">Black</SelectItem>
                              <SelectItem value="yellow">Yellow</SelectItem>
                              <SelectItem value="chocolate">Chocolate</SelectItem>
                              <SelectItem value="fox-red">Fox Red</SelectItem>
                              <SelectItem value="white">White</SelectItem>
                              <SelectItem value="no-preference">No Preference</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="specificLitter"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>Specific Litter Interest (Optional)</FormLabel>
                        <FormControl>
                          <Input 
                            data-testid="input-specificLitter"
                            placeholder="Any specific litter you're interested in?" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="timeline"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>Timeline for Adoption</FormLabel>
                        <FormControl>
                          <Select value={field.value} onValueChange={field.onChange}>
                            <SelectTrigger data-testid="select-timeline">
                              <SelectValue placeholder="Select your timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="immediately">Immediately</SelectItem>
                              <SelectItem value="1-3-months">1-3 months</SelectItem>
                              <SelectItem value="3-6-months">3-6 months</SelectItem>
                              <SelectItem value="6-12-months">6-12 months</SelectItem>
                              <SelectItem value="flexible">Flexible - waiting for perfect match</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Experience & Care */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MapPin className="h-6 w-6 text-olive-600 mr-3" />
                  <h2 className="text-2xl font-playfair font-semibold text-gray-900">
                    Experience & Care
                  </h2>
                </div>

                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="previousExperience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Previous Dog Experience</FormLabel>
                        <FormControl>
                          <Select value={field.value} onValueChange={field.onChange}>
                            <SelectTrigger data-testid="select-previousExperience">
                              <SelectValue placeholder="Select your experience level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="first-time">First-time dog owner</SelectItem>
                              <SelectItem value="some">Some experience</SelectItem>
                              <SelectItem value="experienced">Very experienced</SelectItem>
                              <SelectItem value="labrador">Previous Labrador owner</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="experienceDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Experience Description (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            data-testid="textarea-experienceDescription"
                            placeholder="Please describe your previous experience with dogs"
                            rows={3}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="dailySchedule"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Daily Schedule & Puppy Care Plan</FormLabel>
                        <FormControl>
                          <Textarea 
                            data-testid="textarea-dailySchedule"
                            placeholder="Describe your daily schedule and how you plan to care for the puppy"
                            rows={4}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="exercisePlan"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Exercise Plan</FormLabel>
                        <FormControl>
                          <Textarea 
                            data-testid="textarea-exercisePlan"
                            placeholder="How do you plan to exercise and keep the puppy active?"
                            rows={3}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="trainingApproach"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Training Approach</FormLabel>
                        <FormControl>
                          <Textarea 
                            data-testid="textarea-trainingApproach"
                            placeholder="Describe your approach to training and socializing the puppy"
                            rows={3}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="veterinarian"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Veterinarian Information</FormLabel>
                          <FormControl>
                            <Input 
                              data-testid="input-veterinarian"
                              placeholder="Veterinarian name and clinic" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="vetPhone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Veterinarian Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input 
                              data-testid="input-vetPhone"
                              type="tel"
                              placeholder="Veterinarian phone number" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* References */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Phone className="h-6 w-6 text-olive-600 mr-3" />
                  <h2 className="text-2xl font-playfair font-semibold text-gray-900">
                    References (Optional)
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="reference1Name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Reference 1 Name</FormLabel>
                        <FormControl>
                          <Input 
                            data-testid="input-reference1Name"
                            placeholder="Name of reference" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="reference1Phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Reference 1 Phone</FormLabel>
                        <FormControl>
                          <Input 
                            data-testid="input-reference1Phone"
                            type="tel"
                            placeholder="Phone number of reference" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="reference2Name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Reference 2 Name</FormLabel>
                        <FormControl>
                          <Input 
                            data-testid="input-reference2Name"
                            placeholder="Name of reference" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="reference2Phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Reference 2 Phone</FormLabel>
                        <FormControl>
                          <Input 
                            data-testid="input-reference2Phone"
                            type="tel"
                            placeholder="Phone number of reference" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Heart className="h-6 w-6 text-olive-600 mr-3" />
                  <h2 className="text-2xl font-playfair font-semibold text-gray-900">
                    Additional Information
                  </h2>
                </div>

                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="whyLabrador"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Why do you want a Labrador?</FormLabel>
                        <FormControl>
                          <Textarea 
                            data-testid="textarea-whyLabrador"
                            placeholder="Please tell us why you chose the Labrador breed"
                            rows={4}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="whyOnTheBluff"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Why did you choose On The Bluff Labradors?</FormLabel>
                        <FormControl>
                          <Textarea 
                            data-testid="textarea-whyOnTheBluff"
                            placeholder="What drew you to our breeding program?"
                            rows={4}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="additionalInfo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Information (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            data-testid="textarea-additionalInfo"
                            placeholder="Anything else you'd like us to know?"
                            rows={3}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Agreements */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-6">
                  Agreements & Consent
                </h2>

                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="homeVisitAgreed"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            data-testid="checkbox-homeVisitAgreed"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I agree to a home visit as part of the application process
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="contractAgreed"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            data-testid="checkbox-contractAgreed"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I agree to sign a breeding contract and understand the terms and conditions
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                data-testid="button-submit"
                type="submit"
                disabled={submitApplication.isPending}
                className="px-12 py-4 text-lg font-montserrat font-semibold bg-olive-600 hover:bg-olive-700 text-white rounded-lg transition-all duration-200"
              >
                {submitApplication.isPending ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}