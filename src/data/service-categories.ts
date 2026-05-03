export type ServiceGroup = "planning" | "decor" | "hospitality";

export interface ServiceCategory {
  id: string;
  title: string;
  group: ServiceGroup;
  bullets: string[];
  images: { src: string; alt: string }[];
}

const stripImages = (
  seeds: { id: string; alt: string }[],
): { src: string; alt: string }[] =>
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
    id: "stationery",
    title: "Stationery, Signage & Print",
    group: "decor",
    bullets: [
      "Save-the-dates, invites and itinerary booklets",
      "On-site signage, menu cards and seating charts",
      "Letterpress, foiling and handmade processes",
    ],
    images: stripImages([
      { id: "photo-1525772764200-be829a350797", alt: "Wedding stationery" },
      { id: "photo-1606216794074-735e91aa2c92", alt: "Print collateral" },
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
];
