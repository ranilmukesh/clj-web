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
}
