import Link from "next/link";
import { type StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParallaxImage } from "@/components/motion/parallax-image";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

interface HeroProps {
  eyebrow?: string;
  titleTop: string;
  titleEm: string;
  titleBottom?: string;
  body: string;
  image: string | StaticImageData;
  imageAlt: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}

export function Hero({
  eyebrow = "Boutique Wedding Atelier",
  titleTop,
  titleEm,
  titleBottom,
  body,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
}: HeroProps): JSX.Element {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-ink text-primary-foreground">
      <ParallaxImage
        src={image}
        alt={imageAlt}
        speed={0.35}
        priority
        containerClassName="absolute inset-0"
        className="brightness-[0.55]"
        sizes="100vw"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/85"
      />

      <div className="relative z-10 container-wide flex min-h-[100svh] flex-col justify-end pb-24 pt-32">
        <div className="max-w-4xl">
          <ScrollReveal direction="up">
            <p className="eyebrow text-primary-foreground/80 mb-8">{eyebrow}</p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={120}>
            <h1 className="heading-display text-5xl sm:text-7xl lg:text-[6.5rem] font-light text-primary-foreground">
              {titleTop}{" "}
              <em className="not-italic font-normal text-accent">{titleEm}</em>
              {titleBottom ? <span className="block">{titleBottom}</span> : null}
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={260}>
            <p className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-primary-foreground/80">
              {body}
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={400}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              {primaryCta ? (
                <Button asChild size="lg" variant="gold">
                  <Link href={primaryCta.href}>
                    {primaryCta.label}
                    <ArrowRight className="ml-1" />
                  </Link>
                </Button>
              ) : null}
              {secondaryCta ? (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              ) : null}
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-primary-foreground/70">
        <span className="text-[10px] uppercase tracking-widest2">Scroll</span>
        <span className="block h-10 w-px bg-primary-foreground/40 animate-pulse" />
      </div>
    </section>
  );
}
