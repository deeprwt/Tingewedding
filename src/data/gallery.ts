export interface GalleryItem {
  src: string;
  alt: string;
  category: "ceremony" | "decor" | "portrait" | "details";
  span?: "tall" | "square";
}

export const GALLERY: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1400&q=80",
    alt: "Reception table with low florals",
    category: "decor",
    span: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=80",
    alt: "Bride in soft window light",
    category: "portrait",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1525772764200-be829a350797?auto=format&fit=crop&w=1400&q=80",
    alt: "Stationery and details laid flat",
    category: "details",
    span: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1400&q=80",
    alt: "Detail of bridal jewellery",
    category: "details",
    span: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1400&q=80",
    alt: "Reception lighting at dusk",
    category: "ceremony",
    span: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1400&q=80",
    alt: "Aisle florals and candles",
    category: "decor",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=80",
    alt: "Outdoor mandap at golden hour",
    category: "ceremony",
    span: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
    alt: "Couple walking through arches",
    category: "portrait",
    span: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1400&q=80",
    alt: "Layered place setting",
    category: "details",
    span: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1400&q=80",
    alt: "Wedding cake and florals",
    category: "decor",
    span: "square",
  },
];
