import { airportExtras } from "@/lib/content/extra-places";
import { airportTopups } from "@/lib/content/extra-topups";
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

const baseAirportPages: AirportPage[] = [
  {
    slug: "jeddah-airport",
    name: "King Abdulaziz International Airport",
    code: "JED",
    city: "Jeddah",
    locationSlug: "jeddah",
    metaTitle: "Jeddah Airport Taxi & Transfers (JED)",
    metaDescription:
      "Arrange a private pickup or drop-off at Jeddah Airport (JED) for Makkah, Madinah, Jeddah or Taif. Send your flight number and we plan around your arrival.",
    h1: "Jeddah Airport Taxi & Private Transfers (JED)",
    heroDescription:
      "Private pickups and drop-offs at King Abdulaziz International Airport, with onward travel to Makkah, Madinah, Jeddah and Taif.",
    intro:
      "King Abdulaziz International Airport (JED) is the main entry point to the Western Region, and for Makkah it is the only one that matters: Makkah has no commercial airport. Pilgrims, tourists and Jeddah residents all use it, and the first decision after landing is where the road goes next: Makkah, Madinah, Jeddah itself or Taif. This page explains how pickups and drop-offs work and what to tell us.",
    facts: [
      { label: "Airport code", value: "JED" },
      { label: "Jeddah city", value: "Roughly 30 to 40 km from the airport" },
      { label: "Makkah", value: "Roughly 100 km, usually 1 to 1.5 hours by road" },
      { label: "Madinah", value: "Roughly 430 km, about 4 to 5 hours by road" },
      { label: "Booking", value: "Available 24 hours a day" },
    ],
    sections: [
      {
        heading: "Arrival pickups",
        paragraphs: [
          "Send us your flight number, the date, the number of passengers and bags, and where you are going. We use the flight number to see your scheduled arrival, so the driver is arranged around the flight rather than a fixed time. If it is delayed or early, message us and we will adjust.",
          "You do not need to know your terminal in advance. The airport has more than one terminal, and your airline decides which you use. Pilgrim flights may use a different terminal from other flights, so check with your airline if you want to know where you will arrive.",
        ],
        subsections: [
          {
            heading: "How long before you are out",
            paragraphs: [
              "Immigration and baggage collection can take from under an hour to several hours depending on how many flights land together. That is why the pickup follows your actual arrival and not the schedule. Message us when you have landed and when your bags are on the belt.",
            ],
          },
          {
            heading: "Night and early-morning landings",
            paragraphs: [
              "Many flights land through the night. Our booking line is open at all hours, so a pickup at any time is possible. Give us the flight number and keep your phone on after you land.",
            ],
          },
        ],
        cta: true,
      },
      {
        heading: "Where passengers go from Jeddah Airport",
        paragraphs: [],
        subsections: [
          {
            heading: "To Makkah",
            paragraphs: [
              "Most Umrah pilgrims go straight to Makkah, about 100 km away. It usually takes one to one and a half hours, longer on Fridays and in the Umrah and Hajj seasons. See [Jeddah Airport to Makkah](/routes/jeddah-airport-to-makkah) for the hotel drop-off and what to expect near the Haram.",
            ],
          },
          {
            heading: "To Madinah",
            paragraphs: [
              "Madinah is about 430 km and four to five hours away. After a flight it is a hard drive, so plan the stops and think about whether to rest first. See [Jeddah Airport to Madinah](/routes/jeddah-airport-to-madinah). If you are going to Madinah first, remember the airport there as an alternative: [Madinah Airport](/airports/madinah-airport).",
            ],
          },
          {
            heading: "To Jeddah hotels and addresses",
            paragraphs: [
              "The airport is on the northern side of the city, so a hotel on the Corniche or in Al-Balad is a drive across Jeddah. Give us the hotel or address. See [Jeddah taxi service](/locations/jeddah) for city travel and business travel in Jeddah.",
            ],
          },
          {
            heading: "To Taif",
            paragraphs: [
              "Visitors going up to the mountains can go directly from the airport. The journey is about 170 km. See [Jeddah to Taif](/routes/jeddah-to-taif).",
            ],
          },
        ],
      },
      {
        heading: "Departures to Jeddah Airport",
        paragraphs: [
          "For a flight out, tell us the flight number, the departure time and where you are staying. We work back from your airline's check-in rules and add the driving time. From Makkah allow for the one to one and a half hour drive and the traffic near your hotel: see [Makkah to Jeddah Airport](/routes/makkah-to-jeddah-airport). From Madinah the drive is four to four and a half hours: see [Madinah to Jeddah](/routes/madinah-to-jeddah).",
        ],
      },
      {
        heading: "Luggage and group size",
        paragraphs: [
          "A Luxury Van takes eight passengers and six bags and a Premium SUV five passengers and four bags. Pilgrims often have more luggage on the way home, with gifts and Zamzam water, so count the bags for the return too. For groups bigger than a van, we can plan more than one vehicle. See [the fleet](/fleet).",
        ],
      },
      {
        heading: "Train or car from the airport",
        paragraphs: [
          "The Haramain high-speed railway has a station at the airport, with services to Makkah and Madinah. A private car suits families, older passengers and anyone with a lot of luggage who would rather not change at a station. Both are legitimate choices.",
        ],
      },
      {
        heading: "What to send when you book",
        paragraphs: ["The more you send before you land, the fewer messages are needed later."],
        bullets: [
          "Flight number, date and arrival time",
          "Number of passengers and pieces of luggage",
          "The hotel name or address",
          "Whether you need a child seat or a larger vehicle",
          "Whether you will be in ihram or stopping on the way",
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
        question: "Which terminal will I arrive at?",
        answer:
          "That depends on your airline. You do not need to tell us. The flight number is enough for us to plan your pickup.",
      },
      {
        question: "Is there an airport in Makkah?",
        answer:
          "No. Makkah has no commercial airport. Most visitors fly into Jeddah and travel on by road, about 100 km.",
      },
      {
        question: "What if my flight is delayed or arrives early?",
        answer:
          "Message us and we will adjust the pickup. The pickup follows your actual arrival.",
      },
      {
        question: "Can you collect a large group?",
        answer:
          "Yes. A Luxury Van takes eight passengers and six bags. For bigger groups we plan more vehicles with coordinated pickups.",
      },
      {
        question: "Do you also take people to the airport?",
        answer:
          "Yes. See the departures section above and tell us your flight time, the hotel and the number of bags.",
      },
      {
        question: "How is the price decided?",
        answer:
          "It depends on where you are going, the vehicle and the number of passengers. We confirm the price before you travel.",
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
      "Private transfers from Madinah Airport (MED) to hotels near the Prophet's Mosque, or on to Makkah with a miqat stop. Ziyarat can be added on arrival day.",
    h1: "Madinah Airport Taxi & Private Transfers (MED)",
    heroDescription:
      "Private transfers from Prince Mohammad bin Abdulaziz International Airport to your Madinah hotel, and onward to Makkah or Jeddah.",
    intro:
      "Prince Mohammad bin Abdulaziz International Airport (MED) is for pilgrims and visitors who start their trip in Madinah. The airport is close to the city and most of the journey is the last stretch to a hotel in the central area, where the roads around the Prophet's Mosque are restricted. This page covers that arrival and the journeys that follow from it.",
    facts: [
      { label: "Airport code", value: "MED" },
      { label: "Central Madinah", value: "Roughly 15 to 20 km, about 20 to 30 minutes" },
      { label: "Makkah", value: "Roughly 450 km, about 4.5 to 5 hours by road" },
      { label: "Booking", value: "Available 24 hours a day" },
    ],
    sections: [
      {
        heading: "From the airport to your hotel",
        paragraphs: [
          "The drive to central Madinah is roughly 15 to 20 km and takes 20 to 30 minutes outside peak times. Most pilgrims stay in hotels around Al-Masjid an-Nabawi, where cars cannot always reach the door and the last part may be a short walk. Send us the hotel name before you land and we will confirm the drop-off point.",
          "If someone in your group finds walking hard, say so when you book, and we will look for the closest practical stop.",
        ],
        subsections: [
          {
            heading: "Prayer times and arrivals",
            paragraphs: [
              "The streets near the mosque are at their busiest around the congregational prayers, and most of all for the Friday prayer. If you have a choice, avoid those times for check-in.",
            ],
          },
        ],
        cta: true,
      },
      {
        heading: "Adding Ziyarat on the day you arrive",
        paragraphs: [
          "Some visitors go to the places of Madinah before checking in, others the next morning. Quba Mosque, Masjid al-Qiblatain and Mount Uhud are the ones people ask for most. The driver can wait while you visit. See [Ziyarat tours](/services/ziyarat-tours) for what each place is, and tell us which you want.",
        ],
      },
      {
        heading: "Going on to Makkah",
        paragraphs: [
          "Makkah is about 450 km from Madinah, four and a half to five hours without stops. Pilgrims going for Umrah commonly enter ihram at Dhul Hulayfah (Abyar Ali) on the way out of Madinah, and we plan a stop there if you ask. You can go straight from the airport, see [Madinah Airport to Makkah](/routes/madinah-airport-to-makkah), or visit Madinah first and travel with [Madinah to Makkah](/routes/madinah-to-makkah).",
        ],
      },
      {
        heading: "Going to Jeddah",
        paragraphs: [
          "If your onward flight is from [Jeddah Airport](/airports/jeddah-airport), the drive is about 420 km and four to four and a half hours. See [Madinah to Jeddah](/routes/madinah-to-jeddah) for how to time it around your flight.",
        ],
      },
      {
        heading: "Departures from Madinah",
        paragraphs: [
          "For a flight from MED, tell us the flight number, the time and the hotel. The airport is close to the city, so the time you leave depends more on your airline's check-in rules and the crowds near the mosque than on the drive.",
        ],
      },
      {
        heading: "What to send when you book",
        paragraphs: ["Please include:"],
        bullets: [
          "Flight number, date and arrival time",
          "Number of passengers and pieces of luggage",
          "Hotel name and area in Madinah",
          "Whether you are continuing to Makkah or adding Ziyarat",
          "Any mobility needs or a child seat",
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
          "Roughly 15 to 20 km, usually 20 to 30 minutes. Access around the mosque is restricted, so the final drop-off depends on your hotel.",
      },
      {
        question: "Can we go to Makkah straight from the airport?",
        answer:
          "Yes. It is about 450 km and four and a half to five hours without stops. Tell us if you want a miqat stop.",
      },
      {
        question: "Can we visit Quba or Uhud before checking in?",
        answer:
          "Yes. Tell us which places and we will plan the order. The driver waits while you visit.",
      },
      {
        question: "Does it matter which prayer time we arrive at?",
        answer:
          "The streets near the mosque are busy around the congregational prayers, most of all the Friday prayer. We can suggest a check-in time that avoids them.",
      },
      {
        question: "What if my flight is delayed?",
        answer:
          "Message us. We take bookings all day and night and will adjust the pickup.",
      },
      {
        question: "How is the price decided?",
        answer:
          "It depends on where you are going, the vehicle and the number of passengers. We confirm the price before you travel.",
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
      "Private pickups and drop-offs at Taif Airport (TIF) for Taif hotels and resorts, and the mountain road down to Makkah or Jeddah. Send your flight number.",
    h1: "Taif Airport Taxi & Private Transfers (TIF)",
    heroDescription:
      "Private pickups and drop-offs at Taif International Airport, with onward travel to Makkah and Jeddah.",
    intro:
      "Taif International Airport (TIF) serves the highland city of Taif, up in the Sarawat mountains east of Makkah. Visitors using it are usually going to Taif itself, for the cool weather, or going down to Makkah. It is a smaller airport than Jeddah, so it is worth checking that your route has a flight here. This page covers pickups, drop-offs and what the mountain roads mean for planning.",
    facts: [
      { label: "Airport code", value: "TIF" },
      { label: "Makkah", value: "Roughly 100 km, about 1.5 to 2 hours depending on route and traffic" },
      { label: "Jeddah", value: "Roughly 170 km, about 2 to 2.5 hours by road" },
      { label: "Booking", value: "Available 24 hours a day" },
    ],
    sections: [
      {
        heading: "Arriving in Taif",
        paragraphs: [
          "Taif is much cooler than Makkah or Jeddah, especially in summer, which is why many Gulf and Saudi visitors come. Hotels and resorts can be some distance from the main roads, so give us the hotel name and, if you have it, a location pin. The pickup is arranged around your flight number.",
          "In summer and on school holidays the city and the roads up to it are busy. Book early for those dates.",
        ],
        subsections: [
          {
            heading: "What to see near Taif",
            paragraphs: [
              "If you want a driver for a day, the places people ask for most are Al Hada and its views, Al Shafa, Shubra Palace and the rose farms in spring. See [Taif taxi service](/locations/taif) for getting around the city.",
            ],
          },
        ],
        cta: true,
      },
      {
        heading: "Down to Makkah",
        paragraphs: [
          "The road to Makkah drops from the highlands through steep, winding sections. It is about 100 km and takes one and a half to two hours. If you are going for Umrah, travellers on this road commonly stop at Qarn al-Manazil (As-Sayl al-Kabir) to enter ihram, and we can plan the stop. See [Taif Airport to Makkah](/routes/taif-airport-to-makkah) for the whole journey.",
        ],
      },
      {
        heading: "Down to Jeddah",
        paragraphs: [
          "Travellers connecting to flights or going to the coast can go to Jeddah, about 170 km and two to two and a half hours away. Allow a generous buffer if you have a flight. See [Taif to Jeddah](/routes/taif-to-jeddah) and the [Jeddah Airport](/airports/jeddah-airport) page.",
        ],
      },
      {
        heading: "Departures from Taif",
        paragraphs: [
          "Give us the flight number, the time and your hotel. Allow for your airline's check-in rules and for the road from your hotel to the airport, which may include mountain driving.",
        ],
      },
      {
        heading: "What to send when you book",
        paragraphs: ["To arrange your transfer, please share:"],
        bullets: [
          "Flight number, date and arrival time",
          "Number of passengers and pieces of luggage",
          "Hotel, resort or address in Taif, or your onward destination",
          "Whether you need a stop at the miqat on the way to Makkah",
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
        answer: "Taif International Airport (TIF).",
      },
      {
        question: "Is the road to Makkah steep?",
        answer:
          "It descends through mountains with winding sections. A calm driver and a break help. Tell us if anyone gets car sick.",
      },
      {
        question: "Can we stop at the miqat on the way to Makkah?",
        answer:
          "Yes. Travellers on the Taif road commonly stop at Qarn al-Manazil (As-Sayl al-Kabir). Tell us when you book and we will plan it.",
      },
      {
        question: "Do you serve Taif resorts?",
        answer:
          "Yes. Give us the resort name and a location pin if you have one.",
      },
      {
        question: "Can you take us to Jeddah for a connecting flight?",
        answer:
          "Yes. It is about two to two and a half hours. Tell us your flight and we will help you choose a pickup time with a buffer.",
      },
      {
        question: "How is the price decided?",
        answer:
          "It depends on the destination, the vehicle and the number of passengers. We confirm the price before you travel.",
      },
    ],
  },
];

export const airportPages: AirportPage[] = baseAirportPages.map((page) => ({
  ...page,
  sections: [...page.sections, ...(airportExtras[page.slug] ?? []), ...(airportTopups[page.slug] ?? [])],
}));

export function getAirportPage(slug: string) {
  return airportPages.find((airport) => airport.slug === slug);
}
