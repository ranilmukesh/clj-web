
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
      <CardContent className="p-0">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
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
