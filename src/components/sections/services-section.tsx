import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Separator } from "@/components/ui/separator";
import { SERVICES } from "@/data/services";

export function ServicesSection(): JSX.Element {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container-wide">
        <div className="grid gap-12 md:grid-cols-12 mb-16">
          <ScrollReveal className="md:col-span-5">
            <p className="eyebrow mb-5">What we do</p>
            <h2 className="heading-display text-4xl md:text-6xl text-primary">
              An atelier for the <em className="text-accent">whole arc</em> of
              the celebration
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={140} className="md:col-span-6 md:col-start-7">
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              Your one-stop solution for all wedding needs.
              We bring everything under one roof—from planning and decor to designing stationery, and hospitality. With expertise across every detail, we ensure a seamless, stress-free experience, so you can truly enjoy your special day.
            </p>
            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-widest2 text-primary hover:text-accent transition-colors"
            >
              All services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>

        <div className="space-y-8">
          {SERVICES.map((service, i) => (
            <ScrollReveal
              key={service.slug}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <article className="grid md:grid-cols-12 gap-8 items-center group">
                <div
                  className={`relative aspect-[4/3] overflow-hidden md:col-span-5 ${i % 2 === 0 ? "md:order-1" : "md:order-2"
                    }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div
                  className={`md:col-span-6 ${i % 2 === 0 ? "md:order-2 md:col-start-7" : "md:order-1"
                    }`}
                >
                  <p className="eyebrow text-accent mb-3">{service.eyebrow}</p>
                  <h3 className="font-display text-4xl md:text-5xl text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl">
                    {service.excerpt}
                  </p>
                  <ul className="space-y-3 max-w-md">
                    {service.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-sm text-foreground"
                      >
                        <span className="mt-2 h-px w-4 bg-accent flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
              {i < SERVICES.length - 1 ? (
                <Separator className="mt-16" />
              ) : null}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
