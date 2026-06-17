"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Gem } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Gem className="h-6 w-6 text-secondary" />
          <span className="font-bold text-lg text-primary">Chandralekha Jewels</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/collections" className="transition-colors hover:text-secondary">Collections</Link>
          <Link href="/rings" className="transition-colors hover:text-secondary">Rings</Link>
          <Link href="/necklaces" className="transition-colors hover:text-secondary">Necklaces</Link>
          <Link href="/about" className="transition-colors hover:text-secondary">About Us</Link>
          <Link href="/contact" className="transition-colors hover:text-secondary">Contact</Link>
          <Link href="/faq" className="transition-colors hover:text-secondary">FAQ</Link>
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
