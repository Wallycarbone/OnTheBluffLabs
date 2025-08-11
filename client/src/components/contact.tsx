import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { MapPin, Phone, Mail, Heart, Star, GraduationCap, Shield, Puzzle } from "lucide-react";
import dukeAtlasImage from "@assets/Duke and Atlas_1752524044867.webp";
import mikkolaImage from "@assets/Mikkola_1752525173263.webp";
import frankieImage from "@assets/Frankie_1752525510895.webp";

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [expandedTestimonials, setExpandedTestimonials] = useState<{[key: number]: boolean}>({});

  const toggleTestimonial = (index: number) => {
    setExpandedTestimonials(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const renderTestimonialText = (text: string, isExpanded: boolean, maxLength: number) => {
    const displayText = isExpanded ? text : truncateText(text, maxLength);
    const paragraphs = displayText.split('\n\n');
    
    return paragraphs.map((paragraph, index) => (
      <p key={index} className="mb-3 last:mb-0">
        {paragraph}
      </p>
    ));
  };

  const featuredTestimonials = [
    {
      name: "Tessa & Kaitlyn",
      testimonial: "Our experience with On the Bluff Labradors has been exceptional from getting matched with the right pup that would fit our lifestyle, to settling in with training, we were guided every step of the way.\n\nThe staff here is incredibly knowledgable and was eager to share their expertise with us to ensure we had a stress free experience. Jess was even kind enough to give us training tips months after we brought him home!\n\nIt is easy to see how much the staff cares about the dogs here and it made us even more confident bringing home our new puppy. We could not be more grateful for the team here and our puppy who has grown into a gorgeous and loyal dog.\n\nHis temperament is amazing and is a perfect mix between a snuggly boy, and an energetic pro swimmer (so he thinks). We could not be more thankful for our experience here.",
      dog: "Frankie",
      degree: "Bachelor's Degree Training Grad",
      parents: "Grizzly x Vivien",
      location: "",
      image: frankieImage
    },
    {
      name: "Jen",
      testimonial: "I had been wanting a pup from On The Bluff Labs for quite some time. I was lucky enough to get a pup from the magnificent Atticus before he was officially retired. The pups from OTB have wonderful, sound temperaments and are truly beautiful as a bonus!\n\nOne of my family members also has an OTB pup. I am so happy with my pup, Mikkola. Jess did a great job picking out a pup for us that matched our family's lifestyle, desires and expectations. I have a young, active son and it was very important to have a dog that was playful, yet gentle and well-balanced.\n\nHe was honestly the easiest puppy that I've ever raised. The on-site trainer, Jess, is amazing. Mikkola came home with me knowing essentially all basic commands, was trained to eliminate outside and was already crate trained! Incredible.\n\nMikkola did the training program with Jess and it was ABSOLUTELY worth spending the extra money. I would encourage anyone to make the investment initially, to help to avoid potential issues in the future. Experienced dog owners know that the time and money that will actually be saved in the long-run by purchasing a trained, well-socialized, well-adjusted, healthy pup cannot be overstated.",
      dog: "Mikkola",
      degree: "Master's Degree Training Grad",
      parents: "Atticus x Awillix",
      location: "",
      image: mikkolaImage
    },
    {
      name: "Toniann & Michael",
      testimonial: "Atlas here, is not our first, but actually is our second trained OTB pup. The choice to get a trained pup is incredibly clear, especially once you bring your furbaby home.\n\nAtlas, (and his big bro Duke), have the best manners you could ever see in puppies and are incredibly affectionate. We chalk this up to the weeks of training they had before coming to our home. Both of them were wonderfully crate trained, rarely had accidents, knew basic commands, and are great with other dogs and people, including children.\n\nHaving a dog with the proper foundation takes the work and stress away from worrying about if what you're doing is right. Plus, training a puppy is very demanding and as someone who already has a full-time job, the training program is a no-brainer.\n\nMy husband and I got both our OTB pups with 12 weeks of training, and I'm certain we will do it over and over again in the future.",
      dog: "Duke & Atlas",
      degree: "Master's Degree Training Grad",
      parents: "Duke: Charlies x Annie, Atlas: Oliver x Luna",
      location: "",
      image: dukeAtlasImage
    }
  ];

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      preferredColor: "",
      message: "",
    },
  });

  const createInquiry = useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const response = await apiRequest("/api/inquiries", "POST", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Submitted",
        description: "Thank you for your interest! We'll get back to you soon.",
      });
      form.reset();
      setSelectedColor("");
      queryClient.invalidateQueries({ queryKey: ["/api/inquiries"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit inquiry. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertInquiry) => {
    createInquiry.mutate(data);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-oswald font-normal mb-6 tracking-wide" style={{color: '#11100f'}}>
            GET IN TOUCH
          </h2>
          <p className="text-xl max-w-3xl mx-auto font-source-sans" style={{color: '#4b4b4b'}}>
            Ready to welcome a Labrador into your family? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="rounded-xl shadow-lg p-8" style={{backgroundColor: '#fefefe'}}>
            <h3 className="text-2xl font-oswald font-normal mb-6 tracking-wide" style={{color: '#11100f'}}>
              PUPPY INQUIRY FORM
            </h3>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-medium" style={{color: '#4b4b4b'}}>
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    {...form.register("firstName")}
                    className="mt-2"
                  />
                  {form.formState.errors.firstName && (
                    <p className="text-destructive text-sm mt-1">
                      {form.formState.errors.firstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm font-medium" style={{color: '#4b4b4b'}}>
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    {...form.register("lastName")}
                    className="mt-2"
                  />
                  {form.formState.errors.lastName && (
                    <p className="text-destructive text-sm mt-1">
                      {form.formState.errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm font-medium" style={{color: '#4b4b4b'}}>
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...form.register("email")}
                  className="mt-2"
                />
                {form.formState.errors.email && (
                  <p className="text-destructive text-sm mt-1">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-sm font-medium" style={{color: '#4b4b4b'}}>
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  {...form.register("phone")}
                  className="mt-2"
                />
                {form.formState.errors.phone && (
                  <p className="text-destructive text-sm mt-1">
                    {form.formState.errors.phone.message}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="preferredColor" className="text-sm font-medium" style={{color: '#4b4b4b'}}>
                  Preferred Color
                </Label>
                <Select
                  value={selectedColor}
                  onValueChange={(value) => {
                    setSelectedColor(value);
                    form.setValue("preferredColor", value);
                  }}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select a color preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yellow">Yellow</SelectItem>
                    <SelectItem value="black">Black</SelectItem>
                    <SelectItem value="chocolate">Chocolate</SelectItem>
                    <SelectItem value="no-preference">No preference</SelectItem>
                  </SelectContent>
                </Select>
                {form.formState.errors.preferredColor && (
                  <p className="text-destructive text-sm mt-1">
                    {form.formState.errors.preferredColor.message}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="message" className="text-sm font-medium" style={{color: '#4b4b4b'}}>
                  Tell us about your family
                </Label>
                <Textarea
                  id="message"
                  {...form.register("message")}
                  rows={4}
                  className="mt-2"
                  placeholder="Tell us about your family, experience with dogs, and what you're looking for in a Labrador..."
                />
                {form.formState.errors.message && (
                  <p className="text-destructive text-sm mt-1">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>
              
              <Button 
                type="submit" 
                className="w-full font-montserrat font-medium"
                style={{backgroundColor: '#e3b404', color: '#fefefe'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#644f06'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e3b404'}
                disabled={createInquiry.isPending}
              >
                {createInquiry.isPending ? "Submitting..." : "Submit Inquiry"}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="rounded-xl shadow-lg p-8" style={{backgroundColor: '#fefefe'}}>
              <h3 className="text-2xl font-oswald font-normal mb-6 tracking-wide" style={{color: '#11100f'}}>
                CONTACT INFORMATION
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-4 mt-1" style={{color: '#e3b404'}} />
                  <div>
                    <h4 className="font-oswald font-normal" style={{color: '#11100f'}}>Address</h4>
                    <p className="font-source-sans" style={{color: '#4b4b4b'}}>
                      165 Northern Boulevard<br />
                      Germantown, NY
                    </p>
                    <p className="font-source-sans text-sm mt-2 italic" style={{color: '#4b4b4b'}}>
                      Visits to our grounds are by appointment ONLY.<br />
                      Unannounced visitors will be turned away, without exception.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 mr-4 mt-1" style={{color: '#e3b404'}} />
                  <div>
                    <h4 className="font-oswald font-normal" style={{color: '#11100f'}}>Phone</h4>
                    <p className="font-source-sans" style={{color: '#4b4b4b'}}>(518) 855-6705</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-4 mt-1" style={{color: '#e3b404'}} />
                  <div>
                    <h4 className="font-oswald font-normal" style={{color: '#11100f'}}>Email</h4>
                    <p className="font-source-sans" style={{color: '#4b4b4b'}}>info@ontheblufflabradors.com</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-oswald font-normal mb-6 tracking-wide" style={{color: '#11100f'}}>
                VISIT US
              </h3>
              <p className="font-source-sans mb-4" style={{color: '#4b4b4b'}}>
                We welcome visits by appointment. Come meet our dogs and see our facilities in person.
              </p>
              <Button className="bg-slate-800 text-white hover:bg-slate-900 font-montserrat font-medium">
                Schedule a Visit
              </Button>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Family Stories Section */}
      <div className="py-20" style={{backgroundColor: '#fefdf8'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center rounded-full px-6 py-3 shadow-sm" style={{backgroundColor: '#fefefe'}}>
                <Heart className="w-6 h-6 mr-3" style={{color: '#6d761d'}} />
                <h2 className="text-3xl md:text-4xl font-oswald font-normal tracking-wide" style={{color: '#11100f'}}>
                  STORIES FROM OUR FAMILIES
                </h2>
              </div>
            </div>
            <p className="max-w-3xl mx-auto font-source-sans text-lg leading-relaxed" style={{color: '#4b4b4b'}}>
              Every puppy we place becomes part of a loving family. Here are some of their stories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <Card key={index} className="rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden" style={{backgroundColor: 'white'}}>
                <CardContent className="p-8 relative">
                  <div className="absolute top-0 left-0 w-full h-1" style={{backgroundColor: '#6d761d'}}></div>
                  <div className="flex items-center mb-6">
                    {testimonial.dog === "Duke & Atlas" ? (
                      <div className="flex items-center px-4 py-2 rounded-full" style={{backgroundColor: '#6d761d'}}>
                        <GraduationCap className="w-4 h-4 mr-2" style={{color: '#fefefe'}} />
                        <span className="text-sm font-source-sans font-medium" style={{color: '#fefefe'}}>
                          2nd Generation OTB Family
                        </span>
                      </div>
                    ) : testimonial.dog === "Mikkola" ? (
                      <div className="flex items-center px-4 py-2 rounded-full" style={{backgroundColor: '#6d761d'}}>
                        <Shield className="w-4 h-4 mr-2" style={{color: '#fefefe'}} />
                        <span className="text-sm font-source-sans font-medium" style={{color: '#fefefe'}}>
                          Perfect Family Temperament
                        </span>
                      </div>
                    ) : testimonial.dog === "Frankie" ? (
                      <div className="flex items-center px-4 py-2 rounded-full" style={{backgroundColor: '#6d761d'}}>
                        <Puzzle className="w-4 h-4 mr-2" style={{color: '#fefefe'}} />
                        <span className="text-sm font-source-sans font-medium" style={{color: '#fefefe'}}>
                          Expert Lifestyle Match
                        </span>
                      </div>
                    ) : (
                      <div className="flex" style={{color: '#6d761d'}}>
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="mb-6">
                    <div className="italic font-source-sans text-sm leading-relaxed" style={{color: '#4b4b4b'}}>
                      {renderTestimonialText(testimonial.testimonial, expandedTestimonials[index], 150)}
                    </div>
                    {expandedTestimonials[index] && testimonial.image && (
                      <div className="mb-4">
                        <img 
                          src={testimonial.image} 
                          alt={`${testimonial.dog} - ${testimonial.name}'s beloved companions`}
                          className="w-full rounded-lg shadow-md"
                        />
                      </div>
                    )}
                    {testimonial.testimonial.length > 150 && (
                      <button
                        onClick={() => toggleTestimonial(index)}
                        className="text-xs font-source-sans font-medium hover:underline transition-colors"
                        style={{color: '#6d761d'}}
                      >
                        {expandedTestimonials[index] ? 'Read Less' : 'Read More'}
                      </button>
                    )}
                  </div>
                  <div className="border-t pt-6" style={{borderColor: '#6d761d'}}>
                    <h4 className="font-oswald font-normal text-lg mb-2 tracking-wide" style={{color: '#11100f'}}>
                      {testimonial.name}
                    </h4>
                    <p className="font-medium text-sm mb-1" style={{color: '#6d761d'}}>
                      {testimonial.dog}'s Family
                    </p>
                    <p className="text-sm font-source-sans mb-1" style={{color: '#4b4b4b'}}>
                      <span className="font-medium">Program:</span> {testimonial.degree}
                    </p>
                    <div className="text-sm font-source-sans mb-1" style={{color: '#4b4b4b'}}>
                      <span className="font-medium">Parents:</span>
                      <div className="ml-2 mt-1">
                        {testimonial.parents.split(', ').map((parent, index) => (
                          <div key={index} className="text-xs">
                            {parent}
                          </div>
                        ))}
                      </div>
                    </div>
                    {testimonial.location && (
                      <p className="text-sm font-source-sans" style={{color: '#4b4b4b'}}>
                        {testimonial.location}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
