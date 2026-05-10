"use client";

import * as React from "react";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { CtaBand } from "@/components/sections/cta-band";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { ParallaxImage } from "@/components/motion/parallax-image";
import { GALLERY, type GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/utils";
import galleryHero from "@/assets/gallery/ceremony-gallery/a7784c90-37a6-4183-a6f2-7df066243e82.jpg";

const FILTERS: { id: GalleryItem["category"] | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ceremony", label: "Ceremony" },
  { id: "decor", label: "Décor" },
  { id: "portrait", label: "Portraits" },
  { id: "details", label: "Details" },
];

export default function GalleryPage(): JSX.Element {
  const [active, setActive] = React.useState<
    GalleryItem["category"] | "all"
  >("all");

  const items =
    active === "all"
      ? GALLERY
      : GALLERY.filter((g) => g.category === active);

  return (
    <>
      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden bg-ink text-primary-foreground">
        <ParallaxImage
          src={galleryHero}
          alt="Selected wedding work archive"
          speed={0.35}
          priority
          containerClassName="absolute inset-0"
          className="brightness-[0.55]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 to-ink/85" />
        <div className="relative z-10 container-wide h-full flex flex-col justify-end pb-20 pt-32">
          <ScrollReveal>
            <p className="eyebrow text-primary-foreground/70 mb-6">
              Selected work
            </p>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <h1 className="heading-display text-5xl md:text-8xl font-light max-w-4xl">
              The <em className="not-italic font-normal text-accent">archive</em>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide">
          <div className="flex flex-wrap gap-3 mb-10">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={cn(
                  "h-10 px-5 text-[11px] uppercase tracking-widest2 border transition-colors",
                  active === f.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-primary border-border hover:border-primary",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          <GalleryGrid items={items} />
        </div>
      </section>

      <CtaBand
        title="See something you love?"
        body="Tell us what drew you in — we'll send you a closer look at the wedding behind it."
      />
    </>
  );
}
