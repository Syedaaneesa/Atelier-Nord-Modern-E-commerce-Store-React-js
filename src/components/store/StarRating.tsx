import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function StarRating({
  rating,
  count,
  size = 12,
  className,
}: {
  rating: number;
  count?: number;
  size?: number;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <div className="flex items-center gap-0.5" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            width={size}
            height={size}
            className={cn(
              "text-accent",
              i <= Math.round(rating) ? "fill-accent" : "fill-transparent opacity-35",
            )}
          />
        ))}
      </div>
      <span className="sr-only">{rating} out of 5 stars</span>
      {count !== undefined && (
        <span className="text-xs text-muted-foreground">
          {rating.toFixed(1)} ({count})
        </span>
      )}
    </div>
  );
}
