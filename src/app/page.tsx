import { HeroVideoSlider } from "@/components/sections/hero-video-slider";
import { ScrollScenes } from "@/components/sections/scroll-scenes";
import { ServicesSection } from "@/components/sections/services-section";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { HorizontalShowcase } from "@/components/sections/horizontal-showcase";
import { InstagramCarousel } from "@/components/sections/instagram-carousel";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaBand } from "@/components/sections/cta-band";
import { getInstagramReels } from "@/lib/instagram";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default async function HomePage(): Promise<JSX.Element> {
  const reels = await getInstagramReels();

  return (
    <>
      <HeroVideoSlider />

      <ScrollScenes />

      <ServicesSection />

      <Stats />

      <HorizontalShowcase />

      <InstagramCarousel items={reels} />

      <section className="py-24 md:py-32 bg-sand">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Selected work"
            title="The Archive"
            subtitle="Quietly held celebrations from across the years."
            leftElement="branchLeft"
            rightElement="branchRight"
            birdElement="bird1"
            className="mb-14"
          />
          <GalleryGrid limit={5} variant="masonry" />
          <div className="mt-12 flex justify-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest2 text-foreground hover:text-primary transition-colors border-b border-foreground/30 hover:border-primary pb-1"
            >
              View full gallery <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      <CtaBand
        title="Tell us about your wedding."
        body="A short note is all we need to begin. We will write back personally within 48 hours."
      />
    </>
  );
}
