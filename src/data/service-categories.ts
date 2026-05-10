import type { StaticImageData } from "next/image";
import stationeryFlatlay from "@/assets/gallery/details-gallery/39f55ab5eb86f3dac73de5d1ef9e4b3f.jpg";
import stationeryFans from "@/assets/gallery/details-gallery/27d81f2a05bee5a44f77290ac08bd323.jpg";
import stationerySuite from "@/assets/gallery/details-gallery/1131b63fce06b3fbaa109393475306d0.jpg";
import stationerySigns from "@/assets/gallery/details-gallery/787dd98c57e01131ad8f6ad2c1ece0df.jpg";
import stationeryDetail1 from "@/assets/gallery/details-gallery/8bbbf8437a8f4ccc7c09e18c1cc2666c.jpg";
import stationeryDetail2 from "@/assets/gallery/details-gallery/b6f6fb1de2ac15e2a139267ea415c926.jpg";
import stationeryDetail3 from "@/assets/gallery/details-gallery/f3f4993192811ae65f4990c9ef9040f9.jpg";

export type ServiceGroup =
  | "planning"
  | "decor"
  | "hospitality"
  | "stationery";

type ImageSrc = string | StaticImageData;

export interface ServiceCategory {
  id: string;
  title: string;
  group: ServiceGroup;
  bullets: string[];
  images: { src: ImageSrc; alt: string }[];
}

const stripImages = (
  seeds: { id: string; alt: string }[],
): { src: ImageSrc; alt: string }[] =>
  seeds.map((s) => ({
    src: `https://images.unsplash.com/${s.id}?auto=format&fit=crop&w=900&q=80`,
    alt: s.alt,
  }));

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  // ── Planning ─────────────────────────────────────────────
  {
    id: "venues",
    title: "Venues — National & International",
    group: "planning",
    bullets: [
      "Curated shortlists of palaces, resorts and private estates",
      "Onsite recces and venue negotiations on your behalf",
      "Destinations across India, South-East Asia, the Middle East and Europe",
    ],
    images: stripImages([
      { id: "photo-1519225421980-715cb0215aed", alt: "Coastal venue" },
      { id: "photo-1606800052052-a08af7148866", alt: "Heritage venue" },
      { id: "photo-1583939003579-730e3918a45a", alt: "Garden venue" },
      { id: "photo-1511795409834-ef04bbd61622", alt: "Mountain venue" },
    ]),
  },
  {
    id: "concept",
    title: "Concept & Creative Direction",
    group: "planning",
    bullets: [
      "A single visual direction that holds across every function",
      "Mood-boards, palette and material research",
      "Coherent story from save-the-date to farewell brunch",
    ],
    images: stripImages([
      { id: "photo-1525772764200-be829a350797", alt: "Moodboard detail" },
      { id: "photo-1606216794074-735e91aa2c92", alt: "Creative direction" },
      { id: "photo-1519671482749-fd09be7ccebf", alt: "Concept inspiration" },
    ]),
  },
  {
    id: "calendar",
    title: "Calendar, Logistics & Travel",
    group: "planning",
    bullets: [
      "End-to-end calendar from announcement to wedding week",
      "Vendor management, contracts and payment scheduling",
      "Travel coordination, group bookings and on-ground transport",
    ],
    images: stripImages([
      { id: "photo-1519741497674-611481863552", alt: "Travel logistics" },
      { id: "photo-1583939003579-730e3918a45a", alt: "Wedding planning" },
    ]),
  },
  {
    id: "rituals",
    title: "Rituals & Run of Show",
    group: "planning",
    bullets: [
      "Ritual planning specific to both families' traditions",
      "Pandit, officiant and entertainer coordination",
      "Detailed run-of-show and quiet on-day cues",
    ],
    images: stripImages([
      { id: "photo-1511795409834-ef04bbd61622", alt: "Ceremony rituals" },
      { id: "photo-1519225421980-715cb0215aed", alt: "Wedding rituals" },
    ]),
  },

  // ── Decor ────────────────────────────────────────────────
  {
    id: "florals",
    title: "Florals & Mandap Design",
    group: "decor",
    bullets: [
      "Bespoke mandap and ceremony architecture",
      "Floral palette curated to season and venue",
      "Aisle, ceiling and entry installations",
    ],
    images: stripImages([
      { id: "photo-1519671482749-fd09be7ccebf", alt: "Aisle florals" },
      { id: "photo-1606800052052-a08af7148866", alt: "Floral installation" },
      { id: "photo-1525772764200-be829a350797", alt: "Floral details" },
    ]),
  },
  {
    id: "lighting",
    title: "Lighting & Set Design",
    group: "decor",
    bullets: [
      "Architectural and ambient lighting design",
      "Set construction, drapes and large-scale builds",
      "Light cues choreographed with the run of show",
    ],
    images: stripImages([
      { id: "photo-1583939003579-730e3918a45a", alt: "Lighting design" },
      { id: "photo-1606800052052-a08af7148866", alt: "Set design" },
      { id: "photo-1519741497674-611481863552", alt: "Reception lighting" },
    ]),
  },
  {
    id: "tablescape",
    title: "Tablescape & Dining Décor",
    group: "decor",
    bullets: [
      "Linen, glassware and silverware curation",
      "Centrepieces tied to the wider design language",
      "Place settings, menu cards and dining choreography",
    ],
    images: stripImages([
      { id: "photo-1606800052052-a08af7148866", alt: "Dining tablescape" },
      { id: "photo-1525772764200-be829a350797", alt: "Table details" },
    ]),
  },

  // ── Hospitality ──────────────────────────────────────────
  {
    id: "welcome",
    title: "Guest Welcome & Concierge",
    group: "hospitality",
    bullets: [
      "Arrival concierge, room kits and welcome notes",
      "Family-by-family hospitality desks for the duration of the wedding",
      "On-call concierge for special requests",
    ],
    images: stripImages([
      { id: "photo-1519741497674-611481863552", alt: "Guest welcome" },
      { id: "photo-1606800052052-a08af7148866", alt: "Hospitality desk" },
    ]),
  },
  {
    id: "travel",
    title: "Travel & Transfers",
    group: "hospitality",
    bullets: [
      "Group flight bookings and chartered options",
      "Airport transfers, intra-event shuttles and family fleets",
      "Room allocation and intra-property logistics",
    ],
    images: stripImages([
      { id: "photo-1511795409834-ef04bbd61622", alt: "Travel & transfers" },
      { id: "photo-1519225421980-715cb0215aed", alt: "Guest movement" },
    ]),
  },
  {
    id: "bars",
    title: "Bar & Beverage Programmes",
    group: "hospitality",
    bullets: [
      "Concept-driven bars across cocktails, sundowners and after-parties",
      "Mixologists from India and abroad",
      "Cocktail and mocktail menus tied to the wedding theme",
    ],
    images: stripImages([
      { id: "photo-1514362545857-3bc16c4c7d1b", alt: "Cocktail bar" },
      { id: "photo-1551024709-8f23befc6f87", alt: "Bar setup" },
    ]),
  },
  {
    id: "gifts",
    title: "Gifts & Hospitality Kits",
    group: "hospitality",
    bullets: [
      "Curated gifting for guests and immediate family",
      "Welcome hampers, ritual giveaways and trousseau coordination",
      "Sourcing across Kolkata, Mumbai, Singapore, Dubai and London",
    ],
    images: stripImages([
      { id: "photo-1606216794074-735e91aa2c92", alt: "Wedding gifts" },
      { id: "photo-1525772764200-be829a350797", alt: "Hospitality kit" },
    ]),
  },

  // ── Designing Stationery ─────────────────────────────────
  {
    id: "invitation-suites",
    title: "Save-the-Dates & Invitation Suites",
    group: "stationery",
    bullets: [
      "Bespoke invitation suites tailored to the wedding's design language",
      "Save-the-dates, RSVP cards, ceremony booklets and itinerary inserts",
      "Bilingual and multi-script typesetting where the families call for it",
    ],
    images: [
      { src: stationeryFlatlay, alt: "Invitation suite with tassels and motifs" },
      { src: stationerySuite, alt: "Detail of an invitation suite" },
    ],
  },
  {
    id: "monograms-illustration",
    title: "Monograms, Crests & Illustration",
    group: "stationery",
    bullets: [
      "Custom monograms and family crests, drawn by hand",
      "Watercolour and line illustrations of venues, motifs and heritage symbols",
      "A consistent visual identity used across print, signage and on-day collateral",
    ],
    images: [
      { src: stationeryDetail1, alt: "Hand-illustrated monograms and motifs" },
      { src: stationeryDetail3, alt: "Bespoke crests on print" },
    ],
  },
  {
    id: "onday-print",
    title: "On-Day Print: Menus, Place Cards & Signage",
    group: "stationery",
    bullets: [
      "Welcome boards, seating charts and directional signage",
      "Menu cards, place cards and table numbers in coordinated finishes",
      "Mandap, bar and pheras signage placed thoughtfully across the venue",
    ],
    images: [
      { src: stationerySigns, alt: "Wedding signage and menus on-site" },
      { src: stationeryFans, alt: "Place cards and ceremony fans" },
    ],
  },
  {
    id: "print-finishes",
    title: "Print Finishes: Letterpress, Foil & Hand-Painting",
    group: "stationery",
    bullets: [
      "Letterpress, foil-stamping, embossing and deckle-edge work",
      "Tassels, wax seals, ribbon ties and hand-painted edges",
      "Sourcing across artisanal print houses in India and abroad",
    ],
    images: [
      { src: stationeryDetail2, alt: "Letterpress and finishing details" },
      { src: stationeryFlatlay, alt: "Foil and tassel finishes on stationery" },
    ],
  },
];
