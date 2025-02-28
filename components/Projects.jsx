"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="h-full overflow-hidden">
        <div className="h-48 overflow-hidden bg-slate-200">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center">
              <span className="text-primary text-lg font-semibold">{project.title}</span>
            </div>
          )}
        </div>
        <CardHeader className="p-6 pb-2">
          <CardTitle className="text-xl">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-2">
          <p className="text-muted-foreground mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.skills.map((skill) => (
              <Badge key={skill} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex gap-2">
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          {project.demoUrl && (
            <Button variant="default" size="sm" asChild>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  // Sample projects data
  const allProjects = [
    {
      id: 1,
      title: "NLP Document Classifier",
      description: "A machine learning system that categorizes documents using advanced NLP techniques, improving document management efficiency by 78%.",
      image: null, // Replace with actual image
      githubUrl: "#",
      demoUrl: "#",
      skills: ["Python", "BERT", "FastAPI"],
      category: "nlp"
    },
    {
      id: 2,
      title: "Predictive Maintenance System",
      description: "An IoT-connected ML system that predicts equipment failures before they occur, reducing downtime by 42% and maintenance costs by 35%.",
      image: null, // Replace with actual image
      githubUrl: "#",
      demoUrl: "#",
      skills: ["Python", "TensorFlow", "AWS IoT"],
      category: "ml"
    },
    {
      id: 3,
      title: "Computer Vision Quality Control",
      description: "An automated visual inspection system that detects manufacturing defects in real-time, achieving 99.7% accuracy in identifying product flaws.",
      image: null, // Replace with actual image
      githubUrl: "#",
      demoUrl: null,
      skills: ["PyTorch", "OpenCV", "Docker"],
      category: "cv"
    },
    {
      id: 4,
      title: "Recommendation Engine",
      description: "A collaborative filtering recommendation system that increased e-commerce platform engagement by 27% and sales conversion by 14%.",
      image: null, // Replace with actual image
      githubUrl: "#",
      demoUrl: "#",
      skills: ["Python", "Scikit-learn", "Flask"],
      category: "ml"
    },
    {
      id: 5,
      title: "Sentiment Analysis Dashboard",
      description: "Real-time social media sentiment analysis dashboard for brand monitoring, helping businesses respond to customer feedback 3x faster.",
      image: null, // Replace with actual image
      githubUrl: "#",
      demoUrl: "#",
      skills: ["Python", "React", "Hugging Face", "AWS"],
      category: "nlp"
    },
    {
      id: 6,
      title: "Autonomous Inventory Robot",
      description: "Computer vision system for a warehouse robot that automatically tracks inventory with 98.5% accuracy, reducing manual counting labor by 85%.",
      image: null, // Replace with actual image
      githubUrl: "#",
      demoUrl: null,
      skills: ["PyTorch", "ROS", "C++", "CUDA"],
      category: "cv"
    },
  ];

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "ml", label: "Machine Learning" },
    { value: "nlp", label: "NLP" },
    { value: "cv", label: "Computer Vision" },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of AI and machine learning projects
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full mb-8">
          <div className="flex justify-center">
            <TabsList>
              {categories.map((category) => (
                <TabsTrigger key={category.value} value={category.value}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category.value} value={category.value} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allProjects
                  .filter((project) => category.value === "all" || project.category === category.value)
                  .map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <Button asChild>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;