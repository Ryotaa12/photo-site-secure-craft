
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Wifi, Server, ShieldCheck, GlobeLock, Link, ShieldLock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link as RouterLink } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-[#070b17] text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Network Security Services</h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive security solutions to protect your business infrastructure
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 bg-[#070b17] p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <Shield className="text-[#00e5b0]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Advanced Firewall Protection</h3>
                <p className="text-gray-600 mb-4">Next-generation firewall solutions that provide deep packet inspection and threat intelligence.</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#00e5b0]" />
                    <span className="text-gray-700">Real-time traffic monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#00e5b0]" />
                    <span className="text-gray-700">Application control</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#00e5b0]" />
                    <span className="text-gray-700">Auto-block suspicious activities</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 bg-[#070b17] p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <GlobeLock className="text-[#00e5b0]" />
                </div>
                <h3 className="text-xl font-bold mb-2">VPN Solutions</h3>
                <p className="text-gray-600 mb-4">Secure remote access solutions with end-to-end encryption for your workforce.</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#00e5b0]" />
                    <span className="text-gray-700">Site-to-site VPN</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#00e5b0]" />
                    <span className="text-gray-700">Remote access VPN</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#00e5b0]" />
                    <span className="text-gray-700">Multi-factor authentication</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 bg-[#070b17] p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <Wifi className="text-[#00e5b0]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Secure Wi-Fi Networks</h3>
                <p className="text-gray-600 mb-4">Enterprise-grade wireless networks with advanced security protocols.</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#00e5b0]" />
                    <span className="text-gray-700">WPA3 Enterprise encryption</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#00e5b0]" />
                    <span className="text-gray-700">Guest network isolation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#00e5b0]" />
                    <span className="text-gray-700">Rogue access point detection</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 bg-[#070b17] p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <Server className="text-[#00e5b0]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Network Monitoring</h3>
                <p className="text-gray-600 mb-4">24/7 monitoring and management of your network infrastructure.</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#00e5b0]" />
                    <span className="text-gray-700">Real-time alerts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#00e5b0]" />
                    <span className="text-gray-700">Performance optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#00e5b0]" />
                    <span className="text-gray-700">Proactive issue resolution</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 bg-[#070b17] p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <ShieldLock className="text-[#00e5b0]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Data Loss Prevention</h3>
                <p className="text-gray-600 mb-4">Protect sensitive information from unauthorized access or leaks.</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#00e5b0]" />
                    <span className="text-gray-700">Content inspection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#00e5b0]" />
                    <span className="text-gray-700">Endpoint protection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#00e5b0]" />
                    <span className="text-gray-700">Policy enforcement</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 bg-[#070b17] p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <Link className="text-[#00e5b0]" />
                </div>
                <h3 className="text-xl font-bold mb-2">SD-WAN Solutions</h3>
                <p className="text-gray-600 mb-4">Software-defined wide area networking for optimal traffic management.</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#00e5b0]" />
                    <span className="text-gray-700">Bandwidth optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#00e5b0]" />
                    <span className="text-gray-700">Centralized management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#00e5b0]" />
                    <span className="text-gray-700">Failover capabilities</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#070b17] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Need a Custom Security Solution?</h2>
            <p className="text-xl text-gray-300">
              Contact our team of experts to discuss your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#00e5b0] text-[#070b17] hover:bg-[#00e5b0]/90">
                <RouterLink to="/contact">Contact Us</RouterLink>
              </Button>
              <Button size="lg" variant="outline" className="border-[#00e5b0] text-[#00e5b0] hover:bg-[#00e5b0] hover:text-[#070b17]">
                <RouterLink to="/about">Learn About Us</RouterLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
