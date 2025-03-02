"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-primary/90 via-primary/95 to-primary-foreground/90 text-white py-16 lg:py-0">
      <div className="container mx-auto max-w-screen-xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 md:order-1 space-y-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Julius Matheka Charles
            </h1>

            <h2 className="text-2xl md:text-3xl font-medium text-slate-100">
              AI Engineer | Data Scientist | ML Engineer
            </h2>

            <p className="text-lg md:text-xl max-w-xl text-slate-200 leading-relaxed">
              Building intelligent systems that solve real-world problems
              through the intersection of data science, machine learning, and
              software engineering.
            </p>

            <div className="flex flex-wrap gap-5 pt-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="font-medium text-lg px-7 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="#projects" className="flex items-center">
                  View My Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                className="font-medium text-lg px-7 py-6 rounded-lg bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary transition-all"
              >
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-6 pt-6"
            >
              <Link
                href="https://github.com/1MjCee"
                className="text-white/70 hover:text-white transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="h-7 w-7" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/julius-charles-24b91b89/"
                className="text-white/70 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-7 w-7" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 md:order-2 flex justify-center md:justify-end relative"
          >
            <div className="relative">
              <motion.div
                className="w-72 h-72 md:w-96 md:h-96 bg-white/15 backdrop-blur-sm rounded-full overflow-hidden border-4 border-white/40 flex items-center justify-center shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Profile Image */}
                <img
                  src="/profile.jpg"
                  alt="Julius Matheka Charles"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-5 -left-5 w-full h-full rounded-full border-4 border-white/10 -z-10"></div>
              <div className="absolute -bottom-5 -right-5 w-full h-full rounded-full border-4 border-white/20 -z-10"></div>

              {/* Floating decorative circles */}
              <motion.div
                className="absolute -top-8 right-12 w-16 h-16 bg-primary-foreground/30 rounded-full"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <motion.div
                className="absolute bottom-4 -left-8 w-12 h-12 bg-primary/40 rounded-full"
                animate={{ y: [0, 15, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3.5,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
