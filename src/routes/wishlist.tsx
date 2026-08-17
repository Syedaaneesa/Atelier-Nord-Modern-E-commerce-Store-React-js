import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/store/ProductGrid";
import { getProductById, type Product } from "@/lib/products";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title: "Wishlist - Atelier Nord" },
      { name: "description", content: "The Atelier Nord pieces you've saved for later." },
      { property: "og:title", content: "Wishlist - Atelier Nord" },
      { property: "og:description", content: "Your saved Atelier Nord pieces." },
      { property: "og:url", content: "/wishlist" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/wishlist" }],
  }),
  component: WishlistPage,
});

function WishlistPage() {
  const { wishlist } = useStore();
  const items = wishlist.map(getProductById).filter(Boolean) as Product[];

  return (
    <div className="shell py-12">
      <header>
        <p className="eyebrow">Saved</p>
        <h1 className="mt-4 text-4xl md:text-5xl">Your wishlist</h1>
      </header>

      {items.length === 0 ? (
        <div className="mt-14 flex flex-col items-center gap-5 rounded-3xl border border-dashed py-24 text-center">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-surface">
            <Heart className="h-6 w-6 text-muted-foreground" />
          </div>
          <div>
            <p className="font-display text-2xl">Nothing saved yet</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Tap the heart on any product to keep it here.
            </p>
          </div>
          <Button size="lg" asChild>
            <Link to="/shop">Browse the collection</Link>
          </Button>
        </div>
      ) : (
        <ProductGrid products={items} className="mt-12" />
      )}
    </div>
  );
}
