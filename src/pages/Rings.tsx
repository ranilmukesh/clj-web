
import { useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BadgeCheck, Heart, Ruler, Scale, Sparkles, Shield, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ringProducts = [
    { id: 101, name: "22KT Traditional Gold Band Ring", price: "₹45,000", image: "https://placehold.co/400x400/DDC6A4/2C5F3E?text=Gold+Band" },
    { id: 102, name: "Ornate Diamond Solitaire Engagement Ring", price: "₹1,20,000", image: "https://placehold.co/400x400/DDC6A4/2C5F3E?text=Solitaire" },
    { id: 103, name: "Classic Signet Gold Ring for Men", price: "₹65,000", image: "https://placehold.co/400x400/DDC6A4/2C5F3E?text=Signet+Ring" },
    { id: 104, name: "Emerald & 22KT Gold Cocktail Ring", price: "₹88,000", image: "https://placehold.co/400x400/DDC6A4/2C5F3E?text=Emerald+Ring" },
    { id: 105, name: "Lightweight Gold Ring for Daily Wear", price: "₹18,500", image: "https://placehold.co/400x400/DDC6A4/2C5F3E?text=Daily+Ring" },
    { id: 106, name: "Elegant Rose Gold Couple Wedding Bands", price: "₹95,000", image: "https://placehold.co/400x400/DDC6A4/2C5F3E?text=Couple+Bands" },
    { id: 107, name: "Antique Finish Temple Gold Ring", price: "₹72,000", image: "https://placehold.co/400x400/DDC6A4/2C5F3E?text=Temple+Ring" },
    { id: 108, name: "Delicate Pearl & Gold Ring for Women", price: "₹32,000", image: "https://placehold.co/400x400/DDC6A4/2C5F3E?text=Pearl+Ring" },
    { id: 109, name: "Modern Geometric Design Gold Ring", price: "₹25,000", image: "https://placehold.co/400x400/DDC6A4/2C5F3E?text=Geometric" },
    { id: 110, name: "Diamond Studded Gold Band for Men", price: "₹1,10,000", image: "https://placehold.co/400x400/DDC6A4/2C5F3E?text=Men's+Diamond" },
    { id: 111, name: "Bridal Floral Diamond Cluster Ring", price: "₹1,50,000", image: "https://placehold.co/400x400/DDC6A4/2C5F3E?text=Bridal+Ring" },
    { id: 112, name: "South Indian Vanki Ring with Ruby Stones", price: "₹78,000", image: "https://placehold.co/400x400/DDC6A4/2C5F3E?text=Vanki+Ring" },
];

const faqData = [
    {
        question: "What is BIS 916 Hallmarked gold?",
        answer: "BIS 916 Hallmark is a certification issued by the Bureau of Indian Standards (BIS) that guarantees the purity of gold. The number '916' corresponds to 22-karat gold, meaning the ornament contains 91.6% pure gold. At Chandralekha Jewels, all our gold jewellery is BIS 916 Hallmarked, ensuring you receive exactly what you pay for."
    },
    {
        question: "What does HUID certified mean?",
        answer: "HUID stands for Hallmark Unique Identification. It is a 6-digit alphanumeric code lasered onto each piece of hallmarked gold jewellery. This unique ID provides traceability and further assurance of purity and authenticity. Every piece at Chandralekha Jewels is HUID certified."
    },
    {
        question: "Do you offer ring resizing?",
        answer: "Yes, we offer complimentary ring resizing for most of our designs within a certain range. Please contact our customer support or visit our store in Coimbatore to learn more about the resizing process and any applicable conditions for your chosen ring."
    },
    {
        question: "What is your exchange policy for gold rings?",
        answer: "We have a transparent and customer-friendly exchange policy. You can find detailed information on our Shipping & Exchange page. We are committed to ensuring you are completely satisfied with your purchase."
    }
];

const Rings = () => {
    useEffect(() => {
        document.title = "Buy BIS 916 Gold Rings in Coimbatore | Handcrafted Designs | Chandralekha Jewels";

        const setMetaTag = (attrName, attrValue, content) => {
            let element = document.querySelector(`meta[${attrName}='${attrValue}']`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attrName, attrValue);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };
        
        setMetaTag('name', 'description', 'Shop BIS 916 Hallmarked gold rings in Coimbatore. Discover handcrafted designs for men & women. Transparent pricing, 35+ years trust. Buy gold rings online or visit us!');
        setMetaTag('property', 'og:title', 'Handcrafted BIS 916 Gold Rings in Coimbatore | Chandralekha Jewels');
        setMetaTag('property', 'og:description', 'Discover and buy exquisite BIS 916 Hallmarked gold rings in Coimbatore. Chandralekha Jewels offers handcrafted designs for every occasion with transparency and trust. Shop online or visit us.');
    }, []);

    return (
        <div className="bg-background text-primary">
            <div className="container mx-auto py-12 px-4 md:px-0">
                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary leading-tight mb-4">
                        Buy Exquisite BIS 916 Gold Rings in Coimbatore
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                        Looking to buy exquisite gold rings in Coimbatore? Chandralekha Jewels offers a stunning collection of BIS 916 Hallmarked and HUID certified gold rings. Discover unique handcrafted designs for men and women, backed by 35+ years of trust, transparent pricing, and superior craftsmanship. Shop online or visit our Coimbatore showroom.
                    </p>
                </header>

                <section id="ring-collection" className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-primary mb-4">Explore Our Gold Ring Collections</h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        From timeless classics for men and women to breathtaking engagement rings and lightweight designs for daily elegance, find the perfect piece in our curated collection.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {ringProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
                
                <section id="why-choose-us" className="mb-20 bg-dark-vanilla/30 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-center text-primary mb-12">Why Choose Chandralekha Jewels for Your Gold Ring?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
                        <div className="flex flex-col items-center">
                            <Heart className="h-10 w-10 text-secondary mb-4" />
                            <h3 className="text-xl font-semibold mb-2">35+ Years of Trusted Craftsmanship</h3>
                            <p className="text-muted-foreground">Our legacy is built on decades of trust and expertise in Coimbatore, ensuring every piece meets the highest standards of quality and artistry.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Sparkles className="h-10 w-10 text-secondary mb-4" />
                            <h3 className="text-xl font-semibold mb-2">The Art of Handcrafted Gold Rings</h3>
                            <p className="text-muted-foreground">We specialize in handcrafted jewellery, offering unique designs with a personal touch and superior finish that machine-made pieces cannot replicate.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <BadgeCheck className="h-10 w-10 text-secondary mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Guaranteed Purity: BIS 916 & HUID Certified</h3>
                            <p className="text-muted-foreground">Shop with confidence. All our gold rings are BIS 916 Hallmarked and HUID certified, guaranteeing you 22-karat purity and complete authenticity.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Scale className="h-10 w-10 text-secondary mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Transparent Pricing & Unmatched Value</h3>
                            <p className="text-muted-foreground">We believe in honest and transparent pricing. Enjoy fair rates without any hidden charges, giving you the best value for your investment.</p>
                        </div>
                    </div>
                </section>

                <div className="grid md:grid-cols-2 gap-16 mb-20">
                    <section id="ring-guide">
                        <h2 className="text-3xl font-bold text-primary mb-6">Your Guide to Gold Rings</h2>
                        <div className="space-y-8">
                             <div>
                                <h3 className="flex items-center text-xl font-semibold mb-2"><Shield className="mr-2 h-5 w-5 text-secondary"/>Understanding Gold Purity</h3>
                                <p className="text-muted-foreground">We primarily offer 22-karat (BIS 916) gold rings, which provide a beautiful balance of rich color and durability for intricate designs. This purity is ideal for traditional and festive wear, embodying the cultural significance of gold in India.</p>
                            </div>
                            <div>
                                <h3 className="flex items-center text-xl font-semibold mb-2"><Ruler className="mr-2 h-5 w-5 text-secondary"/>Finding the Perfect Ring Size</h3>
                                <p className="text-muted-foreground">An accurate ring size is crucial for comfort and security. You can visit our store for a professional sizing, or use a string and ruler at home to measure your finger's circumference. Compare your measurement with a standard ring size chart online, or contact us for assistance.</p>
                            </div>
                            <div>
                                <h3 className="flex items-center text-xl font-semibold mb-2"><Wrench className="mr-2 h-5 w-5 text-secondary"/>Caring for Your Gold Ring</h3>
                                <p className="text-muted-foreground">To maintain its luster, clean your gold ring periodically with a mild soap and water solution, and dry with a soft cloth. Avoid exposure to harsh chemicals. Store it in a separate pouch to prevent scratches. For professional cleaning and polishing, visit our showroom.</p>
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
                    <h2 className="text-3xl font-bold text-primary mb-4">Visit Our Gold Jewellery Showroom in Coimbatore</h2>
                    <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
                        Experience our collection firsthand and receive personalized service from our experts. We invite you to our showroom to explore the timeless elegance of Chandralekha Jewels.
                    </p>
                    <Button asChild size="lg">
                        <Link to="/contact">Get Directions</Link>
                    </Button>
                </section>
            </div>
        </div>
    );
};
export default Rings;
