import Image from "next/image";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

interface Pillar {
  label: string;
  title: string;
  body: string;
  image: string;
  alt: string;
}

const PILLARS: Pillar[] = [
  {
    label: "Of Heritage",
    title: "Palace weddings",
    body: "Royal courtyards, marigold arches, and the cadence of a celebration shaped by tradition.",
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80",
    alt: "Heritage palace wedding setting",
  },
  {
    label: "Of Coast",
    title: "By the water",
    body: "Soft linens, salt air, an aisle that ends at the horizon. Coastal celebrations with quiet detail.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
    alt: "Coastal beach wedding",
  },
  {
    label: "Of Skies",
    title: "Mountain & sky",
    body: "Long views and slower mornings. Open-air ceremonies framed by valleys, pine and weather.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    alt: "Mountain destination wedding",
  },
];

export function ThreePillars(): JSX.Element {
  return (
    <section className="py-24 md:py-32 bg-sand">
      <div className="container-wide">
        <ScrollReveal>
          <p className="eyebrow text-center mb-6">Three settings, one studio</p>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <h2 className="heading-display text-center text-4xl md:text-6xl text-primary max-w-3xl mx-auto">
            Weddings shaped by their <em className="text-accent">place</em>
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <ScrollReveal
              key={p.label}
              direction="up"
              delay={i * 140}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden reveal-zoom is-visible">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                  <p className="eyebrow text-accent mb-2">{p.label}</p>
                  <h3 className="font-display text-3xl">{p.title}</h3>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
