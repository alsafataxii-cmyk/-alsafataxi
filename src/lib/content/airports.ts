import type { ContentSection, Fact, Faq } from "@/lib/content/types";

export type AirportPage = {
  slug: string;
  name: string;
  code: string;
  city: string;
  locationSlug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroDescription: string;
  intro: string;
  facts: Fact[];
  sections: ContentSection[];
  routeSlugs: string[];
  faqs: Faq[];
};

const quoteAnswer =
  "Fares depend on the route, the vehicle and the number of passengers. Send your pickup, drop-off, date and passenger count through our booking page or on WhatsApp and we will confirm the price and vehicle before you travel.";

export const airportPages: AirportPage[] = [
  {
    slug: "jeddah-airport",
    name: "King Abdulaziz International Airport",
    code: "JED",
    city: "Jeddah",
    locationSlug: "jeddah",
    metaTitle: "Jeddah Airport Taxi & Transfers (JED)",
    metaDescription:
      "Private taxi and transfers from King Abdulaziz International Airport (JED) to Jeddah, Makkah, Madinah and Taif. Book pickup or drop-off 24/7 with Al Safa Taxi.",
    h1: "Jeddah Airport Taxi & Private Transfers (JED)",
    heroDescription:
      "Private pickups and drop-offs at King Abdulaziz International Airport, with onward travel to Makkah, Madinah, Jeddah and Taif.",
    intro:
      "King Abdulaziz International Airport (JED) is the main gateway for travellers heading to Makkah, as well as to Jeddah and Taif. Al Safa Taxi arranges private transfers from the airport, so the journey to your hotel or home starts as soon as you have collected your bags.",
    facts: [
      { label: "Airport code", value: "JED" },
      { label: "Jeddah city", value: "Roughly 30 to 40 km from the airport" },
      { label: "Makkah", value: "Roughly 100 km, usually 1 to 1.5 hours by road" },
      { label: "Madinah", value: "Roughly 430 km, about 4 to 5 hours by road" },
      { label: "Booking", value: "Available 24 hours a day" },
    ],
    sections: [
      {
        heading: "Jeddah Airport to Makkah",
        paragraphs: [
          "Makkah does not have a commercial airport, so most visitors to Makkah, including Umrah pilgrims, fly into Jeddah and continue by road. The drive is roughly 100 km and usually takes between one and one and a half hours, though it can take longer at busy times of day, on Fridays and during the Umrah and Hajj seasons.",
          "A private transfer takes you directly to your Makkah hotel without changing vehicles or carrying luggage between transport connections. If you are travelling for Umrah, mention it when you book so the journey can be planned around any stop you need to make on the way.",
        ],
      },
      {
        heading: "Jeddah Airport to Madinah",
        paragraphs: [
          "Madinah is roughly 430 km from Jeddah Airport and the road journey takes about four to five hours. Many families choose a private car for this leg because everyone travels together with their luggage, and comfort stops can be planned around the group.",
        ],
      },
      {
        heading: "Arrivals and departures",
        paragraphs: [
          "For arrivals, give us your flight number, arrival date and terminal. Jeddah's airport has more than one terminal and your airline determines which one you use, so if you are unsure, your flight number is enough for us to check.",
          "For departures, we schedule the pickup from your hotel so that you reach the airport with time to spare. Allow extra time when travelling from Makkah and during busy travel periods.",
        ],
        bullets: [
          "Flight number, arrival date and time",
          "Number of passengers and pieces of luggage",
          "Hotel name or address for the drop-off",
          "Any need for a child seat or a larger vehicle",
        ],
      },
    ],
    routeSlugs: [
      "jeddah-airport-to-makkah",
      "makkah-to-jeddah-airport",
      "jeddah-airport-to-madinah",
      "jeddah-to-makkah",
    ],
    faqs: [
      {
        question: "How far is Jeddah Airport from Makkah?",
        answer:
          "It is roughly 100 km, and the drive typically takes one to one and a half hours depending on traffic and where in Makkah your hotel is located.",
      },
      {
        question: "Can I book a taxi from Jeddah Airport to Makkah in advance?",
        answer:
          "Yes. Book through our booking page, on WhatsApp or by phone with your flight number, arrival time, number of passengers and hotel name. We take bookings 24 hours a day.",
      },
      {
        question: "Do you provide transfers from Jeddah Airport to Madinah?",
        answer:
          "Yes. The journey is roughly 430 km and takes about four to five hours by road. Tell us your group size and luggage so we can match the right vehicle.",
      },
      {
        question: "What if my flight lands late at night?",
        answer:
          "Our booking line is available around the clock, so night and early-morning arrivals can be arranged. Share your flight number and message us if your flight is delayed.",
      },
      {
        question: "How much does a Jeddah Airport transfer cost?",
        answer: quoteAnswer,
      },
    ],
  },
  {
    slug: "madinah-airport",
    name: "Prince Mohammad bin Abdulaziz International Airport",
    code: "MED",
    city: "Madinah",
    locationSlug: "madinah",
    metaTitle: "Madinah Airport Taxi & Transfers (MED)",
    metaDescription:
      "Private taxi from Prince Mohammad bin Abdulaziz International Airport (MED) to Madinah hotels and onward to Makkah and Jeddah. Book 24/7 with Al Safa Taxi.",
    h1: "Madinah Airport Taxi & Private Transfers (MED)",
    heroDescription:
      "Private transfers from Prince Mohammad bin Abdulaziz International Airport to your Madinah hotel, and onward to Makkah or Jeddah.",
    intro:
      "Prince Mohammad bin Abdulaziz International Airport (MED) is the gateway for pilgrims and visitors travelling to Madinah. Al Safa Taxi provides private airport transfers to hotels in Madinah, and onward journeys to Makkah, Jeddah and Taif.",
    facts: [
      { label: "Airport code", value: "MED" },
      { label: "Central Madinah", value: "Roughly 15 to 20 km, about 20 to 30 minutes" },
      { label: "Makkah", value: "Roughly 450 km, about 4.5 to 5 hours by road" },
      { label: "Booking", value: "Available 24 hours a day" },
    ],
    sections: [
      {
        heading: "Airport to your Madinah hotel",
        paragraphs: [
          "The airport is roughly 15 to 20 km from central Madinah, and the transfer usually takes 20 to 30 minutes outside peak times. Many hotels sit close to Al-Masjid an-Nabawi (the Prophet's Mosque), where vehicle access can be limited and the last part of the journey may be on foot from the nearest practical drop-off point.",
          "Share your hotel name when you book so that the drop-off can be planned in advance, and tell us if anyone in your group needs extra help with the walk.",
        ],
      },
      {
        heading: "Madinah to Makkah",
        paragraphs: [
          "Many pilgrims spend several days in Madinah before continuing to Makkah, or the other way round. The road journey is roughly 450 km and takes about four and a half to five hours. If you are entering ihram for Umrah, let us know in advance so a stop at the miqat, such as Dhul Hulayfah (Abyar Ali), can be built into the plan.",
        ],
      },
      {
        heading: "What to include when you book",
        paragraphs: [
          "The more we know before you land, the smoother the pickup. Please include:",
        ],
        bullets: [
          "Flight number, arrival date and time",
          "Number of passengers and pieces of luggage",
          "Hotel name and area in Madinah",
          "Whether you are continuing to Makkah, or want Ziyarat visits added",
        ],
      },
    ],
    routeSlugs: [
      "madinah-airport-to-makkah",
      "madinah-to-makkah",
      "madinah-to-jeddah",
      "jeddah-airport-to-madinah",
    ],
    faqs: [
      {
        question: "How far is Madinah Airport from the Prophet's Mosque?",
        answer:
          "Roughly 15 to 20 km, which is usually 20 to 30 minutes depending on traffic. Access around the mosque can be restricted, so the final drop-off point depends on your hotel's location.",
      },
      {
        question: "Can you take us from Madinah Airport straight to Makkah?",
        answer:
          "Yes. The road journey is roughly 450 km and takes about four and a half to five hours. Tell us if you need a stop on the way, for example at the miqat.",
      },
      {
        question: "Can I add Ziyarat to my airport transfer?",
        answer:
          "Yes. Madinah Ziyarat commonly includes places such as Quba Mosque, Masjid Qiblatain and Mount Uhud. Mention this when you book and we will plan the timing with you.",
      },
      {
        question: "Do you cover late-night arrivals at Madinah Airport?",
        answer:
          "Yes, our booking line is available 24 hours a day. Share your flight number and message us if your flight is delayed.",
      },
      {
        question: "How do I get a price for a Madinah airport transfer?",
        answer: quoteAnswer,
      },
    ],
  },
  {
    slug: "taif-airport",
    name: "Taif International Airport",
    code: "TIF",
    city: "Taif",
    locationSlug: "taif",
    metaTitle: "Taif Airport Taxi & Transfers (TIF)",
    metaDescription:
      "Private taxi from Taif International Airport (TIF) to Taif hotels and onward to Makkah and Jeddah. Book pickup or drop-off 24/7 with Al Safa Taxi.",
    h1: "Taif Airport Taxi & Private Transfers (TIF)",
    heroDescription:
      "Private pickups and drop-offs at Taif International Airport, with onward travel to Makkah and Jeddah.",
    intro:
      "Taif International Airport (TIF) serves the highland city of Taif, in the mountains east of Makkah. Al Safa Taxi arranges private transfers from the airport into Taif, and onward to Makkah and Jeddah.",
    facts: [
      { label: "Airport code", value: "TIF" },
      { label: "Makkah", value: "Roughly 90 km, about 1.5 hours depending on route and traffic" },
      { label: "Jeddah", value: "Roughly 2 to 2.5 hours by road" },
      { label: "Booking", value: "Available 24 hours a day" },
    ],
    sections: [
      {
        heading: "Transfers into Taif",
        paragraphs: [
          "Taif sits at a much higher elevation than Makkah or Jeddah, so the climate is noticeably cooler, especially in the summer months. That makes it a popular destination for residents of the coast and the Holy Cities looking for a break. We arrange airport pickups to Taif hotels, resorts and private addresses.",
        ],
      },
      {
        heading: "Taif to Makkah and Jeddah",
        paragraphs: [
          "The road between Taif and Makkah crosses the Sarawat mountains and includes steep, winding sections, so a calm, experienced driver matters, particularly for families and older passengers. If you are heading to Makkah for Umrah, ask us about a stop at the miqat on the Taif road (Qarn al-Manazil, also known as As-Sayl al-Kabir).",
          "Onward journeys to Jeddah are also available if you are connecting to another flight or continuing to the coast.",
        ],
      },
      {
        heading: "Booking checklist",
        paragraphs: ["To arrange your Taif airport transfer, please share:"],
        bullets: [
          "Flight number, arrival date and time",
          "Number of passengers and pieces of luggage",
          "Hotel or address in Taif, or your onward destination",
        ],
      },
    ],
    routeSlugs: [
      "taif-airport-to-makkah",
      "taif-to-makkah",
      "taif-to-jeddah",
      "makkah-to-taif",
    ],
    faqs: [
      {
        question: "Which airport serves Taif?",
        answer: "Taif is served by Taif International Airport (TIF).",
      },
      {
        question: "How far is Taif from Makkah?",
        answer:
          "Roughly 90 km by road, which is about one and a half hours depending on the route you take and the traffic.",
      },
      {
        question: "Can you take us from Taif Airport to Jeddah?",
        answer:
          "Yes. The journey by road usually takes around two to two and a half hours. Tell us if you are connecting to a flight so we can plan the timing.",
      },
      {
        question: "Do you offer airport drop-offs in Taif?",
        answer:
          "Yes. Book your pickup from your hotel or address, and we will schedule it to give you time to reach the airport comfortably. Bookings are taken 24 hours a day.",
      },
      {
        question: "How much does a Taif airport transfer cost?",
        answer: quoteAnswer,
      },
    ],
  },
];

export function getAirportPage(slug: string) {
  return airportPages.find((airport) => airport.slug === slug);
}
