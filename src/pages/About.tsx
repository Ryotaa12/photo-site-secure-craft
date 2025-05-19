
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-[#070b17] text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About PrimeLinks</h1>
            <p className="text-xl text-gray-300">
              Dedicated to providing secure network solutions since 2010
            </p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  PrimeLinks was founded in 2010 with a mission to provide enterprise-grade network security solutions to businesses of all sizes. What started as a small team of security experts has grown into a leading provider of network infrastructure and cybersecurity services.
                </p>
                <p className="text-gray-700">
                  Over the years, we've helped thousands of organizations secure their networks against evolving threats while maintaining optimal performance and reliability. Our expertise spans across various industries including finance, healthcare, education, and government.
                </p>
                <p className="text-gray-700">
                  Today, PrimeLinks continues to innovate and develop cutting-edge security solutions to meet the challenges of an increasingly connected world.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                  <p className="text-gray-700">
                    To be the most trusted provider of secure network solutions, ensuring businesses can operate safely in an increasingly connected world.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                  <p className="text-gray-700">
                    To deliver innovative and reliable network security solutions that protect our clients' digital assets and enable them to focus on their core business objectives.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Our Values</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Security Excellence</li>
                    <li>Customer Focus</li>
                    <li>Innovation</li>
                    <li>Integrity</li>
                    <li>Continuous Improvement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the experts who drive our company's vision and innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="mb-4 mx-auto bg-gray-200 rounded-full w-24 h-24"></div>
                <h3 className="text-xl font-bold mb-1">John Smith</h3>
                <p className="text-[#00e5b0] font-medium mb-3">CEO & Founder</p>
                <p className="text-gray-600">
                  Former cybersecurity consultant with 20+ years of experience in network security.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="mb-4 mx-auto bg-gray-200 rounded-full w-24 h-24"></div>
                <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                <p className="text-[#00e5b0] font-medium mb-3">CTO</p>
                <p className="text-gray-600">
                  Network architecture specialist with expertise in developing secure infrastructure solutions.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="mb-4 mx-auto bg-gray-200 rounded-full w-24 h-24"></div>
                <h3 className="text-xl font-bold mb-1">Michael Chen</h3>
                <p className="text-[#00e5b0] font-medium mb-3">Head of Security Operations</p>
                <p className="text-gray-600">
                  Security operations expert with background in threat intelligence and incident response.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide network security solutions to businesses across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="h-20 bg-gray-100 rounded-md flex items-center justify-center">
              <div className="text-lg font-bold text-gray-400">Client 1</div>
            </div>
            <div className="h-20 bg-gray-100 rounded-md flex items-center justify-center">
              <div className="text-lg font-bold text-gray-400">Client 2</div>
            </div>
            <div className="h-20 bg-gray-100 rounded-md flex items-center justify-center">
              <div className="text-lg font-bold text-gray-400">Client 3</div>
            </div>
            <div className="h-20 bg-gray-100 rounded-md flex items-center justify-center">
              <div className="text-lg font-bold text-gray-400">Client 4</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#070b17] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Work with Us?</h2>
            <p className="text-xl text-gray-300">
              Let's discuss how we can help secure your network infrastructure.
            </p>
            <Button size="lg" className="bg-[#00e5b0] text-[#070b17] hover:bg-[#00e5b0]/90">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
