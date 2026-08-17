import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { categories, filterProducts } from "@/lib/products";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections - Atelier Nord" },
      {
        name: "description",
        content:
          "Explore Atelier Nord collections: outerwear, knitwear, leather goods, footwear, shirting, tailoring, dresses and accessories.",
      },
      { property: "og:title", content: "Collections - Atelier Nord" },
      {
        property: "og:description",
        content: "Eight collections, each made in small runs with a single workshop.",
      },
      { property: "og:url", content: "/collections" },
    ],
    links: [{ rel: "canonical", href: "/collections" }],
  }),
  component: CollectionsPage,
});

function CollectionsPage() {
  return (
    <div className="shell py-14">
      <header className="max-w-2xl">
        <p className="eyebrow">Collections</p>
        <h1 className="mt-4 text-5xl md:text-6xl">Eight edits, one wardrobe</h1>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          Each collection is developed with a single mill or workshop, then produced in runs small
          enough that we know every batch by name.
        </p>
      </header>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c, i) => {
          const count = filterProducts({ categories: [c.id] }).length;
          return (
            <Link
              key={c.id}
              to="/shop"
              search={{ category: c.id }}
              className={`media-zoom group relative block overflow-hidden rounded-3xl bg-surface ${i === 0 ? "sm:col-span-2 sm:row-span-1" : ""}`}
            >
              <div className={i === 0 ? "aspect-16/10" : "aspect-4/5"}>
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/75 to-transparent p-7 pt-20">
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-primary-foreground/70">
                  {count} pieces
                </p>
                <h2 className="mt-2 text-3xl text-primary-foreground">{c.name}</h2>
                <p className="mt-1 text-xs text-primary-foreground/75">{c.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-primary-foreground">
                  Shop now
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
