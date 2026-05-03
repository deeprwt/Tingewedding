"use client";

import * as React from "react";
import { Eye, Instagram, Video } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { REELS, type ReelItem } from "@/data/reels";
import { cn } from "@/lib/utils";

interface InstagramCarouselProps {
  items?: ReelItem[];
  eyebrow?: string;
  title?: string;
  speedSeconds?: number;
}

export function InstagramCarousel({
  items = REELS,
  eyebrow = "From the studio",
  title = "Recently in our reel",
  speedSeconds = 60,
}: InstagramCarouselProps): JSX.Element {
  if (items.length === 0) return <></>;

  const loop = [...items, ...items];

  return (
    <section className="py-20 md:py-28 bg-sand">
      <div className="container-wide mb-12">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          leftElement="frame366"
          rightElement="frame367"
          birdElement="bird2"
        />
      </div>

      <div className="group relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-sand to-transparent z-10 pointer-events-none"
        />
        <div
          aria-hidden
          className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-sand to-transparent z-10 pointer-events-none"
        />

        <div
          className={cn(
            "flex gap-3 md:gap-4 w-max animate-marquee",
            "group-hover:[animation-play-state:paused]",
            "group-focus-within:[animation-play-state:paused]",
            "motion-reduce:animate-none",
          )}
          style={{ animationDuration: `${speedSeconds}s` }}
        >
          {loop.map((reel, i) => (
            <ReelCard key={`${reel.id}-${i}`} reel={reel} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReelCard({ reel }: { reel: ReelItem }): JSX.Element {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  return (
    <a
      href={reel.permalink ?? "#"}
      target={reel.permalink ? "_blank" : undefined}
      rel={reel.permalink ? "noreferrer noopener" : undefined}
      className="relative w-[160px] sm:w-[200px] md:w-[240px] aspect-[9/16] flex-shrink-0 overflow-hidden rounded-md shadow-md group/card focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      aria-label={`Open reel: ${reel.subtitle} ${reel.caption}`}
    >
      <video
        ref={videoRef}
        src={reel.videoSrc}
        poster={reel.posterSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-ink/0 pointer-events-none"
      />

      <span className="absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-1 rounded-md bg-ink/55 backdrop-blur-sm text-primary-foreground text-[11px] font-medium">
        <Eye className="h-3 w-3" />
        {reel.views}
      </span>

      <span className="absolute top-2 right-2 h-7 w-7 inline-flex items-center justify-center bg-ink/55 backdrop-blur-sm rounded-md text-primary-foreground">
        {reel.permalink ? (
          <Instagram className="h-3.5 w-3.5" />
        ) : (
          <Video className="h-3.5 w-3.5" />
        )}
      </span>

      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-primary-foreground text-center">
        <p className="text-[9px] md:text-[10px] uppercase tracking-widest2 text-primary-foreground/85">
          {reel.subtitle}
        </p>
        <p className="font-display italic text-2xl md:text-3xl mt-0.5">
          {reel.caption}
        </p>
      </div>
    </a>
  );
}
