import type { VehicleRoutePage } from "@/lib/content/vehicle-routes/types";
import { img } from "@/lib/content/vehicle-routes/images";

const fleetNote =
  "On our fleet page the van class is listed for up to eight passengers and about six bags. These are planning figures, and we confirm the vehicle assigned to your date before you travel.";

export const jeddahToMakkah7: VehicleRoutePage = {
  route: "jeddah-to-makkah",
  vehicle: "7-seater",
  metaTitle: "7 Seater Taxi Jeddah to Makkah",
  metaDescription:
    "Book a 7 seater taxi from Jeddah to Makkah for your family or group: one private vehicle, room for luggage and a planned drop-off near your Makkah hotel.",
  h1: "7 Seater Taxi from Jeddah to Makkah",
  eyebrow: "Family & group transfer",
  lead: "One private vehicle for the whole group from a Jeddah hotel, home or address to Makkah, so nobody is split across two cars and the bags travel with you.",
  hero: "family",
  heroImage: img.hiace,
  heroPoints: ["Whole group in one vehicle", "Pickup anywhere in Jeddah", "Drop-off planned near your Makkah hotel"],
  primaryCta: "Check Vehicle Availability",
  mobileCta: "Book a 7 Seater",
  whatsappText: "Hello Al Safa Taxi, I need a 7 seater from Jeddah to Makkah.",
  blocks: [
    {
      type: "answer",
      question: "What is a 7 seater taxi from Jeddah to Makkah?",
      answer:
        "It is a private transfer in a larger vehicle that seats a family or small group together, from your pickup point in Jeddah to Makkah. The road is roughly 80 km and usually takes about an hour in normal traffic.",
      detail:
        "We cover 7 seater requests with vehicles from our van class, such as a Hyundai Staria or Toyota Hiace, depending on what is available on your date. You tell us the group and the luggage, and we confirm the vehicle and price before you travel.",
    },
    {
      type: "capacity",
      heading: "Group and luggage at a glance",
      intro: "Use this to check that one vehicle is enough for your group.",
      items: [
        { label: "Passengers", value: "Families and small groups of about six or seven" },
        { label: "Luggage", value: "Several suitcases plus hand luggage, confirmed when you book" },
        { label: "Vehicle type", value: "Van class (for example Hyundai Staria or Toyota Hiace)" },
        { label: "Journey", value: "Jeddah address to a Makkah hotel" },
      ],
      note: fleetNote,
    },
    {
      type: "prose",
      heading: "Is a 7 seater the right size for your group?",
      paragraphs: [
        "Count people first and bags second, then look at the two together. Seven adults with one small bag each fit comfortably. Seven adults who have just finished a week in Jeddah with large suitcases, shopping and a pushchair are a different load, and that is where groups get caught out.",
        "As a rule of thumb, if your group is five to seven people and you have more luggage than a car boot could hold, a 7 seater is usually the sensible choice. If you are eight with heavy luggage, tell us, because the answer may be a larger vehicle or two cars leaving together.",
        "Children count as passengers. A baby on a lap is not a safe plan on a highway, so include every child in the number you send, and mention if you need a child seat so we can tell you what is available.",
      ],
    },
    {
      type: "compare",
      heading: "One 7 seater or two sedans?",
      intro: "Families often ask whether to book one larger vehicle or two cars. Both work; they suit different groups.",
      columns: ["One 7 seater", "Two sedans"],
      rows: [
        ["Group stays together", "Yes, one vehicle and one driver", "Split across two cars"],
        ["Luggage", "Loaded once, all in one place", "Divided between two boots"],
        ["Arrival in Makkah", "Everyone arrives at the same moment", "Cars can be separated in traffic"],
        ["Best for", "Families, older parents, children", "Two groups going to different hotels"],
      ],
      note: "If part of your group is staying at a different Makkah hotel, two vehicles can actually be simpler. Tell us both hotels.",
    },
    {
      type: "prose",
      heading: "Pickup from hotels, homes and residences in Jeddah",
      tone: "sand",
      paragraphs: [
        "Jeddah is a long city, and the start of the trip makes more difference to the timing than the highway does. A pickup in the north near the airport, one on the Corniche and one in a residential district in the south all lead to the same road, but they reach it at different times.",
        "Send a map pin as well as the address. Residential compounds and apartment blocks often have a gate or a side entrance where a large vehicle can wait more easily than at the front. If you know it, tell us; if not, the driver will call you as he arrives.",
        "Have the luggage at the door or in the lobby before the pickup time. With a group, loading takes longer than people expect, and it is the easiest five minutes to save.",
      ],
    },
    {
      type: "prose",
      heading: "Arriving in Makkah and the last part of the drive",
      paragraphs: [
        "The highway is usually the straightforward part. The slow part is the final stretch towards hotels near the Masjid al-Haram, where roads can be busy around prayer times and vehicle access close to the mosque can change. A larger vehicle cannot always stop directly outside every hotel entrance.",
        "Send us the exact hotel name before the day and we will confirm the practical drop-off point. If someone in the group finds walking difficult, say so, and we will look for the closest stop the vehicle can reach.",
      ],
      bullets: [
        "Share the hotel name, not just the area",
        "Ask your hotel where cars can stop for luggage",
        "Avoid arriving close to a congregational prayer if you can",
      ],
    },
    {
      type: "cards",
      heading: "Travelling with children and older relatives",
      columns: 3,
      items: [
        { title: "Space to settle", copy: "A larger vehicle lets parents sit beside young children and gives older passengers room to get in and out without rushing." },
        { title: "One stop, if needed", copy: "The drive is short, but a family with small children may still want a short stop. Mention it when you book." },
        { title: "Water and essentials", copy: "Keep water, any medicines and a change of clothes for the children in the cabin, not in a suitcase at the back." },
      ],
    },
    {
      type: "checklist",
      heading: "What to send when you ask for a quote",
      intro: "The more of this we have, the faster we can confirm the vehicle and price.",
      tone: "sand",
      items: [
        "Pickup address or map pin in Jeddah",
        "Your Makkah hotel name",
        "Date and preferred pickup time",
        "Number of adults and children",
        "Number of suitcases and large items",
        "Any need for a child seat or help with mobility",
      ],
    },
    {
      type: "cta",
      heading: "Check a 7 seater for your date",
      copy: "Tell us how many of you are travelling and how much luggage you have. We will confirm whether one vehicle is enough and send the price.",
      button: "Check Vehicle Availability",
      whatsapp: "Hello Al Safa Taxi, please check a 7 seater from Jeddah to Makkah for my group.",
    },
    {
      type: "faq",
      title: "7 Seater Jeddah to Makkah FAQs",
      faqs: [
        { question: "Which vehicle will I get for a 7 seater booking?", answer: "A vehicle from our van class, such as a Hyundai Staria or Toyota Hiace, depending on availability on your date. We confirm the vehicle before you travel, so you know what to expect." },
        { question: "Can we fit seven people and their suitcases?", answer: "Usually, if the luggage is reasonable. Send the number of suitcases and any large items such as a pushchair or wheelchair, and we will tell you honestly whether one vehicle is enough or whether you need more space." },
        { question: "Can you collect us from a private home in Jeddah?", answer: "Yes. Send the address and a map pin. If the street is narrow or the building has a gated entrance, tell us where a larger vehicle can wait." },
        { question: "Is it better to book one 7 seater or two cars?", answer: "One vehicle keeps the group and the luggage together. Two cars make sense when part of the group is going to a different hotel or leaving at a different time." },
        { question: "Can we go straight to the Haram instead of the hotel?", answer: "You can ask for the nearest practical drop-off point. Vehicle access close to the mosque is controlled and can change, so we agree the point with you in advance." },
      ],
    },
    {
      type: "related",
      heading: "Related journeys",
      links: [
        { label: "Jeddah to Makkah taxi", href: "/routes/jeddah-to-makkah", note: "The route itself: timing, Friday traffic and same-day returns." },
        { label: "Hyundai Staria, Jeddah to Makkah", href: "/routes/jeddah-to-makkah/staria", note: "If you would like the Staria specifically." },
        { label: "7 seater from Jeddah Airport", href: "/routes/jeddah-airport-to-makkah/7-seater", note: "Landing at JED instead of starting in the city." },
        { label: "Our fleet", href: "/fleet", note: "Vehicle classes and the models in each." },
      ],
    },
  ],
};

export const jeddahAirportToMakkah7: VehicleRoutePage = {
  route: "jeddah-airport-to-makkah",
  vehicle: "7-seater",
  metaTitle: "7 Seater Taxi Jeddah Airport to Makkah",
  metaDescription:
    "Landing at Jeddah Airport with your family? Book a 7 seater taxi to your Makkah hotel, planned around your flight, with room for the group's suitcases.",
  h1: "7 Seater Taxi from Jeddah Airport to Makkah",
  eyebrow: "Airport arrival · group transfer",
  lead: "A larger private vehicle waiting for your family or group after you land at King Abdulaziz International Airport (JED), with the whole group and every suitcase going straight to Makkah.",
  hero: "airport",
  heroImage: img.jedBaggage,
  heroPoints: ["Planned from your flight details", "Room for the group's suitcases", "Straight to your Makkah hotel"],
  primaryCta: "Send Your Flight Details",
  mobileCta: "Send Flight Details",
  whatsappText: "Hello Al Safa Taxi, we land at Jeddah Airport and need a 7 seater to Makkah. Our flight is:",
  blocks: [
    {
      type: "answer",
      question: "Can I book a 7 seater taxi from Jeddah Airport to Makkah?",
      answer:
        "Yes. A 7 seater transfer collects your group at Jeddah Airport and drives you directly to Makkah, roughly 100 km and usually one to one and a half hours on the road. The pickup is planned from your flight number and arrival time.",
      detail:
        "Most of the waiting on arrival day happens inside the terminal, not on the road, so the useful details are your flight, the size of your group and how many bags you are collecting.",
    },
    {
      type: "timeline",
      heading: "Your arrival journey",
      intro: "What usually happens between landing and reaching your hotel.",
      style: "arrival",
      steps: [
        { title: "Flight lands", copy: "Switch your phone on and send us a short message." },
        { title: "Immigration", copy: "This can be quick or slow depending on how many flights arrive together." },
        { title: "Baggage", copy: "Group luggage takes time; count every piece off the belt." },
        { title: "Meet your driver", copy: "At the meeting point agreed with your booking." },
        { title: "Load luggage", copy: "Everything goes into one vehicle." },
        { title: "Private transfer", copy: "The road to Makkah, about an hour or a little more." },
        { title: "Makkah hotel", copy: "Drop-off at the practical point for your hotel." },
      ],
    },
    {
      type: "checklist",
      heading: "What to send us before your flight",
      intro: "Send these a few days ahead, and again if anything changes.",
      items: [
        "Passenger count, including children",
        "Flight number",
        "Arrival date",
        "Scheduled arrival time",
        "Makkah hotel or destination",
        "Number of suitcases and large items",
        "A phone number that will work in Saudi Arabia",
      ],
    },
    {
      type: "prose",
      heading: "Meeting your driver at the airport",
      tone: "sand",
      paragraphs: [
        "The meeting arrangement is confirmed with your booking, because it depends on the terminal you arrive at and the arrangements on the day. Pilgrim and regular flights can use different arrival areas, so your airline is the best source for where you will come out.",
        "With a group, nominate one person as the contact. That person keeps the phone on, messages us when you land and again when the bags are collected, and the driver deals with one number instead of six.",
        "If you cannot find each other, do not wander through the terminal with trolleys. Call or message us and we will guide you to the right place.",
      ],
    },
    {
      type: "prose",
      heading: "If your flight is delayed or changed",
      paragraphs: [
        "Send your flight number when you book, and contact us as soon as the airline tells you of a change. We use the updated information to adjust the pickup.",
        "A delay of a few hours is common in busy seasons. It is much easier to rearrange a pickup when we hear early, so a message the moment you know is better than one after landing.",
      ],
    },
    {
      type: "capacity",
      heading: "Will the group's suitcases fit?",
      intro: "Arrival day is usually when a group has the most luggage.",
      items: [
        { label: "Typical group", value: "Six or seven passengers" },
        { label: "Luggage", value: "One large case per person plus hand luggage is a common load" },
        { label: "Large items", value: "Pushchairs, wheelchairs and boxes: tell us in advance" },
        { label: "Vehicle", value: "Van class, confirmed for your date" },
      ],
      note: fleetNote,
    },
    {
      type: "prose",
      heading: "From the airport to your Makkah hotel",
      paragraphs: [
        "Once you are on the road, the drive is the simple part. The final stretch near the Masjid al-Haram is where time can be lost, because roads around the mosque are busy at prayer times and a larger vehicle cannot always stop at every hotel door.",
        "Share the hotel name before you fly, and we will confirm the drop-off point. Hotels are often happy to send someone to help with luggage if you tell them your arrival time.",
      ],
    },
    {
      type: "cta",
      heading: "Send your flight details",
      copy: "Your flight number, arrival time, the number of passengers and bags, and the Makkah hotel are all we need to confirm a 7 seater and a price.",
      button: "Send Your Flight Details",
      whatsapp: "Hello Al Safa Taxi, here are our flight details for a 7 seater from Jeddah Airport to Makkah:",
      dark: true,
    },
    {
      type: "faq",
      title: "Airport 7 Seater FAQs",
      faqs: [
        { question: "Where will the driver meet us?", answer: "At the meeting point confirmed with your booking. It depends on the terminal and the arrangements on the day, so we agree it with you in advance and confirm it by message once you land." },
        { question: "What flight information should I provide?", answer: "The flight number, the arrival date and the scheduled arrival time. If you are connecting through another airport, send the flight that lands in Jeddah, not the first leg." },
        { question: "What happens if our flight is delayed?", answer: "Tell us as soon as the airline changes the time. We use the updated arrival to coordinate the pickup. Questions about waiting time are best settled by message before you fly." },
        { question: "Is a 7 seater suitable for several suitcases?", answer: "Usually, for a group of six or seven with one large case each and hand luggage. Send the exact count, including pushchairs or wheelchairs, and we will confirm the fit." },
        { question: "Can we perform Umrah straight after arriving?", answer: "Many groups do. Tell us when you book so we can plan the drop-off around your plans. Practical questions about rituals are for your tour operator or scholar." },
      ],
    },
    {
      type: "related",
      heading: "Related pages",
      links: [
        { label: "Jeddah Airport to Makkah taxi", href: "/routes/jeddah-airport-to-makkah", note: "The route in detail, for any group size." },
        { label: "Staria from Jeddah Airport", href: "/routes/jeddah-airport-to-makkah/staria", note: "The same journey in a Hyundai Staria." },
        { label: "Jeddah Airport (JED)", href: "/airports/jeddah-airport", note: "Arrivals, terminals and departures." },
        { label: "Umrah transportation", href: "/umrah-transportation", note: "The rest of the trip, from Makkah to Madinah and home." },
      ],
    },
  ],
};

export const makkahToMadinah7: VehicleRoutePage = {
  route: "makkah-to-madinah",
  vehicle: "7-seater",
  metaTitle: "7 Seater Taxi Makkah to Madinah",
  metaDescription:
    "Travel from Makkah to Madinah as one group in a 7 seater: about 450 km, planned stops, hotel pickup and a drop-off near your Madinah hotel.",
  h1: "7 Seater Taxi from Makkah to Madinah",
  eyebrow: "Long-distance group journey",
  lead: "Roughly 450 km between the two holy cities, made as one group in one vehicle: hotel to hotel, with the stops planned before you set off.",
  hero: "journey",
  heroPoints: ["About 4.5 to 5 hours before stops", "Stops planned in advance", "Hotel pickup and hotel drop-off"],
  primaryCta: "Plan the Journey",
  mobileCta: "Plan This Journey",
  whatsappText: "Hello Al Safa Taxi, we need a 7 seater from Makkah to Madinah.",
  blocks: [
    {
      type: "answer",
      question: "How does a 7 seater from Makkah to Madinah work?",
      answer:
        "A larger private vehicle collects your family or group from your Makkah hotel and drives to your Madinah hotel, roughly 450 km and about four and a half to five hours under typical conditions, before any stops.",
      facts: [
        { label: "Recommended for", value: "Families and groups of six or seven with luggage" },
        { label: "Pickup", value: "Your Makkah hotel" },
        { label: "Drop-off", value: "The practical point for your Madinah hotel" },
      ],
    },
    {
      type: "prose",
      heading: "Is a 7 seater right for this journey?",
      paragraphs: [
        "On a one-hour road almost any arrangement works. On a five-hour road, the vehicle becomes part of the experience. Seven people folded into a car with bags on their laps arrive tired; seven people with room to stretch, a seat each and the luggage behind them arrive ready for Madinah.",
        "A 7 seater suits a family with grandparents and children, a group of friends who want to arrive together, or anyone carrying the extra luggage that builds up over a stay in Makkah. If you are three or four with light bags, a smaller car may be enough, and we will say so.",
      ],
    },
    {
      type: "timeline",
      heading: "How the day usually runs",
      style: "journey",
      steps: [
        { title: "Departure", copy: "Hotel pickup at the time agreed, with luggage already in the lobby." },
        { title: "Leaving Makkah", copy: "The slowest part can be the hotel area itself, especially around prayers." },
        { title: "The highway", copy: "A long, mostly straight road between the cities." },
        { title: "Planned stop", copy: "A break for prayer, food or rest, if you asked for one." },
        { title: "Arrival", copy: "Into Madinah and on to the drop-off point for your hotel." },
      ],
    },
    {
      type: "checklist",
      heading: "Before leaving Makkah",
      intro: "A short checklist for the evening before.",
      tone: "sand",
      items: [
        "Confirm the hotel pickup point and which entrance the vehicle should use",
        "Bring all luggage down before the pickup time",
        "Check the passenger count has not changed",
        "Confirm the name of your Madinah hotel",
        "Allow extra time in your plans for traffic and stops",
        "Tell us now about any stop you want to make on the way",
      ],
    },
    {
      type: "cards",
      heading: "Comfort over five hours",
      intro: "Small things decide how a group feels at the end of a long road.",
      columns: 3,
      items: [
        { title: "Stops", copy: "Decide in advance whether you want a stop and roughly where. One proper break is often better than several short ones." },
        { title: "Departure time", copy: "Morning departures are cooler and arrive in daylight. Night departures can suit groups who want to pray Fajr in Madinah." },
        { title: "In the cabin", copy: "Keep water, snacks for children, medicines and phone chargers within reach rather than in the luggage." },
      ],
    },
    {
      type: "prose",
      heading: "Arriving at your Madinah hotel",
      paragraphs: [
        "Many Madinah hotels sit close to Al-Masjid an-Nabawi, where some streets become pedestrian areas and vehicle access can be restricted at busy times. The vehicle may stop a short walk from the entrance.",
        "Share the hotel name before you leave Makkah, and ask the hotel where cars can stop for luggage. After a five-hour drive, knowing exactly where you will get out saves the group from standing on the pavement with suitcases.",
      ],
    },
    {
      type: "capacity",
      heading: "Passengers and luggage",
      items: [
        { label: "Group", value: "Up to about seven travelling together" },
        { label: "Luggage", value: "Suitcases from a stay in Makkah, confirmed at booking" },
        { label: "Vehicle", value: "Van class, such as Staria or Hiace" },
        { label: "Distance", value: "About 450 km" },
      ],
      note: fleetNote,
    },
    {
      type: "faq",
      title: "Makkah to Madinah 7 Seater FAQs",
      faqs: [
        { question: "Is a 7 seater practical for such a long journey?", answer: "For a group of six or seven, yes. Everyone has a seat, the luggage travels behind, and nobody is split into a second car on a five-hour road." },
        { question: "Can we request a planned stop?", answer: "Yes. Tell us when you book whether you want to stop for prayer, food or rest, and we plan it into the timing." },
        { question: "What should we provide for the hotel pickup?", answer: "The hotel name, the entrance where a larger vehicle can wait if you know it, the pickup time and the number of passengers and bags." },
        { question: "How should we plan our departure time?", answer: "Work back from when you want to arrive, add four and a half to five hours for the road, then add time for stops and for leaving the hotel area." },
        { question: "Can we leave at night?", answer: "Yes. Some groups prefer a night departure to avoid the heat. Tell us the time and we confirm the vehicle." },
      ],
    },
    {
      type: "cta",
      heading: "Plan your Makkah to Madinah journey",
      copy: "Send the date, the departure time you have in mind, the group size, the luggage and both hotel names, and we will confirm a 7 seater and the price.",
      button: "Plan the Journey",
      whatsapp: "Hello Al Safa Taxi, please plan a 7 seater from Makkah to Madinah for my group.",
    },
    {
      type: "related",
      heading: "Related pages",
      links: [
        { label: "Makkah to Madinah taxi", href: "/routes/makkah-to-madinah", note: "The route for any vehicle." },
        { label: "Staria, Makkah to Madinah", href: "/routes/makkah-to-madinah/staria", note: "If you want the Staria in particular." },
        { label: "GMC Yukon, Makkah to Madinah", href: "/routes/makkah-to-madinah/yukon", note: "A full-size SUV for the same road." },
        { label: "Ziyarat in Madinah", href: "/services/ziyarat-tours", note: "Plan visits for the days after you arrive." },
      ],
    },
  ],
};

export const madinahToMakkah7: VehicleRoutePage = {
  route: "madinah-to-makkah",
  vehicle: "7-seater",
  metaTitle: "7 Seater Taxi Madinah to Makkah",
  metaDescription:
    "Leaving Madinah for Makkah as a family or group? Book a 7 seater with room for luggage, an optional stop and a drop-off agreed for your Makkah hotel.",
  h1: "7 Seater Taxi from Madinah to Makkah",
  eyebrow: "Madinah departure · Makkah arrival",
  lead: "The journey from your Madinah hotel to Makkah for a family or group in one vehicle, planned so that the arrival in Makkah is as calm as the departure.",
  hero: "family",
  heroImage: img.medRoad,
  heroSideImage: img.staria,
  heroPoints: ["One vehicle for the whole group", "Optional stop on the way", "Makkah drop-off agreed in advance"],
  primaryCta: "Request a 7 Seater",
  mobileCta: "Request a 7 Seater",
  whatsappText: "Hello Al Safa Taxi, we need a 7 seater from Madinah to Makkah.",
  blocks: [
    {
      type: "answer",
      question: "Can our group travel from Madinah to Makkah in one 7 seater?",
      answer:
        "Yes. A 7 seater collects your family or group from your Madinah hotel and drives to Makkah, roughly 450 km and about four and a half to five hours, plus any stops you plan.",
      detail:
        "For many travellers this is the second half of the trip, often heading to Umrah, so the arrival in Makkah matters as much as the road.",
    },
    {
      type: "prose",
      heading: "Leaving your Madinah hotel",
      paragraphs: [
        "Checkout day in Madinah is usually busy. Hotels near the Prophet's Mosque handle many departures at once, and the streets close to the mosque can be restricted, so the vehicle may wait at a nearby road rather than at the entrance.",
        "Agree one meeting point with the group, bring the luggage down before people go for a last prayer, and give us the checkout time. A group that is already in the lobby when the driver calls leaves in minutes; a group still packing can lose an hour before the road even starts.",
      ],
    },
    {
      type: "split",
      heading: "Room for what you are carrying home",
      side: "right",
      image: img.staria,
      paragraphs: [
        "By the time you leave Madinah, luggage has usually grown: dates, gifts and prayer items join the suitcases you arrived with. That is the main reason groups choose a larger vehicle for this leg.",
        "Count every bag before you book, including hand luggage and boxes. If the total looks large, tell us, and we will confirm whether one vehicle carries it comfortably.",
      ],
    },
    {
      type: "prose",
      heading: "An optional stop on the way",
      tone: "sand",
      paragraphs: [
        "Many travellers heading to Makkah for Umrah ask to stop at Dhul Hulayfah (Abyar Ali) on the way out of Madinah. If you want this stop, tell us when you book so the timing allows for it. What you do there is for your scholar or tour operator to advise; our part is to plan the stop.",
        "Other groups prefer a single rest stop for food and prayer around the middle of the journey. Either is fine, as long as it is agreed before departure.",
      ],
    },
    {
      type: "prose",
      heading: "Planning your arrival in Makkah",
      paragraphs: [
        "This is the part travellers most often leave to chance. After five hours on the road, the group reaches the busiest part of Makkah, where roads around the Masjid al-Haram can be crowded and vehicle access close to the mosque is controlled and can change.",
        "Share the exact name of your Makkah hotel before you leave Madinah, not on the way. With the name, we can confirm a practical drop-off point. Without it, the driver has to work it out in traffic, with seven tired passengers and their bags waiting.",
        "If you arrive late, let the hotel know your expected time so that someone is at reception, and keep its phone number to hand in case the driver needs directions.",
      ],
      bullets: [
        "Send the hotel name and booking confirmation in advance",
        "Ask the hotel which entrance handles luggage",
        "Tell us if anyone needs the closest possible drop-off",
      ],
    },
    {
      type: "cards",
      heading: "If your trip continues after Makkah",
      columns: 2,
      items: [
        { title: "Flying home from Jeddah", copy: "Book the onward leg to Jeddah Airport at the same time and give us the flight time, so we can plan the pickup back from it." },
        { title: "Staying a few days first", copy: "You can book the next leg later from your Makkah hotel. Just send us the date when you know it." },
      ],
    },
    {
      type: "faq",
      title: "Madinah to Makkah 7 Seater FAQs",
      faqs: [
        { question: "Can we stop at the miqat on the way?", answer: "Yes, if you ask when you book. We plan the time for the stop. Guidance on what to do there should come from your scholar or tour operator." },
        { question: "Where will the driver collect us in Madinah?", answer: "At the practical pickup point for your hotel. Streets near the mosque can be restricted, so we confirm the point with you beforehand." },
        { question: "Why do you need our Makkah hotel name in advance?", answer: "Because the drop-off near the Masjid al-Haram depends on the hotel. With the name we can confirm where the vehicle can stop before you arrive." },
        { question: "What if we arrive in Makkah late at night?", answer: "That is fine. Tell your hotel your expected arrival time and keep its number with you. We confirm the drop-off point in advance either way." },
      ],
    },
    {
      type: "cta",
      heading: "Request a 7 seater from Madinah",
      copy: "Send your checkout time, the group size, the luggage, both hotel names and whether you want a stop. We will confirm the vehicle and price.",
      button: "Request a 7 Seater",
      whatsapp: "Hello Al Safa Taxi, please arrange a 7 seater from Madinah to Makkah.",
      dark: true,
    },
    {
      type: "related",
      heading: "Related pages",
      links: [
        { label: "Madinah to Makkah taxi", href: "/routes/madinah-to-makkah", note: "The route for any vehicle." },
        { label: "Staria, Madinah to Makkah", href: "/routes/madinah-to-makkah/staria", note: "The same road in a Hyundai Staria." },
        { label: "Madinah Airport to Makkah", href: "/routes/madinah-airport-to-makkah", note: "If you are coming straight from a flight." },
        { label: "Makkah to Jeddah Airport", href: "/routes/makkah-to-jeddah-airport", note: "The usual next leg home." },
      ],
    },
  ],
};
