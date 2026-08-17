import { Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Progress } from "@/components/ui/progress";
import { formatPrice } from "@/lib/format";
import { FREE_SHIPPING_THRESHOLD, useStore, type CartLine } from "@/lib/store";
import type { Product } from "@/lib/products";

export function FreeShippingBar() {
  const { subtotal, currency } = useStore();
  const remaining = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0);
  const pct = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);
  return (
    <div className="rounded-2xl bg-surface p-4">
      <p className="text-xs">
        {remaining === 0 ? (
          <span className="font-medium">Congrats - shipping is on us.</span>
        ) : (
          <>
            You&apos;re <span className="font-medium">{formatPrice(remaining, currency)}</span> away
            from free shipping.
          </>
        )}
      </p>
      <Progress value={pct} className="mt-3 h-1.5" />
    </div>
  );
}

export function CartLineRow({
  line,
  product,
  compact = false,
}: {
  line: CartLine;
  product: Product;
  compact?: boolean;
}) {
  const { updateQuantity, removeLine } = useStore();
  return (
    <li className="flex gap-4">
      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className="shrink-0 overflow-hidden rounded-xl bg-surface"
      >
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1280}
          className={compact ? "h-24 w-20 object-cover" : "h-32 w-26 object-cover"}
        />
      </Link>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Link
              to="/product/$slug"
              params={{ slug: product.slug }}
              className="block truncate text-sm font-medium"
            >
              {product.name}
            </Link>
            <p className="mt-1 text-xs text-muted-foreground">
              {line.color} · {line.size}
            </p>
          </div>
          <p className="whitespace-nowrap text-sm">
            {formatPrice(product.price * line.quantity, product.currency)}
          </p>
        </div>
        <div className="mt-auto flex items-center justify-between pt-3">
          <div className="flex items-center rounded-full border">
            <button
              type="button"
              onClick={() => updateQuantity(line.id, line.quantity - 1)}
              aria-label="Decrease quantity"
              className="grid h-8 w-8 place-items-center rounded-full transition-colors hover:bg-secondary"
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span className="w-7 text-center text-sm" aria-live="polite">
              {line.quantity}
            </span>
            <button
              type="button"
              onClick={() => updateQuantity(line.id, line.quantity + 1)}
              aria-label="Increase quantity"
              className="grid h-8 w-8 place-items-center rounded-full transition-colors hover:bg-secondary"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
          <button
            type="button"
            onClick={() => removeLine(line.id)}
            className="text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
}

export function CartDrawer() {
  const { cartOpen, setCartOpen, detailedLines, subtotal, currency, itemCount } = useStore();

  return (
    <Sheet open={cartOpen} onOpenChange={setCartOpen}>
      <SheetContent side="right" className="flex w-full flex-col gap-0 p-0 sm:max-w-md">
        <div className="flex items-center justify-between border-b px-6 py-5">
          <SheetTitle className="font-display text-xl">Your bag ({itemCount})</SheetTitle>
        </div>

        {detailedLines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-surface">
              <ShoppingBag className="h-6 w-6 text-muted-foreground" />
            </div>
            <div>
              <p className="font-display text-xl">Your bag is empty</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Start with the pieces everyone comes back for.
              </p>
            </div>
            <Button asChild onClick={() => setCartOpen(false)}>
              <Link to="/shop" search={{ tag: "bestseller" }}>
                Shop best sellers
              </Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-5">
              <FreeShippingBar />
              <ul className="mt-6 flex flex-col gap-6">
                {detailedLines.map(({ line, product }) => (
                  <CartLineRow key={line.id} line={line} product={product} compact />
                ))}
              </ul>
            </div>
            <div className="border-t px-6 py-5">
              <div className="flex items-center justify-between text-sm">
                <span>Subtotal</span>
                <span className="font-medium">{formatPrice(subtotal, currency)}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Taxes and shipping calculated at checkout.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <Button size="lg" asChild onClick={() => setCartOpen(false)}>
                  <Link to="/checkout">Checkout</Link>
                </Button>
                <Button size="lg" variant="outline" asChild onClick={() => setCartOpen(false)}>
                  <Link to="/cart">View bag</Link>
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
