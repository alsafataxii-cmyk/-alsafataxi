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
      "Private pickups and drop-offs at Jeddah, Madinah and Taif airports, with onward travel to Makkah.",
    longDescription:
      "Book a private pickup or drop-off at King Abdulaziz International (Jeddah), Prince Mohammad bin Abdulaziz International (Madinah) or Taif International Airport, with onward travel to hotels in Makkah, Madinah, Jeddah and Taif. Share your flight number when you book so the pickup is planned around your arrival.",
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
    description: "Pre-booked private taxis for everyday journeys within the city.",
    longDescription:
      "For everyday journeys around town, Al Safa Taxi offers pre-booked private rides with a driver who arrives at an agreed time, in Makkah, Madinah, Jeddah and Taif.",
    icon: Car,
  },
  {
    slug: "intercity-transfers",
    title: "Intercity Transfers",
    description: "Comfortable, direct travel between Makkah, Madinah, Jeddah and Taif.",
    longDescription:
      "Travel between Makkah, Madinah, Jeddah and Taif in a private vehicle, door to door, with your group and luggage together and stops planned for prayer and rest.",
    icon: MapPinned,
  },
  {
    slug: "private-chauffeur",
    title: "Private Chauffeur",
    description: "Dedicated, professionally trained drivers for your schedule.",
    longDescription:
      "Engage a private chauffeur by the hour, day or for a multi-day itinerary. Ideal for executives, families and visitors who want one driver for the duration of their stay.",
    icon: UserRound,
  },
  {
    slug: "hotel-transfers",
    title: "Hotel Transfers",
    description:
      "Airport pickups, hotel-to-hotel moves and departures across Makkah, Madinah, Jeddah and Taif.",
    longDescription:
      "Private transfers to and from your hotel, planned around your check-in and checkout times, including hotels near the Haram and the Prophet's Mosque where vehicle access can vary.",
    icon: Building2,
  },
  {
    slug: "business-transportation",
    title: "Business Transportation",
    description: "Polished transportation for corporate travel and events.",
    longDescription:
      "From single executive transfers to transportation for delegations and corporate events, planned around your guest numbers, arrival times and venues.",
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
    features: ["Professional driver", "Air-conditioned cabin", "Suited to city and business travel"],
    icon: Car,
  },
  {
    slug: "premium-suv",
    name: "Premium SUV",
    className: "Comfort Class",
    passengers: 5,
    luggage: 4,
    description: "Extra space and elevated comfort for families and small groups.",
    features: ["Spacious cabin", "Extra luggage capacity", "Suited to families"],
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
    features: ["Professional chauffeur", "Premium comfort", "Suited to executives and VIP guests"],
    icon: Car,
  },
];

export type LocationEntry = {
  slug: string;
  name: string;
  subtitle: string;
  type: "city" | "airport";
  href: string;
};

export const locations: LocationEntry[] = [
  { slug: "makkah", name: "Makkah", subtitle: "Holy City", type: "city", href: "/locations/makkah" },
  { slug: "madinah", name: "Madinah", subtitle: "Holy City", type: "city", href: "/locations/madinah" },
  {
    slug: "jeddah",
    name: "Jeddah",
    subtitle: "Red Sea Gateway",
    type: "city",
    href: "/locations/jeddah",
  },
  { slug: "taif", name: "Taif", subtitle: "Highland City", type: "city", href: "/locations/taif" },
  {
    slug: "jeddah-airport",
    name: "King Abdulaziz International",
    subtitle: "Jeddah · JED",
    type: "airport",
    href: "/airports/jeddah-airport",
  },
  {
    slug: "madinah-airport",
    name: "Prince Mohammad bin Abdulaziz International",
    subtitle: "Madinah · MED",
    type: "airport",
    href: "/airports/madinah-airport",
  },
  {
    slug: "taif-airport",
    name: "Taif International Airport",
    subtitle: "Taif · TIF",
    type: "airport",
    href: "/airports/taif-airport",
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
    title: "Professional Drivers",
    description:
      "Courteous, professionally presented drivers for airport transfers, city rides and long journeys.",
    icon: UserRound,
  },
  {
    title: "Planned Around Your Schedule",
    description:
      "Share your flight, hotel and timings and we plan the pickup around them, not the other way round.",
    icon: Clock,
  },
  {
    title: "Clear Pricing",
    description:
      "Ask for a quote by call or WhatsApp and confirm the price and vehicle before you travel.",
    icon: Gauge,
  },
  {
    title: "Comfortable Vehicles",
    description:
      "Cars, SUVs and vans to suit individuals, families and groups, with room for luggage.",
    icon: Car,
  },
  {
    title: "Makkah, Madinah, Jeddah & Taif",
    description:
      "We focus on the Western Region, from airport transfers to Ziyarat and journeys between the Holy Cities.",
    icon: Landmark,
  },
  {
    title: "Always Available",
    description: "Call or message us at any time. Our booking line is open 24 hours a day.",
    icon: HeartHandshake,
  },
];
