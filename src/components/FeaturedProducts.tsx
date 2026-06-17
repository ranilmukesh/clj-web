
import ProductCard from "./ProductCard";

const featuredProducts = [
  {
    id: 1,
    name: "The Aurelia Necklace",
    price: "$1,250",
    image: "https://placehold.co/400x400/DDC6A4/2C5F3E?text=Aurelia",
  },
  {
    id: 2,
    name: "Solstice Gold Ring",
    price: "$850",
    image: "https://placehold.co/400x400/DDC6A4/2C5F3E?text=Solstice",
  },
  {
    id: 3,
    name: "Luna Pearl Earrings",
    price: "$980",
    image: "https://placehold.co/400x400/DDC6A4/2C5F3E?text=Luna",
  },
  {
    id: 4,
    name: "Helios Signet Bracelet",
    price: "$1,500",
    image: "https://placehold.co/400x400/DDC6A4/2C5F3E?text=Helios",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-primary mb-4">Featured Collection</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of our most loved pieces, each with a story to tell. Handcrafted to perfection, just for you.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
