import { cn } from "@/lib/utils";

/**
 * On-brand line-art decorations that echo the minimal black-line + wine-heart
 * logo. Single-colour (currentColor) so the parent controls the tone — wine on
 * light surfaces, champagne on the wine surfaces. Replaces the old multicolour
 * watercolour clip-art (see @/data/elements).
 */

/** A slender botanical sprig — thin stem, outlined leaves, a sparkle bloom. */
export function Sprig({
  side = "left",
  className,
}: {
  side?: "left" | "right";
  className?: string;
}): JSX.Element {
  return (
    <svg
      viewBox="0 0 64 132"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={cn("w-full h-auto", side === "right" && "-scale-x-100", className)}
    >
      {/* main stem */}
      <path d="M33 130 C 31 106 31 80 32 54 C 32.6 40 33 26 32 12" />

      {/* leaf stalks */}
      <path d="M32 104 L 21 100" />
      <path d="M32 99 L 44 95" />
      <path d="M32 76 L 21 72" />
      <path d="M32 71 L 44 67" />
      <path d="M32 50 L 23 47" />
      <path d="M32 46 L 42 43" />

      {/* outlined leaves */}
      <ellipse cx="16" cy="99" rx="9" ry="3.4" transform="rotate(-34 16 99)" />
      <ellipse cx="49" cy="94" rx="9" ry="3.4" transform="rotate(34 49 94)" />
      <ellipse cx="16" cy="71" rx="8.4" ry="3.2" transform="rotate(-30 16 71)" />
      <ellipse cx="49" cy="66" rx="8.4" ry="3.2" transform="rotate(30 49 66)" />
      <ellipse cx="19" cy="46" rx="7.2" ry="3" transform="rotate(-26 19 46)" />
      <ellipse cx="46" cy="42" rx="7.2" ry="3" transform="rotate(26 46 42)" />

      {/* sparkle bloom at the tip */}
      <path
        d="M12 1 C12.8 7.5 16.5 11.2 23 12 C16.5 12.8 12.8 16.5 12 23 C11.2 16.5 7.5 12.8 1 12 C7.5 11.2 11.2 7.5 12 1 Z"
        fill="currentColor"
        stroke="none"
        transform="translate(26 1) scale(0.5)"
      />
    </svg>
  );
}

/** A small four-point sparkle — the brand's ✦ motif as crisp line-art. */
export function Spark({ className }: { className?: string }): JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={cn("w-full h-auto", className)}
    >
      <path d="M12 1 C12.8 7.5 16.5 11.2 23 12 C16.5 12.8 12.8 16.5 12 23 C11.2 16.5 7.5 12.8 1 12 C7.5 11.2 11.2 7.5 12 1 Z" />
    </svg>
  );
}
