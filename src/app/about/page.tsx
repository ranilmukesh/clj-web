
import Link from "next/link";

const About = () => {
  return (
    <div className="bg-dark-vanilla/30">
      <div className="container mx-auto py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            A 35-Year Heritage of Crafting Exquisite Heirlooms in Coimbatore
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Discover the legacy, craftsmanship, and trust that define Chandralekha Jewels. We aren't just a jewellery store; we are a Coimbatore tradition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <img 
            src="https://placehold.co/500x350/F1F1F1/2C5F3E?text=Our+Workshop" 
            alt="The Chandralekha Jewels workshop in Coimbatore where master artisans craft handmade jewellery."
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Our Legacy: A Family Tradition</h2>
            <p className="text-muted-foreground mb-4">
              For over 35 years, Chandralekha Jewels has been a cornerstone of artistry and trust in Coimbatore. We are not just jewelers; we are custodians of a rich heritage, blending age-old techniques with timeless elegance. Our journey is built on a passion for creating not just ornaments, but legacies that are passed down through generations.
            </p>
            <p className="text-muted-foreground">
              Every piece that leaves our showroom is a testament to our family's commitment to quality and our deep roots within the Coimbatore community.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">A World Record in Craftsmanship</h2>
            <p className="text-muted-foreground mb-4">
              Our dedication to precision and the art of the miniature earned us a prestigious place in the Guinness World Records for creating the world's smallest golden chair. This remarkable achievement is a testament to the unparalleled skill, patience, and dedication that our master artisans pour into every single creation, from grand bridal sets to the most intricate custom designs.
            </p>
            <p className="text-muted-foreground">
              This commitment to excellence is what allows us to offer superior quality and making charges compared to machine-made alternatives.
            </p>
          </div>
          <img 
            src="https://placehold.co/500x350/CBA95D/2C5F3E?text=Guinness+Record" 
            alt="Illustration representing the Guinness World Record for the smallest golden chair held by Chandralekha Jewels."
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="text-center mt-20">
           <h2 className="text-3xl font-bold text-primary mb-4">The Chandralekha Promise</h2>
           <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
            In an era of mass production, we stand by the art of the handmade. We guarantee 100% BIS 916 hallmarked purity in every jewel and offer it at wholesale pricing, providing you with unmatched value and complete transparency.
           </p>
           <div className="flex gap-4 justify-center">
             <Link href="/collections" className="text-primary hover:underline">Explore Our Collections</Link>
             <span className="text-muted-foreground">|</span>
             <Link href="/contact" className="text-primary hover:underline">Contact Us for a Custom Design</Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;

