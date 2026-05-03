export interface Service {
  slug: string;
  title: string;
  eyebrow: string;
  excerpt: string;
  bullets: string[];
  image: string;
}

export const SERVICES: Service[] = [
  {
    slug: "planning",
    title: "Planning",
    eyebrow: "Phase 01",
    excerpt:
      "From the first conversation to the final guest list — concept, calendars, vendor curation and a plan you can actually live with.",
    bullets: [
      "Concept and creative direction",
      "Venue scouting, recces and contracts",
      "Budget architecture and vendor management",
      "Run-of-show, ritual planning and travel logistics",
    ],
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "decor",
    title: "Decor",
    eyebrow: "Phase 02",
    excerpt:
      "Florals, lighting, sets, stationery and tablescape — designed and directed as one continuous visual language.",
    bullets: [
      "Floral and mandap design",
      "Lighting, sets and architectural builds",
      "Stationery, signage and print direction",
      "Tablescape, dining décor and ambient detail",
    ],
    image:
      "https://images.unsplash.com/photo-1525772764200-be829a350797?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    eyebrow: "Phase 03",
    excerpt:
      "How your guests are received, fed, moved and looked after — held by a team that treats every family like the only one.",
    bullets: [
      "Guest welcome desk and concierge",
      "Travel, transfers and room kitting",
      "Bar and beverage programmes",
      "Gifting, hampers and farewell hospitality",
    ],
    image:
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1600&q=80",
  },
];
