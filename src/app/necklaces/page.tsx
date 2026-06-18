import ProductCard from "@/components/ProductCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BadgeCheck, Heart, Ruler, Scale, Sparkles, Shield, Wrench } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { necklaceProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Buy BIS 916 Gold Necklaces in Coimbatore | Handcrafted Designs | Chandralekha Jewels",
  description: "Shop BIS 916 Hallmarked gold necklaces in Coimbatore. Discover handcrafted chokers, harams, chains, and bridal sets. Transparent pricing, 35+ years trust.",
  openGraph: {
    title: "Handcrafted BIS 916 Gold Necklaces in Coimbatore | Chandralekha Jewels",
    description: "Discover and buy exquisite BIS 916 Hallmarked gold necklaces, chokers, and harams. Chandralekha Jewels offers handcrafted designs for every occasion with transparency and trust.",
  }
};


const faqData = [
  {
    question: "What lengths are available for your gold necklaces?",
    answer: "Our standard gold necklaces are available in lengths ranging from 14 inches (choker style) to 24+ inches (longer harams and chains). We also offer customization where we can adjust the chain length or add adjustable links/dori (threads) to match your comfort and styling preferences."
  },
  {
    question: "Are these gold necklaces BIS 916 and HUID certified?",
    answer: "Absolutely. At Chandralekha Jewels, every piece of gold jewellery, including our entire collection of necklaces and harams, carries the government-approved BIS 916 Hallmark and is individually laser-marked with a unique 6-digit HUID code to verify its purity."
  },
  {
    question: "How do I choose the right necklace style for my neckline?",
    answer: "For V-necks and low-cut tops, pendant necklaces or Y-shaped chains work beautifully. For crew necks or off-shoulder outfits, choker necklaces or collar necklaces create a stunning balance. If you are styling bridal wear, layering a choker with a long Mango Mala or Kasu Haram is a traditional and regal option."
  },
  {
    question: "Do you offer customization for bridal necklaces?",
    answer: "Yes, we specialize in bespoke bridal jewellery. If you have a specific design in mind or want to customize the gemstones, weights, or layout of any necklace in our collection, you can collaborate with our master designers at our Coimbatore showroom to bring your vision to life."
  }
];

const Necklaces = () => {
  return (
    <div className="bg-background text-primary">
      <div className="container mx-auto py-12 px-4 md:px-0">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary leading-tight mb-4">
            Buy Exquisite BIS 916 Gold Necklaces in Coimbatore
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            Explore our magnificent collection of BIS 916 Hallmarked and HUID certified gold necklaces. From royal antique chokers and traditional bridal harams to elegant daily wear chains, our masterfully handcrafted designs celebrate trust, authenticity, and 35+ years of heritage. Shop online or visit our Coimbatore store.
          </p>
        </header>

        <section id="necklace-collection" className="mb-20">
          <h2 className="text-3xl font-bold text-center text-primary mb-4">Explore Our Gold Necklace Collections</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Find the perfect statement of luxury, hand-crafted with intricate attention to detail for weddings, festivities, or everyday sophistication.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {necklaceProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section id="why-choose-us" className="mb-20 bg-dark-vanilla/30 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Why Choose Chandralekha Jewels for Your Necklaces?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            <div className="flex flex-col items-center">
              <Heart className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">35+ Years of Royal Heritage</h3>
              <p className="text-muted-foreground">For over three decades, we have crafted precious memories in Coimbatore, assuring unparalleled excellence in every link.</p>
            </div>
            <div className="flex flex-col items-center">
              <Sparkles className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Artisanal Handcrafting</h3>
              <p className="text-muted-foreground">Each necklace is forged and polished by hand, capturing micro-details and textures that make every single piece unique.</p>
            </div>
            <div className="flex flex-col items-center">
              <BadgeCheck className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Certified BIS 916 & HUID Purity</h3>
              <p className="text-muted-foreground">Complete peace of mind. All ornaments carry the authentic BIS hallmark stamp and unique HUID tracking for purity guarantee.</p>
            </div>
            <div className="flex flex-col items-center">
              <Scale className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Transparent Breakdown & Value</h3>
              <p className="text-muted-foreground">We provide clear weight details, stone charges, and competitive making fees, assuring honest luxury value.</p>
            </div>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <section id="necklace-guide">
            <h2 className="text-3xl font-bold text-primary mb-6">Your Guide to Gold Necklaces</h2>
            <div className="space-y-8">
              <div>
                <h3 className="flex items-center text-xl font-semibold mb-2"><Shield className="mr-2 h-5 w-5 text-secondary"/>Necklace Materials & Finishes</h3>
                <p className="text-muted-foreground">We utilize premium 22KT gold for traditional pieces, offering a glowing golden finish that complements rubies, emeralds, and pearls. For lightweight and contemporary pendant lines, we also craft in 18KT rose and white gold for extra durability.</p>
              </div>
              <div>
                <h3 className="flex items-center text-xl font-semibold mb-2"><Ruler className="mr-2 h-5 w-5 text-secondary"/>Determining the Best Fit</h3>
                <p className="text-muted-foreground">Use a flexible tape measure around the base of your neck to estimate the ideal drop size. Chokers sit high and snug (14-16 inches), standard necklaces rest gracefully on the collarbone (18 inches), and long harams flow beautifully lower down (22-26 inches).</p>
              </div>
              <div>
                <h3 className="flex items-center text-xl font-semibold mb-2"><Wrench className="mr-2 h-5 w-5 text-secondary"/>Maintenance & Care</h3>
                <p className="text-muted-foreground">Store your necklaces flat in lined jewelry boxes to prevent knots or link kinks. Wipe them with a dry microfibre cloth after wearing. Bring your statement pieces to our Coimbatore showroom once a year for a complimentary professional check and cleaning.</p>
              </div>
            </div>
          </section>

          <section id="faq">
            <h2 className="text-3xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem value={`item-${index + 1}`} key={index}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>

        <section id="visit-us" className="text-center bg-dark-vanilla/30 p-12 rounded-lg">
          <h2 className="text-3xl font-bold text-primary mb-4">Visit Our Coimbatore Jewellery Showroom</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
            Step into our world of luxury. Meet our design consultants and experience the feel of hand-woven gold necklaces in person.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get Directions</Link>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Necklaces;
