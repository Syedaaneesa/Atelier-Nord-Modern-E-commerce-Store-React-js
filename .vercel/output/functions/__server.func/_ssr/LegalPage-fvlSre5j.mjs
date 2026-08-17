import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LegalPage-fvlSre5j.js
var import_jsx_runtime = require_jsx_runtime();
function LegalPage({ eyebrow, title, updated, intro, sections }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "shell py-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-4xl md:text-5xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-xs uppercase tracking-[0.14em] text-muted-foreground",
					children: ["Last updated ", updated]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm leading-relaxed text-muted-foreground",
					children: intro
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "On this page",
				className: "hidden lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "sticky top-28 flex flex-col gap-3 border-l pl-5 text-sm text-muted-foreground",
					children: sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${slug(s.heading)}`,
						className: "link-underline",
						children: s.heading
					}) }, s.heading))
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex max-w-2xl flex-col gap-10",
				children: sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: slug(s.heading),
					className: "scroll-mt-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl",
						children: s.heading
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground",
						children: s.body
					})]
				}, s.heading))
			})]
		})]
	});
}
function slug(value) {
	return value.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
//#endregion
export { LegalPage as t };
