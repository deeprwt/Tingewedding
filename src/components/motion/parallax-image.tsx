"use client";

import * as React from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface ParallaxImageProps extends Omit<ImageProps, "ref"> {
  speed?: number;
  containerClassName?: string;
  rounded?: boolean;
}

export function ParallaxImage({
  speed = 0.25,
  containerClassName,
  className,
  rounded = false,
  ...imgProps
}: ParallaxImageProps): JSX.Element {
  const wrapRef = React.useRef<HTMLDivElement | null>(null);
  const innerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let rafId: number | null = null;

    const update = (): void => {
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
      const offset = -progress * 100 * speed;
      inner.style.transform = `translate3d(0, ${offset}px, 0) scale(1.18)`;
    };

    const onScroll = (): void => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        update();
        rafId = null;
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return (
    <div
      ref={wrapRef}
      className={cn(
        "relative overflow-hidden",
        rounded && "rounded-sm",
        containerClassName,
      )}
    >
      <div ref={innerRef} className="absolute inset-0 will-change-transform">
        <Image
          {...imgProps}
          fill
          className={cn("object-cover", className)}
          sizes={imgProps.sizes ?? "100vw"}
        />
      </div>
    </div>
  );
}
