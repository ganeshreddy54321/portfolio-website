import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import profileImg from "@/assets/profile.png";

const About = () => (
  <SectionWrapper id="about" title="About Me" subtitle="Get to know me better">
    <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-border flex-shrink-0"
      >
        <img src={profileImg} alt="Ganesh Reddy" className="w-full h-full object-cover" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-4 text-muted-foreground leading-relaxed"
      >
        <p>
          Hi, I'm <span className="text-foreground font-semibold">Puttur Ganesh Reddy</span>, a passionate Computer Science student specializing in Full-Stack Development, Artificial Intelligence, and Cloud Computing.
        </p>
        <p>
          I am dedicated to building scalable and innovative applications that solve real-world problems. With a strong foundation in both frontend and backend technologies, I continuously strive to improve my skills and stay updated with modern tools and frameworks.
        </p>
        <p>
          Currently pursuing my <span className="text-foreground">B.Tech in Computer Science & Engineering</span> at Lovely Professional University with a CGPA of 7.90, I am focused on growing as a developer and contributing to impactful projects.
        </p>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default About;
