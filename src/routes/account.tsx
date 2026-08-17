import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, MapPin, Package, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";
import { getProductById, products, type Product } from "@/lib/products";
import { formatPrice } from "@/lib/format";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "My Account - Atelier Nord" },
      { name: "description", content: "Track orders, manage addresses and update your Atelier Nord profile." },
      { property: "og:title", content: "My Account - Atelier Nord" },
      { property: "og:description", content: "Orders, addresses, wishlist and profile settings." },
      { property: "og:url", content: "/account" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/account" }],
  }),
  component: AccountPage,
});

const orders = [
  {
    id: "AN-24817",
    date: "12 August 2026",
    status: "Delivered",
    total: 79500,
    items: [
      { productId: "1", size: "S", color: "Camel", quantity: 1 },
      { productId: "5", size: "One size", color: "Oat", quantity: 1 },
    ],
  },
  {
    id: "AN-24390",
    date: "28 June 2026",
    status: "In transit",
    total: 49500,
    items: [{ productId: "9", size: "One size", color: "Tan", quantity: 1 }],
  },
  {
    id: "AN-23771",
    date: "3 March 2026",
    status: "Delivered",
    total: 31000,
    items: [{ productId: "3", size: "M", color: "Ivory", quantity: 1 }],
  },
];

const addresses = [
  {
    label: "Home",
    lines: ["Ali Imran", "Gulberg III, House 22", "Lahore, 54660", "Pakistan"],
    default: true,
  },
  { label: "Studio", lines: ["Ali Imran", "12 Mall Road", "Lahore, 54000", "Pakistan"], default: false },
];

function AccountPage() {
  const { wishlist } = useStore();
  const saved = wishlist.map(getProductById).filter(Boolean) as Product[];

  return (
    <div className="shell py-12">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Account</p>
          <h1 className="mt-3 text-4xl md:text-5xl">Hello, Ali</h1>
          <p className="mt-3 text-sm text-muted-foreground">ali@example.com · Member since 2021</p>
        </div>
        <Button variant="outline" asChild>
          <Link to="/login">Sign out</Link>
        </Button>
      </header>

      <Tabs defaultValue="orders" className="mt-10">
        <TabsList className="flex h-auto w-full flex-wrap justify-start gap-1 rounded-full bg-surface p-1">
          {[
            { value: "orders", label: "Orders", Icon: Package },
            { value: "wishlist", label: "Wishlist", Icon: Heart },
            { value: "addresses", label: "Addresses", Icon: MapPin },
            { value: "profile", label: "Profile", Icon: User },
          ].map(({ value, label, Icon }) => (
            <TabsTrigger
              key={value}
              value={value}
              className="gap-2 rounded-full px-5 py-2.5 text-xs data-[state=active]:bg-background"
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="orders" className="mt-8">
          <Accordion type="single" collapsible className="rounded-3xl border px-6">
            {orders.map((order) => (
              <AccordionItem key={order.id} value={order.id}>
                <AccordionTrigger>
                  <span className="flex flex-1 flex-wrap items-center justify-between gap-3 pr-4 text-left">
                    <span>
                      <span className="block text-sm font-medium">{order.id}</span>
                      <span className="text-xs text-muted-foreground">{order.date}</span>
                    </span>
                    <span className="flex items-center gap-4">
                      <span className="rounded-full bg-accent-soft px-3 py-1 text-[0.65rem] uppercase tracking-[0.12em]">
                        {order.status}
                      </span>
                      <span className="text-sm">{formatPrice(order.total)}</span>
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="flex flex-col gap-4">
                    {order.items.map((item) => {
                      const product = getProductById(item.productId);
                      if (!product) return null;
                      return (
                        <li key={item.productId} className="flex items-center gap-4">
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            loading="lazy"
                            width={1024}
                            height={1280}
                            className="h-20 w-16 rounded-xl object-cover"
                          />
                          <div className="min-w-0 flex-1">
                            <Link
                              to="/product/$slug"
                              params={{ slug: product.slug }}
                              className="link-underline text-sm font-medium"
                            >
                              {product.name}
                            </Link>
                            <p className="mt-1 text-xs text-muted-foreground">
                              {item.color} · {item.size} · Qty {item.quantity}
                            </p>
                          </div>
                          <p className="text-sm">{formatPrice(product.price * item.quantity)}</p>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button variant="outline" size="sm">
                      Track parcel
                    </Button>
                    <Button variant="ghost" size="sm">
                      Start a return
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>

        <TabsContent value="wishlist" className="mt-8">
          {saved.length === 0 ? (
            <EmptyPanel
              title="Nothing saved yet"
              copy="Tap the heart on any product to keep it here."
            />
          ) : (
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {saved.map((p) => (
                <li key={p.id} className="flex items-center gap-4 rounded-2xl border p-4">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-20 w-16 rounded-xl object-cover"
                  />
                  <div className="min-w-0">
                    <Link
                      to="/product/$slug"
                      params={{ slug: p.slug }}
                      className="link-underline block truncate text-sm font-medium"
                    >
                      {p.name}
                    </Link>
                    <p className="mt-1 text-xs text-muted-foreground">{formatPrice(p.price)}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </TabsContent>

        <TabsContent value="addresses" className="mt-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {addresses.map((a) => (
              <div key={a.label} className="rounded-3xl border p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{a.label}</p>
                  {a.default && (
                    <span className="rounded-full bg-accent-soft px-3 py-1 text-[0.65rem] uppercase tracking-[0.12em]">
                      Default
                    </span>
                  )}
                </div>
                <address className="mt-4 text-sm not-italic leading-relaxed text-muted-foreground">
                  {a.lines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </address>
                <div className="mt-5 flex gap-2">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm">
                    Remove
                  </Button>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={() => toast("Address form coming soon")}
              className="grid min-h-40 cursor-pointer place-items-center rounded-3xl border border-dashed text-sm text-muted-foreground transition-colors hover:bg-surface"
            >
              + Add a new address
            </button>
          </div>
        </TabsContent>

        <TabsContent value="profile" className="mt-8">
          <form
            className="max-w-xl rounded-3xl border p-7"
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Profile updated");
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <ProfileField id="first-name" label="First name" defaultValue="Ali" />
              <ProfileField id="last-name" label="Last name" defaultValue="Imran" />
            </div>
            <div className="mt-4 flex flex-col gap-4">
              <ProfileField id="acct-email" label="Email" type="email" defaultValue="ali@example.com" />
              <ProfileField id="acct-phone" label="Phone" type="tel" defaultValue="+92 300 0000000" />
            </div>
            <Button type="submit" className="mt-6">
              Save changes
            </Button>
          </form>
        </TabsContent>
      </Tabs>

      <section className="mt-16">
        <h2 className="text-2xl">Picked for you</h2>
        <ul className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {products.slice(0, 4).map((p) => (
            <li key={p.id}>
              <Link to="/product/$slug" params={{ slug: p.slug }} className="media-zoom group block">
                <div className="overflow-hidden rounded-2xl bg-surface">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="aspect-4/5 w-full object-cover"
                  />
                </div>
                <p className="mt-3 text-sm">{p.name}</p>
                <p className="text-xs text-muted-foreground">{formatPrice(p.price)}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function ProfileField({
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

function EmptyPanel({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="rounded-3xl border border-dashed py-20 text-center">
      <p className="font-display text-2xl">{title}</p>
      <p className="mt-2 text-sm text-muted-foreground">{copy}</p>
    </div>
  );
}
