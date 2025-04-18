
import { Hero } from "../components/Hero";
import { Experience } from "../components/Experience";
import { Skills } from "../components/Skills";
import { Contact } from "../components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
