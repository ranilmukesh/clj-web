
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya R.",
    location: "Coimbatore",
    comment: "The craftsmanship is breathtaking. I found the perfect bridal set here, and the service was exceptional. Highly recommended!",
  },
  {
    name: "Anand K.",
    location: "Tiruppur",
    comment: "Chandralekha Jewels is our family's trusted jeweler. Their transparency with pricing and hallmark certification gives us peace of mind.",
  },
  {
    name: "Sunita M.",
    location: "Coimbatore",
    comment: "I wanted a custom-made vintage ring, and they brought my vision to life perfectly. The attention to detail is just amazing.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          What Our Coimbatore Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-secondary/50">
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-vegas-gold fill-vegas-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-4">"{testimonial.comment}"</p>
                <p className="font-bold text-primary">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
