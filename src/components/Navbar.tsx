
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-[#070b17] text-white sticky top-0 z-50">
      <div className="container mx-auto py-4 px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src="/lovable-uploads/0689673c-c7a9-45fe-905f-75df0bfea966.png" alt="PrimeLinks Network Logo" className="h-10" />
          </Link>
          <Link to="/" className="text-xl font-bold">PrimeLinks</Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-[#00e5b0] transition-colors">Home</Link>
          <Link to="/services" className="hover:text-[#00e5b0] transition-colors">Services</Link>
          <Link to="/about" className="hover:text-[#00e5b0] transition-colors">About</Link>
          <Link to="/contact" className="hover:text-[#00e5b0] transition-colors">Contact</Link>
        </nav>
        
        <div className="hidden md:flex gap-3">
          <Link to="/login">
            <Button variant="outline" className="border-[#00e5b0] text-[#00e5b0] hover:bg-[#00e5b0] hover:text-[#070b17]">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-[#00e5b0] text-[#070b17] hover:bg-[#00e5b0]/90">
              Get Started
            </Button>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c1524] border-t border-[#1a2436]">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-white hover:text-[#00e5b0] py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="text-white hover:text-[#00e5b0] py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className="text-white hover:text-[#00e5b0] py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-white hover:text-[#00e5b0] py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            <div className="flex flex-col space-y-2">
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="border-[#00e5b0] text-[#00e5b0] hover:bg-[#00e5b0] hover:text-[#070b17] w-full">
                  Login
                </Button>
              </Link>
              <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                <Button className="bg-[#00e5b0] text-[#070b17] hover:bg-[#00e5b0]/90 w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
