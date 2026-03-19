import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/puttur-ganesh-reddy75699/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/ganeshreddy54321", label: "GitHub" },
  { icon: Mail, href: "mailto:putturganeshreddy@gmail.com", label: "putturganeshreddy@gmail.com" },
  { icon: Phone, href: "tel:+917569986299", label: "+91-7569986299" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill out all fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      // 📝 Replace these with your actual EmailJS credentials
      const SERVICE_ID = "service_wsberda";
      const PUBLIC_KEY = "LqVD4TZPjJ81t_UCk";

      const TEMPLATE_ID = "template_60wq2em"; 

      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        to_name: "Ganesh Reddy", 
        reply_to: form.email,
      };

      // Send the email (EmailJS handles the auto-reply internally via the same template)
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact" title="Get In Touch" subtitle="Feel free to reach out">
      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass rounded-xl p-6 space-y-4"
        >
          <input
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-secondary rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-secondary rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary"
            required
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-secondary rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary resize-none"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <Send size={16} className={isSubmitting ? "animate-pulse" : ""} /> 
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </motion.form>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl p-4 flex items-center gap-4 hover:border-primary/50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon size={18} />
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
