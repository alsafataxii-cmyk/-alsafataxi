export type NavLink = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Al Safa Taxi",
  legalName: "Al Safa Taxi",
  owner: "Ahsan Khan",
  tagline: "Safe Journeys, Greater Destinations",
  description:
    "Al Safa Taxi provides private transportation and Ziyarat tours across Makkah, Madinah, Jeddah and Taif — airport transfers, city taxi, intercity travel and professional chauffeur service, available 24/7.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://alsafataxi.com",
  phone: "+966 50 048 8604",
  phoneHref: "tel:+966500488604",
  whatsapp: "+966 50 048 8604",
  whatsappNumber: "966500488604",
  email: "booking@alsafataxi.com",
  address: "Jeddah, Kingdom of Saudi Arabia",
  trustpilotUrl: "https://www.trustpilot.com/review/alsafataxi.com",
  hours: "Available 24 hours a day, 7 days a week",
  // Bump when site content changes meaningfully; used as the sitemap lastModified date.
  contentUpdated: "2026-10-03",
} as const;

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Umrah", href: "/umrah-transportation" },
  { label: "Fleet", href: "/fleet" },
  { label: "Airports", href: "/airports" },
  { label: "Locations", href: "/locations" },
  { label: "Routes", href: "/routes" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerExtraNav: NavLink[] = [];

export const footerServiceLinks: NavLink[] = [
  { label: "Airport Transfers", href: "/services/airport-transfers" },
  { label: "Ziyarat Tours", href: "/services/ziyarat-tours" },
  { label: "City Taxi", href: "/services/city-taxi" },
  { label: "Intercity Transfers", href: "/services/intercity-transfers" },
  { label: "Private Chauffeur", href: "/services/private-chauffeur" },
  { label: "Hotel Transfers", href: "/services/hotel-transfers" },
  { label: "Business Transportation", href: "/services/business-transportation" },
];

// Leave href empty until the real profile URL exists; empty entries are not rendered.
export const socialLinks = [
  { label: "Instagram", href: "", icon: "instagram" as const },
  { label: "X (Twitter)", href: "", icon: "twitter" as const },
  { label: "Facebook", href: "", icon: "facebook" as const },
  { label: "WhatsApp", href: "https://wa.me/966500488604", icon: "whatsapp" as const },
];
