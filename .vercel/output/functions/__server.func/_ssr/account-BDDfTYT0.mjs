import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Label } from "./label-C_aR0ZSC.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-BUFQsumd.mjs";
import { C as Heart, g as Package, r as User, y as MapPin } from "../_libs/lucide-react.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-D9Tbz7FI.mjs";
import { D as Button, _ as getProductById, n as Input, o as formatPrice, s as useStore, w as products } from "./router-1yTLQKrJ2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account-BDDfTYT0.js
var import_jsx_runtime = require_jsx_runtime();
var orders = [
	{
		id: "AN-24817",
		date: "12 August 2026",
		status: "Delivered",
		total: 79500,
		items: [{
			productId: "1",
			size: "S",
			color: "Camel",
			quantity: 1
		}, {
			productId: "5",
			size: "One size",
			color: "Oat",
			quantity: 1
		}]
	},
	{
		id: "AN-24390",
		date: "28 June 2026",
		status: "In transit",
		total: 49500,
		items: [{
			productId: "9",
			size: "One size",
			color: "Tan",
			quantity: 1
		}]
	},
	{
		id: "AN-23771",
		date: "3 March 2026",
		status: "Delivered",
		total: 31e3,
		items: [{
			productId: "3",
			size: "M",
			color: "Ivory",
			quantity: 1
		}]
	}
];
var addresses = [{
	label: "Home",
	lines: [
		"Ali Imran",
		"Gulberg III, House 22",
		"Lahore, 54660",
		"Pakistan"
	],
	default: true
}, {
	label: "Studio",
	lines: [
		"Ali Imran",
		"12 Mall Road",
		"Lahore, 54000",
		"Pakistan"
	],
	default: false
}];
function AccountPage() {
	const { wishlist } = useStore();
	const saved = wishlist.map(getProductById).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "shell py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Account"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-4xl md:text-5xl",
						children: "Hello, Ali"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: "ali@example.com · Member since 2021"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						children: "Sign out"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				defaultValue: "orders",
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList, {
						className: "flex h-auto w-full flex-wrap justify-start gap-1 rounded-full bg-surface p-1",
						children: [
							{
								value: "orders",
								label: "Orders",
								Icon: Package
							},
							{
								value: "wishlist",
								label: "Wishlist",
								Icon: Heart
							},
							{
								value: "addresses",
								label: "Addresses",
								Icon: MapPin
							},
							{
								value: "profile",
								label: "Profile",
								Icon: User
							}
						].map(({ value, label, Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
							value,
							className: "gap-2 rounded-full px-5 py-2.5 text-xs data-[state=active]:bg-background",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5" }), label]
						}, value))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "orders",
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
							type: "single",
							collapsible: true,
							className: "rounded-3xl border px-6",
							children: orders.map((order) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
								value: order.id,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex flex-1 flex-wrap items-center justify-between gap-3 pr-4 text-left",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-sm font-medium",
										children: order.id
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: order.date
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-accent-soft px-3 py-1 text-[0.65rem] uppercase tracking-[0.12em]",
											children: order.status
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm",
											children: formatPrice(order.total)
										})]
									})]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "flex flex-col gap-4",
									children: order.items.map((item) => {
										const product = getProductById(item.productId);
										if (!product) return null;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-4",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: product.images[0],
													alt: product.name,
													loading: "lazy",
													width: 1024,
													height: 1280,
													className: "h-20 w-16 rounded-xl object-cover"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "min-w-0 flex-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
														to: "/product/$slug",
														params: { slug: product.slug },
														className: "link-underline text-sm font-medium",
														children: product.name
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "mt-1 text-xs text-muted-foreground",
														children: [
															item.color,
															" · ",
															item.size,
															" · Qty ",
															item.quantity
														]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm",
													children: formatPrice(product.price * item.quantity)
												})
											]
										}, item.productId);
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "outline",
										size: "sm",
										children: "Track parcel"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "sm",
										children: "Start a return"
									})]
								})] })]
							}, order.id))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "wishlist",
						className: "mt-8",
						children: saved.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyPanel, {
							title: "Nothing saved yet",
							copy: "Tap the heart on any product to keep it here."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
							children: saved.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-4 rounded-2xl border p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.images[0],
									alt: p.name,
									loading: "lazy",
									width: 1024,
									height: 1280,
									className: "h-20 w-16 rounded-xl object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/product/$slug",
										params: { slug: p.slug },
										className: "link-underline block truncate text-sm font-medium",
										children: p.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: formatPrice(p.price)
									})]
								})]
							}, p.id))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "addresses",
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [addresses.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium",
											children: a.label
										}), a.default && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-accent-soft px-3 py-1 text-[0.65rem] uppercase tracking-[0.12em]",
											children: "Default"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("address", {
										className: "mt-4 text-sm not-italic leading-relaxed text-muted-foreground",
										children: a.lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block",
											children: l
										}, l))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "outline",
											size: "sm",
											children: "Edit"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "ghost",
											size: "sm",
											children: "Remove"
										})]
									})
								]
							}, a.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => toast("Address form coming soon"),
								className: "grid min-h-40 cursor-pointer place-items-center rounded-3xl border border-dashed text-sm text-muted-foreground transition-colors hover:bg-surface",
								children: "+ Add a new address"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "profile",
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "max-w-xl rounded-3xl border p-7",
							onSubmit: (e) => {
								e.preventDefault();
								toast.success("Profile updated");
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileField, {
										id: "first-name",
										label: "First name",
										defaultValue: "Ali"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileField, {
										id: "last-name",
										label: "Last name",
										defaultValue: "Imran"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex flex-col gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileField, {
										id: "acct-email",
										label: "Email",
										type: "email",
										defaultValue: "ali@example.com"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileField, {
										id: "acct-phone",
										label: "Phone",
										type: "tel",
										defaultValue: "+92 300 0000000"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									className: "mt-6",
									children: "Save changes"
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl",
					children: "Picked for you"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 grid grid-cols-2 gap-4 md:grid-cols-4",
					children: products.slice(0, 4).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/product/$slug",
						params: { slug: p.slug },
						className: "media-zoom group block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden rounded-2xl bg-surface",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.images[0],
									alt: p.name,
									loading: "lazy",
									width: 1024,
									height: 1280,
									className: "aspect-4/5 w-full object-cover"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: formatPrice(p.price)
							})
						]
					}) }, p.id))
				})]
			})
		]
	});
}
function ProfileField({ id, label, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
		htmlFor: id,
		className: "text-xs text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
		id,
		className: "mt-2 h-11 rounded-xl",
		...props
	})] });
}
function EmptyPanel({ title, copy }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl border border-dashed py-20 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-2xl",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted-foreground",
			children: copy
		})]
	});
}
//#endregion
export { AccountPage as component };
