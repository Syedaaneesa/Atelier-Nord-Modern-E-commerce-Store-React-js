import type { Product } from "@/lib/products";
import { cn } from "@/lib/utils";
import { ProductCard, ProductCardSkeleton } from "./ProductCard";

export function ProductGrid({
  products,
  loading,
  skeletonCount = 8,
  className,
}: {
  products: Product[];
  loading?: boolean;
  skeletonCount?: number;
  className?: string;
}) {
  if (loading) {
    return (
      <div
        className={cn("grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4", className)}
      >
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn("grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4", className)}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
