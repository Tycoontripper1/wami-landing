import type { TileTone } from "@/components/illustrations/IllustrationTile";
import type { SceneName } from "@/components/illustrations/scenes";
import type { VignetteName } from "@/components/vignettes/Vignettes";

/* All copy lives here. Claims are limited to what the app actually does:
   anything that is not switched on yet (payments, payouts, Instagram import)
   is marked `soon`. */

export type Feature = {
  vignette: VignetteName;
  title: string;
  body: string;
  soon?: boolean;
};

export const site = {
  name: "Wami",
  title: "Wami — hire creatives, buy their work",
  description:
    "Wami connects you with photographers, stylists, makers and sellers near you. See their work, find them on the map, message them and book a date, all in one app.",
  tagline: "Creatives, sellers and buyers, in one place.",
};

/* `href: null` renders an honest "coming soon" button instead of a dead link.
   Set the real store URLs here when the listings exist. */
export const stores: Array<{ id: "ios" | "android"; kicker: string; label: string; href: string | null }> = [
  { id: "ios", kicker: "Download on the", label: "App Store", href: null },
  { id: "android", kicker: "Get it on", label: "Google Play", href: null },
];

export const nav = [
  { label: "Browse", href: "#browse" },
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "For creatives", href: "#creatives" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "For buyers and creatives",
  title: "Find creatives near you. Book them, or buy their work.",
  body: "Scroll through what photographers, stylists, makers and sellers have made, see who works near you on the map, message them, and book a date. All in one app.",
};

/** The categories the app actually has (Fashion, Beauty, Accessories, Art, Photography, Digital). */
export const categories: Array<{
  id: string;
  title: string;
  body: string;
  tone: TileTone;
  /** Bold slide colour used by the mobile carousel. */
  bold: "cyan" | "lime" | "coral" | "amber" | "lilac";
  scene: SceneName;
}> = [
  {
    id: "photography",
    title: "Photography",
    body: "Portraits, events and product shoots from photographers in your city.",
    tone: "a",
    bold: "cyan",
    scene: "camera",
  },
  {
    id: "beauty",
    title: "Hair & beauty",
    body: "Stylists, braiders and makeup artists you can book for a date and time.",
    tone: "d",
    bold: "lime",
    scene: "beauty",
  },
  {
    id: "fashion",
    title: "Fashion & accessories",
    body: "Clothes, bags and pieces made by the people who designed them.",
    tone: "b",
    bold: "coral",
    scene: "fashion",
  },
  {
    id: "art",
    title: "Art & design",
    body: "Original artwork, prints and custom commissions.",
    tone: "e",
    bold: "amber",
    scene: "art",
  },
  {
    id: "digital",
    title: "Digital",
    body: "Designers and makers delivering work you can use straight away.",
    tone: "c",
    bold: "lilac",
    scene: "digital",
  },
];

export const features: Feature[] = [
  {
    vignette: "feed",
    title: "A feed of real work",
    body: "Scroll through what people have made, with their name, role and rating on every post. Save the ones you like.",
  },
  {
    vignette: "map",
    title: "See who works near you",
    body: "Open the map, pick your city and tap a bubble to find the creatives and shops there.",
  },
  {
    vignette: "book",
    title: "Book a date and time",
    body: "Pick a slot, add the project details, and reschedule or cancel when plans change.",
  },
  {
    vignette: "chat",
    title: "Talk it through first",
    body: "Message a creative to agree what you need and the price before anything is booked.",
  },
  {
    vignette: "listing",
    title: "Buy what they make",
    body: "Browse products from creatives with the price and stock shown up front. Ordering opens when payments go live.",
    soon: true,
  },
  {
    vignette: "review",
    title: "Reviews from real jobs",
    body: "Only people who have booked or bought can leave a review, so ratings come from actual work.",
  },
];

export const steps: Feature[] = [
  {
    vignette: "map",
    title: "Find someone",
    body: "Browse the feed or open the map. Save the people and products you like.",
  },
  {
    vignette: "book",
    title: "Book the work",
    body: "Choose a date and time, describe the job, and send the request.",
  },
  {
    vignette: "chat",
    title: "Get it done",
    body: "Stay in touch in chat, agree the details, and leave a review when it is finished.",
  },
];

export const creatives = {
  eyebrow: "For creatives",
  title: "Sell what you make.",
  body: "List what you offer, show your work, and let people in your city find you.",
  perks: [
    {
      vignette: "listing",
      title: "List services and products",
      body: "Add what you offer with a price and a description, in a few taps.",
    },
    {
      vignette: "import",
      title: "Bring your work from Instagram",
      body: "Connect your account and turn your posts into listings instead of starting over.",
      soon: true,
    },
    {
      vignette: "wallet",
      title: "Get paid to your wallet",
      body: "Earnings land in your Wami wallet, and you request a payout to your bank.",
      soon: true,
    },
  ] satisfies Feature[],
};

export const audiences: Array<{ title: string; points: string[] }> = [
  {
    title: "Looking to hire or buy?",
    points: [
      "Browse creatives and products near you",
      "Chat before you book",
      "Save favourites for later",
      "Review work you have actually paid for",
    ],
  },
  {
    title: "Making things for a living?",
    points: [
      "Set up a creative profile",
      "List services and products",
      "Import from Instagram, when it opens",
      "Manage bookings in one place",
    ],
  },
];

export const faqs = [
  {
    q: "What can I find on Wami?",
    a: "Creative services — photography, hair, makeup and more — and products made by creatives, across categories like fashion, beauty, accessories, art and digital.",
  },
  {
    q: "How do bookings work?",
    a: "Open a creative's listing, choose a date and time, describe the project and send the request. They confirm it, and you can reschedule or cancel from the booking page.",
  },
  {
    q: "How does payment work?",
    a: "Payments are held by Wami and released to the creative in milestones as the work is delivered. Payments are opening soon — you'll be able to book and chat before then.",
  },
  {
    q: "Can I sell on Wami?",
    a: "Yes. Switch to a creative account, add your services and products, and optionally import your work from Instagram.",
  },
  {
    q: "Who can leave a review?",
    a: "Only people who have bought a product or booked a service. That keeps ratings tied to real work.",
  },
];
