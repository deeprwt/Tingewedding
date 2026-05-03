"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Direction = "up" | "left" | "right" | "zoom";

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: keyof JSX.IntrinsicElements;
  direction?: Direction;
  delay?: number;
  once?: boolean;
  threshold?: number;
}

export function ScrollReveal({
  as = "div",
  direction = "up",
  delay = 0,
  once = true,
  threshold = 0.15,
  className,
  style,
  children,
  ...rest
}: ScrollRevealProps): JSX.Element {
  const ref = React.useRef<HTMLElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [once, threshold]);

  const directionClass =
    direction === "left"
      ? "reveal-left"
      : direction === "right"
        ? "reveal-right"
        : direction === "zoom"
          ? "reveal-zoom"
          : "";

  const Tag = as as React.ElementType;
  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      className={cn("reveal", directionClass, visible && "is-visible", className)}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
