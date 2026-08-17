import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Label } from "./label-C_aR0ZSC.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-BUFQsumd.mjs";
import { D as Button, n as Input } from "./router-1yTLQKrJ2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-Dko1GK4k.js
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "shell flex justify-center py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Account"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 text-4xl",
							children: "Welcome back"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "Orders, addresses and saved pieces in one place."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
					defaultValue: "signin",
					className: "mt-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
							className: "grid w-full grid-cols-2 rounded-full bg-surface p-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "signin",
								className: "rounded-full py-2.5 text-xs data-[state=active]:bg-background",
								children: "Sign in"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: "register",
								className: "rounded-full py-2.5 text-xs data-[state=active]:bg-background",
								children: "Create account"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "signin",
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "flex flex-col gap-4",
								onSubmit: (e) => {
									e.preventDefault();
									toast.success("Signed in");
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										id: "login-email",
										label: "Email",
										type: "email",
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										id: "login-password",
										label: "Password",
										type: "password",
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										size: "lg",
										className: "mt-2",
										children: "Sign in"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => toast("Reset link sent if the email exists"),
										className: "link-underline self-center text-xs text-muted-foreground",
										children: "Forgot your password?"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "register",
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "flex flex-col gap-4",
								onSubmit: (e) => {
									e.preventDefault();
									toast.success("Account created");
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-4 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											id: "reg-first",
											label: "First name",
											required: true
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											id: "reg-last",
											label: "Last name",
											required: true
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										id: "reg-email",
										label: "Email",
										type: "email",
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										id: "reg-password",
										label: "Password",
										type: "password",
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										size: "lg",
										className: "mt-2",
										children: "Create account"
									})
								]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 text-center text-xs text-muted-foreground",
					children: [
						"Already signed in?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/account",
							className: "link-underline",
							children: "Go to your account"
						})
					]
				})
			]
		})
	});
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
//#endregion
export { LoginPage as component };
