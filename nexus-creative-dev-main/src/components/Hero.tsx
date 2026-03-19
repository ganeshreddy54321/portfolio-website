import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import profileImg from "@/assets/profile.png";

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
    {/* BG grid */}
    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_40%,hsl(168_80%_50%/0.06),transparent_60%)]" />
    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_80%,hsl(260_60%_60%/0.06),transparent_60%)]" />

    <div className="container relative z-10 mx-auto px-6 pt-24 pb-12">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center lg:text-left"
        >
          <p className="text-primary font-mono text-sm mb-4">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Puttur Ganesh<br />
            <span className="gradient-text">Reddy</span>
          </h1>
          <div className="text-lg md:text-xl text-muted-foreground mb-6 h-8">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Problem Solver",
                2000,
                "AI Enthusiast",
                2000,
                "Data Science Student",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className="text-muted-foreground max-w-lg mb-8 mx-auto lg:mx-0">
            B.Tech CSE student passionate about building scalable applications, solving real-world problems, and exploring AI & cloud technologies.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
            <a href="#projects" className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
              View Projects
            </a>
            <a href="#resume" className="px-6 py-3 rounded-lg border border-border text-foreground hover:border-primary hover:text-primary transition-colors">
              Download Resume
            </a>
            <a href="#contact" className="px-6 py-3 rounded-lg border border-border text-foreground hover:border-primary hover:text-primary transition-colors">
              Contact Me
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-4 justify-center lg:justify-start">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/puttur-ganesh-reddy75699/" },
              { icon: Github, href: "https://github.com/ganeshreddy54321" },
              { icon: Mail, href: "mailto:putturganeshreddy@gmail.com" },
              { icon: Phone, href: "tel:+917569986299" },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30 glow-primary">
            <img src={profileImg} alt="Puttur Ganesh Reddy" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -inset-4 rounded-full border border-primary/10 animate-float pointer-events-none" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="flex justify-center mt-12"
      >
        <a href="#about" className="animate-bounce text-muted-foreground">
          <ArrowDown size={20} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default Hero;
