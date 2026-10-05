import type { Block } from "@/lib/content/vehicle-routes/types";
import type { Faq } from "@/lib/content/types";

// Second layer of page-specific sections (inserted before the FAQ) and extra FAQs.
export const extraTwo: Record<string, { blocks: Block[]; faqs: Faq[] }> = {
  "jeddah-to-makkah/7-seater": {
    blocks: [],
    faqs: [
      { question: "How long does the 7 seater take from Jeddah to Makkah?", answer: "Usually about an hour for the roughly 80 km, in normal traffic. Weekend evenings, Fridays and the busy seasons can add a good deal more, and so can a pickup in the far north or south of Jeddah." },
    ],
  },

  "jeddah-airport-to-makkah/7-seater": {
    blocks: [
      {
        type: "prose",
        heading: "When the group lands on different flights",
        paragraphs: [
          "Large families do not always fly together. If part of your group lands on a different flight, send both flight numbers. One vehicle can wait for everyone when the flights land close together; when they are hours apart, two pickups are usually kinder to the people who arrive first.",
          "Tell us how you would like to handle it and we will plan around it. Waiting in an arrivals hall for several hours with children is the kind of thing worth deciding before the trip, not after landing.",
        ],
      },
    ],
    faqs: [
      { question: "Can one 7 seater collect people from two different flights?", answer: "Yes, if the flights land close together and the group is happy to wait for each other. Send both flight numbers and we will suggest whether one pickup or two makes more sense." },
      { question: "Do we need to tell you which terminal we arrive at?", answer: "No. The flight number is enough for planning. Your airline will tell you where you arrive, and we confirm the meeting arrangement with your booking." },
    ],
  },

  "makkah-to-madinah/7-seater": {
    blocks: [
      {
        type: "prose",
        heading: "Making the transfer part of a wider plan",
        tone: "sand",
        paragraphs: [
          "For most groups this is the middle journey of three: in from Jeddah, Makkah to Madinah, and then home. Booking all three together lets us check that the gaps between them make sense, for example that you are not leaving Makkah on the same morning a hotel expects you to check out late.",
          "If you are not sure of your later dates yet, book this leg now and add the others when you know them.",
        ],
      },
    ],
    faqs: [
      { question: "Will we arrive in Madinah in time for a particular prayer?", answer: "We cannot promise an arrival time, because traffic and stops vary. If arriving before a prayer matters to you, tell us and we will suggest a departure time with a generous margin." },
      { question: "Can we book the return from Madinah at the same time?", answer: "Yes. Send both dates and we will plan both journeys, so you do not have to arrange the second one from Madinah." },
      { question: "Can two families share one 7 seater?", answer: "Yes, if the total number of passengers and bags fits. Send the combined numbers and both families' Madinah hotels if they differ." },
    ],
  },

  "madinah-to-makkah/7-seater": {
    blocks: [
      {
        type: "prose",
        heading: "If you are travelling with a tour group",
        paragraphs: [
          "Some families travel on a tour operator's package and only need private transport for part of the trip. If that is you, tell us which parts your operator covers, so that we do not arrange something that overlaps, and share the operator's timings if your Makkah hotel check-in depends on them.",
          "Private transport for this leg suits groups who want to leave at their own time, stop where they choose or keep the whole family in one vehicle rather than spread across a coach.",
        ],
      },
    ],
    faqs: [
      { question: "Can a 7 seater take us from Madinah Airport instead of a hotel?", answer: "Yes. If you are landing in Madinah and going straight on, see our Madinah Airport to Makkah route, and send your flight number instead of a hotel pickup time." },
      { question: "How much luggage is too much for one 7 seater?", answer: "It depends on the number and size of the bags. Send the count, including boxes and gifts, and we will tell you plainly whether you need more space." },
      { question: "Can we start very early in the morning?", answer: "Yes. Early starts are common for this leg. Confirm the time with us the evening before, and make sure the hotel knows you are checking out early." },
      { question: "Can we change the pickup time the day before?", answer: "Usually yes. Message us as soon as you know, and we will confirm the new time for the group." },
    ],
  },

  "jeddah-to-makkah/staria": {
    blocks: [
      {
        type: "prose",
        heading: "Booking a Staria for the way back",
        tone: "sand",
        paragraphs: [
          "Families making a day trip to Makkah from Jeddah often want the same vehicle for the return. Agree the return time before you leave, ideally after a prayer when you know you will be ready, and give yourselves a margin: leaving the area around the Haram at the end of a prayer is slow for everyone.",
          "If your plans may run late, say so. It is easier to arrange a later return in advance than to change it on the evening itself.",
        ],
      },
    ],
    faqs: [
      { question: "Can I book the Staria for a return trip the same day?", answer: "Yes. Tell us the time you expect to be ready in Makkah, and we will plan the return. Leave a margin, because roads near the Haram are busy after prayers." },
      { question: "Is the Staria suitable for older passengers?", answer: "Many older passengers find a minivan easier to get into than a low car. Tell us about any mobility needs, and we will plan the pickup and drop-off points accordingly." },
      { question: "Can we bring a pushchair?", answer: "Yes. Tell us when you book so we can make sure there is room for it with the luggage." },
    ],
  },

  "jeddah-airport-to-makkah/staria": {
    blocks: [
      {
        type: "prose",
        heading: "If you are not sure you need a Staria",
        paragraphs: [
          "Send us the number of people and the number of bags, and we will recommend the vehicle. We would rather suggest a sedan for a couple with light luggage than send a minivan you do not need, and we would rather suggest a larger vehicle than have a family discover at the kerb that the cases do not fit.",
          "Remember to count the bags you will be carrying on the way home too. If you plan to book the return to the airport with us, the luggage will usually be heavier then.",
        ],
      },
    ],
    faqs: [
      { question: "What should we do if we cannot find the driver?", answer: "Stay together in one place and call or message us. We will guide you to the meeting point. Walking around the terminal with trolleys usually makes it harder." },
      { question: "Can you also book our return from Makkah to the airport?", answer: "Yes. Send your departure flight and hotel, and we will plan the pickup back from your flight time." },
      { question: "Can the Staria wait if immigration takes a long time?", answer: "We plan the pickup from your flight details and your messages after landing. If a long queue is likely, tell us, and settle any questions about waiting time by message before you fly." },
    ],
  },

  "makkah-to-madinah/staria": {
    blocks: [
      {
        type: "prose",
        heading: "Arriving in Madinah after five hours",
        paragraphs: [
          "Hotels near Al-Masjid an-Nabawi are often in areas where streets are restricted or pedestrian only, so a minivan may stop a short walk from your entrance. Share the hotel name before you leave Makkah, and we confirm the drop-off point.",
          "Ask the hotel in advance whether a porter can meet you at the drop-off with a trolley. After a long drive, it makes the last few minutes much easier for the whole group.",
        ],
      },
    ],
    faqs: [
      { question: "What is the best time to leave Makkah?", answer: "Many families leave in the morning to arrive in daylight. Night departures suit groups who prefer quieter roads. Choose by how rested your group will be." },
      { question: "Can the Staria take a wheelchair?", answer: "Tell us about the wheelchair when you book, including whether it folds, and we will confirm that there is room for it with the group's luggage." },
      { question: "How will we know where the driver is waiting in Makkah?", answer: "We confirm the pickup point near your hotel before the day, and the driver calls the group's contact person as he arrives. Keep that phone on and with you in the lobby." },
      { question: "Can we visit a place on the way to Madinah?", answer: "Ask when you book. A planned stop for prayer, food or rest is simple to add. Any longer detour depends on the route and timing, and we will tell you whether it fits." },
    ],
  },

  "madinah-to-makkah/staria": {
    blocks: [
      {
        type: "prose",
        heading: "Planning around the stop at Abyar Ali",
        tone: "sand",
        paragraphs: [
          "Dhul Hulayfah, known locally as Abyar Ali, sits on the edge of Madinah, so a stop there comes early in the journey rather than half way. If your group wants to stop, prepare before you leave the hotel: keep what you need for the stop in the cabin and agree how long you will need.",
          "We do not advise on what to do at the miqat; please follow your scholar or tour operator. Our part is to plan the time and the vehicle, so that the stop is relaxed rather than rushed.",
        ],
      },
    ],
    faqs: [
      { question: "How long should we allow for the whole journey?", answer: "Four and a half to five hours of road, plus any stops and the time it takes to leave the hotel area. Many groups plan for six hours in total." },
      { question: "Can you take us straight to the Haram area?", answer: "We can plan the nearest practical drop-off point. Vehicle access close to the mosque is controlled and can change, so we agree it with you in advance." },
      { question: "What if one of our group is unwell on the day?", answer: "Message us as soon as you can. We will try to move the pickup if the group needs more time." },
      { question: "Can we leave Madinah after the Fajr prayer?", answer: "Yes. Early departures after Fajr are popular because the roads are quieter and the day is cooler. Bring the luggage down the night before, give us the time you will be ready after the prayer, and we will plan the pickup for then." },
      { question: "Do we need to book the Staria far in advance?", answer: "Book as soon as your dates are fixed, and earlier still in Ramadan and the Hajj season, when larger vehicles are in demand. We confirm the vehicle for your date, so you know before you travel whether it is a Staria." },
    ],
  },

  "jeddah-to-makkah/yukon": {
    blocks: [
      {
        type: "prose",
        heading: "What a Yukon booking is, and is not",
        paragraphs: [
          "A Yukon booking is a private transfer in a full-size SUV with a driver, from your pickup point to your destination, at a price confirmed before you travel. It is not a shared ride, and it does not include other passengers or other stops unless you ask for them.",
          "We do not advertise features we have not confirmed for your vehicle. If something specific matters to you, such as a child seat or extra luggage space, ask when you book and we will tell you what we can arrange.",
        ],
      },
    ],
    faqs: [
      { question: "Can the Yukon wait while we visit the Haram?", answer: "If you want the driver to wait or return later, tell us when you book. A return time agreed in advance is the easiest to arrange." },
      { question: "Is a Yukon available every day?", answer: "We confirm the vehicle for your date. If a Yukon is not available, we will tell you before anything is agreed and suggest a comparable vehicle." },
      { question: "Can the Yukon collect from a hotel near the Jeddah Corniche?", answer: "Yes. Send the hotel name and a map pin. Hotel forecourts on busy roads can be tight for a large SUV, so tell us if the hotel has a side entrance or a better place to wait." },
      { question: "Can I pay for a Yukon for someone else's journey?", answer: "You can book for someone else. Send their name, phone number and pickup details, and we will confirm the price with you before the journey." },
    ],
  },

  "makkah-to-madinah/yukon": {
    blocks: [
      {
        type: "prose",
        heading: "Booking the Yukon for the whole trip",
        paragraphs: [
          "Some travellers like to keep the same type of vehicle for each long leg: Jeddah Airport to Makkah, Makkah to Madinah and then on to the airport. If you want that, send the dates of all the legs together and we will confirm a Yukon for each where it is available.",
          "If one leg is short and the group is small, you may decide a sedan is enough for that part. We can mix vehicles across a trip, and it often makes sense to.",
        ],
      },
    ],
    faqs: [
      { question: "Who benefits most from a Yukon on this route?", answer: "Families and small groups with luggage, older passengers who want room, and anyone who prefers an SUV over five hours. Solo travellers and couples with light bags usually do not need one." },
      { question: "How do I request a private Yukon transfer?", answer: "Use the form on this page or message us on WhatsApp with the date, both hotels, the group and the luggage. We confirm the Yukon and the price before you travel." },
      { question: "Can the Yukon take us from Madinah to Jeddah Airport later?", answer: "Yes. Send that date and your flight time, and we will plan the second journey back from your departure." },
    ],
  },
};
