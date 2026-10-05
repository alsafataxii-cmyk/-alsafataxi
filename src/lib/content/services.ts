import { serviceExtras } from "@/lib/content/extra-services";
import { serviceTopups } from "@/lib/content/extra-topups";
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

const allLocations = ["makkah", "madinah", "jeddah", "taif"];

const baseServicePages: ServicePage[] = [
  {
    slug: "airport-transfers",
    metaTitle: "Airport Transfers in Jeddah, Madinah & Taif",
    metaDescription:
      "Book a private airport transfer at Jeddah, Madinah or Taif airport. See which airport serves your city, what to send us and how pickups and drop-offs work.",
    h1: "Private Airport Transfers in Jeddah, Madinah & Taif",
    heroDescription:
      "Pickups and drop-offs at King Abdulaziz, Prince Mohammad bin Abdulaziz and Taif airports, with onward travel to Makkah and Madinah.",
    intro:
      "An airport transfer here is rarely just a ride to a nearby hotel. The airport you land at may be 100 or 450 km from where you are staying, the arrival is often after a long flight, and Makkah has no airport of its own. This page explains which airport serves which city, how pickups and drop-offs are arranged, and what to tell us so the car is there when you come out.",
    facts: [
      { label: "Airports", value: "Jeddah (JED), Madinah (MED), Taif (TIF)" },
      { label: "Destinations", value: "Makkah, Madinah, Jeddah and Taif" },
      { label: "Booking", value: "Available 24 hours a day" },
    ],
    sections: [
      {
        heading: "Which airport serves your destination",
        paragraphs: [
          "Makkah has no commercial airport. Visitors to Makkah, including nearly every Umrah pilgrim, fly into King Abdulaziz International Airport in Jeddah and travel about 100 km by road. Madinah has its own airport, Prince Mohammad bin Abdulaziz International, close to the city. Taif has Taif International Airport, a smaller airport in the mountains. Check which of them has a flight for your route before you book a ticket.",
        ],
        subsections: [
          {
            heading: "Jeddah (JED)",
            paragraphs: [
              "The gateway for Makkah and Jeddah, and the usual route for Madinah and Taif too. See [Jeddah Airport taxi](/airports/jeddah-airport) for arrivals, departures and the route options from there.",
            ],
          },
          {
            heading: "Madinah (MED)",
            paragraphs: [
              "For pilgrims who start in Madinah. See [Madinah Airport taxi](/airports/madinah-airport) for the drive to hotels around the Prophet's Mosque and the onward road to Makkah.",
            ],
          },
          {
            heading: "Taif (TIF)",
            paragraphs: [
              "For visitors going up to Taif or down to Makkah. See [Taif Airport taxi](/airports/taif-airport).",
            ],
          },
        ],
      },
      {
        heading: "How an arrival pickup works",
        paragraphs: [
          "You send us the flight number, the date, the number of passengers and bags, and the hotel or address. We plan the pickup around the flight, not a fixed time, so a delay does not leave a driver waiting or you without one. If your flight is early or late, send a message and we will adjust. After immigration and baggage claim you go to the car, and the journey to your hotel begins.",
        ],
        cta: true,
      },
      {
        heading: "How a departure drop-off works",
        paragraphs: [
          "For a flight out, tell us the flight number and the time. We work back from your airline's check-in rules, add the driving time and a buffer. The longest buffers are for Makkah to Jeddah and Madinah to Jeddah, where the journey can take one to one and a half hours or four to four and a half hours, and traffic is heavier on Fridays and in the Umrah and Hajj seasons.",
        ],
        subsections: [
          {
            heading: "From Makkah",
            paragraphs: [
              "Leaving the streets around the Haram can be slow. See [Makkah to Jeddah Airport](/routes/makkah-to-jeddah-airport).",
            ],
          },
          {
            heading: "From Madinah",
            paragraphs: [
              "If you are flying from Jeddah, see [Madinah to Jeddah](/routes/madinah-to-jeddah) for the early start it usually requires.",
            ],
          },
        ],
      },
      {
        heading: "Choosing the vehicle",
        paragraphs: [
          "The right vehicle depends on the passengers and the bags, and on the way home you usually have more of the second. An Executive Sedan takes three passengers and two bags, a Premium SUV five passengers and four bags, and a Luxury Van eight passengers and six bags. For a group bigger than that, we plan more than one vehicle with pickups at the same time. See [the fleet](/fleet).",
        ],
      },
      {
        heading: "Combining the transfer with something else",
        paragraphs: [
          "Many arrivals are the start of an Umrah trip, and some pilgrims add [Ziyarat](/services/ziyarat-tours) on the day they land or leave. If you are moving between the cities afterwards, see [intercity transfers](/services/intercity-transfers). For a complete itinerary, see [Umrah transportation](/umrah-transportation).",
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
        question: "Which airport should I fly into for Makkah?",
        answer:
          "Jeddah. Makkah has no commercial airport, and Jeddah Airport is about 100 km away.",
      },
      {
        question: "Do I need to know my terminal?",
        answer:
          "No. Your flight number is enough for us to plan the pickup.",
      },
      {
        question: "What if my flight is delayed?",
        answer:
          "Message us on WhatsApp or call. The pickup follows your actual arrival.",
      },
      {
        question: "Can I book a pickup for a night flight?",
        answer:
          "Yes. Our booking line is open all day and night.",
      },
      {
        question: "Can you collect a group on one flight?",
        answer:
          "Yes. We plan the number of vehicles from your passengers and luggage and coordinate the pickups.",
      },
      {
        question: "How is the price decided?",
        answer:
          "It depends on the airport, the destination, the vehicle and the number of passengers. We confirm the price before you travel.",
      },
    ],
  },
  {
    slug: "ziyarat-tours",
    metaTitle: "Ziyarat Tours in Makkah & Madinah",
    metaDescription:
      "Plan a private Ziyarat by car in Makkah or Madinah: Jabal al-Noor, Jabal Thawr, Quba, Qiblatain and Uhud, with a driver who waits and prayer times respected.",
    h1: "Ziyarat Tours in Makkah & Madinah by Private Taxi",
    heroDescription:
      "Visit the historical and religious places of Makkah and Madinah in a private car, at your own pace.",
    intro:
      "Ziyarat means visiting the historical and religious places connected with Islamic history. In Makkah and Madinah those places are spread across the cities and their surroundings, and several are on hillsides or at the edge of town. Seeing three or four in a morning is far easier with a private car and a driver who waits while you visit.",
    facts: [
      { label: "Cities", value: "Makkah and Madinah" },
      { label: "Format", value: "Private car, planned around your schedule" },
      { label: "Booking", value: "Available 24 hours a day" },
    ],
    sections: [
      {
        heading: "Makkah Ziyarat",
        paragraphs: [
          "The places commonly visited in and around Makkah are:",
        ],
        bullets: [
          "Jabal al-Noor, the mountain of the Cave of Hira, where the first revelation came to the Prophet Muhammad (peace be upon him). Reaching the cave means a steep climb on steps, so allow more time and energy than you expect.",
          "Jabal Thawr and the Cave of Thawr, south of Makkah, where the Prophet and Abu Bakr sheltered at the start of the Hijrah to Madinah.",
          "Mina, Arafat (including Jabal al-Rahmah) and Muzdalifah, where the rites of Hajj are performed. Many visitors see them outside the Hajj season.",
          "Jannat al-Mu'alla, the historic cemetery of Makkah, where Khadijah bint Khuwaylid, the Prophet's first wife, is buried.",
        ],
        subsections: [
          {
            heading: "Planning a Makkah morning",
            paragraphs: [
              "Jabal al-Noor and Jabal Thawr both involve climbing, so they suit an early start before the heat. Mina, Arafat and Muzdalifah are on the same side of Makkah and are often visited together. Tell us who is coming, especially older passengers or children, and we will plan which places are realistic.",
            ],
          },
        ],
      },
      {
        heading: "Madinah Ziyarat",
        paragraphs: ["The places commonly visited around Madinah are:"],
        bullets: [
          "Quba Mosque, the first mosque built in Islam, on the southern edge of the city",
          "Masjid al-Qiblatain, the mosque where the direction of prayer is said to have changed from Jerusalem to the Kaaba, which is why it has two qiblas",
          "Mount Uhud and the Uhud martyrs' cemetery, the site of the Battle of Uhud, where Hamza ibn Abd al-Muttalib and other companions are buried",
          "The Seven Mosques area (Al-Khandaq), a group of small mosques near the site associated with the Battle of the Trench, and Masjid al-Ghamama",
        ],
        subsections: [
          {
            heading: "Planning a Madinah morning",
            paragraphs: [
              "These places are on different sides of the city, so a morning is enough for most of them with a car. Many visitors add a stop at a dates market on the way back to the hotel. See [Madinah taxi service](/locations/madinah) for getting around the city.",
            ],
          },
        ],
        cta: true,
      },
      {
        heading: "How a Ziyarat trip is planned",
        paragraphs: [
          "Tell us which places you want to visit and roughly how long you would like at each. We plan the route and the timing around the prayers, and the driver waits while you visit. Access to some places can change on the day, so the order of visits may be adjusted. Some places involve walking or climbing, so let us know if anyone in your group has limited mobility and we will plan realistically.",
        ],
      },
      {
        heading: "Adding Ziyarat to a journey",
        paragraphs: [
          "Many visitors add Ziyarat to a day they are travelling anyway. On the way from Madinah Airport to the hotel, for example, or on the morning you leave Madinah. If you want a driver for several days of Ziyarat and other trips, see [private chauffeur](/services/private-chauffeur). For the transport for a whole Umrah trip, see [Umrah transportation](/umrah-transportation).",
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
          "Ziyarat is visiting the historical and religious places connected with Islamic history, commonly done alongside Umrah or a stay in Makkah and Madinah.",
      },
      {
        question: "How long does Ziyarat take in Makkah?",
        answer:
          "It depends on the places. The climbs at Jabal al-Noor and Jabal Thawr take time. Tell us the places and we will plan realistically.",
      },
      {
        question: "Can we do Ziyarat on the day we arrive?",
        answer:
          "Yes. Many visitors do. Tell us when you book and we will plan it around your arrival.",
      },
      {
        question: "Can older passengers manage?",
        answer:
          "Some places involve walking or steps. Tell us who is travelling and we will plan which places are practical.",
      },
      {
        question: "Does the driver wait while we visit?",
        answer:
          "Yes. Tell us how long you expect at each place.",
      },
      {
        question: "How is the price decided?",
        answer:
          "It depends on the places, the time involved and the vehicle. Send us your plans and we will confirm a price before you travel.",
      },
    ],
  },
  {
    slug: "city-taxi",
    metaTitle: "City Taxi in Makkah, Madinah, Jeddah & Taif",
    metaDescription:
      "Pre-book a private city taxi in Makkah, Madinah, Jeddah or Taif for hotels, shopping and appointments, and avoid hunting for a ride at prayer times.",
    h1: "City Taxi Service in Makkah, Madinah, Jeddah & Taif",
    heroDescription:
      "Pre-booked private taxis for everyday journeys within Makkah, Madinah, Jeddah and Taif.",
    intro:
      "A city taxi here is a short ride at an agreed time, in a cab you booked. It is not the same as an intercity transfer, where the journey is long, or a chauffeur, where one driver stays with you. This page explains when a city taxi is the right choice, why booking ahead matters in these four cities, and what to know about each.",
    facts: [
      { label: "Cities", value: "Makkah, Madinah, Jeddah and Taif" },
      { label: "Booking", value: "Available 24 hours a day" },
    ],
    sections: [
      {
        heading: "When a city taxi is the right choice",
        paragraphs: [
          "Choose a city taxi for a single trip or a return that you will arrange separately: a hotel to a restaurant, a hotel to a hospital appointment, a visit to relatives, a trip to a mall. You tell us the pickup, the destination and the time. If you have several stops or the driver needs to wait, a [private chauffeur](/services/private-chauffeur) is a better fit.",
        ],
      },
      {
        heading: "Why booking ahead matters",
        paragraphs: [
          "Demand rises sharply after the congregational prayers, on Fridays and in Ramadan and the Hajj season, when large crowds leave the mosques at once. Looking for a ride at those times can mean a long wait. A booking gives you a fixed time and a driver who is expecting you.",
        ],
        cta: true,
      },
      {
        heading: "City by city",
        subsections: [
          {
            heading: "Makkah",
            paragraphs: [
              "Pickups near the Haram depend on where cars can stop, which changes with the crowd. See [Makkah taxi service](/locations/makkah).",
            ],
          },
          {
            heading: "Madinah",
            paragraphs: [
              "Roads in the central area around the Prophet's Mosque are restricted. See [Madinah taxi service](/locations/madinah).",
            ],
          },
          {
            heading: "Jeddah",
            paragraphs: [
              "The city is long, so trips between Al-Balad, the Corniche and the north can take a while. See [Jeddah taxi service](/locations/jeddah).",
            ],
          },
          {
            heading: "Taif",
            paragraphs: [
              "Hotels, resorts and viewpoints are spread out, and some roads are steep. See [Taif taxi service](/locations/taif).",
            ],
          },
        ],
        paragraphs: [
          "Each city has its own limits on where a car can stop and how long a ride takes.",
        ],
      },
      {
        heading: "What to send when you book",
        paragraphs: ["A booking needs only a few things:"],
        bullets: [
          "The pickup address or hotel, with a location pin if you can",
          "The destination",
          "Date and time",
          "Number of passengers and bags",
          "Whether you need a child seat",
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
          "We recommend it, especially after prayers, on Fridays and in busy seasons. It gives you a fixed time.",
      },
      {
        question: "Can I book a taxi with a stop on the way?",
        answer:
          "Yes. Tell us the stop when you book. For several stops or a long wait, a chauffeur booking may be better.",
      },
      {
        question: "Which cities do you cover?",
        answer: "Makkah, Madinah, Jeddah and Taif.",
      },
      {
        question: "Can I book a taxi at night?",
        answer: "Yes. Bookings are taken all day and night.",
      },
      {
        question: "Do you provide child seats?",
        answer:
          "Tell us when you book and we will confirm what is available for your vehicle.",
      },
      {
        question: "How is the price decided?",
        answer:
          "It depends on the pickup, the destination, the vehicle and the number of passengers. We confirm the price before you travel.",
      },
    ],
  },
  {
    slug: "intercity-transfers",
    metaTitle: "Intercity Taxi: Makkah, Madinah, Jeddah & Taif",
    metaDescription:
      "Private intercity transfers between Makkah, Madinah, Jeddah and Taif: distances, journey times, miqat and prayer stops, and car versus train.",
    h1: "Intercity Transfers Between Makkah, Madinah, Jeddah & Taif",
    heroDescription:
      "Private door-to-door journeys between the Holy Cities, Jeddah and Taif, planned around your group and luggage.",
    intro:
      "The four cities are close enough to link in one trip and far enough apart that the journey between them needs a plan. Jeddah to Makkah is an hour, Makkah to Madinah is about five, and Taif is a climb into the mountains. This page helps you choose how to travel, what each journey involves, and where the stops are.",
    facts: [
      { label: "Jeddah to Makkah", value: "Roughly 80 km, about 1 hour" },
      { label: "Makkah to Madinah", value: "Roughly 450 km, about 4.5 to 5 hours" },
      { label: "Jeddah to Madinah", value: "Roughly 420 km, about 4 to 4.5 hours" },
      { label: "Makkah to Taif", value: "Roughly 90 km, about 1.5 hours" },
      { label: "Jeddah to Taif", value: "Roughly 170 km, about 2 to 2.5 hours" },
    ],
    sections: [
      {
        heading: "The journeys people book most",
        paragraphs: [
          "Each route has its own page covering the details.",
        ],
        subsections: [
          {
            heading: "Between the Holy Cities",
            paragraphs: [
              "[Makkah to Madinah](/routes/makkah-to-madinah) is the longest and the most common after Umrah. [Madinah to Makkah](/routes/madinah-to-makkah) has a miqat stop at Dhul Hulayfah for pilgrims.",
            ],
          },
          {
            heading: "To and from Jeddah",
            paragraphs: [
              "[Jeddah to Makkah](/routes/jeddah-to-makkah) and [Makkah to Jeddah](/routes/makkah-to-jeddah) are short. [Jeddah to Madinah](/routes/jeddah-to-madinah) and [Madinah to Jeddah](/routes/madinah-to-jeddah) are long and often end at a flight.",
            ],
          },
          {
            heading: "To and from Taif",
            paragraphs: [
              "[Makkah to Taif](/routes/makkah-to-taif), [Jeddah to Taif](/routes/jeddah-to-taif) and the way back climb or descend a mountain road, and the Makkah return passes the miqat at Qarn al-Manazil.",
            ],
          },
        ],
        cta: true,
      },
      {
        heading: "Car or train",
        paragraphs: [
          "The Haramain high-speed railway connects Makkah, Jeddah (with a station at the airport) and Madinah. A private car makes sense when you do not want to change at stations, when you are carrying a lot of luggage, when there are children or older passengers, or when you want to choose your own departure time and stop on the way. Many travellers compare both, and some use the train for one leg and a car for another.",
        ],
      },
      {
        heading: "Stops",
        paragraphs: [
          "On a long journey, plan for prayer, a meal and a rest. Tell us when you book and we will fit them in. Pilgrims who need to enter ihram on the way should say so: from Madinah the miqat is commonly Dhul Hulayfah (Abyar Ali), and on the Taif road it is Qarn al-Manazil (As-Sayl al-Kabir). We arrange the stop, and questions about the rites are for your group leader or a qualified scholar.",
        ],
      },
      {
        heading: "Timing and vehicle",
        paragraphs: [
          "Tell us when you want to arrive as well as when you want to leave. Allow for prayer times and for Fridays, and for the heat of the day on long drives. Then choose the vehicle by passengers and bags: a Premium SUV takes five passengers and four bags, and a Luxury Van takes eight passengers and six bags. See [the fleet](/fleet).",
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
        question: "How long is Makkah to Madinah by road?",
        answer:
          "Roughly 450 km, about four and a half to five hours without stops. With prayer and rest, plan for six hours or more.",
      },
      {
        question: "Where do pilgrims stop for ihram?",
        answer:
          "Commonly at Dhul Hulayfah (Abyar Ali) from Madinah and at Qarn al-Manazil on the Taif road. Tell us when you book.",
      },
      {
        question: "Is the train a better option than a private car?",
        answer:
          "It depends on your plans. The train is an option between the cities. A car goes door to door with your luggage and leaves when you are ready.",
      },
      {
        question: "Can we carry a large family?",
        answer:
          "Yes. A Luxury Van takes eight passengers and six bags. For bigger groups we plan more vehicles.",
      },
      {
        question: "Can you add a stop on the way?",
        answer:
          "Yes. Tell us when you book. For example, a Ziyarat stop or a family visit.",
      },
      {
        question: "How is the price decided?",
        answer:
          "It depends on the route, the vehicle and the number of passengers. We confirm the price before you travel.",
      },
    ],
  },
  {
    slug: "private-chauffeur",
    metaTitle: "Private Chauffeur in Makkah, Madinah & Jeddah",
    metaDescription:
      "Hire one driver by the hour, day or several days in Makkah, Madinah, Jeddah or Taif, for Ziyarat, family itineraries and meetings, with waiting time included.",
    h1: "Private Chauffeur Service in Makkah, Madinah, Jeddah & Taif",
    heroDescription:
      "One dedicated driver for your schedule: by the hour, by the day, or for a multi-day stay.",
    intro:
      "A chauffeur booking means one driver and one vehicle for your whole schedule, instead of arranging a new ride for every journey. The driver waits between stops and you do not have to find a ride back. It suits visits with several stops, families who want continuity, and anyone who would rather not plan transport day by day.",
    facts: [
      { label: "Hire", value: "By the hour, by the day, or for several days" },
      { label: "Cities", value: "Makkah, Madinah, Jeddah and Taif" },
      { label: "Booking", value: "Available 24 hours a day" },
    ],
    sections: [
      {
        heading: "Chauffeur or city taxi",
        paragraphs: [
          "A [city taxi](/services/city-taxi) takes you from A to B. A chauffeur stays with you. If you have more than two stops, if the driver will need to wait for an hour or more, or if you want the same driver over several days, a chauffeur is usually simpler and often more practical than rebooking.",
        ],
      },
      {
        heading: "Examples of how people use it",
        paragraphs: ["A few common patterns:"],
        bullets: [
          "A morning of [Ziyarat](/services/ziyarat-tours) in Madinah, with the driver waiting at each place",
          "A day in Jeddah with Al-Balad, the Corniche, a meeting and lunch",
          "A family in Makkah with several hotel and Masjid Aisha trips over a week",
          "A weekend in Taif with viewpoints, farms and a mountain drive",
        ],
        cta: true,
      },
      {
        heading: "By the hour, by the day, for several days",
        paragraphs: [
          "Book for a few hours, a full day or several days. Tell us the city, the dates, the start time and roughly how many hours you want each day. For a multi-day booking, agree the start time of each day, and we will plan around prayer times and rest.",
        ],
      },
      {
        heading: "Waiting time and changes",
        paragraphs: [
          "Waiting time between stops is part of the booking, so tell us how long you expect at each place. Plans change: if a visit runs long, tell the driver and we will adjust. If you need to extend, message us as early as you can.",
        ],
      },
      {
        heading: "What to tell us",
        paragraphs: ["To confirm a chauffeur booking, we need:"],
        bullets: [
          "The city and the dates",
          "Start time and approximate hours each day",
          "The places you expect to visit",
          "Number of passengers and any mobility needs",
          "Any preference for the vehicle, see [the fleet](/fleet)",
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
          "Yes. Tell us the dates and we will arrange a driver for the duration of your stay.",
      },
      {
        question: "Does the chauffeur wait while I visit places?",
        answer:
          "Yes. Waiting time between stops is part of a chauffeur booking. Tell us how long you expect at each.",
      },
      {
        question: "Can I use a chauffeur for Ziyarat?",
        answer:
          "Yes. See [Ziyarat tours](/services/ziyarat-tours) for the places commonly visited.",
      },
      {
        question: "Can the chauffeur take us between cities?",
        answer:
          "Yes. See [intercity transfers](/services/intercity-transfers). Tell us when you book.",
      },
      {
        question: "Can I choose the vehicle?",
        answer:
          "Tell us your group size and preferences and we will confirm a suitable vehicle.",
      },
      {
        question: "How is a chauffeur priced?",
        answer:
          "It depends on the hours or days, the city and the vehicle. We confirm the price before you travel.",
      },
    ],
  },
  {
    slug: "hotel-transfers",
    metaTitle: "Hotel Transfers in Makkah, Madinah & Jeddah",
    metaDescription:
      "Private hotel transfers for arrival, hotel-to-hotel moves and departure, timed to check-in and checkout, with access near the Haram and Prophet's Mosque planned.",
    h1: "Hotel Transfers in Makkah, Madinah, Jeddah & Taif",
    heroDescription:
      "Airport pickups, hotel-to-hotel moves and departures, planned around your check-in and checkout times.",
    intro:
      "A hotel transfer is the journey that begins or ends your stay, and the difficulty is usually the hotel end: a restricted zone near the Haram or the Prophet's Mosque, a checkout that everyone has chosen at the same time, a room that is not ready. This page is about planning those.",
    facts: [
      { label: "Cities", value: "Makkah, Madinah, Jeddah and Taif" },
      { label: "Transfers", value: "Airport, hotel-to-hotel and departures" },
      { label: "Booking", value: "Available 24 hours a day" },
    ],
    sections: [
      {
        heading: "Getting to the hotel",
        paragraphs: [
          "Hotels around the Masjid al-Haram and Al-Masjid an-Nabawi are inside areas where vehicle access is limited and changes with the crowds. The car may stop at the edge of the area and the last part is on foot. Send us the hotel name when you book. We confirm where the car will stop and, if someone needs help with the walk, we plan for it.",
        ],
        cta: true,
      },
      {
        heading: "Check-in and checkout timing",
        paragraphs: [
          "Rooms are often not ready until the afternoon, and checkout is often busy in the morning. Tell us your check-in and checkout times and plan the transfer around them. If you arrive early, you can leave your bags at the hotel and go to the Haram, or use the time for Ziyarat. See [Ziyarat tours](/services/ziyarat-tours).",
        ],
      },
      {
        heading: "Moving between hotels and cities",
        paragraphs: [
          "Many pilgrims split a stay between Makkah and Madinah. We move you and your luggage from one hotel to the other in one vehicle, on the day and at the time that suits your checkout and check-in. The journey is about 450 km: see [Makkah to Madinah](/routes/makkah-to-madinah) and [Madinah to Makkah](/routes/madinah-to-makkah). Within one city, a move between hotels is a short transfer that we can also arrange.",
        ],
      },
      {
        heading: "Hotels in Jeddah and Taif",
        paragraphs: [
          "Jeddah hotels are spread along the Corniche and across the city, so give us the exact address. Taif resorts can be off the main roads: give us the name and a location pin. See [Jeddah taxi service](/locations/jeddah) and [Taif taxi service](/locations/taif).",
        ],
      },
      {
        heading: "Departures",
        paragraphs: [
          "For a flight or an onward journey, tell us the time and your checkout time. We plan the pickup with a buffer. For flights from Jeddah, see [Jeddah Airport taxi](/airports/jeddah-airport).",
        ],
      },
      {
        heading: "What to tell us",
        paragraphs: ["Please include:"],
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
        question: "Can you collect me from a hotel next to the Haram?",
        answer:
          "Yes, from the closest practical point. Vehicle access changes with the crowd, so tell us the hotel and we will confirm.",
      },
      {
        question: "Can you take us to a hotel before check-in time?",
        answer:
          "Yes. You can leave your bags at the hotel if they allow it, or we can plan something such as Ziyarat for the time you are waiting.",
      },
      {
        question: "Can you move us between a Makkah hotel and a Madinah hotel?",
        answer:
          "Yes. It is about 450 km and four and a half to five hours. We plan it around checkout and check-in.",
      },
      {
        question: "Do you serve hotels in Jeddah and Taif?",
        answer:
          "Yes. We cover hotels and resorts in Makkah, Madinah, Jeddah and Taif.",
      },
      {
        question: "Can I book for a late check-in?",
        answer: "Yes. Bookings are taken all day and night.",
      },
      {
        question: "How is the price decided?",
        answer:
          "It depends on the pickup, the destination, the vehicle and the number of passengers. We confirm the price before you travel.",
      },
    ],
  },
  {
    slug: "business-transportation",
    metaTitle: "Corporate Taxi in Makkah, Madinah & Jeddah",
    metaDescription:
      "Executive transfers, delegations and event transport in Makkah, Madinah, Jeddah and Taif, planned around guest arrivals, venues and meeting times.",
    h1: "Business & Corporate Transportation in Makkah, Madinah, Jeddah & Taif",
    heroDescription:
      "Executive transfers, delegations and event transport, arranged around your schedule.",
    intro:
      "Business travel in the Western Region depends on punctual pickups, the right level of vehicle and a driver who knows where the meeting is. This page is for individual executives, groups arriving for a conference or a visit, and companies that move people between Jeddah, Makkah, Madinah and Taif.",
    facts: [
      { label: "Cities", value: "Makkah, Madinah, Jeddah and Taif" },
      { label: "Suited to", value: "Executives, delegations and events" },
      { label: "Booking", value: "Available 24 hours a day" },
    ],
    sections: [
      {
        heading: "Executive transfers",
        paragraphs: [
          "For one traveller, we arrange the airport pickup, trips between meetings and any intercity journey. Tell us the level of vehicle you would like. The VIP Chauffeur Car and the Executive Sedan each take three passengers and two bags: see [the fleet](/fleet). For a day of meetings across a city, see [private chauffeur](/services/private-chauffeur).",
        ],
        cta: true,
      },
      {
        heading: "Delegations and events",
        paragraphs: [
          "Moving a group takes coordination: how many vehicles, when each guest arrives and where they must be. Send us the guest numbers, the arrival times and the venues, and we plan the vehicles and the pickups with you.",
        ],
        bullets: [
          "Number of guests and flight arrival times",
          "Airports, hotels and venues",
          "Level of vehicle required",
          "Dates, times and any changes you expect",
        ],
        subsections: [
          {
            heading: "Arrivals by air",
            paragraphs: [
              "Most guests arrive at [Jeddah Airport](/airports/jeddah-airport) or [Madinah Airport](/airports/madinah-airport). Send each flight number so the pickups follow the actual arrivals.",
            ],
          },
        ],
      },
      {
        heading: "Business in each city",
        paragraphs: [
          "Jeddah is the main commercial city, and trips there run across a long city: see [Jeddah taxi service](/locations/jeddah). In Makkah and Madinah the same access limits near the mosques apply to any visit, so give us the venue and we will confirm where the car can stop.",
        ],
      },
      {
        heading: "Regular corporate travel",
        paragraphs: [
          "If your company travels regularly between the cities, contact us to discuss how repeated bookings can be arranged. See [intercity transfers](/services/intercity-transfers) for the routes and journey times.",
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
          "Yes. Send us the number of guests, the arrival times and the venues, and we plan the vehicles and pickups with you.",
      },
      {
        question: "Can I request a higher-level vehicle for an executive?",
        answer:
          "Yes. Tell us the level you want and we will confirm what is available. See [the fleet](/fleet).",
      },
      {
        question: "Can you pick up guests from several flights?",
        answer:
          "Yes. Send each flight number and we plan the pickups around them.",
      },
      {
        question: "Can we set up recurring bookings?",
        answer:
          "Contact us to discuss your requirements and how regular bookings can be arranged.",
      },
      {
        question: "Which cities do you cover for business?",
        answer: "Makkah, Madinah, Jeddah and Taif, including airport transfers.",
      },
      {
        question: "How is the price decided?",
        answer:
          "It depends on the number of vehicles, the level, the route and the time. We confirm the price before you travel.",
      },
    ],
  },
];

export const servicePages: ServicePage[] = baseServicePages.map((page) => ({
  ...page,
  sections: [...page.sections, ...(serviceExtras[page.slug] ?? []), ...(serviceTopups[page.slug] ?? [])],
}));

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
