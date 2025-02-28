"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Sheet, 
  SheetTrigger, 
  SheetContent, 
  SheetClose 
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container flex justify-between items-center">
        <Link 
          href="#" 
          className={`text-2xl font-bold ${
            isScrolled ? 'text-primary' : 'text-white'
          }`}
        >
          JMC
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className={`hover:text-primary transition-colors ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="default" size="sm">Resume</Button>
        </nav>
        
        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className={`md:hidden ${isScrolled ? 'text-foreground' : 'text-white'}`}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col space-y-4 mt-6">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground hover:text-primary transition-colors py-2"
                  >
                    {link.name}
                  </Link>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button className="mt-2">Resume</Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;