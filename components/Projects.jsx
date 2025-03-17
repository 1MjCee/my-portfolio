"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300">
        <div className="h-52 overflow-hidden bg-slate-100">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/10 via-primary/20 to-primary/30 flex items-center justify-center">
              <span className="text-primary text-xl font-semibold">
                {project.title}
              </span>
            </div>
          )}
        </div>
        <CardHeader className="p-6 pb-2">
          <CardTitle className="text-xl font-bold text-gray-900">
            {project.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-2">
          <p className="text-gray-600 mb-4 line-clamp-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-xs font-medium bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex gap-3">
          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="rounded-lg border-slate-300 hover:border-primary/50 hover:bg-slate-50"
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          {project.demoUrl && (
            <Button
              variant="default"
              size="sm"
              asChild
              className="rounded-lg shadow-sm hover:shadow"
            >
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
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
      description:
        "A machine learning system that categorizes documents using advanced NLP techniques, improving document management efficiency by 78%.",
      image: null,
      githubUrl: "#",
      demoUrl: "#",
      skills: ["Python", "BERT", "FastAPI"],
      category: "nlp",
    },
    {
      id: 2,
      title: "Predictive Maintenance System",
      description:
        "An IoT-connected ML system that predicts equipment failures before they occur, reducing downtime by 42% and maintenance costs by 35%.",
      image: null, // Replace with actual image
      githubUrl: "#",
      demoUrl: "#",
      skills: ["Python", "TensorFlow", "AWS IoT"],
      category: "ml",
    },
    {
      id: 3,
      title: "Computer Vision Quality Control",
      description:
        "An automated visual inspection system that detects manufacturing defects in real-time, achieving 99.7% accuracy in identifying product flaws.",
      image: null, // Replace with actual image
      githubUrl: "#",
      demoUrl: null,
      skills: ["PyTorch", "OpenCV", "Docker"],
      category: "cv",
    },
    {
      id: 4,
      title: "Recommendation Engine",
      description:
        "A collaborative filtering recommendation system that increased e-commerce platform engagement by 27% and sales conversion by 14%.",
      image: null, // Replace with actual image
      githubUrl: "#",
      demoUrl: "#",
      skills: ["Python", "Scikit-learn", "Flask"],
      category: "ml",
    },
    {
      id: 5,
      title: "Sentiment Analysis Dashboard",
      description:
        "Real-time social media sentiment analysis dashboard for brand monitoring, helping businesses respond to customer feedback 3x faster.",
      image: null, // Replace with actual image
      githubUrl: "#",
      demoUrl: "#",
      skills: ["Python", "React", "Hugging Face", "AWS"],
      category: "nlp",
    },
    {
      id: 6,
      title: "Autonomous Inventory Robot",
      description:
        "Computer vision system for a warehouse robot that automatically tracks inventory with 98.5% accuracy, reducing manual counting labor by 85%.",
      image: null, // Replace with actual image
      githubUrl: "#",
      demoUrl: null,
      skills: ["PyTorch", "ROS", "C++", "CUDA"],
      category: "cv",
    },
  ];

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "ml", label: "Machine Learning" },
    { value: "nlp", label: "NLP" },
    { value: "cv", label: "Computer Vision" },
    { value: "se", label: "Software Engineering" },
    { value: "wb", label: "Web Development" },
    { value: "ai", label: "Artificial Intelligence" },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b w-full from-white to-slate-50"
    >
      <div className="container mx-auto max-w-screen-3xl p-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of AI and machine learning projects
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full mb-12">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-slate-100 p-1 rounded-lg">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.value}
                  value={category.value}
                  className="py-2 px-4 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent
              key={category.value}
              value={category.value}
              className="mt-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allProjects
                  .filter(
                    (project) =>
                      category.value === "all" ||
                      project.category === category.value
                  )
                  .map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index}
                    />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-16">
          <Button
            asChild
            size="lg"
            className="rounded-lg py-6 px-8 shadow-md hover:shadow-lg transition-all font-medium text-lg gap-3"
          >
            <a
              href="https://github.com/1MjCee"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Github className="h-5 w-5" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
