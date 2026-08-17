import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as hero_default } from "./hero-DfslKZ8M.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ArrowRight, a as Truck, f as ShieldCheck, m as RefreshCcw, w as Headphones } from "../_libs/lucide-react.mjs";
import { r as NewsletterSection } from "./router-1yTLQKrJ.mjs";
import { A as promo_default, D as Button, b as p_dress_default, d as cat_bags_default, f as cat_footwear_default, k as lifestyle_1_default, m as categories, p as cat_knitwear_default, u as bestSellers, x as p_loafer_default, y as newArrivals } from "./router-1yTLQKrJ2.mjs";
import { n as ProductGrid, t as ProductCard } from "./ProductGrid-DBrtmLWH.mjs";
import { t as ReviewsSection } from "./Reviews-CG9niB-0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BEmq4AwJ.js
var import_jsx_runtime = require_jsx_runtime();
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedCategories, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BestSellersSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromoBanner, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewArrivalsCarousel, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChooseUs, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsletterSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialGallery, {})
	] });
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-[78vh] min-h-[520px] w-full overflow-hidden md:h-[86vh]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_default,
					alt: "Model wearing the Nord camel wool overcoat in afternoon light",
					width: 1920,
					height: 1280,
					className: "absolute inset-0 h-full w-full object-cover object-[70%_center]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-background/85 via-background/40 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "shell relative flex h-full items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-xl fade-up",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Autumn / Winter Collection"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-5 text-balance text-5xl leading-[1.03] md:text-7xl",
								children: "Made in small runs. Worn for decades."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-md text-base leading-relaxed text-muted-foreground",
								children: "Italian wool, grade-A cashmere and vegetable-tanned leather, cut in the same three workshops we've used since 2014."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-9 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "xl",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/shop",
										children: "Shop Now"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "xl",
									variant: "outline",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/collections",
										children: "Explore Collection"
									})
								})]
							})
						]
					})
				})
			]
		})
	});
}
function FeaturedCategories() {
	const featuredCats = categories.slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "shell py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-end justify-between gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Shop by category"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-4xl md:text-5xl",
				children: "Four things, done properly"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/collections",
				className: "link-underline hidden text-sm md:inline-block",
				children: "All collections"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
			children: featuredCats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/shop",
				search: { category: c.id },
				className: "media-zoom group relative block overflow-hidden rounded-3xl bg-surface",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-3/4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: c.image,
						alt: c.name,
						loading: "lazy",
						width: 1024,
						height: 1280,
						className: "h-full w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-6 pt-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl text-primary-foreground",
							children: c.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-primary-foreground/75",
							children: c.blurb
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-primary-foreground",
							children: ["Shop now", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" })]
						})
					]
				})]
			}, c.id))
		})]
	});
}
function BestSellersSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "shell py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-end justify-between gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Most loved"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-4xl md:text-5xl",
				children: "Best sellers"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/shop",
				search: { tag: "bestseller" },
				className: "link-underline text-sm",
				children: "View all"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, {
			products: bestSellers.slice(0, 8),
			className: "mt-12"
		})]
	});
}
function PromoBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "shell py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid overflow-hidden rounded-3xl bg-surface lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "order-2 flex flex-col justify-center px-8 py-14 md:px-16 lg:order-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "The Cashmere Edit"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-balance text-4xl md:text-5xl",
						children: "Six-ply cashmere, knitted to last a lifetime."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-md text-sm leading-relaxed text-muted-foreground",
						children: "We buy the longest fibres of the season from a single Mongolian cooperative, then knit slowly on 7-gauge machines. Heavier, denser, and warmer than anything at this price."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							variant: "accent",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								search: { category: "knitwear" },
								children: "Shop the edit"
							})
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "order-1 media-zoom lg:order-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: promo_default,
					alt: "Stacked cashmere knitwear in cream and cocoa",
					loading: "lazy",
					width: 1600,
					height: 1104,
					className: "h-full min-h-[320px] w-full object-cover"
				})
			})]
		})
	});
}
function NewArrivalsCarousel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell flex items-end justify-between gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Just landed"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-4xl md:text-5xl",
				children: "New arrivals"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/shop",
				search: { tag: "new" },
				className: "link-underline text-sm",
				children: "View all"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "shell no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4",
			children: newArrivals.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
				product: p,
				className: "w-[68vw] shrink-0 snap-start sm:w-[40vw] lg:w-[22vw]"
			}, p.id))
		})]
	});
}
var perks = [
	{
		Icon: Truck,
		title: "Free shipping over $250",
		copy: "Carbon-neutral delivery, 2–4 days worldwide."
	},
	{
		Icon: ShieldCheck,
		title: "Secure checkout",
		copy: "Encrypted payments, no stored card data."
	},
	{
		Icon: RefreshCcw,
		title: "30-day easy returns",
		copy: "Prepaid label in your inbox in minutes."
	},
	{
		Icon: Headphones,
		title: "Real people",
		copy: "Studio-based support, replies within hours."
	}
];
function WhyChooseUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "shell py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-10 rounded-3xl border px-8 py-12 md:grid-cols-2 md:px-14 lg:grid-cols-4",
			children: perks.map(({ Icon, title, copy }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "h-5 w-5 text-accent",
					strokeWidth: 1.5,
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-4 font-sans text-sm font-medium",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted-foreground",
					children: copy
				})
			] }, title))
		})
	});
}
var gallery = [
	lifestyle_1_default,
	cat_knitwear_default,
	p_dress_default,
	cat_bags_default,
	cat_footwear_default,
	p_loafer_default
];
function SocialGallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "shell pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "@ateliernord"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-4xl md:text-5xl",
					children: "Worn by you"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6",
				children: gallery.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "https://instagram.com",
					target: "_blank",
					rel: "noreferrer noopener",
					className: "media-zoom group relative block overflow-hidden rounded-2xl bg-surface",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src,
						alt: "Customer wearing Atelier Nord",
						loading: "lazy",
						width: 1024,
						height: 1024,
						className: "aspect-square h-full w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/10" })]
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "lg",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://instagram.com",
						target: "_blank",
						rel: "noreferrer noopener",
						children: "Follow us on Instagram"
					})
				})
			})
		]
	});
}
//#endregion
export { HomePage as component };
