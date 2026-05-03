import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ParallaxImage } from "@/components/motion/parallax-image";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Button } from "@/components/ui/button";

interface CtaBandProps {
  eyebrow?: string;
  title: string;
  body?: string;
  image?: string;
  imageAlt?: string;
  cta?: { href: string; label: string };
}

export function CtaBand({
  eyebrow = "Begin",
  title,
  body,
  image = "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80",
  imageAlt = "Wedding atmosphere",
  cta = { href: "/contact", label: "Start a conversation" },
}: CtaBandProps): JSX.Element {
  return (
    <section className="relative h-[60vh] min-h-[440px] w-full overflow-hidden">
      <ParallaxImage
        src={image}
        alt={imageAlt}
        speed={0.3}
        containerClassName="absolute inset-0"
        className="brightness-[0.55]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-ink/30" />
      <div className="relative z-10 container-wide h-full flex flex-col justify-center text-primary-foreground">
        <ScrollReveal>
          <p className="eyebrow text-primary-foreground/70 mb-5">{eyebrow}</p>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <h2 className="heading-display text-4xl md:text-6xl max-w-3xl">
            {title}
          </h2>
        </ScrollReveal>
        {body ? (
          <ScrollReveal delay={220}>
            <p className="mt-5 max-w-xl text-primary-foreground/80 leading-relaxed">
              {body}
            </p>
          </ScrollReveal>
        ) : null}
        <ScrollReveal delay={320}>
          <Button asChild size="lg" variant="gold" className="mt-8 w-fit">
            <Link href={cta.href}>
              {cta.label} <ArrowRight className="ml-1" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
