
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the mailto URL with form data
    const mailtoUrl = `mailto:yadav.manan@outlook.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Message from: ${name}\nEmail: ${email}\n\n${message}`)}`;
    
    // Open the user's default email client
    window.location.href = mailtoUrl;
    
    // Show success message
    toast({
      title: "Email client opened",
      description: "Please send the email from your email client to complete the message.",
    });

    // Reset form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6" />
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:yadav.manan@outlook.com" className="hover:text-accent">
                  yadav.manan@outlook.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6" />
              <div>
                <p className="font-medium">Phone</p>
                <a href="tel:+919625020380" className="hover:text-accent">
                  +91-9625020380
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6" />
              <div>
                <p className="font-medium">Location</p>
                <p>Gurugram Tehsil, Haryana, India</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Linkedin className="w-6 h-6" />
              <div>
                <p className="font-medium">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/yadavmanan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  linkedin.com/in/yadavmanan
                </a>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-accent"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-accent"
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-accent"
            ></textarea>
            <button 
              type="submit"
              className="w-full bg-accent hover:bg-accent/80 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
