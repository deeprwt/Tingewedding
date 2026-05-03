import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { CtaBand } from "@/components/sections/cta-band";
import { SectionHeading } from "@/components/sections/section-heading";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "A small, considered studio shaping destination weddings end to end.",
};

const PRINCIPLES = [
  {
    title: "Intentional",
    body: "We say no often, so the work we say yes to can be held properly.",
  },
  {
    title: "Quiet",
    body: "Our presence should be felt, not seen — every cue rehearsed, every handover clean.",
  },
  {
    title: "Detail-led",
    body: "From the typeface on the invite to the candle height at dinner — nothing is incidental.",
  },
];

const MARQUEE_WORDS = [
  "Heritage",
  "Stillness",
  "Detail",
  "Care",
  "Patience",
  "Light",
  "Rhythm",
  "Restraint",
];

const TEAM = [
  {
    name: "Anaïs Mehra",
    role: "Founder, Creative Direction",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Devika Rao",
    role: "Head of Planning",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Karan Iyer",
    role: "Production & Logistics",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
];

export default function AboutPage(): JSX.Element {
  return (
    <>
      <Hero
        eyebrow="The Studio"
        titleTop="A studio for"
        titleEm="weddings"
        titleBottom="that feel like you."
        body="A boutique atelier of planners, designers and producers — small on purpose, held end to end by the same hands."
        image="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=2400&q=85"
        imageAlt="Atelier moodboard and details"
      />

      {/* Word marquee — editorial scrolling strip */}
      <section
        aria-hidden
        className="border-y border-border bg-background py-7 overflow-hidden"
      >
        <div className="flex gap-12 w-max animate-marquee motion-reduce:animate-none">
          {[...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS].map(
            (word, i) => (
              <span
                key={`${word}-${i}`}
                className="font-display italic text-4xl md:text-6xl text-foreground/90 flex items-center gap-12"
              >
                {word}
                <span className="text-primary text-2xl">✦</span>
              </span>
            ),
          )}
        </div>
      </section>

      {/* Pull quote — editorial centerpiece */}
      <section className="py-24 md:py-36">
        <div className="container-tight text-center">
          <ScrollReveal>
            <p className="eyebrow mb-8">A note from the studio</p>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <p className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-[1.15] text-balance">
              We believe a wedding should look like{" "}
              <em className="text-primary">the people getting married</em> —
              not a copy of the last beautiful one we saw.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={260}>
            <p className="mt-10 text-sm uppercase tracking-widest2 text-muted-foreground">
              — The team at Tinge
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Asymmetric story */}
      <section className="py-20 md:py-28 bg-sand">
        <div className="container-wide grid gap-12 lg:gap-20 md:grid-cols-12 items-start">
          <ScrollReveal direction="left" className="md:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm mt-12">
                <Image
                  src="https://images.unsplash.com/photo-1525772764200-be829a350797?auto=format&fit=crop&w=900&q=80"
                  alt="Studio details"
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=900&q=80"
                  alt="Florals and stationery"
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal
            direction="right"
            className="md:col-span-5 md:col-start-8 lg:pt-8"
          >
            <p className="eyebrow mb-5">Our story</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground leading-[1.05] mb-8">
              Eleven years of <em className="text-primary">quietly</em> building
              a practice we&apos;re proud of.
            </h2>
            <div className="space-y-5 text-foreground/75 leading-relaxed">
              <p>
                We started as friends with too many opinions about florals and
                a shared belief that a wedding should look like the people
                getting married. A decade in, that idea still leads.
              </p>
              <p>
                Conversations come first. Before mood-boards, vendors, or
                budgets, we sit with the couple and figure out what kind of
                weekend feels true to them. Loud or hushed. Steeped in family
                or stripped back to the closest few.
              </p>
              <p>
                Most of our work comes by referral. We keep the studio small on
                purpose: a handful of weddings a year, held end to end, by the
                same hands.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Principles — refined cards */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-wide">
          <SectionHeading
            eyebrow="What we hold to"
            title="Three principles"
            subtitle="That quietly shape everything we do."
            leftElement="frame158"
            rightElement="tree"
            birdElement="bird1"
            className="mb-14"
          />

          <div className="grid md:grid-cols-3 border-t border-border">
            {PRINCIPLES.map((p, i) => (
              <ScrollReveal
                key={p.title}
                delay={i * 120}
                className={`group relative py-12 md:py-16 ${
                  i > 0 ? "md:border-l border-border" : ""
                } md:px-10`}
              >
                <p className="font-display text-7xl text-primary/15 leading-none transition-colors duration-500 group-hover:text-primary/35 absolute top-8 right-6 select-none">
                  0{i + 1}
                </p>
                <div className="relative">
                  <h3 className="font-display text-3xl text-foreground mb-4 uppercase tracking-wide">
                    {p.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed max-w-sm">
                    {p.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team strip */}
      <section className="py-24 md:py-32 bg-sand">
        <div className="container-wide">
          <SectionHeading
            eyebrow="The hands behind"
            title="A small studio, by design"
            subtitle="Held end to end by the same people."
            leftElement="frame369"
            rightElement="frame370"
            birdElement="bird2"
            className="mb-14"
          />

          <div className="grid gap-8 md:grid-cols-3">
            {TEAM.map((m, i) => (
              <ScrollReveal key={m.name} delay={i * 120} direction="up">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-[1.4s] ease-out hover:scale-[1.04]"
                  />
                </div>
                <p className="font-display text-2xl text-foreground mt-5">
                  {m.name}
                </p>
                <p className="text-sm text-muted-foreground mt-1 italic">
                  {m.role}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Stats />

      <CtaBand
        eyebrow="Let's talk"
        title="If this sounds like the studio you've been looking for…"
        body="Tell us a little about your wedding and we'll write back personally."
      />
    </>
  );
}
