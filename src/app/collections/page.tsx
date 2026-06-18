"use client";

import { useState } from "react";
import { ringProducts, necklaceProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, SlidersHorizontal, Sparkles } from "lucide-react";

// Helper function to extract numerical price for sorting
const getNumericPrice = (priceStr: string) => {
  return parseInt(priceStr.replace(/[^0-9]/g, ""), 10);
};

export default function Collections() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "rings" | "necklaces">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc">("featured");

  // Combine products with category tag
  const allProducts = [
    ...ringProducts.map((p) => ({ ...p, category: "rings" as const })),
    ...necklaceProducts.map((p) => ({ ...p, category: "necklaces" as const })),
  ];

  // Filter products based on category and search query
  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") {
      return getNumericPrice(a.price) - getNumericPrice(b.price);
    }
    if (sortBy === "price-desc") {
      return getNumericPrice(b.price) - getNumericPrice(a.price);
    }
    return 0; // "featured" (default order as defined in arrays)
  });

  return (
    <div className="bg-background min-h-screen text-primary pb-24">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-dark-vanilla/10 to-transparent py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
            <Sparkles className="h-4 w-4" />
            <span>Timeless Heritage & Craftsmanship</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-4">
            Our Masterpiece Collections
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore our curated ranges of BIS 916 Hallmarked and HUID certified jewellery. From ultra-luxury rings to royal bridal necklaces, discover handcrafted perfection.
          </p>
        </div>
      </section>

      {/* Filter and Control Bar */}
      <section className="container mx-auto px-4 mb-12">
        <div className="bg-white rounded-xl shadow-sm border border-border p-6 flex flex-col md:flex-row gap-6 items-center justify-between">
          
          {/* Category Tabs */}
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                selectedCategory === "all"
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-background text-muted-foreground hover:bg-dark-vanilla/25"
              }`}
            >
              All Masterpieces
            </button>
            <button
              onClick={() => setSelectedCategory("rings")}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                selectedCategory === "rings"
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-background text-muted-foreground hover:bg-dark-vanilla/25"
              }`}
            >
              Rings Collection
            </button>
            <button
              onClick={() => setSelectedCategory("necklaces")}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                selectedCategory === "necklaces"
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-background text-muted-foreground hover:bg-dark-vanilla/25"
              }`}
            >
              Necklace Collection
            </button>
          </div>

          {/* Search and Sort Options */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto items-stretch sm:items-center">
            {/* Search Input */}
            <div className="relative flex-grow sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search jewellery..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 bg-background border-border focus-visible:ring-secondary focus-visible:border-secondary font-medium"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground hidden sm:block" />
              <Select
                value={sortBy}
                onValueChange={(val: "featured" | "price-asc" | "price-desc") => setSortBy(val)}
              >
                <SelectTrigger className="w-full sm:w-[180px] bg-background border-border">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4">
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {sortedProducts.map((product) => (
              <div
                key={`${product.category}-${product.id}`}
                className="transform hover:-translate-y-1 transition-transform duration-300"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-border shadow-sm max-w-lg mx-auto">
            <SlidersHorizontal className="h-12 w-12 mx-auto text-muted-foreground opacity-60 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-primary">No Jewellery Found</h3>
            <p className="text-muted-foreground px-6">
              We couldn't find any items matching your current filters. Try adjusting your search query or selecting a different category.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
