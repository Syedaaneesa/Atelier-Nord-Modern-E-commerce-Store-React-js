import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as StarRating } from "./ProductGrid-DBrtmLWH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Reviews-CG9niB-0.js
var import_jsx_runtime = require_jsx_runtime();
var testimonials = [
	{
		name: "Marta L.",
		location: "Stockholm",
		rating: 5,
		title: "The coat of a lifetime",
		text: "I've worn the camel overcoat every day for two winters. The wool still looks new and the fit is unmatched - it reads far more expensive than it was.",
		initials: "ML"
	},
	{
		name: "Daniel R.",
		location: "New York",
		rating: 5,
		title: "Quietly excellent",
		text: "Ordered the cashmere turtleneck expecting the usual thin knit. It's dense, heavy, genuinely warm. Third purchase this year.",
		initials: "DR"
	},
	{
		name: "Yuki T.",
		location: "Tokyo",
		rating: 4,
		title: "Beautiful leather",
		text: "The tote arrived unlined and stiff, exactly as described, and has softened into the best bag I own. Shipping took four days to Japan.",
		initials: "YT"
	},
	{
		name: "Camille B.",
		location: "Paris",
		rating: 5,
		title: "Sizing help was real",
		text: "Someone from the studio answered my fit question in an hour with actual measurements. The trousers fit perfectly first time.",
		initials: "CB"
	},
	{
		name: "Owen K.",
		location: "Melbourne",
		rating: 5,
		title: "Returns were painless",
		text: "Swapped my loafers a half size up. Label was in my inbox in minutes and the new pair shipped before the old ones landed.",
		initials: "OK"
	}
];
function ReviewsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "shell py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 md:flex-row md:items-end md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Worn and reviewed"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 max-w-xl text-balance text-4xl md:text-5xl",
				children: "4.8 average from 2,140 verified reviews"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarRating, {
				rating: 4.8,
				size: 18
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 lg:grid lg:grid-cols-3 lg:overflow-visible",
			children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "w-[85vw] shrink-0 snap-start rounded-3xl border bg-card p-7 shadow-soft sm:w-[420px] lg:w-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarRating, { rating: t.rating }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-display text-xl",
						children: t.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: t.text
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 place-items-center rounded-full bg-accent-soft text-xs font-medium",
							children: t.initials
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm",
							children: [t.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-muted-foreground",
								children: t.location
							})]
						})]
					})
				]
			}, t.name))
		})]
	});
}
//#endregion
export { testimonials as n, ReviewsSection as t };
