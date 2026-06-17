
import { Gem, ShieldCheck, Star, Award } from "lucide-react";

const features = [
  {
    icon: <Award className="h-10 w-10 text-secondary" />,
    title: "35+ Years of Trust",
    description: "A legacy of craftsmanship and customer satisfaction in Coimbatore since 1989.",
  },
  {
    icon: <Gem className="h-10 w-10 text-secondary" />,
    title: "Handcrafted Excellence",
    description: "Every piece is meticulously handmade by master artisans, ensuring unique character and superior quality.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-secondary" />,
    title: "Guaranteed Purity",
    description: "We provide BIS 916 Hallmarked & HUID certified gold, ensuring you receive only the best.",
  },
  {
    icon: <Star className="h-10 w-10 text-secondary" />,
    title: "Unmatched Value",
    description: "Experience transparent pricing and better making charges than machine-made alternatives.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-12">
          Why Choose Chandralekha Jewels in Coimbatore?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              {feature.icon}
              <h3 className="text-xl font-semibold text-primary mt-4 mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
