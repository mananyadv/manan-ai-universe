
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Document Parser",
    description: "Advanced PDF parsing system using NLP techniques for extracting structured data from unstructured documents.",
    tech: ["Python", "SpaCy", "PyPDF2", "Machine Learning"],
    github: "https://github.com/yadavmanan",
    demo: "#"
  },
  {
    title: "Semantic Search Engine",
    description: "Vector database-powered search engine for efficient document retrieval using semantic similarity.",
    tech: ["Python", "Faiss", "Elasticsearch", "React"],
    github: "https://github.com/yadavmanan",
    demo: "#"
  },
  {
    title: "LangChain Agents",
    description: "Custom LLM agents for automated task execution and information processing.",
    tech: ["LangChain", "OpenAI", "Python", "FastAPI"],
    github: "https://github.com/yadavmanan",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-primary mb-8">Projects</h1>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl">
            A showcase of my technical projects in AI, machine learning, and web development.
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
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
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

export default Projects;
