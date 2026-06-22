import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { type ElementKey } from "@/data/elements";
import { Sprig, Spark } from "@/components/decor/ornament";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  emphasis?: string;
  subtitle?: string;
  leftElement?: ElementKey | null;
  rightElement?: ElementKey | null;
  birdElement?: ElementKey | null;
  tone?: "primary" | "foreground" | "light";
  size?: "md" | "lg";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  emphasis,
  subtitle,
  leftElement = "frame369",
  rightElement = "frame370",
  birdElement = null,
  tone = "primary",
  size = "lg",
  className,
}: SectionHeadingProps): JSX.Element {
  const titleClass = cn(
    "font-display uppercase tracking-wide leading-[1.05] text-balance",
    size === "lg"
      ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
      : "text-2xl sm:text-3xl md:text-4xl",
    tone === "primary"
      ? "text-primary"
      : tone === "light"
        ? "text-primary-foreground"
        : "text-foreground",
  );

  const subtitleClass = cn(
    "italic text-sm md:text-base mt-3 max-w-xl mx-auto",
    tone === "light" ? "text-primary-foreground/75" : "text-foreground/65",
  );

  const eyebrowClass = cn(
    "eyebrow mb-4",
    tone === "light" && "text-primary-foreground/60",
  );

  const ornamentColor =
    tone === "light" ? "text-primary-foreground/45" : "text-primary/60";

  return (
    <div className={cn("relative px-4", className)}>
      {leftElement ? (
        <DecorElement side="left" className={ornamentColor} />
      ) : null}

      {rightElement ? (
        <DecorElement side="right" className={ornamentColor} />
      ) : null}

      {birdElement ? (
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute -top-3 right-[28%] w-5 md:w-6 hidden sm:block",
            ornamentColor,
          )}
        >
          <Spark />
        </div>
      ) : null}

      <div className="relative z-10 text-center max-w-3xl mx-auto py-3 md:py-6">
        {eyebrow ? (
          <ScrollReveal>
            <p className={eyebrowClass}>{eyebrow}</p>
          </ScrollReveal>
        ) : null}
        <ScrollReveal delay={eyebrow ? 100 : 0}>
          <h2 className={titleClass}>
            {title}
            {emphasis ? (
              <em className="not-italic text-accent"> {emphasis}</em>
            ) : null}
          </h2>
        </ScrollReveal>
        {subtitle ? (
          <ScrollReveal delay={200}>
            <p className={subtitleClass}>{subtitle}</p>
          </ScrollReveal>
        ) : null}
      </div>
    </div>
  );
}

function DecorElement({
  side,
  className,
}: {
  side: "left" | "right";
  className?: string;
}): JSX.Element {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute top-1/2 -translate-y-1/2",
        "hidden sm:block opacity-90 select-none",
        "w-10 md:w-12 lg:w-16 xl:w-20",
        side === "left"
          ? "left-[calc(50%-48vw)]"
          : "right-[calc(50%-48vw)]",
        className,
      )}
    >
      <Sprig side={side} />
    </div>
  );
}
