import type { Faq } from "@/lib/content/types";

// Per-route planning notes for the /routes hub. Distances and times come from the
// route pages themselves; only the practical notes live here.
export const routeNotes: Record<string, { goodFor: string; planFor: string }> = {
  "jeddah-airport-to-makkah": {
    goodFor: "Umrah arrivals heading straight to a Makkah hotel.",
    planFor: "Immigration and baggage time after landing, and the drop-off point near the Haram.",
  },
  "jeddah-airport-to-madinah": {
    goodFor: "Travellers who land in Jeddah but begin their trip in Madinah.",
    planFor: "A long road after a flight: luggage, a rest stop and an arrival hotel that is ready.",
  },
  "makkah-to-jeddah-airport": {
    goodFor: "Departures, when the pickup is worked back from a flight.",
    planFor: "Your airline's check-in rules, hotel checkout and the slow streets near the Haram.",
  },
  "makkah-to-jeddah": {
    goodFor: "Moving on to a Jeddah hotel, home or meeting rather than the airport.",
    planFor: "Leaving central Makkah outside the prayer rush, and the exact Jeddah address.",
  },
  "makkah-to-madinah": {
    goodFor: "The usual move after time in Makkah; families with luggage.",
    planFor: "Journey length, rest and prayer stops, and hotel pickup and drop-off.",
  },
  "makkah-to-taif": {
    goodFor: "A day in the mountains or a few cool days away from the coast.",
    planFor: "The climb, the weather on the way up, and whether you want a return pickup.",
  },
  "jeddah-to-makkah": {
    goodFor: "Hotels and addresses in Jeddah heading to Makkah, including same-day Umrah.",
    planFor: "Where in Jeddah you start, and Thursday evenings and Fridays on the road.",
  },
  "jeddah-to-madinah": {
    goodFor: "One vehicle from a Jeddah hotel to Madinah, with no changes.",
    planFor: "Departure time, stops on the way and how rested the group is.",
  },
  "jeddah-to-taif": {
    goodFor: "Weekend or day trips from the coast.",
    planFor: "Friday traffic, and one-way versus return.",
  },
  "madinah-to-makkah": {
    goodFor: "Pilgrims continuing to Makkah after their days in Madinah.",
    planFor: "Checkout timing, planned stops and a miqat stop if you want one.",
  },
  "madinah-to-jeddah": {
    goodFor: "Heading to a Jeddah address, or to the airport for a flight.",
    planFor: "A real margin for a flight, since the road is long.",
  },
  "taif-to-makkah": {
    goodFor: "Returning to Makkah, or Umrah from a stay in Taif.",
    planFor: "The descent, the weather change and a miqat stop if wanted.",
  },
  "taif-to-jeddah": {
    goodFor: "Going back to the coast or on to the airport.",
    planFor: "Fog or rain on the way down, and the margin before a flight.",
  },
  "madinah-airport-to-makkah": {
    goodFor: "Landing in Madinah and carrying straight on to Makkah.",
    planFor: "Immigration time, a five-hour road after a flight and a miqat stop if wanted.",
  },
  "taif-airport-to-makkah": {
    goodFor: "Arriving in Taif and continuing down to Makkah.",
    planFor: "Fewer flights at TIF, so tell us early if your time changes.",
  },
};

export const originOrder = [
  "Jeddah Airport",
  "Makkah",
  "Jeddah",
  "Madinah",
  "Taif",
  "Madinah Airport",
  "Taif Airport",
];

export const featured: { slug: string; title: string; why: string }[] = [
  {
    slug: "jeddah-airport-to-makkah",
    title: "Jeddah Airport to Makkah",
    why: "The most common first journey for Umrah travellers, because Makkah has no commercial airport. It is short, so the real variable is the airport itself: how long you take to clear immigration and collect bags.",
  },
  {
    slug: "makkah-to-madinah",
    title: "Makkah to Madinah",
    why: "The longest regular journey. Choose it when you want to go between the holy cities in one vehicle, and decide first whether you prefer a day or a night departure.",
  },
  {
    slug: "jeddah-to-madinah",
    title: "Jeddah to Madinah",
    why: "For travellers who start from a Jeddah hotel rather than the airport. Rest the night before if you can; it is a four-hour drive.",
  },
  {
    slug: "madinah-to-makkah",
    title: "Madinah to Makkah",
    why: "The route where a miqat stop is most often requested. Give the checkout time and say whether the stop is wanted, so the pickup can allow for it.",
  },
  {
    slug: "makkah-to-jeddah-airport",
    title: "Makkah to Jeddah Airport",
    why: "The one to plan backwards from your flight. Start with the airline's check-in rule, then add the drive and the hotel exit.",
  },
  {
    slug: "makkah-to-taif",
    title: "Makkah to Taif",
    why: "A change of scene rather than a pilgrimage leg: cooler air, parks and markets. Day trips work well if the return pickup is agreed before you go.",
  },
];

export const umrahPatterns = [
  {
    slug: "jeddah-airport-to-makkah",
    title: "Jeddah Airport to Makkah",
    copy: "For travellers who arrive through Jeddah and head directly to Makkah.",
  },
  {
    slug: "makkah-to-madinah",
    title: "Makkah to Madinah",
    copy: "A common intercity journey after time in Makkah.",
  },
  {
    slug: "madinah-to-jeddah",
    title: "Madinah to Jeddah",
    copy: "For travellers finishing their stay in Madinah and continuing towards Jeddah.",
  },
  {
    slug: "madinah-airport-to-makkah",
    title: "Madinah Airport to Makkah",
    copy: "For travellers who arrive in Madinah before continuing to Makkah.",
  },
];

export const itineraries: { title: string; legs: { label: string; slug: string }[]; note: string }[] = [
  {
    title: "Jeddah Airport → Makkah → Madinah → Jeddah",
    legs: [
      { label: "Jeddah Airport to Makkah", slug: "jeddah-airport-to-makkah" },
      { label: "Makkah to Madinah", slug: "makkah-to-madinah" },
      { label: "Madinah to Jeddah", slug: "madinah-to-jeddah" },
    ],
    note: "The classic Umrah loop: land, stay in Makkah, travel to Madinah, then return to Jeddah for the flight home.",
  },
  {
    title: "Madinah Airport → Makkah → Jeddah Airport",
    legs: [
      { label: "Madinah Airport to Makkah", slug: "madinah-airport-to-makkah" },
      { label: "Makkah to Jeddah Airport", slug: "makkah-to-jeddah-airport" },
    ],
    note: "For travellers who fly into Madinah and out of Jeddah, which avoids a long drive back.",
  },
  {
    title: "Jeddah Airport → Makkah → Taif → Jeddah",
    legs: [
      { label: "Jeddah Airport to Makkah", slug: "jeddah-airport-to-makkah" },
      { label: "Makkah to Taif", slug: "makkah-to-taif" },
      { label: "Taif to Jeddah", slug: "taif-to-jeddah" },
    ],
    note: "Umrah followed by a few cooler days in the mountains before the flight.",
  },
];

export const varyReasons = [
  { title: "Traffic", copy: "The roads between the cities fill on Thursday evenings, Fridays and in busy seasons." },
  { title: "Hotel-area congestion", copy: "Streets near the Haram and the Prophet's Mosque slow right down around prayers." },
  { title: "Airport procedures", copy: "Immigration and baggage collection can take far longer than the drive that follows." },
  { title: "Luggage loading", copy: "Large groups and heavy bags add minutes at both ends." },
  { title: "Checkpoints", copy: "There are checkpoints on the roads into Makkah, and queues vary by day." },
  { title: "Road conditions", copy: "Mountain roads around Taif are slower in fog or rain." },
  { title: "Prayer and rest stops", copy: "On long routes a stop is part of the journey, and it adds time." },
  { title: "Season", copy: "Ramadan, Hajj and school holidays all change how long a road takes." },
  { title: "Exact pickup point", copy: "A pin in the north of Jeddah and one in the south are very different starts." },
  { title: "Flight timing", copy: "When the trip ends at an airport, the flight, not the road, sets the real deadline." },
];

export const seasons = [
  { title: "Ramadan", copy: "Travel demand and traffic can increase, especially around busy periods, so allow more time and book early." },
  { title: "Hajj season", copy: "Travel restrictions, checkpoints and traffic conditions can change. Follow official guidance and your operator's instructions." },
  { title: "Summer", copy: "Heat makes long road journeys more tiring. Carry water, and tell us if anyone finds the heat hard." },
  { title: "Winter", copy: "Mountain areas around Taif can be cooler, with fog or reduced visibility, especially early and late in the day." },
];

export const planSteps = [
  "List every leg of the trip, in order.",
  "Check the approximate time for each leg.",
  "Add a realistic buffer, more on the long roads.",
  "Think about hotel check-in and checkout times.",
  "Work back from any flight departure.",
  "Share passengers and luggage for every leg.",
  "Confirm the vehicle and the pickup point for each leg.",
];

export const routesHubFaqs: Faq[] = [
  {
    question: "How long is the drive from Makkah to Madinah?",
    answer:
      "Roughly 450 km, which usually takes about four and a half to five hours by road before stops. The actual time depends on traffic, the time of day and how many stops you make for prayer, food or rest. See [Makkah to Madinah](/routes/makkah-to-madinah) for how to plan the day.",
  },
  {
    question: "How far is Jeddah Airport from Makkah?",
    answer:
      "Roughly 100 km, usually one to one and a half hours. Traffic and the exact hotel can add time, and so can the Umrah and Hajj seasons. See [Jeddah Airport to Makkah](/routes/jeddah-airport-to-makkah).",
  },
  {
    question: "Are the distances and journey times exact?",
    answer:
      "No. They are approximate, written to help you plan, not live navigation estimates. Traffic, the time of day, road conditions, the season and your exact pickup and drop-off points all change the real journey.",
  },
  {
    question: "Can I book a return trip?",
    answer:
      "Yes. Tell us both directions and both dates, or the time you would like to be collected for the way back, and we plan the two journeys together. A return pickup agreed in advance is easier to arrange than an open-ended one.",
  },
  {
    question: "Can I book a route that is not listed?",
    answer:
      "You can ask. The routes here are the most requested, not the only ones. Contact us with your pickup and destination and we say whether it can be arranged, and with which vehicle.",
  },
  {
    question: "Can I book airport-to-hotel transfers?",
    answer:
      "Yes, from Jeddah, Madinah and Taif airports to hotels in the cities we serve. Send your flight number and hotel name. The [airports page](/airports) explains each airport.",
  },
  {
    question: "Can I combine multiple routes?",
    answer:
      "Yes. A trip such as Jeddah Airport to Makkah, then Makkah to Madinah, then Madinah to Jeddah is just three bookings made together. Give us the dates for each leg and we check that the timings between them make sense.",
  },
  {
    question: "How should I choose a vehicle?",
    answer:
      "By passengers, luggage and the length of the journey together. A short city hop is easy in a small car, while a four-hour road with several suitcases needs more room. See the [fleet](/fleet) or tell us your numbers.",
  },
  {
    question: "Do journey times include stops?",
    answer:
      "The times shown are typical road time. Planned stops for prayer, food, rest or a miqat add to them, which is why the Madinah to Makkah times say 'plus planned stops'. Tell us what stops you want when you book.",
  },
  {
    question: "How early should I leave for an airport?",
    answer:
      "Earlier than the road estimate alone suggests. Start from your airline's check-in and security requirements, then add the drive, the hotel exit and a margin for traffic. Airline rules differ, so we do not give one fixed buffer.",
  },
];
