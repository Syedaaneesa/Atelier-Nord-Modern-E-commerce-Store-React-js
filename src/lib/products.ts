/**
 * Mock catalog layer.
 *
 * Everything the storefront renders goes through the async functions at the
 * bottom of this file (getProducts / getProduct / searchProducts). Swapping in
 * the Shopify Storefront API, Medusa, or Saleor later means replacing those
 * implementations only - no component changes.
 */
import catOuterwear from "@/assets/cat-outerwear.jpg";
import catKnitwear from "@/assets/cat-knitwear.jpg";
import catBags from "@/assets/cat-bags.jpg";
import catFootwear from "@/assets/cat-footwear.jpg";
import promo from "@/assets/promo.jpg";
import lifestyle1 from "@/assets/lifestyle-1.jpg";
import pShirt from "@/assets/p-shirt.jpg";
import pTrouser from "@/assets/p-trouser.jpg";
import pScarf from "@/assets/p-scarf.jpg";
import pDress from "@/assets/p-dress.jpg";
import pBlazer from "@/assets/p-blazer.jpg";
import pLoafer from "@/assets/p-loafer.jpg";
import pCrossbody from "@/assets/p-crossbody.jpg";

export type ColorOption = { name: string; hex: string };

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  details: string[];
  /** Price in minor units (cents). */
  price: number;
  compareAtPrice?: number;
  currency: string;
  images: string[];
  category: CategoryId;
  colors: ColorOption[];
  sizes: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  lowStock?: boolean;
  tags: string[];
  featured?: boolean;
  bestseller?: boolean;
  isNew?: boolean;
};

export type CategoryId =
  | "outerwear"
  | "knitwear"
  | "shirts"
  | "trousers"
  | "dresses"
  | "bags"
  | "footwear"
  | "accessories";

export const categories: {
  id: CategoryId;
  name: string;
  blurb: string;
  image: string;
}[] = [
  {
    id: "outerwear",
    name: "Outerwear",
    blurb: "Coats cut from Italian wool",
    image: catOuterwear,
  },
  {
    id: "knitwear",
    name: "Knitwear",
    blurb: "Grade-A cashmere and merino",
    image: catKnitwear,
  },
  { id: "bags", name: "Leather Goods", blurb: "Vegetable-tanned, made to age", image: catBags },
  { id: "footwear", name: "Footwear", blurb: "Hand-welted in Alicante", image: catFootwear },
  { id: "shirts", name: "Shirts", blurb: "Japanese poplin and linen", image: pShirt },
  { id: "trousers", name: "Trousers", blurb: "Softly tailored, easy lines", image: pTrouser },
  { id: "dresses", name: "Dresses", blurb: "Fluid silk, quiet shape", image: pDress },
  { id: "accessories", name: "Accessories", blurb: "The finishing detail", image: pScarf },
];

const NEUTRALS: ColorOption[] = [
  { name: "Camel", hex: "#b9895c" },
  { name: "Ivory", hex: "#f2ece1" },
  { name: "Espresso", hex: "#3b2a20" },
];

const APPAREL_SIZES = ["XS", "S", "M", "L", "XL"];
const SHOE_SIZES = ["36", "37", "38", "39", "40", "41", "42"];

export const products: Product[] = [
  {
    id: "1",
    name: "Nord Camel Wool Overcoat",
    slug: "nord-camel-wool-overcoat",
    description:
      "A full-length overcoat in double-faced Italian wool, cut generously through the shoulder and finished with a self belt. Unlined for a fluid drape that softens with wear.",
    details: [
      "88% virgin wool, 12% cashmere",
      "Double-faced, hand-finished edges",
      "Woven in Biella, Italy",
      "Model is 178cm wearing size S",
    ],
    price: 68000,
    compareAtPrice: 89000,
    currency: "USD",
    images: [catOuterwear, promo, lifestyle1],
    category: "outerwear",
    colors: NEUTRALS,
    sizes: APPAREL_SIZES,
    rating: 4.9,
    reviewCount: 214,
    inStock: true,
    tags: ["coat", "wool", "winter"],
    featured: true,
    bestseller: true,
  },
  {
    id: "2",
    name: "Oversized Wool Blazer",
    slug: "oversized-wool-blazer",
    description:
      "A single-button blazer with a relaxed, slightly dropped shoulder. Tailored in a dry-handle wool crepe that holds its line all day.",
    details: ["100% wool crepe", "Single button, patch pockets", "Half-lined in cupro"],
    price: 42000,
    currency: "USD",
    images: [pBlazer, catOuterwear],
    category: "outerwear",
    colors: [
      { name: "Black", hex: "#1b1b1b" },
      { name: "Stone", hex: "#cfc5b4" },
    ],
    sizes: APPAREL_SIZES,
    rating: 4.7,
    reviewCount: 96,
    inStock: true,
    tags: ["blazer", "tailoring"],
    bestseller: true,
  },
  {
    id: "3",
    name: "Ribbed Cashmere Turtleneck",
    slug: "ribbed-cashmere-turtleneck",
    description:
      "Chunky 7-gauge rib knitted from Inner Mongolian cashmere. Roomy in the body, close at the cuff, warm enough to wear as a layer of one.",
    details: ["100% grade-A cashmere", "7-gauge rib", "Hand-linked collar"],
    price: 31000,
    compareAtPrice: 38000,
    currency: "USD",
    images: [catKnitwear, promo],
    category: "knitwear",
    colors: [
      { name: "Ivory", hex: "#f2ece1" },
      { name: "Oat", hex: "#ddceb6" },
      { name: "Espresso", hex: "#3b2a20" },
    ],
    sizes: APPAREL_SIZES,
    rating: 4.8,
    reviewCount: 341,
    inStock: true,
    tags: ["cashmere", "sweater"],
    featured: true,
    bestseller: true,
  },
  {
    id: "4",
    name: "Merino Crewneck Sweater",
    slug: "merino-crewneck-sweater",
    description:
      "An everyday crewneck in extra-fine merino, finished with a tubular neckline that keeps its shape wash after wash.",
    details: ["100% extra-fine merino", "Machine washable", "Tubular neck and cuffs"],
    price: 16500,
    currency: "USD",
    images: [promo, catKnitwear],
    category: "knitwear",
    colors: NEUTRALS,
    sizes: APPAREL_SIZES,
    rating: 4.6,
    reviewCount: 128,
    inStock: true,
    tags: ["merino", "sweater"],
    isNew: true,
  },
  {
    id: "5",
    name: "Featherweight Cashmere Scarf",
    slug: "featherweight-cashmere-scarf",
    description:
      "Woven on vintage looms in Scotland, then brushed twice for a cloud-soft hand. 200cm long, so it wraps twice with room to spare.",
    details: ["100% cashmere", "200 x 70cm", "Woven in Hawick, Scotland"],
    price: 14500,
    compareAtPrice: 19000,
    currency: "USD",
    images: [pScarf],
    category: "accessories",
    colors: [
      { name: "Oat", hex: "#e6cdae" },
      { name: "Charcoal", hex: "#3a3a38" },
    ],
    sizes: ["One size"],
    rating: 4.9,
    reviewCount: 187,
    inStock: true,
    tags: ["scarf", "cashmere", "gift"],
    bestseller: true,
  },
  {
    id: "6",
    name: "Oversized Poplin Shirt",
    slug: "oversized-poplin-shirt",
    description:
      "Cut wide and boxy in a dense Japanese poplin with a dry, papery finish that breaks in beautifully.",
    details: ["100% Japanese cotton poplin", "Mother-of-pearl buttons", "Drop shoulder"],
    price: 12500,
    currency: "USD",
    images: [pShirt, lifestyle1],
    category: "shirts",
    colors: [
      { name: "Optic White", hex: "#f7f5f0" },
      { name: "Sky", hex: "#c7d4de" },
    ],
    sizes: APPAREL_SIZES,
    rating: 4.5,
    reviewCount: 74,
    inStock: true,
    tags: ["shirt", "cotton"],
    isNew: true,
    featured: true,
  },
  {
    id: "7",
    name: "Pleated Wool Trousers",
    slug: "pleated-wool-trousers",
    description:
      "A high-rise trouser with a single forward pleat and a wide, straight leg that falls clean from the hip.",
    details: ["98% wool, 2% elastane", "High rise, wide leg", "Hook-and-bar closure"],
    price: 21500,
    compareAtPrice: 26000,
    currency: "USD",
    images: [pTrouser],
    category: "trousers",
    colors: [
      { name: "Espresso", hex: "#3b2a20" },
      { name: "Black", hex: "#1b1b1b" },
    ],
    sizes: APPAREL_SIZES,
    rating: 4.7,
    reviewCount: 152,
    inStock: true,
    lowStock: true,
    tags: ["trousers", "wool"],
    bestseller: true,
  },
  {
    id: "8",
    name: "Bias Silk Slip Dress",
    slug: "bias-silk-slip-dress",
    description:
      "Cut on the bias from 22-momme sand-washed silk so it skims rather than clings. Adjustable straps, side slit.",
    details: ["100% mulberry silk, 22 momme", "Bias cut", "Dry clean"],
    price: 29500,
    currency: "USD",
    images: [pDress],
    category: "dresses",
    colors: [
      { name: "Sand", hex: "#e2c9a0" },
      { name: "Black", hex: "#1b1b1b" },
    ],
    sizes: APPAREL_SIZES,
    rating: 4.8,
    reviewCount: 118,
    inStock: true,
    tags: ["dress", "silk", "occasion"],
    isNew: true,
    featured: true,
  },
  {
    id: "9",
    name: "Structured Leather Tote",
    slug: "structured-leather-tote",
    description:
      "A clean-lined tote in vegetable-tanned calf leather with an unlined interior that patinas with use. Fits a 15-inch laptop.",
    details: ["Vegetable-tanned calf leather", "Unlined, edge-painted", "35 x 30 x 12cm"],
    price: 49500,
    compareAtPrice: 58000,
    currency: "USD",
    images: [catBags, pCrossbody],
    category: "bags",
    colors: [
      { name: "Tan", hex: "#b06a34" },
      { name: "Black", hex: "#1b1b1b" },
    ],
    sizes: ["One size"],
    rating: 4.9,
    reviewCount: 263,
    inStock: true,
    tags: ["bag", "leather", "work"],
    featured: true,
    bestseller: true,
  },
  {
    id: "10",
    name: "Quilted Crossbody Bag",
    slug: "quilted-crossbody-bag",
    description:
      "A small evening shape in quilted lambskin with a convertible chain-and-leather strap.",
    details: ["Quilted lambskin", "Convertible strap", "22 x 15 x 6cm"],
    price: 34500,
    currency: "USD",
    images: [pCrossbody, catBags],
    category: "bags",
    colors: [
      { name: "Cream", hex: "#efe3cf" },
      { name: "Espresso", hex: "#3b2a20" },
    ],
    sizes: ["One size"],
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
    tags: ["bag", "evening"],
    isNew: true,
  },
  {
    id: "11",
    name: "Leather Chelsea Boots",
    slug: "leather-chelsea-boots",
    description:
      "Hand-welted Chelsea boots on a slim leather sole, with elasticated gores that soften to your foot within a week.",
    details: ["Full-grain calf leather", "Blake-stitched leather sole", "Resoleable"],
    price: 44500,
    currency: "USD",
    images: [catFootwear, pLoafer],
    category: "footwear",
    colors: [
      { name: "Chestnut", hex: "#8a4f2c" },
      { name: "Black", hex: "#1b1b1b" },
    ],
    sizes: SHOE_SIZES,
    rating: 4.8,
    reviewCount: 176,
    inStock: true,
    tags: ["boots", "leather"],
    bestseller: true,
  },
  {
    id: "12",
    name: "Hand-Stitched Penny Loafers",
    slug: "hand-stitched-penny-loafers",
    description: "A softly constructed loafer with a hand-stitched apron and unlined vamp.",
    details: ["Nappa calf leather", "Hand-stitched apron", "Flexible rubber heel"],
    price: 36500,
    compareAtPrice: 42000,
    currency: "USD",
    images: [pLoafer, catFootwear],
    category: "footwear",
    colors: [
      { name: "Cognac", hex: "#c0783c" },
      { name: "Espresso", hex: "#3b2a20" },
    ],
    sizes: SHOE_SIZES,
    rating: 4.7,
    reviewCount: 143,
    inStock: true,
    tags: ["loafers", "leather"],
    featured: true,
  },
  {
    id: "13",
    name: "Relaxed Linen Shirt",
    slug: "relaxed-linen-shirt",
    description:
      "Washed European linen, cut roomy with a camp collar. Made to be worn open over a tank.",
    details: ["100% washed European linen", "Camp collar", "Garment dyed"],
    price: 11500,
    currency: "USD",
    images: [pShirt, lifestyle1],
    category: "shirts",
    colors: [
      { name: "Ivory", hex: "#f2ece1" },
      { name: "Clay", hex: "#b9724d" },
    ],
    sizes: APPAREL_SIZES,
    rating: 4.4,
    reviewCount: 61,
    inStock: false,
    tags: ["shirt", "linen", "summer"],
  },
  {
    id: "14",
    name: "Alpaca Boxy Cardigan",
    slug: "alpaca-boxy-cardigan",
    description:
      "A brushed alpaca-blend cardigan with horn buttons and a square, cropped body. Halo-soft and lighter than it looks.",
    details: ["62% alpaca, 38% wool", "Horn buttons", "Brushed twice"],
    price: 27500,
    currency: "USD",
    images: [promo, catKnitwear],
    category: "knitwear",
    colors: [
      { name: "Ivory", hex: "#f2ece1" },
      { name: "Cocoa", hex: "#7a4f34" },
    ],
    sizes: APPAREL_SIZES,
    rating: 4.7,
    reviewCount: 104,
    inStock: true,
    tags: ["cardigan", "alpaca"],
    isNew: true,
  },
  {
    id: "15",
    name: "Tailored Wide-Leg Pant",
    slug: "tailored-wide-leg-pant",
    description:
      "A fluid, floor-grazing pant in a matte tencel-wool blend. Elastic back waist, tailored front.",
    details: ["54% tencel, 46% wool", "Half-elastic waist", "Unhemmed option available"],
    price: 18500,
    currency: "USD",
    images: [pTrouser, lifestyle1],
    category: "trousers",
    colors: [
      { name: "Stone", hex: "#cfc5b4" },
      { name: "Black", hex: "#1b1b1b" },
    ],
    sizes: APPAREL_SIZES,
    rating: 4.5,
    reviewCount: 83,
    inStock: true,
    tags: ["trousers", "everyday"],
  },
  {
    id: "16",
    name: "Suede Ankle Boot",
    slug: "suede-ankle-boot",
    description: "A stacked-heel ankle boot in Italian suede with a squared, softened toe.",
    details: ["Italian calf suede", "45mm stacked heel", "Leather lining"],
    price: 39500,
    compareAtPrice: 46000,
    currency: "USD",
    images: [catFootwear, pLoafer],
    category: "footwear",
    colors: [
      { name: "Taupe", hex: "#a68d75" },
      { name: "Black", hex: "#1b1b1b" },
    ],
    sizes: SHOE_SIZES,
    rating: 4.6,
    reviewCount: 67,
    inStock: true,
    lowStock: true,
    tags: ["boots", "suede"],
    isNew: true,
  },
];

/* ------------------------------------------------------------------ */
/* Catalog API - replace these bodies to connect a real backend.      */
/* ------------------------------------------------------------------ */

export type ProductQuery = {
  categories?: CategoryId[] | undefined;
  colors?: string[] | undefined;
  sizes?: string[] | undefined;
  maxPrice?: number | undefined;
  inStockOnly?: boolean | undefined;
  tag?: "new" | "bestseller" | "sale" | undefined;
  sort?: SortKey | undefined;
};

export type SortKey = "featured" | "price-asc" | "price-desc" | "rating" | "newest";

export const sortOptions: { value: SortKey; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "rating", label: "Top rated" },
];

export const allColors = Array.from(
  new Map(products.flatMap((p) => p.colors).map((c) => [c.name, c])).values(),
);

export const allSizes = Array.from(new Set(products.flatMap((p) => p.sizes)));

export const priceBounds = {
  min: Math.min(...products.map((p) => p.price)),
  max: Math.max(...products.map((p) => p.price)),
};

export function filterProducts(query: ProductQuery = {}): Product[] {
  let list = [...products];
  if (query.categories?.length) list = list.filter((p) => query.categories!.includes(p.category));
  if (query.colors?.length)
    list = list.filter((p) => p.colors.some((c) => query.colors!.includes(c.name)));
  if (query.sizes?.length) list = list.filter((p) => p.sizes.some((s) => query.sizes!.includes(s)));
  if (query.maxPrice) list = list.filter((p) => p.price <= query.maxPrice!);
  if (query.inStockOnly) list = list.filter((p) => p.inStock);
  if (query.tag === "new") list = list.filter((p) => p.isNew);
  if (query.tag === "bestseller") list = list.filter((p) => p.bestseller);
  if (query.tag === "sale") list = list.filter((p) => p.compareAtPrice);

  switch (query.sort) {
    case "price-asc":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      list.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      list.sort((a, b) => b.rating - a.rating);
      break;
    case "newest":
      list.sort((a, b) => Number(!!b.isNew) - Number(!!a.isNew));
      break;
    default:
      list.sort(
        (a, b) =>
          Number(!!b.featured) - Number(!!a.featured) || Number(!!b.bestseller) - Number(!!a.bestseller),
      );
  }
  return list;
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelated(product: Product, limit = 4): Product[] {
  const sameCategory = products.filter(
    (p) => p.id !== product.id && p.category === product.category,
  );
  const filler = products.filter((p) => p.id !== product.id && p.category !== product.category);
  return [...sameCategory, ...filler].slice(0, limit);
}

export function searchProducts(term: string, limit = 6): Product[] {
  const q = term.trim().toLowerCase();
  if (!q) return [];
  return products
    .filter((p) =>
      [p.name, p.description, p.category, ...p.tags].join(" ").toLowerCase().includes(q),
    )
    .slice(0, limit);
}

export const bestSellers = products.filter((p) => p.bestseller);
export const newArrivals = products.filter((p) => p.isNew);
export const featured = products.filter((p) => p.featured);

export const popularSearches = ["Cashmere", "Overcoat", "Leather tote", "Loafers", "Silk dress"];
