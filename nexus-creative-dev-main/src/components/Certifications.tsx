import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Award, ExternalLink, Briefcase } from "lucide-react";

const certs = [
  { title: "OCI Data Science Professional", org: "Oracle", date: "Oct 2025" },
  { title: "OCI DevOps Professional", org: "Oracle", date: "Oct 2025" },
  { title: "Software Engineering Virtual Experience", org: "Electronic Arts / Forage", date: "Sep 2025" },
  { title: "Responsive Web Design", org: "FreeCodeCamp", date: "Nov 2023" },
];

const trainings = [
  {
    title: "Data Visualisation Virtual Experience",
    org: "Tata Group / Forage",
    date: "September 2025",
    description:
      "Completed a virtual internship focused on data visualization and business decision-making. Analyzed datasets for a business expansion scenario, identified KPIs, framed strategic questions for executive stakeholders, and translated raw data into actionable insights.",
    responsibilities: [
      "Analyzed business data using Excel and Power BI",
      "Designed dashboards to support executive-level decision-making",
      "Identified trends, patterns, and performance gaps",
      "Developed problem-solving and analytical thinking skills",
      "Gained experience in presenting data-driven recommendations",
    ],
    skills: ["Data Visualization", "Business Analysis", "KPI Design", "Excel", "Power BI", "Decision-Making"],
    certLink: "https://drive.google.com/file/d/1-pKVay0YTXyWmYJmVX4qWxubo8dai4N2/view",
  },
  {
    title: "AWS Solutions Architecture Virtual Experience",
    org: "AWS / Forage",
    date: "September 2025",
    description:
      "Completed a cloud architecture training program focused on designing scalable, reliable, and cost-efficient systems using AWS services. Worked on creating a cloud-based solution including deployment strategies and cost optimization.",
    responsibilities: [
      "Designed scalable architectures using AWS services",
      "Learned concepts of high availability and fault tolerance",
      "Explored cloud deployment strategies and infrastructure planning",
      "Understood cost optimization techniques in cloud environments",
      "Created a technical proposal outlining system design and benefits",
    ],
    skills: ["Cloud Computing", "AWS Architecture", "System Design", "Scalability", "Cost Optimization"],
    certLink: "https://drive.google.com/file/d/1Q92cqc8cRVx1-4u_B0M1wMbOPZGbKx7g/view",
  },
];

const Certifications = () => (
  <SectionWrapper id="certifications" title="Certifications" subtitle="Professional credentials and training">
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Certifications */}
      <div className="grid sm:grid-cols-2 gap-4">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-5 flex gap-4 items-start glow-card transition-shadow"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
              <Award size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-foreground text-sm">{c.title}</h4>
              <p className="text-muted-foreground text-xs">{c.org} · {c.date}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Training & Virtual Experience */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-6">Training & Virtual Experience</h3>
        <div className="space-y-6">
          {trainings.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass rounded-xl p-6 glow-card transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                  <Briefcase size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <h4 className="font-semibold text-foreground">{t.title}</h4>
                      <p className="text-muted-foreground text-sm">{t.org} · {t.date}</p>
                    </div>
                    <a
                      href={t.certLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline font-medium"
                    >
                      View Certificate <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t.description}</p>

              <div className="mb-4">
                <h5 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Key Responsibilities</h5>
                <ul className="space-y-1">
                  {t.responsibilities.map((r) => (
                    <li key={r} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {t.skills.map((s) => (
                  <span key={s} className="px-2 py-1 rounded bg-secondary text-xs font-mono text-secondary-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default Certifications;
