import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Heart, c as Star, h as Plus } from "../_libs/lucide-react.mjs";
import { D as Button, O as cn, a as discountPercent, o as formatPrice, s as useStore } from "./router-1yTLQKrJ2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductGrid-DBrtmLWH.js
var import_jsx_runtime = require_jsx_runtime();
function StarRating({ rating, count, size = 12, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center gap-1.5", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-0.5",
				"aria-hidden": "true",
				children: [
					1,
					2,
					3,
					4,
					5
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
					width: size,
					height: size,
					className: cn("text-accent", i <= Math.round(rating) ? "fill-accent" : "fill-transparent opacity-35")
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "sr-only",
				children: [rating, " out of 5 stars"]
			}),
			count !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-xs text-muted-foreground",
				children: [
					rating.toFixed(1),
					" (",
					count,
					")"
				]
			})
		]
	});
}
function ProductCard({ product, className }) {
	const { addLine, toggleWishlist, isWishlisted } = useStore();
	const off = discountPercent(product.price, product.compareAtPrice);
	const wishlisted = isWishlisted(product.id);
	const hoverImage = product.images[1] ?? product.images[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("group relative flex flex-col", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-2xl bg-surface",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/product/$slug",
					params: { slug: product.slug },
					"aria-label": product.name,
					className: "block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-4/5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: product.images[0],
							alt: product.name,
							loading: "lazy",
							width: 1024,
							height: 1280,
							className: "absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] group-hover:opacity-0"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: hoverImage,
							alt: "",
							"aria-hidden": "true",
							loading: "lazy",
							width: 1024,
							height: 1280,
							className: "absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100 group-hover:opacity-100"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-none absolute left-3 top-3 flex flex-col items-start gap-1.5",
					children: [
						off > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-full bg-accent px-2.5 py-1 text-[0.65rem] font-medium tracking-wide text-accent-foreground",
							children: [
								"−",
								off,
								"%"
							]
						}),
						product.isNew && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-background px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.14em]",
							children: "New"
						}),
						product.bestseller && !product.isNew && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-background px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.14em]",
							children: "Best seller"
						}),
						!product.inStock && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-foreground px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-primary-foreground",
							children: "Sold out"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => toggleWishlist(product.id),
					"aria-label": wishlisted ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`,
					"aria-pressed": wishlisted,
					className: "absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/85 backdrop-blur transition-colors hover:bg-background",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("h-4 w-4", wishlisted ? "fill-accent text-accent" : "text-foreground") })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100 max-md:translate-y-0 max-md:opacity-100",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "default",
						className: "w-full",
						disabled: !product.inStock,
						onClick: () => addLine(product),
						children: product.inStock ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), " Quick add"] }) : "Sold out"
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex flex-1 flex-col gap-1.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarRating, {
					rating: product.rating,
					count: product.reviewCount
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-sans text-sm font-medium leading-snug tracking-tight",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/product/$slug",
						params: { slug: product.slug },
						className: "link-underline",
						children: product.name
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm",
						children: formatPrice(product.price, product.currency)
					}), product.compareAtPrice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted-foreground line-through",
						children: formatPrice(product.compareAtPrice, product.currency)
					})]
				})
			]
		})]
	});
}
function ProductCardSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aspect-4/5 animate-pulse rounded-2xl bg-surface" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-20 animate-pulse rounded-full bg-surface" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-3/4 animate-pulse rounded-full bg-surface" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-16 animate-pulse rounded-full bg-surface" })
			]
		})]
	});
}
function ProductGrid({ products, loading, skeletonCount = 8, className }) {
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4", className),
		children: Array.from({ length: skeletonCount }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCardSkeleton, {}, i))
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4", className),
		children: products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.id))
	});
}
//#endregion
export { ProductGrid as n, StarRating as r, ProductCard as t };
