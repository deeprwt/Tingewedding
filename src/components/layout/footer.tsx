import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, ArrowUpRight } from "lucide-react";
import { ELEMENTS } from "@/data/elements";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const SERVICES = [
  { href: "/services#planning", label: "Planning" },
  { href: "/services#decor", label: "Decor" },
  { href: "/services#hospitality", label: "Hospitality" },
];

export function Footer(): JSX.Element {
  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      {/* Subtle botanical accents — top corners, small and refined */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-4 left-0 w-20 md:w-24 lg:w-28 opacity-[0.18] select-none"
      >
        <Image
          src={ELEMENTS.branchLeft}
          alt=""
          width={300}
          height={300}
          className="object-contain w-full h-auto"
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute top-4 right-0 w-20 md:w-24 lg:w-28 opacity-[0.18] select-none"
      >
        <Image
          src={ELEMENTS.branchRight}
          alt=""
          width={300}
          height={300}
          className="object-contain w-full h-auto"
        />
      </div>

      {/* Top brand band with centered mark */}
      <div className="container-wide pt-20 pb-10 text-center relative z-10">
        <Link
          href="/"
          aria-label="Tinge Wedding — home"
          className="inline-block font-display text-3xl md:text-4xl tracking-wide text-background"
        >
          Tinge<span className="text-primary">.</span>Wedding
        </Link>
        <p className="mt-4 text-sm italic text-background/65 max-w-xl mx-auto leading-relaxed">
          A boutique wedding atelier crafting intentional celebrations —
          quietly, end to end.
        </p>

        {/* Ornamental divider */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <span className="h-px w-20 md:w-32 bg-background/20" />
          <span className="font-display italic text-primary/90 text-lg">✦</span>
          <span className="h-px w-20 md:w-32 bg-background/20" />
        </div>
      </div>

      {/* Main grid */}
      <div className="container-wide pb-16 grid gap-12 md:grid-cols-12 relative z-10">
        <div className="md:col-span-4">
          <p className="eyebrow text-background/50 mb-5">Explore</p>
          <ul className="space-y-3 text-sm">
            {NAV.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="group inline-flex items-center gap-2 text-background/80 hover:text-primary transition-colors"
                >
                  {l.label}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-background/50 mb-5">Services</p>
          <ul className="space-y-3 text-sm">
            {SERVICES.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-5">
          <p className="eyebrow text-background/50 mb-5">Studio</p>
          <ul className="space-y-3.5 text-sm text-background/80">
            <li className="flex items-start gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
              <a
                href="mailto:hello@tinge.wedding"
                className="hover:text-primary transition-colors"
              >
                hello@tinge.wedding
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
              <a
                href="tel:+910000000000"
                className="hover:text-primary transition-colors"
              >
                +91 00000 00000
              </a>
            </li>
            <li className="text-background/65 leading-relaxed">
              Open by appointment.
              <br />
              Across India and beyond.
            </li>
          </ul>

          <div className="flex items-center gap-3 mt-7">
            <SocialIcon
              href="https://instagram.com"
              label="Instagram"
              icon={<Instagram className="h-4 w-4" />}
            />
            <SocialIcon
              href="https://facebook.com"
              label="Facebook"
              icon={<Facebook className="h-4 w-4" />}
            />
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-background/10 relative z-10">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-background/50">
          <p>© {new Date().getFullYear()} Tinge Wedding. All rights reserved.</p>
          <p className="italic">Held with intention.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}): JSX.Element {
  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-background/20 text-background/70 hover:text-primary hover:border-primary transition-colors"
    >
      {icon}
    </Link>
  );
}
