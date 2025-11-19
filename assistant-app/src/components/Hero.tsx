import heroShoe from "@/assets/hero-shoe.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10" />
      
      {/* Animated Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-6 pt-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-block glass px-4 py-2 rounded-full text-sm">
              ✨ AI-Powered Innovation
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              Run Into
              <br />
              <span className="text-gradient">The Future</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              Experience the next generation of athletic footwear. 
              AI-designed, quantum-engineered, and built for champions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 group"
              >
                Explore Collection
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 hover:border-primary transition-colors"
              >
                Watch Innovation
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-gradient">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Athletes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient">98%</div>
                <div className="text-sm text-muted-foreground">Performance Boost</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient">24/7</div>
                <div className="text-sm text-muted-foreground">AI Support</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-20 blur-3xl animate-glow" />
            <img 
              src={heroShoe} 
              alt="Nike Future Shoe" 
              className="relative z-10 w-full animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
