
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Create a schema for form validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(1, { message: "Company name is required." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  subscribe: z.boolean().default(false),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  // Setup form with react-hook-form and zod validation
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
      subscribe: false,
    },
  });

  // Form submission handler
  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll be in touch shortly.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-[#070b17] text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300">
              Get in touch with our team for any inquiries or to request a quote
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-8">
                Fill out the form and one of our network security experts will get back to you within 24 hours.
              </p>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Smith" {...field} />
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
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@company.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Company Ltd" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <textarea 
                            className="flex min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Tell us about your network security needs..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subscribe"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            Subscribe to our newsletter
                          </FormLabel>
                          <FormDescription>
                            Get the latest security updates and news.
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="bg-[#00e5b0] text-[#070b17] hover:bg-[#00e5b0]/90 w-full">
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
            
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#00e5b0]">Address</h4>
                      <address className="not-italic text-gray-700">
                        123 Security Avenue<br />
                        Cyber City, CS 12345<br />
                        United States
                      </address>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-[#00e5b0]">Phone</h4>
                      <p className="text-gray-700">+1 (555) 123-4567</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-[#00e5b0]">Email</h4>
                      <p className="text-gray-700">contact@primelinks.com</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-[#00e5b0]">Business Hours</h4>
                      <p className="text-gray-700">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">Emergency Support</h3>
                    <p className="text-gray-700 mb-4">
                      For urgent security issues, our team is available 24/7.
                    </p>
                    <Button className="w-full">+1 (555) 911-SECURE</Button>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-8 bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">How quickly can you deploy a security solution?</h4>
                    <p className="text-gray-700">We can typically deploy basic security solutions within 48-72 hours, with more complex configurations taking 1-2 weeks.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Do you offer custom security solutions?</h4>
                    <p className="text-gray-700">Yes, we tailor our security services to meet the specific needs of your business.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">What industries do you serve?</h4>
                    <p className="text-gray-700">We work with organizations across various sectors including finance, healthcare, education, retail, and government.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
