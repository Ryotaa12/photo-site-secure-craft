
import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
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
              <li><Link to="/services" className="text-gray-400 hover:text-[#00e5b0]">Network Security</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#00e5b0]">Cloud Infrastructure</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#00e5b0]">Data Encryption</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#00e5b0]">Managed Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-[#00e5b0]">About Us</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-[#00e5b0]">Our Team</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#00e5b0]">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#00e5b0]">Contact</Link></li>
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
  );
};

export default Footer;
