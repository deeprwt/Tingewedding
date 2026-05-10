import Image from "next/image";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Counter } from "@/components/motion/counter";
import { ELEMENTS } from "@/data/elements";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
  caption: string;
}

const STATS: Stat[] = [
  {
    value: 12,
    suffix: "+",
    label: "Years in the craft",
    caption: "Quietly building, season after season",
  },
  {
    value: 240,
    suffix: "+",
    label: "Weddings curated",
    caption: "Every one held with the same intent",
  },
  {
    value: 18,
    label: "Destinations",
    caption: "Across India and beyond",
  },
  {
    value: 96,
    suffix: "%",
    label: "Couples by referral",
    caption: "Friends introducing friends",
  },
];

export function Stats(): JSX.Element {
  return (
    <section className="relative bg-primary text-primary-foreground py-24 md:py-32 overflow-hidden">
      {/* Layered background — warm champagne glow on the wine bg */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_25%_15%,hsl(var(--champagne)/0.28),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_90%,hsl(var(--champagne)/0.18),transparent_55%)]"
      />
      {/* Subtle vignette for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,transparent_40%,rgba(0,0,0,0.18)_100%)]"
      />

      {/* Decorative botanical — top right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-6 -right-10 w-48 md:w-72 lg:w-96 opacity-[0.12] select-none rotate-12"
      >
        <Image
          src={ELEMENTS.tree}
          alt=""
          width={500}
          height={500}
          className="object-contain w-full h-auto"
        />
      </div>

      {/* Decorative botanical — bottom left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-12 -left-12 w-44 md:w-64 lg:w-80 opacity-[0.10] select-none -rotate-12"
      >
        <Image
          src={ELEMENTS.branchLeft}
          alt=""
          width={500}
          height={500}
          className="object-contain w-full h-auto"
        />
      </div>

      <div className="container-wide relative z-10">
        {/* Heading block */}
        <ScrollReveal className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-champagne/70" />
            <p className="eyebrow text-champagne mb-0">By the numbers</p>
          </div>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground">
            A practice quietly built{" "}
            <em className="not-italic text-champagne">over time</em>
          </h2>
          <p className="mt-6 italic text-primary-foreground/85 text-base md:text-lg max-w-xl leading-relaxed">
            A small studio, deliberately scaled — taking on a handful of
            weddings each year so every one is held with attention, not
            assembly.
          </p>
        </ScrollReveal>

        {/* Ornamental divider */}
        <ScrollReveal delay={150}>
          <div className="mt-14 mb-12 flex items-center gap-4">
            <span className="h-px flex-1 bg-champagne/25" />
            <span className="text-champagne text-base">✦</span>
            <span className="h-px flex-1 bg-champagne/25" />
          </div>
        </ScrollReveal>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-0 md:divide-x md:divide-champagne/20">
          {STATS.map((stat, i) => (
            <ScrollReveal
              key={stat.label}
              delay={i * 120}
              className="md:px-6 lg:px-10 first:md:pl-0 group"
            >
              <div className="relative flex flex-col gap-3">
                {/* Ghost outlined numeral behind */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-6 -left-2 md:-top-8 md:-left-4 font-display text-[7rem] md:text-[10rem] lg:text-[12rem] leading-none select-none text-transparent"
                  style={{
                    WebkitTextStroke: "1px hsl(var(--champagne) / 0.18)",
                  }}
                >
                  0{i + 1}
                </span>

                {/* Number prefix */}
                <div className="relative flex items-center gap-3 z-10">
                  <span className="text-[11px] font-mono tracking-widest text-champagne">
                    0{i + 1}
                  </span>
                  <span className="h-px w-8 bg-champagne transition-all duration-500 group-hover:w-14" />
                </div>

                {/* Counter — champagne for high contrast on wine */}
                <p className="relative font-display text-6xl md:text-7xl lg:text-8xl text-champagne leading-none mt-1 z-10">
                  <Counter to={stat.value} suffix={stat.suffix ?? ""} />
                </p>

                {/* Hairline accent under number */}
                <span
                  aria-hidden
                  className="block h-px w-12 bg-champagne/60 mt-2 transition-all duration-500 group-hover:w-20"
                />

                {/* Label */}
                <p className="text-[11px] md:text-xs uppercase tracking-widest2 text-primary-foreground font-medium mt-3">
                  {stat.label}
                </p>

                {/* Caption */}
                <p className="italic text-xs md:text-sm text-primary-foreground/75 leading-relaxed">
                  {stat.caption}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom seal */}
        <ScrollReveal delay={400}>
          <div className="mt-20 flex items-center justify-center gap-4 text-primary-foreground/75">
            <span className="h-px w-16 bg-champagne/40" />
            <span className="text-[11px] uppercase tracking-widest2 italic text-champagne">
              Held with intention, since 2013
            </span>
            <span className="h-px w-16 bg-champagne/40" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
