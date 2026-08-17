import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useNavigate, h as Link, j as notFound, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { a as DialogOverlay$1, c as DialogTrigger, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { C as Heart, S as House, T as Facebook, _ as Minus, a as Truck, d as ShoppingBag, h as Plus, i as Twitter, l as Sparkles, n as X, p as Search, r as User, s as Store, t as Youtube, v as Menu, x as Instagram } from "../_libs/lucide-react.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { n as Root, t as Indicator } from "../_libs/radix-ui__react-progress.mjs";
import { D as Button, E as sortOptions, O as cn, S as popularSearches, T as searchProducts, g as getProduct, i as StoreProvider, m as categories, n as Input, o as formatPrice, r as FREE_SHIPPING_THRESHOLD, s as useStore } from "./router-1yTLQKrJ2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sheet-a5HtZKZ6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Sheet = Dialog$1;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal$1;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay$1.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent$1.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle$1.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription$1.displayName;
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-1yTLQKrJ.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-xzACvtOM.css";
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function AnnouncementBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-foreground text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell flex h-10 items-center justify-center gap-6 text-[0.7rem] tracking-[0.08em]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, {
						className: "h-3.5 w-3.5",
						"aria-hidden": "true"
					}), "Complimentary shipping on orders over $250"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden h-3 w-px bg-primary-foreground/25 sm:block",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "hidden items-center gap-2 sm:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
						className: "h-3.5 w-3.5",
						"aria-hidden": "true"
					}), "Take 10% off your first order with code WELCOME10"]
				})
			]
		})
	});
}
var navLinks = [
	{
		label: "Shop",
		to: "/shop",
		search: {}
	},
	{
		label: "New Arrivals",
		to: "/shop",
		search: { tag: "new" }
	},
	{
		label: "Best Sellers",
		to: "/shop",
		search: { tag: "bestseller" }
	},
	{
		label: "Collections",
		to: "/collections",
		search: {}
	},
	{
		label: "About",
		to: "/about",
		search: {}
	}
];
function Header() {
	const { itemCount, wishlist, setCartOpen, setSearchOpen } = useStore();
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("sticky top-0 z-50 border-b transition-all duration-300", scrolled ? "border-border bg-background/85 backdrop-blur-xl" : "border-transparent bg-background"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell flex h-16 items-center justify-between gap-4 md:h-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-1 md:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
						open: menuOpen,
						onOpenChange: setMenuOpen,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "iconSm",
								"aria-label": "Open menu",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
							side: "left",
							className: "w-[85vw] max-w-sm p-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
								className: "sr-only",
								children: "Menu"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
								className: "flex flex-col gap-1 p-6 pt-14",
								children: [
									navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: link.to,
										search: link.search,
										onClick: () => setMenuOpen(false),
										className: "font-display text-2xl",
										children: link.label
									}, link.label)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow mt-8",
										children: "Categories"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 flex flex-col gap-2",
										children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/shop",
											search: { category: c.id },
											onClick: () => setMenuOpen(false),
											className: "text-sm text-muted-foreground",
											children: c.name
										}, c.id))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 flex flex-col gap-2 border-t pt-6 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/account",
											onClick: () => setMenuOpen(false),
											children: "My account"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/wishlist",
											onClick: () => setMenuOpen(false),
											children: "Wishlist"
										})]
									})
								]
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "font-display text-xl leading-none tracking-tight md:text-2xl",
					children: "Atelier Nord"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 md:flex",
					"aria-label": "Main",
					children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						search: link.search,
						activeOptions: {
							exact: true,
							includeSearch: true
						},
						activeProps: { className: "text-foreground" },
						inactiveProps: { className: "text-muted-foreground" },
						className: "link-underline text-[0.8rem] tracking-[0.06em] uppercase transition-colors hover:text-foreground",
						children: link.label
					}, link.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-0.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "iconSm",
							"aria-label": "Search products",
							onClick: () => setSearchOpen(true),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "iconSm",
							asChild: true,
							className: "hidden sm:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/account",
								"aria-label": "Account",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "iconSm",
							asChild: true,
							className: "relative hidden sm:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/wishlist",
								"aria-label": `Wishlist, ${wishlist.length} items`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {}), wishlist.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-accent" })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "iconSm",
							className: "relative",
							"aria-label": `Shopping bag, ${itemCount} items`,
							onClick: () => setCartOpen(true),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {}), itemCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-accent px-1 text-[0.6rem] font-medium text-accent-foreground",
								children: itemCount
							})]
						})
					]
				})
			]
		})
	});
}
function NewsletterForm({ className, compact = false }) {
	const [email, setEmail] = (0, import_react.useState)("");
	const [pending, setPending] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: cn("flex w-full gap-2", className),
		onSubmit: (e) => {
			e.preventDefault();
			setPending(true);
			setTimeout(() => {
				setPending(false);
				setEmail("");
				toast.success("You're on the list", { description: "Watch your inbox for WELCOME10." });
			}, 600);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: compact ? "newsletter-compact" : "newsletter",
				className: "sr-only",
				children: "Email address"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: compact ? "newsletter-compact" : "newsletter",
				type: "email",
				required: true,
				value: email,
				onChange: (e) => setEmail(e.target.value),
				placeholder: "you@email.com",
				className: cn("rounded-full bg-background", compact ? "h-10" : "h-12 px-5")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				size: compact ? "default" : "lg",
				disabled: pending,
				children: pending ? "Joining…" : "Subscribe"
			})
		]
	});
}
function NewsletterSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "shell py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-3xl bg-accent-soft px-6 py-16 text-center md:px-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "The Nord Letter"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mx-auto mt-4 max-w-2xl text-balance text-4xl md:text-5xl",
					children: "Early access to new pieces, and 10% off your first order."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-md text-sm text-muted-foreground",
					children: "One considered email a month. No noise."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-8 max-w-md",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsletterForm, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs text-muted-foreground",
					children: "By subscribing you agree to our privacy policy. Unsubscribe anytime."
				})
			]
		})
	});
}
var shopLinks = [
	{
		label: "All products",
		to: "/shop",
		search: {}
	},
	{
		label: "New arrivals",
		to: "/shop",
		search: { tag: "new" }
	},
	{
		label: "Best sellers",
		to: "/shop",
		search: { tag: "bestseller" }
	},
	{
		label: "Sale",
		to: "/shop",
		search: { tag: "sale" }
	},
	{
		label: "Collections",
		to: "/collections",
		search: {}
	}
];
var careLinks = [
	{
		label: "Shipping",
		to: "/shipping"
	},
	{
		label: "Returns & refunds",
		to: "/refund-policy"
	},
	{
		label: "Track an order",
		to: "/account"
	},
	{
		label: "Contact us",
		to: "/about"
	}
];
var aboutLinks = [
	{
		label: "Our story",
		to: "/about"
	},
	{
		label: "Materials",
		to: "/about"
	},
	{
		label: "Privacy policy",
		to: "/privacy-policy"
	},
	{
		label: "Terms of service",
		to: "/terms"
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 border-t bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl",
							children: "Atelier Nord"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: "Considered wardrobe essentials, made in small runs with mills and workshops we visit in person."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Join the list"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsletterForm, {
								className: "mt-3",
								compact: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex gap-2",
							children: [
								{
									Icon: Instagram,
									label: "Instagram"
								},
								{
									Icon: Twitter,
									label: "Twitter"
								},
								{
									Icon: Facebook,
									label: "Facebook"
								},
								{
									Icon: Youtube,
									label: "YouTube"
								}
							].map(({ Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://instagram.com",
								target: "_blank",
								rel: "noreferrer noopener",
								"aria-label": label,
								className: "grid h-9 w-9 place-items-center rounded-full border transition-colors hover:bg-background",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
							}, label))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterColumn, {
					title: "Shop",
					children: shopLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						search: l.search,
						className: "link-underline w-fit",
						children: l.label
					}, l.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterColumn, {
					title: "Customer care",
					children: careLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "link-underline w-fit",
						children: l.label
					}, l.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FooterColumn, {
					title: "Atelier",
					children: [aboutLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "link-underline w-fit",
						children: l.label
					}, l.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
						className: "mt-4 not-italic leading-relaxed text-muted-foreground",
						children: [
							"18 Rue des Merciers",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Copenhagen, DK 1050",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:hello@ateliernord.com",
								className: "link-underline",
								children: "hello@ateliernord.com"
							})
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell flex flex-col gap-4 border-t py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Atelier Nord. All rights reserved."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					"aria-label": "Accepted payment methods",
					children: [
						"Visa",
						"Mastercard",
						"Amex",
						"PayPal",
						"Apple Pay"
					].map((method) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-md border bg-background px-2 py-1 text-[0.65rem]",
						children: method
					}, method))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy-policy",
							className: "link-underline",
							children: "Privacy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/terms",
							className: "link-underline",
							children: "Terms"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/refund-policy",
							className: "link-underline",
							children: "Refunds"
						})
					]
				})
			]
		})]
	});
}
function FooterColumn({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "eyebrow",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "mt-4 flex flex-col gap-2.5 text-sm",
		children
	})] });
}
var Progress = import_react.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Indicator, {
		className: "h-full w-full flex-1 bg-primary transition-all",
		style: { transform: `translateX(-${100 - (value || 0)}%)` }
	})
}));
Progress.displayName = Root.displayName;
function FreeShippingBar() {
	const { subtotal, currency } = useStore();
	const remaining = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0);
	const pct = Math.min(subtotal / FREE_SHIPPING_THRESHOLD * 100, 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-surface p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs",
			children: remaining === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium",
				children: "Congrats - shipping is on us."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"You're ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium",
					children: formatPrice(remaining, currency)
				}),
				" away from free shipping."
			] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
			value: pct,
			className: "mt-3 h-1.5"
		})]
	});
}
function CartLineRow({ line, product, compact = false }) {
	const { updateQuantity, removeLine } = useStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/product/$slug",
			params: { slug: product.slug },
			className: "shrink-0 overflow-hidden rounded-xl bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.images[0],
				alt: product.name,
				loading: "lazy",
				width: 1024,
				height: 1280,
				className: compact ? "h-24 w-20 object-cover" : "h-32 w-26 object-cover"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 flex-1 flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/product/$slug",
						params: { slug: product.slug },
						className: "block truncate text-sm font-medium",
						children: product.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: [
							line.color,
							" · ",
							line.size
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "whitespace-nowrap text-sm",
					children: formatPrice(product.price * line.quantity, product.currency)
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-auto flex items-center justify-between pt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center rounded-full border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => updateQuantity(line.id, line.quantity - 1),
							"aria-label": "Decrease quantity",
							className: "grid h-8 w-8 place-items-center rounded-full transition-colors hover:bg-secondary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3.5 w-3.5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-7 text-center text-sm",
							"aria-live": "polite",
							children: line.quantity
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => updateQuantity(line.id, line.quantity + 1),
							"aria-label": "Increase quantity",
							className: "grid h-8 w-8 place-items-center rounded-full transition-colors hover:bg-secondary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => removeLine(line.id),
					className: "text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline",
					children: "Remove"
				})]
			})]
		})]
	});
}
function CartDrawer() {
	const { cartOpen, setCartOpen, detailedLines, subtotal, currency, itemCount } = useStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open: cartOpen,
		onOpenChange: setCartOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
			side: "right",
			className: "flex w-full flex-col gap-0 p-0 sm:max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-between border-b px-6 py-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetTitle, {
					className: "font-display text-xl",
					children: [
						"Your bag (",
						itemCount,
						")"
					]
				})
			}), detailedLines.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-16 w-16 place-items-center rounded-full bg-surface",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-6 w-6 text-muted-foreground" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl",
						children: "Your bag is empty"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Start with the pieces everyone comes back for."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						onClick: () => setCartOpen(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							search: { tag: "bestseller" },
							children: "Shop best sellers"
						})
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 overflow-y-auto px-6 py-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FreeShippingBar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 flex flex-col gap-6",
					children: detailedLines.map(({ line, product }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartLineRow, {
						line,
						product,
						compact: true
					}, line.id))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t px-6 py-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Subtotal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: formatPrice(subtotal, currency)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: "Taxes and shipping calculated at checkout."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-col gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							asChild: true,
							onClick: () => setCartOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/checkout",
								children: "Checkout"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							variant: "outline",
							asChild: true,
							onClick: () => setCartOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/cart",
								children: "View bag"
							})
						})]
					})
				]
			})] })]
		})
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
function SearchModal() {
	const { searchOpen, setSearchOpen, recentSearches, pushSearch, clearSearches } = useStore();
	const [term, setTerm] = (0, import_react.useState)("");
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (!searchOpen) setTerm("");
	}, [searchOpen]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				setSearchOpen(true);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [setSearchOpen]);
	const results = (0, import_react.useMemo)(() => searchProducts(term, 6), [term]);
	const categoryHits = (0, import_react.useMemo)(() => term.trim() ? categories.filter((c) => c.name.toLowerCase().includes(term.trim().toLowerCase())) : [], [term]);
	const close = () => setSearchOpen(false);
	const submit = (value) => {
		if (!value.trim()) return;
		pushSearch(value);
		close();
		navigate({
			to: "/shop",
			search: { q: value }
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: searchOpen,
		onOpenChange: setSearchOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "top-0 max-w-full translate-y-0 gap-0 rounded-none border-0 border-b p-0 sm:max-w-full",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
				className: "sr-only",
				children: "Search products"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						submit(term);
					},
					className: "flex items-center gap-3 py-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						className: "h-5 w-5 shrink-0 text-muted-foreground",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						autoFocus: true,
						value: term,
						onChange: (e) => setTerm(e.target.value),
						placeholder: "Search for coats, cashmere, leather…",
						"aria-label": "Search products",
						className: "h-12 border-0 bg-transparent px-0 text-base shadow-none focus-visible:ring-0"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-h-[70vh] overflow-y-auto pb-10",
					children: !term.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 pb-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Recent searches"
							}), recentSearches.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: clearSearches,
								className: "text-xs text-muted-foreground hover:text-foreground",
								children: "Clear"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: [recentSearches.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Nothing yet."
							}), recentSearches.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => submit(s),
								className: "rounded-full border px-3 py-1.5 text-xs transition-colors hover:bg-secondary",
								children: s
							}, s))]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Popular right now"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: popularSearches.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => submit(s),
								className: "rounded-full border px-3 py-1.5 text-xs transition-colors hover:bg-secondary",
								children: s
							}, s))
						})] })]
					}) : results.length === 0 && categoryHits.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-12 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display text-2xl",
								children: [
									"No matches for “",
									term,
									"”"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Try a material, a colour, or browse the full collection."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								onClick: close,
								className: "link-underline mt-4 inline-block text-sm",
								children: "Shop everything"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 pb-4 lg:grid-cols-[2fr_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Products"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 grid gap-3 sm:grid-cols-2",
							children: results.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/product/$slug",
								params: { slug: p.slug },
								onClick: () => {
									pushSearch(term);
									close();
								},
								className: "flex items-center gap-4 rounded-2xl p-2 transition-colors hover:bg-surface",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.images[0],
									alt: p.name,
									loading: "lazy",
									width: 1024,
									height: 1280,
									className: "h-16 w-14 rounded-lg object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate text-sm font-medium",
										children: p.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: formatPrice(p.price, p.currency)
									})]
								})]
							}) }, p.id))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Categories"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 flex flex-col gap-2 text-sm",
							children: (categoryHits.length ? categoryHits : categories.slice(0, 4)).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								search: { category: c.id },
								onClick: close,
								className: "link-underline",
								children: c.name
							}) }, c.id))
						})] })]
					})
				})]
			})]
		})
	});
}
function MobileBottomNav() {
	const { setSearchOpen, setCartOpen, itemCount } = useStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Quick navigation",
		className: "fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 backdrop-blur-xl md:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "grid grid-cols-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					activeOptions: { exact: true },
					activeProps: { className: "text-foreground" },
					inactiveProps: { className: "text-muted-foreground" },
					className: "flex flex-col items-center gap-1 py-3 text-[0.65rem]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-5 w-5" }), "Home"]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/shop",
					activeProps: { className: "text-foreground" },
					inactiveProps: { className: "text-muted-foreground" },
					className: "flex flex-col items-center gap-1 py-3 text-[0.65rem]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, { className: "h-5 w-5" }), "Shop"]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setSearchOpen(true),
					className: "flex w-full flex-col items-center gap-1 py-3 text-[0.65rem] text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-5 w-5" }), "Search"]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/wishlist",
					activeProps: { className: "text-foreground" },
					inactiveProps: { className: "text-muted-foreground" },
					className: "flex flex-col items-center gap-1 py-3 text-[0.65rem]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-5 w-5" }), "Saved"]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setCartOpen(true),
					className: "relative flex w-full flex-col items-center gap-1 py-3 text-[0.65rem] text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-5 w-5" }),
						itemCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute right-1/4 top-1.5 grid h-4 min-w-4 place-items-center rounded-full bg-accent px-1 text-[0.6rem] text-accent-foreground",
							children: itemCount
						}),
						"Bag"
					]
				}) })
			]
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[60vh] items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-4xl",
					children: "This page has sold out"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground",
						children: "Continue shopping"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex h-11 items-center rounded-full border px-6 text-sm font-medium",
						children: "Go home"
					})]
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[60vh] items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try again or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex h-11 cursor-pointer items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex h-11 items-center rounded-full border px-6 text-sm font-medium",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$14 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Atelier Nord - Considered Wardrobe Essentials" },
			{
				name: "description",
				content: "Small-run coats, cashmere, leather goods and footwear made with mills and workshops we visit in person."
			},
			{
				property: "og:site_name",
				content: "Atelier Nord"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,700&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "Atelier Nord",
				description: "Considered wardrobe essentials made in small runs."
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$14.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StoreProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-screen flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnnouncementBar, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						className: "flex-1 pb-16 md:pb-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBottomNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "bottom-right" })
		] })
	});
}
var $$splitComponentImporter$13 = () => import("./routes-BEmq4AwJ.mjs");
var Route$13 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Atelier Nord - Considered Wardrobe Essentials" },
			{
				name: "description",
				content: "Small-run coats, cashmere knitwear, leather goods and hand-welted footwear. Free shipping over $250, 30-day returns."
			},
			{
				property: "og:title",
				content: "Atelier Nord - Considered Wardrobe Essentials"
			},
			{
				property: "og:description",
				content: "Small-run coats, cashmere, leather goods and footwear, made to last decades."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./about-CCCAFAWW.mjs");
var Route$12 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "Our Story - Atelier Nord" },
			{
				name: "description",
				content: "Founded in Copenhagen in 2014, Atelier Nord makes small-run wardrobe essentials with three long-standing European workshops."
			},
			{
				property: "og:title",
				content: "Our Story - Atelier Nord"
			},
			{
				property: "og:description",
				content: "Three workshops, no seasons, and materials we buy a year ahead."
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./account-BDDfTYT0.mjs");
var Route$11 = createFileRoute("/account")({
	head: () => ({
		meta: [
			{ title: "My Account - Atelier Nord" },
			{
				name: "description",
				content: "Track orders, manage addresses and update your Atelier Nord profile."
			},
			{
				property: "og:title",
				content: "My Account - Atelier Nord"
			},
			{
				property: "og:description",
				content: "Orders, addresses, wishlist and profile settings."
			},
			{
				property: "og:url",
				content: "/account"
			},
			{
				name: "robots",
				content: "noindex"
			}
		],
		links: [{
			rel: "canonical",
			href: "/account"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./cart-O5hm0667.mjs");
var Route$10 = createFileRoute("/cart")({
	head: () => ({
		meta: [
			{ title: "Your Bag - Atelier Nord" },
			{
				name: "description",
				content: "Review the pieces in your Atelier Nord bag before checkout."
			},
			{
				property: "og:title",
				content: "Your Bag - Atelier Nord"
			},
			{
				property: "og:description",
				content: "Review your bag and continue to secure checkout."
			},
			{
				property: "og:url",
				content: "/cart"
			},
			{
				name: "robots",
				content: "noindex"
			}
		],
		links: [{
			rel: "canonical",
			href: "/cart"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./checkout-C533w9Eq.mjs");
var Route$9 = createFileRoute("/checkout")({
	head: () => ({
		meta: [
			{ title: "Secure Checkout - Atelier Nord" },
			{
				name: "description",
				content: "Complete your Atelier Nord order with encrypted checkout."
			},
			{
				property: "og:title",
				content: "Secure Checkout - Atelier Nord"
			},
			{
				property: "og:description",
				content: "Encrypted checkout, duties prepaid, 30-day returns."
			},
			{
				property: "og:url",
				content: "/checkout"
			},
			{
				name: "robots",
				content: "noindex"
			}
		],
		links: [{
			rel: "canonical",
			href: "/checkout"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./collections-CESEnKW5.mjs");
var Route$8 = createFileRoute("/collections")({
	head: () => ({
		meta: [
			{ title: "Collections - Atelier Nord" },
			{
				name: "description",
				content: "Explore Atelier Nord collections: outerwear, knitwear, leather goods, footwear, shirting, tailoring, dresses and accessories."
			},
			{
				property: "og:title",
				content: "Collections - Atelier Nord"
			},
			{
				property: "og:description",
				content: "Eight collections, each made in small runs with a single workshop."
			},
			{
				property: "og:url",
				content: "/collections"
			}
		],
		links: [{
			rel: "canonical",
			href: "/collections"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./login-Dko1GK4k.mjs");
var Route$7 = createFileRoute("/login")({
	head: () => ({
		meta: [
			{ title: "Sign In - Atelier Nord" },
			{
				name: "description",
				content: "Sign in or create an Atelier Nord account to track orders and save pieces."
			},
			{
				property: "og:title",
				content: "Sign In - Atelier Nord"
			},
			{
				property: "og:description",
				content: "Access your orders, addresses and wishlist."
			},
			{
				property: "og:url",
				content: "/login"
			},
			{
				name: "robots",
				content: "noindex"
			}
		],
		links: [{
			rel: "canonical",
			href: "/login"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./privacy-policy-BWaBWZJA.mjs");
var Route$6 = createFileRoute("/privacy-policy")({
	head: () => ({
		meta: [
			{ title: "Privacy Policy - Atelier Nord" },
			{
				name: "description",
				content: "How Atelier Nord collects, uses and protects your personal data when you shop with us."
			},
			{
				property: "og:title",
				content: "Privacy Policy - Atelier Nord"
			},
			{
				property: "og:description",
				content: "What we collect, why we collect it, and your rights."
			},
			{
				property: "og:url",
				content: "/privacy-policy"
			}
		],
		links: [{
			rel: "canonical",
			href: "/privacy-policy"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./refund-policy-SWqG0Ptp.mjs");
var Route$5 = createFileRoute("/refund-policy")({
	head: () => ({
		meta: [
			{ title: "Returns & Refunds - Atelier Nord" },
			{
				name: "description",
				content: "Free 30-day returns on unworn Atelier Nord pieces, with refunds issued within five working days."
			},
			{
				property: "og:title",
				content: "Returns & Refunds - Atelier Nord"
			},
			{
				property: "og:description",
				content: "How to return a piece and when your refund lands."
			},
			{
				property: "og:url",
				content: "/refund-policy"
			}
		],
		links: [{
			rel: "canonical",
			href: "/refund-policy"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./shipping-CP0PPxSA.mjs");
var Route$4 = createFileRoute("/shipping")({
	head: () => ({
		meta: [
			{ title: "Shipping & Delivery - Atelier Nord" },
			{
				name: "description",
				content: "Delivery times, carriers and duties for Atelier Nord orders, with free shipping over $250."
			},
			{
				property: "og:title",
				content: "Shipping & Delivery - Atelier Nord"
			},
			{
				property: "og:description",
				content: "Where we ship, how long it takes, what it costs."
			},
			{
				property: "og:url",
				content: "/shipping"
			}
		],
		links: [{
			rel: "canonical",
			href: "/shipping"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./shop-CwXoFNj2.mjs");
var Route$3 = createFileRoute("/shop")({
	validateSearch: (search) => ({
		q: typeof search["q"] === "string" ? search["q"] : void 0,
		category: categories.some((c) => c.id === search["category"]) ? search["category"] : void 0,
		tag: search["tag"] === "new" || search["tag"] === "bestseller" || search["tag"] === "sale" ? search["tag"] : void 0,
		sort: sortOptions.some((s) => s.value === search["sort"]) ? search["sort"] : void 0
	}),
	head: () => ({
		meta: [
			{ title: "Shop All - Atelier Nord" },
			{
				name: "description",
				content: "Browse every Atelier Nord piece: wool outerwear, cashmere knitwear, leather goods, footwear and tailoring. Filter by size, colour and price."
			},
			{
				property: "og:title",
				content: "Shop All - Atelier Nord"
			},
			{
				property: "og:description",
				content: "Filter the full Atelier Nord collection by category, size, colour and price."
			},
			{
				property: "og:url",
				content: "/shop"
			}
		],
		links: [{
			rel: "canonical",
			href: "/shop"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./terms-C4nd0mIQ.mjs");
var Route$2 = createFileRoute("/terms")({
	head: () => ({
		meta: [
			{ title: "Terms of Service - Atelier Nord" },
			{
				name: "description",
				content: "The terms that apply when you browse or buy from the Atelier Nord online store."
			},
			{
				property: "og:title",
				content: "Terms of Service - Atelier Nord"
			},
			{
				property: "og:description",
				content: "Orders, pricing, liability and governing law."
			},
			{
				property: "og:url",
				content: "/terms"
			}
		],
		links: [{
			rel: "canonical",
			href: "/terms"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./wishlist-BZ9yO_ck.mjs");
var Route$1 = createFileRoute("/wishlist")({
	head: () => ({
		meta: [
			{ title: "Wishlist - Atelier Nord" },
			{
				name: "description",
				content: "The Atelier Nord pieces you've saved for later."
			},
			{
				property: "og:title",
				content: "Wishlist - Atelier Nord"
			},
			{
				property: "og:description",
				content: "Your saved Atelier Nord pieces."
			},
			{
				property: "og:url",
				content: "/wishlist"
			},
			{
				name: "robots",
				content: "noindex"
			}
		],
		links: [{
			rel: "canonical",
			href: "/wishlist"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./product._slug-_TIxlsM0.mjs");
var Route = createFileRoute("/product/$slug")({
	loader: ({ params }) => {
		const product = getProduct(params.slug);
		if (!product) throw notFound();
		return { product };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Product unavailable - Atelier Nord" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { product } = loaderData;
		return {
			meta: [
				{ title: `${product.name} - Atelier Nord` },
				{
					name: "description",
					content: product.description.slice(0, 155)
				},
				{
					property: "og:title",
					content: `${product.name} - Atelier Nord`
				},
				{
					property: "og:description",
					content: product.description.slice(0, 155)
				},
				{
					property: "og:type",
					content: "product"
				},
				{
					property: "og:url",
					content: `/product/${product.slug}`
				}
			],
			links: [{
				rel: "canonical",
				href: `/product/${product.slug}`
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Product",
					name: product.name,
					description: product.description,
					aggregateRating: {
						"@type": "AggregateRating",
						ratingValue: product.rating,
						reviewCount: product.reviewCount
					},
					offers: {
						"@type": "Offer",
						price: (product.price / 100).toFixed(2),
						priceCurrency: product.currency,
						availability: product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
					}
				})
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$13.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$14
	}),
	AboutRoute: Route$12.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$14
	}),
	AccountRoute: Route$11.update({
		id: "/account",
		path: "/account",
		getParentRoute: () => Route$14
	}),
	CartRoute: Route$10.update({
		id: "/cart",
		path: "/cart",
		getParentRoute: () => Route$14
	}),
	CheckoutRoute: Route$9.update({
		id: "/checkout",
		path: "/checkout",
		getParentRoute: () => Route$14
	}),
	CollectionsRoute: Route$8.update({
		id: "/collections",
		path: "/collections",
		getParentRoute: () => Route$14
	}),
	LoginRoute: Route$7.update({
		id: "/login",
		path: "/login",
		getParentRoute: () => Route$14
	}),
	PrivacyPolicyRoute: Route$6.update({
		id: "/privacy-policy",
		path: "/privacy-policy",
		getParentRoute: () => Route$14
	}),
	RefundPolicyRoute: Route$5.update({
		id: "/refund-policy",
		path: "/refund-policy",
		getParentRoute: () => Route$14
	}),
	ShippingRoute: Route$4.update({
		id: "/shipping",
		path: "/shipping",
		getParentRoute: () => Route$14
	}),
	ShopRoute: Route$3.update({
		id: "/shop",
		path: "/shop",
		getParentRoute: () => Route$14
	}),
	TermsRoute: Route$2.update({
		id: "/terms",
		path: "/terms",
		getParentRoute: () => Route$14
	}),
	WishlistRoute: Route$1.update({
		id: "/wishlist",
		path: "/wishlist",
		getParentRoute: () => Route$14
	}),
	ProductSlugRoute: Route.update({
		id: "/product/$slug",
		path: "/product/$slug",
		getParentRoute: () => Route$14
	})
};
var routeTree = Route$14._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { Route$3 as a, Sheet as c, SheetTrigger as d, Route as i, SheetContent as l, FreeShippingBar as n, getRouter as o, NewsletterSection as r, router_exports as s, CartLineRow as t, SheetTitle as u };
