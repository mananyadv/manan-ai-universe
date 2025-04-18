
import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Full blog post content
const blogPostsData = [
  {
    title: "The Future of Generative AI in Healthcare",
    date: "April 15, 2025",
    excerpt: "Exploring how generative AI is revolutionizing healthcare diagnostics and patient care...",
    fullContent: "Generative AI is making significant strides in the healthcare sector, particularly in diagnostics and patient care. Machine learning models can now analyze complex medical images with accuracy rivaling human experts. These AI systems can detect early signs of diseases like cancer, diabetic retinopathy, and cardiovascular conditions from x-rays, MRIs, and other medical scans.\n\nBeyond diagnostics, AI is being used to personalize treatment plans by analyzing patient data and predicting how individuals might respond to various therapies. This approach not only improves patient outcomes but also reduces the trial-and-error approach often used in treatment selection.\n\nMedical research is another area benefiting from generative AI. These systems can analyze vast amounts of research papers, clinical trial data, and other medical literature to identify patterns and potential treatment options that human researchers might miss. The technology is also being used to design new drugs and predict how they might interact with human systems.\n\nAs we look to the future, generative AI will likely become a standard tool in healthcare, augmenting human expertise rather than replacing it. The focus will be on developing systems that are transparent, explainable, and designed with ethical considerations at their core.",
    category: "AI & Healthcare"
  },
  {
    title: "Building Efficient RAG Systems",
    date: "April 10, 2025",
    excerpt: "A deep dive into creating and optimizing Retrieval-Augmented Generation systems...",
    fullContent: "Retrieval-Augmented Generation (RAG) systems represent a significant advancement in natural language processing by combining the strengths of information retrieval and text generation. These systems address a key limitation of traditional language models—their inability to access external knowledge not included in their training data.\n\nEfficient RAG systems begin with a robust retrieval component. This involves creating a well-indexed knowledge base that can quickly retrieve relevant information based on user queries. Vector databases like Pinecone, Faiss, or Milvus are commonly used for this purpose due to their ability to perform efficient similarity searches at scale.\n\nThe generation component then takes this retrieved information and integrates it with the language model's inherent capabilities to produce coherent, contextually appropriate responses. The quality of the generated output depends significantly on the prompting strategy used to instruct the model on how to incorporate the retrieved information.\n\nOptimizing RAG systems involves several considerations. First, relevance ranking is critical—ensuring that the most contextually appropriate documents are retrieved and prioritized. Second, managing retrieval costs is important, especially at scale. Third, handling temporal aspects is essential, particularly for applications where the recency of information matters.\n\nTo measure RAG system performance, metrics such as retrieval precision, generation quality, system latency, and domain-specific performance indicators should be tracked. Continuous improvement typically involves regular updates to the knowledge base, refinement of retrieval algorithms, and tuning of generation parameters based on user feedback and performance metrics.",
    category: "Technical"
  },
  {
    title: "From Student to COO: My Journey",
    date: "April 5, 2025",
    excerpt: "Sharing my experience transitioning from a student to leading operations at an AI startup...",
    fullContent: "My journey from student to Chief Operating Officer at an AI startup has been both challenging and rewarding. As a student studying Cyber Physical Systems, I was fascinated by the intersection of technology and business—a passion that would later shape my career path.\n\nMy entry into the professional world began with roles in student representation and placement coordination at my university. These positions taught me valuable lessons in leadership, communication, and stakeholder management—skills that would prove essential in my future roles.\n\nThe transition to the startup world came through an opportunity at thebrik.ai, a company leveraging AI in the real estate sector. Initially joining in a technical capacity, I quickly demonstrated abilities beyond coding—identifying operational inefficiencies, improving processes, and contributing to business strategy.\n\nAs the company grew, so did my responsibilities. Taking on the role of COO presented new challenges: scaling operations, building teams, managing investor relations, and ensuring our technology delivered real value to customers. One of our major achievements was increasing user adoption by 50% through strategic product enhancements and targeted marketing initiatives.\n\nParallel to my work at the startup, I pursued internships and projects that expanded my knowledge of AI technologies. Working with tools like LangChain, OpenAI APIs, and vector databases provided me with technical insights that informed my business decisions.\n\nLooking back, the journey from student to COO wasn't linear or predictable. It required adaptability, continuous learning, and a willingness to step outside my comfort zone. For students aspiring to similar roles, my advice is to cultivate both technical and business acumen, seek diverse experiences, and be prepared to grow with your organization.",
    category: "Career"
  }
];

const Blog = () => {
  // State to track which posts are expanded
  const [expandedPosts, setExpandedPosts] = useState<number[]>([]);

  // Toggle post expansion
  const toggleReadMore = (index: number) => {
    setExpandedPosts(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

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
            {blogPostsData.map((post, index) => (
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
                    <p className="text-gray-600">
                      {expandedPosts.includes(index) ? post.fullContent : post.excerpt}
                    </p>
                    <button 
                      className="mt-4 text-primary hover:text-primary/80 font-medium"
                      onClick={() => toggleReadMore(index)}
                    >
                      {expandedPosts.includes(index) ? "Show less ↑" : "Read more →"}
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
