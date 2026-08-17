import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Heart, Menu, Search, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { categories } from "@/lib/products";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Shop", to: "/shop" as const, search: {} },
  { label: "New Arrivals", to: "/shop" as const, search: { tag: "new" as const } },
  { label: "Best Sellers", to: "/shop" as const, search: { tag: "bestseller" as const } },
  { label: "Collections", to: "/collections" as const, search: {} },
  { label: "About", to: "/about" as const, search: {} },
];

export function Header() {
  const { itemCount, wishlist, setCartOpen, setSearchOpen } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/85 backdrop-blur-xl"
          : "border-transparent bg-background",
      )}
    >
      <div className="shell flex h-16 items-center justify-between gap-4 md:h-20">
        <div className="flex items-center gap-1 md:hidden">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="iconSm" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[85vw] max-w-sm p-0">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <nav className="flex flex-col gap-1 p-6 pt-14">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    search={link.search}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-2xl"
                  >
                    {link.label}
                  </Link>
                ))}
                <p className="eyebrow mt-8">Categories</p>
                <div className="mt-3 flex flex-col gap-2">
                  {categories.map((c) => (
                    <Link
                      key={c.id}
                      to="/shop"
                      search={{ category: c.id }}
                      onClick={() => setMenuOpen(false)}
                      className="text-sm text-muted-foreground"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-2 border-t pt-6 text-sm">
                  <Link to="/account" onClick={() => setMenuOpen(false)}>
                    My account
                  </Link>
                  <Link to="/wishlist" onClick={() => setMenuOpen(false)}>
                    Wishlist
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <Link to="/" className="font-display text-xl leading-none tracking-tight md:text-2xl">
          Atelier Nord
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              search={link.search}
              activeOptions={{ exact: true, includeSearch: true }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="link-underline text-[0.8rem] tracking-[0.06em] uppercase transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-0.5">
          <Button
            variant="ghost"
            size="iconSm"
            aria-label="Search products"
            onClick={() => setSearchOpen(true)}
          >
            <Search />
          </Button>
          <Button variant="ghost" size="iconSm" asChild className="hidden sm:inline-flex">
            <Link to="/account" aria-label="Account">
              <User />
            </Link>
          </Button>
          <Button variant="ghost" size="iconSm" asChild className="relative hidden sm:inline-flex">
            <Link to="/wishlist" aria-label={`Wishlist, ${wishlist.length} items`}>
              <Heart />
              {wishlist.length > 0 && (
                <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-accent" />
              )}
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="iconSm"
            className="relative"
            aria-label={`Shopping bag, ${itemCount} items`}
            onClick={() => setCartOpen(true)}
          >
            <ShoppingBag />
            {itemCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-accent px-1 text-[0.6rem] font-medium text-accent-foreground">
                {itemCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
