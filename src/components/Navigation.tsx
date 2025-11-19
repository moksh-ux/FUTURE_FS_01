import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-gradient">
            NIKE
          </Link>
          
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
            <Link to="/cart">
              <Button variant="outline" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-primary to-accent text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
            <Button variant="default" className="bg-gradient-to-r from-primary to-accent hover:shadow-glow">
              Shop Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <Link to="/cart">
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-primary to-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
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
