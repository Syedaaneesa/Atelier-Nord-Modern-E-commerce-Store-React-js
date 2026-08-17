import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { categories, popularSearches, searchProducts } from "@/lib/products";
import { formatPrice } from "@/lib/format";
import { useStore } from "@/lib/store";

export function SearchModal() {
  const { searchOpen, setSearchOpen, recentSearches, pushSearch, clearSearches } = useStore();
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchOpen) setTerm("");
  }, [searchOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setSearchOpen]);

  const results = useMemo(() => searchProducts(term, 6), [term]);
  const categoryHits = useMemo(
    () =>
      term.trim()
        ? categories.filter((c) => c.name.toLowerCase().includes(term.trim().toLowerCase()))
        : [],
    [term],
  );

  const close = () => setSearchOpen(false);

  const submit = (value: string) => {
    if (!value.trim()) return;
    pushSearch(value);
    close();
    navigate({ to: "/shop", search: { q: value } });
  };

  return (
    <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
      <DialogContent
        className="top-0 max-w-full translate-y-0 gap-0 rounded-none border-0 border-b p-0 sm:max-w-full"
      >
        <DialogTitle className="sr-only">Search products</DialogTitle>
        <div className="shell">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit(term);
            }}
            className="flex items-center gap-3 py-5"
          >
            <Search className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
            <Input
              autoFocus
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Search for coats, cashmere, leather…"
              aria-label="Search products"
              className="h-12 border-0 bg-transparent px-0 text-base shadow-none focus-visible:ring-0"
            />
          </form>

          <div className="max-h-[70vh] overflow-y-auto pb-10">
            {!term.trim() ? (
              <div className="grid gap-8 pb-4 sm:grid-cols-2">
                <div>
                  <div className="flex items-center justify-between">
                    <p className="eyebrow">Recent searches</p>
                    {recentSearches.length > 0 && (
                      <button
                        type="button"
                        onClick={clearSearches}
                        className="text-xs text-muted-foreground hover:text-foreground"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {recentSearches.length === 0 && (
                      <p className="text-sm text-muted-foreground">Nothing yet.</p>
                    )}
                    {recentSearches.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => submit(s)}
                        className="rounded-full border px-3 py-1.5 text-xs transition-colors hover:bg-secondary"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="eyebrow">Popular right now</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {popularSearches.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => submit(s)}
                        className="rounded-full border px-3 py-1.5 text-xs transition-colors hover:bg-secondary"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : results.length === 0 && categoryHits.length === 0 ? (
              <div className="py-12 text-center">
                <p className="font-display text-2xl">No matches for “{term}”</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Try a material, a colour, or browse the full collection.
                </p>
                <Link
                  to="/shop"
                  onClick={close}
                  className="link-underline mt-4 inline-block text-sm"
                >
                  Shop everything
                </Link>
              </div>
            ) : (
              <div className="grid gap-8 pb-4 lg:grid-cols-[2fr_1fr]">
                <div>
                  <p className="eyebrow">Products</p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {results.map((p) => (
                      <li key={p.id}>
                        <Link
                          to="/product/$slug"
                          params={{ slug: p.slug }}
                          onClick={() => {
                            pushSearch(term);
                            close();
                          }}
                          className="flex items-center gap-4 rounded-2xl p-2 transition-colors hover:bg-surface"
                        >
                          <img
                            src={p.images[0]}
                            alt={p.name}
                            loading="lazy"
                            width={1024}
                            height={1280}
                            className="h-16 w-14 rounded-lg object-cover"
                          />
                          <span className="min-w-0">
                            <span className="block truncate text-sm font-medium">{p.name}</span>
                            <span className="text-xs text-muted-foreground">
                              {formatPrice(p.price, p.currency)}
                            </span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="eyebrow">Categories</p>
                  <ul className="mt-4 flex flex-col gap-2 text-sm">
                    {(categoryHits.length ? categoryHits : categories.slice(0, 4)).map((c) => (
                      <li key={c.id}>
                        <Link
                          to="/shop"
                          search={{ category: c.id }}
                          onClick={close}
                          className="link-underline"
                        >
                          {c.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
