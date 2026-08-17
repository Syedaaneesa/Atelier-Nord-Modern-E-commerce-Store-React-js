import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { NewsletterForm } from "./Newsletter";

const shopLinks = [
  { label: "All products", to: "/shop" as const, search: {} },
  { label: "New arrivals", to: "/shop" as const, search: { tag: "new" as const } },
  { label: "Best sellers", to: "/shop" as const, search: { tag: "bestseller" as const } },
  { label: "Sale", to: "/shop" as const, search: { tag: "sale" as const } },
  { label: "Collections", to: "/collections" as const, search: {} },
];

const careLinks = [
  { label: "Shipping", to: "/shipping" as const },
  { label: "Returns & refunds", to: "/refund-policy" as const },
  { label: "Track an order", to: "/account" as const },
  { label: "Contact us", to: "/about" as const },
];

const aboutLinks = [
  { label: "Our story", to: "/about" as const },
  { label: "Materials", to: "/about" as const },
  { label: "Privacy policy", to: "/privacy-policy" as const },
  { label: "Terms of service", to: "/terms" as const },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t bg-surface">
      <div className="shell grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-8">
        <div className="max-w-sm">
          <p className="font-display text-2xl">Atelier Nord</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Considered wardrobe essentials, made in small runs with mills and workshops we visit in
            person.
          </p>
          <div className="mt-6">
            <p className="eyebrow">Join the list</p>
            <NewsletterForm className="mt-3" compact />
          </div>
          <div className="mt-6 flex gap-2">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Twitter, label: "Twitter" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full border transition-colors hover:bg-background"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Shop">
          {shopLinks.map((l) => (
            <Link key={l.label} to={l.to} search={l.search} className="link-underline w-fit">
              {l.label}
            </Link>
          ))}
        </FooterColumn>

        <FooterColumn title="Customer care">
          {careLinks.map((l) => (
            <Link key={l.label} to={l.to} className="link-underline w-fit">
              {l.label}
            </Link>
          ))}
        </FooterColumn>

        <FooterColumn title="Atelier">
          {aboutLinks.map((l) => (
            <Link key={l.label} to={l.to} className="link-underline w-fit">
              {l.label}
            </Link>
          ))}
          <address className="mt-4 not-italic leading-relaxed text-muted-foreground">
            18 Rue des Merciers
            <br />
            Copenhagen, DK 1050
            <br />
            <a href="mailto:hello@ateliernord.com" className="link-underline">
              hello@ateliernord.com
            </a>
          </address>
        </FooterColumn>
      </div>

      <div className="shell flex flex-col gap-4 border-t py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Atelier Nord. All rights reserved.</p>
        <div className="flex items-center gap-2" aria-label="Accepted payment methods">
          {["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay"].map((method) => (
            <span key={method} className="rounded-md border bg-background px-2 py-1 text-[0.65rem]">
              {method}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <Link to="/privacy-policy" className="link-underline">
            Privacy
          </Link>
          <Link to="/terms" className="link-underline">
            Terms
          </Link>
          <Link to="/refund-policy" className="link-underline">
            Refunds
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow">{title}</p>
      <nav className="mt-4 flex flex-col gap-2.5 text-sm">{children}</nav>
    </div>
  );
}
