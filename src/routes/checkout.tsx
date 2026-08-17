import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Lock, ShieldCheck, Tag } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/format";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Secure Checkout - Atelier Nord" },
      { name: "description", content: "Complete your Atelier Nord order with encrypted checkout." },
      { property: "og:title", content: "Secure Checkout - Atelier Nord" },
      { property: "og:description", content: "Encrypted checkout, duties prepaid, 30-day returns." },
      { property: "og:url", content: "/checkout" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/checkout" }],
  }),
  component: CheckoutPage,
});

function CheckoutPage() {
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
    clearCart,
  } = useStore();
  const navigate = useNavigate();
  const [delivery, setDelivery] = useState("standard");
  const [code, setCode] = useState("");
  const [placing, setPlacing] = useState(false);

  const expressFee = 1800;
  const orderTotal = total + (delivery === "express" ? expressFee : 0);

  if (detailedLines.length === 0) {
    return (
      <div className="shell flex min-h-[60vh] flex-col items-center justify-center gap-5 text-center">
        <h1 className="text-4xl">Nothing to check out</h1>
        <p className="text-sm text-muted-foreground">Add a piece to your bag first.</p>
        <Button size="lg" asChild>
          <Link to="/shop">Shop the collection</Link>
        </Button>
      </div>
    );
  }

  const placeOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setPlacing(true);
    setTimeout(() => {
      clearCart();
      setPlacing(false);
      toast.success("Order placed", { description: "A confirmation is on its way to your inbox." });
      navigate({ to: "/account" });
    }, 900);
  };

  return (
    <div className="shell py-12">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl md:text-5xl">Checkout</h1>
        <p className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex">
          <Lock className="h-3.5 w-3.5" /> Secure 256-bit encrypted
        </p>
      </div>

      <form onSubmit={placeOrder} className="mt-10 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <div className="flex flex-col gap-10">
          <Section title="Contact information">
            <Field id="email" label="Email" type="email" placeholder="you@email.com" required />
            <Field id="phone" label="Phone (for delivery updates)" type="tel" placeholder="+45 00 00 00 00" />
          </Section>

          <Section title="Shipping address">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="first" label="First name" required />
              <Field id="last" label="Last name" required />
            </div>
            <Field id="address" label="Address" required />
            <Field id="apt" label="Apartment, suite (optional)" />
            <div className="grid gap-4 sm:grid-cols-3">
              <Field id="city" label="City" required />
              <Field id="zip" label="Postal code" required />
              <Field id="country" label="Country" defaultValue="Denmark" required />
            </div>
          </Section>

          <Section title="Delivery method">
            <RadioGroup value={delivery} onValueChange={setDelivery} className="gap-3">
              <DeliveryOption
                value="standard"
                label="Standard - 2–4 business days"
                price={shipping === 0 ? "Free" : formatPrice(shipping, currency)}
              />
              <DeliveryOption
                value="express"
                label="Express - next business day"
                price={formatPrice(expressFee, currency)}
              />
            </RadioGroup>
          </Section>

          <Section title="Payment">
            <div className="rounded-2xl border p-5">
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-accent" /> All transactions are encrypted. We
                never store card details.
              </p>
              <div className="mt-5 flex flex-col gap-4">
                <Field id="card" label="Card number" placeholder="4242 4242 4242 4242" required />
                <div className="grid gap-4 sm:grid-cols-3">
                  <Field id="exp" label="Expiry" placeholder="MM / YY" required />
                  <Field id="cvc" label="CVC" placeholder="123" required />
                  <Field id="zipcard" label="Billing ZIP" required />
                </div>
              </div>
            </div>
          </Section>

          <Button type="submit" size="xl" className="w-full" disabled={placing}>
            {placing ? "Placing order…" : `Pay ${formatPrice(orderTotal, currency)}`}
          </Button>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-3xl bg-surface p-7">
            <h2 className="font-display text-2xl">Order summary</h2>
            <ul className="mt-6 flex flex-col gap-4">
              {detailedLines.map(({ line, product }) => (
                <li key={line.id} className="flex gap-4">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-20 w-16 rounded-xl object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{product.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {line.color} · {line.size} · Qty {line.quantity}
                    </p>
                  </div>
                  <p className="text-sm">
                    {formatPrice(product.price * line.quantity, product.currency)}
                  </p>
                </li>
              ))}
            </ul>

            <Separator className="my-6" />

            {discountCode ? (
              <p className="flex items-center gap-2 text-xs">
                <Tag className="h-3.5 w-3.5" /> {discountCode} applied
              </p>
            ) : (
              <div className="flex gap-2">
                <label htmlFor="checkout-code" className="sr-only">
                  Discount code
                </label>
                <Input
                  id="checkout-code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Discount code"
                  className="h-10 rounded-full bg-background"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    if (applyDiscount(code)) setCode("");
                  }}
                >
                  Apply
                </Button>
              </div>
            )}

            <dl className="mt-6 flex flex-col gap-3 text-sm">
              <SummaryRow label="Subtotal" value={formatPrice(subtotal, currency)} />
              {discountAmount > 0 && (
                <SummaryRow label="Discount" value={`−${formatPrice(discountAmount, currency)}`} />
              )}
              <SummaryRow
                label="Shipping"
                value={
                  delivery === "express"
                    ? formatPrice(expressFee, currency)
                    : shipping === 0
                      ? "Free"
                      : formatPrice(shipping, currency)
                }
              />
              <SummaryRow label="Taxes" value={formatPrice(tax, currency)} />
            </dl>

            <div className="mt-6 flex items-baseline justify-between border-t pt-6">
              <span className="text-sm">Total</span>
              <span className="text-2xl">{formatPrice(orderTotal, currency)}</span>
            </div>
          </div>
        </aside>
      </form>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-2xl">{title}</h2>
      <div className="mt-5 flex flex-col gap-4">{children}</div>
    </section>
  );
}

function Field({
  id,
  label,
  ...props
}: { id: string; label: string } & React.ComponentProps<typeof Input>) {
  return (
    <div>
      <Label htmlFor={id} className="text-xs text-muted-foreground">
        {label}
      </Label>
      <Input id={id} className="mt-2 h-11 rounded-xl" {...props} />
    </div>
  );
}

function DeliveryOption({
  value,
  label,
  price,
}: {
  value: string;
  label: string;
  price: string;
}) {
  return (
    <Label
      htmlFor={value}
      className="flex cursor-pointer items-center justify-between rounded-2xl border p-4 text-sm font-normal transition-colors has-[button[data-state=checked]]:border-foreground"
    >
      <span className="flex items-center gap-3">
        <RadioGroupItem value={value} id={value} />
        {label}
      </span>
      <span>{price}</span>
    </Label>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-muted-foreground">{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}
