"use client";

import * as React from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import heritageImage from "@/assets/heritage.jpeg";
import coastImage from "@/assets/coast.jpeg";
import skywardImage from "@/assets/skyward.jpeg";

interface Scene {
  label: string;
  title: string;
  body: string;
  image: StaticImageData;
  alt: string;
  href?: string;
}

const SCENES: Scene[] = [
  {
    label: "Of Heritage",
    title: "Palace weddings",
    body: "Royal courtyards, marigold arches and the cadence of celebration shaped by tradition.",
    image: heritageImage,
    alt: "Heritage palace wedding",
    href: "/services",
  },
  {
    label: "By the Coast",
    title: "Weddings by the sea",
    body: "Soft linens, salt air and an aisle that ends at the horizon.",
    image: coastImage,
    alt: "Coastal beach wedding",
    href: "/services",
  },
  {
    label: "Skyward",
    title: "Mountain ceremonies",
    body: "Long views, slower mornings, open-air vows framed by valleys and pine.",
    image: skywardImage,
    alt: "Mountain destination wedding",
    href: "/services",
  },
];

export function ScrollScenes(): JSX.Element {
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const onScroll = (): void => {
      const node = sectionRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const total = node.offsetHeight - window.innerHeight;
      const progress = Math.min(
        1,
        Math.max(0, -rect.top / Math.max(1, total)),
      );
      const idx = Math.min(
        SCENES.length - 1,
        Math.floor(progress * SCENES.length),
      );
      setActive(idx);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-background"
      style={{ height: `${SCENES.length * 100}svh` }}
      aria-label="Three settings, three weddings"
    >
      <div className="sticky top-0 h-svh w-full overflow-hidden">
        {SCENES.map((scene, i) => (
          <div
            key={scene.label}
            aria-hidden={i !== active}
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-out",
              i === active ? "opacity-100" : "opacity-0",
            )}
          >
            <div className="h-full md:grid md:grid-cols-2">
              {/* Content column — centered on mobile, left-aligned on desktop */}
              <div className="container-wide md:max-w-none md:px-12 lg:px-20 h-full grid grid-rows-[auto_1fr_auto] py-24 md:py-0 md:flex md:flex-col md:justify-center md:gap-10">
                <div className="text-center max-w-2xl mx-auto md:text-left md:mx-0">
                  <p
                    className={cn(
                      "font-display text-3xl md:text-5xl lg:text-6xl text-primary tracking-wide transition-all duration-700",
                      i === active
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-3",
                    )}
                  >
                    {scene.label}
                  </p>
                  <p
                    className={cn(
                      "mt-4 text-sm md:text-base lg:text-lg text-ink-blue/80 max-w-md mx-auto md:mx-0 leading-relaxed transition-all duration-700 delay-100",
                      i === active
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-3",
                    )}
                  >
                    {scene.body}
                  </p>
                  <div
                    className={cn(
                      "mt-6 inline-flex flex-col items-center md:items-start text-ink-blue/70 transition-opacity duration-700 delay-200",
                      i === active ? "opacity-100" : "opacity-0",
                    )}
                  >
                    <span className="text-[11px] uppercase tracking-widest2">
                      Scroll
                    </span>
                    <ArrowDown className="h-4 w-4 mt-2 animate-bounce" />
                  </div>
                </div>

                {/* Mobile-only image — hidden on desktop */}
                <div className="relative w-full self-center md:hidden">
                  <div className="relative mx-auto h-[42vh] aspect-square max-w-[min(54vh,32rem)]">
                    <div
                      className={cn(
                        "absolute inset-0 overflow-hidden rounded-sm shadow-2xl transition-all duration-1000 ease-out",
                        i === active
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-[0.96]",
                      )}
                    >
                      <Image
                        src={scene.image}
                        alt={scene.alt}
                        fill
                        sizes="90vw"
                        priority={i === 0}
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6 text-primary-foreground">
                        <p className="font-display text-2xl">{scene.title}</p>
                      </div>
                    </div>

                    <SceneFlourish side="left" active={i === active} />
                    <SceneFlourish side="right" active={i === active} />
                  </div>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-3 pb-2 md:pb-0">
                  {SCENES.map((_, j) => (
                    <span
                      key={j}
                      className={cn(
                        "h-px transition-all duration-500",
                        j === active ? "w-12 bg-primary" : "w-6 bg-ink-blue/30",
                      )}
                      aria-hidden
                    />
                  ))}
                </div>
              </div>

              {/* Desktop-only full-bleed image on the right */}
              <div className="hidden md:block relative h-full w-full overflow-hidden">
                <Image
                  src={scene.image}
                  alt={scene.alt}
                  fill
                  sizes="50vw"
                  priority={i === 0}
                  className={cn(
                    "object-cover object-center transition-all duration-1000 ease-out",
                    i === active
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-[1.03]",
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-10 left-10 right-10 text-primary-foreground">
                  <p
                    className={cn(
                      "font-display text-3xl lg:text-5xl transition-all duration-700 delay-200",
                      i === active
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-3",
                    )}
                  >
                    {scene.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {SCENES[active]?.href ? (
          <Link
            href={SCENES[active]!.href!}
            className="absolute bottom-6 right-6 text-[11px] uppercase tracking-widest2 text-primary hover:text-ink-blue transition-colors"
            aria-label={`Read more about ${SCENES[active]!.label}`}
          >
            Read more →
          </Link>
        ) : null}
      </div>
    </section>
  );
}

function SceneFlourish({
  side,
  active,
}: {
  side: "left" | "right";
  active: boolean;
}): JSX.Element {
  return (
    <div
      aria-hidden
      className={cn(
        "absolute top-0 bottom-0 w-12 md:w-20 transition-all duration-1000 ease-out hidden sm:block",
        side === "left" ? "-left-6 md:-left-12" : "-right-6 md:-right-12",
        active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
      )}
    >
      <div className="h-full flex flex-col items-center justify-between py-4">
        <span className="block w-px h-12 bg-primary/40" />
        <span className="block w-2 h-2 rounded-full bg-primary/80" />
        <span className="block w-px h-24 bg-primary/40" />
        <span className="block w-2 h-2 rounded-full bg-primary/80" />
        <span className="block w-px h-12 bg-primary/40" />
      </div>
    </div>
  );
}
