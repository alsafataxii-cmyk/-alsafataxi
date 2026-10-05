import type { VehicleRoutePage } from "@/lib/content/vehicle-routes/types";
import { img } from "@/lib/content/vehicle-routes/images";

const yukonNote =
  "The GMC Yukon XL is one of the SUV models we use. Seating and luggage space depend on the vehicle assigned, so tell us your group and bags and we confirm the fit before you travel.";

export const jeddahToMakkahYukon: VehicleRoutePage = {
  route: "jeddah-to-makkah",
  vehicle: "yukon",
  metaTitle: "GMC Yukon Taxi Jeddah to Makkah",
  metaDescription:
    "Book a GMC Yukon XL with a private driver from Jeddah to Makkah: a full-size SUV for families and groups who want more space. About 80 km, around an hour.",
  h1: "GMC Yukon Taxi from Jeddah to Makkah",
  eyebrow: "Full-size SUV · private driver",
  lead: "A GMC Yukon XL with a private driver from your Jeddah address to Makkah, for families and groups who prefer the space and ride of a full-size SUV.",
  hero: "premium",
  heroImage: img.yukon,
  heroPoints: ["GMC Yukon XL, full-size SUV", "Private driver, direct journey", "Pickup anywhere in Jeddah"],
  primaryCta: "Request a Yukon Transfer",
  mobileCta: "Request a Yukon",
  whatsappText: "Hello Al Safa Taxi, I would like a GMC Yukon from Jeddah to Makkah.",
  blocks: [
    {
      type: "answer",
      question: "Can I book a GMC Yukon taxi from Jeddah to Makkah?",
      answer:
        "Yes. You can request a GMC Yukon XL with a private driver from Jeddah to Makkah, roughly 80 km and usually about an hour in normal traffic. We confirm the vehicle and price for your date before you travel.",
    },
    {
      type: "prose",
      heading: "Why travelers choose a GMC Yukon",
      paragraphs: [
        "People who ask for a Yukon by name usually want two things: space and a vehicle that feels solid on the highway. The Yukon XL is a full-size SUV, the long-wheelbase version of the Yukon, so there is more room in the cabin and behind the seats than in a sedan.",
        "It suits families who want to travel together without the feel of a van, guests being collected for a visit to Makkah, and travellers who simply prefer an SUV. It is not a necessity for a one-hour road. It is a choice about comfort and how the group wants to travel.",
      ],
      aside: yukonNote,
    },
    {
      type: "compare",
      heading: "Yukon or sedan?",
      columns: ["GMC Yukon XL", "Sedan"],
      rows: [
        ["Vehicle type", "Full-size SUV", "Saloon car"],
        ["Passenger space", "More room per passenger", "Comfortable for two or three"],
        ["Luggage", "More practical for a family's bags", "Suits light luggage"],
        ["Group travel", "Keeps a family together", "Small groups only"],
      ],
      note: "For one or two people with cabin bags, a sedan does the job well. The Yukon makes sense when space matters to you.",
    },
    {
      type: "prose",
      heading: "The drive and your private driver",
      tone: "sand",
      paragraphs: [
        "The vehicle is yours and your group's for the journey: no shared seats, no other stops, and a driver who goes from your pickup point to your destination. If you want a short stop on the way, ask when you book.",
        "The road is busy on Thursday evenings, Fridays and in the Umrah and Hajj seasons, and the slowest parts are usually the two ends: leaving your district in Jeddah and reaching the hotel area near the Masjid al-Haram. Give us a map pin for the pickup and the name of your Makkah hotel, and we plan both ends properly.",
      ],
    },
    {
      type: "cards",
      heading: "Who the Yukon suits on this route",
      columns: 3,
      items: [
        { title: "Families", copy: "Parents and children travelling together, with room for bags from a stay in Jeddah." },
        { title: "Hosted guests", copy: "Relatives or visitors being collected and taken to Makkah, where the vehicle makes a good first impression." },
        { title: "SUV preference", copy: "Travellers who simply prefer a higher seat and a larger vehicle on the highway." },
      ],
    },
    {
      type: "prose",
      heading: "Pickup in Jeddah, drop-off in Makkah",
      paragraphs: [
        "Jeddah stretches a long way along the coast. Send the address and a map pin, and if you are in a compound or a building with a gate, tell us where an SUV can wait.",
        "Near the Haram, roads are controlled and a vehicle cannot always reach every hotel door. Send the hotel name, and we confirm the practical drop-off point before the day.",
      ],
    },
    {
      type: "cta",
      heading: "Request a Yukon transfer",
      copy: "Tell us the pickup in Jeddah, the Makkah hotel, the date and time, and the number of passengers and bags. We confirm the Yukon and the price.",
      button: "Request a Yukon Transfer",
      whatsapp: "Hello Al Safa Taxi, please quote a GMC Yukon from Jeddah to Makkah.",
      dark: true,
    },
    {
      type: "faq",
      title: "GMC Yukon Jeddah to Makkah FAQs",
      faqs: [
        { question: "Who benefits most from choosing a Yukon?", answer: "Families and small groups who want more space than a sedan, and travellers who prefer an SUV. For two people with light bags, a sedan is usually enough." },
        { question: "How many passengers can the Yukon take?", answer: "It depends on the vehicle assigned and how much luggage you have. Tell us the group and the bags, and we confirm the fit before you travel." },
        { question: "Can I request a Yukon specifically?", answer: "Yes. We confirm the Yukon for your date, or tell you in advance if a comparable vehicle would be used instead." },
        { question: "Is the Yukon journey private?", answer: "Yes. The vehicle and driver are for your group only, from your pickup point to your destination." },
      ],
    },
    {
      type: "related",
      heading: "Related pages",
      links: [
        { label: "Jeddah to Makkah taxi", href: "/routes/jeddah-to-makkah", note: "The route for every vehicle." },
        { label: "GMC Yukon, Makkah to Madinah", href: "/routes/makkah-to-madinah/yukon", note: "The Yukon on the long road north." },
        { label: "Hyundai Staria, Jeddah to Makkah", href: "/routes/jeddah-to-makkah/staria", note: "A minivan for larger groups." },
        { label: "Our fleet", href: "/fleet", note: "The Yukon XL and our other models." },
      ],
    },
  ],
};

export const makkahToMadinahYukon: VehicleRoutePage = {
  route: "makkah-to-madinah",
  vehicle: "yukon",
  metaTitle: "GMC Yukon Taxi Makkah to Madinah",
  metaDescription:
    "Travel the 450 km from Makkah to Madinah in a private GMC Yukon XL: a full-size SUV, hotel pickup and drop-off, and stops planned around your group.",
  h1: "GMC Yukon Taxi from Makkah to Madinah",
  eyebrow: "Long-distance SUV transfer",
  lead: "About five hours on the road between the holy cities in a private GMC Yukon XL, from your Makkah hotel to your Madinah hotel, at a pace that suits your group.",
  hero: "premium",
  heroImage: img.yukon,
  heroSideImage: img.kaaba,
  heroPoints: ["Full-size SUV for a long road", "Hotel to hotel", "Stops planned with you"],
  primaryCta: "Request a Yukon for This Journey",
  mobileCta: "Request a Yukon",
  whatsappText: "Hello Al Safa Taxi, I would like a GMC Yukon from Makkah to Madinah.",
  blocks: [
    {
      type: "answer",
      question: "Can I travel from Makkah to Madinah in a GMC Yukon?",
      answer:
        "Yes. A GMC Yukon XL with a private driver can collect you from your Makkah hotel and drive to Madinah, roughly 450 km and about four and a half to five hours under typical conditions, before any stops.",
    },
    {
      type: "prose",
      heading: "Is a Yukon worth choosing for a long intercity journey?",
      paragraphs: [
        "On a short city ride the vehicle barely matters. On five hours of highway it matters a great deal. Room to stretch your legs, a seat that is not squeezed between two others, and luggage that is not pressed against your back all make a difference by the third hour.",
        "That is the honest case for a Yukon on this road: more space for each passenger over a long journey, in a full-size SUV rather than a van. If you are travelling alone or as a couple with little luggage, a sedan will do the job and cost less, and we will tell you that. If you are a family of four or five with a week's worth of bags, the larger vehicle is usually worth it.",
      ],
      aside: yukonNote,
    },
    {
      type: "cards",
      heading: "When to choose which",
      columns: 2,
      items: [
        { title: "A Yukon makes sense when", copy: "You are a family or small group, you have several suitcases, older passengers want room to move, or you simply prefer an SUV for a long drive." },
        { title: "A sedan is probably enough when", copy: "You are one to three people with light luggage and comfort over five hours is not a concern." },
      ],
    },
    {
      type: "timeline",
      heading: "Planning the journey",
      style: "steps",
      steps: [
        { title: "Choose a departure time", copy: "Work back from the time you want to reach your Madinah hotel." },
        { title: "Agree your stops", copy: "Decide where you want to stop for prayer, food or rest before you set off." },
        { title: "Confirm pickup", copy: "The practical pickup point near your Makkah hotel, and the luggage count." },
        { title: "Arrival", copy: "Drop-off at the agreed point for your Madinah hotel." },
      ],
    },
    {
      type: "prose",
      heading: "Hotel pickup and hotel drop-off",
      tone: "sand",
      paragraphs: [
        "Both ends of this journey are near busy mosques. In Makkah, roads close to the Masjid al-Haram are controlled and crowded around prayers; in Madinah, some streets near Al-Masjid an-Nabawi become pedestrian areas. An SUV cannot always stop at the hotel door in either city.",
        "Send both hotel names when you book. We confirm the pickup and drop-off points in advance, and if anyone in your group finds walking difficult, we look for the closest stop the vehicle can reach.",
      ],
    },
    {
      type: "checklist",
      heading: "Before you book the Yukon",
      items: [
        "Number of passengers and their ages, if there are children",
        "Number of suitcases and large items",
        "Makkah and Madinah hotel names",
        "Date and preferred departure time",
        "The stops you would like on the way",
      ],
    },
    {
      type: "faq",
      title: "GMC Yukon Makkah to Madinah FAQs",
      faqs: [
        { question: "Is the Yukon suitable for a long intercity journey?", answer: "Yes. Space is what makes the difference over five hours, and a full-size SUV gives each passenger more of it than a sedan." },
        { question: "How does the Yukon compare with a sedan on this route?", answer: "A sedan suits one to three people with light bags. The Yukon suits families and groups with luggage who want more room for the whole journey." },
        { question: "Can we stop on the way?", answer: "Yes. Tell us where and why when you book, for example for prayer or a meal, and we plan the time for it." },
        { question: "Can we book the Yukon for the return from Madinah too?", answer: "Yes. Send both dates and we will confirm the vehicle for each journey." },
      ],
    },
    {
      type: "cta",
      heading: "Request a Yukon for Makkah to Madinah",
      copy: "Send your group, your bags, both hotel names and the date, and we confirm the Yukon and the price before you travel.",
      button: "Request a Yukon for This Journey",
      whatsapp: "Hello Al Safa Taxi, please quote a GMC Yukon from Makkah to Madinah.",
      dark: true,
    },
    {
      type: "related",
      heading: "Related pages",
      links: [
        { label: "Makkah to Madinah taxi", href: "/routes/makkah-to-madinah", note: "The route itself." },
        { label: "Staria, Makkah to Madinah", href: "/routes/makkah-to-madinah/staria", note: "A minivan for larger groups." },
        { label: "GMC Yukon, Jeddah to Makkah", href: "/routes/jeddah-to-makkah/yukon", note: "The Yukon on the shorter road." },
        { label: "Intercity transfers", href: "/services/intercity-transfers", note: "How we plan the long roads." },
      ],
    },
  ],
};
