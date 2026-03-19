import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { ExternalLink, Github } from "lucide-react";
import swiftcartImg from "@/assets/swiftcart.png";
import whisperdiaryImg from "@/assets/whisperdiary.png";

const projects = [
  {
    title: "SwiftCart",
    subtitle: "E-Commerce Web Application",
    duration: "Feb 2026 – Present",
    description:
      "Developed a full-stack e-commerce web application that allows users to browse products, search items dynamically, manage cart functionality, and perform secure authentication with a responsive UI and scalable backend.",
    features: [
      "Dynamic product search with real-time filtering",
      "Add to cart and quantity management system",
      "OTP-based authentication system",
      "Geolocation-based user location detection using OpenStreetMap",
      "REST API for product data handling",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/ganeshreddy54321/pep_swiftcart",
    image: swiftcartImg,
  },
  {
    title: "Whisper Diary",
    subtitle: "Voice Lock Android Application",
    duration: "July 2025 – Present",
    description:
      "Developed a secure Android diary application that uses voice authentication to protect personal entries. The app provides a smooth user experience with categorized notes and modern UI features.",
    features: [
      "Voice-based authentication system",
      "Secure storage using SharedPreferences",
      "Categorized diary entries (Personal, Creative, etc.)",
      "Dark and light mode support",
      "Undo delete functionality",
    ],
    tech: ["Kotlin", "XML", "Android Studio", "Firebase"],
    github: "https://github.com/ganeshreddy54321/whisper_diary",
    image: whisperdiaryImg,
  },
];

const Projects = () => (
  <SectionWrapper id="projects" title="My Projects" subtitle="Things I've built">
    <div className="max-w-5xl mx-auto space-y-8">
      {projects.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="glass rounded-xl overflow-hidden group glow-card transition-shadow duration-300"
        >
          <div className="grid md:grid-cols-2">
            <div className="relative overflow-hidden bg-secondary/30 min-h-[16rem] md:min-h-0">
              <img
                src={p.image}
                alt={`${p.title} screenshot`}
                className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col">
              <div className="mb-1 flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-xl font-bold text-foreground">{p.title}</h3>
                <span className="text-xs text-muted-foreground font-mono">{p.duration}</span>
              </div>
              <p className="text-primary text-sm font-mono mb-3">{p.subtitle}</p>
              <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{p.description}</p>

              <div className="mb-3">
                <h5 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">Key Features</h5>
                <ul className="space-y-1">
                  {p.features.map((f) => (
                    <li key={f} className="text-muted-foreground text-xs flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-secondary text-xs font-mono text-secondary-foreground">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline mt-auto"
              >
                <Github size={16} /> View Code <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default Projects;
