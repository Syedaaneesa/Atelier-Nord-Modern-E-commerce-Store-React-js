import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/store/LegalPage";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Returns & Refunds - Atelier Nord" },
      {
        name: "description",
        content:
          "Free 30-day returns on unworn Atelier Nord pieces, with refunds issued within five working days.",
      },
      { property: "og:title", content: "Returns & Refunds - Atelier Nord" },
      { property: "og:description", content: "How to return a piece and when your refund lands." },
      { property: "og:url", content: "/refund-policy" },
    ],
    links: [{ rel: "canonical", href: "/refund-policy" }],
  }),
  component: () => (
    <LegalPage
      eyebrow="Support"
      title="Returns & Refunds"
      updated="1 February 2026"
      intro="Try things on at home. If a piece isn't right, send it back within 30 days and we'll refund it."
      sections={[
        {
          heading: "The window",
          body: (
            <p>
              You have 30 days from delivery to start a return. Pieces must be unworn, unwashed and
              with their tags attached.
            </p>
          ),
        },
        {
          heading: "How to start",
          body: (
            <p>
              Open your order in the account area and choose “Start a return”. We email a prepaid
              label for domestic and EU addresses; elsewhere we refund the cheapest tracked postage
              on request.
            </p>
          ),
        },
        {
          heading: "Refunds",
          body: (
            <p>
              Once the parcel reaches the studio we inspect and refund within five working days, to
              the original payment method. Banks usually take another two to three days to display
              it.
            </p>
          ),
        },
        {
          heading: "Exchanges",
          body: (
            <p>
              For a different size or colour, place a new order and return the original. That way the
              size you want isn't held up in transit.
            </p>
          ),
        },
        {
          heading: "Faults and repairs",
          body: (
            <p>
              If something fails in normal wear within two years, we repair it free or replace it.
              Send photos to care@ateliernord.com and we'll take it from there.
            </p>
          ),
        },
        {
          heading: "Final sale",
          body: (
            <p>
              Archive pieces marked “final sale” and made-to-measure orders can't be returned unless
              faulty.
            </p>
          ),
        },
      ]}
    />
  ),
});
