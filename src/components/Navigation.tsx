import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">NIKE</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#new" className="text-foreground hover:text-primary transition-colors">
              New & Featured
            </a>
            <a href="#men" className="text-foreground hover:text-primary transition-colors">
              Men
            </a>
            <a href="#women" className="text-foreground hover:text-primary transition-colors">
              Women
            </a>
            <a href="#kids" className="text-foreground hover:text-primary transition-colors">
              Kids
            </a>
            <Button variant="default" className="bg-gradient-to-r from-primary to-accent hover:shadow-glow">
              Shop Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4">
            <a href="#new" className="text-foreground hover:text-primary transition-colors">
              New & Featured
            </a>
            <a href="#men" className="text-foreground hover:text-primary transition-colors">
              Men
            </a>
            <a href="#women" className="text-foreground hover:text-primary transition-colors">
              Women
            </a>
            <a href="#kids" className="text-foreground hover:text-primary transition-colors">
              Kids
            </a>
            <Button variant="default" className="w-full bg-gradient-to-r from-primary to-accent">
              Shop Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
