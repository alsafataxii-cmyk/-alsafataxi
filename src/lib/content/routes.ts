import type { ContentSection, Faq } from "@/lib/content/types";

export type RoutePage = {
  slug: string;
  from: string;
  to: string;
  distance: string;
  duration: string;
  metaDescription: string;
  h1: string;
  heroDescription: string;
  intro: string;
  sections: ContentSection[];
  locationSlugs: string[];
  airportSlug?: string;
  serviceSlugs: string[];
  relatedRouteSlugs: string[];
  faqs: Faq[];
};

const quoteAnswer =
  "Fares depend on the vehicle and the number of passengers. Send your pickup, drop-off, date and passenger count through our booking page or on WhatsApp and we will confirm the price and vehicle before you travel.";

const stopsAnswer =
  "Yes. Tell us in advance if you need stops for prayer, meals or rest, and we will plan them into the journey.";

export const routePages: RoutePage[] = [
  {
    slug: "jeddah-airport-to-makkah",
    from: "Jeddah Airport",
    to: "Makkah",
    distance: "Roughly 100 km",
    duration: "Usually 1 to 1.5 hours",
    metaDescription:
      "Private taxi from Jeddah Airport (JED) to Makkah hotels. Roughly 100 km, 1 to 1.5 hours. Book your Umrah airport transfer 24/7 with Al Safa Taxi.",
    h1: "Jeddah Airport to Makkah Taxi",
    heroDescription:
      "A private transfer from King Abdulaziz International Airport straight to your Makkah hotel, for Umrah and family travel.",
    intro:
      "Almost every visitor to Makkah arrives through Jeddah, and the road from King Abdulaziz International Airport to the Holy City is a busy route for Umrah and Hajj travellers. A private transfer means one vehicle from the arrivals hall to your hotel, with no changing cars or handling luggage between connections.",
    sections: [
      {
        heading: "What to expect on arrival",
        paragraphs: [
          "After landing you will go through immigration and collect your bags before meeting your driver, so the exact timing depends on your flight and the queues on the day. Share your flight number when you book and message us if you are delayed, so the pickup can be adjusted.",
        ],
      },
      {
        heading: "The drive to Makkah",
        paragraphs: [
          "The journey is roughly 100 km and usually takes between one and one and a half hours. It can take longer at peak times, on Fridays and during the Umrah and Hajj seasons. Vehicle access near the Masjid al-Haram is restricted, so your driver will take you to the closest practical drop-off point for your hotel.",
        ],
      },
      {
        heading: "Arriving for Umrah",
        paragraphs: [
          "If you plan to perform Umrah soon after arriving, tell us when you book so the pickup and drop-off can be planned around your intentions. Give us your group size and luggage so we can match a car, SUV or van.",
        ],
      },
    ],
    locationSlugs: ["jeddah", "makkah"],
    airportSlug: "jeddah-airport",
    serviceSlugs: ["airport-transfers", "hotel-transfers"],
    relatedRouteSlugs: ["makkah-to-jeddah-airport", "jeddah-to-makkah", "jeddah-airport-to-madinah"],
    faqs: [
      {
        question: "How long is the drive from Jeddah Airport to Makkah?",
        answer:
          "Usually one to one and a half hours for roughly 100 km. Traffic, the day of the week and the Umrah and Hajj seasons can add time.",
      },
      {
        question: "Can I book Jeddah Airport to Makkah in advance for Umrah?",
        answer:
          "Yes. Book through our booking page, on WhatsApp or by phone with your flight number, arrival time, passenger count and hotel name.",
      },
      {
        question: "Will the driver take us to the hotel door?",
        answer:
          "Your driver will go to the closest practical drop-off point. Roads around the Masjid al-Haram are restricted and can change with crowd levels, so share your hotel name in advance.",
      },
      {
        question: "Can we stop on the way to Makkah?",
        answer: stopsAnswer,
      },
      {
        question: "How much is a taxi from Jeddah Airport to Makkah?",
        answer: quoteAnswer,
      },
    ],
  },
  {
    slug: "makkah-to-jeddah-airport",
    from: "Makkah",
    to: "Jeddah Airport",
    distance: "Roughly 100 km",
    duration: "Usually 1 to 1.5 hours",
    metaDescription:
      "Private taxi from Makkah hotels to Jeddah Airport (JED). Roughly 100 km, 1 to 1.5 hours. Plan your departure transfer with Al Safa Taxi, 24/7.",
    h1: "Makkah to Jeddah Airport Taxi",
    heroDescription:
      "A planned departure transfer from your Makkah hotel to King Abdulaziz International Airport, with time built in for your flight.",
    intro:
      "Leaving Makkah for a flight is worth planning carefully. The road to Jeddah Airport is about 100 km, but the time you actually need depends on your airline, the hour of departure and the traffic around your hotel. We schedule the pickup with you, working backwards from your flight.",
    sections: [
      {
        heading: "Plan your departure time",
        paragraphs: [
          "Start from your flight: check your airline's check-in requirements, then add the road journey of one to one and a half hours and the time it takes to leave the hotel area, which can be slow near the Haram at peak hours. We recommend leaving a generous buffer, especially on Fridays and during busy Umrah and Hajj periods.",
        ],
      },
      {
        heading: "Hotel pickup in Makkah",
        paragraphs: [
          "Give us your hotel name and checkout time when you book. Vehicle access near the Haram is restricted, so the pickup point may be a short walk from the hotel entrance. Confirm it in advance so you are not searching for the car with your luggage.",
        ],
      },
      {
        heading: "Luggage after your trip",
        paragraphs: [
          "Bags tend to grow over a pilgrimage, with gifts and purchases added along the way. Tell us how many bags you are carrying so that the right vehicle is sent.",
        ],
      },
    ],
    locationSlugs: ["makkah", "jeddah"],
    airportSlug: "jeddah-airport",
    serviceSlugs: ["airport-transfers", "hotel-transfers"],
    relatedRouteSlugs: ["jeddah-airport-to-makkah", "makkah-to-jeddah", "makkah-to-madinah"],
    faqs: [
      {
        question: "How early should I leave Makkah for my flight?",
        answer:
          "It depends on your airline, terminal and time of day. Check your airline's check-in guidance, then add the one to one and a half hour drive and a traffic buffer. We will help you settle on a pickup time when you book.",
      },
      {
        question: "Can you collect me from Makkah at night for an early flight?",
        answer:
          "Yes. Our booking line is available 24 hours a day and we can schedule night and early-morning pickups.",
      },
      {
        question: "Which terminal at Jeddah Airport will I be dropped at?",
        answer:
          "That depends on your airline. Share your flight number when you book and we will confirm the terminal.",
      },
      {
        question: "Can I book a transfer for a large family?",
        answer:
          "Yes. Tell us the number of passengers and bags and we will suggest a suitable vehicle.",
      },
      {
        question: "How much is a taxi from Makkah to Jeddah Airport?",
        answer: quoteAnswer,
      },
    ],
  },
  {
    slug: "jeddah-airport-to-madinah",
    from: "Jeddah Airport",
    to: "Madinah",
    distance: "Roughly 430 km",
    duration: "About 4 to 5 hours",
    metaDescription:
      "Private taxi from Jeddah Airport (JED) to Madinah hotels. Roughly 430 km, 4 to 5 hours. Comfortable long-distance transfers with Al Safa Taxi, 24/7.",
    h1: "Jeddah Airport to Madinah Taxi",
    heroDescription:
      "A private long-distance transfer from Jeddah Airport to your Madinah hotel, planned around your group and luggage.",
    intro:
      "Some pilgrims land in Jeddah and head to Madinah first, before continuing to Makkah. It is a long road journey after a flight, so comfort and planning matter. A private car takes you from the arrivals hall to your Madinah hotel with your whole group in one vehicle.",
    sections: [
      {
        heading: "A long journey, done comfortably",
        paragraphs: [
          "The distance is roughly 430 km and the drive takes about four to five hours. Travelling straight after a flight is tiring, especially with children or older relatives, so having a driver and a vehicle sized for your luggage makes a real difference.",
        ],
      },
      {
        heading: "Stops on the way",
        paragraphs: [
          "Let us know if you would like stops for prayer, meals or rest. We will plan them into the schedule so the journey does not feel rushed.",
        ],
      },
      {
        heading: "Private car or train",
        paragraphs: [
          "The Haramain high-speed railway links Makkah, Jeddah and Madinah and is an option some travellers use. A private car suits people who want door-to-door travel with luggage, flexible timing, or a family and group travelling together.",
        ],
      },
      {
        heading: "Arriving in Madinah",
        paragraphs: [
          "Many hotels near the Prophet's Mosque have restricted vehicle access, so the drop-off point depends on your hotel's location. Share the hotel name when you book.",
        ],
      },
    ],
    locationSlugs: ["jeddah", "madinah"],
    airportSlug: "jeddah-airport",
    serviceSlugs: ["airport-transfers", "intercity-transfers"],
    relatedRouteSlugs: ["jeddah-to-madinah", "jeddah-airport-to-makkah", "madinah-to-makkah"],
    faqs: [
      {
        question: "How long is the drive from Jeddah Airport to Madinah?",
        answer: "Roughly 430 km, which takes about four to five hours depending on traffic and stops.",
      },
      {
        question: "Can we stop for prayer or rest on the way?",
        answer: stopsAnswer,
      },
      {
        question: "Can I book a late-night arrival transfer to Madinah?",
        answer:
          "Yes. We take bookings 24 hours a day. Share your flight number and let us know if your plans change.",
      },
      {
        question: "Is a private car better than the Haramain train?",
        answer:
          "It depends on your priorities. The train is an option between the cities; a private car gives you door-to-door travel, flexible timing and space for luggage and family.",
      },
      {
        question: "How much is a taxi from Jeddah Airport to Madinah?",
        answer: quoteAnswer,
      },
    ],
  },
  {
    slug: "jeddah-to-makkah",
    from: "Jeddah",
    to: "Makkah",
    distance: "Roughly 80 km",
    duration: "About 1 hour in normal traffic",
    metaDescription:
      "Private taxi from Jeddah to Makkah, roughly 80 km and about an hour. Hotel pickups, Umrah trips and family travel with Al Safa Taxi, 24/7.",
    h1: "Jeddah to Makkah Taxi",
    heroDescription:
      "Private rides from Jeddah hotels and homes to Makkah, for Umrah, family visits and business.",
    intro:
      "Jeddah and Makkah are close enough to travel between in a morning, and many residents and visitors make the trip for Umrah, family visits or work. A private taxi removes the need to arrange parking or a lift, and lets you set the timing.",
    sections: [
      {
        heading: "Umrah from Jeddah",
        paragraphs: [
          "Residents and visitors staying in Jeddah often travel to Makkah for Umrah. We arrange pickups from your hotel or home, and can plan the return trip for a time you agree in advance, so you are not left looking for a ride back when the crowds are heaviest.",
        ],
      },
      {
        heading: "Hotel to hotel and family travel",
        paragraphs: [
          "If you are splitting your stay between Jeddah and Makkah, we can move you and your luggage between hotels in one vehicle. For larger families, tell us the number of passengers so we can send a suitable car or van.",
        ],
      },
      {
        heading: "Timing the journey",
        paragraphs: [
          "The road is roughly 80 km and takes about an hour in normal traffic. Fridays, prayer times and the Umrah and Hajj seasons can all slow it down, so it is worth leaving extra time if you have a fixed appointment.",
        ],
      },
    ],
    locationSlugs: ["jeddah", "makkah"],
    serviceSlugs: ["intercity-transfers", "hotel-transfers"],
    relatedRouteSlugs: ["makkah-to-jeddah", "jeddah-airport-to-makkah", "jeddah-to-madinah"],
    faqs: [
      {
        question: "How far is Jeddah from Makkah?",
        answer: "Roughly 80 km, which is about an hour by road in normal traffic.",
      },
      {
        question: "Can I book a same-day return from Jeddah to Makkah?",
        answer:
          "Yes. Tell us your outbound time and when you would like to be collected for the return, and we will plan it with you.",
      },
      {
        question: "Can you pick up from a Jeddah hotel or private address?",
        answer:
          "Yes. Give us the address or hotel name when you book and we will arrange the pickup.",
      },
      {
        question: "Do you have vehicles for large families?",
        answer:
          "Yes. Tell us how many passengers and bags there are and we will suggest a suitable vehicle.",
      },
      {
        question: "How much is a taxi from Jeddah to Makkah?",
        answer: quoteAnswer,
      },
    ],
  },
  {
    slug: "makkah-to-jeddah",
    from: "Makkah",
    to: "Jeddah",
    distance: "Roughly 80 km",
    duration: "About 1 hour in normal traffic",
    metaDescription:
      "Private taxi from Makkah to Jeddah, roughly 80 km and about an hour. Hotel pickups, business trips and city transfers with Al Safa Taxi, 24/7.",
    h1: "Makkah to Jeddah Taxi",
    heroDescription:
      "Private rides from Makkah to Jeddah city, hotels and business addresses on the Red Sea coast.",
    intro:
      "Heading from Makkah to Jeddah for business, a stay on the coast or a family visit is a short drive but not always a simple one. A private taxi collects you from your Makkah hotel or address and takes you to any destination in Jeddah, not just the airport.",
    sections: [
      {
        heading: "Leaving Makkah",
        paragraphs: [
          "Traffic in central Makkah can be heavy around prayer times, so we suggest agreeing a pickup time and place that avoids the busiest moments. Tell us your hotel and we will confirm the best pickup point.",
        ],
      },
      {
        heading: "Arriving in Jeddah",
        paragraphs: [
          "Jeddah is spread along the coast, and destinations such as Al-Balad, the Corniche, business districts and hotels can be far apart. Give us the exact address so we can plan the drop-off, or arrange a driver for the day if you have several stops.",
        ],
      },
      {
        heading: "Going to the airport instead?",
        paragraphs: [
          "If your destination is King Abdulaziz International Airport, see our Makkah to Jeddah Airport page, which covers how to time a departure transfer around your flight.",
        ],
      },
    ],
    locationSlugs: ["makkah", "jeddah"],
    serviceSlugs: ["intercity-transfers", "private-chauffeur"],
    relatedRouteSlugs: ["jeddah-to-makkah", "makkah-to-jeddah-airport", "makkah-to-madinah"],
    faqs: [
      {
        question: "How long does it take to go from Makkah to Jeddah?",
        answer:
          "About an hour for roughly 80 km in normal traffic, and longer at busy times or on Fridays.",
      },
      {
        question: "Can you take me to a specific address in Jeddah?",
        answer:
          "Yes. Share the address or hotel name when you book and we will drop you there.",
      },
      {
        question: "Can I hire a driver for the day in Jeddah after arriving?",
        answer:
          "Yes. Our private chauffeur service covers full-day and multi-stop itineraries. Tell us your plans when you book.",
      },
      {
        question: "Can I book a Makkah to Jeddah taxi at night?",
        answer: "Yes. Bookings are taken 24 hours a day.",
      },
      {
        question: "How much is a taxi from Makkah to Jeddah?",
        answer: quoteAnswer,
      },
    ],
  },
  {
    slug: "makkah-to-madinah",
    from: "Makkah",
    to: "Madinah",
    distance: "Roughly 450 km",
    duration: "About 4.5 to 5 hours",
    metaDescription:
      "Private taxi from Makkah to Madinah, roughly 450 km and 4.5 to 5 hours. Comfortable Umrah and family transfers with Al Safa Taxi, 24/7.",
    h1: "Makkah to Madinah Taxi",
    heroDescription:
      "A comfortable private journey between the two Holy Cities, planned around your group, luggage and prayer times.",
    intro:
      "After Umrah, many pilgrims continue to Madinah to visit the Prophet's Mosque. The road journey is long, and a private car gives your group control over timing, luggage and rest stops.",
    sections: [
      {
        heading: "Planning the journey",
        paragraphs: [
          "The distance is roughly 450 km and the drive takes about four and a half to five hours. Tell us when you would like to leave and we will plan around prayer times and the heat of the day, so that the journey is as comfortable as possible for children and older passengers.",
        ],
      },
      {
        heading: "Stops for prayer and rest",
        paragraphs: [
          "Long journeys are easier with regular breaks. Let us know if you want stops for prayer, meals or rest and we will build them into the schedule.",
        ],
      },
      {
        heading: "Private car or train",
        paragraphs: [
          "The Haramain high-speed railway connects Makkah, Jeddah and Madinah and some travellers prefer it. A private car is better suited to families and groups who want door-to-door travel, space for luggage and the freedom to choose their own departure time.",
        ],
      },
      {
        heading: "Arriving in Madinah",
        paragraphs: [
          "The area around Al-Masjid an-Nabawi has limited vehicle access. Share your hotel name when you book so we can plan the drop-off point in advance.",
        ],
      },
    ],
    locationSlugs: ["makkah", "madinah"],
    serviceSlugs: ["intercity-transfers", "ziyarat-tours"],
    relatedRouteSlugs: ["madinah-to-makkah", "makkah-to-jeddah", "jeddah-to-madinah"],
    faqs: [
      {
        question: "How long is the drive from Makkah to Madinah?",
        answer:
          "Roughly 450 km, which takes about four and a half to five hours depending on traffic and stops.",
      },
      {
        question: "Can we stop for prayer on the way?",
        answer: stopsAnswer,
      },
      {
        question: "Can we add Ziyarat in Madinah when we arrive?",
        answer:
          "Yes. Many pilgrims combine the journey with Ziyarat to places such as Quba Mosque and Mount Uhud. Mention it when you book and we will plan the timing.",
      },
      {
        question: "Is there space for a large family and luggage?",
        answer:
          "Tell us the number of passengers and bags and we will suggest a suitable vehicle, including larger vans for groups.",
      },
      {
        question: "How much is a taxi from Makkah to Madinah?",
        answer: quoteAnswer,
      },
    ],
  },
  {
    slug: "madinah-to-makkah",
    from: "Madinah",
    to: "Makkah",
    distance: "Roughly 450 km",
    duration: "About 4.5 to 5 hours, plus any planned stops",
    metaDescription:
      "Private taxi from Madinah to Makkah, roughly 450 km with a planned stop at the miqat if needed. Umrah and family transfers with Al Safa Taxi, 24/7.",
    h1: "Madinah to Makkah Taxi",
    heroDescription:
      "A private journey from Madinah to Makkah, with a planned stop at the miqat for pilgrims travelling for Umrah.",
    intro:
      "Travelling from Madinah to Makkah for Umrah involves more than the road itself: pilgrims commonly need to stop at the miqat on the way. A private car lets you plan that stop, and the rest of the journey, around your group.",
    sections: [
      {
        heading: "Stopping at the miqat",
        paragraphs: [
          "Pilgrims travelling from Madinah to Makkah for Umrah commonly enter ihram at Dhul Hulayfah (Abyar Ali), a short drive from Madinah on the road towards Makkah. Tell us in advance if you need this stop so it is built into the schedule, with enough time to prepare and pray.",
        ],
      },
      {
        heading: "The journey to Makkah",
        paragraphs: [
          "The distance is roughly 450 km and takes about four and a half to five hours without stops. Plan the departure with us around prayer times and heat, and let us know if you need stops for rest or meals.",
        ],
      },
      {
        heading: "Arriving in Makkah",
        paragraphs: [
          "Vehicle access near the Masjid al-Haram is restricted and changes with crowd levels, so your driver will take you to the closest practical drop-off for your hotel. Share the hotel name when you book.",
        ],
      },
    ],
    locationSlugs: ["madinah", "makkah"],
    airportSlug: "madinah-airport",
    serviceSlugs: ["intercity-transfers", "hotel-transfers"],
    relatedRouteSlugs: ["makkah-to-madinah", "madinah-to-jeddah", "jeddah-airport-to-makkah"],
    faqs: [
      {
        question: "Can you stop at the miqat on the way to Makkah?",
        answer:
          "Yes. Pilgrims from Madinah commonly stop at Dhul Hulayfah (Abyar Ali). Tell us when you book so the stop is included in the plan.",
      },
      {
        question: "How long is the journey from Madinah to Makkah?",
        answer:
          "Roughly 450 km, which is about four and a half to five hours of driving, plus any stops you plan.",
      },
      {
        question: "Can you collect us from Madinah Airport and go straight to Makkah?",
        answer:
          "Yes. Share your flight number and arrival time, and let us know about any stops you need on the way.",
      },
      {
        question: "Can I book a Madinah to Makkah taxi for a family?",
        answer:
          "Yes. Tell us the passenger count and luggage and we will suggest a suitable vehicle.",
      },
      {
        question: "How much is a taxi from Madinah to Makkah?",
        answer: quoteAnswer,
      },
    ],
  },
  {
    slug: "jeddah-to-madinah",
    from: "Jeddah",
    to: "Madinah",
    distance: "Roughly 420 km",
    duration: "About 4 to 4.5 hours",
    metaDescription:
      "Private taxi from Jeddah to Madinah, roughly 420 km and 4 to 4.5 hours. Comfortable family and group transfers with Al Safa Taxi, 24/7.",
    h1: "Jeddah to Madinah Taxi",
    heroDescription:
      "Private long-distance rides from Jeddah hotels and homes to Madinah, for families, groups and business travellers.",
    intro:
      "Jeddah to Madinah is a long road journey, and the way you make it shapes the rest of your trip. A private car leaves when you are ready, carries all your luggage and takes your group from a Jeddah address to your Madinah hotel.",
    sections: [
      {
        heading: "From a Jeddah address to Madinah",
        paragraphs: [
          "We collect you from your Jeddah hotel or home, so you avoid transferring through a station or terminal with your bags. The distance is roughly 420 km and takes about four to four and a half hours in normal conditions.",
        ],
      },
      {
        heading: "Timing and comfort",
        paragraphs: [
          "Tell us when you want to arrive as well as when you want to leave. We can plan the departure around prayer times and the heat of the day, and build in stops if you need them.",
        ],
      },
      {
        heading: "Families and groups",
        paragraphs: [
          "For families and larger groups, one vehicle keeps everyone together and simplifies luggage. Tell us how many passengers and bags there are and we will suggest a car, SUV or van.",
        ],
      },
    ],
    locationSlugs: ["jeddah", "madinah"],
    serviceSlugs: ["intercity-transfers", "private-chauffeur"],
    relatedRouteSlugs: ["madinah-to-jeddah", "jeddah-airport-to-madinah", "jeddah-to-makkah"],
    faqs: [
      {
        question: "How long does it take to go from Jeddah to Madinah?",
        answer:
          "Roughly 420 km, which takes about four to four and a half hours depending on traffic and stops.",
      },
      {
        question: "Can we stop on the way?",
        answer: stopsAnswer,
      },
      {
        question: "Can you collect us from a Jeddah hotel?",
        answer:
          "Yes. Share the hotel name or address when you book and we will arrange the pickup.",
      },
      {
        question: "Can I book a Jeddah to Madinah taxi for a group?",
        answer:
          "Yes. Give us the number of passengers and bags and we will suggest a suitable vehicle.",
      },
      {
        question: "How much is a taxi from Jeddah to Madinah?",
        answer: quoteAnswer,
      },
    ],
  },
  {
    slug: "madinah-to-jeddah",
    from: "Madinah",
    to: "Jeddah",
    distance: "Roughly 420 km",
    duration: "About 4 to 4.5 hours",
    metaDescription:
      "Private taxi from Madinah to Jeddah or Jeddah Airport, roughly 420 km and 4 to 4.5 hours. Book with Al Safa Taxi, 24/7.",
    h1: "Madinah to Jeddah Taxi",
    heroDescription:
      "Private rides from Madinah to Jeddah city or King Abdulaziz International Airport, timed around your flight or schedule.",
    intro:
      "Madinah to Jeddah is often the last leg of a pilgrimage, ending either in Jeddah city or at the airport for a flight home. A private car lets you plan the departure around your onward plans instead of a fixed timetable.",
    sections: [
      {
        heading: "To Jeddah city",
        paragraphs: [
          "If you are staying in Jeddah after Madinah, we take you to your hotel or address. The distance is roughly 420 km and the drive takes about four to four and a half hours.",
        ],
      },
      {
        heading: "To Jeddah Airport for a flight",
        paragraphs: [
          "When you are heading to the airport, work backwards from your flight: your airline's check-in requirements, then the four to four and a half hour drive, then a generous buffer for traffic and stops. We will help you choose a pickup time when you book.",
        ],
      },
      {
        heading: "Combining Makkah on the way",
        paragraphs: [
          "Some travellers pass through Makkah on the way to Jeddah. If you want to add a stop, tell us in advance and we will plan the route and timing with you.",
        ],
      },
    ],
    locationSlugs: ["madinah", "jeddah"],
    airportSlug: "jeddah-airport",
    serviceSlugs: ["intercity-transfers", "airport-transfers"],
    relatedRouteSlugs: ["jeddah-to-madinah", "madinah-to-makkah", "makkah-to-jeddah-airport"],
    faqs: [
      {
        question: "How long is the journey from Madinah to Jeddah?",
        answer:
          "Roughly 420 km, which takes about four to four and a half hours depending on traffic and stops.",
      },
      {
        question: "Can you take me from Madinah to Jeddah Airport?",
        answer:
          "Yes. Give us your flight details and we will help you choose a pickup time that leaves a comfortable buffer.",
      },
      {
        question: "Can we stop in Makkah on the way?",
        answer:
          "Yes. Tell us in advance if you want to add a stop and we will plan the route and timing.",
      },
      {
        question: "Can I book an early-morning departure from Madinah?",
        answer: "Yes. Bookings are taken 24 hours a day.",
      },
      {
        question: "How much is a taxi from Madinah to Jeddah?",
        answer: quoteAnswer,
      },
    ],
  },
  {
    slug: "makkah-to-taif",
    from: "Makkah",
    to: "Taif",
    distance: "Roughly 90 km",
    duration: "About 1.5 hours",
    metaDescription:
      "Private taxi from Makkah to Taif, roughly 90 km and about 1.5 hours across the Sarawat mountains. Book with Al Safa Taxi, 24/7.",
    h1: "Makkah to Taif Taxi",
    heroDescription:
      "A private journey from Makkah up into the Taif highlands, for day trips or overnight stays.",
    intro:
      "Taif is only about 90 km from Makkah but a different world once you arrive: cooler, greener and set among mountains. Many people make the trip as a day out or a short stay, and a private driver makes the climb far easier.",
    sections: [
      {
        heading: "The mountain road",
        paragraphs: [
          "The journey takes about an hour and a half, and much of it climbs through the Sarawat mountains on steep, winding roads. Having an experienced driver at the wheel is a comfort for families and older passengers who would rather enjoy the view.",
        ],
      },
      {
        heading: "A change of climate",
        paragraphs: [
          "Taif sits much higher than Makkah, so temperatures are noticeably cooler, particularly in summer. That is a large part of its appeal for residents of Makkah and Jeddah looking for a break.",
        ],
      },
      {
        heading: "Day trip or overnight",
        paragraphs: [
          "We can arrange a one-way transfer to your hotel or resort, or a round trip with a return time agreed in advance. Tell us your plans when you book and we will match the arrangement to them.",
        ],
      },
    ],
    locationSlugs: ["makkah", "taif"],
    airportSlug: "taif-airport",
    serviceSlugs: ["intercity-transfers", "private-chauffeur"],
    relatedRouteSlugs: ["taif-to-makkah", "jeddah-to-taif", "taif-to-jeddah"],
    faqs: [
      {
        question: "How long is the drive from Makkah to Taif?",
        answer:
          "Roughly 90 km, which takes about one and a half hours depending on the route and traffic.",
      },
      {
        question: "Can I book a round trip from Makkah to Taif in one day?",
        answer:
          "Yes. Tell us when you would like to arrive and when you want to be collected for the return.",
      },
      {
        question: "Can you take us to a hotel or resort in Taif?",
        answer:
          "Yes. Share the hotel or resort name and we will drop you there.",
      },
      {
        question: "Is the road difficult?",
        answer:
          "It includes steep, winding mountain sections, which is why many visitors prefer to be driven.",
      },
      {
        question: "How much is a taxi from Makkah to Taif?",
        answer: quoteAnswer,
      },
    ],
  },
  {
    slug: "taif-to-makkah",
    from: "Taif",
    to: "Makkah",
    distance: "Roughly 90 km",
    duration: "About 1.5 hours",
    metaDescription:
      "Private taxi from Taif to Makkah, roughly 90 km with a planned miqat stop for Umrah if needed. Book with Al Safa Taxi, 24/7.",
    h1: "Taif to Makkah Taxi",
    heroDescription:
      "A private journey from Taif down to Makkah, with a planned stop at the miqat for pilgrims travelling for Umrah.",
    intro:
      "Travelling from Taif to Makkah is a descent from the mountains to the Holy City. For pilgrims coming for Umrah, the journey also passes the miqat for travellers on the Taif road, so a planned stop matters.",
    sections: [
      {
        heading: "Stopping at the miqat",
        paragraphs: [
          "Travellers from Taif commonly pass Qarn al-Manazil, also known as As-Sayl al-Kabir, on the road to Makkah. If you are travelling for Umrah, tell us when you book so the stop is built into the journey with time to prepare and pray.",
        ],
      },
      {
        heading: "Down the mountain road",
        paragraphs: [
          "The road from Taif descends through steep, winding sections, and the journey takes about an hour and a half. A calm, experienced driver makes the descent more comfortable, particularly with children or older passengers.",
        ],
      },
      {
        heading: "Arriving in Makkah",
        paragraphs: [
          "Vehicle access near the Masjid al-Haram is restricted, so the drop-off is at the closest practical point to your hotel. Share the hotel name when you book.",
        ],
      },
    ],
    locationSlugs: ["taif", "makkah"],
    airportSlug: "taif-airport",
    serviceSlugs: ["intercity-transfers", "hotel-transfers"],
    relatedRouteSlugs: ["makkah-to-taif", "taif-to-jeddah", "jeddah-to-makkah"],
    faqs: [
      {
        question: "Can you stop at the miqat between Taif and Makkah?",
        answer:
          "Yes. Travellers on the Taif road commonly stop at Qarn al-Manazil (As-Sayl al-Kabir). Tell us when you book so the stop is planned.",
      },
      {
        question: "How long is the journey from Taif to Makkah?",
        answer: "Roughly 90 km, which takes about one and a half hours depending on the route and traffic.",
      },
      {
        question: "Can you collect us from Taif Airport?",
        answer:
          "Yes. Share your flight number and arrival time and we will arrange the pickup and onward journey to Makkah.",
      },
      {
        question: "Can I book Taif to Makkah for a group?",
        answer:
          "Yes. Give us the passenger count and luggage and we will suggest a suitable vehicle.",
      },
      {
        question: "How much is a taxi from Taif to Makkah?",
        answer: quoteAnswer,
      },
    ],
  },
  {
    slug: "jeddah-to-taif",
    from: "Jeddah",
    to: "Taif",
    distance: "Roughly 170 km",
    duration: "About 2 to 2.5 hours",
    metaDescription:
      "Private taxi from Jeddah to Taif, roughly 170 km and 2 to 2.5 hours. Coast-to-highlands day trips and transfers with Al Safa Taxi, 24/7.",
    h1: "Jeddah to Taif Taxi",
    heroDescription:
      "Private rides from Jeddah up to Taif's cooler highlands, for weekends, summer breaks and day trips.",
    intro:
      "The drive from Jeddah's coastal heat up to Taif is one of the region's classic escapes. It is roughly 170 km, and a private car makes it an easy weekend or day trip without arranging your own driver or parking.",
    sections: [
      {
        heading: "From the coast to the highlands",
        paragraphs: [
          "The journey takes about two to two and a half hours, and the last stretch climbs into the mountains. Temperatures in Taif are noticeably cooler than in Jeddah, which is why many families head there in the summer months.",
        ],
      },
      {
        heading: "Weekend breaks and day trips",
        paragraphs: [
          "We can arrange a one-way transfer to your hotel or resort, or a round trip with a return time agreed in advance. If you want to visit rose farms or viewpoints, tell us and we will plan the day around them.",
        ],
      },
      {
        heading: "Families and luggage",
        paragraphs: [
          "For families, one vehicle carries everyone and their luggage together. Give us the number of passengers and bags when you book so we can suggest the right car or van.",
        ],
      },
    ],
    locationSlugs: ["jeddah", "taif"],
    serviceSlugs: ["intercity-transfers", "private-chauffeur"],
    relatedRouteSlugs: ["taif-to-jeddah", "makkah-to-taif", "jeddah-to-makkah"],
    faqs: [
      {
        question: "How long does it take to go from Jeddah to Taif?",
        answer: "Roughly 170 km, which takes about two to two and a half hours depending on traffic.",
      },
      {
        question: "Can I book a return trip in one day?",
        answer:
          "Yes. Tell us when you want to arrive and when you would like to be collected for the return.",
      },
      {
        question: "Can you take us to a resort or hotel in Taif?",
        answer: "Yes. Share the name or address when you book.",
      },
      {
        question: "Can I hire a driver for the day in Taif?",
        answer:
          "Yes. Our private chauffeur service covers multi-stop days. Tell us your plans and we will arrange it.",
      },
      {
        question: "How much is a taxi from Jeddah to Taif?",
        answer: quoteAnswer,
      },
    ],
  },
  {
    slug: "taif-to-jeddah",
    from: "Taif",
    to: "Jeddah",
    distance: "Roughly 170 km",
    duration: "About 2 to 2.5 hours",
    metaDescription:
      "Private taxi from Taif to Jeddah or Jeddah Airport, roughly 170 km and 2 to 2.5 hours. Book with Al Safa Taxi, 24/7.",
    h1: "Taif to Jeddah Taxi",
    heroDescription:
      "Private rides from Taif down to Jeddah city or King Abdulaziz International Airport, timed around your plans.",
    intro:
      "Going from Taif back down to Jeddah is often about connecting to something else: a flight, a hotel on the coast or a business meeting. A private car lets you set the departure time around that plan.",
    sections: [
      {
        heading: "Down to the coast",
        paragraphs: [
          "The journey is roughly 170 km and takes about two to two and a half hours. The first part descends through mountain roads before reaching the flatter coastal plain.",
        ],
      },
      {
        heading: "Connecting to a flight",
        paragraphs: [
          "If you are heading to Jeddah Airport, work backwards from your flight: your airline's check-in requirements, the drive itself and a generous buffer. We will help you choose a pickup time when you book.",
        ],
      },
      {
        heading: "Jeddah hotels and addresses",
        paragraphs: [
          "If you are staying in Jeddah, share the hotel name or address and we will drop you there.",
        ],
      },
    ],
    locationSlugs: ["taif", "jeddah"],
    airportSlug: "jeddah-airport",
    serviceSlugs: ["intercity-transfers", "airport-transfers"],
    relatedRouteSlugs: ["jeddah-to-taif", "taif-to-makkah", "makkah-to-jeddah-airport"],
    faqs: [
      {
        question: "How long is the drive from Taif to Jeddah?",
        answer: "Roughly 170 km, which takes about two to two and a half hours depending on traffic.",
      },
      {
        question: "Can you take me from Taif to Jeddah Airport?",
        answer:
          "Yes. Share your flight details and we will help you choose a pickup time that leaves a comfortable buffer.",
      },
      {
        question: "Can I book an early-morning pickup in Taif?",
        answer: "Yes. Bookings are taken 24 hours a day.",
      },
      {
        question: "Can we stop in Makkah on the way?",
        answer:
          "Yes. Tell us in advance if you want to add a stop and we will plan the route and timing.",
      },
      {
        question: "How much is a taxi from Taif to Jeddah?",
        answer: quoteAnswer,
      },
    ],
  },
];

export function getRoutePage(slug: string) {
  return routePages.find((route) => route.slug === slug);
}
