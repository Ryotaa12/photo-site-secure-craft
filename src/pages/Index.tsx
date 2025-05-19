
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Wifi, Server, ShieldCheck, GlobeLock } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <header className="bg-[#070b17] text-white sticky top-0 z-50">
        <div className="container mx-auto py-4 px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/0689673c-c7a9-45fe-905f-75df0bfea966.png" alt="PrimeLinks Network Logo" className="h-10" />
            <span className="text-xl font-bold">PrimeLinks</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-[#00e5b0] transition-colors">Home</Link>
            <Link to="/services" className="hover:text-[#00e5b0] transition-colors">Services</Link>
            <Link to="/about" className="hover:text-[#00e5b0] transition-colors">About</Link>
            <Link to="/contact" className="hover:text-[#00e5b0] transition-colors">Contact</Link>
          </nav>
          <div className="flex gap-3">
            <Button variant="outline" className="hidden md:inline-flex border-[#00e5b0] text-[#00e5b0] hover:bg-[#00e5b0] hover:text-[#070b17]">
              Login
            </Button>
            <Button className="bg-[#00e5b0] text-[#070b17] hover:bg-[#00e5b0]/90">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#070b17] text-white py-16 md:py-24 flex-grow">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Secure Network <span className="text-[#00e5b0]">Solutions</span> for Your Business
              </h1>
              <p className="text-lg md:text-xl text-gray-300">
                Enterprise-grade network infrastructure with advanced security features to keep your business connected and protected.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-[#00e5b0] text-[#070b17] hover:bg-[#00e5b0]/90">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="border-[#00e5b0] text-[#00e5b0] hover:bg-[#00e5b0] hover:text-[#070b17]">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00e5b0] to-[#00a5e5] rounded-full blur-xl opacity-70"></div>
                <div className="bg-[#0c1524] p-6 rounded-xl relative shadow-lg border border-[#1a2436]">
                  <div className="flex items-center justify-center mb-6">
                    <GlobeLock className="h-12 w-12 text-[#00e5b0]" />
                  </div>
                  <div className="space-y-4">
                    <div className="h-2 bg-[#1a2436] rounded-full overflow-hidden">
                      <div className="h-full bg-[#00e5b0] w-[85%]"></div>
                    </div>
                    <div className="h-2 bg-[#1a2436] rounded-full overflow-hidden">
                      <div className="h-full bg-[#00e5b0] w-[90%]"></div>
                    </div>
                    <div className="h-2 bg-[#1a2436] rounded-full overflow-hidden">
                      <div className="h-full bg-[#00e5b0] w-[75%]"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="bg-[#1a2436] p-3 rounded-lg text-center">
                        <p className="text-xs text-gray-400">Traffic Encrypted</p>
                        <p className="text-xl font-bold text-[#00e5b0]">99.9%</p>
                      </div>
                      <div className="bg-[#1a2436] p-3 rounded-lg text-center">
                        <p className="text-xs text-gray-400">Uptime</p>
                        <p className="text-xl font-bold text-[#00e5b0]">99.99%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Network Security Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide cutting-edge network solutions with a focus on security, reliability, and performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 bg-[#070b17] p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <Shield className="text-[#00e5b0]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Threat Protection</h3>
                <p className="text-gray-600">Advanced firewall and intrusion detection systems to prevent unauthorized access.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 bg-[#070b17] p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <Wifi className="text-[#00e5b0]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Secure Connectivity</h3>
                <p className="text-gray-600">End-to-end encrypted connections for your business data and communications.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 bg-[#070b17] p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <Server className="text-[#00e5b0]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Managed Infrastructure</h3>
                <p className="text-gray-600">24/7 monitored network infrastructure with proactive maintenance.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Enterprise-Grade Security Features</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-[#070b17] p-2 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="text-[#00e5b0] h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Advanced Encryption</h3>
                    <p className="text-gray-600">Military-grade encryption protocols to secure data in transit and at rest.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-[#070b17] p-2 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="text-[#00e5b0] h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Real-time Monitoring</h3>
                    <p className="text-gray-600">Continuous traffic analysis and threat detection to prevent security breaches.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-[#070b17] p-2 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="text-[#00e5b0] h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">DDoS Protection</h3>
                    <p className="text-gray-600">Robust safeguards against distributed denial of service attacks.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Network Protection</h3>
                  <span className="text-[#00e5b0] font-bold">98%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-[#00e5b0] rounded-full w-[98%]"></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Data Encryption</h3>
                  <span className="text-[#00e5b0] font-bold">100%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-[#00e5b0] rounded-full w-full"></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Threat Detection</h3>
                  <span className="text-[#00e5b0] font-bold">99%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-[#00e5b0] rounded-full w-[99%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#070b17] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Secure Your Network?</h2>
            <p className="text-xl text-gray-300">
              Join thousands of businesses that trust PrimeLinks for their secure network needs.
            </p>
            <Button size="lg" className="bg-[#00e5b0] text-[#070b17] hover:bg-[#00e5b0]/90">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0c1524] text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/lovable-uploads/0689673c-c7a9-45fe-905f-75df0bfea966.png" alt="PrimeLinks Network Logo" className="h-8" />
                <span className="text-lg font-bold">PrimeLinks</span>
              </div>
              <p className="text-gray-400">Secure network solutions for businesses of all sizes.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-gray-400 hover:text-[#00e5b0]">Network Security</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-[#00e5b0]">Cloud Infrastructure</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-[#00e5b0]">Data Encryption</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-[#00e5b0]">Managed Services</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-gray-400 hover:text-[#00e5b0]">About Us</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-[#00e5b0]">Our Team</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-[#00e5b0]">Careers</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-[#00e5b0]">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <address className="not-italic text-gray-400 space-y-2">
                <p>123 Security Avenue</p>
                <p>Cyber City, CS 12345</p>
                <p>contact@primelinks.com</p>
                <p>+1 (555) 123-4567</p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} PrimeLinks Network. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
