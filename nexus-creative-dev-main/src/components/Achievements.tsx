import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Trophy, Star } from "lucide-react";

const achievements = [
  { title: "Google Skills Silver League Badge", description: "Completed courses in Responsive AI, Generative AI and Large Language Models", icon: Trophy, date: "Oct 2025" },
  { title: "HackerRank Python Bronze Badge", description: "3-star Python rating on HackerRank", icon: Star, date: "Jul 2025" },
];

const Achievements = () => (
  <SectionWrapper id="achievements" title="Achievements" subtitle="Milestones and recognitions">
    <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-3xl mx-auto">
      {achievements.map((a, i) => (
        <motion.div
          key={a.title}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="glass rounded-xl p-6 text-center flex-1 glow-card transition-shadow"
        >
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
            <a.icon size={24} />
          </div>
          <h4 className="font-semibold text-foreground mb-2">{a.title}</h4>
          <p className="text-muted-foreground text-sm mb-1">{a.description}</p>
          <span className="text-xs text-muted-foreground font-mono">{a.date}</span>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default Achievements;
