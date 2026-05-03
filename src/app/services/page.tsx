import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { ServiceAccordion } from "@/components/sections/service-accordion";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaBand } from "@/components/sections/cta-band";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Planning, decor and hospitality — three disciplines under one boutique studio roof.",
};

const PROCESS = [
  {
    step: "01",
    title: "Conversation",
    body: "We meet — in person where possible, on a call when not. No deck, no proposal, just a long talk about what you want this weekend to feel like.",
  },
  {
    step: "02",
    title: "Direction",
    body: "We come back with a creative direction, a calendar, and a working budget. It's a starting point, not a contract — we shape it together.",
  },
  {
    step: "03",
    title: "Build",
    body: "Vendors, design, logistics, hospitality. We hold the whole picture and make the trade-offs visible so you can decide with clarity.",
  },
  {
    step: "04",
    title: "Execute",
    body: "On the day we're early, quiet, and exacting. You see your people; we hold the room.",
  },
];

const SECTION_NAV = [
  { id: "planning", label: "Planning" },
  { id: "decor", label: "Decor" },
  { id: "hospitality", label: "Hospitality" },
];

export default function ServicesPage(): JSX.Element {
  return (
    <>
      <Hero
        eyebrow="What we do"
        titleTop="The whole arc,"
        titleEm="held under"
        titleBottom="one roof."
        body="A boutique practice covering planning, decor, and hospitality. Engage us across all three or pick the phase that fits."
        image="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2400&q=85"
        imageAlt="Wedding setup at dusk"
        primaryCta={{ href: "/contact", label: "Start an enquiry" }}
      />

      <section className="bg-background border-b border-border">
        <div className="container-wide pt-16 pb-4">
          <SectionHeading
            eyebrow="An atelier in three parts"
            title="Our Services"
            subtitle="Planning, decor and hospitality — held by the same hands."
            leftElement="frame366"
            rightElement="frame367"
            birdElement="bird1"
          />
        </div>
        <nav className="container-wide border-t border-border grid grid-cols-3 text-center">
          {SECTION_NAV.map((s) => (
            <Link
              key={s.id}
              href={`#${s.id}`}
              className="py-5 text-sm uppercase tracking-widest2 text-foreground hover:text-primary transition-colors border-r border-border last:border-r-0"
            >
              {s.label}
            </Link>
          ))}
        </nav>
      </section>

      <div id="planning" className="scroll-mt-20 py-20 md:py-28">
        <ScrollReveal>
          <ServiceAccordion group="planning" title="Planning" />
        </ScrollReveal>
      </div>

      <div id="decor" className="scroll-mt-20 py-20 md:py-28 bg-sand">
        <ScrollReveal>
          <ServiceAccordion group="decor" title="Decor" />
        </ScrollReveal>
      </div>

      <div id="hospitality" className="scroll-mt-20 py-20 md:py-28">
        <ScrollReveal>
          <ServiceAccordion group="hospitality" title="Hospitality" />
        </ScrollReveal>
      </div>

      <section className="py-24 md:py-32 bg-sand">
        <div className="container-wide">
          <SectionHeading
            eyebrow="How we work"
            title="A four-step process"
            subtitle="Conversation, direction, build and execution."
            leftElement="branchLeft"
            rightElement="branchRight"
            birdElement="bird2"
            className="mb-16"
          />

          <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto">
            {PROCESS.map((p, i) => (
              <ScrollReveal
                key={p.step}
                delay={i * 100}
                className="border-t border-primary/30 pt-8"
              >
                <p className="font-display text-7xl text-primary leading-none">
                  {p.step}
                </p>
                <h3 className="font-display text-3xl text-foreground mt-6 mb-3">
                  {p.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  {p.body}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Find the phase that fits."
        body="Tell us where you are and we'll suggest where to begin — even if it's just a conversation."
      />
    </>
  );
}
