# Atelier Nord

A modern, responsive e-commerce storefront built with **TanStack Start**, **React**, and **TypeScript**. The project focuses on a clean shopping experience, fast navigation, responsive layouts, and a polished product interface.

## ✨ Features

* Modern and responsive e-commerce UI
* Product browsing and product detail pages
* Shopping cart functionality
* Category and collection navigation
* Shipping & delivery information
* Returns and legal pages
* SEO-friendly route metadata
* Open Graph metadata
* Responsive design for desktop, tablet, and mobile
* Type-safe file-based routing
* Server-side rendering with TanStack Start
* Optimized production builds with Nitro

## 🛠️ Tech Stack

* **React** - UI library
* **TypeScript** - Type-safe development
* **TanStack Start** - Full-stack React framework
* **TanStack Router** - Type-safe file-based routing
* **Vite** - Development and build tooling
* **Nitro** - Server and deployment runtime
* **Tailwind CSS** - Styling
* **shadcn/ui** - Reusable UI components
* **Lucide React** - Icons

## 📁 Project Structure

```text
src/
├── components/
│   ├── store/
│   └── ui/
├── routes/
│   ├── index.tsx
│   ├── shipping.tsx
│   └── ...
├── server.ts
└── ...
```

## 🚀 Getting Started

### Prerequisites

* Node.js 18+
* npm

### Installation

Clone the repository:

```bash
git clone https://github.com/your-username/atelier-nord-ecommerce.git
```

Navigate to the project:

```bash
cd atelier-nord-ecommerce
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application at:

```text
http://localhost:3000
```

## 📦 Production Build

Create a production build:

```bash
npm run build
```

The production output depends on the configured Nitro deployment preset.

For a Node.js deployment:

```text
.output/
├── public/
└── server/
    └── index.mjs
```

The standalone Node.js server can be started with:

```bash
node .output/server/index.mjs
```

## 🌐 Deployment

The application can be configured for modern deployment platforms including:

* Vercel
* Cloudflare
* Node.js hosting
* cPanel Node.js hosting

The Nitro deployment preset can be changed depending on the target hosting environment.

## 🎨 Design

Atelier Nord uses a clean, minimal visual style designed around a premium e-commerce experience.

**Primary color:** `#CE7951`

The interface emphasizes:

* Clean typography
* Product-focused layouts
* Generous spacing
* Responsive components
* Simple navigation
* Clear calls to action

## 🔍 SEO

The application supports route-level SEO metadata including:

* Page titles
* Meta descriptions
* Canonical URLs
* Open Graph titles
* Open Graph descriptions
* Open Graph URLs

Example:

```tsx
export const Route = createFileRoute("/shipping")({
  head: () => ({
    meta: [
      { title: "Shipping & Delivery - Atelier Nord" },
      {
        name: "description",
        content: "Delivery times, carriers and duties for Atelier Nord orders.",
      },
    ],
  }),
});
```

## 📱 Responsive Design

The storefront is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile devices

![ScreenShot](https://github.com/Syedaaneesa/Atelier-Nord-Modern-E-commerce-Store-React-js-/blob/main/Atelier-Nord-Considered-Wardrobe-Essentials-08-17-2026_08_25_PM.png)

## 📄 License

This project is intended for portfolio and development purposes. Add your preferred license before distributing the project publicly.
