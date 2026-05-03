export interface ReelItem {
  id: string;
  videoSrc: string;
  posterSrc?: string;
  caption: string;
  subtitle: string;
  views: number;
  permalink?: string;
}

export const REELS: ReelItem[] = [
  {
    id: "r1",
    videoSrc: "/videos/goa-new-web.mp4",
    caption: "Sundown",
    subtitle: "An hour of",
    views: 105,
    permalink: "https://instagram.com/",
  },
  {
    id: "r2",
    videoSrc: "/videos/jaipur-wedding-web.mp4",
    caption: "Heirloom",
    subtitle: "A morning held as",
    views: 117,
    permalink: "https://instagram.com/",
  },
  {
    id: "r3",
    videoSrc: "/videos/wedding-web.mp4",
    caption: "Reverie",
    subtitle: "Slow and quiet",
    views: 67,
    permalink: "https://instagram.com/",
  },
  {
    id: "r4",
    videoSrc: "/videos/goa-new-web.mp4",
    caption: "Bloom",
    subtitle: "A garden in",
    views: 69,
    permalink: "https://instagram.com/",
  },
  {
    id: "r5",
    videoSrc: "/videos/jaipur-wedding-web.mp4",
    caption: "Glow",
    subtitle: "An evening lit by",
    views: 54,
    permalink: "https://instagram.com/",
  },
  {
    id: "r6",
    videoSrc: "/videos/wedding-web.mp4",
    caption: "Stillness",
    subtitle: "A pause held in",
    views: 89,
    permalink: "https://instagram.com/",
  },
];
