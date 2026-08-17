import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingBag, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CartLineRow, FreeShippingBar } from "@/components/store/CartDrawer";
import { formatPrice } from "@/lib/format";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Bag - Atelier Nord" },
      { name: "description", content: "Review the pieces in your Atelier Nord bag before checkout." },
      { property: "og:title", content: "Your Bag - Atelier Nord" },
      { property: "og:description", content: "Review your bag and continue to secure checkout." },
      { property: "og:url", content: "/cart" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/cart" }],
  }),
  component: CartPage,
});

function CartPage() {
  const {
    detailedLines,
    subtotal,
    discountAmount,
    discountCode,
    shipping,
    tax,
    total,
    currency,
    applyDiscount,
    removeDiscount,
  } = useStore();
  const [code, setCode] = useState("");

  if (detailedLines.length === 0) {
    return (
      <div className="shell flex min-h-[60vh] flex-col items-center justify-center gap-5 py-20 text-center">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-surface">
          <ShoppingBag className="h-6 w-6 text-muted-foreground" />
        </div>
        <h1 className="text-4xl">Your bag is empty</h1>
        <p className="max-w-sm text-sm text-muted-foreground">
          Nothing here yet. Start with the coats and cashmere everyone comes back for.
        </p>
        <div className="flex gap-3">
          <Button size="lg" asChild>
            <Link to="/shop">Shop all</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/shop" search={{ tag: "bestseller" }}>
              Best sellers
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="shell py-12">
      <h1 className="text-4xl md:text-5xl">Your bag</h1>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <div>
          <FreeShippingBar />
          <ul className="mt-8 flex flex-col gap-8 border-t pt-8">
            {detailedLines.map(({ line, product }) => (
              <CartLineRow key={line.id} line={line} product={product} />
            ))}
          </ul>
          <Link to="/shop" className="link-underline mt-8 inline-block text-sm">
            Continue shopping
          </Link>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-3xl border p-7">
            <h2 className="font-display text-2xl">Order summary</h2>

            <div className="mt-6">
              {discountCode ? (
                <div className="flex items-center justify-between rounded-full bg-accent-soft px-4 py-2.5 text-xs">
                  <span className="flex items-center gap-2">
                    <Tag className="h-3.5 w-3.5" /> {discountCode} applied
                  </span>
                  <button type="button" onClick={removeDiscount} className="underline">
                    Remove
                  </button>
                </div>
              ) : (
                <form
                  className="flex gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (applyDiscount(code)) setCode("");
                  }}
                >
                  <label htmlFor="discount" className="sr-only">
                    Discount code
                  </label>
                  <Input
                    id="discount"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Discount code"
                    className="h-10 rounded-full"
                  />
                  <Button type="submit" variant="outline">
                    Apply
                  </Button>
                </form>
              )}
            </div>

            <dl className="mt-6 flex flex-col gap-3 border-t pt-6 text-sm">
              <Row label="Subtotal" value={formatPrice(subtotal, currency)} />
              {discountAmount > 0 && (
                <Row label="Discount" value={`−${formatPrice(discountAmount, currency)}`} accent />
              )}
              <Row
                label="Estimated shipping"
                value={shipping === 0 ? "Free" : formatPrice(shipping, currency)}
              />
              <Row label="Estimated tax" value={formatPrice(tax, currency)} />
            </dl>

            <div className="mt-6 flex items-baseline justify-between border-t pt-6">
              <span className="text-sm">Total</span>
              <span className="text-2xl">{formatPrice(total, currency)}</span>
            </div>

            <Button size="xl" className="mt-6 w-full" asChild>
              <Link to="/checkout">Checkout securely</Link>
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Taxes and shipping finalised at checkout.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className={accent ? "text-accent" : undefined}>{value}</dd>
    </div>
  );
}
