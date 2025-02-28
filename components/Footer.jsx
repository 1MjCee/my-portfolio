// src/components/Footer.jsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
  Send,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - would connect to backend API in a real implementation
    console.log("Form submitted:", formData);
    alert("Thanks for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const currentYear = new Date().getFullYear();

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  // Social links
  const socialLinks = [
    { name: 'GitHub', url: '#', icon: <Github className="h-5 w-5" /> },
    { name: 'LinkedIn', url: '#', icon: <Linkedin className="h-5 w-5" /> },
    { name: 'Twitter', url: '#', icon: <Twitter className="h-5 w-5" /> },
    { name: 'Email', url: 'mailto:info@example.com', icon: <Mail className="h-5 w-5" /> },
  ];

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="container flex justify-center">
          <div className="max-w-screen-xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Interested in working together? Feel free to reach out for collaborations or just to say hello!
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">Contact Information</h3>
                  
                  <p className="text-muted-foreground">
                    I'd love to hear from you! Whether you have a project in mind, a question about AI, 
                    or just want to connect, don't hesitate to reach out.
                  </p>
                  
                  <div className="space-y-4 mt-8">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <p>julius.matheka@example.com</p>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <p>+1 (555) 123-4567</p>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <p>San Francisco, CA</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 mt-8">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                        aria-label={link.name}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-200 py-12">
        <div className="container flex justify-center">
          <div className="max-w-screen-xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Logo and description */}
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold mb-4">Julius Matheka Charles</h3>
                <p className="text-slate-400 mb-4 max-w-md">
                  Building intelligent systems through the intersection of data science, 
                  machine learning, and software engineering.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.name}
                      variant="ghost"
                      size="icon"
                      asChild
                      className="text-slate-400 hover:text-white hover:bg-slate-800"
                    >
                      <a 
                        href={link.url} 
                        aria-label={link.name}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.icon}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Quick links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className="text-slate-400 hover:text-white transition-colors flex items-center"
                      >
                        <ArrowRight className="h-4 w-4 mr-2" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Additional section - can be customized */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Technologies</h3>
                <ul className="space-y-2">
                  <li className="text-slate-400">Machine Learning</li>
                  <li className="text-slate-400">Deep Learning</li>
                  <li className="text-slate-400">Natural Language Processing</li>
                  <li className="text-slate-400">Computer Vision</li>
                  <li className="text-slate-400">Data Engineering</li>
                </ul>
              </div>
            </div>
            
            <Separator className="my-8 bg-slate-800" />
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-sm">
                © {currentYear} Julius Matheka Charles. All rights reserved.
              </p>
              <div className="flex gap-8 text-sm">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;