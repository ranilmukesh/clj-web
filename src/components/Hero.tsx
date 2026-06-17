
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-dark-vanilla/30">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-20">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary leading-tight">
            Discover Exquisite Gold Jewels in Coimbatore at Chandralekha Jewels
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Looking to buy exquisite gold jewels in Coimbatore? Discover Chandralekha Jewels, your trusted destination for BIS 916 Hallmarked and HUID certified gold jewellery. Explore our exclusive handcrafted collections, from traditional bridal sets to modern lightweight designs, all crafted with timeless elegance and transparent pricing.
          </p>
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <Button asChild size="lg">
              <Link to="/collections">Shop Collections</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
        <div>
          <img 
            src="https://placehold.co/600x400/CBA95D/2C5F3E?text=Chandralekha+Jewels" 
            alt="A collection of exquisite gold jewellery from Chandralekha Jewels in Coimbatore" 
            className="rounded-lg shadow-xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
