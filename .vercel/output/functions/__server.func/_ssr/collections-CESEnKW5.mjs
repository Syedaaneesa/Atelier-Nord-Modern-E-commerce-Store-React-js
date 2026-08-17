import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ArrowRight } from "../_libs/lucide-react.mjs";
import { h as filterProducts, m as categories } from "./router-1yTLQKrJ2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collections-CESEnKW5.js
var import_jsx_runtime = require_jsx_runtime();
function CollectionsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "shell py-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Collections"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-5xl md:text-6xl",
					children: "Eight edits, one wardrobe"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-sm leading-relaxed text-muted-foreground",
					children: "Each collection is developed with a single mill or workshop, then produced in runs small enough that we know every batch by name."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: categories.map((c, i) => {
				const count = filterProducts({ categories: [c.id] }).length;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/shop",
					search: { category: c.id },
					className: `media-zoom group relative block overflow-hidden rounded-3xl bg-surface ${i === 0 ? "sm:col-span-2 sm:row-span-1" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: i === 0 ? "aspect-16/10" : "aspect-4/5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: c.image,
							alt: c.name,
							loading: "lazy",
							width: 1024,
							height: 1280,
							className: "h-full w-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/75 to-transparent p-7 pt-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[0.65rem] uppercase tracking-[0.18em] text-primary-foreground/70",
								children: [count, " pieces"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 text-3xl text-primary-foreground",
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
				}, c.id);
			})
		})]
	});
}
//#endregion
export { CollectionsPage as component };
