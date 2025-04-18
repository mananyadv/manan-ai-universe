
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Manan Yadav</h1>
          <div className="text-xl md:text-2xl text-blue-200 mb-8 overflow-hidden whitespace-nowrap border-r-4 border-white animate-typing">
            AI & Data Science Enthusiast
          </div>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Specializing in Generative AI, Machine Learning, and RAG with a passion for building innovative solutions.
          </p>
          <a
            href="#contact"
            className="bg-accent hover:bg-accent/80 text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};
