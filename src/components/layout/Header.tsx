
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gem } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Gem className="h-6 w-6 text-secondary" />
          <span className="font-bold text-lg text-primary">Chandralekha Jewels</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link to="/collections" className="transition-colors hover:text-secondary">Collections</Link>
          <Link to="/rings" className="transition-colors hover:text-secondary">Rings</Link>
          <Link to="/necklaces" className="transition-colors hover:text-secondary">Necklaces</Link>
          <Link to="/about" className="transition-colors hover:text-secondary">About Us</Link>
          <Link to="/contact" className="transition-colors hover:text-secondary">Contact</Link>
          <Link to="/faq" className="transition-colors hover:text-secondary">FAQ</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button variant="secondary" size="sm">Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

