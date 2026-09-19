import type { ContentSection, Fact, Faq } from "@/lib/content/types";

export const umrahPage = {
  metaTitle: "Umrah Transportation in Makkah & Madinah",
  metaDescription:
    "Private Umrah transportation in Jeddah, Makkah, Madinah and Taif: airport and hotel transfers, Makkah to Madinah travel and Ziyarat. Book 24/7.",
  h1: "Umrah Transportation in Makkah, Madinah, Jeddah & Taif",
  heroDescription:
    "Private transport for every stage of your Umrah trip: airport, hotel, Makkah, Madinah and Ziyarat.",
  intro:
    "An Umrah trip involves several journeys: from the airport to your hotel, between Makkah and Madinah, to places of Ziyarat and back to the airport at the end. Al Safa Taxi arranges private transport for each stage, for individuals, families and groups.",
  facts: [
    { label: "Airports", value: "Jeddah (JED) and Madinah (MED)" },
    { label: "Cities", value: "Jeddah, Makkah, Madinah and Taif" },
    { label: "Booking", value: "Available 24 hours a day" },
  ] as Fact[],
  sections: [
    {
      heading: "A typical Umrah trip, stage by stage",
      paragraphs: [
        "You can book every stage together, or only the ones you need. A common itinerary looks like this:",
      ],
      bullets: [
        "Arrival: an airport transfer from Jeddah (JED) or Madinah (MED) to your hotel",
        "In Makkah: hotel transfers and trips to and from the Haram area",
        "Between the Holy Cities: a private car from Makkah to Madinah, or the other way round",
        "Ziyarat: private trips to places of Ziyarat in Makkah and Madinah",
        "Departure: hotel to the airport, with time built in for your flight",
      ],
    },
    {
      heading: "Airport transfers for Umrah pilgrims",
      paragraphs: [
        "Most pilgrims heading to Makkah arrive at King Abdulaziz International Airport in Jeddah and continue by road, roughly 100 km and usually one to one and a half hours. Those beginning in Madinah arrive at Prince Mohammad bin Abdulaziz International Airport. Give us your flight number, passenger count and hotel name when you book.",
      ],
    },
    {
      heading: "Travelling between Makkah and Madinah",
      paragraphs: [
        "The road between the two cities is roughly 450 km and takes about four and a half to five hours. A private car lets your group travel together with luggage, choose its own departure time and stop for prayer and rest.",
        "Pilgrims often need to stop at a miqat on the way. From Madinah that is commonly Dhul Hulayfah (Abyar Ali), and on the Taif road it is Qarn al-Manazil. Tell us in advance where you need to stop and we will build it into the plan. We arrange the transport only; for questions about the rites themselves, please follow the guidance of your group leader or a qualified scholar.",
      ],
    },
    {
      heading: "Family and group transportation",
      paragraphs: [
        "Families and groups travel best in one vehicle. Tell us how many passengers and how many bags you have and we will suggest a car, SUV or van. For larger groups we can plan several vehicles with coordinated pickup times.",
      ],
    },
    {
      heading: "Planning tips",
      paragraphs: ["A few details help us plan your transport well:"],
      bullets: [
        "Book airport transfers early during the Umrah and Hajj seasons",
        "Share your flight number and hotel names",
        "Allow extra time near the Haram, where roads and vehicle access are restricted",
        "Tell us about any mobility needs or a child seat when you book",
      ],
    },
  ] as ContentSection[],
  faqs: [
    {
      question: "Do you provide transportation for Umrah?",
      answer:
        "Yes. We arrange airport transfers, hotel transfers, travel between Makkah and Madinah and Ziyarat trips for individuals, families and groups.",
    },
    {
      question: "How do I get from Jeddah Airport to Makkah for Umrah?",
      answer:
        "Book a private transfer with your flight number and hotel name. The journey is roughly 100 km and usually takes one to one and a half hours.",
    },
    {
      question: "Can you arrange transport between Makkah and Madinah?",
      answer:
        "Yes. The road journey is roughly 450 km and takes about four and a half to five hours. We can plan stops for prayer and rest.",
    },
    {
      question: "Can you plan a stop at the miqat?",
      answer:
        "Yes. Tell us where you need to stop, for example Dhul Hulayfah (Abyar Ali) on the Madinah to Makkah road, and we will include it in the plan.",
    },
    {
      question: "Can I add Ziyarat to my Umrah trip?",
      answer:
        "Yes. We arrange private Ziyarat trips in Makkah and Madinah. See our Ziyarat tours page for the places commonly visited.",
    },
    {
      question: "Do you handle group bookings?",
      answer:
        "Yes. Tell us the number of passengers, luggage, dates and hotels, and we will plan the vehicles and pickup times with you.",
    },
  ] as Faq[],
  locationSlugs: ["makkah", "madinah", "jeddah"],
  airportSlugs: ["jeddah-airport", "madinah-airport"],
  routeSlugs: [
    "jeddah-airport-to-makkah",
    "makkah-to-madinah",
    "madinah-to-makkah",
    "makkah-to-jeddah-airport",
  ],
  serviceSlugs: ["airport-transfers", "ziyarat-tours", "hotel-transfers", "intercity-transfers"],
};
