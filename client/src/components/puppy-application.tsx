import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { insertApplicationSchema, type InsertApplication } from "@shared/schema";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { z } from "zod";

// Enhanced schema that enforces agreements to be true
const enhancedApplicationSchema = insertApplicationSchema.extend({
  homeVisitAgreed: z.literal(true, { errorMap: () => ({ message: "You must agree to a home visit" }) }),
  contractAgreed: z.literal(true, { errorMap: () => ({ message: "You must agree to the puppy contract" }) }),
});

export default function PuppyApplication() {
  const { toast } = useToast();

  const form = useForm<InsertApplication>({
    resolver: zodResolver(enhancedApplicationSchema),
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
      childrenAges: undefined,
      otherPets: "",
      otherPetsDescription: undefined,
      housingType: "",
      ownRent: "",
      yardType: "",
      yardSize: "",
      fenced: "",
      puppyGender: "",
      puppyColor: "",
      specificLitter: undefined,
      timeline: "",
      previousExperience: "",
      experienceDescription: undefined,
      dailySchedule: "",
      exercisePlan: "",
      trainingApproach: "",
      veterinarian: "",
      vetPhone: undefined,
      reference1Name: undefined,
      reference1Phone: undefined,
      reference2Name: undefined,
      reference2Phone: undefined,
      whyLabrador: "",
      whyOnTheBluff: "",
      additionalInfo: undefined,
      homeVisitAgreed: false,
      contractAgreed: false,
    },
  });

  const submitApplication = useMutation({
    mutationFn: async (data: InsertApplication) => {
      return await apiRequest("/api/applications", "POST", data);
    },
    onSuccess: () => {
      // Invalidate applications cache for admin views
      queryClient.invalidateQueries({ queryKey: ["/api/applications"] });
      
      toast({
        title: "Application Submitted Successfully!",
        description: "We've received your application and will be in touch soon.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Submission Failed",
        description: "Please check your information and try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertApplication) => {
    submitApplication.mutate(data);
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom right, #fefefe 0%, #ebebeb 100%)' }}>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-oswald font-normal mb-6 tracking-wide text-gray-900">
            PUPPY MATCHING QUESTIONNAIRE
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-source-sans">
            Begin your journey with On The Bluff Labradors. Please complete this comprehensive application 
            to help us ensure the perfect match between you and one of our exceptional puppies.
          </p>
        </div>

        {/* Application Form */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Personal Information Section */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-oswald font-normal text-gray-900">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input data-testid="input-firstName" {...field} />
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
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input data-testid="input-lastName" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input data-testid="input-email" type="email" {...field} />
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
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input data-testid="input-phone" type="tel" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Street Address *</FormLabel>
                        <FormControl>
                          <Input data-testid="input-address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City *</FormLabel>
                          <FormControl>
                            <Input data-testid="input-city" {...field} />
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
                          <FormLabel>State *</FormLabel>
                          <FormControl>
                            <Input data-testid="input-state" {...field} />
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
                          <FormLabel>Zip Code *</FormLabel>
                          <FormControl>
                            <Input data-testid="input-zipCode" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Household Information Section */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-oswald font-normal text-gray-900">Household Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="adults"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Number of Adults in Household *</FormLabel>
                          <FormControl>
                            <Input data-testid="input-adults" {...field} />
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
                          <FormLabel>Number of Children in Household *</FormLabel>
                          <FormControl>
                            <Input data-testid="input-children" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="childrenAges"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ages of Children (if applicable)</FormLabel>
                        <FormControl>
                          <Input data-testid="input-childrenAges" placeholder="e.g., 5, 8, 12" {...field} value={field.value || ""} />
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
                        <FormLabel>Do you have other pets? *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-otherPets">
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="none">No pets</SelectItem>
                            <SelectItem value="dogs">Dogs</SelectItem>
                            <SelectItem value="cats">Cats</SelectItem>
                            <SelectItem value="other">Other pets</SelectItem>
                            <SelectItem value="multiple">Multiple types</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="otherPetsDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Please describe your other pets (breed, age, temperament)</FormLabel>
                        <FormControl>
                          <Textarea data-testid="textarea-otherPetsDescription" {...field} value={field.value || ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Housing Information Section */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-oswald font-normal text-gray-900">Housing Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="housingType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Type of Housing *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-housingType">
                                <SelectValue placeholder="Select housing type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="house">House</SelectItem>
                              <SelectItem value="apartment">Apartment</SelectItem>
                              <SelectItem value="condo">Condo</SelectItem>
                              <SelectItem value="townhouse">Townhouse</SelectItem>
                              <SelectItem value="farm">Farm/Rural</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="ownRent"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Do you own or rent? *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-ownRent">
                                <SelectValue placeholder="Select option" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="own">Own</SelectItem>
                              <SelectItem value="rent">Rent</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="yardType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Yard Type *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-yardType">
                                <SelectValue placeholder="Select yard type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="large">Large yard</SelectItem>
                              <SelectItem value="medium">Medium yard</SelectItem>
                              <SelectItem value="small">Small yard</SelectItem>
                              <SelectItem value="none">No yard</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="yardSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Approximate Yard Size *</FormLabel>
                          <FormControl>
                            <Input data-testid="input-yardSize" placeholder="e.g., 1/4 acre, 0.1 acres" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="fenced"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Is your yard fenced? *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-fenced">
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="fully">Fully fenced</SelectItem>
                            <SelectItem value="partially">Partially fenced</SelectItem>
                            <SelectItem value="none">Not fenced</SelectItem>
                            <SelectItem value="planning">Planning to fence</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Puppy Preferences Section */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-oswald font-normal text-gray-900">Puppy Preferences</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="puppyGender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Gender *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-puppyGender">
                                <SelectValue placeholder="Select preference" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="either">Either</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="puppyColor"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Color *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-puppyColor">
                                <SelectValue placeholder="Select color preference" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="yellow">Yellow</SelectItem>
                              <SelectItem value="black">Black</SelectItem>
                              <SelectItem value="chocolate">Chocolate</SelectItem>
                              <SelectItem value="any">Any color</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="specificLitter"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Interested in a specific litter?</FormLabel>
                        <FormControl>
                          <Input data-testid="input-specificLitter" placeholder="e.g., Moon x Grizzly" {...field} value={field.value || ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="timeline"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>When are you hoping to bring home a puppy? *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-timeline">
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="immediately">Immediately</SelectItem>
                            <SelectItem value="1-3months">1-3 months</SelectItem>
                            <SelectItem value="3-6months">3-6 months</SelectItem>
                            <SelectItem value="6-12months">6-12 months</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Experience & Care Section */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-oswald font-normal text-gray-900">Experience & Care</h2>
                  <FormField
                    control={form.control}
                    name="previousExperience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Do you have experience with dogs? *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-previousExperience">
                              <SelectValue placeholder="Select experience level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="extensive">Extensive experience</SelectItem>
                            <SelectItem value="some">Some experience</SelectItem>
                            <SelectItem value="limited">Limited experience</SelectItem>
                            <SelectItem value="first-time">First-time dog owner</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="experienceDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Please describe your experience with dogs</FormLabel>
                        <FormControl>
                          <Textarea data-testid="textarea-experienceDescription" {...field} value={field.value || ""} />
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
                        <FormLabel>Describe your typical daily schedule and how a puppy would fit in *</FormLabel>
                        <FormControl>
                          <Textarea data-testid="textarea-dailySchedule" {...field} />
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
                        <FormLabel>What are your plans for exercising your puppy? *</FormLabel>
                        <FormControl>
                          <Textarea data-testid="textarea-exercisePlan" {...field} />
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
                        <FormLabel>What is your approach to training? *</FormLabel>
                        <FormControl>
                          <Textarea data-testid="textarea-trainingApproach" {...field} />
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
                          <FormLabel>Veterinarian Name/Clinic *</FormLabel>
                          <FormControl>
                            <Input data-testid="input-veterinarian" {...field} />
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
                          <FormLabel>Veterinarian Phone Number</FormLabel>
                          <FormControl>
                            <Input data-testid="input-vetPhone" type="tel" {...field} value={field.value || ""} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* References Section */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-oswald font-normal text-gray-900">References</h2>
                  <p className="text-sm text-gray-600">Please provide two references (not family members)</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="reference1Name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Reference 1 - Name</FormLabel>
                          <FormControl>
                            <Input data-testid="input-reference1Name" {...field} value={field.value || ""} />
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
                          <FormLabel>Reference 1 - Phone</FormLabel>
                          <FormControl>
                            <Input data-testid="input-reference1Phone" type="tel" {...field} value={field.value || ""} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="reference2Name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Reference 2 - Name</FormLabel>
                          <FormControl>
                            <Input data-testid="input-reference2Name" {...field} value={field.value || ""} />
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
                          <FormLabel>Reference 2 - Phone</FormLabel>
                          <FormControl>
                            <Input data-testid="input-reference2Phone" type="tel" {...field} value={field.value || ""} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Additional Information Section */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-oswald font-normal text-gray-900">Additional Information</h2>
                  
                  <FormField
                    control={form.control}
                    name="whyLabrador"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Why are you interested in a Labrador Retriever? *</FormLabel>
                        <FormControl>
                          <Textarea data-testid="textarea-whyLabrador" {...field} />
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
                        <FormLabel>Why are you interested in a puppy from On The Bluff Labradors? *</FormLabel>
                        <FormControl>
                          <Textarea data-testid="textarea-whyOnTheBluff" {...field} />
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
                        <FormLabel>Any additional information you'd like to share?</FormLabel>
                        <FormControl>
                          <Textarea data-testid="textarea-additionalInfo" {...field} value={field.value || ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Agreements Section */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-oswald font-normal text-gray-900">Agreements</h2>
                  
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
                        </div>
                        <FormMessage />
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
                            I agree to sign a puppy contract and understand that this application does not guarantee a puppy
                          </FormLabel>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    data-testid="button-submit"
                    disabled={submitApplication.isPending}
                    className="w-full bg-olive hover:bg-olive-dark text-white font-montserrat font-semibold py-3 px-6 rounded-lg transition-colors"
                    style={{ backgroundColor: '#6d761d' }}
                  >
                    {submitApplication.isPending ? "Submitting..." : "Submit Application"}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}