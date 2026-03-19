import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Code2, Globe, Wrench, Users } from "lucide-react";

const categories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["C++", "Java", "Python", "SQL", "C", "JavaScript", "Kotlin"],
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "MongoDB", "XML"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "Firebase", "MySQL", "VS Code", "Android Studio", "Excel", "Power BI", "AutoCAD"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Problem Solving", "Team Player", "Adaptability"],
  },
];

const Skills = () => (
  <SectionWrapper id="skills" title="My Skills" subtitle="Technologies and tools I work with">
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="glass rounded-xl p-6 glow-card transition-shadow duration-300"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <cat.icon size={20} />
            </div>
            <h3 className="font-semibold text-foreground">{cat.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-mono"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default Skills;
