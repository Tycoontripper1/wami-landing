import type { IllustrationName } from "@/components/illustrations/Illustration";
import type { TileTone } from "@/components/illustrations/IllustrationTile";
import type { SceneName } from "@/components/illustrations/scenes";

/* All copy lives here. Claims are limited to what the app actually does —
   payments are marked `soon` because they are not switched on yet. */

export type Feature = {
  illustration: IllustrationName;
  tone: TileTone;
  title: string;
  body: string;
  soon?: boolean;
};

export const site = {
  name: "Wami",
  title: "Wami — hire creatives, buy their work",
  description:
    "Wami connects you with photographers, stylists, makers and sellers near you. Browse, chat, book and get it done — all in one app.",
  tagline: "Bringing the best for creatives, sellers and buyers to your home.",
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
  /* Kept short: the longest word sets the width of the highlighted chip, and
     "Hire <word>" has to stay on one line next to the phone. */
  rolling: ["creatives", "stylists", "makers", "designers", "artists"],
  lead: "Hire",
  title: "Buy their work. Skip the back-and-forth.",
  body: "Photographers, stylists, makers and sellers near you — browse their work, talk to them, and book a date, all without leaving the app.",
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

/** Short lines for the ticker — each pairs with a small drawing. */
export const ticker: Array<{ illustration: IllustrationName; text: string }> = [
  { illustration: "discover", text: "Swipe through talent" },
  { illustration: "location", text: "Find people near you" },
  { illustration: "book", text: "Book a date and time" },
  { illustration: "chat", text: "Chat before you commit" },
  { illustration: "shield", text: "Pay safely" },
  { illustration: "star", text: "Reviews from real work" },
  { illustration: "sell", text: "List what you make" },
  { illustration: "import", text: "Bring your work from Instagram" },
  { illustration: "wallet", text: "Get paid to your wallet" },
];

export const features: Feature[] = [
  {
    illustration: "discover",
    tone: "a",
    title: "Swipe through talent",
    body: "A feed of creatives and products picked for where you are. Save the ones you like, pass on the rest.",
  },
  {
    illustration: "location",
    tone: "b",
    title: "Close to home",
    body: "Switch between Discover, Trending and Near You to find people working in your city.",
  },
  {
    illustration: "book",
    tone: "c",
    title: "Book a date and time",
    body: "Pick a slot, add the project details, and reschedule or cancel when plans change.",
  },
  {
    illustration: "chat",
    tone: "d",
    title: "Talk before you commit",
    body: "Message a creative to agree the scope and the price before anything is booked.",
  },
  {
    illustration: "shield",
    tone: "e",
    title: "Pay safely",
    body: "Your payment is held by Wami and released to the creative in milestones as the work is delivered.",
    soon: true,
  },
  {
    illustration: "star",
    tone: "a",
    title: "Reviews from real work",
    body: "Only people who have booked or bought can leave a review, so ratings come from actual jobs.",
  },
];

export const steps: Feature[] = [
  {
    illustration: "discover",
    tone: "a",
    title: "Find someone",
    body: "Browse the feed or search your area. Save the people and products you like.",
  },
  {
    illustration: "book",
    tone: "b",
    title: "Book the work",
    body: "Choose a date and time, describe the job, and send the request.",
  },
  {
    illustration: "shield",
    tone: "c",
    title: "Get it done",
    body: "Stay in touch in chat, release payment as milestones are met, and leave a review.",
  },
];

export const creatives = {
  eyebrow: "For creatives",
  title: "Make a living from what you make.",
  body: "List what you offer, show your work, and let people in your city find you.",
  perks: [
    {
      illustration: "sell",
      tone: "a",
      title: "List services and products",
      body: "Add what you offer with a price and a description, in a few taps.",
    },
    {
      illustration: "import",
      tone: "b",
      title: "Bring your work from Instagram",
      body: "Connect your account and turn your posts into listings instead of starting over.",
    },
    {
      illustration: "wallet",
      tone: "c",
      title: "Get paid to your wallet",
      body: "Earnings land in your Wami wallet, and you request a payout to your bank.",
      soon: true,
    },
  ] satisfies Feature[],
};

export const audiences: Array<{ title: string; illustration: IllustrationName; points: string[] }> = [
  {
    title: "Looking to hire or buy?",
    illustration: "discover",
    points: [
      "Browse creatives and products near you",
      "Chat before you book",
      "Save favourites for later",
      "Review work you've actually paid for",
    ],
  },
  {
    title: "Making things for a living?",
    illustration: "sell",
    points: [
      "Set up a creative profile",
      "List services and products",
      "Import from Instagram",
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
