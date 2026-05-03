"use client";

import * as React from "react";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { TESTIMONIALS } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function Testimonials(): JSX.Element {
  const [active, setActive] = React.useState(0);
  const total = TESTIMONIALS.length;

  React.useEffect(() => {
    const id = window.setInterval(
      () => setActive((v) => (v + 1) % total),
      6000,
    );
    return () => window.clearInterval(id);
  }, [total]);

  return (
    <section className="py-24 md:py-32 bg-sand">
      <div className="container-tight">
        <ScrollReveal>
          <div className="flex justify-center mb-8">
            <Quote className="h-10 w-10 text-accent" />
          </div>
        </ScrollReveal>

        <div className="relative min-h-[260px]">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.author}
              className={cn(
                "absolute inset-0 transition-opacity duration-700 ease-out flex flex-col items-center text-center",
                i === active
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none",
              )}
              aria-hidden={i !== active}
            >
              <p className="font-display text-2xl md:text-4xl leading-snug text-primary max-w-3xl">
                “{t.quote}”
              </p>
              <p className="eyebrow mt-10 text-primary">{t.author}</p>
              <p className="text-xs text-muted-foreground mt-2">
                {t.role} · {t.location}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            aria-label="Previous testimonial"
            onClick={() => setActive((v) => (v - 1 + total) % total)}
            className="h-10 w-10 inline-flex items-center justify-center border border-border text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-3">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setActive(i)}
                className={cn(
                  "h-px transition-all",
                  i === active
                    ? "w-10 bg-primary"
                    : "w-6 bg-muted-foreground/40",
                )}
              />
            ))}
          </div>
          <button
            aria-label="Next testimonial"
            onClick={() => setActive((v) => (v + 1) % total)}
            className="h-10 w-10 inline-flex items-center justify-center border border-border text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
