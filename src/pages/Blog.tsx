
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [
  {
    title: "The Future of Generative AI in Healthcare",
    date: "April 15, 2025",
    excerpt: "Exploring how generative AI is revolutionizing healthcare diagnostics and patient care...",
    category: "AI & Healthcare"
  },
  {
    title: "Building Efficient RAG Systems",
    date: "April 10, 2025",
    excerpt: "A deep dive into creating and optimizing Retrieval-Augmented Generation systems...",
    category: "Technical"
  },
  {
    title: "From Student to COO: My Journey",
    date: "April 5, 2025",
    excerpt: "Sharing my experience transitioning from a student to leading operations at an AI startup...",
    category: "Career"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-primary mb-8">Blog</h1>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl">
            Thoughts and insights on AI, technology, and career development in the tech industry.
          </p>

          <div className="grid gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                        <CardDescription>{post.date}</CardDescription>
                      </div>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {post.category}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{post.excerpt}</p>
                    <button className="mt-4 text-primary hover:text-primary/80 font-medium">
                      Read more →
                    </button>
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

export default Blog;
