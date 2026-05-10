"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SITE } from "@/data/site";
import logo from "@/assets/logo.png";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Header(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-[0_8px_32px_-12px_rgba(110,30,45,0.18)]"
          : "bg-background/85 backdrop-blur-md",
      )}
    >
      {/* Top accent strip */}
      <div
        aria-hidden
        className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary/70 to-transparent"
      />

      <div
        className={cn(
          "container-wide flex items-center justify-between transition-all duration-500",
          scrolled ? "h-[80px]" : "h-[96px]",
        )}
      >
        <Link
          href="/"
          aria-label="Tinge Wedding — home"
          className="inline-flex items-center leading-none group"
        >
          <Image
            src={logo}
            alt="Tinge Wedding"
            priority
            sizes="(min-width: 768px) 220px, 180px"
            className={cn(
              "w-auto object-contain transition-all duration-500 group-hover:opacity-90",
              scrolled ? "h-12 md:h-14" : "h-14 md:h-16",
            )}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV.map((item, idx) => {
            const active = pathname === item.href;
            return (
              <React.Fragment key={item.href}>
                {idx > 0 ? (
                  <span
                    aria-hidden
                    className="hidden lg:block h-1 w-1 rotate-45 bg-primary/30"
                  />
                ) : null}
                <Link
                  href={item.href}
                  className={cn(
                    "relative text-[12px] uppercase tracking-widest2 transition-colors py-2",
                    "after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-primary",
                    "after:origin-left after:scale-x-0 after:transition-transform after:duration-300",
                    active
                      ? "text-primary after:scale-x-100"
                      : "text-foreground/85 hover:text-primary hover:after:scale-x-100",
                  )}
                >
                  {item.label}
                </Link>
              </React.Fragment>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            aria-label="Call the studio"
            className="hidden lg:inline-flex items-center gap-2 text-[12px] uppercase tracking-widest2 text-foreground/70 hover:text-primary transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>{SITE.phone}</span>
          </a>
          <Button
            asChild
            size="sm"
            className="group rounded-full pl-6 pr-5 h-11 bg-primary text-primary-foreground hover:bg-accent shadow-[0_6px_24px_-8px_rgba(176,72,86,0.5)] transition-all"
          >
            <Link href="/contact">
              <span>Plan with us</span>
              <ArrowUpRight className="h-4 w-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Button>
        </div>

        <button
          aria-label="Toggle navigation"
          aria-expanded={open}
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Bottom hairline that only appears once scrolled */}
      <div
        aria-hidden
        className={cn(
          "h-px w-full bg-gradient-to-r from-transparent via-border to-transparent transition-opacity duration-500",
          scrolled ? "opacity-100" : "opacity-0",
        )}
      />

      <div
        className={cn(
          "md:hidden overflow-hidden transition-[max-height] duration-500 bg-background border-b border-border",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <nav className="container-wide flex flex-col py-6 gap-5">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm uppercase tracking-widest2 transition-colors",
                  active
                    ? "text-primary"
                    : "text-foreground hover:text-primary",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Button
            asChild
            size="sm"
            className="group w-fit mt-2 rounded-full px-6 h-11 bg-primary text-primary-foreground hover:bg-accent"
          >
            <Link href="/contact">
              Plan with us
              <ArrowUpRight className="h-4 w-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
