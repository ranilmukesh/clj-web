import { NextResponse } from 'next/server';

const testimonials = [
  {
    name: "Priya R.",
    location: "Coimbatore",
    rating: 5,
    comment: "The craftsmanship is breathtaking. I found the perfect bridal set here, and the service was exceptional. Highly recommended!",
  },
  {
    name: "Anand K.",
    location: "Tiruppur",
    rating: 5,
    comment: "Chandralekha Jewels is our family's trusted jeweler. Their transparency with pricing and hallmark certification gives us peace of mind.",
  },
  {
    name: "Sunita M.",
    location: "Coimbatore",
    rating: 5,
    comment: "I wanted a custom-made vintage ring, and they brought my vision to life perfectly. The attention to detail is just amazing.",
  },
];

export async function GET() {
  return NextResponse.json({
    success: true,
    reviews: testimonials,
    aggregateRating: {
      ratingValue: "4.9",
      reviewCount: "850",
      bestRating: "5",
      worstRating: "1"
    }
  });
}
