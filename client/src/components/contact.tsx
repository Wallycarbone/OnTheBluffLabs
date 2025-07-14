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
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedColor, setSelectedColor] = useState<string>("");

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
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-slate-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Ready to welcome a Labrador into your family? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-playfair font-bold text-slate-900 mb-6">
              Puppy Inquiry Form
            </h3>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-medium text-slate-700">
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
                  <Label htmlFor="lastName" className="text-sm font-medium text-slate-700">
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
                <Label htmlFor="email" className="text-sm font-medium text-slate-700">
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
                <Label htmlFor="phone" className="text-sm font-medium text-slate-700">
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
                <Label htmlFor="preferredColor" className="text-sm font-medium text-slate-700">
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
                <Label htmlFor="message" className="text-sm font-medium text-slate-700">
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
                className="w-full bg-yellow-600 text-white hover:bg-yellow-700 font-montserrat font-medium"
                disabled={createInquiry.isPending}
              >
                {createInquiry.isPending ? "Submitting..." : "Submit Inquiry"}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-playfair font-bold text-slate-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-yellow-600 w-5 h-5 mr-4 mt-1" />
                  <div>
                    <h4 className="font-montserrat font-medium text-slate-900">Address</h4>
                    <p className="text-slate-700">
                      1234 Bluff Ridge Road<br />
                      Countryside, State 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="text-yellow-600 w-5 h-5 mr-4 mt-1" />
                  <div>
                    <h4 className="font-montserrat font-medium text-slate-900">Phone</h4>
                    <p className="text-slate-700">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-yellow-600 w-5 h-5 mr-4 mt-1" />
                  <div>
                    <h4 className="font-montserrat font-medium text-slate-900">Email</h4>
                    <p className="text-slate-700">info@ontheblufflabradors.com</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-playfair font-bold text-slate-900 mb-6">
                Visit Us
              </h3>
              <p className="text-slate-700 mb-4">
                We welcome visits by appointment. Come meet our dogs and see our facilities in person.
              </p>
              <Button className="bg-slate-800 text-white hover:bg-slate-900 font-montserrat font-medium">
                Schedule a Visit
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
