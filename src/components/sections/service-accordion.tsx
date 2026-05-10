"use client";

import * as React from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { Lightbox, type LightboxImage } from "@/components/sections/lightbox";
import {
  SERVICE_CATEGORIES,
  type ServiceCategory,
} from "@/data/service-categories";
import { cn } from "@/lib/utils";

interface ServiceAccordionProps {
  group: ServiceCategory["group"];
  title: string;
  defaultOpenId?: string;
}

export function ServiceAccordion({
  group,
  title,
  defaultOpenId,
}: ServiceAccordionProps): JSX.Element {
  const items = SERVICE_CATEGORIES.filter((c) => c.group === group);
  const [openId, setOpenId] = React.useState<string | null>(
    defaultOpenId ?? items[0]?.id ?? null,
  );
  const [lightboxImages, setLightboxImages] = React.useState<LightboxImage[]>(
    [],
  );
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const openLightbox = (cat: ServiceCategory, i: number): void => {
    setLightboxImages(cat.images);
    setActiveIndex(i);
  };

  return (
    <section className="bg-background">
      <div className="container-wide">
        <h2 className="font-display text-4xl md:text-6xl text-primary uppercase tracking-wide mb-10">
          {title}
        </h2>

        <div className="border-t border-border">
          {items.map((cat) => {
            const open = openId === cat.id;
            return (
              <div key={cat.id} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setOpenId(open ? null : cat.id)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={open}
                  aria-controls={`panel-${cat.id}`}
                >
                  <span
                    className={cn(
                      "font-display text-xl md:text-2xl transition-colors",
                      open ? "text-primary" : "text-ink-blue",
                    )}
                  >
                    {cat.title}
                  </span>
                  <span
                    className={cn(
                      "h-9 w-9 inline-flex items-center justify-center border transition-colors flex-shrink-0",
                      open
                        ? "border-primary text-primary"
                        : "border-border text-ink-blue",
                    )}
                  >
                    {open ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>

                <div
                  id={`panel-${cat.id}`}
                  className={cn(
                    "grid transition-all duration-500 ease-out",
                    open
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="pb-10 pt-2">
                      <ul className="grid gap-3 md:grid-cols-2 max-w-4xl mb-8">
                        {cat.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-3 text-sm text-foreground"
                          >
                            <span className="mt-2 h-1.5 w-1.5 rotate-45 bg-primary flex-shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>

                      {cat.images.length > 0 ? (
                        <div className="-mx-6 px-6 overflow-x-auto scrollbar-hide">
                          <div className="flex gap-3 md:gap-4 pb-2">
                            {cat.images.map((img, i) => (
                              <button
                                key={
                                  typeof img.src === "string"
                                    ? img.src
                                    : img.src.src
                                }
                                type="button"
                                onClick={() => openLightbox(cat, i)}
                                className="relative h-44 md:h-56 aspect-[4/3] flex-shrink-0 overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                aria-label="Open image preview"
                              >
                                <Image
                                  src={img.src}
                                  alt={img.alt}
                                  fill
                                  sizes="(min-width: 768px) 25vw, 60vw"
                                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                                />
                                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-300" />
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Lightbox
        images={lightboxImages}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={(i) => setActiveIndex(i)}
      />
    </section>
  );
}
