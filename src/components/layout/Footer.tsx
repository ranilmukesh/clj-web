
import { Link } from "react-router-dom";
import { Gem } from "lucide-react";
import React from "react";
import { popularSearches } from "./footerData";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Gem className="h-6 w-6 text-secondary" />
              <span className="font-bold text-lg text-primary">Chandralekha Jewels</span>
            </Link>
            <p className="text-muted-foreground text-sm">Exquisite gold jewelry, crafted with passion in Coimbatore since 1989. Your trusted destination to buy BIS 916 Hallmarked gold jewels.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/collections" className="text-muted-foreground hover:text-secondary">Collections</Link></li>
              <li><Link to="/rings" className="text-muted-foreground hover:text-secondary">Rings</Link></li>
              <li><Link to="/necklaces" className="text-muted-foreground hover:text-secondary">Necklaces</Link></li>
              <li><Link to="/earrings" className="text-muted-foreground hover:text-secondary">Earrings</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-secondary">Our Story</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-secondary">Contact Us</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-secondary">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Policies</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-secondary">Privacy Policy</Link></li>
              <li><Link to="/shipping-exchange" className="text-muted-foreground hover:text-secondary">Shipping & Exchange</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <h2 className="text-xl font-semibold mb-6 text-primary">Popular Searches</h2>
          <div className="space-y-6">
            {popularSearches.map((section) => (
              <div key={section.category}>
                <h3 className="font-semibold text-secondary mb-3 text-base">{section.category}</h3>
                <div className="flex flex-wrap items-center text-sm text-muted-foreground">
                  {section.keywords.map((keyword, index) => (
                    <React.Fragment key={keyword}>
                      <Link to="#" className="hover:text-secondary hover:underline py-1">
                        {keyword}
                      </Link>
                      {index < section.keywords.length - 1 && (
                        <span className="mx-2 text-gray-300">|</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Chandralekha Jewels. All Rights Reserved.</span>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-secondary">Facebook</a>
            <a href="#" className="text-muted-foreground hover:text-secondary">Instagram</a>
            <a href="#" className="text-muted-foreground hover:text-secondary">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
