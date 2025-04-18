
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const experiences = [
  {
    company: "Siemens Healthineers",
    role: "Technical Intern",
    period: "Feb 2025 – Present",
    location: "Bangalore, India",
    details: [
      "Built and optimized RAG pipelines using LangChain and OpenAI APIs",
      "Developed web apps with Streamlit for RAG implementation",
      "Integrated PostgreSQL for backend data handling",
      "Implemented WebSocket communication for real-time responsiveness",
    ],
  },
  {
    company: "thebrik.ai",
    role: "Chief Operating Officer",
    period: "Jan 2024 – Present",
    location: "Remote",
    details: [
      "Scaled AI-powered platform, increasing user adoption by 50%",
      "Led high-profile meetings with investors and C-level executives",
      "Managed full operations from domain setup to team building",
      "Led cross-functional teams across tech, product, sales, and marketing",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">Experience</h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary">{exp.company}</h3>
                  <p className="text-lg text-secondary font-semibold">{exp.role}</p>
                </div>
                <div className="text-right">
                  <p className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </p>
                  <p className="text-gray-600">{exp.location}</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {exp.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
