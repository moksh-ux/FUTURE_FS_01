import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in">
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 bg-secondary/50 backdrop-blur-sm rounded-full text-primary text-sm font-medium border border-primary/20">
            Full Stack Developer & Cybersecurity Enthusiast
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
          MOKSH TYAGI
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Motivated B.Tech CSE student passionate about building secure, efficient, and user-focused digital solutions. 
          Currently mastering full-stack development while exploring cybersecurity and risk management.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30">
            View Projects
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
          <Button size="lg" variant="outline" className="border-primary/30 hover:border-primary hover:bg-primary/10">
            Download Resume
          </Button>
        </div>
        
        <div className="flex gap-4 justify-center">
          <a href="https://linkedin.com/in/moksh-tyagi" target="_blank" rel="noopener noreferrer" 
             className="p-3 bg-secondary/50 backdrop-blur-sm rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110 border border-border">
            <Linkedin className="w-5 h-5 text-primary" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
             className="p-3 bg-secondary/50 backdrop-blur-sm rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110 border border-border">
            <Github className="w-5 h-5 text-primary" />
          </a>
          <a href="mailto:mokshtyagi412@gmail.com"
             className="p-3 bg-secondary/50 backdrop-blur-sm rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110 border border-border">
            <Mail className="w-5 h-5 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};
