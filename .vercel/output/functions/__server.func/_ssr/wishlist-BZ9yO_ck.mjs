import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Heart } from "../_libs/lucide-react.mjs";
import { D as Button, _ as getProductById, s as useStore } from "./router-1yTLQKrJ2.mjs";
import { n as ProductGrid } from "./ProductGrid-DBrtmLWH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wishlist-BZ9yO_ck.js
var import_jsx_runtime = require_jsx_runtime();
function WishlistPage() {
	const { wishlist } = useStore();
	const items = wishlist.map(getProductById).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "shell py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "eyebrow",
			children: "Saved"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-4 text-4xl md:text-5xl",
			children: "Your wishlist"
		})] }), items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-14 flex flex-col items-center gap-5 rounded-3xl border border-dashed py-24 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-16 w-16 place-items-center rounded-full bg-surface",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-6 w-6 text-muted-foreground" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl",
					children: "Nothing saved yet"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Tap the heart on any product to keep it here."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						children: "Browse the collection"
					})
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, {
			products: items,
			className: "mt-12"
		})]
	});
}
//#endregion
export { WishlistPage as component };
