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
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social links
  const socialLinks = [
    { name: "GitHub", url: "#", icon: <Github className="h-5 w-5" /> },
    { name: "LinkedIn", url: "#", icon: <Linkedin className="h-5 w-5" /> },
    { name: "Twitter", url: "#", icon: <Twitter className="h-5 w-5" /> },
    {
      name: "Email",
      url: "mailto:info@example.com",
      icon: <Mail className="h-5 w-5" />,
    },
  ];

  // Navigation links
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="w-full bg-slate-950 text-slate-200 py-12">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Julius Matheka Charles</h3>
            <p className="text-slate-400 mb-4 max-w-md">
              Building intelligent systems through the intersection of data
              science, machine learning, and software engineering.
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
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
