import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Label } from "./label-C_aR0ZSC.mjs";
import { n as RadioGroupIndicator, r as RadioGroupItem$1, t as RadioGroup$1 } from "../_libs/@radix-ui/react-radio-group+[...].mjs";
import { E as Circle, b as Lock, f as ShieldCheck, o as Tag } from "../_libs/lucide-react.mjs";
import { D as Button, O as cn, n as Input, o as formatPrice, s as useStore } from "./router-1yTLQKrJ2.mjs";
import { t as Root } from "../_libs/radix-ui__react-separator.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-C533w9Eq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var RadioGroup = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup$1, {
		className: cn("grid gap-2", className),
		...props,
		ref
	});
});
RadioGroup.displayName = RadioGroup$1.displayName;
var RadioGroupItem = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem$1, {
		ref,
		className: cn("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupIndicator, {
			className: "flex items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-3.5 w-3.5 fill-primary" })
		})
	});
});
RadioGroupItem.displayName = RadioGroupItem$1.displayName;
var Separator = import_react.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	decorative,
	orientation,
	className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
	...props
}));
Separator.displayName = Root.displayName;
function CheckoutPage() {
	const { detailedLines, subtotal, discountAmount, discountCode, shipping, tax, total, currency, applyDiscount, clearCart } = useStore();
	const navigate = useNavigate();
	const [delivery, setDelivery] = (0, import_react.useState)("standard");
	const [code, setCode] = (0, import_react.useState)("");
	const [placing, setPlacing] = (0, import_react.useState)(false);
	const expressFee = 1800;
	const orderTotal = total + (delivery === "express" ? expressFee : 0);
	if (detailedLines.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "shell flex min-h-[60vh] flex-col items-center justify-center gap-5 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl",
				children: "Nothing to check out"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Add a piece to your bag first."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "lg",
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					children: "Shop the collection"
				})
			})
		]
	});
	const placeOrder = (e) => {
		e.preventDefault();
		setPlacing(true);
		setTimeout(() => {
			clearCart();
			setPlacing(false);
			toast.success("Order placed", { description: "A confirmation is on its way to your inbox." });
			navigate({ to: "/account" });
		}, 900);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "shell py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl md:text-5xl",
				children: "Checkout"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "hidden items-center gap-2 text-xs text-muted-foreground sm:flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3.5 w-3.5" }), " Secure 256-bit encrypted"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: placeOrder,
			className: "mt-10 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						title: "Contact information",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: "email",
							label: "Email",
							type: "email",
							placeholder: "you@email.com",
							required: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: "phone",
							label: "Phone (for delivery updates)",
							type: "tel",
							placeholder: "+45 00 00 00 00"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						title: "Shipping address",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									id: "first",
									label: "First name",
									required: true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									id: "last",
									label: "Last name",
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "address",
								label: "Address",
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "apt",
								label: "Apartment, suite (optional)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										id: "city",
										label: "City",
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										id: "zip",
										label: "Postal code",
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										id: "country",
										label: "Country",
										defaultValue: "Denmark",
										required: true
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						title: "Delivery method",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioGroup, {
							value: delivery,
							onValueChange: setDelivery,
							className: "gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeliveryOption, {
								value: "standard",
								label: "Standard - 2–4 business days",
								price: shipping === 0 ? "Free" : formatPrice(shipping, currency)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeliveryOption, {
								value: "express",
								label: "Express - next business day",
								price: formatPrice(expressFee, currency)
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						title: "Payment",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-2 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-accent" }), " All transactions are encrypted. We never store card details."]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex flex-col gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									id: "card",
									label: "Card number",
									placeholder: "4242 4242 4242 4242",
									required: true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											id: "exp",
											label: "Expiry",
											placeholder: "MM / YY",
											required: true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											id: "cvc",
											label: "CVC",
											placeholder: "123",
											required: true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											id: "zipcard",
											label: "Billing ZIP",
											required: true
										})
									]
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "xl",
						className: "w-full",
						disabled: placing,
						children: placing ? "Placing order…" : `Pay ${formatPrice(orderTotal, currency)}`
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "lg:sticky lg:top-28 lg:self-start",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl bg-surface p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: "Order summary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 flex flex-col gap-4",
							children: detailedLines.map(({ line, product }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-4",
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
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate text-sm font-medium",
											children: product.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-muted-foreground",
											children: [
												line.color,
												" · ",
												line.size,
												" · Qty ",
												line.quantity
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm",
										children: formatPrice(product.price * line.quantity, product.currency)
									})
								]
							}, line.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-6" }),
						discountCode ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "h-3.5 w-3.5" }),
								" ",
								discountCode,
								" applied"
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "checkout-code",
									className: "sr-only",
									children: "Discount code"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "checkout-code",
									value: code,
									onChange: (e) => setCode(e.target.value),
									placeholder: "Discount code",
									className: "h-10 rounded-full bg-background"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "outline",
									onClick: () => {
										if (applyDiscount(code)) setCode("");
									},
									children: "Apply"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-6 flex flex-col gap-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Subtotal",
									value: formatPrice(subtotal, currency)
								}),
								discountAmount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Discount",
									value: `−${formatPrice(discountAmount, currency)}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Shipping",
									value: delivery === "express" ? formatPrice(expressFee, currency) : shipping === 0 ? "Free" : formatPrice(shipping, currency)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Taxes",
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
								children: formatPrice(orderTotal, currency)
							})]
						})
					]
				})
			})]
		})]
	});
}
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "font-display text-2xl",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-5 flex flex-col gap-4",
		children
	})] });
}
function Field({ id, label, ...props }) {
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
function DeliveryOption({ value, label, price }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
		htmlFor: value,
		className: "flex cursor-pointer items-center justify-between rounded-2xl border p-4 text-sm font-normal transition-colors has-[button[data-state=checked]]:border-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
				value,
				id: value
			}), label]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: price })]
	});
}
function SummaryRow({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: value })]
	});
}
//#endregion
export { CheckoutPage as component };
