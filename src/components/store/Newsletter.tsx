import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function NewsletterForm({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const [email, setEmail] = useState("");
  const [pending, setPending] = useState(false);

  return (
    <form
      className={cn("flex w-full gap-2", className)}
      onSubmit={(e) => {
        e.preventDefault();
        setPending(true);
        setTimeout(() => {
          setPending(false);
          setEmail("");
          toast.success("You're on the list", { description: "Watch your inbox for WELCOME10." });
        }, 600);
      }}
    >
      <label htmlFor={compact ? "newsletter-compact" : "newsletter"} className="sr-only">
        Email address
      </label>
      <Input
        id={compact ? "newsletter-compact" : "newsletter"}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        className={cn("rounded-full bg-background", compact ? "h-10" : "h-12 px-5")}
      />
      <Button type="submit" size={compact ? "default" : "lg"} disabled={pending}>
        {pending ? "Joining…" : "Subscribe"}
      </Button>
    </form>
  );
}

export function NewsletterSection() {
  return (
    <section className="shell py-20">
      <div className="rounded-3xl bg-accent-soft px-6 py-16 text-center md:px-16">
        <p className="eyebrow">The Nord Letter</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-balance text-4xl md:text-5xl">
          Early access to new pieces, and 10% off your first order.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
          One considered email a month. No noise.
        </p>
        <div className="mx-auto mt-8 max-w-md">
          <NewsletterForm />
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          By subscribing you agree to our privacy policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
