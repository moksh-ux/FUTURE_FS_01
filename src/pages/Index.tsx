import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Certifications } from "@/components/Certifications";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Certifications />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
