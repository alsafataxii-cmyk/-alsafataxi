import type { ContentSection, Fact, Faq } from "@/lib/content/types";

export type LocationPage = {
  slug: string;
  name: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroDescription: string;
  intro: string;
  facts: Fact[];
  sections: ContentSection[];
  airportSlug?: string;
  routeSlugs: string[];
  faqs: Faq[];
};

const quoteAnswer =
  "Fares depend on the route, the vehicle and the number of passengers. Send your pickup, drop-off, date and passenger count through our booking page or on WhatsApp and we will confirm the price and vehicle before you travel.";

export const locationPages: LocationPage[] = [
  {
    slug: "makkah",
    name: "Makkah",
    tagline: "Holy City",
    metaTitle: "Makkah Taxi Service | Private Taxi & Transfers",
    metaDescription:
      "Book a private Makkah taxi for airport transfers, hotel pickups, Ziyarat tours and intercity travel. 24/7 service with professional drivers.",
    h1: "Makkah Taxi Service: Private Taxi, Umrah & Ziyarat Transfers",
    heroDescription:
      "Private taxis in Makkah for hotel transfers, Umrah journeys, Ziyarat visits and travel to Jeddah, Madinah and Taif.",
    intro:
      "Getting around Makkah is unlike any other city. Roads near the Masjid al-Haram are congested at peak prayer times and during the Umrah and Hajj seasons, and hotels can sit some distance from the nearest place a vehicle is allowed to stop. Al Safa Taxi provides private taxi service in Makkah for pilgrims, families and visitors who want a reliable driver at an agreed time.",
    facts: [
      { label: "Nearest airport", value: "King Abdulaziz International (JED), Jeddah" },
      { label: "Jeddah Airport", value: "Roughly 100 km, usually 1 to 1.5 hours" },
      { label: "Madinah", value: "Roughly 450 km, about 4.5 to 5 hours" },
      { label: "Taif", value: "Roughly 90 km, about 1.5 hours" },
      { label: "Booking", value: "Available 24 hours a day" },
    ],
    sections: [
      {
        heading: "Taxi in Makkah for hotels and the Haram",
        paragraphs: [
          "Many Makkah hotels are within walking distance of the Masjid al-Haram, but vehicle access to the central area is restricted and can change with crowd levels. Tell us which hotel you are staying at and we will plan pickups and drop-offs around the closest practical point.",
          "For families with young children or older passengers, planning departures around prayer times can make a noticeable difference to how comfortable the journey is.",
        ],
      },
      {
        heading: "Umrah transportation in Makkah",
        paragraphs: [
          "Pilgrims often need transport beyond the Haram itself: to and from the hotel, to Masjid Aisha (Tan'im), or between Makkah and other cities. We arrange private cars and larger vehicles for individuals, families and groups. See our Umrah transportation page for how a complete trip can be planned.",
        ],
      },
      {
        heading: "Makkah Ziyarat",
        paragraphs: [
          "Makkah Ziyarat usually covers historical and religious places such as Jabal al-Noor, the mountain of the Cave of Hira, Jabal Thawr, Mina, Arafat, Muzdalifah and Jannat al-Mu'alla. We arrange private Ziyarat trips by car, timed around your schedule and the prayer times.",
        ],
      },
      {
        heading: "Travelling from Makkah to other cities",
        paragraphs: [
          "Makkah has no commercial airport, so most visitors fly in and out of Jeddah. We run transfers between Makkah and Jeddah Airport in both directions, as well as private journeys to Madinah and Taif.",
        ],
      },
    ],
    airportSlug: "jeddah-airport",
    routeSlugs: [
      "jeddah-airport-to-makkah",
      "makkah-to-jeddah-airport",
      "makkah-to-madinah",
      "makkah-to-jeddah",
      "makkah-to-taif",
    ],
    faqs: [
      {
        question: "Can I book a private taxi in Makkah?",
        answer:
          "Yes. Book through our booking page, on WhatsApp or by phone. Tell us your pickup point, destination, date, time and number of passengers, and we will confirm your vehicle.",
      },
      {
        question: "Is there an airport in Makkah?",
        answer:
          "No. Makkah does not have a commercial airport. The nearest is King Abdulaziz International Airport in Jeddah, roughly 100 km away, and we run transfers between the two.",
      },
      {
        question: "Do you provide transportation for Umrah?",
        answer:
          "Yes. We arrange airport transfers, hotel transfers, travel between Makkah and Madinah, and Ziyarat trips for individuals, families and groups. Tell us about any stops you need when you book.",
      },
      {
        question: "Can I book a taxi from Makkah to Madinah?",
        answer:
          "Yes. The road journey is roughly 450 km and takes about four and a half to five hours. A private car lets your group travel together with luggage and take comfort stops.",
      },
      {
        question: "Do you provide child seats?",
        answer:
          "Tell us if you need a child seat when you book so we can confirm what is available for your vehicle.",
      },
      {
        question: "How much does a taxi cost in Makkah?",
        answer: quoteAnswer,
      },
    ],
  },
  {
    slug: "madinah",
    name: "Madinah",
    tagline: "Holy City",
    metaTitle: "Madinah Taxi Service | Airport & Private Transfers",
    metaDescription:
      "Private taxi in Madinah for airport transfers, hotel pickups and Ziyarat tours to Quba, Qiblatain and Uhud. Book 24/7 with Al Safa Taxi.",
    h1: "Madinah Taxi Service: Private Taxi, Airport Transfers & Ziyarat",
    heroDescription:
      "Private taxis in Madinah for airport transfers, hotel pickups, Ziyarat visits and onward travel to Makkah and Jeddah.",
    intro:
      "Madinah is a calm city built around Al-Masjid an-Nabawi, and most visitors stay close to it. A private taxi makes the practical parts of the visit simpler: getting from the airport to your hotel, visiting historical places at your own pace, and continuing to Makkah when it is time.",
    facts: [
      { label: "Airport", value: "Prince Mohammad bin Abdulaziz International (MED)" },
      { label: "Central Madinah", value: "Roughly 15 to 20 km from the airport" },
      { label: "Makkah", value: "Roughly 450 km, about 4.5 to 5 hours" },
      { label: "Jeddah", value: "Roughly 420 km, about 4 to 4.5 hours" },
      { label: "Booking", value: "Available 24 hours a day" },
    ],
    sections: [
      {
        heading: "Madinah airport and hotel transfers",
        paragraphs: [
          "We arrange private transfers between Madinah Airport and hotels across the city. The central area around the Prophet's Mosque has limited vehicle access, so your hotel's location decides where the car can stop and how far you walk. Give us the hotel name when you book and we will plan around it.",
        ],
      },
      {
        heading: "Madinah Ziyarat",
        paragraphs: [
          "Madinah's historical places are spread across the city, which makes a private car the easiest way to visit several in one outing. Popular stops include:",
        ],
        bullets: [
          "Quba Mosque, the first mosque built in Islam",
          "Masjid al-Qiblatain, the mosque of the two qiblas",
          "Mount Uhud and the Uhud martyrs' cemetery",
          "The Seven Mosques area (Al-Khandaq) and Masjid al-Ghamama",
          "Date markets and farms, for those who want to take dates home",
        ],
      },
      {
        heading: "Travelling onward from Madinah",
        paragraphs: [
          "Journeys from Madinah to Makkah are roughly 450 km and take about four and a half to five hours. If you are entering ihram for Umrah, let us know so a stop at the miqat, such as Dhul Hulayfah (Abyar Ali), can be planned. We also run private journeys from Madinah to Jeddah and Jeddah Airport.",
        ],
      },
    ],
    airportSlug: "madinah-airport",
    routeSlugs: ["madinah-to-makkah", "madinah-to-jeddah", "jeddah-airport-to-madinah"],
    faqs: [
      {
        question: "How much does a taxi cost in Madinah?",
        answer: quoteAnswer,
      },
      {
        question: "Do you offer Madinah Ziyarat tours?",
        answer:
          "Yes. We arrange private Ziyarat trips to places such as Quba Mosque, Masjid al-Qiblatain and Mount Uhud, timed around your schedule and the prayer times.",
      },
      {
        question: "Can I book a taxi from Madinah to Makkah?",
        answer:
          "Yes. The journey is roughly 450 km and takes about four and a half to five hours. Tell us if you need to stop at the miqat on the way.",
      },
      {
        question: "Do you provide pickup from Madinah Airport?",
        answer:
          "Yes. Share your flight number, arrival time, passenger count and hotel name and we will arrange the transfer. Bookings are taken 24 hours a day.",
      },
      {
        question: "Can I travel from Madinah to Jeddah?",
        answer:
          "Yes. The road journey is roughly 420 km and takes about four to four and a half hours. We can drop you at Jeddah city or King Abdulaziz International Airport.",
      },
    ],
  },
  {
    slug: "jeddah",
    name: "Jeddah",
    tagline: "Red Sea Gateway",
    metaTitle: "Jeddah Taxi Service | Airport & Private Transfers",
    metaDescription:
      "Private taxi in Jeddah for airport transfers, city rides and journeys to Makkah, Madinah and Taif. Book 24/7 with Al Safa Taxi.",
    h1: "Jeddah Taxi Service: Private Taxi & Airport Transfers",
    heroDescription:
      "Private taxis in Jeddah for airport transfers, city rides and longer journeys to Makkah, Madinah and Taif.",
    intro:
      "Jeddah is the Red Sea gateway to the Holy Cities, and for most visitors to Makkah it is the first stop. Al Safa Taxi provides private taxi service in Jeddah for airport transfers, city rides and longer journeys to Makkah, Madinah and Taif.",
    facts: [
      { label: "Airport", value: "King Abdulaziz International (JED)" },
      { label: "Makkah", value: "Roughly 80 km, about 1 hour" },
      { label: "Madinah", value: "Roughly 420 km, about 4 to 4.5 hours" },
      { label: "Taif", value: "Roughly 170 km, about 2 to 2.5 hours" },
      { label: "Booking", value: "Available 24 hours a day" },
    ],
    sections: [
      {
        heading: "Jeddah airport taxi",
        paragraphs: [
          "King Abdulaziz International Airport is where most Makkah-bound travellers land. We arrange private pickups and drop-offs between the airport and hotels in Jeddah, or straight through to Makkah, Madinah and Taif, so there is no need to negotiate a ride after a long flight.",
        ],
      },
      {
        heading: "Getting around Jeddah",
        paragraphs: [
          "Jeddah is a spread-out coastal city, and distances between neighbourhoods add up quickly. A private taxi is a comfortable way to reach Al-Balad, the historic district, the Corniche waterfront, King Fahd's Fountain, hotels, malls and business meetings, with a driver who waits or returns at a time you agree in advance.",
        ],
      },
      {
        heading: "Jeddah to the Holy Cities and Taif",
        paragraphs: [
          "Makkah is roughly 80 km from Jeddah and about an hour by road in normal traffic. Madinah is roughly 420 km away and Taif roughly 170 km. All three are available as private journeys with a fare confirmed before you travel.",
        ],
      },
    ],
    airportSlug: "jeddah-airport",
    routeSlugs: [
      "jeddah-airport-to-makkah",
      "jeddah-to-makkah",
      "jeddah-to-madinah",
      "jeddah-to-taif",
    ],
    faqs: [
      {
        question: "Can I book a taxi from Jeddah Airport?",
        answer:
          "Yes. Share your flight number, arrival time, passenger count and destination, and we will arrange the pickup. Bookings are taken 24 hours a day.",
      },
      {
        question: "How far is Jeddah from Makkah?",
        answer:
          "Roughly 80 km, which is about an hour by road in normal traffic. It can take longer on Fridays and during the Umrah and Hajj seasons.",
      },
      {
        question: "Do you offer city rides in Jeddah?",
        answer:
          "Yes. We take pre-booked city rides as well as longer journeys. Tell us your pickup point, destination and time when you book.",
      },
      {
        question: "Can I travel from Jeddah to Madinah by private taxi?",
        answer:
          "Yes. The journey is roughly 420 km and takes about four to four and a half hours. A private car suits families and groups with luggage.",
      },
      {
        question: "How much does a Jeddah taxi cost?",
        answer: quoteAnswer,
      },
    ],
  },
  {
    slug: "taif",
    name: "Taif",
    tagline: "Highland City",
    metaTitle: "Taif Taxi Service | Airport & Private Transfers",
    metaDescription:
      "Private taxi in Taif for airport transfers, hotel pickups and journeys to Makkah and Jeddah. Book 24/7 with Al Safa Taxi.",
    h1: "Taif Taxi Service: Private Taxi & Airport Transfers",
    heroDescription:
      "Private taxis in Taif for airport transfers, sightseeing and road journeys to Makkah and Jeddah.",
    intro:
      "Taif, in the Sarawat mountains, is known for its cooler climate, rose farms and mountain scenery. A private taxi is a practical way to get around the city and to make the road journey to Makkah or Jeddah.",
    facts: [
      { label: "Airport", value: "Taif International Airport (TIF)" },
      { label: "Makkah", value: "Roughly 90 km, about 1.5 hours" },
      { label: "Jeddah", value: "Roughly 170 km, about 2 to 2.5 hours" },
      { label: "Booking", value: "Available 24 hours a day" },
    ],
    sections: [
      {
        heading: "Getting around Taif",
        paragraphs: [
          "Taif's hotels, resorts and viewpoints are spread across the city and the surrounding mountains, including the Al Hada and Al Shafa areas. We arrange private rides between the airport, your accommodation and the places you want to visit, with the return time agreed in advance.",
        ],
      },
      {
        heading: "Rose farms and mountain drives",
        paragraphs: [
          "Taif is famous for its roses, and visitors who come in the spring harvest season often want to visit the farms. A private car makes it easy to combine farms, viewpoints and markets in one outing without worrying about parking or directions.",
        ],
      },
      {
        heading: "Taif to Makkah and Jeddah",
        paragraphs: [
          "The road down to Makkah crosses mountain terrain with steep, winding sections, which is one reason many visitors prefer to be driven. Makkah is roughly 90 km from Taif and Jeddah roughly 170 km. If you are travelling to Makkah for Umrah, tell us when you book so a stop at the miqat on the Taif road can be planned.",
        ],
      },
    ],
    airportSlug: "taif-airport",
    routeSlugs: ["taif-to-makkah", "taif-to-jeddah", "makkah-to-taif", "jeddah-to-taif"],
    faqs: [
      {
        question: "How far is Taif from Makkah?",
        answer:
          "Roughly 90 km by road, which takes about one and a half hours depending on the route and traffic.",
      },
      {
        question: "Can I book a taxi from Taif to Makkah?",
        answer:
          "Yes. Tell us your pickup point, destination, date and passenger count, and we will confirm your vehicle. Let us know if you need a stop on the way.",
      },
      {
        question: "Do you provide transfers from Taif Airport?",
        answer:
          "Yes. Share your flight number and arrival time and we will arrange the pickup to your hotel or onward destination.",
      },
      {
        question: "Can I travel from Taif to Jeddah?",
        answer:
          "Yes. The journey is roughly 170 km and takes about two to two and a half hours. We can take you to Jeddah city or the airport.",
      },
      {
        question: "How much does a Taif taxi cost?",
        answer: quoteAnswer,
      },
    ],
  },
];

export function getLocationPage(slug: string) {
  return locationPages.find((location) => location.slug === slug);
}
