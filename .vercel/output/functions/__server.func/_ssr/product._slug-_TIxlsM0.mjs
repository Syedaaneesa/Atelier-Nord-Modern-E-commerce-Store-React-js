import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Heart, _ as Minus, a as Truck, f as ShieldCheck, h as Plus, k as Check, m as RefreshCcw } from "../_libs/lucide-react.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-D9Tbz7FI.mjs";
import { i as Route } from "./router-1yTLQKrJ.mjs";
import { D as Button, O as cn, _ as getProductById, a as discountPercent, o as formatPrice, s as useStore, v as getRelated } from "./router-1yTLQKrJ2.mjs";
import { n as ProductGrid, r as StarRating } from "./ProductGrid-DBrtmLWH.mjs";
import { n as testimonials } from "./Reviews-CG9niB-0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-_TIxlsM0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { product } = Route.useLoaderData();
	const { addLine, toggleWishlist, isWishlisted, markViewed, recentlyViewed, setCartOpen } = useStore();
	const navigate = useNavigate();
	const [color, setColor] = (0, import_react.useState)(product.colors[0]?.name ?? "Default");
	const [size, setSize] = (0, import_react.useState)(product.sizes[0] ?? "One size");
	const [quantity, setQuantity] = (0, import_react.useState)(1);
	const [activeImage, setActiveImage] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		setColor(product.colors[0]?.name ?? "Default");
		setSize(product.sizes[0] ?? "One size");
		setQuantity(1);
		setActiveImage(0);
		markViewed(product.id);
	}, [
		product.id,
		product.colors,
		product.sizes,
		markViewed
	]);
	const off = discountPercent(product.price, product.compareAtPrice);
	const wishlisted = isWishlisted(product.id);
	const related = getRelated(product);
	const viewedProducts = recentlyViewed.filter((id) => id !== product.id).map(getProductById).filter(Boolean).slice(0, 4);
	const buyNow = () => {
		addLine(product, {
			color,
			size,
			quantity
		});
		setCartOpen(false);
		navigate({ to: "/checkout" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "shell py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Breadcrumb",
				className: "text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "link-underline",
						children: "Home"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-2",
						children: "/"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						search: { category: product.category },
						className: "link-underline",
						children: product.category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-2",
						children: "/"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground",
						children: product.name
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col-reverse gap-4 md:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "no-scrollbar flex gap-3 overflow-x-auto md:w-20 md:flex-col md:overflow-visible",
						children: product.images.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setActiveImage(i),
							"aria-label": `View image ${i + 1}`,
							"aria-current": activeImage === i,
							className: cn("shrink-0 overflow-hidden rounded-xl border-2 transition-colors", activeImage === i ? "border-foreground" : "border-transparent"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src,
								alt: "",
								loading: "lazy",
								width: 1024,
								height: 1280,
								className: "h-24 w-20 object-cover md:h-24 md:w-full"
							})
						}, i))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 overflow-hidden rounded-3xl bg-surface",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: product.images[activeImage],
							alt: product.name,
							width: 1024,
							height: 1280,
							className: "aspect-4/5 h-full w-full object-cover"
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:sticky lg:top-28 lg:self-start",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [product.isNew && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-accent-soft px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.14em]",
								children: "New"
							}), product.bestseller && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-accent-soft px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.14em]",
								children: "Best seller"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 text-4xl md:text-[2.75rem] md:leading-tight",
							children: product.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarRating, {
								rating: product.rating,
								size: 14
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#reviews",
								className: "link-underline text-xs text-muted-foreground",
								children: [product.reviewCount, " reviews"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-baseline gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl",
								children: formatPrice(product.price, product.currency)
							}), product.compareAtPrice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground line-through",
								children: formatPrice(product.compareAtPrice, product.currency)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-full bg-accent px-2.5 py-1 text-[0.7rem] text-accent-foreground",
								children: [
									"Save ",
									off,
									"%"
								]
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm leading-relaxed text-muted-foreground",
							children: product.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "eyebrow",
								children: ["Colour - ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground",
									children: color
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 flex gap-2",
								children: product.colors.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setColor(c.name),
									"aria-label": c.name,
									"aria-pressed": color === c.name,
									className: cn("grid h-9 w-9 place-items-center rounded-full border-2 transition-colors", color === c.name ? "border-foreground" : "border-transparent"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "h-7 w-7 rounded-full border",
										style: { backgroundColor: c.hex }
									})
								}, c.name))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "eyebrow",
									children: ["Size - ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-foreground",
										children: size
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "text-xs text-muted-foreground underline",
									children: "Size guide"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 flex flex-wrap gap-2",
								children: product.sizes.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setSize(s),
									"aria-pressed": size === s,
									className: cn("min-w-14 rounded-full border px-4 py-2.5 text-xs transition-colors", size === s ? "border-foreground bg-secondary" : "hover:bg-secondary"),
									children: s
								}, s))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center rounded-full border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setQuantity((q) => Math.max(1, q - 1)),
										"aria-label": "Decrease quantity",
										className: "grid h-11 w-11 place-items-center rounded-full transition-colors hover:bg-secondary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-8 text-center text-sm",
										"aria-live": "polite",
										children: quantity
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setQuantity((q) => q + 1),
										"aria-label": "Increase quantity",
										className: "grid h-11 w-11 place-items-center rounded-full transition-colors hover:bg-secondary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								onClick: () => toggleWishlist(product.id),
								"aria-label": wishlisted ? "Remove from wishlist" : "Save to wishlist",
								"aria-pressed": wishlisted,
								className: "h-11 w-11 border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("h-4 w-4", wishlisted && "fill-accent text-accent") })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "xl",
								disabled: !product.inStock,
								onClick: () => addLine(product, {
									color,
									size,
									quantity
								}),
								children: product.inStock ? "Add to bag" : "Sold out"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "xl",
								variant: "accent",
								disabled: !product.inStock,
								onClick: buyNow,
								children: "Buy it now"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 flex items-center gap-2 text-xs",
							children: product.inStock ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-1.5 w-1.5 rounded-full", product.lowStock ? "bg-accent" : "bg-success") }), product.lowStock ? "Low stock - only a few left" : "In stock, ships within 24h"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-muted-foreground" }), "Out of stock - join the waitlist below"] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-6 grid gap-3 rounded-2xl bg-surface p-5 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, {
										className: "h-4 w-4 text-accent",
										strokeWidth: 1.5
									}), " Free shipping over $250, 2–4 day delivery"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCcw, {
										className: "h-4 w-4 text-accent",
										strokeWidth: 1.5
									}), " 30-day returns with a prepaid label"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
										className: "h-4 w-4 text-accent",
										strokeWidth: 1.5
									}), " Two-year repair guarantee"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Accordion, {
							type: "single",
							collapsible: true,
							className: "mt-8",
							defaultValue: "details",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
									value: "details",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: "Details & materials" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "flex flex-col gap-2 text-sm text-muted-foreground",
										children: product.details.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" }), d]
										}, d))
									}) })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
									value: "shipping",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: "Shipping" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
										className: "text-sm leading-relaxed text-muted-foreground",
										children: "Orders placed before 2pm CET ship the same working day. Standard delivery is 2–4 days and free over $250; express is available at checkout. Duties are prepaid for the EU, UK and US."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
									value: "returns",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: "Returns & exchanges" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
										className: "text-sm leading-relaxed text-muted-foreground",
										children: "Unworn items can be returned within 30 days for a full refund. Start a return from your account and we'll email a prepaid label. Exchanges ship as soon as the label is scanned."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
									value: "reviews",
									id: "reviews",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionTrigger, { children: [
										"Reviews (",
										product.reviewCount,
										")"
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "flex flex-col gap-6",
										children: testimonials.slice(0, 3).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarRating, { rating: t.rating }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm font-medium",
												children: t.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm leading-relaxed text-muted-foreground",
												children: t.text
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-2 text-xs text-muted-foreground",
												children: [
													t.name,
													" · ",
													t.location
												]
											})
										] }, t.name))
									}) })]
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-4xl",
					children: "You may also like"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, {
					products: related,
					className: "mt-10"
				})]
			}),
			viewedProducts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-4xl",
					children: "Recently viewed"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, {
					products: viewedProducts,
					className: "mt-10"
				})]
			})
		]
	});
}
//#endregion
export { ProductPage as component };
