import type { StaticImageData } from "next/image";
import planningImage from "@/assets/services/planning.jpeg";
import decorImage from "@/assets/services/decor.jpeg";
import hospitalityImage from "@/assets/services/hospitality.jpeg";

export interface Service {
  slug: string;
  title: string;
  eyebrow: string;
  excerpt: string;
  bullets: string[];
  image: string | StaticImageData;
}

const STATIONERY_PLACEHOLDER =
  "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&w=1600&q=80";

export const SERVICES: Service[] = [
  {
    slug: "planning",
    title: "Planning",
    eyebrow: "",
    excerpt:
      "From the first conversation to the final guest list — concept, calendars, vendor curation and a plan you can actually live with.",
    bullets: [
      "Concept and creative direction",
      "Venue scouting, recces and contracts",
      "Budget architecture and vendor management",
      "Run-of-show, ritual planning and travel logistics",
    ],
    image: planningImage,
  },
  {
    slug: "decor",
    title: "Decor",
    eyebrow: "",
    excerpt:
      "Florals, lighting, sets, stationery and tablescape — designed and directed as one continuous visual language.",
    bullets: [
      "Floral and mandap design",
      "Lighting, sets and architectural builds",
      "Stationery, signage and print direction",
      "Tablescape, dining décor and ambient detail",
    ],
    image: decorImage,
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    eyebrow: "",
    excerpt:
      "How your guests are received, fed, moved and looked after — held by a team that treats every family like the only one.",
    bullets: [
      "Guest welcome desk and concierge",
      "Travel, transfers and room kitting",
      "Bar and beverage programmes",
      "Gifting, hampers and farewell hospitality",
    ],
    image: hospitalityImage,
  },
  {
    slug: "stationery",
    title: "Designing Stationery",
    eyebrow: "",
    excerpt:
      "Save-the-dates, invitation suites, on-day signage and after-cards — illustrated, lettered and printed as a quiet thread that runs through every moment of the celebration.",
    bullets: [
      "Bespoke invitation suites and save-the-dates",
      "Custom monograms, illustrations and crests",
      "On-day menus, place cards and signage",
      "Letterpress, foil, hand-painting and fine print finishes",
    ],
    image: STATIONERY_PLACEHOLDER,
  },
];
