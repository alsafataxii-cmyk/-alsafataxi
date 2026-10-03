import type { ContentSection, Fact, Faq } from "@/lib/content/types";

export const umrahPage = {
  metaTitle: "Umrah Transportation in Makkah & Madinah",
  metaDescription:
    "Plan the transport for each stage of your Umrah: airport pickup, Makkah hotel, Madinah, Ziyarat and the flight home, for individuals, families and groups.",
  h1: "Umrah Transportation in Makkah, Madinah, Jeddah & Taif",
  heroDescription:
    "Private transport for every stage of your Umrah trip: airport, hotel, Makkah, Madinah and Ziyarat.",
  intro:
    "An Umrah trip is several journeys in a row, each with its own problems: a long flight into Jeddah, a road to Makkah, a hotel near a restricted area, a 450 km drive to Madinah, Ziyarat, and a flight home. This page walks through the trip in order and links to the page for each stage, so you can book all of it or only the parts you need. We arrange the transport only; questions about the rites are for your group leader or a qualified scholar.",
  facts: [
    { label: "Airports", value: "Jeddah (JED) and Madinah (MED)" },
    { label: "Cities", value: "Jeddah, Makkah, Madinah and Taif" },
    { label: "Booking", value: "Available 24 hours a day" },
  ] as Fact[],
  sections: [
    {
      heading: "Arriving",
      paragraphs: [
        "Most pilgrims fly into King Abdulaziz International Airport in Jeddah, because Makkah has no commercial airport. From there the road to Makkah is about 100 km. Those who begin in Madinah fly into Prince Mohammad bin Abdulaziz International Airport instead. Send us the flight number, the number of passengers and bags and the hotel name, and the pickup follows your actual arrival.",
      ],
      subsections: [
        {
          heading: "Jeddah to Makkah",
          paragraphs: [
            "See [Jeddah Airport to Makkah](/routes/jeddah-airport-to-makkah) for what to expect on landing, the drive and the drop-off near the Haram. The [Jeddah Airport](/airports/jeddah-airport) page covers arrivals and departures in general.",
          ],
        },
        {
          heading: "Madinah first",
          paragraphs: [
            "If you start in Madinah, see [Madinah Airport](/airports/madinah-airport) for the transfer to a hotel by the Prophet's Mosque. If you go from the airport straight to Makkah, see [Madinah Airport to Makkah](/routes/madinah-airport-to-makkah).",
          ],
        },
      ],
      cta: true,
    },
    {
      heading: "In Makkah",
      paragraphs: [
        "Most of the transport in Makkah is short and depends on where cars can stop near the Haram, which changes with the crowd and the prayers. Pilgrims also commonly need a ride to Masjid Aisha (At-Tan'im) and back. See [Makkah taxi service](/locations/makkah) for how to plan around the Haram, and [hotel transfers](/services/hotel-transfers) for moving between hotels. Entry to Makkah is restricted to Muslims.",
      ],
    },
    {
      heading: "Between Makkah and Madinah",
      paragraphs: [
        "The two cities are about 450 km apart, a drive of about four and a half to five hours without stops, and most pilgrims travel after Umrah. A private car lets your group leave when it is ready, carry its luggage and stop for prayer and rest. See [Makkah to Madinah](/routes/makkah-to-madinah).",
        "Going the other way, pilgrims commonly enter ihram at Dhul Hulayfah (Abyar Ali), a short drive out of Madinah, and we plan the stop. See [Madinah to Makkah](/routes/madinah-to-makkah). Travellers on the Taif road commonly stop at Qarn al-Manazil: see [Taif to Makkah](/routes/taif-to-makkah).",
      ],
    },
    {
      heading: "Ziyarat",
      paragraphs: [
        "Many pilgrims add Ziyarat in Makkah, in Madinah or in both. The places are spread around the cities, and several involve climbing, so a driver who waits is useful. See [Ziyarat tours](/services/ziyarat-tours) for what each place is and how a trip is planned.",
      ],
    },
    {
      heading: "Going home",
      paragraphs: [
        "The way home is planned from the flight. See [Makkah to Jeddah Airport](/routes/makkah-to-jeddah-airport) for working out the pickup time, and [Madinah to Jeddah](/routes/madinah-to-jeddah) if you end in Madinah. Pilgrims often carry more luggage on the way home, with gifts and Zamzam water, so count the bags before you choose a vehicle.",
      ],
    },
    {
      heading: "Families, groups and older pilgrims",
      paragraphs: [
        "A Premium SUV takes five passengers and four bags, and a Luxury Van takes eight passengers and six bags. For a bigger group, we plan several vehicles with pickups at the same time. See [the fleet](/fleet). For older pilgrims or anyone with limited mobility, tell us when you book so we can plan the drop-off points and the pace of the stops. If you need a child seat, tell us too.",
      ],
    },
    {
      heading: "Seasons and timing",
      paragraphs: [
        "Ramadan and the Hajj season are the busiest times, and roads and the areas around the mosques are most crowded. Book early, leave more time than usual for every journey, and keep your documents and any permits in your hand luggage, because there are security checkpoints on roads into Makkah.",
      ],
    },
    {
      heading: "What to send when you book",
      paragraphs: ["The following helps us plan well:"],
      bullets: [
        "Flight numbers, dates and arrival and departure times",
        "Hotel names in each city and the check-in and checkout dates",
        "Number of passengers and bags",
        "Whether you need stops for prayer or the miqat",
        "Any mobility needs or a child seat",
      ],
    },
  ] as ContentSection[],
  faqs: [
    {
      question: "Can I book only part of the trip?",
      answer:
        "Yes. You can book one transfer, or the whole trip. Tell us which stages you need.",
    },
    {
      question: "How do I get from Jeddah Airport to Makkah for Umrah?",
      answer:
        "Book a private transfer with your flight number and hotel name. The journey is about 100 km and usually takes one to one and a half hours. See [Jeddah Airport to Makkah](/routes/jeddah-airport-to-makkah).",
    },
    {
      question: "Can you plan a stop at the miqat?",
      answer:
        "Yes. Tell us where you need to stop, for example Dhul Hulayfah (Abyar Ali) on the road from Madinah, and we will include it.",
    },
    {
      question: "Can you wait while we perform Umrah?",
      answer:
        "Umrah can take several hours. Tell us how long you expect so we can plan either a waiting driver or a later pickup.",
    },
    {
      question: "Can you take a group of pilgrims on one flight?",
      answer:
        "Yes. Tell us the number of passengers, the bags, the dates and the hotels, and we plan the vehicles and the pickups together.",
    },
    {
      question: "What if the group leader sets the schedule?",
      answer:
        "Send us the schedule and we plan around it. If it changes, message us as early as you can.",
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
