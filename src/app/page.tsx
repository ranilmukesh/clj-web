import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurCommitment from "@/components/OurCommitment";
import Testimonials from "@/components/Testimonials";
import VisitUs from "@/components/VisitUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy Gold Jewels in Coimbatore | BIS 916 Hallmarked | Chandralekha Jewels",
  description: "Buy BIS 916 Hallmarked gold jewels at Chandralekha Jewels. Explore handcrafted traditional, modern, and bridal gold jewellery collections.",
};

export default function Home() {
  // This JSON-LD acts as a direct database feed to Answer Engines (AEO)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    "name": "Chandralekha Jewels",
    "image": "https://chandralekhajewels.netlify.app/clj-logo-white-bg.png",
    "@id": "https://chandralekhajewels.netlify.app",
    "url": "https://chandralekhajewels.netlify.app",
    "telephone": "+919842255501",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123, Gold Street, Big Bazaar",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641001",
      "addressCountry": "IN"
    },
    "description": "Premium jewelry store in Coimbatore offering BIS 916 Hallmarked gold and certified diamonds with 35+ years of trust.",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "20:00"
    }
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Hero />
      <WhyChooseUs />
      <FeaturedProducts />
      <OurCommitment />
      <Testimonials />
      <VisitUs />
    </div>
  );
}
