"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto flex h-32 items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/clj-logo-removed-bg.png" alt="Chandralekha Jewels Logo" className="h-[210px] w-[210px] object-contain translate-y-3" />
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
