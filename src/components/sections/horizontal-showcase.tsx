"use client";

import * as React from "react";
import Image, { type StaticImageData } from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { cn } from "@/lib/utils";
import hyattImage from "@/assets/closerlook/hyatt-regency.jpeg";
import fairmontImage from "@/assets/closerlook/fairmont.jpeg";
import westinImage from "@/assets/closerlook/westin-sohna-resort.jpeg";
import cityParkImage from "@/assets/closerlook/city-park.jpeg";
import neemranaImage from "@/assets/closerlook/neemrana-fort-palace.jpeg";

export interface ShowcaseItem {
  venue: string;
  couple: string;
  image: string | StaticImageData;
  alt: string;
}

const DEFAULTS: ShowcaseItem[] = [
  {
    venue: "Hyatt Regency, Dehradun",
    couple: "Ishita & Daniyal",
    image: hyattImage,
    alt: "Wedding at Hyatt Regency, Dehradun",
  },
  {
    venue: "Fairmont, Jaipur",
    couple: "Meera & Karan",
    image: fairmontImage,
    alt: "Royal palace wedding at Fairmont, Jaipur",
  },
  {
    venue: "The Westin Sohna Resort & Spa, Haryana",
    couple: "Anjali & Vansh",
    image: westinImage,
    alt: "Resort wedding at The Westin Sohna",
  },
  {
    venue: "City Park, Delhi",
    couple: "Sanskriti & Divyam",
    image: cityParkImage,
    alt: "Boutique city wedding at City Park, Delhi",
  },
  {
    venue: "Neemrana Fort Palace, Rajasthan",
    couple: "Sunita & Sanjeev",
    image: neemranaImage,
    alt: "Heritage fort wedding at Neemrana Fort Palace",
  },
];

interface HorizontalShowcaseProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items?: ShowcaseItem[];
}

export function HorizontalShowcase({
  eyebrow = "Recent celebrations",
  title = "A closer look",
  subtitle = "At weddings we have quietly held over the years.",
  items = DEFAULTS,
}: HorizontalShowcaseProps): JSX.Element {
  const trackRef = React.useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: 1 | -1): void => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 16 : el.offsetWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-wide">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          leftElement="frame369"
          rightElement="frame370"
          birdElement="bird1"
        />
      </div>

      <div className="relative mt-14">
        <div
          ref={trackRef}
          className={cn(
            "flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory pb-4",
            "scrollbar-hide px-6 md:px-[max(1.5rem,calc((100vw-1320px)/2))]",
          )}
        >
          {items.map((item, i) => (
            <ScrollReveal
              key={item.venue}
              direction="up"
              delay={i * 80}
              data-card
              className="snap-start flex-shrink-0 w-[78vw] sm:w-[58vw] md:w-[36vw] lg:w-[26vw] group"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 26vw, (min-width: 768px) 36vw, 78vw"
                  className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]"
                />
              </div>
              <div className="mt-5 text-center">
                <p className="font-display text-lg md:text-xl text-primary uppercase tracking-wide">
                  {item.venue}
                </p>
                <p className="italic text-ink-blue/70 text-sm mt-1">
                  {item.couple}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="container-wide flex items-center justify-end gap-3 mt-6">
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollBy(-1)}
            className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollBy(1)}
            className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
