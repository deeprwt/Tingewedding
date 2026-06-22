import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, Phone, ArrowUpRight } from "lucide-react";
import { Sprig } from "@/components/decor/ornament";
import { SITE } from "@/data/site";
import logo from "@/assets/logo.png";

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
  { href: "/services#stationery", label: "Designing Stationery" },
];

export function Footer(): JSX.Element {
  return (
    <footer className="relative bg-background text-foreground overflow-hidden">
      {/* Subtle sprig accents — top corners, small and refined */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-6 left-2 w-12 md:w-14 lg:w-16 text-primary/30 select-none"
      >
        <Sprig side="left" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute top-6 right-2 w-12 md:w-14 lg:w-16 text-primary/30 select-none"
      >
        <Sprig side="right" />
      </div>

      {/* Top brand band with centered mark */}
      <div className="container-wide pt-20 pb-10 text-center relative z-10">
        <Link
          href="/"
          aria-label="Tinge Wedding — home"
          className="inline-block"
        >
          <Image
            src={logo}
            alt="Tinge Wedding"
            sizes="(min-width: 768px) 220px, 180px"
            className="h-14 md:h-16 w-auto object-contain mx-auto"
          />
        </Link>
        <p className="mt-4 text-sm italic text-foreground/65 max-w-xl mx-auto leading-relaxed">
          A boutique wedding atelier crafting intentional celebrations —
          quietly, end to end.
        </p>

        {/* Ornamental divider */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <span className="h-px w-20 md:w-32 bg-foreground/20" />
          <span className="font-display italic text-primary/90 text-lg">✦</span>
          <span className="h-px w-20 md:w-32 bg-foreground/20" />
        </div>
      </div>

      {/* Main grid */}
      <div className="container-wide pb-16 grid gap-12 md:grid-cols-12 relative z-10">
        <div className="md:col-span-4">
          <p className="eyebrow text-foreground/50 mb-5">Explore</p>
          <ul className="space-y-3 text-sm">
            {NAV.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="group inline-flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
                >
                  {l.label}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-foreground/50 mb-5">Services</p>
          <ul className="space-y-3 text-sm">
            {SERVICES.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-5">
          <p className="eyebrow text-foreground/50 mb-5">Studio</p>
          <ul className="space-y-3.5 text-sm text-foreground/80">
            <li className="flex items-start gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
              <a
                href={`mailto:${SITE.email}`}
                className="hover:text-primary transition-colors break-all"
              >
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="hover:text-primary transition-colors"
              >
                {SITE.phone}
              </a>
            </li>
            <li className="text-foreground/65 leading-relaxed">
              Open by appointment.
              <br />
              Across India and beyond.
            </li>
          </ul>

          <div className="flex items-center gap-3 mt-7">
            <SocialIcon
              href={SITE.instagram}
              label="Instagram"
              icon={<Instagram className="h-4 w-4" />}
            />
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-foreground/10 relative z-10">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-foreground/50">
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
      className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-foreground/20 text-foreground/70 hover:text-primary hover:border-primary transition-colors"
    >
      {icon}
    </Link>
  );
}
