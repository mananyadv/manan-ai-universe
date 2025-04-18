
import { motion } from "framer-motion";

const skills = {
  "AI & ML": ["Generative AI", "RAG", "NLP", "Machine Learning", "Deep Learning"],
  "Programming": ["Python", "JavaScript (React)", "Streamlit", "REST APIs"],
  "Data": ["MySQL", "PostgreSQL", "Vector Databases", "Semantic Search"],
  "Tools": ["GitHub", "Azure DevOps", "TrueFoundry", "Copilot"],
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-secondary mb-4">{category}</h3>
              <div className="space-y-2">
                {items.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-full px-4 py-2 text-sm text-primary"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
