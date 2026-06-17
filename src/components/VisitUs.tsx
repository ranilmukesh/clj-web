
import { Button } from "./ui/button";
import Link from "next/link";
import { MapPin } from "lucide-react";

const VisitUs = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Visit Our Gold Jewellery Showroom in Coimbatore
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/80">
          Experience the artistry and elegance of Chandralekha Jewels in person. Our experts are here to guide you through our collections and help you find the perfect piece.
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/contact">
            <MapPin className="mr-2 h-5 w-5" />
            Get Directions & Contact Info
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default VisitUs;
