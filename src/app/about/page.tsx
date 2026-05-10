import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { CtaBand } from "@/components/sections/cta-band";
import { SectionHeading } from "@/components/sections/section-heading";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import aboutHero from "@/assets/background/about-us.jpeg";
import story1Image from "@/assets/about-us/story-1.jpeg";
import story2Image from "@/assets/about-us/story-2.jpeg";

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
    body: "Our presence should be felt, not seen — every cue rehearsed, every ritual flowing effortlessly.",
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
        image={aboutHero}
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
              No two love stories are the same, so{" "}
              <em className="text-primary">
                no two weddings should be either
              </em>
              .
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-8 font-display text-xl md:text-2xl lg:text-3xl text-foreground/80 leading-snug max-w-3xl mx-auto text-balance">
              Every couple is unique — and we believe their wedding should feel
              just as personal.
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
        <div className="container-wide grid gap-8 lg:gap-12 md:grid-cols-12 items-start">
          <div className="md:col-span-6 md:sticky md:top-24 self-start">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm mt-12">
                <Image
                  src={story1Image}
                  alt="Tablescape and floral details"
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src={story2Image}
                  alt="A toast among friends"
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <ScrollReveal
            direction="right"
            className="md:col-span-6 lg:pt-8"
          >
            <p className="eyebrow mb-5">Our story</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground leading-[1.05] mb-8">
              Quietly crafting weddings that{" "}
              <em className="text-primary">feel like you</em>.
            </h2>
            <div className="space-y-5 text-foreground/75 leading-relaxed">
              <p>
                Tinge began with a simple belief: a wedding should look and
                feel like the people getting married — not a repetition of
                what&apos;s already been done. What started as a shared love
                for details, design, and meaningful celebrations soon became a
                practice rooted in listening first.
              </p>
              <p>
                Before themes, timelines, or décor, we sit with our couples.
                We understand their stories, their families, and the moments
                that matter most to them. From intimate gatherings to elaborate
                celebrations, every wedding we create is personal, thoughtful,
                and deeply intentional.
              </p>
              <p>
                We remain boutique by choice — hands-on, detail-driven, and
                present from start to finish. Each celebration is guided
                end-to-end by the same team, ensuring consistency, care, and
                calm throughout the journey.
              </p>
              <p className="font-display italic text-lg md:text-xl text-foreground leading-relaxed pt-2">
                At Tinge, we don&apos;t just plan weddings. We curate
                experiences — crafted with heart, held together by trust, and
                remembered for how they felt.
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
