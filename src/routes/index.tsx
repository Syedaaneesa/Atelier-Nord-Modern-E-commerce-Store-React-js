import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Headphones, RefreshCcw, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/store/ProductGrid";
import { ProductCard } from "@/components/store/ProductCard";
import { ReviewsSection } from "@/components/store/Reviews";
import { NewsletterSection } from "@/components/store/Newsletter";
import { bestSellers, categories, newArrivals } from "@/lib/products";
import hero from "@/assets/hero.jpg";
import promo from "@/assets/promo.jpg";
import lifestyle1 from "@/assets/lifestyle-1.jpg";
import catKnitwear from "@/assets/cat-knitwear.jpg";
import catBags from "@/assets/cat-bags.jpg";
import catFootwear from "@/assets/cat-footwear.jpg";
import pDress from "@/assets/p-dress.jpg";
import pLoafer from "@/assets/p-loafer.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atelier Nord - Considered Wardrobe Essentials" },
      {
        name: "description",
        content:
          "Small-run coats, cashmere knitwear, leather goods and hand-welted footwear. Free shipping over $250, 30-day returns.",
      },
      { property: "og:title", content: "Atelier Nord - Considered Wardrobe Essentials" },
      {
        property: "og:description",
        content: "Small-run coats, cashmere, leather goods and footwear, made to last decades.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <BestSellersSection />
      <PromoBanner />
      <NewArrivalsCarousel />
      <WhyChooseUs />
      <ReviewsSection />
      <NewsletterSection />
      <SocialGallery />
    </>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[78vh] min-h-[520px] w-full overflow-hidden md:h-[86vh]">
        <img
          src={hero}
          alt="Model wearing the Nord camel wool overcoat in afternoon light"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/40 to-transparent" />
        <div className="shell relative flex h-full items-center">
          <div className="max-w-xl fade-up">
            <p className="eyebrow">Autumn / Winter Collection</p>
            <h1 className="mt-5 text-balance text-5xl leading-[1.03] md:text-7xl">
              Made in small runs. Worn for decades.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Italian wool, grade-A cashmere and vegetable-tanned leather, cut in the same three
              workshops we've used since 2014.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button size="xl" asChild>
                <Link to="/shop">Shop Now</Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link to="/collections">Explore Collection</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedCategories() {
  const featuredCats = categories.slice(0, 4);
  return (
    <section className="shell py-20">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="eyebrow">Shop by category</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Four things, done properly</h2>
        </div>
        <Link to="/collections" className="link-underline hidden text-sm md:inline-block">
          All collections
        </Link>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {featuredCats.map((c) => (
          <Link
            key={c.id}
            to="/shop"
            search={{ category: c.id }}
            className="media-zoom group relative block overflow-hidden rounded-3xl bg-surface"
          >
            <div className="aspect-3/4">
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-6 pt-16">
              <h3 className="text-2xl text-primary-foreground">{c.name}</h3>
              <p className="mt-1 text-xs text-primary-foreground/75">{c.blurb}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-primary-foreground">
                Shop now
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function BestSellersSection() {
  return (
    <section className="shell py-20">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="eyebrow">Most loved</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Best sellers</h2>
        </div>
        <Link to="/shop" search={{ tag: "bestseller" }} className="link-underline text-sm">
          View all
        </Link>
      </div>
      <ProductGrid products={bestSellers.slice(0, 8)} className="mt-12" />
    </section>
  );
}

function PromoBanner() {
  return (
    <section className="shell py-10">
      <div className="grid overflow-hidden rounded-3xl bg-surface lg:grid-cols-2">
        <div className="order-2 flex flex-col justify-center px-8 py-14 md:px-16 lg:order-1">
          <p className="eyebrow">The Cashmere Edit</p>
          <h2 className="mt-4 text-balance text-4xl md:text-5xl">
            Six-ply cashmere, knitted to last a lifetime.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            We buy the longest fibres of the season from a single Mongolian cooperative, then knit
            slowly on 7-gauge machines. Heavier, denser, and warmer than anything at this price.
          </p>
          <div className="mt-8">
            <Button size="lg" variant="accent" asChild>
              <Link to="/shop" search={{ category: "knitwear" }}>
                Shop the edit
              </Link>
            </Button>
          </div>
        </div>
        <div className="order-1 media-zoom lg:order-2">
          <img
            src={promo}
            alt="Stacked cashmere knitwear in cream and cocoa"
            loading="lazy"
            width={1600}
            height={1104}
            className="h-full min-h-[320px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function NewArrivalsCarousel() {
  return (
    <section className="py-20">
      <div className="shell flex items-end justify-between gap-6">
        <div>
          <p className="eyebrow">Just landed</p>
          <h2 className="mt-3 text-4xl md:text-5xl">New arrivals</h2>
        </div>
        <Link to="/shop" search={{ tag: "new" }} className="link-underline text-sm">
          View all
        </Link>
      </div>
      <div className="shell no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
        {newArrivals.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            className="w-[68vw] shrink-0 snap-start sm:w-[40vw] lg:w-[22vw]"
          />
        ))}
      </div>
    </section>
  );
}

const perks = [
  {
    Icon: Truck,
    title: "Free shipping over $250",
    copy: "Carbon-neutral delivery, 2–4 days worldwide.",
  },
  { Icon: ShieldCheck, title: "Secure checkout", copy: "Encrypted payments, no stored card data." },
  { Icon: RefreshCcw, title: "30-day easy returns", copy: "Prepaid label in your inbox in minutes." },
  { Icon: Headphones, title: "Real people", copy: "Studio-based support, replies within hours." },
];

function WhyChooseUs() {
  return (
    <section className="shell py-10">
      <div className="grid gap-10 rounded-3xl border px-8 py-12 md:grid-cols-2 md:px-14 lg:grid-cols-4">
        {perks.map(({ Icon, title, copy }) => (
          <div key={title}>
            <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} aria-hidden="true" />
            <h3 className="mt-4 font-sans text-sm font-medium">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const gallery = [lifestyle1, catKnitwear, pDress, catBags, catFootwear, pLoafer];

function SocialGallery() {
  return (
    <section className="shell pb-24">
      <div className="text-center">
        <p className="eyebrow">@ateliernord</p>
        <h2 className="mt-3 text-4xl md:text-5xl">Worn by you</h2>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {gallery.map((src, i) => (
          <a
            key={i}
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer noopener"
            className="media-zoom group relative block overflow-hidden rounded-2xl bg-surface"
          >
            <img
              src={src}
              alt="Customer wearing Atelier Nord"
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-square h-full w-full object-cover"
            />
            <span className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/10" />
          </a>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button variant="outline" size="lg" asChild>
          <a href="https://instagram.com" target="_blank" rel="noreferrer noopener">
            Follow us on Instagram
          </a>
        </Button>
      </div>
    </section>
  );
}
