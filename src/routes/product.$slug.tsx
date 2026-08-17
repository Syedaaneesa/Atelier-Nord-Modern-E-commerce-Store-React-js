import { useEffect, useState } from "react";
import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import {
  Check,
  Heart,
  Minus,
  Plus,
  RefreshCcw,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProductGrid } from "@/components/store/ProductGrid";
import { StarRating } from "@/components/store/StarRating";
import { testimonials } from "@/components/store/Reviews";
import { getProduct, getProductById, getRelated } from "@/lib/products";
import { discountPercent, formatPrice } from "@/lib/format";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product unavailable - Atelier Nord" }, { name: "robots", content: "noindex" }] };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} - Atelier Nord` },
        { name: "description", content: product.description.slice(0, 155) },
        { property: "og:title", content: `${product.name} - Atelier Nord` },
        { property: "og:description", content: product.description.slice(0, 155) },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/product/${product.slug}` },
      ],
      links: [{ rel: "canonical", href: `/product/${product.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description,
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: product.rating,
              reviewCount: product.reviewCount,
            },
            offers: {
              "@type": "Offer",
              price: (product.price / 100).toFixed(2),
              priceCurrency: product.currency,
              availability: product.inStock
                ? "https://schema.org/InStock"
                : "https://schema.org/OutOfStock",
            },
          }),
        },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { addLine, toggleWishlist, isWishlisted, markViewed, recentlyViewed, setCartOpen } =
    useStore();
  const navigate = useNavigate();

  const [color, setColor] = useState(product.colors[0]?.name ?? "Default");
  const [size, setSize] = useState(product.sizes[0] ?? "One size");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setColor(product.colors[0]?.name ?? "Default");
    setSize(product.sizes[0] ?? "One size");
    setQuantity(1);
    setActiveImage(0);
    markViewed(product.id);
  }, [product.id, product.colors, product.sizes, markViewed]);

  const off = discountPercent(product.price, product.compareAtPrice);
  const wishlisted = isWishlisted(product.id);
  const related = getRelated(product);
  const viewedProducts = recentlyViewed
    .filter((id) => id !== product.id)
    .map(getProductById)
    .filter(Boolean)
    .slice(0, 4) as NonNullable<ReturnType<typeof getProductById>>[];

  const buyNow = () => {
    addLine(product, { color, size, quantity });
    setCartOpen(false);
    navigate({ to: "/checkout" });
  };

  return (
    <div className="shell py-10">
      <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
        <Link to="/" className="link-underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link to="/shop" search={{ category: product.category }} className="link-underline">
          {product.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          <div className="no-scrollbar flex gap-3 overflow-x-auto md:w-20 md:flex-col md:overflow-visible">
            {product.images.map((src, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveImage(i)}
                aria-label={`View image ${i + 1}`}
                aria-current={activeImage === i}
                className={cn(
                  "shrink-0 overflow-hidden rounded-xl border-2 transition-colors",
                  activeImage === i ? "border-foreground" : "border-transparent",
                )}
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-24 w-20 object-cover md:h-24 md:w-full"
                />
              </button>
            ))}
          </div>
          <div className="flex-1 overflow-hidden rounded-3xl bg-surface">
            <img
              src={product.images[activeImage]}
              alt={product.name}
              width={1024}
              height={1280}
              className="aspect-4/5 h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Detail panel */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="flex flex-wrap items-center gap-2">
            {product.isNew && (
              <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.14em]">
                New
              </span>
            )}
            {product.bestseller && (
              <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.14em]">
                Best seller
              </span>
            )}
          </div>

          <h1 className="mt-4 text-4xl md:text-[2.75rem] md:leading-tight">{product.name}</h1>

          <div className="mt-4 flex items-center gap-3">
            <StarRating rating={product.rating} size={14} />
            <a href="#reviews" className="link-underline text-xs text-muted-foreground">
              {product.reviewCount} reviews
            </a>
          </div>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-2xl">{formatPrice(product.price, product.currency)}</span>
            {product.compareAtPrice && (
              <>
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(product.compareAtPrice, product.currency)}
                </span>
                <span className="rounded-full bg-accent px-2.5 py-1 text-[0.7rem] text-accent-foreground">
                  Save {off}%
                </span>
              </>
            )}
          </div>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{product.description}</p>

          {/* Colour */}
          <div className="mt-8">
            <p className="eyebrow">
              Colour - <span className="text-foreground">{color}</span>
            </p>
            <div className="mt-3 flex gap-2">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => setColor(c.name)}
                  aria-label={c.name}
                  aria-pressed={color === c.name}
                  className={cn(
                    "grid h-9 w-9 place-items-center rounded-full border-2 transition-colors",
                    color === c.name ? "border-foreground" : "border-transparent",
                  )}
                >
                  <span
                    className="h-7 w-7 rounded-full border"
                    style={{ backgroundColor: c.hex }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mt-6">
            <div className="flex items-center justify-between">
              <p className="eyebrow">
                Size - <span className="text-foreground">{size}</span>
              </p>
              <button type="button" className="text-xs text-muted-foreground underline">
                Size guide
              </button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  aria-pressed={size === s}
                  className={cn(
                    "min-w-14 rounded-full border px-4 py-2.5 text-xs transition-colors",
                    size === s ? "border-foreground bg-secondary" : "hover:bg-secondary",
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + actions */}
          <div className="mt-8 flex items-center gap-3">
            <div className="flex items-center rounded-full border">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="grid h-11 w-11 place-items-center rounded-full transition-colors hover:bg-secondary"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center text-sm" aria-live="polite">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
                className="grid h-11 w-11 place-items-center rounded-full transition-colors hover:bg-secondary"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => toggleWishlist(product.id)}
              aria-label={wishlisted ? "Remove from wishlist" : "Save to wishlist"}
              aria-pressed={wishlisted}
              className="h-11 w-11 border"
            >
              <Heart className={cn("h-4 w-4", wishlisted && "fill-accent text-accent")} />
            </Button>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <Button
              size="xl"
              disabled={!product.inStock}
              onClick={() => addLine(product, { color, size, quantity })}
            >
              {product.inStock ? "Add to bag" : "Sold out"}
            </Button>
            <Button size="xl" variant="accent" disabled={!product.inStock} onClick={buyNow}>
              Buy it now
            </Button>
          </div>

          <p className="mt-4 flex items-center gap-2 text-xs">
            {product.inStock ? (
              <>
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full",
                    product.lowStock ? "bg-accent" : "bg-success",
                  )}
                />
                {product.lowStock ? "Low stock - only a few left" : "In stock, ships within 24h"}
              </>
            ) : (
              <>
                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                Out of stock - join the waitlist below
              </>
            )}
          </p>

          <ul className="mt-6 grid gap-3 rounded-2xl bg-surface p-5 text-xs">
            <li className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-accent" strokeWidth={1.5} /> Free shipping over $250,
              2–4 day delivery
            </li>
            <li className="flex items-center gap-2">
              <RefreshCcw className="h-4 w-4 text-accent" strokeWidth={1.5} /> 30-day returns with a
              prepaid label
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent" strokeWidth={1.5} /> Two-year repair
              guarantee
            </li>
          </ul>

          <Accordion type="single" collapsible className="mt-8" defaultValue="details">
            <AccordionItem value="details">
              <AccordionTrigger>Details & materials</AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                  {product.details.map((d) => (
                    <li key={d} className="flex gap-2">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                      {d}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="shipping">
              <AccordionTrigger>Shipping</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                Orders placed before 2pm CET ship the same working day. Standard delivery is 2–4
                days and free over $250; express is available at checkout. Duties are prepaid for
                the EU, UK and US.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="returns">
              <AccordionTrigger>Returns & exchanges</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                Unworn items can be returned within 30 days for a full refund. Start a return from
                your account and we'll email a prepaid label. Exchanges ship as soon as the label is
                scanned.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="reviews" id="reviews">
              <AccordionTrigger>Reviews ({product.reviewCount})</AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-col gap-6">
                  {testimonials.slice(0, 3).map((t) => (
                    <li key={t.name}>
                      <StarRating rating={t.rating} />
                      <p className="mt-2 text-sm font-medium">{t.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                      <p className="mt-2 text-xs text-muted-foreground">
                        {t.name} · {t.location}
                      </p>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <section className="mt-24">
        <h2 className="text-3xl md:text-4xl">You may also like</h2>
        <ProductGrid products={related} className="mt-10" />
      </section>

      {viewedProducts.length > 0 && (
        <section className="mt-20">
          <h2 className="text-3xl md:text-4xl">Recently viewed</h2>
          <ProductGrid products={viewedProducts} className="mt-10" />
        </section>
      )}
    </div>
  );
}
