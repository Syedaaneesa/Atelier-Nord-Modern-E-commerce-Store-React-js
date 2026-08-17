import { Link } from "@tanstack/react-router";
import { Heart, Home, Search, ShoppingBag, Store } from "lucide-react";
import { useStore } from "@/lib/store";

export function MobileBottomNav() {
  const { setSearchOpen, setCartOpen, itemCount } = useStore();

  return (
    <nav
      aria-label="Quick navigation"
      className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 backdrop-blur-xl md:hidden"
    >
      <ul className="grid grid-cols-5">
        <li>
          <Link
            to="/"
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-foreground" }}
            inactiveProps={{ className: "text-muted-foreground" }}
            className="flex flex-col items-center gap-1 py-3 text-[0.65rem]"
          >
            <Home className="h-5 w-5" />
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/shop"
            activeProps={{ className: "text-foreground" }}
            inactiveProps={{ className: "text-muted-foreground" }}
            className="flex flex-col items-center gap-1 py-3 text-[0.65rem]"
          >
            <Store className="h-5 w-5" />
            Shop
          </Link>
        </li>
        <li>
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="flex w-full flex-col items-center gap-1 py-3 text-[0.65rem] text-muted-foreground"
          >
            <Search className="h-5 w-5" />
            Search
          </button>
        </li>
        <li>
          <Link
            to="/wishlist"
            activeProps={{ className: "text-foreground" }}
            inactiveProps={{ className: "text-muted-foreground" }}
            className="flex flex-col items-center gap-1 py-3 text-[0.65rem]"
          >
            <Heart className="h-5 w-5" />
            Saved
          </Link>
        </li>
        <li>
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            className="relative flex w-full flex-col items-center gap-1 py-3 text-[0.65rem] text-muted-foreground"
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute right-1/4 top-1.5 grid h-4 min-w-4 place-items-center rounded-full bg-accent px-1 text-[0.6rem] text-accent-foreground">
                {itemCount}
              </span>
            )}
            Bag
          </button>
        </li>
      </ul>
    </nav>
  );
}
