import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Counter } from "@/components/motion/counter";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

const STATS: Stat[] = [
  { value: 12, suffix: "+", label: "Years in the craft" },
  { value: 240, suffix: "+", label: "Weddings curated" },
  { value: 18, label: "Destinations" },
  { value: 96, suffix: "%", label: "Couples by referral" },
];

export function Stats(): JSX.Element {
  return (
    <section className="bg-primary text-primary-foreground py-20 md:py-28">
      <div className="container-wide">
        <ScrollReveal className="max-w-2xl">
          <p className="eyebrow text-primary-foreground/60 mb-5">
            By the numbers
          </p>
          <h2 className="heading-display text-3xl md:text-5xl">
            A practice quietly built over time
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 100}>
              <p className="font-display text-5xl md:text-7xl text-accent">
                <Counter to={stat.value} suffix={stat.suffix ?? ""} />
              </p>
              <p className="mt-3 text-sm uppercase tracking-widest2 text-primary-foreground/70">
                {stat.label}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
