import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { toast } from "sonner";
import { getProductById, type Product } from "./products";

export type CartLine = {
  id: string;
  productId: string;
  color: string;
  size: string;
  quantity: number;
};

export const FREE_SHIPPING_THRESHOLD = 25000;
export const SHIPPING_FLAT = 1200;
export const TAX_RATE = 0.08;

type StoreState = {
  lines: CartLine[];
  wishlist: string[];
  recentlyViewed: string[];
  recentSearches: string[];
  cartOpen: boolean;
  searchOpen: boolean;
  discountCode: string | null;
};

type StoreValue = StoreState & {
  addLine: (product: Product, opts?: { color?: string; size?: string; quantity?: number }) => void;
  updateQuantity: (lineId: string, quantity: number) => void;
  removeLine: (lineId: string) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  markViewed: (productId: string) => void;
  pushSearch: (term: string) => void;
  clearSearches: () => void;
  setCartOpen: (open: boolean) => void;
  setSearchOpen: (open: boolean) => void;
  applyDiscount: (code: string) => boolean;
  removeDiscount: () => void;
  detailedLines: { line: CartLine; product: Product }[];
  itemCount: number;
  subtotal: number;
  discountAmount: number;
  shipping: number;
  tax: number;
  total: number;
  currency: string;
};

const STORAGE_KEY = "atelier-nord-store";
const DISCOUNTS: Record<string, number> = { WELCOME10: 0.1, NORD20: 0.2 };

const StoreContext = createContext<StoreValue | null>(null);

const initialState: StoreState = {
  lines: [],
  wishlist: [],
  recentlyViewed: [],
  recentSearches: [],
  cartOpen: false,
  searchOpen: false,
  discountCode: null,
};

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<StoreState>(initialState);

  // Hydrate from localStorage after mount to avoid SSR mismatches.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as Partial<StoreState>;
      setState((prev) => ({
        ...prev,
        lines: parsed.lines ?? [],
        wishlist: parsed.wishlist ?? [],
        recentlyViewed: parsed.recentlyViewed ?? [],
        recentSearches: parsed.recentSearches ?? [],
        discountCode: parsed.discountCode ?? null,
      }));
    } catch {
      /* ignore malformed storage */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          lines: state.lines,
          wishlist: state.wishlist,
          recentlyViewed: state.recentlyViewed,
          recentSearches: state.recentSearches,
          discountCode: state.discountCode,
        }),
      );
    } catch {
      /* storage unavailable */
    }
  }, [state.lines, state.wishlist, state.recentlyViewed, state.recentSearches, state.discountCode]);

  const addLine = useCallback<StoreValue["addLine"]>((product, opts = {}) => {
    const color = opts.color ?? product.colors[0]?.name ?? "Default";
    const size = opts.size ?? product.sizes[0] ?? "One size";
    const quantity = opts.quantity ?? 1;
    const id = `${product.id}-${color}-${size}`;
    setState((prev) => {
      const existing = prev.lines.find((l) => l.id === id);
      const lines = existing
        ? prev.lines.map((l) => (l.id === id ? { ...l, quantity: l.quantity + quantity } : l))
        : [...prev.lines, { id, productId: product.id, color, size, quantity }];
      return { ...prev, lines, cartOpen: true };
    });
    toast.success("Added to bag", { description: `${product.name} - ${color} / ${size}` });
  }, []);

  const updateQuantity = useCallback((lineId: string, quantity: number) => {
    setState((prev) => ({
      ...prev,
      lines:
        quantity <= 0
          ? prev.lines.filter((l) => l.id !== lineId)
          : prev.lines.map((l) => (l.id === lineId ? { ...l, quantity } : l)),
    }));
  }, []);

  const removeLine = useCallback((lineId: string) => {
    setState((prev) => ({ ...prev, lines: prev.lines.filter((l) => l.id !== lineId) }));
    toast("Removed from bag");
  }, []);

  const clearCart = useCallback(() => {
    setState((prev) => ({ ...prev, lines: [], discountCode: null }));
  }, []);

  const toggleWishlist = useCallback((productId: string) => {
    setState((prev) => {
      const has = prev.wishlist.includes(productId);
      toast(has ? "Removed from wishlist" : "Saved to wishlist");
      return {
        ...prev,
        wishlist: has
          ? prev.wishlist.filter((id) => id !== productId)
          : [productId, ...prev.wishlist],
      };
    });
  }, []);

  const markViewed = useCallback((productId: string) => {
    setState((prev) => ({
      ...prev,
      recentlyViewed: [productId, ...prev.recentlyViewed.filter((id) => id !== productId)].slice(
        0,
        8,
      ),
    }));
  }, []);

  const pushSearch = useCallback((term: string) => {
    const t = term.trim();
    if (!t) return;
    setState((prev) => ({
      ...prev,
      recentSearches: [t, ...prev.recentSearches.filter((s) => s !== t)].slice(0, 5),
    }));
  }, []);

  const clearSearches = useCallback(
    () => setState((prev) => ({ ...prev, recentSearches: [] })),
    [],
  );

  const setCartOpen = useCallback(
    (cartOpen: boolean) => setState((prev) => ({ ...prev, cartOpen })),
    [],
  );
  const setSearchOpen = useCallback(
    (searchOpen: boolean) => setState((prev) => ({ ...prev, searchOpen })),
    [],
  );

  const applyDiscount = useCallback((code: string) => {
    const normalized = code.trim().toUpperCase();
    if (!DISCOUNTS[normalized]) {
      toast.error("That code isn't valid", { description: "Try WELCOME10 for 10% off." });
      return false;
    }
    setState((prev) => ({ ...prev, discountCode: normalized }));
    toast.success(`${normalized} applied`);
    return true;
  }, []);

  const removeDiscount = useCallback(
    () => setState((prev) => ({ ...prev, discountCode: null })),
    [],
  );

  const detailedLines = useMemo(
    () =>
      state.lines
        .map((line) => ({ line, product: getProductById(line.productId) }))
        .filter((entry): entry is { line: CartLine; product: Product } => Boolean(entry.product)),
    [state.lines],
  );

  const subtotal = detailedLines.reduce((sum, { line, product }) => sum + product.price * line.quantity, 0);
  const itemCount = state.lines.reduce((sum, l) => sum + l.quantity, 0);
  const discountAmount = state.discountCode
    ? Math.round(subtotal * (DISCOUNTS[state.discountCode] ?? 0))
    : 0;
  const afterDiscount = subtotal - discountAmount;
  const shipping = afterDiscount === 0 || afterDiscount >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FLAT;
  const tax = Math.round(afterDiscount * TAX_RATE);
  const total = afterDiscount + shipping + tax;

  const value: StoreValue = {
    ...state,
    addLine,
    updateQuantity,
    removeLine,
    clearCart,
    toggleWishlist,
    isWishlisted: (id) => state.wishlist.includes(id),
    markViewed,
    pushSearch,
    clearSearches,
    setCartOpen,
    setSearchOpen,
    applyDiscount,
    removeDiscount,
    detailedLines,
    itemCount,
    subtotal,
    discountAmount,
    shipping,
    tax,
    total,
    currency: "USD",
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}
