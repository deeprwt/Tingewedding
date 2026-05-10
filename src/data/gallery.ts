import type { StaticImageData } from "next/image";

import ceremony1 from "@/assets/gallery/ceremony-gallery/6ebfe2a0-4fe0-4229-96cd-15d1bbf8d684.jpg";
import ceremony2 from "@/assets/gallery/ceremony-gallery/9342cf93-5369-42a9-99dc-5a8dc172cd7a.jpg";
import ceremony3 from "@/assets/gallery/ceremony-gallery/a7784c90-37a6-4183-a6f2-7df066243e82.jpg";
import ceremony4 from "@/assets/gallery/ceremony-gallery/cfdcf25f-e8f2-424b-9b67-37f9d3be1520.jpg";
import ceremony5 from "@/assets/gallery/ceremony-gallery/f062cca6-d03a-41a0-b728-259c76b834e7.jpg";
import ceremony6 from "@/assets/gallery/ceremony-gallery/fe6b34fe-6f0f-4dd3-b3bd-6955d0a6d5d8.jpg";

import decor1 from "@/assets/gallery/decor-gallery/320d110b-1abf-42ab-a174-099c35d0b11b.jpg";
import decor2 from "@/assets/gallery/decor-gallery/ad54d47a-9a04-4551-b826-6266e3e3e20b.jpg";
import decor3 from "@/assets/gallery/decor-gallery/c480cbbd-2ffd-4dda-b3a4-70d1722185ee.jpg";
import decor4 from "@/assets/gallery/decor-gallery/df939913-6d76-4f1a-8afd-053058bf1b2f.jpg";
import decor5 from "@/assets/gallery/decor-gallery/f34543ab-5485-442c-954e-54c254b9836f.jpg";
import decor6 from "@/assets/gallery/decor-gallery/fb67638f-f845-424e-b17e-95321c79e98d.jpg";

import details1 from "@/assets/gallery/details-gallery/1131b63fce06b3fbaa109393475306d0.jpg";
import details2 from "@/assets/gallery/details-gallery/27d81f2a05bee5a44f77290ac08bd323.jpg";
import details3 from "@/assets/gallery/details-gallery/39f55ab5eb86f3dac73de5d1ef9e4b3f.jpg";
import details4 from "@/assets/gallery/details-gallery/787dd98c57e01131ad8f6ad2c1ece0df.jpg";
import details5 from "@/assets/gallery/details-gallery/8bbbf8437a8f4ccc7c09e18c1cc2666c.jpg";
import details6 from "@/assets/gallery/details-gallery/b6f6fb1de2ac15e2a139267ea415c926.jpg";
import details7 from "@/assets/gallery/details-gallery/f3f4993192811ae65f4990c9ef9040f9.jpg";

import portrait1 from "@/assets/gallery/portraits-gallery/02148b5a0df51236ce6f0a97d71c44c5.jpg";
import portrait2 from "@/assets/gallery/portraits-gallery/02f3d7c59f5a6e0edde60949a43f8a31.jpg";
import portrait3 from "@/assets/gallery/portraits-gallery/9909a940f94244b11f3a6482d45057c2.jpg";
import portrait4 from "@/assets/gallery/portraits-gallery/aa0612ffde47440341e6d1e38b6d9395.jpg";
import portrait5 from "@/assets/gallery/portraits-gallery/c3a5562852c673c42196c512e538e3f6.jpg";
import portrait6 from "@/assets/gallery/portraits-gallery/e9c5eb7fa0e21aeaefe2781ff923e679.jpg";

export interface GalleryItem {
  src: string | StaticImageData;
  alt: string;
  category: "ceremony" | "decor" | "portrait" | "details";
  span?: "tall" | "square";
}

// Interleaved across categories so the masonry grid feels varied,
// with `tall` reserved for images whose intrinsic aspect ratio is ≥ 1.45.
export const GALLERY: GalleryItem[] = [
  { src: ceremony1, alt: "Ceremonial moment", category: "ceremony", span: "tall" },
  { src: portrait1, alt: "Bridal portrait", category: "portrait" },
  { src: decor1, alt: "Floral installation", category: "decor", span: "tall" },
  { src: details1, alt: "Bridal details", category: "details" },

  { src: ceremony2, alt: "Pheras and rituals", category: "ceremony" },
  { src: decor2, alt: "Mandap design", category: "decor", span: "tall" },
  { src: portrait2, alt: "Couple portrait", category: "portrait" },
  { src: details2, alt: "Stationery and signage", category: "details" },

  { src: ceremony3, alt: "Ceremony in soft light", category: "ceremony" },
  { src: portrait3, alt: "Quiet moment between vows", category: "portrait" },
  { src: decor3, alt: "Tablescape detail", category: "decor" },
  { src: details3, alt: "Jewellery still life", category: "details" },

  { src: ceremony4, alt: "Sacred fire and rituals", category: "ceremony", span: "tall" },
  { src: portrait4, alt: "Bride in candid joy", category: "portrait" },
  { src: decor4, alt: "Floral and lighting decor", category: "decor" },
  { src: details4, alt: "Layered place setting", category: "details", span: "tall" },

  { src: ceremony5, alt: "Family blessings", category: "ceremony" },
  { src: portrait5, alt: "Groom in his moment", category: "portrait", span: "tall" },
  { src: decor5, alt: "Aisle florals at dusk", category: "decor", span: "tall" },
  { src: details5, alt: "Heirloom details", category: "details", span: "tall" },

  { src: ceremony6, alt: "Garlanding moment", category: "ceremony" },
  { src: portrait6, alt: "Portrait at golden hour", category: "portrait" },
  { src: decor6, alt: "Centrepiece florals", category: "decor" },
  { src: details6, alt: "Hand-embellished detail", category: "details", span: "tall" },

  { src: details7, alt: "Mehendi and adornment", category: "details" },
];
