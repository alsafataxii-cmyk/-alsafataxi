import type { ContentImage } from "@/lib/content/images";
import type { Faq } from "@/lib/content/types";

export type VehicleKey = "7-seater" | "staria" | "yukon";
export type HeroVariant = "family" | "airport" | "journey" | "vehicle" | "premium";

export type Block =
  | { type: "answer"; question: string; answer: string; detail?: string; facts?: { label: string; value: string }[] }
  | { type: "prose"; heading: string; paragraphs: string[]; bullets?: string[]; aside?: string; tone?: "white" | "sand" }
  | { type: "checklist"; heading: string; intro?: string; items: string[]; tone?: "white" | "sand" }
  | { type: "timeline"; heading: string; intro?: string; style: "arrival" | "journey" | "steps"; steps: { title: string; copy: string }[] }
  | { type: "compare"; heading: string; intro?: string; columns: [string, string]; rows: [string, string, string][]; note?: string }
  | { type: "cards"; heading: string; intro?: string; items: { title: string; copy: string }[]; columns?: 2 | 3 }
  | { type: "capacity"; heading: string; intro?: string; items: { label: string; value: string }[]; note: string }
  | { type: "split"; heading: string; paragraphs: string[]; image: ContentImage; side: "left" | "right" }
  | { type: "cta"; heading: string; copy: string; button: string; whatsapp: string; dark?: boolean }
  | { type: "faq"; title: string; faqs: Faq[] }
  | { type: "related"; heading: string; links: { label: string; href: string; note: string }[] };

export type VehicleRoutePage = {
  route: string; // parent route slug
  vehicle: VehicleKey;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  lead: string;
  hero: HeroVariant;
  heroImage?: ContentImage;
  heroSideImage?: ContentImage;
  heroPoints: string[];
  primaryCta: string;
  mobileCta: string;
  whatsappText: string;
  blocks: Block[];
};
