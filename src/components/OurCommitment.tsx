
import { Button } from "./ui/button";
import Link from "next/link";

const OurCommitment = () => {
  return (
    <section className="bg-dark-vanilla/30 py-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-4">
            BIS 916 Hallmarked & HUID Certified Gold
          </h2>
          <p className="text-muted-foreground mb-6">
            Your trust is our most precious asset. That's why every piece of gold jewellery at Chandralekha Jewels is BIS 916 Hallmarked, guaranteeing its purity. We are also compliant with HUID (Hallmark Unique Identification), a government-mandated system that ensures complete transparency and traceability for every item you purchase. When you buy from us, you buy with confidence.
          </p>
          <Button asChild variant="outline">
            <Link href="/faq">Learn More About Hallmarking</Link>
          </Button>
        </div>
        <div>
          <img 
            src="https://placehold.co/500x350/F1F1F1/2C5F3E?text=BIS+916+Hallmarked" 
            alt="BIS 916 Hallmark Logo"
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
