"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
        "fixed inset-x-0 top-0 z-50 transition-shadow duration-300",
        "bg-background/95 backdrop-blur-md border-b border-border/50",
        scrolled && "shadow-[0_1px_0_0_rgba(0,0,0,0.04)]",
      )}
    >
      <div className="container-wide flex h-[72px] items-center justify-between">
        <Link
          href="/"
          aria-label="Tinge Wedding — home"
          className="font-display text-[22px] tracking-wide text-primary leading-none"
        >
          Tinge<span className="text-foreground">.</span>Wedding
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-[12px] uppercase tracking-widest2 transition-colors",
                  "after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-px after:bg-primary",
                  "after:origin-left after:scale-x-0 after:transition-transform after:duration-300",
                  active
                    ? "text-primary after:scale-x-100"
                    : "text-foreground/85 hover:text-primary hover:after:scale-x-100",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            size="sm"
            className="rounded-full px-6 h-10 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/contact">Plan with us</Link>
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
                  active ? "text-primary" : "text-foreground hover:text-primary",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Button
            asChild
            size="sm"
            className="w-fit mt-2 rounded-full px-6 h-10 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/contact">Plan with us</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
