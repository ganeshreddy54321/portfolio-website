import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { FileDown, FileText } from "lucide-react";

const Resume = () => (
  <SectionWrapper id="resume" title="My Resume" subtitle="Download or preview my resume">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-xl p-10 text-center max-w-lg mx-auto"
    >
      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
        <FileText size={36} />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">Puttur Ganesh Reddy</h3>
      <p className="text-muted-foreground mb-6">Full Stack Developer & Data Science Student</p>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
      >
        <FileDown size={18} /> Download Resume
      </a>
    </motion.div>
  </SectionWrapper>
);

export default Resume;
