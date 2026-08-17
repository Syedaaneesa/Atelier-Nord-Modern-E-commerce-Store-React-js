import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/store/LegalPage";

export const Route = createFileRoute("/shipping")({
  head: () => ({
    meta: [
      { title: "Shipping & Delivery - Atelier Nord" },
      {
        name: "description",
        content:
          "Delivery times, carriers and duties for Atelier Nord orders, with free shipping over $250.",
      },
      { property: "og:title", content: "Shipping & Delivery - Atelier Nord" },
      { property: "og:description", content: "Where we ship, how long it takes, what it costs." },
      { property: "og:url", content: "/shipping" },
    ],
    links: [{ rel: "canonical", href: "/shipping" }],
  }),
  component: () => (
    <LegalPage
      eyebrow="Support"
      title="Shipping & Delivery"
      updated="1 February 2026"
      intro="Orders leave the studio within one working day. Everything ships tracked, in recyclable packaging."
      sections={[
        {
          heading: "Rates",
          body: (
            <p>
              Standard shipping is $12 and free on orders over $250. Express is $24 and available to
              most cities.
            </p>
          ),
        },
        {
          heading: "Delivery times",
          body: (
            <>
              <p>Domestic: 2–3 working days standard, next day express.</p>
              <p>Europe: 3–5 working days. Rest of world: 5–9 working days.</p>
            </>
          ),
        },
        {
          heading: "Tracking",
          body: (
            <p>
              You'll get a tracking link as soon as the carrier scans your parcel. It also lives in
              your account under the relevant order.
            </p>
          ),
        },
        {
          heading: "Duties and taxes",
          body: (
            <p>
              EU and domestic prices include VAT. For other destinations, duties are calculated and
              prepaid at checkout so nothing is owed on arrival.
            </p>
          ),
        },
        {
          heading: "Packaging",
          body: (
            <p>
              Garments travel in an unbleached cotton bag inside a recycled mailer. No plastic, no
              printed inserts.
            </p>
          ),
        },
      ]}
    />
  ),
});
