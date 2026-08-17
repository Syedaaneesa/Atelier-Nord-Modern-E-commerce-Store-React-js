import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { h as Slot, v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { s as router_exports } from "./router-1yTLQKrJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lifestyle-1-CETUkgnf.js
var promo_default = "/assets/promo-t6V0KMVN.jpg";
var lifestyle_1_default = "/assets/lifestyle-1-ClFmIWCr.jpg";
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/button-BAyVxSpO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow-soft hover:bg-primary/88",
			accent: "bg-accent text-accent-foreground shadow-soft hover:brightness-110",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-transparent hover:bg-secondary",
			inverse: "border border-background/40 bg-background/10 text-background backdrop-blur-md hover:bg-background hover:text-foreground",
			secondary: "bg-secondary text-secondary-foreground hover:bg-muted",
			ghost: "hover:bg-secondary",
			link: "rounded-none text-foreground underline-offset-4 hover:underline"
		},
		size: {
			default: "h-10 px-5 py-2",
			sm: "h-9 px-4 text-xs",
			lg: "h-12 px-8 text-[0.9rem]",
			xl: "h-14 px-10 text-base",
			icon: "h-10 w-10",
			iconSm: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/products-F1LQFClu.js
var cat_outerwear_default = "/assets/cat-outerwear-D3qhst0b.jpg";
var cat_knitwear_default = "/assets/cat-knitwear-Di-eEPLw.jpg";
var cat_bags_default = "/assets/cat-bags-Ds0weuXL.jpg";
var cat_footwear_default = "/assets/cat-footwear-9KghPv_s.jpg";
var p_shirt_default = "/assets/p-shirt-DgTfop23.jpg";
var p_trouser_default = "/assets/p-trouser-DJU0Rdzi.jpg";
var p_scarf_default = "/assets/p-scarf-Bm1s7WiO.jpg";
var p_dress_default = "/assets/p-dress-CncBYY3_.jpg";
var p_blazer_default = "/assets/p-blazer-ofIG_TlM.jpg";
var p_loafer_default = "/assets/p-loafer-CHLXUml4.jpg";
var p_crossbody_default = "/assets/p-crossbody-D1renzmh.jpg";
/**
* Mock catalog layer.
*
* Everything the storefront renders goes through the async functions at the
* bottom of this file (getProducts / getProduct / searchProducts). Swapping in
* the Shopify Storefront API, Medusa, or Saleor later means replacing those
* implementations only - no component changes.
*/
var categories = [
	{
		id: "outerwear",
		name: "Outerwear",
		blurb: "Coats cut from Italian wool",
		image: cat_outerwear_default
	},
	{
		id: "knitwear",
		name: "Knitwear",
		blurb: "Grade-A cashmere and merino",
		image: cat_knitwear_default
	},
	{
		id: "bags",
		name: "Leather Goods",
		blurb: "Vegetable-tanned, made to age",
		image: cat_bags_default
	},
	{
		id: "footwear",
		name: "Footwear",
		blurb: "Hand-welted in Alicante",
		image: cat_footwear_default
	},
	{
		id: "shirts",
		name: "Shirts",
		blurb: "Japanese poplin and linen",
		image: p_shirt_default
	},
	{
		id: "trousers",
		name: "Trousers",
		blurb: "Softly tailored, easy lines",
		image: p_trouser_default
	},
	{
		id: "dresses",
		name: "Dresses",
		blurb: "Fluid silk, quiet shape",
		image: p_dress_default
	},
	{
		id: "accessories",
		name: "Accessories",
		blurb: "The finishing detail",
		image: p_scarf_default
	}
];
var NEUTRALS = [
	{
		name: "Camel",
		hex: "#b9895c"
	},
	{
		name: "Ivory",
		hex: "#f2ece1"
	},
	{
		name: "Espresso",
		hex: "#3b2a20"
	}
];
var APPAREL_SIZES = [
	"XS",
	"S",
	"M",
	"L",
	"XL"
];
var SHOE_SIZES = [
	"36",
	"37",
	"38",
	"39",
	"40",
	"41",
	"42"
];
var products = [
	{
		id: "1",
		name: "Nord Camel Wool Overcoat",
		slug: "nord-camel-wool-overcoat",
		description: "A full-length overcoat in double-faced Italian wool, cut generously through the shoulder and finished with a self belt. Unlined for a fluid drape that softens with wear.",
		details: [
			"88% virgin wool, 12% cashmere",
			"Double-faced, hand-finished edges",
			"Woven in Biella, Italy",
			"Model is 178cm wearing size S"
		],
		price: 68e3,
		compareAtPrice: 89e3,
		currency: "USD",
		images: [
			cat_outerwear_default,
			promo_default,
			lifestyle_1_default
		],
		category: "outerwear",
		colors: NEUTRALS,
		sizes: APPAREL_SIZES,
		rating: 4.9,
		reviewCount: 214,
		inStock: true,
		tags: [
			"coat",
			"wool",
			"winter"
		],
		featured: true,
		bestseller: true
	},
	{
		id: "2",
		name: "Oversized Wool Blazer",
		slug: "oversized-wool-blazer",
		description: "A single-button blazer with a relaxed, slightly dropped shoulder. Tailored in a dry-handle wool crepe that holds its line all day.",
		details: [
			"100% wool crepe",
			"Single button, patch pockets",
			"Half-lined in cupro"
		],
		price: 42e3,
		currency: "USD",
		images: [p_blazer_default, cat_outerwear_default],
		category: "outerwear",
		colors: [{
			name: "Black",
			hex: "#1b1b1b"
		}, {
			name: "Stone",
			hex: "#cfc5b4"
		}],
		sizes: APPAREL_SIZES,
		rating: 4.7,
		reviewCount: 96,
		inStock: true,
		tags: ["blazer", "tailoring"],
		bestseller: true
	},
	{
		id: "3",
		name: "Ribbed Cashmere Turtleneck",
		slug: "ribbed-cashmere-turtleneck",
		description: "Chunky 7-gauge rib knitted from Inner Mongolian cashmere. Roomy in the body, close at the cuff, warm enough to wear as a layer of one.",
		details: [
			"100% grade-A cashmere",
			"7-gauge rib",
			"Hand-linked collar"
		],
		price: 31e3,
		compareAtPrice: 38e3,
		currency: "USD",
		images: [cat_knitwear_default, promo_default],
		category: "knitwear",
		colors: [
			{
				name: "Ivory",
				hex: "#f2ece1"
			},
			{
				name: "Oat",
				hex: "#ddceb6"
			},
			{
				name: "Espresso",
				hex: "#3b2a20"
			}
		],
		sizes: APPAREL_SIZES,
		rating: 4.8,
		reviewCount: 341,
		inStock: true,
		tags: ["cashmere", "sweater"],
		featured: true,
		bestseller: true
	},
	{
		id: "4",
		name: "Merino Crewneck Sweater",
		slug: "merino-crewneck-sweater",
		description: "An everyday crewneck in extra-fine merino, finished with a tubular neckline that keeps its shape wash after wash.",
		details: [
			"100% extra-fine merino",
			"Machine washable",
			"Tubular neck and cuffs"
		],
		price: 16500,
		currency: "USD",
		images: [promo_default, cat_knitwear_default],
		category: "knitwear",
		colors: NEUTRALS,
		sizes: APPAREL_SIZES,
		rating: 4.6,
		reviewCount: 128,
		inStock: true,
		tags: ["merino", "sweater"],
		isNew: true
	},
	{
		id: "5",
		name: "Featherweight Cashmere Scarf",
		slug: "featherweight-cashmere-scarf",
		description: "Woven on vintage looms in Scotland, then brushed twice for a cloud-soft hand. 200cm long, so it wraps twice with room to spare.",
		details: [
			"100% cashmere",
			"200 x 70cm",
			"Woven in Hawick, Scotland"
		],
		price: 14500,
		compareAtPrice: 19e3,
		currency: "USD",
		images: [p_scarf_default],
		category: "accessories",
		colors: [{
			name: "Oat",
			hex: "#e6cdae"
		}, {
			name: "Charcoal",
			hex: "#3a3a38"
		}],
		sizes: ["One size"],
		rating: 4.9,
		reviewCount: 187,
		inStock: true,
		tags: [
			"scarf",
			"cashmere",
			"gift"
		],
		bestseller: true
	},
	{
		id: "6",
		name: "Oversized Poplin Shirt",
		slug: "oversized-poplin-shirt",
		description: "Cut wide and boxy in a dense Japanese poplin with a dry, papery finish that breaks in beautifully.",
		details: [
			"100% Japanese cotton poplin",
			"Mother-of-pearl buttons",
			"Drop shoulder"
		],
		price: 12500,
		currency: "USD",
		images: [p_shirt_default, lifestyle_1_default],
		category: "shirts",
		colors: [{
			name: "Optic White",
			hex: "#f7f5f0"
		}, {
			name: "Sky",
			hex: "#c7d4de"
		}],
		sizes: APPAREL_SIZES,
		rating: 4.5,
		reviewCount: 74,
		inStock: true,
		tags: ["shirt", "cotton"],
		isNew: true,
		featured: true
	},
	{
		id: "7",
		name: "Pleated Wool Trousers",
		slug: "pleated-wool-trousers",
		description: "A high-rise trouser with a single forward pleat and a wide, straight leg that falls clean from the hip.",
		details: [
			"98% wool, 2% elastane",
			"High rise, wide leg",
			"Hook-and-bar closure"
		],
		price: 21500,
		compareAtPrice: 26e3,
		currency: "USD",
		images: [p_trouser_default],
		category: "trousers",
		colors: [{
			name: "Espresso",
			hex: "#3b2a20"
		}, {
			name: "Black",
			hex: "#1b1b1b"
		}],
		sizes: APPAREL_SIZES,
		rating: 4.7,
		reviewCount: 152,
		inStock: true,
		lowStock: true,
		tags: ["trousers", "wool"],
		bestseller: true
	},
	{
		id: "8",
		name: "Bias Silk Slip Dress",
		slug: "bias-silk-slip-dress",
		description: "Cut on the bias from 22-momme sand-washed silk so it skims rather than clings. Adjustable straps, side slit.",
		details: [
			"100% mulberry silk, 22 momme",
			"Bias cut",
			"Dry clean"
		],
		price: 29500,
		currency: "USD",
		images: [p_dress_default],
		category: "dresses",
		colors: [{
			name: "Sand",
			hex: "#e2c9a0"
		}, {
			name: "Black",
			hex: "#1b1b1b"
		}],
		sizes: APPAREL_SIZES,
		rating: 4.8,
		reviewCount: 118,
		inStock: true,
		tags: [
			"dress",
			"silk",
			"occasion"
		],
		isNew: true,
		featured: true
	},
	{
		id: "9",
		name: "Structured Leather Tote",
		slug: "structured-leather-tote",
		description: "A clean-lined tote in vegetable-tanned calf leather with an unlined interior that patinas with use. Fits a 15-inch laptop.",
		details: [
			"Vegetable-tanned calf leather",
			"Unlined, edge-painted",
			"35 x 30 x 12cm"
		],
		price: 49500,
		compareAtPrice: 58e3,
		currency: "USD",
		images: [cat_bags_default, p_crossbody_default],
		category: "bags",
		colors: [{
			name: "Tan",
			hex: "#b06a34"
		}, {
			name: "Black",
			hex: "#1b1b1b"
		}],
		sizes: ["One size"],
		rating: 4.9,
		reviewCount: 263,
		inStock: true,
		tags: [
			"bag",
			"leather",
			"work"
		],
		featured: true,
		bestseller: true
	},
	{
		id: "10",
		name: "Quilted Crossbody Bag",
		slug: "quilted-crossbody-bag",
		description: "A small evening shape in quilted lambskin with a convertible chain-and-leather strap.",
		details: [
			"Quilted lambskin",
			"Convertible strap",
			"22 x 15 x 6cm"
		],
		price: 34500,
		currency: "USD",
		images: [p_crossbody_default, cat_bags_default],
		category: "bags",
		colors: [{
			name: "Cream",
			hex: "#efe3cf"
		}, {
			name: "Espresso",
			hex: "#3b2a20"
		}],
		sizes: ["One size"],
		rating: 4.6,
		reviewCount: 89,
		inStock: true,
		tags: ["bag", "evening"],
		isNew: true
	},
	{
		id: "11",
		name: "Leather Chelsea Boots",
		slug: "leather-chelsea-boots",
		description: "Hand-welted Chelsea boots on a slim leather sole, with elasticated gores that soften to your foot within a week.",
		details: [
			"Full-grain calf leather",
			"Blake-stitched leather sole",
			"Resoleable"
		],
		price: 44500,
		currency: "USD",
		images: [cat_footwear_default, p_loafer_default],
		category: "footwear",
		colors: [{
			name: "Chestnut",
			hex: "#8a4f2c"
		}, {
			name: "Black",
			hex: "#1b1b1b"
		}],
		sizes: SHOE_SIZES,
		rating: 4.8,
		reviewCount: 176,
		inStock: true,
		tags: ["boots", "leather"],
		bestseller: true
	},
	{
		id: "12",
		name: "Hand-Stitched Penny Loafers",
		slug: "hand-stitched-penny-loafers",
		description: "A softly constructed loafer with a hand-stitched apron and unlined vamp.",
		details: [
			"Nappa calf leather",
			"Hand-stitched apron",
			"Flexible rubber heel"
		],
		price: 36500,
		compareAtPrice: 42e3,
		currency: "USD",
		images: [p_loafer_default, cat_footwear_default],
		category: "footwear",
		colors: [{
			name: "Cognac",
			hex: "#c0783c"
		}, {
			name: "Espresso",
			hex: "#3b2a20"
		}],
		sizes: SHOE_SIZES,
		rating: 4.7,
		reviewCount: 143,
		inStock: true,
		tags: ["loafers", "leather"],
		featured: true
	},
	{
		id: "13",
		name: "Relaxed Linen Shirt",
		slug: "relaxed-linen-shirt",
		description: "Washed European linen, cut roomy with a camp collar. Made to be worn open over a tank.",
		details: [
			"100% washed European linen",
			"Camp collar",
			"Garment dyed"
		],
		price: 11500,
		currency: "USD",
		images: [p_shirt_default, lifestyle_1_default],
		category: "shirts",
		colors: [{
			name: "Ivory",
			hex: "#f2ece1"
		}, {
			name: "Clay",
			hex: "#b9724d"
		}],
		sizes: APPAREL_SIZES,
		rating: 4.4,
		reviewCount: 61,
		inStock: false,
		tags: [
			"shirt",
			"linen",
			"summer"
		]
	},
	{
		id: "14",
		name: "Alpaca Boxy Cardigan",
		slug: "alpaca-boxy-cardigan",
		description: "A brushed alpaca-blend cardigan with horn buttons and a square, cropped body. Halo-soft and lighter than it looks.",
		details: [
			"62% alpaca, 38% wool",
			"Horn buttons",
			"Brushed twice"
		],
		price: 27500,
		currency: "USD",
		images: [promo_default, cat_knitwear_default],
		category: "knitwear",
		colors: [{
			name: "Ivory",
			hex: "#f2ece1"
		}, {
			name: "Cocoa",
			hex: "#7a4f34"
		}],
		sizes: APPAREL_SIZES,
		rating: 4.7,
		reviewCount: 104,
		inStock: true,
		tags: ["cardigan", "alpaca"],
		isNew: true
	},
	{
		id: "15",
		name: "Tailored Wide-Leg Pant",
		slug: "tailored-wide-leg-pant",
		description: "A fluid, floor-grazing pant in a matte tencel-wool blend. Elastic back waist, tailored front.",
		details: [
			"54% tencel, 46% wool",
			"Half-elastic waist",
			"Unhemmed option available"
		],
		price: 18500,
		currency: "USD",
		images: [p_trouser_default, lifestyle_1_default],
		category: "trousers",
		colors: [{
			name: "Stone",
			hex: "#cfc5b4"
		}, {
			name: "Black",
			hex: "#1b1b1b"
		}],
		sizes: APPAREL_SIZES,
		rating: 4.5,
		reviewCount: 83,
		inStock: true,
		tags: ["trousers", "everyday"]
	},
	{
		id: "16",
		name: "Suede Ankle Boot",
		slug: "suede-ankle-boot",
		description: "A stacked-heel ankle boot in Italian suede with a squared, softened toe.",
		details: [
			"Italian calf suede",
			"45mm stacked heel",
			"Leather lining"
		],
		price: 39500,
		compareAtPrice: 46e3,
		currency: "USD",
		images: [cat_footwear_default, p_loafer_default],
		category: "footwear",
		colors: [{
			name: "Taupe",
			hex: "#a68d75"
		}, {
			name: "Black",
			hex: "#1b1b1b"
		}],
		sizes: SHOE_SIZES,
		rating: 4.6,
		reviewCount: 67,
		inStock: true,
		lowStock: true,
		tags: ["boots", "suede"],
		isNew: true
	}
];
var sortOptions = [
	{
		value: "featured",
		label: "Featured"
	},
	{
		value: "newest",
		label: "Newest"
	},
	{
		value: "price-asc",
		label: "Price: low to high"
	},
	{
		value: "price-desc",
		label: "Price: high to low"
	},
	{
		value: "rating",
		label: "Top rated"
	}
];
var allColors = Array.from(new Map(products.flatMap((p) => p.colors).map((c) => [c.name, c])).values());
var allSizes = Array.from(new Set(products.flatMap((p) => p.sizes)));
var priceBounds = {
	min: Math.min(...products.map((p) => p.price)),
	max: Math.max(...products.map((p) => p.price))
};
function filterProducts(query = {}) {
	let list = [...products];
	if (query.categories?.length) list = list.filter((p) => query.categories.includes(p.category));
	if (query.colors?.length) list = list.filter((p) => p.colors.some((c) => query.colors.includes(c.name)));
	if (query.sizes?.length) list = list.filter((p) => p.sizes.some((s) => query.sizes.includes(s)));
	if (query.maxPrice) list = list.filter((p) => p.price <= query.maxPrice);
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
		default: list.sort((a, b) => Number(!!b.featured) - Number(!!a.featured) || Number(!!b.bestseller) - Number(!!a.bestseller));
	}
	return list;
}
function getProduct(slug) {
	return products.find((p) => p.slug === slug);
}
function getProductById(id) {
	return products.find((p) => p.id === id);
}
function getRelated(product, limit = 4) {
	const sameCategory = products.filter((p) => p.id !== product.id && p.category === product.category);
	const filler = products.filter((p) => p.id !== product.id && p.category !== product.category);
	return [...sameCategory, ...filler].slice(0, limit);
}
function searchProducts(term, limit = 6) {
	const q = term.trim().toLowerCase();
	if (!q) return [];
	return products.filter((p) => [
		p.name,
		p.description,
		p.category,
		...p.tags
	].join(" ").toLowerCase().includes(q)).slice(0, limit);
}
var bestSellers = products.filter((p) => p.bestseller);
var newArrivals = products.filter((p) => p.isNew);
products.filter((p) => p.featured);
var popularSearches = [
	"Cashmere",
	"Overcoat",
	"Leather tote",
	"Loafers",
	"Silk dress"
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/format-agas33Kt.js
var FREE_SHIPPING_THRESHOLD = 25e3;
var SHIPPING_FLAT = 1200;
var TAX_RATE = .08;
var STORAGE_KEY = "atelier-nord-store";
var DISCOUNTS = {
	WELCOME10: .1,
	NORD20: .2
};
var StoreContext = (0, import_react.createContext)(null);
var initialState = {
	lines: [],
	wishlist: [],
	recentlyViewed: [],
	recentSearches: [],
	cartOpen: false,
	searchOpen: false,
	discountCode: null
};
function StoreProvider({ children }) {
	const [state, setState] = (0, import_react.useState)(initialState);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			if (!raw) return;
			const parsed = JSON.parse(raw);
			setState((prev) => ({
				...prev,
				lines: parsed.lines ?? [],
				wishlist: parsed.wishlist ?? [],
				recentlyViewed: parsed.recentlyViewed ?? [],
				recentSearches: parsed.recentSearches ?? [],
				discountCode: parsed.discountCode ?? null
			}));
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify({
				lines: state.lines,
				wishlist: state.wishlist,
				recentlyViewed: state.recentlyViewed,
				recentSearches: state.recentSearches,
				discountCode: state.discountCode
			}));
		} catch {}
	}, [
		state.lines,
		state.wishlist,
		state.recentlyViewed,
		state.recentSearches,
		state.discountCode
	]);
	const addLine = (0, import_react.useCallback)((product, opts = {}) => {
		const color = opts.color ?? product.colors[0]?.name ?? "Default";
		const size = opts.size ?? product.sizes[0] ?? "One size";
		const quantity = opts.quantity ?? 1;
		const id = `${product.id}-${color}-${size}`;
		setState((prev) => {
			const lines = prev.lines.find((l) => l.id === id) ? prev.lines.map((l) => l.id === id ? {
				...l,
				quantity: l.quantity + quantity
			} : l) : [...prev.lines, {
				id,
				productId: product.id,
				color,
				size,
				quantity
			}];
			return {
				...prev,
				lines,
				cartOpen: true
			};
		});
		toast.success("Added to bag", { description: `${product.name} - ${color} / ${size}` });
	}, []);
	const updateQuantity = (0, import_react.useCallback)((lineId, quantity) => {
		setState((prev) => ({
			...prev,
			lines: quantity <= 0 ? prev.lines.filter((l) => l.id !== lineId) : prev.lines.map((l) => l.id === lineId ? {
				...l,
				quantity
			} : l)
		}));
	}, []);
	const removeLine = (0, import_react.useCallback)((lineId) => {
		setState((prev) => ({
			...prev,
			lines: prev.lines.filter((l) => l.id !== lineId)
		}));
		toast("Removed from bag");
	}, []);
	const clearCart = (0, import_react.useCallback)(() => {
		setState((prev) => ({
			...prev,
			lines: [],
			discountCode: null
		}));
	}, []);
	const toggleWishlist = (0, import_react.useCallback)((productId) => {
		setState((prev) => {
			const has = prev.wishlist.includes(productId);
			toast(has ? "Removed from wishlist" : "Saved to wishlist");
			return {
				...prev,
				wishlist: has ? prev.wishlist.filter((id) => id !== productId) : [productId, ...prev.wishlist]
			};
		});
	}, []);
	const markViewed = (0, import_react.useCallback)((productId) => {
		setState((prev) => ({
			...prev,
			recentlyViewed: [productId, ...prev.recentlyViewed.filter((id) => id !== productId)].slice(0, 8)
		}));
	}, []);
	const pushSearch = (0, import_react.useCallback)((term) => {
		const t = term.trim();
		if (!t) return;
		setState((prev) => ({
			...prev,
			recentSearches: [t, ...prev.recentSearches.filter((s) => s !== t)].slice(0, 5)
		}));
	}, []);
	const clearSearches = (0, import_react.useCallback)(() => setState((prev) => ({
		...prev,
		recentSearches: []
	})), []);
	const setCartOpen = (0, import_react.useCallback)((cartOpen) => setState((prev) => ({
		...prev,
		cartOpen
	})), []);
	const setSearchOpen = (0, import_react.useCallback)((searchOpen) => setState((prev) => ({
		...prev,
		searchOpen
	})), []);
	const applyDiscount = (0, import_react.useCallback)((code) => {
		const normalized = code.trim().toUpperCase();
		if (!DISCOUNTS[normalized]) {
			toast.error("That code isn't valid", { description: "Try WELCOME10 for 10% off." });
			return false;
		}
		setState((prev) => ({
			...prev,
			discountCode: normalized
		}));
		toast.success(`${normalized} applied`);
		return true;
	}, []);
	const removeDiscount = (0, import_react.useCallback)(() => setState((prev) => ({
		...prev,
		discountCode: null
	})), []);
	const detailedLines = (0, import_react.useMemo)(() => state.lines.map((line) => ({
		line,
		product: getProductById(line.productId)
	})).filter((entry) => Boolean(entry.product)), [state.lines]);
	const subtotal = detailedLines.reduce((sum, { line, product }) => sum + product.price * line.quantity, 0);
	const itemCount = state.lines.reduce((sum, l) => sum + l.quantity, 0);
	const discountAmount = state.discountCode ? Math.round(subtotal * (DISCOUNTS[state.discountCode] ?? 0)) : 0;
	const afterDiscount = subtotal - discountAmount;
	const shipping = afterDiscount === 0 || afterDiscount >= 25e3 ? 0 : SHIPPING_FLAT;
	const tax = Math.round(afterDiscount * TAX_RATE);
	const total = afterDiscount + shipping + tax;
	const value = {
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
		currency: "USD"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreContext.Provider, {
		value,
		children
	});
}
function useStore() {
	const ctx = (0, import_react.useContext)(StoreContext);
	if (!ctx) throw new Error("useStore must be used inside StoreProvider");
	return ctx;
}
/** Format a price given in minor units plus an ISO currency code. */
function formatPrice(minorUnits, currency = "USD") {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency,
		maximumFractionDigits: minorUnits % 100 === 0 ? 0 : 2
	}).format(minorUnits / 100);
}
function discountPercent(price, compareAt) {
	if (!compareAt || compareAt <= price) return 0;
	return Math.round((compareAt - price) / compareAt * 100);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/input-C8TSRG5u.js
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
//#endregion
export { promo_default as A, priceBounds as C, Button as D, sortOptions as E, cn as O, popularSearches as S, searchProducts as T, getProductById as _, discountPercent as a, p_dress_default as b, allColors as c, cat_bags_default as d, cat_footwear_default as f, getProduct as g, filterProducts as h, StoreProvider as i, lifestyle_1_default as k, allSizes as l, categories as m, Input as n, formatPrice as o, cat_knitwear_default as p, FREE_SHIPPING_THRESHOLD as r, useStore as s, router_exports as t, bestSellers as u, getRelated as v, products as w, p_loafer_default as x, newArrivals as y };
