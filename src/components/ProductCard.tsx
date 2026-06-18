
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: string;
    image: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden group">
      <CardContent className="p-0 relative h-64 w-full">
        {/* Next.js 16 Optimized Image */}
        <Image
          src={product.image}
          alt={`${product.name} - The Best and Latest BIS 916 Hallmarked Gold Jewellery in Coimbatore`}
          title={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4 bg-white">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-secondary font-bold mt-1">{product.price}</p>
        <Button asChild className="mt-4 w-full" variant="outline">
          <Link href={`/products/${product.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
