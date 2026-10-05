import type { Faq } from "@/lib/content/types";

export type ZiyaratSite = {
  id: string;
  name: string;
  tag: string;
  effort: "climb" | "varies";
  effortLabel: string;
  about: string;
  practical: string;
  bestFor: string;
};

export const makkahSites: ZiyaratSite[] = [
  {
    id: "jabal-al-noor",
    name: "Jabal al-Noor & Cave of Hira",
    tag: "Mountain and cave",
    effort: "climb",
    effortLabel: "Steep climb on steps",
    about:
      "Jabal al-Noor is the mountain of the Cave of Hira, associated with the first revelation to the Prophet Muhammad (peace be upon him).",
    practical:
      "The driver takes you as close as practical by road, but the final approach is on foot. Reaching the cave means a steep climb on steps, which takes far more time and energy than an ordinary sightseeing stop.",
    bestFor: "Visitors comfortable with substantial walking and climbing.",
  },
  {
    id: "jabal-thawr",
    name: "Jabal Thawr & Cave of Thawr",
    tag: "Mountain and cave",
    effort: "climb",
    effortLabel: "Climbing involved",
    about:
      "South of Makkah, Jabal Thawr is associated with the Cave of Thawr, where the Prophet and Abu Bakr sheltered at the start of the Hijrah to Madinah.",
    practical:
      "Like Jabal al-Noor, it involves climbing, so heat, fitness and the time you have all matter. Plan the two mountains one at a time unless your group is fit and has the whole morning.",
    bestFor: "Groups who are fit and have time for a climb.",
  },
  {
    id: "mina-arafat-muzdalifah",
    name: "Mina, Arafat & Muzdalifah",
    tag: "Sites of the Hajj rites",
    effort: "varies",
    effortLabel: "Walking varies by stop",
    about:
      "These places are associated with the rites of Hajj, and Arafat includes Jabal al-Rahmah. Some visitors see them outside the Hajj season as part of a historical itinerary.",
    practical:
      "They lie on the same side of Makkah, so they are usually planned as one group of stops. Access can change on the day.",
    bestFor: "Groups who want several stops in one run.",
  },
  {
    id: "jannat-al-mualla",
    name: "Jannat al-Mu'alla",
    tag: "Historic cemetery",
    effort: "varies",
    effortLabel: "Walking varies by access",
    about:
      "The historic cemetery of Makkah, where Khadijah bint Khuwaylid, the Prophet's first wife, is buried.",
    practical:
      "A respectful, short stop. Follow the instructions of site staff on the day, since rules on entry and timing can change.",
    bestFor: "A quiet stop that fits easily into a longer morning.",
  },
];

export const madinahSites: ZiyaratSite[] = [
  {
    id: "quba",
    name: "Quba Mosque",
    tag: "Mosque",
    effort: "varies",
    effortLabel: "No climbing involved",
    about:
      "On the southern edge of the city, Quba Mosque is traditionally described as the first mosque built in Islam.",
    practical:
      "A common first stop on a Madinah itinerary, and an easy one to reach by car.",
    bestFor: "Families, older travellers and first-time visitors.",
  },
  {
    id: "qiblatain",
    name: "Masjid al-Qiblatain",
    tag: "Mosque",
    effort: "varies",
    effortLabel: "No climbing involved",
    about:
      "The mosque where the direction of prayer is said to have changed from Jerusalem to the Kaaba, which is why it is known as the mosque of the two qiblas.",
    practical:
      "It is usually visited alongside the other city stops, so it is easy to place in a route.",
    bestFor: "A short stop between longer visits.",
  },
  {
    id: "uhud",
    name: "Mount Uhud & the martyrs' cemetery",
    tag: "Mountain and cemetery",
    effort: "varies",
    effortLabel: "Walking varies by stop",
    about:
      "Mount Uhud is the site of the Battle of Uhud. The martyrs' cemetery beside it is where Hamza ibn Abd al-Muttalib and other companions are buried.",
    practical:
      "Visitors usually combine the mountain area and the cemetery in one visit, so plan more time here than at a mosque stop.",
    bestFor: "A longer, reflective stop in the middle of the morning.",
  },
  {
    id: "al-khandaq",
    name: "Seven Mosques & the Al-Khandaq area",
    tag: "Small mosques",
    effort: "varies",
    effortLabel: "No climbing involved",
    about:
      "The area is associated with the Battle of the Trench. Visitors commonly refer to it as the Seven Mosques.",
    practical:
      "A cluster of small mosques close together, so the area suits short stops.",
    bestFor: "Visitors who prefer short, easy stops.",
  },
  {
    id: "ghamama",
    name: "Masjid al-Ghamama",
    tag: "Optional stop",
    effort: "varies",
    effortLabel: "No climbing involved",
    about:
      "Masjid al-Ghamama is a mosque traditionally associated with the Prophet's prayer for rain.",
    practical:
      "An optional stop that fits into a city route when time and traffic allow.",
    bestFor: "Groups with a little time left in the morning.",
  },
];

export const plannerStops: Record<"Makkah" | "Madinah", string[]> = {
  Makkah: [
    "Jabal al-Noor & Cave of Hira",
    "Jabal Thawr & Cave of Thawr",
    "Mina, Arafat & Muzdalifah",
    "Jannat al-Mu'alla",
  ],
  Madinah: [
    "Quba Mosque",
    "Masjid al-Qiblatain",
    "Mount Uhud & the martyrs' cemetery",
    "Seven Mosques / Al-Khandaq area",
    "Masjid al-Ghamama",
    "Dates market stop",
  ],
};

export const ziyaratFaqs: Faq[] = [
  {
    question: "What is a Ziyarat tour?",
    answer:
      "Ziyarat means visiting the historical and religious places connected with Islamic history. A Ziyarat tour with us is private transport between those places: a car, a driver and a route planned around your group. We provide the transport, not religious guidance.",
  },
  {
    question: "Do you provide Ziyarat tours in both Makkah and Madinah?",
    answer:
      "Yes. Makkah and Madinah each have their own set of places, so the route is planned separately for each city. If you are visiting both, book them for different days.",
  },
  {
    question: "Can I choose which places we visit?",
    answer:
      "Yes. Tell us the places, or use the planner above, and we plan the order. The order can change on the day if access, traffic or prayer times require it.",
  },
  {
    question: "Does the driver wait while we visit each site?",
    answer:
      "Yes, according to the arrangement we agree with you. Tell us how long you expect at each place so the plan is realistic. If you want more time at one stop, tell the driver and the rest of the route is adjusted.",
  },
  {
    question: "Can we make a private family Ziyarat trip?",
    answer:
      "Yes. The vehicle is for your family only, so you set the pace, the rest breaks and the length of each visit. Tell us the number of adults, children and older travellers when you ask for a quote.",
  },
  {
    question: "Can elderly passengers join a Ziyarat tour?",
    answer:
      "Often, yes, with a realistic plan. Some places involve walking, steps and standing, and a few involve climbing. Mention limited mobility before you book so we choose the places and the vehicle accordingly.",
  },
  {
    question: "Are Jabal al-Noor and Jabal Thawr suitable for everyone?",
    answer:
      "No. Both involve a climb, and Jabal al-Noor's is on steep steps. The driver can take you as close as practical by road, but the climb itself is on foot. If anyone in your group cannot manage it, we suggest places that are easier to reach.",
  },
  {
    question: "Can we visit Ziyarat places on the day we arrive?",
    answer:
      "Often, if timing allows. It depends on your flight, hotel check-in, luggage, how tired the group is and how much daylight is left. We would rather plan a shorter, comfortable trip than promise a full tour.",
  },
  {
    question: "Can we add Ziyarat to an airport transfer?",
    answer:
      "Yes, for example from [Madinah Airport](/airports/madinah-airport) to Ziyarat and then to your hotel, or from the hotel to Ziyarat and on to the airport. Whether it fits depends on your flight time and the places you choose.",
  },
  {
    question: "Can we include a dates market stop in Madinah?",
    answer:
      "Yes, if time and the route allow. Ask when you book. We do not send groups to one fixed market, so say if you have a preference.",
  },
  {
    question: "How is a private Ziyarat tour priced?",
    answer:
      "By the city, the vehicle, the number of passengers, the places, the time involved and where you are picked up. Send us your plan and we confirm the price before you travel.",
  },
  {
    question: "What information do you need to give me a quote?",
    answer:
      "The city, your pickup place, the date and preferred start time, the number of passengers, any luggage, and the places you want to visit. Add any mobility needs or a child seat requirement at the same time.",
  },
];
