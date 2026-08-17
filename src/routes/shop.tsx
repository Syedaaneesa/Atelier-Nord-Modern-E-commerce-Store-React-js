import { useEffect, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProductGrid } from "@/components/store/ProductGrid";
import {
  allColors,
  allSizes,
  categories,
  filterProducts,
  priceBounds,
  searchProducts,
  sortOptions,
  type CategoryId,
  type SortKey,
} from "@/lib/products";
import { formatPrice } from "@/lib/format";

type ShopSearch = {
  q?: string | undefined;
  category?: CategoryId | undefined;
  tag?: "new" | "bestseller" | "sale" | undefined;
  sort?: SortKey | undefined;
};

const collectionCopy: Record<string, { title: string; blurb: string }> = {
  new: {
    title: "New Arrivals",
    blurb: "The latest additions to the permanent collection, in limited first runs.",
  },
  bestseller: {
    title: "Best Sellers",
    blurb: "The pieces our customers replace, gift, and come back for.",
  },
  sale: { title: "Sale", blurb: "Final runs of past-season colours, while sizes last." },
};

export const Route = createFileRoute("/shop")({
  validateSearch: (search: Record<string, unknown>): ShopSearch => ({
    q: typeof search["q"] === "string" ? (search["q"] as string) : undefined,
    category: categories.some((c) => c.id === search["category"])
      ? (search["category"] as CategoryId)
      : undefined,
    tag:
      search["tag"] === "new" || search["tag"] === "bestseller" || search["tag"] === "sale"
        ? (search["tag"] as "new" | "bestseller" | "sale")
        : undefined,
    sort: sortOptions.some((s) => s.value === search["sort"])
      ? (search["sort"] as SortKey)
      : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Shop All - Atelier Nord" },
      {
        name: "description",
        content:
          "Browse every Atelier Nord piece: wool outerwear, cashmere knitwear, leather goods, footwear and tailoring. Filter by size, colour and price.",
      },
      { property: "og:title", content: "Shop All - Atelier Nord" },
      {
        property: "og:description",
        content: "Filter the full Atelier Nord collection by category, size, colour and price.",
      },
      { property: "og:url", content: "/shop" },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  component: ShopPage,
});

const PAGE_SIZE = 8;

function ShopPage() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  const [colors, setColors] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(priceBounds.max);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(true);

  // Simulated fetch latency so loading skeletons are exercised like a real store.
  useEffect(() => {
    setLoading(true);
    setVisible(PAGE_SIZE);
    const t = setTimeout(() => setLoading(false), 350);
    return () => clearTimeout(t);
  }, [search.q, search.category, search.tag, search.sort, colors, sizes, maxPrice, inStockOnly]);

  const base = search.q
    ? searchProducts(search.q, 100)
    : filterProducts({
        categories: search.category ? [search.category] : undefined,
        tag: search.tag,
        sort: search.sort,
        colors: colors.length ? colors : undefined,
        sizes: sizes.length ? sizes : undefined,
        maxPrice,
        inStockOnly,
      });

  const heading = search.q
    ? { title: `Results for “${search.q}”`, blurb: "Refine below or clear your search." }
    : search.category
      ? {
          title: categories.find((c) => c.id === search.category)!.name,
          blurb: categories.find((c) => c.id === search.category)!.blurb,
        }
      : search.tag
        ? (collectionCopy[search.tag] ?? { title: "Shop", blurb: "" })
        : {
            title: "All Products",
            blurb: "Every piece we make, in one place. Small runs, restocked rarely.",
          };

  const toggle = (list: string[], value: string, set: (v: string[]) => void) =>
    set(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);

  const activeFilters = colors.length + sizes.length + (inStockOnly ? 1 : 0);

  const resetFilters = () => {
    setColors([]);
    setSizes([]);
    setInStockOnly(false);
    setMaxPrice(priceBounds.max);
  };

  const filters = (
    <div className="flex flex-col gap-8">
      <FilterBlock title="Category">
        <div className="flex flex-col gap-2">
          <Link
            to="/shop"
            search={{ sort: search.sort }}
            className={`text-left text-sm transition-colors hover:text-foreground ${!search.category ? "text-foreground" : "text-muted-foreground"}`}
          >
            All products
          </Link>
          {categories.map((c) => (
            <Link
              key={c.id}
              to="/shop"
              search={{ category: c.id, sort: search.sort }}
              className={`text-left text-sm transition-colors hover:text-foreground ${search.category === c.id ? "text-foreground" : "text-muted-foreground"}`}
            >
              {c.name}
            </Link>
          ))}
        </div>
      </FilterBlock>

      <FilterBlock title={`Price up to ${formatPrice(maxPrice)}`}>
        <Slider
          value={[maxPrice]}
          min={priceBounds.min}
          max={priceBounds.max}
          step={1000}
          onValueChange={([v]) => setMaxPrice(v ?? priceBounds.max)}
          aria-label="Maximum price"
        />
      </FilterBlock>

      <FilterBlock title="Colour">
        <div className="flex flex-wrap gap-2">
          {allColors.map((c) => {
            const active = colors.includes(c.name);
            return (
              <button
                key={c.name}
                type="button"
                onClick={() => toggle(colors, c.name, setColors)}
                aria-pressed={active}
                className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs transition-colors ${active ? "border-foreground bg-secondary" : "hover:bg-secondary"}`}
              >
                <span
                  className="h-3 w-3 rounded-full border"
                  style={{ backgroundColor: c.hex }}
                  aria-hidden="true"
                />
                {c.name}
              </button>
            );
          })}
        </div>
      </FilterBlock>

      <FilterBlock title="Size">
        <div className="flex flex-wrap gap-2">
          {allSizes.map((s) => {
            const active = sizes.includes(s);
            return (
              <button
                key={s}
                type="button"
                onClick={() => toggle(sizes, s, setSizes)}
                aria-pressed={active}
                className={`min-w-11 rounded-full border px-3 py-1.5 text-xs transition-colors ${active ? "border-foreground bg-secondary" : "hover:bg-secondary"}`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </FilterBlock>

      <FilterBlock title="Availability">
        <div className="flex items-center gap-2">
          <Checkbox
            id="in-stock"
            checked={inStockOnly}
            onCheckedChange={(v) => setInStockOnly(Boolean(v))}
          />
          <Label htmlFor="in-stock" className="text-sm font-normal">
            In stock only
          </Label>
        </div>
      </FilterBlock>

      {activeFilters > 0 && (
        <Button variant="outline" size="sm" onClick={resetFilters} className="w-fit">
          <X /> Clear filters ({activeFilters})
        </Button>
      )}
    </div>
  );

  return (
    <div className="shell py-12">
      <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
        <Link to="/" className="link-underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{heading.title}</span>
      </nav>

      <header className="mt-6 max-w-2xl">
        <h1 className="text-4xl md:text-5xl">{heading.title}</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{heading.blurb}</p>
      </header>

      <div className="mt-10 flex items-center justify-between gap-4 border-y py-4">
        <p className="text-xs text-muted-foreground">
          {loading ? "Loading…" : `${base.length} product${base.length === 1 ? "" : "s"}`}
        </p>
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="lg:hidden">
                <SlidersHorizontal /> Filters
                {activeFilters > 0 && ` (${activeFilters})`}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[88vw] max-w-sm overflow-y-auto">
              <SheetTitle className="font-display text-xl">Filters</SheetTitle>
              <div className="mt-8">{filters}</div>
            </SheetContent>
          </Sheet>

          <Select
            value={search.sort ?? "featured"}
            onValueChange={(value) =>
              navigate({ search: (prev) => ({ ...prev, sort: value as SortKey }) })
            }
          >
            <SelectTrigger className="h-9 w-[190px] rounded-full text-xs" aria-label="Sort products">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((o) => (
                <SelectItem key={o.value} value={o.value}>
                  {o.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-10 grid gap-12 lg:grid-cols-[240px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-28">{filters}</div>
        </aside>

        <div>
          {!loading && base.length === 0 ? (
            <div className="rounded-3xl border border-dashed py-20 text-center">
              <p className="font-display text-2xl">Nothing matches those filters</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Try widening your price range or clearing a size.
              </p>
              <Button variant="outline" className="mt-6" onClick={resetFilters}>
                Clear filters
              </Button>
            </div>
          ) : (
            <>
              <ProductGrid products={base.slice(0, visible)} loading={loading} />
              {!loading && visible < base.length && (
                <div className="mt-14 flex flex-col items-center gap-3">
                  <p className="text-xs text-muted-foreground">
                    Showing {Math.min(visible, base.length)} of {base.length}
                  </p>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setVisible((v) => v + PAGE_SIZE)}
                  >
                    Load more
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function FilterBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow">{title}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
}
