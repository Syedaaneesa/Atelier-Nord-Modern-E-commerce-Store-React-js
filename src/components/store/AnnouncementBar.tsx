import { Truck, Sparkles } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-foreground text-primary-foreground">
      <div className="shell flex h-10 items-center justify-center gap-6 text-[0.7rem] tracking-[0.08em]">
        <p className="flex items-center gap-2">
          <Truck className="h-3.5 w-3.5" aria-hidden="true" />
          Complimentary shipping on orders over $250
        </p>
        <span className="hidden h-3 w-px bg-primary-foreground/25 sm:block" aria-hidden="true" />
        <p className="hidden items-center gap-2 sm:flex">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          Take 10% off your first order with code WELCOME10
        </p>
      </div>
    </div>
  );
}
