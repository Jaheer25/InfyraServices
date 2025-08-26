import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  UserPlus
} from "lucide-react";

// Form validation schemas
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const registrationFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;
type RegistrationFormData = z.infer<typeof registrationFormSchema>;

export default function Contact() {
  const [activeForm, setActiveForm] = useState<"contact" | "registration">("contact");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Contact form
  const contactForm = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // Registration form
  const registrationForm = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
    },
  });

  // Contact form mutation
  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      await apiRequest("POST", "/api/contacts", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      contactForm.reset();
    },
    onError: (error) => {
      toast({
        title: "Failed to Send Message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  // Registration mutation
  const registrationMutation = useMutation({
    mutationFn: async (data: RegistrationFormData) => {
      await apiRequest("POST", "/api/business-registrations", data);
    },
    onSuccess: () => {
      toast({
        title: "Registration Successful!",
        description: "Welcome to Infyra! We'll contact you soon with more details.",
      });
      registrationForm.reset();
    },
    onError: (error) => {
      toast({
        title: "Registration Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onContactSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const onRegistrationSubmit = (data: RegistrationFormData) => {
    registrationMutation.mutate(data);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="contact-hero-title">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" data-testid="contact-hero-description">
            Ready to get started? Contact us for computer services or digital marketing course enrollment. 
            We're here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Forms Section */}
            <div>
              {/* Form Toggle */}
              <div className="flex mb-8 bg-white rounded-lg p-1 shadow-sm">
                <button
                  onClick={() => setActiveForm("contact")}
                  className={`flex-1 py-3 px-6 rounded-md font-medium transition-colors ${
                    activeForm === "contact"
                      ? "bg-cyan text-white"
                      : "text-gray-600 hover:text-navy"
                  }`}
                  data-testid="tab-contact"
                >
                  <MessageCircle className="inline mr-2 h-4 w-4" />
                  Send Message
                </button>
                <button
                  onClick={() => setActiveForm("registration")}
                  className={`flex-1 py-3 px-6 rounded-md font-medium transition-colors ${
                    activeForm === "registration"
                      ? "bg-cyan text-white"
                      : "text-gray-600 hover:text-navy"
                  }`}
                  data-testid="tab-registration"
                >
                  <UserPlus className="inline mr-2 h-4 w-4" />
                  Business Registration
                </button>
              </div>

              {/* Contact Form */}
              {activeForm === "contact" && (
                <Card data-testid="contact-form">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageCircle className="mr-2 h-5 w-5 text-cyan" />
                      Send Us a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Form {...contactForm}>
                      <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-6">
                        <FormField
                          control={contactForm.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter your full name" 
                                  data-testid="input-name"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={contactForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input 
                                  type="email" 
                                  placeholder="Enter your email address" 
                                  data-testid="input-email"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={contactForm.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number (Optional)</FormLabel>
                              <FormControl>
                                <Input 
                                  type="tel" 
                                  placeholder="Enter your phone number" 
                                  data-testid="input-phone"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={contactForm.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-subject">
                                    <SelectValue placeholder="Select a subject" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="computer-repair">Computer Repair Service</SelectItem>
                                  <SelectItem value="digital-marketing">Digital Marketing Course</SelectItem>
                                  <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                                  <SelectItem value="support">Technical Support</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={contactForm.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Enter your message" 
                                  rows={4}
                                  data-testid="textarea-message"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button 
                          type="submit" 
                          className="w-full bg-cyan hover:bg-cyan/90"
                          disabled={contactMutation.isPending}
                          data-testid="button-send-message"
                        >
                          {contactMutation.isPending ? (
                            "Sending..."
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              )}

              {/* Registration Form */}
              {activeForm === "registration" && (
                <Card data-testid="registration-form">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <UserPlus className="mr-2 h-5 w-5 text-cyan" />
                      Business Registration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Form {...registrationForm}>
                      <form onSubmit={registrationForm.handleSubmit(onRegistrationSubmit)} className="space-y-6">
                        <FormField
                          control={registrationForm.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter your full name" 
                                  data-testid="input-reg-name"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={registrationForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input 
                                  type="email" 
                                  placeholder="Enter your email address" 
                                  data-testid="input-reg-email"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={registrationForm.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number (Optional)</FormLabel>
                              <FormControl>
                                <Input 
                                  type="tel" 
                                  placeholder="Enter your phone number" 
                                  data-testid="input-reg-phone"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={registrationForm.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Interested In</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-service">
                                    <SelectValue placeholder="Select service" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="computer-services">Computer Services</SelectItem>
                                  <SelectItem value="digital-marketing">Digital Marketing Course</SelectItem>
                                  <SelectItem value="both">Both Services & Course</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button 
                          type="submit" 
                          className="w-full bg-cyan hover:bg-cyan/90"
                          disabled={registrationMutation.isPending}
                          data-testid="button-register"
                        >
                          {registrationMutation.isPending ? (
                            "Registering..."
                          ) : (
                            <>
                              <UserPlus className="mr-2 h-4 w-4" />
                              Create Account
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card data-testid="contact-info">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="mr-2 h-5 w-5 text-cyan" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-cyan/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-cyan" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-1">Address</h4>
                      <p className="text-gray-600" data-testid="contact-address">
                        Barasat 2, Golabari Bazar<br />
                        PIN 743423, West Bengal
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-cyan/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-cyan" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-1">Phone</h4>
                      <p className="text-gray-600" data-testid="contact-phone">
                        +91 6289727242
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-cyan/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-cyan" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-1">Email</h4>
                      <p className="text-gray-600" data-testid="contact-email">
                        jk9092745@gmail.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-cyan/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-cyan" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-1">Business Hours</h4>
                      <p className="text-gray-600" data-testid="contact-hours">
                        Mon - Sat: 9:00 AM - 7:00 PM<br />
                        Sunday: 10:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-cyan to-blue-600 text-white" data-testid="quick-contact">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-gray-100 mb-6">
                    Join hundreds of satisfied customers who trust Infyra for their computer services 
                    and digital marketing education.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-cyan flex-1"
                      onClick={() => window.location.href = "tel:+916289727242"}
                      data-testid="button-call-now"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Button>
                    <Button 
                      className="bg-white text-cyan hover:bg-gray-100 flex-1"
                      onClick={() => setActiveForm("registration")}
                      data-testid="button-register-now"
                    >
                      <UserPlus className="mr-2 h-4 w-4" />
                      Register
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4" data-testid="quick-actions-title">
              Quick Actions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="quick-actions-description">
              Need immediate assistance? Use these quick links to get help faster
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer" data-testid="quick-action-emergency">
              <CardContent className="p-6">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-navy mb-2">Emergency Repair</h3>
                <p className="text-sm text-gray-600 mb-4">Urgent computer issues? Call for immediate assistance</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-red-500 text-red-600 hover:bg-red-50"
                  onClick={() => window.location.href = "tel:+916289727242"}
                >
                  Call Emergency
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer" data-testid="quick-action-quote">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-navy mb-2">Get Free Quote</h3>
                <p className="text-sm text-gray-600 mb-4">Request a detailed quote for our services</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-blue-500 text-blue-600 hover:bg-blue-50"
                  onClick={() => setActiveForm("contact")}
                >
                  Request Quote
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer" data-testid="quick-action-enroll">
              <CardContent className="p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-navy mb-2">Course Enrollment</h3>
                <p className="text-sm text-gray-600 mb-4">Enroll in our digital marketing courses</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-green-500 text-green-600 hover:bg-green-50"
                  onClick={() => setActiveForm("registration")}
                >
                  Enroll Now
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer" data-testid="quick-action-schedule">
              <CardContent className="p-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-navy mb-2">Schedule Visit</h3>
                <p className="text-sm text-gray-600 mb-4">Book an appointment for on-site service</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-purple-500 text-purple-600 hover:bg-purple-50"
                  onClick={() => setActiveForm("contact")}
                >
                  Schedule Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
