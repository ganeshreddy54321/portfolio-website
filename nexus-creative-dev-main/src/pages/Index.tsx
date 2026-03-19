import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <ScrollProgress />
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Certifications />
    <Achievements />
    <Resume />
    <Contact />
    <Footer />
  </div>
);

export default Index;
