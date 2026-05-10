"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface VideoSlide {
  webSrc: string;
  phoneSrc: string;
  couple: string;
  location: string;
  date: string;
}

const SLIDES: VideoSlide[] = [
  {
    webSrc: "/videos/goa-new-web.mp4",
    phoneSrc: "/videos/goa-new-phone.mp4",
    couple: "Aanya & Rohan",
    location: "Goa",
    date: "May '25",
  },
  {
    webSrc: "/videos/jaipur-wedding-web.mp4",
    phoneSrc: "/videos/jaipur-wedding-phone.mp4",
    couple: "Ishita & Daniyal",
    location: "Jaipur",
    date: "Apr '24",
  },
  {
    webSrc: "/videos/wedding-web.mp4",
    phoneSrc: "/videos/wedding-phone.mp4",
    couple: "Meera & Karan",
    location: "Udaipur",
    date: "Feb '25",
  },
];

const STATS = [
  { value: "240+", label: "weddings curated" },
  { value: "4.9★", label: "guest rating" },
  { value: "18+", label: "destinations" },
];

const AUTO_ADVANCE_MS = 8000;

export function HeroVideoSlider(): JSX.Element {
  const [active, setActive] = React.useState(0);
  const total = SLIDES.length;

  React.useEffect(() => {
    const id = window.setInterval(
      () => setActive((v) => (v + 1) % total),
      AUTO_ADVANCE_MS,
    );
    return () => window.clearInterval(id);
  }, [total]);

  const current = SLIDES[active]!;

  return (
    <section
      className="relative w-full bg-background overflow-hidden"
      aria-label="Featured weddings"
    >
      <DesktopHero active={active} setActive={setActive} current={current} />
      <MobileHero
        active={active}
        setActive={setActive}
        current={current}
        total={total}
      />
    </section>
  );
}

function CouplePill({
  current,
  size = "md",
}: {
  current: VideoSlide;
  size?: "sm" | "md";
}): JSX.Element {
  const dot = size === "sm" ? "text-[7px]" : "text-[10px]";
  const padding =
    size === "sm" ? "px-3 py-1.5 text-[11px]" : "px-5 py-2 text-sm";
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 md:gap-3 rounded-full bg-ink/60 backdrop-blur-sm text-primary-foreground",
        padding,
      )}
    >
      <span>{current.couple}</span>
      <span className={cn("text-accent", dot)}>●</span>
      <span className="text-accent">{current.location}</span>
      <span className={cn("text-accent", dot)}>●</span>
      <span>{current.date}</span>
    </div>
  );
}

function Dots({
  active,
  setActive,
  size = "md",
}: {
  active: number;
  setActive: (i: number) => void;
  size?: "sm" | "md";
}): JSX.Element {
  return (
    <div
      className={cn(
        "flex items-center justify-center",
        size === "sm" ? "gap-1.5 mt-2" : "gap-2 mt-3",
      )}
    >
      {SLIDES.map((_, i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          aria-label={`Go to slide ${i + 1}`}
          className={cn(
            "rounded-full transition-all",
            size === "sm" ? "h-1" : "h-1.5",
            i === active
              ? size === "sm"
                ? "w-4 bg-primary-foreground"
                : "w-6 bg-primary-foreground"
              : size === "sm"
                ? "w-1 bg-primary-foreground/60"
                : "w-1.5 bg-primary-foreground/50 hover:bg-primary-foreground/80",
          )}
        />
      ))}
    </div>
  );
}

function DesktopHero({
  active,
  setActive,
  current,
}: {
  active: number;
  setActive: (i: number) => void;
  current: VideoSlide;
}): JSX.Element {
  return (
    <div className="hidden md:block relative w-full h-[100svh] min-h-[640px]">
      {SLIDES.map((slide, i) => (
        <video
          key={slide.webSrc}
          autoPlay
          muted
          loop
          playsInline
          preload={i === 0 ? "auto" : "metadata"}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-out",
            i === active ? "opacity-100" : "opacity-0",
          )}
          src={slide.webSrc}
          aria-hidden={i !== active}
        />
      ))}

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-ink/35 pointer-events-none"
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <div className="transition-opacity duration-500" key={active}>
          <CouplePill current={current} />
        </div>
        <Dots active={active} setActive={setActive} />
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="container-wide pb-10 lg:pb-14">
          <div className="border-t border-primary-foreground/25 pt-8 grid grid-cols-12 gap-6 items-end text-primary-foreground">
            <h1 className="col-span-7 font-display font-light leading-[0.95] text-balance">
              <span className="block text-4xl lg:text-5xl xl:text-6xl">
                Weddings, beautifully
              </span>
              <span className="block font-display text-6xl lg:text-8xl xl:text-9xl mt-1">
                Held<span className="text-accent">.</span>
              </span>
            </h1>

            <div className="col-span-5 flex flex-col gap-6 items-end">
              <div className="flex gap-8 lg:gap-12">
                {STATS.map((s) => (
                  <div key={s.label} className="text-right">
                    <p className="font-display text-3xl lg:text-4xl text-primary-foreground">
                      {s.value}
                    </p>
                    <p className="text-[10px] uppercase tracking-widest2 text-primary-foreground/70 mt-1">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12 px-7 text-sm"
              >
                <Link href="/contact">
                  Start my wedding planning
                  <ChevronRight className="ml-0.5 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileHero({
  active,
  setActive,
  current,
  total,
}: {
  active: number;
  setActive: (i: number) => void;
  current: VideoSlide;
  total: number;
}): JSX.Element {
  return (
    <div className="md:hidden pt-24 pb-14 bg-background">
      <div className="relative">
        <div className="relative aspect-[3/4] overflow-hidden bg-ink shadow-md">
          {SLIDES.map((slide, i) => (
            <video
              key={slide.phoneSrc}
              autoPlay
              muted
              loop
              playsInline
              preload={i === 0 ? "auto" : "metadata"}
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out",
                i === active ? "opacity-100" : "opacity-0",
              )}
              src={slide.phoneSrc}
              aria-hidden={i !== active}
            />
          ))}

          {/* Bottom gradient — lifts the pill + dots off the video */}
          <div
            aria-hidden
            className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ink/75 to-transparent pointer-events-none z-[5]"
          />

          {/* Arrows — vertically centered, on top of video, highlighted */}
          <button
            onClick={() => setActive((active - 1 + total) % total)}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-11 w-11 inline-flex items-center justify-center rounded-full bg-ink/55 backdrop-blur-sm text-primary-foreground border border-primary-foreground/30 hover:bg-primary hover:border-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => setActive((active + 1) % total)}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-11 w-11 inline-flex items-center justify-center rounded-full bg-ink/55 backdrop-blur-sm text-primary-foreground border border-primary-foreground/30 hover:bg-primary hover:border-primary transition-colors"
          >
            <ArrowRight className="h-4 w-4" />
          </button>

          {/* Couple pill + dots — bottom */}
          <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center gap-2 pb-5">
            <CouplePill current={current} size="sm" />
            <Dots active={active} setActive={setActive} size="sm" />
          </div>
        </div>
      </div>

      <div className="px-6 mt-9 text-center">
        <h1 className="font-display font-light text-ink-blue leading-tight">
          <span className="block text-2xl">Weddings, beautifully</span>
          <span className="block text-5xl mt-1 text-ink-blue">
            Held<span className="text-primary">.</span>
          </span>
        </h1>

        <div className="grid grid-cols-3 gap-3 mt-7 text-ink-blue">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="font-display text-xl text-primary">{s.value}</p>
              <p className="text-[10px] uppercase tracking-widest2 text-ink-blue/70 mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <Button
          asChild
          className="w-full mt-7 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12 text-sm"
        >
          <Link href="/contact">
            Start my wedding planning
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
