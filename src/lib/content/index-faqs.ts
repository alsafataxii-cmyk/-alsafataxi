import type { Faq } from "@/lib/content/types";

const quoteAnswer =
  "Fares depend on the route, the vehicle and the number of passengers. Send your pickup, drop-off, date and passenger count through our booking page or on WhatsApp and we will confirm the price and vehicle before you travel.";

export const servicesFaqs: Faq[] = [
  {
    question: "Which services do you offer?",
    answer:
      "Airport transfers, Ziyarat tours, city taxi, intercity transfers, private chauffeur, hotel transfers and business transportation in Makkah, Madinah, Jeddah and Taif.",
  },
  {
    question: "Can I combine several services in one booking?",
    answer:
      "Yes. A common example is an airport pickup, a hotel transfer and a Ziyarat trip on the same day. Tell us your plans and we will arrange them together.",
  },
  {
    question: "Do you offer Umrah packages?",
    answer:
      "We provide transportation for Umrah trips, including airport and hotel transfers, travel between Makkah and Madinah and Ziyarat. We do not arrange visas or accommodation.",
  },
  {
    question: "Which service is best for a full day of visits?",
    answer:
      "A private chauffeur suits a day with several stops, and Ziyarat tours suit a day of historical and religious places. Tell us your plan and we will suggest the better fit.",
  },
  {
    question: "How do I book a service?",
    answer:
      "Use our booking page, message us on WhatsApp or call. Our booking line is open 24 hours a day.",
  },
];

export const fleetFaqs: Faq[] = [
  {
    question: "What vehicles are available?",
    answer:
      "Sedans, SUVs, vans and VIP chauffeur cars. Tell us your group size and luggage and we will confirm the vehicle for your trip.",
  },
  {
    question: "Which vehicle suits a family or a group?",
    answer:
      "SUVs and vans suit families and groups travelling with luggage. Give us the number of passengers and bags and we will suggest the right one.",
  },
  {
    question: "Can I request a specific vehicle type?",
    answer:
      "Yes. Choose a vehicle preference on the booking form or tell us on WhatsApp, and we will confirm what is available for your date.",
  },
  {
    question: "Do you provide child seats?",
    answer:
      "Tell us if you need a child seat when you book so we can confirm availability for your vehicle.",
  },
  {
    question: "How much luggage can I bring?",
    answer:
      "It depends on the vehicle. Tell us how many bags you have and we will match a vehicle with enough room.",
  },
];

export const airportsFaqs: Faq[] = [
  {
    question: "Which airport should I fly into for Makkah?",
    answer:
      "King Abdulaziz International Airport in Jeddah (JED). Makkah has no commercial airport, and the road journey is roughly 100 km.",
  },
  {
    question: "Which airport serves Madinah?",
    answer: "Prince Mohammad bin Abdulaziz International Airport (MED) serves Madinah.",
  },
  {
    question: "Is there an airport in Taif?",
    answer: "Yes. Taif is served by Taif International Airport (TIF).",
  },
  {
    question: "How does an airport pickup work?",
    answer:
      "Book with your flight number, arrival time, passenger count and hotel name. We plan the pickup around your arrival, and you can message us if your plans change or your flight is delayed.",
  },
  {
    question: "Can I book an airport transfer 24 hours a day?",
    answer:
      "Yes. Our booking line is open around the clock, so night and early-morning flights can be arranged.",
  },
];

export const locationsFaqs: Faq[] = [
  {
    question: "Which cities do you cover?",
    answer:
      "Our service area is Makkah, Madinah, Jeddah and Taif, including transfers at Jeddah, Madinah and Taif airports.",
  },
  {
    question: "Do you cover other cities such as Riyadh or Dammam?",
    answer:
      "No. Our service area is Makkah, Madinah, Jeddah and Taif, and the journeys between them.",
  },
  {
    question: "Do you travel between the cities?",
    answer:
      "Yes. We run private intercity journeys between Makkah, Madinah, Jeddah and Taif. See our popular routes for distances and journey times.",
  },
  {
    question: "Can I book Ziyarat in Makkah and Madinah?",
    answer:
      "Yes. We arrange private Ziyarat trips in both cities, timed around your schedule and the prayer times.",
  },
  {
    question: "What if my pickup point is outside the city centre?",
    answer:
      "Tell us your pickup point and destination when you book and we will confirm whether we can cover it.",
  },
];

export const routesFaqs: Faq[] = [
  {
    question: "How long is the drive from Makkah to Madinah?",
    answer:
      "Roughly 450 km, which takes about four and a half to five hours by road depending on traffic and stops.",
  },
  {
    question: "How far is Jeddah Airport from Makkah?",
    answer:
      "Roughly 100 km, which usually takes one to one and a half hours depending on traffic.",
  },
  {
    question: "Are the distances and journey times exact?",
    answer:
      "They are approximate. Actual times depend on traffic, the time of day, the season and your exact pickup and drop-off points.",
  },
  {
    question: "Can I book a return trip?",
    answer:
      "Yes. Tick the return trip option on the booking form or tell us on WhatsApp, and we will plan both journeys with you.",
  },
  {
    question: "Can I book a route that is not listed?",
    answer:
      "Yes. Contact us with your pickup and destination and we will confirm the vehicle and price.",
  },
];

export const bookFaqs: Faq[] = [
  {
    question: "How do I book through WhatsApp?",
    answer:
      "Fill in the booking form and press the send button. WhatsApp opens with your trip details already written, and you send the message to us. You can also message us directly at any time.",
  },
  {
    question: "How do I get a price?",
    answer: quoteAnswer,
  },
  {
    question: "What should I include for an airport pickup?",
    answer:
      "Your flight number, arrival time, number of passengers and bags, and your hotel name or destination.",
  },
  {
    question: "Can I book a return trip?",
    answer:
      "Yes. Tick the return trip box on the form and tell us when you would like to be collected.",
  },
  {
    question: "Can I change a booking?",
    answer:
      "Message or call us as early as possible with the change and we will adjust your booking where we can.",
  },
];
