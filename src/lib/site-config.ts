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
    "Al Safa Taxi delivers premium private transportation and Ziyarat tours across Makkah, Madinah, Jeddah and Taif — airport transfers, city taxi, intercity travel and professional chauffeur service, available 24/7.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://alsafataxi.com",
  phone: "+966 50 048 8604",
  phoneHref: "tel:+966500488604",
  whatsapp: "+966 50 048 8604",
  whatsappNumber: "966500488604",
  email: "booking@alsafataxi.com",
  address: "Jeddah, Kingdom of Saudi Arabia",
  trustpilotUrl: "https://www.trustpilot.com/review/alsafataxi.com",
  hours: "Available 24 hours a day, 7 days a week",
} as const;

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Fleet", href: "/fleet" },
  { label: "Airports", href: "/airports" },
  { label: "Locations", href: "/locations" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerExtraNav: NavLink[] = [
  { label: "Umrah Transportation", href: "/umrah-transportation" },
  { label: "Popular Routes", href: "/routes" },
];

export const footerServiceLinks: NavLink[] = [
  { label: "Airport Transfers", href: "/services/airport-transfers" },
  { label: "Ziyarat Tours", href: "/services/ziyarat-tours" },
  { label: "City Taxi", href: "/services/city-taxi" },
  { label: "Intercity Transfers", href: "/services/intercity-transfers" },
  { label: "Private Chauffeur", href: "/services/private-chauffeur" },
  { label: "Hotel Transfers", href: "/services/hotel-transfers" },
  { label: "Business Transportation", href: "/services/business-transportation" },
];

export const socialLinks = [
  { label: "Instagram", href: "#", icon: "instagram" as const },
  { label: "X (Twitter)", href: "#", icon: "twitter" as const },
  { label: "Facebook", href: "#", icon: "facebook" as const },
  { label: "WhatsApp", href: "#", icon: "whatsapp" as const },
];
