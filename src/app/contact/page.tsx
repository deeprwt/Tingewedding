import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "@/components/sections/contact-form";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { ParallaxImage } from "@/components/motion/parallax-image";
import { SectionHeading } from "@/components/sections/section-heading";
import { Separator } from "@/components/ui/separator";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your wedding. We respond to every enquiry personally within 48 hours.",
};

export default function ContactPage(): JSX.Element {
  return (
    <>
      <section className="relative min-h-[60vh] w-full overflow-hidden bg-ink text-primary-foreground">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=2400&q=85"
          alt="Wedding aisle florals"
          speed={0.3}
          priority
          containerClassName="absolute inset-0"
          className="brightness-[0.55]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 to-ink/85" />
        <div className="relative z-10 container-wide pt-40 pb-24">
          <ScrollReveal>
            <p className="eyebrow text-primary-foreground/70 mb-6">
              Begin a conversation
            </p>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <h1 className="heading-display text-5xl md:text-8xl font-light max-w-4xl">
              Tell us about{" "}
              <em className="not-italic font-normal text-accent">your day.</em>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={240}>
            <p className="mt-6 max-w-xl text-primary-foreground/80 leading-relaxed">
              A short note is all we need. We respond to every enquiry
              personally — usually within 48 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pt-20 md:pt-24 pb-4 bg-background">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Begin a conversation"
            title="Get in touch"
            subtitle="Tell us about your wedding — we write back personally within 48 hours."
            leftElement="frame369"
            rightElement="frame370"
            birdElement="bird1"
          />
        </div>
      </section>

      <section className="pb-24 md:pb-32 bg-background">
        <div className="container-wide grid gap-16 md:grid-cols-12">
          <ScrollReveal direction="left" className="md:col-span-4 space-y-10">
            <div>
              <p className="eyebrow mb-3">Studio</p>
              <p className="font-display text-2xl text-primary leading-snug">
                Open by appointment.
                <br />
                Across India and beyond.
              </p>
            </div>

            <Separator />

            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3 text-foreground">
                <Mail className="h-4 w-4 mt-0.5 text-accent" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-accent transition-colors"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <Phone className="h-4 w-4 mt-0.5 text-accent" />
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="hover:text-accent transition-colors"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-accent" />
                <span>
                  Working across {SITE.cities.slice(0, 3).join(", ")} and beyond
                </span>
              </li>
            </ul>
          </ScrollReveal>

          <div className="md:col-span-7 md:col-start-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
