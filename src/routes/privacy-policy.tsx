import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/store/LegalPage";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy - Atelier Nord" },
      {
        name: "description",
        content:
          "How Atelier Nord collects, uses and protects your personal data when you shop with us.",
      },
      { property: "og:title", content: "Privacy Policy - Atelier Nord" },
      { property: "og:description", content: "What we collect, why we collect it, and your rights." },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="1 February 2026"
      intro="We keep as little data as we can and never sell it. This page explains what we hold, why, and how to have it removed."
      sections={[
        {
          heading: "What we collect",
          body: (
            <>
              <p>
                When you place an order we store your name, email, delivery address, phone number and
                order history. Payment details are handled by our payment processor and never reach
                our servers.
              </p>
              <p>
                We also record basic analytics - pages viewed, device type, approximate region - to
                understand which parts of the store need work.
              </p>
            </>
          ),
        },
        {
          heading: "How we use it",
          body: (
            <p>
              To fulfil orders, handle returns, answer support requests, and - only if you opt in -
              send occasional emails about new pieces and restocks. You can unsubscribe from any
              email in one click.
            </p>
          ),
        },
        {
          heading: "Cookies",
          body: (
            <p>
              Essential cookies keep your bag and session working. Analytics cookies are optional and
              can be declined without affecting checkout.
            </p>
          ),
        },
        {
          heading: "Sharing",
          body: (
            <p>
              We share data only with the providers needed to run the store: payments, delivery
              carriers, email delivery and hosting. Each is bound by a data processing agreement.
            </p>
          ),
        },
        {
          heading: "Your rights",
          body: (
            <p>
              You can request a copy of your data, corrections, or full deletion at any time by
              writing to privacy@ateliernord.com. We respond within 30 days.
            </p>
          ),
        },
        {
          heading: "Retention",
          body: (
            <p>
              Order records are kept for seven years to meet tax obligations. Marketing preferences
              and analytics data are deleted after 24 months of inactivity.
            </p>
          ),
        },
      ]}
    />
  ),
});
