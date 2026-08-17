import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero.jpg";
import lifestyle1 from "@/assets/lifestyle-1.jpg";
import promo from "@/assets/promo.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story - Atelier Nord" },
      {
        name: "description",
        content:
          "Founded in Copenhagen in 2014, Atelier Nord makes small-run wardrobe essentials with three long-standing European workshops.",
      },
      { property: "og:title", content: "Our Story - Atelier Nord" },
      {
        property: "og:description",
        content: "Three workshops, no seasons, and materials we buy a year ahead.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <div className="relative h-[52vh] min-h-[360px] overflow-hidden">
        <img
          src={hero}
          alt="Atelier Nord campaign image"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover object-[65%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="shell relative flex h-full items-end pb-12">
          <div className="max-w-xl">
            <p className="eyebrow">Since 2014</p>
            <h1 className="mt-4 text-5xl md:text-6xl">Fewer things, made properly</h1>
          </div>
        </div>
      </div>

      <div className="shell grid gap-12 py-16 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div className="flex flex-col gap-6 text-sm leading-relaxed text-muted-foreground">
          <p className="text-lg leading-relaxed text-foreground">
            We started in a two-room studio in Copenhagen with one coat and a stubborn idea: buy the
            best material you can, make less of it, and stand behind it for years.
          </p>
          <p>
            Twelve years on, the process hasn't changed much. We work with three workshops - a wool
            mill in Biella, a knitting house outside Ulaanbaatar, and a family shoemaker in Alicante
            - and we visit each of them twice a year. Nothing is designed for a season. Pieces enter
            the permanent collection or they don't get made.
          </p>
          <p>
            Because runs are small, sizes sell out and restocks take time. We think that's a fair
            trade for garments that hold their shape after a decade of Monday mornings.
          </p>
          <div className="grid grid-cols-3 gap-6 border-t pt-8">
            {[
              { value: "3", label: "Workshops" },
              { value: "120k", label: "Customers" },
              { value: "4.8", label: "Average rating" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl text-foreground">{s.value}</p>
                <p className="mt-1 text-xs">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-3">
            <Button size="lg" asChild>
              <Link to="/shop">Shop the collection</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:hello@ateliernord.com">Contact the studio</a>
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          <img
            src={promo}
            alt="Cashmere knitwear stacked in the studio"
            loading="lazy"
            width={1600}
            height={1104}
            className="w-full rounded-3xl object-cover"
          />
          <img
            src={lifestyle1}
            alt="Customers wearing Atelier Nord knitwear"
            loading="lazy"
            width={1024}
            height={1024}
            className="w-full rounded-3xl object-cover"
          />
        </div>
      </div>

      <div className="shell pb-20">
        <div className="rounded-3xl border p-8 md:p-12">
          <h2 className="text-3xl">Visit or write to us</h2>
          <div className="mt-6 grid gap-8 text-sm text-muted-foreground md:grid-cols-3">
            <p>
              <span className="block text-foreground">Studio</span>
              18 Rue des Merciers
              <br />
              Copenhagen, DK 1050
            </p>
            <p>
              <span className="block text-foreground">Email</span>
              <a href="mailto:hello@ateliernord.com" className="link-underline">
                hello@ateliernord.com
              </a>
            </p>
            <p>
              <span className="block text-foreground">Hours</span>
              Mon–Fri, 9–17 CET
              <br />
              Replies within a few hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
