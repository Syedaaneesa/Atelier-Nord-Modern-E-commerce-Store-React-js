import { Link } from "@tanstack/react-router";
import { Heart, Plus } from "lucide-react";
import type { Product } from "@/lib/products";
import { discountPercent, formatPrice } from "@/lib/format";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { StarRating } from "./StarRating";

export function ProductCard({ product, className }: { product: Product; className?: string }) {
  const { addLine, toggleWishlist, isWishlisted } = useStore();
  const off = discountPercent(product.price, product.compareAtPrice);
  const wishlisted = isWishlisted(product.id);
  const hoverImage = product.images[1] ?? product.images[0];

  return (
    <article className={cn("group relative flex flex-col", className)}>
      <div className="relative overflow-hidden rounded-2xl bg-surface">
        <Link
          to="/product/$slug"
          params={{ slug: product.slug }}
          aria-label={product.name}
          className="block"
        >
          <div className="relative aspect-4/5">
            <img
              src={product.images[0]}
              alt={product.name}
              loading="lazy"
              width={1024}
              height={1280}
              className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] group-hover:opacity-0"
            />
            <img
              src={hoverImage}
              alt=""
              aria-hidden="true"
              loading="lazy"
              width={1024}
              height={1280}
              className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100 group-hover:opacity-100"
            />
          </div>
        </Link>

        <div className="pointer-events-none absolute left-3 top-3 flex flex-col items-start gap-1.5">
          {off > 0 && (
            <span className="rounded-full bg-accent px-2.5 py-1 text-[0.65rem] font-medium tracking-wide text-accent-foreground">
              −{off}%
            </span>
          )}
          {product.isNew && (
            <span className="rounded-full bg-background px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.14em]">
              New
            </span>
          )}
          {product.bestseller && !product.isNew && (
            <span className="rounded-full bg-background px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.14em]">
              Best seller
            </span>
          )}
          {!product.inStock && (
            <span className="rounded-full bg-foreground px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-primary-foreground">
              Sold out
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          aria-label={wishlisted ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
          aria-pressed={wishlisted}
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/85 backdrop-blur transition-colors hover:bg-background"
        >
          <Heart
            className={cn("h-4 w-4", wishlisted ? "fill-accent text-accent" : "text-foreground")}
          />
        </button>

        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100 max-md:translate-y-0 max-md:opacity-100">
          <Button
            size="sm"
            variant="default"
            className="w-full"
            disabled={!product.inStock}
            onClick={() => addLine(product)}
          >
            {product.inStock ? (
              <>
                <Plus /> Quick add
              </>
            ) : (
              "Sold out"
            )}
          </Button>
        </div>
      </div>

      <div className="mt-4 flex flex-1 flex-col gap-1.5">
        <StarRating rating={product.rating} count={product.reviewCount} />
        <h3 className="font-sans text-sm font-medium leading-snug tracking-tight">
          <Link to="/product/$slug" params={{ slug: product.slug }} className="link-underline">
            {product.name}
          </Link>
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-sm">{formatPrice(product.price, product.currency)}</span>
          {product.compareAtPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {formatPrice(product.compareAtPrice, product.currency)}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <div className="aspect-4/5 animate-pulse rounded-2xl bg-surface" />
      <div className="space-y-2">
        <div className="h-3 w-20 animate-pulse rounded-full bg-surface" />
        <div className="h-3 w-3/4 animate-pulse rounded-full bg-surface" />
        <div className="h-3 w-16 animate-pulse rounded-full bg-surface" />
      </div>
    </div>
  );
}
