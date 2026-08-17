import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/store/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service - Atelier Nord" },
      {
        name: "description",
        content: "The terms that apply when you browse or buy from the Atelier Nord online store.",
      },
      { property: "og:title", content: "Terms of Service - Atelier Nord" },
      { property: "og:description", content: "Orders, pricing, liability and governing law." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      updated="1 February 2026"
      intro="By using this store you agree to the terms below. They're written plainly on purpose."
      sections={[
        {
          heading: "Orders",
          body: (
            <p>
              An order is confirmed when we send the confirmation email. Because runs are small we
              may occasionally need to cancel a line item; in that case we refund it in full and tell
              you the same day.
            </p>
          ),
        },
        {
          heading: "Pricing",
          body: (
            <p>
              Prices are shown in your selected currency and include VAT where applicable. Duties for
              destinations outside the EU are calculated at checkout.
            </p>
          ),
        },
        {
          heading: "Product descriptions",
          body: (
            <p>
              Natural materials vary. Colour, grain and weave can differ slightly from photography,
              and that variation is not considered a fault.
            </p>
          ),
        },
        {
          heading: "Accounts",
          body: (
            <p>
              You're responsible for keeping your account credentials secure. Tell us immediately if
              you suspect unauthorised access.
            </p>
          ),
        },
        {
          heading: "Intellectual property",
          body: (
            <p>
              All photography, copy, patterns and branding on this site belong to Atelier Nord and
              may not be reproduced commercially without written permission.
            </p>
          ),
        },
        {
          heading: "Liability",
          body: (
            <p>
              Our liability is limited to the value of the goods purchased. Nothing here affects your
              statutory consumer rights.
            </p>
          ),
        },
        {
          heading: "Governing law",
          body: <p>These terms are governed by Danish law, with courts in Copenhagen.</p>,
        },
      ]}
    />
  ),
});
