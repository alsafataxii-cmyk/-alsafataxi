import type { VehicleRoutePage } from "@/lib/content/vehicle-routes/types";
import { img } from "@/lib/content/vehicle-routes/images";

const stariaNote =
  "The Staria is one of the models in our van class, which our fleet page lists for up to eight passengers and about six bags. We confirm the vehicle and its seating for your date before you travel.";

export const jeddahToMakkahStaria: VehicleRoutePage = {
  route: "jeddah-to-makkah",
  vehicle: "staria",
  metaTitle: "Hyundai Staria Taxi Jeddah to Makkah",
  metaDescription:
    "Book a Hyundai Staria with driver from Jeddah to Makkah: a private minivan for families and groups, with room for luggage. About 80 km, around an hour.",
  h1: "Hyundai Staria Taxi from Jeddah to Makkah",
  eyebrow: "Vehicle: Hyundai Staria",
  lead: "A private Hyundai Staria minivan with a driver, from your address in Jeddah to Makkah, for families and groups who want space and room for their bags.",
  hero: "vehicle",
  heroImage: img.staria,
  heroPoints: ["Hyundai Staria minivan", "Private driver", "Jeddah address to Makkah hotel"],
  primaryCta: "Request a Staria Quote",
  mobileCta: "Request a Staria",
  whatsappText: "Hello Al Safa Taxi, I would like a Hyundai Staria from Jeddah to Makkah.",
  blocks: [
    {
      type: "answer",
      question: "Can I book a Hyundai Staria from Jeddah to Makkah?",
      answer:
        "Yes. You can request a Hyundai Staria with a private driver for the road from Jeddah to Makkah, roughly 80 km and usually about an hour in normal traffic.",
      detail: "Tell us the group size and luggage, and we confirm the Staria and the price for your date.",
    },
    {
      type: "prose",
      heading: "The Hyundai Staria in brief",
      paragraphs: [
        "The Staria is a modern minivan, a people carrier rather than a car. That shape is the whole point: the cabin is tall and long, so passengers sit upright in separate seats instead of squeezing three across a back bench, and the luggage has its own space behind them.",
        "We use it for families and groups who want to travel together in one vehicle. It is a practical vehicle for people and bags, not a limousine, and we describe it that way so that you know what to expect.",
      ],
      aside: stariaNote,
    },
    {
      type: "cards",
      heading: "Why choose a Staria for Jeddah to Makkah?",
      columns: 3,
      items: [
        { title: "Everyone together", copy: "Parents, grandparents and children in one cabin, so the family arrives at the same time and nobody is in a second car." },
        { title: "Bags behind, not on laps", copy: "Suitcases and shopping go in the back of the vehicle, which matters if you are moving from a Jeddah hotel to Makkah for the rest of the stay." },
        { title: "Easier to board", copy: "A minivan is generally easier for older passengers to step into than a low sedan. Tell us if anyone needs help, and we will plan for it." },
      ],
    },
    {
      type: "compare",
      heading: "Staria or sedan?",
      intro: "A simple comparison to help you choose. Both are private, with a driver.",
      columns: ["Hyundai Staria", "Sedan"],
      rows: [
        ["Passenger suitability", "Families and groups", "Individuals, couples, small families"],
        ["Luggage", "More practical for a group's suitcases", "More limited boot space"],
        ["Journey type", "Group moves, family trips, hotel changes", "Light-luggage rides for two or three"],
      ],
      note: "If you are two or three people with light bags, a sedan is usually enough and we will tell you so.",
    },
    {
      type: "prose",
      heading: "The route: Jeddah to Makkah",
      tone: "sand",
      paragraphs: [
        "The road between the two cities is short but busy, especially on Thursday evenings, Fridays and in Ramadan and the Hajj season. The part that changes most is the start: Jeddah is long, and a pickup in the north reaches the highway at a different time from one in the south. Send a map pin.",
        "At the other end, roads near the Masjid al-Haram are controlled and can be crowded around prayers. A minivan cannot always stop directly at a hotel door, so send the hotel name and we confirm the practical drop-off point.",
      ],
    },
    {
      type: "capacity",
      heading: "Who the Staria suits on this route",
      items: [
        { label: "Group size", value: "Families and groups travelling together" },
        { label: "Luggage", value: "Several suitcases; confirm the count at booking" },
        { label: "Trip", value: "Hotel moves, family visits, weekend Umrah" },
        { label: "Distance", value: "About 80 km" },
      ],
      note: stariaNote,
    },
    {
      type: "cta",
      heading: "Request a Staria quote",
      copy: "Send the Jeddah pickup, your Makkah hotel, the date and time, and the number of passengers and bags. We confirm the Staria and the price before you travel.",
      button: "Request a Staria Quote",
      whatsapp: "Hello Al Safa Taxi, please quote a Hyundai Staria from Jeddah to Makkah.",
    },
    {
      type: "faq",
      title: "Staria Jeddah to Makkah FAQs",
      faqs: [
        { question: "Why choose a Staria instead of a sedan?", answer: "For space. A family or group fits in one vehicle with the luggage behind, instead of splitting into two cars or holding bags on their laps." },
        { question: "Is the Staria suitable for family luggage?", answer: "Generally yes, for a family's suitcases. Send the exact number of bags and any large items, and we will confirm the fit for your group." },
        { question: "Does the Staria come with a private driver?", answer: "Yes. Every booking is private, with a driver, from your pickup point to your destination." },
        { question: "Which other routes can I book with a Staria?", answer: "Any of our routes, including Jeddah Airport to Makkah and the long road between Makkah and Madinah. The Staria is confirmed by date and availability." },
        { question: "Can you guarantee a Staria for my date?", answer: "We confirm the vehicle before you travel. If a Staria is not available, we will tell you and suggest a comparable vehicle before anything is agreed." },
      ],
    },
    {
      type: "related",
      heading: "Related pages",
      links: [
        { label: "Jeddah to Makkah taxi", href: "/routes/jeddah-to-makkah", note: "The route itself, for any vehicle." },
        { label: "7 seater, Jeddah to Makkah", href: "/routes/jeddah-to-makkah/7-seater", note: "If you need seven seats and are flexible on the model." },
        { label: "GMC Yukon, Jeddah to Makkah", href: "/routes/jeddah-to-makkah/yukon", note: "A full-size SUV instead of a minivan." },
        { label: "Our fleet", href: "/fleet", note: "Photos of the Staria and our other models." },
      ],
    },
  ],
};

export const jeddahAirportToMakkahStaria: VehicleRoutePage = {
  route: "jeddah-airport-to-makkah",
  vehicle: "staria",
  metaTitle: "Staria Taxi Jeddah Airport to Makkah",
  metaDescription:
    "After a long flight into Jeddah, ride to your Makkah hotel in a private Hyundai Staria with room for the family and suitcases, planned from your flight.",
  h1: "Staria Taxi from Jeddah Airport to Makkah",
  eyebrow: "JED arrival · Hyundai Staria",
  lead: "A Hyundai Staria waiting for your family after you land at Jeddah Airport, with space for tired passengers and a trolley's worth of suitcases on the way to Makkah.",
  hero: "airport",
  heroImage: img.jedExit,
  heroSideImage: img.staria,
  heroPoints: ["Staria booked for your arrival", "Space for suitcases after the flight", "Direct to your Makkah hotel"],
  primaryCta: "Book a Staria for My Arrival",
  mobileCta: "Book Staria Pickup",
  whatsappText: "Hello Al Safa Taxi, we land at Jeddah Airport and would like a Staria to Makkah. Flight:",
  blocks: [
    {
      type: "answer",
      question: "Can a Staria collect us from Jeddah Airport and take us to Makkah?",
      answer:
        "Yes. A Hyundai Staria with a private driver can meet your family or group after you land at Jeddah Airport and drive you to your Makkah hotel, roughly 100 km and usually one to one and a half hours.",
    },
    {
      type: "prose",
      heading: "When a Staria makes sense after a long flight",
      paragraphs: [
        "Arrival day is when a group is at its most tired and its most loaded. Hours on a plane, a queue at immigration and a wait at the baggage belt leave little patience for squeezing into a small car or splitting the family across two.",
        "That is when a minivan earns its place. Children can sleep, older parents can sit without climbing over bags, and the suitcases go in the back in one go. For two travellers with cabin bags it is unnecessary; for a family of five or six with a case each, it often makes the first hour in Saudi Arabia much easier.",
      ],
    },
    {
      type: "timeline",
      heading: "Planning the airport pickup",
      style: "steps",
      steps: [
        { title: "Before you fly", copy: "Send the flight number, arrival time, passengers, bags and your Makkah hotel." },
        { title: "On landing", copy: "The group's contact person messages us once the phone is on." },
        { title: "After baggage", copy: "A second message when every bag is on the trolleys, so the driver knows you are coming out." },
        { title: "Meeting point", copy: "The point agreed with your booking, which depends on the terminal and arrangements on the day." },
      ],
    },
    {
      type: "cards",
      heading: "Loading a group's luggage",
      columns: 3,
      items: [
        { title: "Count at the belt", copy: "Count every piece before you leave baggage claim. A suitcase left on the belt is the most common arrival-day problem." },
        { title: "Big items first", copy: "Pushchairs, wheelchairs and boxes go in first. Tell us about them before you fly so the vehicle has room." },
        { title: "Essentials in the cabin", copy: "Passports, medicines, water and phone chargers stay with you, not in the back." },
      ],
    },
    {
      type: "prose",
      heading: "Your Makkah hotel as the destination",
      tone: "sand",
      paragraphs: [
        "Send the hotel name with your flight details. Roads around the Masjid al-Haram are controlled and can be crowded, and a minivan cannot always stop at every hotel door, so the name lets us confirm the drop-off point before you land.",
        "If you plan to go to the Haram soon after arriving, say so. Some groups want to check in first, others to leave bags with reception and go straight away, and the drop-off can be planned for either.",
      ],
    },
    {
      type: "checklist",
      heading: "Send these with your booking",
      items: [
        "Flight number and arrival date",
        "Scheduled arrival time",
        "Number of passengers, including children",
        "Number of suitcases and large items",
        "Makkah hotel name",
        "Contact number that will work in Saudi Arabia",
      ],
    },
    {
      type: "cta",
      heading: "Book a Staria for your arrival",
      copy: "Your flight, your group, your bags and your hotel. Send those and we confirm the Staria and price before you fly.",
      button: "Book a Staria for My Arrival",
      whatsapp: "Hello Al Safa Taxi, please book a Staria from Jeddah Airport to Makkah. Our flight details are:",
      dark: true,
    },
    {
      type: "faq",
      title: "Staria Airport Transfer FAQs",
      faqs: [
        { question: "Is a Staria worth it for an airport transfer?", answer: "For a family or group with luggage, often yes: everyone travels together and the suitcases fit in one vehicle. For one or two people with light bags, a sedan is usually enough." },
        { question: "How will the driver know when we have landed?", answer: "From the flight details you send, plus a message from your group's contact person after landing and again after baggage collection." },
        { question: "What if our flight arrives late at night?", answer: "Night arrivals are common at Jeddah. The pickup is planned from your flight time, and the booking line can be reached at any hour." },
        { question: "Can the Staria take us to the Haram instead of the hotel?", answer: "We can plan the nearest practical drop-off point. Vehicle access near the mosque is controlled, so we agree it with you in advance." },
      ],
    },
    {
      type: "related",
      heading: "Related pages",
      links: [
        { label: "Jeddah Airport to Makkah taxi", href: "/routes/jeddah-airport-to-makkah", note: "The route for every vehicle size." },
        { label: "7 seater from Jeddah Airport", href: "/routes/jeddah-airport-to-makkah/7-seater", note: "If any 7 seater will do." },
        { label: "Hyundai Staria, Jeddah to Makkah", href: "/routes/jeddah-to-makkah/staria", note: "Starting from a Jeddah address instead." },
        { label: "Jeddah Airport (JED)", href: "/airports/jeddah-airport", note: "Terminals, arrivals and departures." },
      ],
    },
  ],
};

export const makkahToMadinahStaria: VehicleRoutePage = {
  route: "makkah-to-madinah",
  vehicle: "staria",
  metaTitle: "Staria Makkah to Madinah",
  metaDescription:
    "Make the 450 km journey from Makkah to Madinah as one group in a private Hyundai Staria, with luggage space, a departure time you choose and planned stops.",
  h1: "Hyundai Staria from Makkah to Madinah",
  eyebrow: "Intercity · Hyundai Staria",
  lead: "Five hours between the two holy cities in a private Staria: your departure time, your stops, and room for everyone and everything you are taking to Madinah.",
  hero: "journey",
  heroSideImage: img.staria,
  heroPoints: ["Private Staria with driver", "Departure time you choose", "Room for a multi-day stay's luggage"],
  primaryCta: "Request a Staria Quote",
  mobileCta: "Request a Staria",
  whatsappText: "Hello Al Safa Taxi, I would like a Hyundai Staria from Makkah to Madinah.",
  blocks: [
    {
      type: "answer",
      question: "Is a Staria a good choice from Makkah to Madinah?",
      answer:
        "For families and groups, often yes. The road is roughly 450 km and usually four and a half to five hours before stops, and a minivan gives each passenger a seat and the luggage its own space for that length of time.",
    },
    {
      type: "prose",
      heading: "Planning a group journey between the two holy cities",
      paragraphs: [
        "For most groups this transfer sits in the middle of a longer itinerary: several days in Makkah, then Madinah, then home. That shapes the plan. You are leaving with the luggage of the whole trip, you have a hotel checkout behind you and a check-in ahead, and the day needs to fit around both.",
        "Start with the Madinah check-in time and work backwards: the road, a stop or two, the time it takes to leave the Makkah hotel area, and the time it takes a group to get downstairs with its bags. That usually gives a departure time that feels early, which is generally the right one.",
        "If the group is large, decide who is the contact person for the day. One phone number for the driver, one person who knows the plan, and the morning goes far more smoothly.",
      ],
    },
    {
      type: "cards",
      heading: "What makes a long ride comfortable for a group",
      columns: 2,
      items: [
        { title: "Space per person", copy: "On a five-hour road, a seat each matters more than anything else. A minivan avoids the middle-of-the-back-seat problem." },
        { title: "Your departure time", copy: "A private vehicle leaves when your group is ready, not on a fixed timetable." },
        { title: "Planned stops", copy: "Agree before you set off where you want to stop for prayer, food or rest." },
        { title: "Quiet time", copy: "Children and older passengers can rest. Keep a light blanket handy; the air conditioning can feel cool after an hour." },
      ],
    },
    {
      type: "timeline",
      heading: "The shape of the day",
      style: "journey",
      steps: [
        { title: "Checkout", copy: "Luggage down, key returned, group in the lobby." },
        { title: "Pickup", copy: "The Staria at the agreed point near your Makkah hotel." },
        { title: "Highway", copy: "The long road north." },
        { title: "Rest stop", copy: "If you planned one." },
        { title: "Madinah", copy: "Drop-off at the practical point for your hotel." },
      ],
    },
    {
      type: "prose",
      heading: "Luggage from a multi-day stay",
      tone: "sand",
      paragraphs: [
        "Bags grow over a stay in Makkah. Count everything the evening before, including gifts, Zamzam containers and the bag that was bought on the last day. If the total has changed since you booked, tell us, because it is easier to adjust the vehicle the night before than at the hotel door.",
        "Keep a small bag in the cabin with medicines, documents, chargers and water. On a five-hour road, nobody wants to stop and unload the back to find a charger.",
      ],
    },
    {
      type: "capacity",
      heading: "Staria at a glance for this route",
      items: [
        { label: "Distance", value: "About 450 km" },
        { label: "Road time", value: "About 4.5 to 5 hours before stops" },
        { label: "Suits", value: "Families and groups with luggage" },
        { label: "Pickup / drop-off", value: "Makkah hotel to Madinah hotel" },
      ],
      note: stariaNote,
    },
    {
      type: "faq",
      title: "Staria Makkah to Madinah FAQs",
      faqs: [
        { question: "How many stops should we plan?", answer: "Most groups are comfortable with one proper stop around the middle of the road. Families with young children may want two. Tell us when you book." },
        { question: "Can the Staria collect us from a hotel near the Haram?", answer: "Yes, from the practical pickup point for your hotel. Streets close to the mosque can be restricted, so we confirm the point beforehand." },
        { question: "Will all our luggage fit after a week in Makkah?", answer: "Usually, for a family. Send the updated bag count the day before so we can confirm, or adjust the vehicle if the total has grown a lot." },
        { question: "Can we book the Madinah to Jeddah leg at the same time?", answer: "Yes. Send both dates and we plan the two journeys together, with the second one worked back from your flight." },
      ],
    },
    {
      type: "cta",
      heading: "Request a Staria for the road to Madinah",
      copy: "Send the date, your preferred departure time, both hotel names, and the number of passengers and bags. We confirm the Staria and the price.",
      button: "Request a Staria Quote",
      whatsapp: "Hello Al Safa Taxi, please quote a Staria from Makkah to Madinah.",
    },
    {
      type: "related",
      heading: "Related pages",
      links: [
        { label: "Makkah to Madinah taxi", href: "/routes/makkah-to-madinah", note: "The route itself." },
        { label: "Staria, Madinah to Makkah", href: "/routes/madinah-to-makkah/staria", note: "The return direction." },
        { label: "7 seater, Makkah to Madinah", href: "/routes/makkah-to-madinah/7-seater", note: "Any 7 seater rather than the Staria in particular." },
        { label: "Umrah transportation", href: "/umrah-transportation", note: "Planning the whole trip." },
      ],
    },
  ],
};

export const madinahToMakkahStaria: VehicleRoutePage = {
  route: "madinah-to-makkah",
  vehicle: "staria",
  metaTitle: "Staria Madinah to Makkah",
  metaDescription:
    "Madinah hotel to Makkah hotel in a private Hyundai Staria: room for the group and luggage, a stop if you ask for one and a planned arrival.",
  h1: "Hyundai Staria from Madinah to Makkah",
  eyebrow: "Madinah hotel to Makkah hotel",
  lead: "A private Staria from your hotel in Madinah to your hotel in Makkah, organised around checkout, the group's luggage and an arrival in the busiest part of Makkah.",
  hero: "vehicle",
  heroImage: img.staria,
  heroSideImage: img.medFacade,
  heroPoints: ["Hotel pickup in Madinah", "Stop on the way if requested", "Drop-off agreed for your Makkah hotel"],
  primaryCta: "Book the Staria",
  mobileCta: "Book the Staria",
  whatsappText: "Hello Al Safa Taxi, we would like a Staria from Madinah to Makkah.",
  blocks: [
    {
      type: "answer",
      question: "Can I book a Staria from Madinah to Makkah?",
      answer:
        "Yes. A Hyundai Staria with a private driver can collect your group from your Madinah hotel and drive to Makkah, roughly 450 km and about four and a half to five hours, plus any stops you request.",
    },
    {
      type: "timeline",
      heading: "From your Madinah hotel to your Makkah hotel",
      style: "arrival",
      steps: [
        { title: "Hotel pickup", copy: "At the agreed point near your Madinah hotel." },
        { title: "Vehicle loading", copy: "The group's luggage goes in the back in one go." },
        { title: "Intercity journey", copy: "The long road south towards Makkah." },
        { title: "Planned stop", copy: "If you requested one, for example at the miqat or for a break." },
        { title: "Makkah arrival", copy: "Drop-off at the practical point for your hotel." },
      ],
    },
    {
      type: "prose",
      heading: "Getting a group out of a Madinah hotel on time",
      paragraphs: [
        "The hardest part of this journey is often the first half hour. Checkout queues, a last visit to the mosque, one person still packing, and a vehicle that cannot wait long on a busy street near the Prophet's Mosque: it adds up quickly.",
        "Three things help. Bring every bag to the lobby before anyone goes out. Agree a single meeting point and time with the whole group. And give us the real time you will be ready, not the hopeful one, so the pickup is planned for when you will actually be there.",
        "If the group is split between two hotels, tell us. One vehicle can usually collect from two nearby hotels, but it has to be planned.",
      ],
    },
    {
      type: "checklist",
      heading: "Information that helps us book the Staria",
      tone: "sand",
      items: [
        "Madinah hotel name and checkout time",
        "Makkah hotel name",
        "Travel date and preferred departure time",
        "Number of passengers and suitcases",
        "Whether you want a stop at Dhul Hulayfah (Abyar Ali) or a rest stop",
        "Any mobility needs or a child seat request",
      ],
    },
    {
      type: "prose",
      heading: "Arriving in Makkah with a group",
      paragraphs: [
        "You reach Makkah after a long road, and the final kilometres near the Masjid al-Haram are the busiest. Vehicle access close to the mosque is controlled and can change, so the Staria may stop a short walk from your hotel entrance.",
        "Sending the hotel name in advance lets us confirm the drop-off point before the day. It also helps to tell the hotel your expected arrival time, so that someone can help with the luggage when you arrive.",
        "If your group is planning Umrah soon after arrival, mention it. It changes nothing about the road, but it helps us plan a drop-off that suits the rest of your day.",
      ],
    },
    {
      type: "faq",
      title: "Staria Madinah to Makkah FAQs",
      faqs: [
        { question: "Can we stop at Abyar Ali on the way?", answer: "Yes, if requested when you book. We allow time for the stop. For guidance on what to do there, please ask your scholar or tour operator." },
        { question: "Can the Staria collect from two hotels in Madinah?", answer: "Often yes, if they are close to each other. Tell us both hotels and the group in each when you book." },
        { question: "How early should we book the Staria?", answer: "As early as your plans allow, especially in busy seasons, so we can confirm the vehicle for your date." },
        { question: "What if our checkout time changes?", answer: "Message us as soon as you know. It is easier to move a pickup the evening before than on the morning itself." },
      ],
    },
    {
      type: "cta",
      heading: "Book the Staria from Madinah",
      copy: "Send both hotel names, the date, your departure time, the group and the bags, and tell us about any stop. We confirm the Staria and the price.",
      button: "Book the Staria",
      whatsapp: "Hello Al Safa Taxi, please book a Staria from Madinah to Makkah.",
      dark: true,
    },
    {
      type: "related",
      heading: "Related pages",
      links: [
        { label: "Madinah to Makkah taxi", href: "/routes/madinah-to-makkah", note: "The route for any vehicle." },
        { label: "7 seater, Madinah to Makkah", href: "/routes/madinah-to-makkah/7-seater", note: "If any 7 seater suits you." },
        { label: "Staria, Makkah to Madinah", href: "/routes/makkah-to-madinah/staria", note: "The opposite direction." },
        { label: "Madinah taxi service", href: "/locations/madinah", note: "Rides around Madinah before you leave." },
      ],
    },
  ],
};
