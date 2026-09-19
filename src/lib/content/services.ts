import type { ContentSection, Fact, Faq } from "@/lib/content/types";

export type ServicePage = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroDescription: string;
  intro: string;
  facts: Fact[];
  sections: ContentSection[];
  locationSlugs: string[];
  airportSlugs: string[];
  routeSlugs: string[];
  faqs: Faq[];
};

const quoteAnswer =
  "Fares depend on the route, the vehicle and the number of passengers. Send your pickup, drop-off, date and passenger count through our booking page or on WhatsApp and we will confirm the price and vehicle before you travel.";

const allLocations = ["makkah", "madinah", "jeddah", "taif"];

export const servicePages: ServicePage[] = [
  {
    slug: "airport-transfers",
    metaTitle: "Airport Transfers in Jeddah, Madinah & Taif",
    metaDescription:
      "Private airport taxi and transfers at Jeddah, Madinah and Taif airports, with onward travel to Makkah and Madinah hotels. Book 24/7 with Al Safa Taxi.",
    h1: "Private Airport Transfers in Jeddah, Madinah & Taif",
    heroDescription:
      "Pickups and drop-offs at King Abdulaziz, Prince Mohammad bin Abdulaziz and Taif airports, with onward travel to Makkah and Madinah.",
    intro:
      "After a long flight, the last thing you want is to negotiate a ride. Al Safa Taxi arranges private airport pickups and drop-offs at King Abdulaziz International Airport (Jeddah), Prince Mohammad bin Abdulaziz International Airport (Madinah) and Taif International Airport, with onward travel to hotels in Makkah, Madinah, Jeddah and Taif.",
    facts: [
      { label: "Airports", value: "Jeddah (JED), Madinah (MED), Taif (TIF)" },
      { label: "Destinations", value: "Makkah, Madinah, Jeddah and Taif" },
      { label: "Booking", value: "Available 24 hours a day" },
    ],
    sections: [
      {
        heading: "Airport pickups",
        paragraphs: [
          "Book in advance with your flight number, arrival date and the name of your hotel or destination. We plan the pickup around your arrival time, so you are not looking for a ride after immigration and baggage claim. Tell us how many passengers and bags you have so that the right vehicle is sent.",
        ],
        bullets: [
          "Flight number and arrival time",
          "Passengers and pieces of luggage",
          "Hotel name or address",
          "Any need for a child seat or a larger vehicle",
        ],
      },
      {
        heading: "Airport drop-offs",
        paragraphs: [
          "For departures, we schedule your pickup from your hotel or home with enough time to reach the airport comfortably. Allow extra time for the drive from Makkah to Jeddah Airport, and during busy Umrah and Hajj periods.",
        ],
      },
      {
        heading: "Which airport serves which city",
        paragraphs: [
          "Makkah has no commercial airport, so travellers to Makkah, including Umrah pilgrims, normally fly into Jeddah and continue by road. Madinah is served by its own airport, and so is Taif. Jeddah city is served by King Abdulaziz International Airport.",
        ],
      },
    ],
    locationSlugs: allLocations,
    airportSlugs: ["jeddah-airport", "madinah-airport", "taif-airport"],
    routeSlugs: [
      "jeddah-airport-to-makkah",
      "makkah-to-jeddah-airport",
      "jeddah-airport-to-madinah",
    ],
    faqs: [
      {
        question: "Which airports do you serve?",
        answer:
          "King Abdulaziz International Airport in Jeddah, Prince Mohammad bin Abdulaziz International Airport in Madinah, and Taif International Airport.",
      },
      {
        question: "Is there an airport in Makkah?",
        answer:
          "No. Makkah has no commercial airport. Most visitors fly into Jeddah and continue to Makkah by road, roughly 100 km away.",
      },
      {
        question: "Can I book a transfer for a late-night or early-morning flight?",
        answer: "Yes. Our booking line is available 24 hours a day.",
      },
      {
        question: "What if my flight is delayed?",
        answer:
          "Share your flight number when you book and message us on WhatsApp or call if your arrival time changes, so we can adjust the pickup.",
      },
      {
        question: "How do I get a price for an airport transfer?",
        answer: quoteAnswer,
      },
    ],
  },
  {
    slug: "ziyarat-tours",
    metaTitle: "Ziyarat Tours in Makkah & Madinah",
    metaDescription:
      "Private Ziyarat tours by car in Makkah and Madinah, visiting Jabal al-Noor, Quba Mosque, Uhud and more. Book a Ziyarat taxi 24/7 with Al Safa Taxi.",
    h1: "Ziyarat Tours in Makkah & Madinah by Private Taxi",
    heroDescription:
      "Visit the historical and religious places of Makkah and Madinah in a private car, at your own pace.",
    intro:
      "Ziyarat means visiting the historical and religious places connected with Islamic history. In Makkah and Madinah those places are spread across the cities and their surroundings, so seeing several in one outing is far easier with a private car and a driver who can wait while you visit.",
    facts: [
      { label: "Cities", value: "Makkah and Madinah" },
      { label: "Format", value: "Private car, planned around your schedule" },
      { label: "Booking", value: "Available 24 hours a day" },
    ],
    sections: [
      {
        heading: "Makkah Ziyarat",
        paragraphs: [
          "Common Ziyarat places in and around Makkah include:",
        ],
        bullets: [
          "Jabal al-Noor, the mountain of the Cave of Hira",
          "Jabal Thawr and the Cave of Thawr",
          "Mina, Arafat (Jabal al-Rahmah) and Muzdalifah",
          "Jannat al-Mu'alla, the historic cemetery of Makkah",
        ],
      },
      {
        heading: "Madinah Ziyarat",
        paragraphs: ["Popular Ziyarat places in Madinah include:"],
        bullets: [
          "Quba Mosque, the first mosque built in Islam",
          "Masjid al-Qiblatain, the mosque of the two qiblas",
          "Mount Uhud and the Uhud martyrs' cemetery",
          "The Seven Mosques area (Al-Khandaq) and Masjid al-Ghamama",
        ],
      },
      {
        heading: "What each place is",
        paragraphs: [
          "Knowing a little about each place helps you decide how much time to give it. These are brief, general descriptions; your group leader or a guide can tell you more.",
        ],
        bullets: [
          "Jabal al-Noor: the mountain near Makkah that holds the Cave of Hira, where the first revelation came to the Prophet Muhammad (peace be upon him). Reaching the cave means a steep climb on steps, so allow time and energy.",
          "Jabal Thawr: the mountain south of Makkah with the cave where the Prophet and Abu Bakr sheltered at the start of the journey of Hijrah to Madinah.",
          "Mina, Arafat and Muzdalifah: the places where the rites of Hajj are performed. Arafat includes Jabal al-Rahmah, a hill on the plain. Many visitors see them outside the Hajj season.",
          "Jannat al-Mu'alla: the historic cemetery of Makkah, where Khadijah bint Khuwaylid, the Prophet's first wife, is buried.",
          "Quba Mosque: the first mosque built in Islam, on the edge of Madinah. Many visitors pray there.",
          "Masjid al-Qiblatain: the mosque where the direction of prayer is said to have changed from Jerusalem to the Kaaba, which is why it has two qiblas.",
          "Mount Uhud and the Uhud martyrs' cemetery: the site of the Battle of Uhud, where Hamza ibn Abd al-Muttalib and other companions are buried.",
          "The Seven Mosques area (Al-Khandaq): a group of small mosques near the site associated with the Battle of the Trench.",
        ],
      },
      {
        heading: "How a Ziyarat trip is planned",
        paragraphs: [
          "Tell us which places you want to visit and roughly how long you would like to spend at each. We plan the route and timing around prayer times, and the driver waits while you visit. Access to some places can change on the day, so the order of visits may be adjusted.",
          "Some places involve walking or climbing. Let us know if anyone in your group has limited mobility so we can plan realistically.",
        ],
      },
    ],
    locationSlugs: ["makkah", "madinah"],
    airportSlugs: ["jeddah-airport", "madinah-airport"],
    routeSlugs: ["makkah-to-madinah", "madinah-to-makkah"],
    faqs: [
      {
        question: "What is Ziyarat?",
        answer:
          "Ziyarat is the visiting of historical and religious places connected with Islamic history, commonly done alongside Umrah or a stay in Makkah and Madinah.",
      },
      {
        question: "Which places are covered in Makkah Ziyarat?",
        answer:
          "Commonly Jabal al-Noor, Jabal Thawr, Mina, Arafat, Muzdalifah and Jannat al-Mu'alla. Tell us which ones you want to visit and we will plan around them.",
      },
      {
        question: "Which places are covered in Madinah Ziyarat?",
        answer:
          "Commonly Quba Mosque, Masjid al-Qiblatain, Mount Uhud, the Seven Mosques area and Masjid al-Ghamama.",
      },
      {
        question: "Can I combine Ziyarat with an airport transfer?",
        answer:
          "Yes. Many visitors add Ziyarat to the day they arrive or leave. Mention it when you book and we will plan the timing.",
      },
      {
        question: "How do I get a price for a Ziyarat tour?",
        answer:
          "The price depends on the places you want to visit, the time involved and the vehicle. Send us your plans through the booking page or on WhatsApp and we will confirm a price before you travel.",
      },
    ],
  },
  {
    slug: "city-taxi",
    metaTitle: "City Taxi in Makkah, Madinah, Jeddah & Taif",
    metaDescription:
      "Pre-booked city taxi service in Makkah, Madinah, Jeddah and Taif for hotels, shopping, appointments and everyday trips. Book 24/7 with Al Safa Taxi.",
    h1: "City Taxi Service in Makkah, Madinah, Jeddah & Taif",
    heroDescription:
      "Pre-booked private taxis for everyday journeys within Makkah, Madinah, Jeddah and Taif.",
    intro:
      "For everyday journeys within a city, Al Safa Taxi offers pre-booked private taxis with a driver who arrives at an agreed time. It suits visitors who do not want to search for a ride and residents who want a dependable option.",
    facts: [
      { label: "Cities", value: "Makkah, Madinah, Jeddah and Taif" },
      { label: "Booking", value: "Available 24 hours a day" },
    ],
    sections: [
      {
        heading: "Rides within the city",
        paragraphs: [
          "City rides cover hotels, restaurants, shopping, appointments, family visits and anywhere else you need to go. Tell us your pickup point, destination and time, and we will confirm the vehicle.",
        ],
      },
      {
        heading: "Book ahead at busy times",
        paragraphs: [
          "Demand is highest around prayer times, on Fridays and during the Umrah and Hajj seasons, when it can be difficult to find a ride at short notice. Pre-booking gives you a fixed pickup time.",
        ],
      },
      {
        heading: "City by city",
        paragraphs: [
          "In Makkah, we plan pickups around vehicle access near the Haram, which can vary. In Madinah, we plan around the streets near the Prophet's Mosque. In Jeddah, rides range from Al-Balad and the Corniche to hotels and malls, and in Taif from the airport to hotels, resorts and viewpoints.",
        ],
      },
    ],
    locationSlugs: allLocations,
    airportSlugs: [],
    routeSlugs: ["jeddah-to-makkah", "makkah-to-madinah"],
    faqs: [
      {
        question: "Do I need to book a city taxi in advance?",
        answer:
          "Pre-booking is recommended, especially around prayer times, on Fridays and during busy seasons. Book through our booking page, on WhatsApp or by phone.",
      },
      {
        question: "Can I book a taxi with several stops?",
        answer:
          "Yes. For multiple stops or waiting time, a private chauffeur booking may suit you better. Tell us your plans and we will arrange it.",
      },
      {
        question: "Which cities do you cover?",
        answer: "Makkah, Madinah, Jeddah and Taif.",
      },
      {
        question: "Can I book a city taxi at night?",
        answer: "Yes. Bookings are taken 24 hours a day.",
      },
      {
        question: "How much does a city taxi cost?",
        answer: quoteAnswer,
      },
    ],
  },
  {
    slug: "intercity-transfers",
    metaTitle: "Intercity Taxi: Makkah, Madinah, Jeddah & Taif",
    metaDescription:
      "Private intercity taxi between Makkah, Madinah, Jeddah and Taif. Comfortable long-distance transfers for families and groups with Al Safa Taxi, 24/7.",
    h1: "Intercity Transfers Between Makkah, Madinah, Jeddah & Taif",
    heroDescription:
      "Private door-to-door journeys between the Holy Cities, Jeddah and Taif, planned around your group and luggage.",
    intro:
      "Travelling between Makkah, Madinah, Jeddah and Taif by private car means leaving when you are ready, carrying all your luggage and keeping your group together. We arrange intercity transfers for families, pilgrims, business travellers and groups.",
    facts: [
      { label: "Jeddah to Makkah", value: "Roughly 80 km, about 1 hour" },
      { label: "Makkah to Madinah", value: "Roughly 450 km, about 4.5 to 5 hours" },
      { label: "Jeddah to Madinah", value: "Roughly 420 km, about 4 to 4.5 hours" },
      { label: "Makkah to Taif", value: "Roughly 90 km, about 1.5 hours" },
      { label: "Jeddah to Taif", value: "Roughly 170 km, about 2 to 2.5 hours" },
    ],
    sections: [
      {
        heading: "Popular intercity journeys",
        paragraphs: [
          "The most requested journeys link the Holy Cities with each other and with Jeddah, the main arrival point for visitors. We also run journeys up to Taif for weekends and summer breaks.",
        ],
        bullets: [
          "Jeddah and Jeddah Airport to Makkah",
          "Makkah to Madinah and Madinah to Makkah",
          "Jeddah to Madinah and Madinah to Jeddah",
          "Makkah and Jeddah to Taif, and back",
        ],
      },
      {
        heading: "Why travel by private car",
        paragraphs: [
          "A private car takes you from your hotel or home to your destination without transfers, and lets you choose your departure time. It suits families with children, older passengers and anyone travelling with a lot of luggage. Some travellers also use the Haramain high-speed railway between the cities, which is another option to compare.",
        ],
      },
      {
        heading: "Planning a long transfer",
        paragraphs: [
          "For long journeys, tell us when you want to arrive as well as when you want to leave. We can plan around prayer times and the heat of the day, and add stops for prayer, meals or rest. Pilgrims travelling for Umrah should tell us about any miqat stop they need.",
        ],
      },
    ],
    locationSlugs: allLocations,
    airportSlugs: [],
    routeSlugs: [
      "jeddah-to-makkah",
      "makkah-to-madinah",
      "madinah-to-makkah",
      "jeddah-to-madinah",
      "makkah-to-taif",
      "jeddah-to-taif",
    ],
    faqs: [
      {
        question: "How long does it take to travel from Makkah to Madinah?",
        answer:
          "Roughly 450 km, which takes about four and a half to five hours by road depending on traffic and stops.",
      },
      {
        question: "Can we stop on the way?",
        answer:
          "Yes. Tell us in advance if you need stops for prayer, meals or rest, and we will plan them into the journey.",
      },
      {
        question: "Can you stop at the miqat for Umrah?",
        answer:
          "Yes. Pilgrims from Madinah commonly stop at Dhul Hulayfah (Abyar Ali), and travellers on the Taif road at Qarn al-Manazil. Tell us when you book so the stop is planned.",
      },
      {
        question: "Can you carry a large family and their luggage?",
        answer:
          "Yes. Tell us the number of passengers and bags and we will suggest a suitable vehicle, including larger vans for groups.",
      },
      {
        question: "How much does an intercity transfer cost?",
        answer: quoteAnswer,
      },
    ],
  },
  {
    slug: "private-chauffeur",
    metaTitle: "Private Chauffeur in Makkah, Madinah & Jeddah",
    metaDescription:
      "Hire a private chauffeur in Makkah, Madinah, Jeddah or Taif by the hour or day for Ziyarat, family visits, business and multi-stop itineraries.",
    h1: "Private Chauffeur Service in Makkah, Madinah, Jeddah & Taif",
    heroDescription:
      "One dedicated driver for your schedule: by the hour, by the day, or for a multi-day stay.",
    intro:
      "A private chauffeur means one driver and one vehicle for your whole schedule, rather than arranging a new ride for every journey. It suits visitors with several stops, families who want continuity, and anyone who prefers not to plan transport day by day.",
    facts: [
      { label: "Hire", value: "By the hour, by the day, or for several days" },
      { label: "Cities", value: "Makkah, Madinah, Jeddah and Taif" },
      { label: "Booking", value: "Available 24 hours a day" },
    ],
    sections: [
      {
        heading: "By the hour or by the day",
        paragraphs: [
          "Book a chauffeur for a few hours, a full day or several days. The driver stays with you between stops and waits while you visit, shop or attend meetings, so you never need to search for a ride back.",
        ],
      },
      {
        heading: "Who it suits",
        paragraphs: ["A chauffeur booking is a good fit for:"],
        bullets: [
          "Families and groups on Umrah with a full itinerary",
          "Ziyarat days with several places to visit",
          "Business travellers with multiple meetings",
          "Older passengers who prefer one familiar driver",
        ],
      },
      {
        heading: "How to arrange it",
        paragraphs: [
          "Tell us the city, dates, start time, approximate hours and the places you expect to visit. We will confirm the vehicle and the price before you travel.",
        ],
      },
    ],
    locationSlugs: allLocations,
    airportSlugs: [],
    routeSlugs: ["makkah-to-jeddah", "jeddah-to-taif"],
    faqs: [
      {
        question: "Can I hire a chauffeur for several days?",
        answer:
          "Yes. Tell us your dates and we will arrange a driver for the duration of your stay.",
      },
      {
        question: "Will the chauffeur wait while I visit places?",
        answer:
          "Yes. Waiting time between stops is part of a chauffeur booking. Tell us the expected duration of each stop so we can plan.",
      },
      {
        question: "Can I use a chauffeur for Ziyarat?",
        answer:
          "Yes. Many visitors book a chauffeur for Ziyarat days. See our Ziyarat tours page for the places commonly visited.",
      },
      {
        question: "Can I choose the type of vehicle?",
        answer:
          "Tell us your group size and preferences when you book and we will confirm a suitable vehicle.",
      },
      {
        question: "How is a chauffeur priced?",
        answer:
          "It depends on the hours or days, the city and the vehicle. Send us your plans through the booking page or on WhatsApp and we will confirm a price before you travel.",
      },
    ],
  },
  {
    slug: "hotel-transfers",
    metaTitle: "Hotel Transfers in Makkah, Madinah & Jeddah",
    metaDescription:
      "Private hotel transfers in Makkah, Madinah, Jeddah and Taif: airport pickups, hotel-to-hotel moves and departures. Book 24/7 with Al Safa Taxi.",
    h1: "Hotel Transfers in Makkah, Madinah, Jeddah & Taif",
    heroDescription:
      "Airport pickups, hotel-to-hotel moves and departures, planned around your check-in and checkout times.",
    intro:
      "Your stay begins and ends with a transfer, and near the Haram and the Prophet's Mosque those transfers need some thought. Al Safa Taxi arranges private hotel transfers so that arrival, moving between hotels and departure run smoothly.",
    facts: [
      { label: "Cities", value: "Makkah, Madinah, Jeddah and Taif" },
      { label: "Transfers", value: "Airport, hotel-to-hotel and departures" },
      { label: "Booking", value: "Available 24 hours a day" },
    ],
    sections: [
      {
        heading: "Arriving at your hotel",
        paragraphs: [
          "We collect you from the airport or another starting point and take you to your hotel. Vehicle access near the Masjid al-Haram and Al-Masjid an-Nabawi can vary, so the drop-off point depends on your hotel's location and the conditions on the day. Share the hotel name in advance so it can be planned.",
        ],
      },
      {
        heading: "Moving between hotels and cities",
        paragraphs: [
          "Many pilgrims split their stay between Makkah and Madinah. We move you and your luggage from hotel to hotel in one vehicle, on the day and at the time that suits your check-out and check-in.",
        ],
      },
      {
        heading: "Departures and checkout",
        paragraphs: [
          "For departures, we schedule a pickup from your hotel with time to spare for your flight or onward journey. Give us your checkout time and destination when you book.",
        ],
        bullets: [
          "Hotel name and area",
          "Check-in and checkout times",
          "Number of guests and bags",
          "Any special needs, such as extra help with luggage",
        ],
      },
    ],
    locationSlugs: allLocations,
    airportSlugs: ["jeddah-airport", "madinah-airport"],
    routeSlugs: ["jeddah-airport-to-makkah", "makkah-to-madinah", "makkah-to-jeddah-airport"],
    faqs: [
      {
        question: "Can you pick me up from a hotel near the Haram?",
        answer:
          "Yes. Vehicle access near the Haram can vary, so tell us your hotel and we will confirm the pickup point in advance.",
      },
      {
        question: "Can you move me between a Makkah hotel and a Madinah hotel?",
        answer:
          "Yes. We run hotel-to-hotel transfers between the cities. The journey is roughly 450 km and takes about four and a half to five hours.",
      },
      {
        question: "Can I book a hotel transfer for a late check-in?",
        answer: "Yes. Bookings are taken 24 hours a day.",
      },
      {
        question: "Do you serve hotels in Jeddah and Taif?",
        answer: "Yes. We cover hotels and resorts in Makkah, Madinah, Jeddah and Taif.",
      },
      {
        question: "How much does a hotel transfer cost?",
        answer: quoteAnswer,
      },
    ],
  },
  {
    slug: "business-transportation",
    metaTitle: "Corporate Taxi in Makkah, Madinah & Jeddah",
    metaDescription:
      "Corporate and business transportation in Makkah, Madinah, Jeddah and Taif: executive transfers, delegations and events. Book with Al Safa Taxi, 24/7.",
    h1: "Business & Corporate Transportation in Makkah, Madinah, Jeddah & Taif",
    heroDescription:
      "Executive transfers, delegations and event transport, arranged around your schedule.",
    intro:
      "Business travel depends on punctuality and presentation. Al Safa Taxi arranges transportation for executives, delegations and corporate events across Makkah, Madinah, Jeddah and Taif, from a single airport pickup to a programme with several vehicles.",
    facts: [
      { label: "Cities", value: "Makkah, Madinah, Jeddah and Taif" },
      { label: "Suited to", value: "Executives, delegations and events" },
      { label: "Booking", value: "Available 24 hours a day" },
    ],
    sections: [
      {
        heading: "Executive transfers",
        paragraphs: [
          "For individual executives, we arrange airport pickups, meetings across the city and intercity trips, with a driver who arrives at an agreed time. Tell us the level of vehicle you would like and we will confirm what is available.",
        ],
      },
      {
        heading: "Delegations and events",
        paragraphs: [
          "Moving a group takes coordination: how many vehicles, when each guest arrives and where they need to be. Send us the guest numbers, arrival times and venues, and we will plan the vehicles and pickups with you.",
        ],
        bullets: [
          "Number of guests and arrival times",
          "Airports, hotels and venues",
          "Level of vehicle required",
          "Dates, times and any changes expected",
        ],
      },
      {
        heading: "Regular corporate travel",
        paragraphs: [
          "If your company travels regularly between Jeddah, Makkah, Madinah and Taif, contact us to discuss how recurring bookings can be arranged.",
        ],
      },
    ],
    locationSlugs: allLocations,
    airportSlugs: ["jeddah-airport", "madinah-airport"],
    routeSlugs: ["makkah-to-jeddah", "jeddah-to-madinah"],
    faqs: [
      {
        question: "Can you arrange transport for a delegation?",
        answer:
          "Yes. Send us the number of guests, arrival times and venues, and we will plan the vehicles and pickups with you.",
      },
      {
        question: "Can I request a higher-level vehicle for executives?",
        answer:
          "Tell us the level of vehicle you would like when you book and we will confirm what is available.",
      },
      {
        question: "Can we set up recurring bookings for our company?",
        answer:
          "Contact us to discuss your requirements and how regular bookings can be arranged.",
      },
      {
        question: "Which cities do you cover for business travel?",
        answer: "Makkah, Madinah, Jeddah and Taif, including airport transfers.",
      },
      {
        question: "How do I get a price for business transportation?",
        answer: quoteAnswer,
      },
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
