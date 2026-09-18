import type { LucideIcon } from "lucide-react";
import {
  Plane,
  Car,
  CarFront,
  Bus,
  MapPinned,
  UserRound,
  Building2,
  Briefcase,
  ShieldCheck,
  Clock,
  Award,
  Gauge,
  HeartHandshake,
  Landmark,
  PlaneTakeoff,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "airport-transfers",
    title: "Airport Transfers",
    description:
      "Reliable, flight-tracked pickups and drop-offs at Jeddah and Madinah airports.",
    longDescription:
      "Our airport transfer service tracks your flight in real time, so your chauffeur is always ready, whether you land early or your flight is delayed. Meet-and-greet service is available at King Abdulaziz International (Jeddah) and Prince Mohammad bin Abdulaziz International (Madinah).",
    icon: Plane,
  },
  {
    slug: "ziyarat-tours",
    title: "Ziyarat Tours",
    description:
      "Guided taxi tours to the historic and religious sites of Makkah and Madinah.",
    longDescription:
      "Visit the significant historical and religious sites of Makkah and Madinah — including Jabal al-Noor, Jabal Uhud, Quba Mosque and more — with a patient driver and a private, comfortable vehicle at your own pace.",
    icon: Landmark,
  },
  {
    slug: "city-taxi",
    title: "City Taxi",
    description: "On-demand rides across the city in clean, comfortable vehicles.",
    longDescription:
      "For everyday journeys around town, Al Safa Taxi offers dependable metered and pre-booked city rides with professional, background-checked drivers who know the fastest routes.",
    icon: Car,
  },
  {
    slug: "intercity-transfers",
    title: "Intercity Transfers",
    description: "Comfortable, direct travel between Makkah, Madinah, Jeddah and Taif.",
    longDescription:
      "Travel between Makkah, Madinah, Jeddah and Taif in a private vehicle, with a fixed price agreed before departure and a professional driver for the entire journey.",
    icon: MapPinned,
  },
  {
    slug: "private-chauffeur",
    title: "Private Chauffeur",
    description: "Dedicated, professionally trained drivers for your schedule.",
    longDescription:
      "Engage a private chauffeur by the hour, day or for a multi-day itinerary. Ideal for executives, families and visitors who want one trusted driver for the duration of their stay.",
    icon: UserRound,
  },
  {
    slug: "hotel-transfers",
    title: "Hotel Transfers",
    description:
      "Seamless transport coordinated with hotels and resorts across Makkah, Madinah, Jeddah and Taif.",
    longDescription:
      "We coordinate directly with hotel concierge teams to schedule punctual pickups and drop-offs, so your stay begins and ends without friction.",
    icon: Building2,
  },
  {
    slug: "business-transportation",
    title: "Business Transportation",
    description: "Polished transportation for corporate travel and events.",
    longDescription:
      "From single executive transfers to coordinated transportation for delegations and corporate events, we provide account billing, dedicated dispatch and consistently presented vehicles.",
    icon: Briefcase,
  },
];

export type FleetVehicle = {
  slug: string;
  name: string;
  className: string;
  passengers: number;
  luggage: number;
  description: string;
  features: string[];
  icon: LucideIcon;
};

export const fleet: FleetVehicle[] = [
  {
    slug: "executive-sedan",
    name: "Executive Sedan",
    className: "Standard Class",
    passengers: 3,
    luggage: 2,
    description:
      "A refined, efficient choice for city travel and business transfers.",
    features: ["Professional driver", "Bottled water", "Climate control"],
    icon: Car,
  },
  {
    slug: "premium-suv",
    name: "Premium SUV",
    className: "Comfort Class",
    passengers: 5,
    luggage: 4,
    description: "Extra space and elevated comfort for families and small groups.",
    features: ["Spacious cabin", "Extra luggage capacity", "Child seat on request"],
    icon: CarFront,
  },
  {
    slug: "luxury-van",
    name: "Luxury Van",
    className: "Group Class",
    passengers: 8,
    luggage: 6,
    description: "The practical choice for group transfers and larger parties.",
    features: ["Group seating", "Ideal for airport groups", "Generous luggage space"],
    icon: Bus,
  },
  {
    slug: "vip-chauffeur",
    name: "VIP Chauffeur Car",
    className: "First Class",
    passengers: 3,
    luggage: 2,
    description: "Our top-tier vehicle and driver pairing for executives and VIP guests.",
    features: ["Senior chauffeur", "Premium interior", "Priority dispatch"],
    icon: Car,
  },
];

export type LocationEntry = {
  slug: string;
  name: string;
  subtitle: string;
  type: "city" | "airport";
};

export const locations: LocationEntry[] = [
  { slug: "makkah", name: "Makkah", subtitle: "Holy City", type: "city" },
  { slug: "madinah", name: "Madinah", subtitle: "Holy City", type: "city" },
  { slug: "jeddah", name: "Jeddah", subtitle: "Red Sea Gateway", type: "city" },
  { slug: "taif", name: "Taif", subtitle: "Highland City", type: "city" },
  {
    slug: "jed",
    name: "King Abdulaziz International",
    subtitle: "Jeddah · JED",
    type: "airport",
  },
  {
    slug: "med",
    name: "Prince Mohammad bin Abdulaziz International",
    subtitle: "Madinah · MED",
    type: "airport",
  },
  {
    slug: "tif",
    name: "Taif International Airport",
    subtitle: "Taif · TIF",
    type: "airport",
  },
];

export type TrustHighlight = {
  title: string;
  icon: LucideIcon;
};

export const trustHighlights: TrustHighlight[] = [
  { title: "Professional Drivers", icon: ShieldCheck },
  { title: "Comfortable Vehicles", icon: Car },
  { title: "Airport Transfers", icon: PlaneTakeoff },
  { title: "24/7 Booking", icon: Clock },
  { title: "Reliable Service", icon: Award },
];

export type WhyItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const whyAlSafa: WhyItem[] = [
  {
    title: "Vetted, Professional Drivers",
    description:
      "Every driver is background-checked, licensed and trained in courteous, professional service.",
    icon: UserRound,
  },
  {
    title: "Punctual & Reliable",
    description:
      "Flight tracking and disciplined dispatch mean your driver arrives on time, every time.",
    icon: Clock,
  },
  {
    title: "Transparent Pricing",
    description:
      "Know your fare before you travel, with no hidden fees or last-minute surprises.",
    icon: Gauge,
  },
  {
    title: "Well-Maintained Fleet",
    description:
      "Vehicles are cleaned, inspected and maintained to a consistently high standard.",
    icon: Car,
  },
  {
    title: "Makkah Region Coverage",
    description:
      "From the Holy Cities to Jeddah and Taif, our network covers the Western Region.",
    icon: Landmark,
  },
  {
    title: "Always Available",
    description:
      "Our booking line and dispatch team operate around the clock, every day of the year.",
    icon: HeartHandshake,
  },
];

export const stats = [
  { label: "Years of Service", value: "10+" },
  { label: "Cities Covered", value: "4" },
  { label: "Daily Rides", value: "500+" },
  { label: "Customer Rating", value: "4.9/5" },
];
