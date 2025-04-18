
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "RAG Implementation",
    description: "Built advanced RAG pipelines using LangChain and OpenAI APIs for enhanced information retrieval.",
    company: "Siemens Healthineers",
    tech: ["LangChain", "OpenAI", "Python", "PostgreSQL"]
  },
  {
    title: "AI Platform Scaling",
    description: "Led the scaling of an AI-powered real estate platform, resulting in 50% increase in user adoption.",
    company: "thebrik.ai",
    tech: ["React", "Python", "Machine Learning", "AWS"]
  },
  {
    title: "Student Management System",
    description: "Developed comprehensive system for managing 700+ student records and academic administration.",
    company: "VIT Chennai",
    tech: ["JavaScript", "MySQL", "Node.js", "Express"]
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-primary mb-8">Portfolio</h1>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl">
            Explore my journey through various projects and experiences in AI, machine learning, and software development.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                      <ExternalLink className="h-5 w-5 text-gray-400" />
                    </CardTitle>
                    <CardDescription>{project.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
