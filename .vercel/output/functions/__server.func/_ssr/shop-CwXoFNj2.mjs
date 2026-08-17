import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Label } from "./label-C_aR0ZSC.mjs";
import { D as ChevronUp, O as ChevronDown, k as Check, n as X, u as SlidersHorizontal } from "../_libs/lucide-react.mjs";
import { a as Route$3, c as Sheet, d as SheetTrigger, l as SheetContent, u as SheetTitle } from "./router-1yTLQKrJ.mjs";
import { C as priceBounds, D as Button, E as sortOptions, O as cn, T as searchProducts, c as allColors, h as filterProducts, l as allSizes, m as categories, o as formatPrice } from "./router-1yTLQKrJ2.mjs";
import { n as CheckboxIndicator, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as ProductGrid } from "./ProductGrid-DBrtmLWH.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/radix-ui__react-slider.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-CwXoFNj2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Checkbox = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
	ref,
	className: cn("grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
		className: cn("grid place-content-center text-current"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
	})
}));
Checkbox.displayName = Checkbox$1.displayName;
var Slider = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
	ref,
	className: cn("relative flex w-full touch-none select-none items-center", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
		className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-primary" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })]
}));
Slider.displayName = Slider$1.displayName;
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var collectionCopy = {
	new: {
		title: "New Arrivals",
		blurb: "The latest additions to the permanent collection, in limited first runs."
	},
	bestseller: {
		title: "Best Sellers",
		blurb: "The pieces our customers replace, gift, and come back for."
	},
	sale: {
		title: "Sale",
		blurb: "Final runs of past-season colours, while sizes last."
	}
};
var PAGE_SIZE = 8;
function ShopPage() {
	const search = Route$3.useSearch();
	const navigate = useNavigate({ from: Route$3.fullPath });
	const [colors, setColors] = (0, import_react.useState)([]);
	const [sizes, setSizes] = (0, import_react.useState)([]);
	const [maxPrice, setMaxPrice] = (0, import_react.useState)(priceBounds.max);
	const [inStockOnly, setInStockOnly] = (0, import_react.useState)(false);
	const [visible, setVisible] = (0, import_react.useState)(PAGE_SIZE);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		setLoading(true);
		setVisible(PAGE_SIZE);
		const t = setTimeout(() => setLoading(false), 350);
		return () => clearTimeout(t);
	}, [
		search.q,
		search.category,
		search.tag,
		search.sort,
		colors,
		sizes,
		maxPrice,
		inStockOnly
	]);
	const base = search.q ? searchProducts(search.q, 100) : filterProducts({
		categories: search.category ? [search.category] : void 0,
		tag: search.tag,
		sort: search.sort,
		colors: colors.length ? colors : void 0,
		sizes: sizes.length ? sizes : void 0,
		maxPrice,
		inStockOnly
	});
	const heading = search.q ? {
		title: `Results for “${search.q}”`,
		blurb: "Refine below or clear your search."
	} : search.category ? {
		title: categories.find((c) => c.id === search.category).name,
		blurb: categories.find((c) => c.id === search.category).blurb
	} : search.tag ? collectionCopy[search.tag] ?? {
		title: "Shop",
		blurb: ""
	} : {
		title: "All Products",
		blurb: "Every piece we make, in one place. Small runs, restocked rarely."
	};
	const toggle = (list, value, set) => set(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
	const activeFilters = colors.length + sizes.length + (inStockOnly ? 1 : 0);
	const resetFilters = () => {
		setColors([]);
		setSizes([]);
		setInStockOnly(false);
		setMaxPrice(priceBounds.max);
	};
	const filters = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterBlock, {
				title: "Category",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						search: { sort: search.sort },
						className: `text-left text-sm transition-colors hover:text-foreground ${!search.category ? "text-foreground" : "text-muted-foreground"}`,
						children: "All products"
					}), categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						search: {
							category: c.id,
							sort: search.sort
						},
						className: `text-left text-sm transition-colors hover:text-foreground ${search.category === c.id ? "text-foreground" : "text-muted-foreground"}`,
						children: c.name
					}, c.id))]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterBlock, {
				title: `Price up to ${formatPrice(maxPrice)}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
					value: [maxPrice],
					min: priceBounds.min,
					max: priceBounds.max,
					step: 1e3,
					onValueChange: ([v]) => setMaxPrice(v ?? priceBounds.max),
					"aria-label": "Maximum price"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterBlock, {
				title: "Colour",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: allColors.map((c) => {
						const active = colors.includes(c.name);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => toggle(colors, c.name, setColors),
							"aria-pressed": active,
							className: `flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs transition-colors ${active ? "border-foreground bg-secondary" : "hover:bg-secondary"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-3 w-3 rounded-full border",
								style: { backgroundColor: c.hex },
								"aria-hidden": "true"
							}), c.name]
						}, c.name);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterBlock, {
				title: "Size",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: allSizes.map((s) => {
						const active = sizes.includes(s);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => toggle(sizes, s, setSizes),
							"aria-pressed": active,
							className: `min-w-11 rounded-full border px-3 py-1.5 text-xs transition-colors ${active ? "border-foreground bg-secondary" : "hover:bg-secondary"}`,
							children: s
						}, s);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterBlock, {
				title: "Availability",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
						id: "in-stock",
						checked: inStockOnly,
						onCheckedChange: (v) => setInStockOnly(Boolean(v))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "in-stock",
						className: "text-sm font-normal",
						children: "In stock only"
					})]
				})
			}),
			activeFilters > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				size: "sm",
				onClick: resetFilters,
				className: "w-fit",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}),
					" Clear filters (",
					activeFilters,
					")"
				]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "shell py-12",
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground",
						children: heading.title
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mt-6 max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl md:text-5xl",
					children: heading.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted-foreground",
					children: heading.blurb
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex items-center justify-between gap-4 border-y py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: loading ? "Loading…" : `${base.length} product${base.length === 1 ? "" : "s"}`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							className: "lg:hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, {}),
								" Filters",
								activeFilters > 0 && ` (${activeFilters})`
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
						side: "left",
						className: "w-[88vw] max-w-sm overflow-y-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
							className: "font-display text-xl",
							children: "Filters"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: filters
						})]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: search.sort ?? "featured",
						onValueChange: (value) => navigate({ search: (prev) => ({
							...prev,
							sort: value
						}) }),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							className: "h-9 w-[190px] rounded-full text-xs",
							"aria-label": "Sort products",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: sortOptions.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: o.value,
							children: o.label
						}, o.value)) })]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-12 lg:grid-cols-[240px_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sticky top-28",
						children: filters
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: !loading && base.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-dashed py-20 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl",
							children: "Nothing matches those filters"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Try widening your price range or clearing a size."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							className: "mt-6",
							onClick: resetFilters,
							children: "Clear filters"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, {
					products: base.slice(0, visible),
					loading
				}), !loading && visible < base.length && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 flex flex-col items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground",
						children: [
							"Showing ",
							Math.min(visible, base.length),
							" of ",
							base.length
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "lg",
						onClick: () => setVisible((v) => v + PAGE_SIZE),
						children: "Load more"
					})]
				})] }) })]
			})
		]
	});
}
function FilterBlock({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "eyebrow",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-4",
		children
	})] });
}
//#endregion
export { ShopPage as component };
