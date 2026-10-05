import { locationExtras } from "@/lib/content/extra-places";
import { placeTopups } from "@/lib/content/extra-topups";
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

const baseLocationPages: LocationPage[] = [
  {
    slug: "makkah",
    name: "Makkah",
    tagline: "Holy City",
    metaTitle: "Makkah Taxi Service | Private Taxi & Transfers",
    metaDescription:
      "Pre-booked private taxis in Makkah for hotel pickups near the Haram, Umrah journeys, Ziyarat and trips to Jeddah, Madinah and Taif, around prayer times.",
    h1: "Makkah Taxi Service: Private Taxi, Umrah & Ziyarat Transfers",
    heroDescription:
      "Private taxis in Makkah for hotel transfers, Umrah journeys, Ziyarat visits and travel to Jeddah, Madinah and Taif.",
    intro:
      "Getting around Makkah is different from any other city on this site. Most visitors are here for the Masjid al-Haram, the roads around it are restricted and crowded, and hotels can be a walk from where a car can stop. A pre-booked private taxi gives you a driver who knows that and a fixed time, instead of looking for a ride when thousands of people leave a prayer at once.",
    facts: [
      { label: "Nearest airport", value: "King Abdulaziz International (JED), Jeddah" },
      { label: "Jeddah Airport", value: "Roughly 100 km, usually 1 to 1.5 hours" },
      { label: "Madinah", value: "Roughly 450 km, about 4.5 to 5 hours" },
      { label: "Taif", value: "Roughly 90 km, about 1.5 hours" },
      { label: "Booking", value: "Available 24 hours a day" },
    ],
    sections: [
      {
        heading: "Hotels near the Haram",
        paragraphs: [
          "Many hotels are within walking distance of the Haram, but vehicles may not reach the entrance. The access rules and the closures change with the crowd, the prayer and the season. When you book, give us the hotel name and tell us what you will be carrying. We will confirm where the car can wait. An older passenger or a family with a pram may need a closer point than a fit adult would.",
        ],
        subsections: [
          {
            heading: "Prayer times and Fridays",
            paragraphs: [
              "The busiest moments are the minutes after the congregational prayers and, above all, the Friday prayer. If you can, schedule a pickup either well before or well after. For Ramadan and the Hajj season, book as early as you can.",
            ],
          },
        ],
        cta: true,
      },
      {
        heading: "Umrah and the trips around it",
        paragraphs: [
          "Umrah usually needs more transport than people expect: the airport transfer, the hotel, Masjid Aisha (At-Tan'im) for those who go out to enter ihram again, and the journey on to Madinah or home. We arrange individuals, families and groups. See [Umrah transportation](/umrah-transportation) for how the stages of a trip fit together. Entry to Makkah is restricted to Muslims.",
        ],
      },
      {
        heading: "Makkah Ziyarat",
        paragraphs: [
          "The places pilgrims commonly visit around Makkah include Jabal al-Noor, which holds the Cave of Hira, Jabal Thawr, Mina, Arafat, Muzdalifah and Jannat al-Mu'alla. A driver who waits while you visit saves you from finding a ride back from a hillside. Some places involve steps and climbing, so tell us who is coming. See [Ziyarat tours](/services/ziyarat-tours) for what each place is.",
        ],
      },
      {
        heading: "Leaving Makkah",
        paragraphs: [
          "Makkah has no commercial airport, so most departures start with a road journey. To fly home you go to [Jeddah Airport](/airports/jeddah-airport), about 100 km away: see [Makkah to Jeddah Airport](/routes/makkah-to-jeddah-airport) for how to time it. To go on to the second Holy City, see [Makkah to Madinah](/routes/makkah-to-madinah). For the coast, [Makkah to Jeddah](/routes/makkah-to-jeddah), and for the mountains, [Makkah to Taif](/routes/makkah-to-taif).",
        ],
      },
      {
        heading: "Vehicles for families and groups",
        paragraphs: [
          "Tell us how many passengers and bags. A Premium SUV takes five passengers and four bags, and a Luxury Van takes eight passengers and six bags. For a group bigger than that, we plan several vehicles. If you need a child seat, tell us when you book so we can confirm what is available. See [the fleet](/fleet).",
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
        question: "Can a taxi take me to the door of my hotel near the Haram?",
        answer:
          "Not always. Vehicle access near the Haram changes with the crowds, so we confirm the closest practical point when you book.",
      },
      {
        question: "Is there an airport in Makkah?",
        answer:
          "No. The nearest is King Abdulaziz International Airport in Jeddah, about 100 km away. We run transfers in both directions.",
      },
      {
        question: "Can I book a taxi to Masjid Aisha (At-Tan'im)?",
        answer:
          "Yes. Tell us the pickup, the time and whether you want the driver to wait or to collect you later.",
      },
      {
        question: "When is the worst time for traffic?",
        answer:
          "After the congregational prayers, especially the Friday prayer, and in Ramadan and the Hajj season. Book a time that avoids them where you can.",
      },
      {
        question: "Do you provide child seats?",
        answer:
          "Tell us when you book and we will confirm what is available for your vehicle.",
      },
      {
        question: "How do I get a price?",
        answer:
          "Send the pickup, the destination, the date and the number of passengers. We confirm the vehicle and the price before you travel.",
      },
    ],
  },
  {
    slug: "madinah",
    name: "Madinah",
    tagline: "Holy City",
    metaTitle: "Madinah Taxi Service | Airport & Private Transfers",
    metaDescription:
      "Private taxis in Madinah for the airport, hotels near the Prophet's Mosque and Ziyarat to Quba, Qiblatain and Uhud, plus trips on to Makkah and Jeddah.",
    h1: "Madinah Taxi Service: Private Taxi, Airport Transfers & Ziyarat",
    heroDescription:
      "Private taxis in Madinah for airport transfers, hotel pickups, Ziyarat visits and onward travel to Makkah and Jeddah.",
    intro:
      "Madinah is calmer than Makkah and more compact, and nearly every visitor stays close to Al-Masjid an-Nabawi. The practical questions are different: how to get from the airport to a hotel in a restricted central area, how to see the places of Ziyarat spread around the edge of the city, and how to plan the long road to Makkah.",
    facts: [
      { label: "Airport", value: "Prince Mohammad bin Abdulaziz International (MED)" },
      { label: "Central Madinah", value: "Roughly 15 to 20 km from the airport" },
      { label: "Makkah", value: "Roughly 450 km, about 4.5 to 5 hours" },
      { label: "Jeddah", value: "Roughly 420 km, about 4 to 4.5 hours" },
      { label: "Booking", value: "Available 24 hours a day" },
    ],
    sections: [
      {
        heading: "From the airport to the mosque area",
        paragraphs: [
          "The airport is a short drive from the centre, about 20 to 30 minutes outside busy times. The harder part is the last few hundred metres. Roads around the mosque are restricted and the car may stop on the edge of the central area. Tell us the hotel and anyone who needs help with the walk. See the [Madinah Airport](/airports/madinah-airport) page for pickups and departures.",
        ],
        cta: true,
      },
      {
        heading: "Ziyarat around Madinah",
        paragraphs: [
          "The places visitors ask for are spread around the city, so a car with a driver who waits is the easy way to do several in a morning.",
        ],
        bullets: [
          "Quba Mosque, the first mosque built in Islam, on the southern edge of the city",
          "Masjid al-Qiblatain, the mosque of the two qiblas",
          "Mount Uhud and the Uhud martyrs' cemetery",
          "The Seven Mosques area (Al-Khandaq) and Masjid al-Ghamama",
        ],
        subsections: [
          {
            heading: "Choosing the time",
            paragraphs: [
              "Morning is usually the most comfortable time, and it avoids the prayer rush. Visitors often add a stop at a dates market on the way back, because Madinah is known for its dates. See [Ziyarat tours](/services/ziyarat-tours) for a short note on each place.",
            ],
          },
        ],
      },
      {
        heading: "Hotel check-in and checkout",
        paragraphs: [
          "Rooms near the mosque are often not ready until the afternoon, and many groups check out all at once in the morning. If you arrive early, a driver can take you to Ziyarat first, so you are not waiting in the lobby. See [hotel transfers](/services/hotel-transfers) for moving between hotels and cities.",
        ],
      },
      {
        heading: "The road to Makkah",
        paragraphs: [
          "Going to Makkah is a long journey of about 450 km, with a miqat on the way. Pilgrims for Umrah commonly enter ihram at Dhul Hulayfah (Abyar Ali). We can plan the stop. See [Madinah to Makkah](/routes/madinah-to-makkah). If you are flying in and going straight there, see [Madinah Airport to Makkah](/routes/madinah-airport-to-makkah).",
        ],
      },
      {
        heading: "On to Jeddah",
        paragraphs: [
          "For a flight home from Jeddah, the drive is about 420 km. See [Madinah to Jeddah](/routes/madinah-to-jeddah) for how to time it around your flight.",
        ],
      },
      {
        heading: "Groups and families",
        paragraphs: [
          "Tell us how many people and how many bags. A Luxury Van carries eight passengers and six bags. For larger groups we plan more vehicles, with pickups coordinated. See [the fleet](/fleet).",
        ],
      },
    ],
    airportSlug: "madinah-airport",
    routeSlugs: [
      "madinah-airport-to-makkah",
      "madinah-to-makkah",
      "madinah-to-jeddah",
      "jeddah-airport-to-madinah",
    ],
    faqs: [
      {
        question: "Can the taxi reach my hotel near the Prophet's Mosque?",
        answer:
          "Not always. The central area is restricted. We confirm the nearest practical drop-off when you book.",
      },
      {
        question: "How long is the Ziyarat usually?",
        answer:
          "A morning for the main places. It depends on how long you spend at each. Tell us which you want and we will plan.",
      },
      {
        question: "Can we do Ziyarat before our room is ready?",
        answer:
          "Yes. Many visitors do. The driver can collect you from the airport, take you to Ziyarat and then to the hotel.",
      },
      {
        question: "Where does the miqat stop happen on the way to Makkah?",
        answer:
          "Pilgrims commonly stop at Dhul Hulayfah (Abyar Ali). Tell us when you book and we will plan it.",
      },
      {
        question: "Do you do night pickups from the airport?",
        answer:
          "Yes. We take bookings all day and night.",
      },
      {
        question: "How do I get a price?",
        answer:
          "Send the pickup, the destination, the date and the number of passengers. We confirm the vehicle and the price before you travel.",
      },
    ],
  },
  {
    slug: "jeddah",
    name: "Jeddah",
    tagline: "Red Sea Gateway",
    metaTitle: "Jeddah Taxi Service | Airport & Private Transfers",
    metaDescription:
      "Pre-booked private taxis in Jeddah for the airport, hotels, Al-Balad and the Corniche, business trips and day trips to Makkah, Madinah and Taif.",
    h1: "Jeddah Taxi Service: Private Taxi & Airport Transfers",
    heroDescription:
      "Private taxis in Jeddah for airport transfers, city rides and longer journeys to Makkah, Madinah and Taif.",
    intro:
      "Jeddah is a long city on the Red Sea coast, and distances inside it are bigger than visitors expect. It is also where most people arrive for Makkah, so its taxi needs are of two kinds: the airport and the road to the Holy Cities, and getting around the city for hotels, business and sightseeing.",
    facts: [
      { label: "Airport", value: "King Abdulaziz International (JED)" },
      { label: "Airport to city", value: "Roughly 30 to 40 km from central Jeddah" },
      { label: "Makkah", value: "Roughly 80 km, about 1 hour" },
      { label: "Madinah", value: "Roughly 420 km, about 4 to 4.5 hours" },
      { label: "Taif", value: "Roughly 170 km, about 2 to 2.5 hours" },
      { label: "Booking", value: "Available 24 hours a day" },
    ],
    sections: [
      {
        heading: "The airport and the road from it",
        paragraphs: [
          "King Abdulaziz International Airport is on the northern side of the city. From it, the hotel in central Jeddah is a 30 to 40 km drive, Makkah is about 100 km and Madinah about 430 km. Which of those you choose changes how you should book. See the [Jeddah Airport](/airports/jeddah-airport) page for arrivals, departures and what to send us.",
        ],
        cta: true,
      },
      {
        heading: "Getting around the city",
        paragraphs: [
          "A ride across Jeddah can take much longer than one on a map. The places visitors usually ask for are:",
        ],
        bullets: [
          "Al-Balad, the historic district, where streets are narrow and we agree a drop-off point nearby",
          "The Corniche along the waterfront, with hotels, restaurants and the King Fahd Fountain",
          "Al-Rahma Mosque, the mosque on the water often called the Floating Mosque",
          "Malls and business districts spread along the main roads",
        ],
        subsections: [
          {
            heading: "A driver for the day",
            paragraphs: [
              "If you have several stops, book one driver for the day instead of separate rides. The car waits between stops. See [private chauffeur](/services/private-chauffeur) for how that is arranged.",
            ],
          },
        ],
      },
      {
        heading: "Business travellers",
        paragraphs: [
          "Meetings in Jeddah depend on arriving when you said you would. Send us the addresses and times and we plan the pickups with a margin. For executives, delegations and events see [business transportation](/services/business-transportation).",
        ],
      },
      {
        heading: "Day trips to Makkah, Madinah and Taif",
        paragraphs: [
          "Many Jeddah residents and visitors go to Makkah for Umrah and come back the same day: see [Jeddah to Makkah](/routes/jeddah-to-makkah). Madinah is a longer day trip and often an overnight: see [Jeddah to Madinah](/routes/jeddah-to-madinah). For cooler weather, [Jeddah to Taif](/routes/jeddah-to-taif).",
        ],
      },
      {
        heading: "Families and hotel stays",
        paragraphs: [
          "Hotels are spread along the Corniche and in the north and centre, so give us the hotel name and the pickup time. A Premium SUV takes five passengers and four bags and a Luxury Van takes eight passengers and six bags. See [the fleet](/fleet).",
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
        question: "How far is the airport from central Jeddah?",
        answer:
          "Roughly 30 to 40 km. The time depends on where you are going and the traffic.",
      },
      {
        question: "Can you take me to Al-Balad?",
        answer:
          "Yes. Some streets are narrow, so we agree the nearest sensible drop-off when you book.",
      },
      {
        question: "Can I book a driver for the day in Jeddah?",
        answer:
          "Yes. Tell us the times and the places and we will arrange it.",
      },
      {
        question: "Can I book a pickup from Jeddah Airport to a hotel in the city?",
        answer:
          "Yes. Give us the flight number, the hotel and the number of passengers and bags.",
      },
      {
        question: "Do you do day trips from Jeddah to Makkah?",
        answer:
          "Yes. Agree the return time in advance so you are not waiting in the crowds.",
      },
      {
        question: "How do I get a price?",
        answer:
          "Send the pickup, the destination, the date and the number of passengers. We confirm the vehicle and the price before you travel.",
      },
    ],
  },
  {
    slug: "taif",
    name: "Taif",
    tagline: "Highland City",
    metaTitle: "Taif Taxi Service | Airport & Private Transfers",
    metaDescription:
      "Private taxis in Taif for the airport, highland hotels and resorts, Al Hada, Shubra Palace and the rose farms, and mountain trips to Makkah and Jeddah.",
    h1: "Taif Taxi Service: Private Taxi & Airport Transfers",
    heroDescription:
      "Private taxis in Taif for airport transfers, sightseeing and road journeys to Makkah and Jeddah.",
    intro:
      "Taif is in the Sarawat mountains, well over a thousand metres above Makkah, and its attraction is the cooler air. People come for a weekend or the summer, and the questions they ask are about getting up there, getting between hotels and viewpoints, and getting down again by mountain road. This page covers those.",
    facts: [
      { label: "Airport", value: "Taif International Airport (TIF)" },
      { label: "Makkah", value: "Roughly 90 km, about 1.5 hours" },
      { label: "Jeddah", value: "Roughly 170 km, about 2 to 2.5 hours" },
      { label: "Booking", value: "Available 24 hours a day" },
    ],
    sections: [
      {
        heading: "Getting to Taif",
        paragraphs: [
          "Most visitors come by road from [Makkah](/routes/makkah-to-taif) or [Jeddah](/routes/jeddah-to-taif), and a few fly into Taif International Airport. See the [Taif Airport](/airports/taif-airport) page for pickups and departures.",
        ],
      },
      {
        heading: "Hotels and resorts",
        paragraphs: [
          "Hotels and resorts are spread out, and some are well off the main roads. Give us the name and a location pin, and tell us what time you are arriving. Check-in is often in the afternoon, so many visitors go to a viewpoint or a farm first.",
        ],
        cta: true,
      },
      {
        heading: "What to see, and how to get there",
        paragraphs: [
          "The places visitors ask for are in different parts of the area, so a driver for a few hours is practical.",
        ],
        bullets: [
          "Al Hada, on the mountain road, with views over the escarpment",
          "Al Shafa, the highland area known for its cool weather and farms",
          "Shubra Palace, a historic building in the city that houses a museum",
          "Rose farms, best in spring when the roses are harvested; check the dates before you plan around them",
        ],
        subsections: [
          {
            heading: "Weather and clothing",
            paragraphs: [
              "It can be cool, misty or windy at height, even in summer evenings. Take a jacket.",
            ],
          },
        ],
      },
      {
        heading: "Mountain roads",
        paragraphs: [
          "Roads up to and down from Taif have steep and winding sections. If anyone in your group gets car sick, tell us and we will drive gently and stop for a break. In the summer and on school holidays, the roads are busy at the weekend.",
        ],
      },
      {
        heading: "Going down to Makkah or Jeddah",
        paragraphs: [
          "For Umrah, the road to Makkah passes the miqat at Qarn al-Manazil (As-Sayl al-Kabir), and we can plan a stop: see [Taif to Makkah](/routes/taif-to-makkah). For a flight or the coast, see [Taif to Jeddah](/routes/taif-to-jeddah).",
        ],
      },
      {
        heading: "Families and groups",
        paragraphs: [
          "A weekend stay means more bags. Tell us how many people and bags and we will suggest a vehicle. See [the fleet](/fleet), and [private chauffeur](/services/private-chauffeur) if you want one driver for the whole stay.",
        ],
      },
    ],
    airportSlug: "taif-airport",
    routeSlugs: [
      "taif-airport-to-makkah",
      "taif-to-makkah",
      "taif-to-jeddah",
      "makkah-to-taif",
    ],
    faqs: [
      {
        question: "How far is Taif from Makkah?",
        answer:
          "Roughly 90 km by road, about one and a half hours depending on the route and traffic.",
      },
      {
        question: "Can you take us to a resort outside the city?",
        answer:
          "Yes. Give us the name and a location pin and we will plan the pickup.",
      },
      {
        question: "Can I hire a driver for a day in Taif?",
        answer:
          "Yes. Tell us the places and the times and we will arrange it.",
      },
      {
        question: "Is the road difficult?",
        answer:
          "It has steep and winding sections. A calm driver and a break help.",
      },
      {
        question: "When are the roses in bloom?",
        answer:
          "Roses are generally harvested in spring. Dates change from year to year, so check before you plan a trip around it.",
      },
      {
        question: "How do I get a price?",
        answer:
          "Send the pickup, the destination, the date and the number of passengers. We confirm the vehicle and the price before you travel.",
      },
    ],
  },
];

export const locationPages: LocationPage[] = baseLocationPages.map((page) => ({
  ...page,
  sections: [...page.sections, ...(locationExtras[page.slug] ?? []), ...(placeTopups[page.slug] ?? [])],
}));

export function getLocationPage(slug: string) {
  return locationPages.find((location) => location.slug === slug);
}
