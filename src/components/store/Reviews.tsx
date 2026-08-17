import { StarRating } from "./StarRating";

export const testimonials = [
  {
    name: "Marta L.",
    location: "Stockholm",
    rating: 5,
    title: "The coat of a lifetime",
    text: "I've worn the camel overcoat every day for two winters. The wool still looks new and the fit is unmatched - it reads far more expensive than it was.",
    initials: "ML",
  },
  {
    name: "Daniel R.",
    location: "New York",
    rating: 5,
    title: "Quietly excellent",
    text: "Ordered the cashmere turtleneck expecting the usual thin knit. It's dense, heavy, genuinely warm. Third purchase this year.",
    initials: "DR",
  },
  {
    name: "Yuki T.",
    location: "Tokyo",
    rating: 4,
    title: "Beautiful leather",
    text: "The tote arrived unlined and stiff, exactly as described, and has softened into the best bag I own. Shipping took four days to Japan.",
    initials: "YT",
  },
  {
    name: "Camille B.",
    location: "Paris",
    rating: 5,
    title: "Sizing help was real",
    text: "Someone from the studio answered my fit question in an hour with actual measurements. The trousers fit perfectly first time.",
    initials: "CB",
  },
  {
    name: "Owen K.",
    location: "Melbourne",
    rating: 5,
    title: "Returns were painless",
    text: "Swapped my loafers a half size up. Label was in my inbox in minutes and the new pair shipped before the old ones landed.",
    initials: "OK",
  },
];

export function ReviewsSection() {
  return (
    <section className="shell py-20">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Worn and reviewed</p>
          <h2 className="mt-3 max-w-xl text-balance text-4xl md:text-5xl">
            4.8 average from 2,140 verified reviews
          </h2>
        </div>
        <StarRating rating={4.8} size={18} />
      </div>

      <ul className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 lg:grid lg:grid-cols-3 lg:overflow-visible">
        {testimonials.map((t) => (
          <li
            key={t.name}
            className="w-[85vw] shrink-0 snap-start rounded-3xl border bg-card p-7 shadow-soft sm:w-[420px] lg:w-auto"
          >
            <StarRating rating={t.rating} />
            <p className="mt-4 font-display text-xl">{t.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
            <div className="mt-6 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-accent-soft text-xs font-medium">
                {t.initials}
              </span>
              <span className="text-sm">
                {t.name}
                <span className="block text-xs text-muted-foreground">{t.location}</span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
