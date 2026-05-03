"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (next: number) => void;
}

export function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: LightboxProps): JSX.Element | null {
  const open = index !== null;

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && index !== null) {
        onNavigate((index + 1) % images.length);
      }
      if (e.key === "ArrowLeft" && index !== null) {
        onNavigate((index - 1 + images.length) % images.length);
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, index, images.length, onClose, onNavigate]);

  if (!open || index === null) return null;
  const current = images[index];
  if (!current) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <button
        aria-label="Close preview"
        onClick={onClose}
        className="absolute top-5 right-5 z-10 h-11 w-11 inline-flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
      >
        <X className="h-6 w-6" />
      </button>

      <button
        aria-label="Previous image"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index - 1 + images.length) % images.length);
        }}
        className={cn(
          "absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-10",
          "h-12 w-12 md:h-14 md:w-14 inline-flex items-center justify-center",
          "rounded-full bg-primary-foreground/10 text-primary-foreground",
          "hover:bg-primary-foreground/20 transition-colors",
        )}
      >
        <ArrowLeft className="h-5 w-5" />
      </button>

      <button
        aria-label="Next image"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index + 1) % images.length);
        }}
        className={cn(
          "absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-10",
          "h-12 w-12 md:h-14 md:w-14 inline-flex items-center justify-center",
          "rounded-full bg-primary-foreground/10 text-primary-foreground",
          "hover:bg-primary-foreground/20 transition-colors",
        )}
      >
        <ArrowRight className="h-5 w-5" />
      </button>

      <div
        className="absolute inset-0 flex items-center justify-center p-6 md:p-16"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          key={current.src}
          className="relative w-full h-full max-w-6xl max-h-[85vh] animate-fade-in"
        >
          <Image
            src={current.src}
            alt={current.alt}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="absolute bottom-5 left-0 right-0 z-10 text-center text-primary-foreground/70 text-xs uppercase tracking-widest2 pointer-events-none">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}
