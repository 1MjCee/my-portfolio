"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, FileText } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out backdrop-blur-sm ${
        isScrolled ? "bg-background/90 shadow-lg py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl"
            >
              JMC
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:flex items-center space-x-10"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {navLinks.map((link) => (
              <motion.div key={link.name} variants={itemVariants}>
                <Link
                  href={link.href}
                  className={`font-medium text-lg hover:text-primary transition-colors duration-300 relative group ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
            <motion.div variants={itemVariants}>
              <Button
                variant="secondary"
                size="lg"
                className="font-medium text-lg px-6 rounded-lg shadow-md hover:shadow-lg flex items-center gap-2 transition-all"
              >
                <FileText className="h-4 w-4" />
                Resume
              </Button>
            </motion.div>
          </motion.nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`md:hidden hover:bg-white/10 ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="border-l border-primary/20">
              <div className="flex flex-col h-full">
                <div className="text-2xl font-bold text-primary mt-8 mb-6 px-2">
                  Julius Matheka Charles
                </div>
                <nav className="flex flex-col space-y-1 mt-6">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.name}>
                      <Link
                        href={link.href}
                        className="text-foreground hover:text-primary hover:bg-secondary/50 transition-colors py-4 px-2 rounded-md text-lg"
                      >
                        {link.name}
                      </Link>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Button className="mt-8 py-6 flex items-center gap-2 text-lg">
                      <FileText className="h-5 w-5" />
                      Download Resume
                    </Button>
                  </SheetClose>
                </nav>

                <div className="mt-auto mb-8 text-sm text-muted-foreground px-2">
                  © 2025 Julius Matheka Charles
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
