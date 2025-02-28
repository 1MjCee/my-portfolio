// src/components/sections/Hero.jsx
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-primary/90 to-primary-foreground/90 text-white pt-16">
      <div className="container px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Julius Matheka Charles
            </h1>
            
            <h2 className="text-xl md:text-2xl mb-6 text-slate-200">
              AI Engineer | Data Scientist | ML Engineer
            </h2>
            
            <p className="text-lg max-w-lg mb-8 text-slate-200">
              Building intelligent systems that solve real-world problems through
              the intersection of data science, machine learning, and software engineering.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild
                size="lg"
                variant="secondary"
                className="font-medium"
              >
                <Link href="#projects">
                  View My Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
              >
                <Link href="#contact">
                  Get In Touch
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 mt-8">
              <Link
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              
              <Link
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Profile image would go here */}
              <div className="w-64 h-64 md:w-80 md:h-80 bg-white/20 rounded-full overflow-hidden border-4 border-white/30 flex items-center justify-center">
                {/* Replace with actual image */}
                <span className="text-6xl font-bold">JM</span>
              </div>
              
              {/* Background decoration */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-full border-4 border-white/20 -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;