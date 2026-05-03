export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  location: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "They listened more than they pitched, and the wedding looked like the version of us we hadn't yet put into words.",
    author: "Aanya & Rohan",
    role: "Three-day Celebration",
    location: "Udaipur",
  },
  {
    quote:
      "Calm, exacting, and quietly funny when the day ran a little wild. We never once felt the strings being pulled.",
    author: "Meera & Karan",
    role: "Coastal Wedding",
    location: "Goa",
  },
  {
    quote:
      "From the typeface on the invitations to the way the lights came up at dinner — every detail was held with care.",
    author: "Ishita & Daniyal",
    role: "Destination Wedding",
    location: "Tuscany",
  },
];
