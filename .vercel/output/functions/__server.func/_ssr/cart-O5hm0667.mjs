import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as ShoppingBag, o as Tag } from "../_libs/lucide-react.mjs";
import { n as FreeShippingBar, t as CartLineRow } from "./router-1yTLQKrJ.mjs";
import { D as Button, n as Input, o as formatPrice, s as useStore } from "./router-1yTLQKrJ2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-O5hm0667.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CartPage() {
	const { detailedLines, subtotal, discountAmount, discountCode, shipping, tax, total, currency, applyDiscount, removeDiscount } = useStore();
	const [code, setCode] = (0, import_react.useState)("");
	if (detailedLines.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "shell flex min-h-[60vh] flex-col items-center justify-center gap-5 py-20 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-16 w-16 place-items-center rounded-full bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-6 w-6 text-muted-foreground" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl",
				children: "Your bag is empty"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-sm text-sm text-muted-foreground",
				children: "Nothing here yet. Start with the coats and cashmere everyone comes back for."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						children: "Shop all"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					variant: "outline",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						search: { tag: "bestseller" },
						children: "Best sellers"
					})
				})]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "shell py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-4xl md:text-5xl",
			children: "Your bag"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FreeShippingBar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 flex flex-col gap-8 border-t pt-8",
					children: detailedLines.map(({ line, product }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartLineRow, {
						line,
						product
					}, line.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: "link-underline mt-8 inline-block text-sm",
					children: "Continue shopping"
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "lg:sticky lg:top-28 lg:self-start",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: "Order summary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6",
							children: discountCode ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between rounded-full bg-accent-soft px-4 py-2.5 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "h-3.5 w-3.5" }),
										" ",
										discountCode,
										" applied"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: removeDiscount,
									className: "underline",
									children: "Remove"
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "flex gap-2",
								onSubmit: (e) => {
									e.preventDefault();
									if (applyDiscount(code)) setCode("");
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "discount",
										className: "sr-only",
										children: "Discount code"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "discount",
										value: code,
										onChange: (e) => setCode(e.target.value),
										placeholder: "Discount code",
										className: "h-10 rounded-full"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										variant: "outline",
										children: "Apply"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-6 flex flex-col gap-3 border-t pt-6 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Subtotal",
									value: formatPrice(subtotal, currency)
								}),
								discountAmount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Discount",
									value: `−${formatPrice(discountAmount, currency)}`,
									accent: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Estimated shipping",
									value: shipping === 0 ? "Free" : formatPrice(shipping, currency)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Estimated tax",
									value: formatPrice(tax, currency)
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-baseline justify-between border-t pt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm",
								children: "Total"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl",
								children: formatPrice(total, currency)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "xl",
							className: "mt-6 w-full",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/checkout",
								children: "Checkout securely"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-center text-xs text-muted-foreground",
							children: "Taxes and shipping finalised at checkout."
						})
					]
				})
			})]
		})]
	});
}
function Row({ label, value, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: accent ? "text-accent" : void 0,
			children: value
		})]
	});
}
//#endregion
export { CartPage as component };
