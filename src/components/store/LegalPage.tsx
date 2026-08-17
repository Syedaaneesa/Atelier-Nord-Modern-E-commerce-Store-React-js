import type { ReactNode } from "react";

export function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: { heading: string; body: ReactNode }[];
}) {
  return (
    <div className="shell py-14">
      <header className="max-w-2xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 text-4xl md:text-5xl">{title}</h1>
        <p className="mt-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">
          Last updated {updated}
        </p>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{intro}</p>
      </header>

      <div className="mt-12 grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-16">
        <nav aria-label="On this page" className="hidden lg:block">
          <ul className="sticky top-28 flex flex-col gap-3 border-l pl-5 text-sm text-muted-foreground">
            {sections.map((s) => (
              <li key={s.heading}>
                <a href={`#${slug(s.heading)}`} className="link-underline">
                  {s.heading}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex max-w-2xl flex-col gap-10">
          {sections.map((s) => (
            <section key={s.heading} id={slug(s.heading)} className="scroll-mt-28">
              <h2 className="text-2xl">{s.heading}</h2>
              <div className="mt-3 flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

function slug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
