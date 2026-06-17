
import { useEffect } from "react";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurCommitment from "@/components/OurCommitment";
import Testimonials from "@/components/Testimonials";
import VisitUs from "@/components/VisitUs";

const Index = () => {
  useEffect(() => {
    document.title = "Buy Gold Jewels in Coimbatore | BIS 916 Hallmarked | Chandralekha Jewels";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Buy BIS 916 Hallmarked gold jewels in Coimbatore at Chandralekha Jewels. Explore handcrafted traditional, modern, and bridal gold jewellery collections. Visit our showroom or shop online for quality, transparency, and timeless elegance.');
  }, []);

  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <FeaturedProducts />
      <OurCommitment />
      <Testimonials />
      <VisitUs />
    </div>
  );
};

export default Index;
