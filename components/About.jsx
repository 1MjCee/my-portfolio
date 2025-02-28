"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  BrainCircuit, 
  Code, 
  Database, 
  Server, 
  Terminal 
} from "lucide-react";

const About = () => {
  // Skills data organized by category
  const skills = {
    languages: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'R', 'Java'],
    frameworks: ['TensorFlow', 'PyTorch', 'React', 'Next.js', 'FastAPI', 'Django'],
    tools: ['Docker', 'Git', 'AWS', 'GCP', 'Kubernetes', 'MLflow'],
    databases: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
    areas: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Data Engineering']
  };

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            AI engineer with expertise across data science, machine learning, and software development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1"
          >
            <div className="sticky top-24">
              <Avatar className="w-48 h-48 mx-auto mb-6">
                <AvatarImage src="/placeholder-avatar.jpg" alt="Julius Matheka" />
                <AvatarFallback className="text-4xl bg-primary text-white">JM</AvatarFallback>
              </Avatar>
              
              <h3 className="text-xl font-bold text-center mb-2">Julius Matheka Charles</h3>
              <p className="text-center text-muted-foreground mb-6">Based in Nairobi, Kenya</p>
              
              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="rounded-full"
                >
                  <a href="#contact">Contact Me</a>
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  asChild
                  className="rounded-full"
                >
                  <a href="/resume.pdf" target="_blank">Resume</a>
                </Button>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-2"
          >
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Background</h3>
                  <p className="mb-4">
                    I'm an AI Engineer with expertise across the full spectrum of intelligent systems development. 
                    With a strong foundation in software engineering, I specialize in building end-to-end AI solutions 
                    that combine robust data pipelines, advanced machine learning models, and scalable software architecture.
                  </p>
                  <p>
                    My work focuses on creating practical AI applications that deliver real business value, 
                    with particular expertise in natural language processing, computer vision, and predictive analytics.
                    I'm passionate about developing systems that not only leverage cutting-edge AI techniques but are also 
                    production-ready and maintainable.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Skills & Expertise</h3>
                  
                  <Tabs defaultValue="languages" className="w-full">
                    <TabsList className="w-full mb-6 grid grid-cols-3 md:grid-cols-5">
                      <TabsTrigger value="languages" className="flex items-center gap-2">
                        <Terminal className="h-4 w-4" />
                        <span className="hidden md:inline">Languages</span>
                      </TabsTrigger>
                      <TabsTrigger value="frameworks" className="flex items-center gap-2">
                        <Code className="h-4 w-4" />
                        <span className="hidden md:inline">Frameworks</span>
                      </TabsTrigger>
                      <TabsTrigger value="tools" className="flex items-center gap-2">
                        <Server className="h-4 w-4" />
                        <span className="hidden md:inline">Tools</span>
                      </TabsTrigger>
                      <TabsTrigger value="databases" className="flex items-center gap-2">
                        <Database className="h-4 w-4" />
                        <span className="hidden md:inline">Databases</span>
                      </TabsTrigger>
                      <TabsTrigger value="areas" className="flex items-center gap-2">
                        <BrainCircuit className="h-4 w-4" />
                        <span className="hidden md:inline">AI/ML</span>
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="languages" className="mt-0">
                      <div className="flex flex-wrap gap-2">
                        {skills.languages.map(skill => (
                          <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="frameworks" className="mt-0">
                      <div className="flex flex-wrap gap-2">
                        {skills.frameworks.map(skill => (
                          <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="tools" className="mt-0">
                      <div className="flex flex-wrap gap-2">
                        {skills.tools.map(skill => (
                          <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="databases" className="mt-0">
                      <div className="flex flex-wrap gap-2">
                        {skills.databases.map(skill => (
                          <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="areas" className="mt-0">
                      <div className="flex flex-wrap gap-2">
                        {skills.areas.map(skill => (
                          <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;