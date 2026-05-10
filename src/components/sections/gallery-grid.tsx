"use client";

import * as React from "react";
import Image from "next/image";
import { Expand } from "lucide-react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Lightbox, type LightboxImage } from "@/components/sections/lightbox";
import { GALLERY, type GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/utils";

const SPAN: Record<NonNullable<GalleryItem["span"]>, string> = {
  tall: "row-span-2",
  square: "",
};

interface GalleryGridProps {
  items?: GalleryItem[];
  limit?: number;
  enableLightbox?: boolean;
  variant?: "preview" | "masonry";
}

export function GalleryGrid({
  items = GALLERY,
  limit,
  enableLightbox = true,
  variant = "masonry",
}: GalleryGridProps): JSX.Element {
  const list = limit ? items.slice(0, limit) : items;
  const lightboxImages: LightboxImage[] = list.map((g) => ({
    src: g.src,
    alt: g.alt,
  }));
  const [active, setActive] = React.useState<number | null>(null);

  const useMasonry = variant === "masonry";

  return (
    <>
      <div
        className={cn(
          "grid gap-3 md:gap-5",
          useMasonry
            ? "grid-cols-2 md:grid-cols-3 grid-flow-row-dense auto-rows-[160px] sm:auto-rows-[210px] md:auto-rows-[280px]"
            : "grid-cols-2 md:grid-cols-3",
        )}
      >
        {list.map((item, i) => (
          <ScrollReveal
            key={typeof item.src === "string" ? item.src : item.src.src}
            direction="up"
            delay={(i % 3) * 90}
            className={cn(
              "relative overflow-hidden group reveal-zoom rounded-sm",
              useMasonry ? SPAN[item.span ?? "square"] : "aspect-[4/5]",
            )}
          >
            <button
              type="button"
              onClick={() => enableLightbox && setActive(i)}
              className="absolute inset-0 w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={`Open preview: ${item.alt}`}
              disabled={!enableLightbox}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={
                  useMasonry
                    ? "(min-width: 768px) 33vw, 50vw"
                    : "(min-width: 768px) 33vw, 50vw"
                }
                className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/35 transition-colors duration-500" />
              <span className="absolute top-3 right-3 h-9 w-9 inline-flex items-center justify-center bg-primary-foreground/95 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm">
                <Expand className="h-4 w-4" />
              </span>
              <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-widest2 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {item.category}
              </span>
            </button>
          </ScrollReveal>
        ))}
      </div>

      <Lightbox
        images={lightboxImages}
        index={active}
        onClose={() => setActive(null)}
        onNavigate={(i) => setActive(i)}
      />
    </>
  );
}
