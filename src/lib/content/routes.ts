import { routeExtras } from "@/lib/content/extra-routes";
import { routeExtrasMore } from "@/lib/content/extra-routes-more";
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

const baseRoutePages: RoutePage[] = [
  {
    slug: "jeddah-airport-to-makkah",
    from: "Jeddah Airport",
    to: "Makkah",
    distance: "Roughly 100 km",
    duration: "Usually 1 to 1.5 hours",
    metaDescription:
      "Private car from King Abdulaziz Airport (JED) to your Makkah hotel for Umrah pilgrims and families. Send your flight number and we plan around your arrival.",
    h1: "Jeddah Airport to Makkah Taxi",
    heroDescription:
      "A private transfer from King Abdulaziz International Airport straight to your Makkah hotel, for Umrah and family travel.",
    intro:
      "Makkah has no commercial airport, so almost every Umrah pilgrim lands at King Abdulaziz International Airport (JED) and finishes the journey by road. This page covers the transfer from the [Jeddah Airport arrivals area](/airports/jeddah-airport) to a hotel in Makkah: one vehicle, one driver, and your luggage stays in the car from the terminal to the hotel.",
    sections: [
      {
        heading: "Before you land",
        paragraphs: [
          "Send us your flight number, the date, the number of passengers and the name of your Makkah hotel. With the flight number we can see your scheduled arrival, and if the flight is delayed, message us on WhatsApp and we will move the pickup. You do not need to tell us a terminal. Pilgrim flights may use a different terminal from regular flights, so check with your airline if you want to know where you will come out.",
          "If you are travelling for Umrah, say so when you book. It helps us understand whether you want to go straight to the Haram area or to check in at the hotel first.",
        ],
      },
      {
        heading: "After you clear the terminal",
        paragraphs: [
          "Immigration and baggage collection take different amounts of time depending on how many flights have landed together, so your driver is arranged around your actual arrival, not the scheduled one. Most of the time between landing and leaving is spent inside the terminal, not on the road.",
          "Pilgrims often arrive in ihram or tired from a long flight. A private car lets you sit and rest from the airport doors onward instead of changing buses or queueing for a ride.",
        ],
      },
      {
        heading: "The drive to Makkah",
        paragraphs: [
          "The airport is on the northern side of Jeddah and the road to Makkah is roughly 100 km. It usually takes one to one and a half hours, and longer on Fridays, around prayer times and in the Umrah and Hajj seasons. There are security checkpoints on the roads into Makkah, so keep passports and any permits in your hand luggage, not in a suitcase in the boot.",
          "Entry to Makkah is restricted to Muslims.",
        ],
        subsections: [
          {
            heading: "Reaching a hotel near the Haram",
            paragraphs: [
              "Vehicle access around the Masjid al-Haram changes with crowd levels, so the car may stop a short walk from the hotel entrance. Tell us the hotel name in advance and we will confirm where the drop-off will be, so you are not looking for it with your bags.",
            ],
          },
        ],
        cta: true,
      },
      {
        heading: "Choosing a vehicle for your group",
        paragraphs: [
          "Tell us how many people are travelling and how many bags you have. For a couple or a small family an Executive Sedan or a Premium SUV is usually enough. A family of six to eight with luggage needs a Luxury Van. See the [fleet page](/fleet) for seats and luggage space. Pilgrims often buy gifts on the way, so if you are going home through Jeddah, think about the return leg when you choose.",
        ],
      },
      {
        heading: "Train or private car",
        paragraphs: [
          "The Haramain high-speed railway has a station at the airport and one in Makkah, and some pilgrims use it. A private car goes from the arrivals area to your hotel without changing, which matters with children, older relatives and heavy bags. Compare both against your own plans.",
        ],
      },
    ],
    locationSlugs: ["jeddah", "makkah"],
    airportSlug: "jeddah-airport",
    serviceSlugs: ["airport-transfers", "hotel-transfers"],
    relatedRouteSlugs: ["makkah-to-jeddah-airport", "jeddah-airport-to-madinah", "jeddah-to-makkah"],
    faqs: [
      {
        question: "Do I need to give a terminal when I book?",
        answer:
          "No. Your flight number is enough for us to see when you arrive. If your flight changes, message us and we will adjust the pickup.",
      },
      {
        question: "Can we go straight to the Haram area for Umrah after landing?",
        answer:
          "Yes, if that is your plan. Tell us when you book. Cars cannot always reach the Haram itself, so we will agree the closest practical drop-off for your hotel.",
      },
      {
        question: "What if immigration takes a long time?",
        answer:
          "That is normal at busy times. The pickup is planned around your actual arrival, so send a WhatsApp message once you have landed and again when you are out of baggage claim.",
      },
      {
        question: "Can the driver stop on the way for prayer or food?",
        answer:
          "Yes. Mention it when you book and we will plan a stop. A stop for prayer is common on this road and adds little time.",
      },
      {
        question: "How is the price decided for Jeddah Airport to Makkah?",
        answer:
          "It depends on the vehicle and the number of passengers. Send your flight details and hotel name and we will confirm the price before you travel.",
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
      "Departure transfer from your Makkah hotel to Jeddah Airport (JED). We work back from your flight and checkout so you reach the airport with time to spare.",
    h1: "Makkah to Jeddah Airport Taxi",
    heroDescription:
      "A planned departure transfer from your Makkah hotel to King Abdulaziz International Airport, with time built in for your flight.",
    intro:
      "A flight home from Makkah is decided by the clock more than any other trip on this site. The road to [Jeddah Airport](/airports/jeddah-airport) is about 100 km, but the time you must leave depends on your airline's check-in rules, how busy the hotel area is, and how many bags you are carrying. We plan the pickup backwards from your departure time.",
    sections: [
      {
        heading: "Working out your pickup time",
        paragraphs: [
          "Start with your flight. Check when your airline closes check-in for your flight and for your terminal, then add the drive of one to one and a half hours, and then a buffer for the hotel area. Leaving the streets near the Haram can be slow after prayers and on Fridays, and the road to Jeddah is heavier in the Umrah and Hajj seasons.",
          "Send us the flight number, the departure time and your checkout time. We will suggest a pickup time and agree it with you. If the airline moves your flight, tell us and we will change it.",
        ],
        subsections: [
          {
            heading: "Early flights and night pickups",
            paragraphs: [
              "Many flights from Jeddah leave at night or in the early morning. We take bookings around the clock, so a pickup in the middle of the night is possible. Agree it the day before so the driver is waiting when you come down.",
            ],
          },
        ],
      },
      {
        heading: "Checking out and meeting the car",
        paragraphs: [
          "Hotels near the Masjid al-Haram are busy at checkout, and vehicles may not be able to stop at the door. We will tell you where the car will wait, which may be a short walk away. Ask the hotel if it can bring your bags there, or arrange for someone to help carry them.",
        ],
        cta: true,
      },
      {
        heading: "Luggage after a pilgrimage",
        paragraphs: [
          "Bags are usually heavier going home than coming. Many pilgrims carry Zamzam water, dates and gifts, so one suitcase often becomes two. Give us the actual number of bags so the car is big enough. An Executive Sedan takes up to three passengers and two bags, a Premium SUV five passengers and four bags, and a Luxury Van eight passengers and six bags. See [the fleet](/fleet) for details.",
        ],
      },
      {
        heading: "Which terminal",
        paragraphs: [
          "That depends on your airline and sometimes on whether your flight is a pilgrim charter. Look at your ticket or ask your airline. If you are not sure, give us the flight number and we will confirm where to go before the day.",
        ],
      },
    ],
    locationSlugs: ["makkah", "jeddah"],
    airportSlug: "jeddah-airport",
    serviceSlugs: ["airport-transfers", "hotel-transfers"],
    relatedRouteSlugs: ["jeddah-airport-to-makkah", "makkah-to-jeddah", "makkah-to-madinah"],
    faqs: [
      {
        question: "How early should I leave Makkah for an international flight?",
        answer:
          "There is no single answer. Look up your airline's check-in closing time, then add the one to one and a half hour drive and a buffer for traffic around your hotel. We will help you settle on a time when you book.",
      },
      {
        question: "Can you collect me at 2 am or 3 am?",
        answer:
          "Yes. Our booking line is open all day and night. Tell us the time the day before and message us when you are coming down.",
      },
      {
        question: "What happens if my flight is rescheduled?",
        answer:
          "Message us as soon as you know. We will move the pickup to match.",
      },
      {
        question: "We have a lot of luggage. Will it fit?",
        answer:
          "Tell us the number of bags and passengers. A Luxury Van carries eight passengers and six bags. If you have more, we can discuss a second vehicle.",
      },
      {
        question: "Do you drop at Jeddah Airport only, or also at Jeddah hotels?",
        answer:
          "Both. This page is about the airport. For a Jeddah hotel or address see [Makkah to Jeddah](/routes/makkah-to-jeddah).",
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
      "Long-distance private transfer from Jeddah Airport (JED) to Madinah hotels after a flight, with stops for prayer and rest and space for the whole family.",
    h1: "Jeddah Airport to Madinah Taxi",
    heroDescription:
      "A private long-distance transfer from Jeddah Airport to your Madinah hotel, planned around your group and luggage.",
    intro:
      "Some pilgrims land in Jeddah and go to Madinah first, to visit the Prophet's Mosque before Makkah. That means a 430 km drive straight after a flight. This page is about making that journey tolerable: how long it takes, when to stop, and how to arrive at a Madinah hotel in the central area.",
    sections: [
      {
        heading: "Why people choose Madinah first",
        paragraphs: [
          "Some group itineraries and personal plans begin in Madinah, then move to Makkah for Umrah later. Arriving at [Jeddah Airport](/airports/jeddah-airport) is the usual route even then, because Madinah's own airport may not have a flight from your home country. The alternative is a direct flight to [Madinah Airport](/airports/madinah-airport), if one exists for your route.",
        ],
      },
      {
        heading: "The road, and how to plan it",
        paragraphs: [
          "The drive is roughly 430 km and takes about four to five hours without long stops. After a flight, with the time spent clearing immigration and collecting luggage, a night flight can mean a very long day, so be honest about how much driving your group can take.",
        ],
        subsections: [
          {
            heading: "Stops",
            paragraphs: [
              "Plan at least one break. Prayer times, a meal and a rest stop all add up, so allow for them in your arrival time at the hotel. Tell us which stops matter to you and we will fit them into the plan.",
            ],
          },
          {
            heading: "Night arrivals",
            paragraphs: [
              "If your flight lands late, you can drive through the night or rest near Jeddah and set off in the morning. We take bookings around the clock, so we can plan either. Ask us to quote both if you are unsure.",
            ],
          },
        ],
        cta: true,
      },
      {
        heading: "Arriving at a Madinah hotel",
        paragraphs: [
          "Many hotels are in the central area around Al-Masjid an-Nabawi. Roads there are restricted and busy, so the car may stop a short walk from the door. Send us the hotel name before you set off so the driver knows where to go. If an older passenger will find the walk hard, tell us and we will look for the nearest practical stop.",
        ],
      },
      {
        heading: "Train, private car, or a mix",
        paragraphs: [
          "The Haramain railway has a station at King Abdulaziz Airport and one in Madinah. A private car suits people who do not want to change from a terminal to a train station, want to stop on the way, or are moving a family with a lot of bags. Some travellers take the train and book a car for the Madinah end only.",
        ],
      },
    ],
    locationSlugs: ["jeddah", "madinah"],
    airportSlug: "jeddah-airport",
    serviceSlugs: ["airport-transfers", "intercity-transfers"],
    relatedRouteSlugs: ["jeddah-to-madinah", "jeddah-airport-to-makkah", "madinah-to-makkah"],
    faqs: [
      {
        question: "Is it realistic to drive straight to Madinah after a long flight?",
        answer:
          "Many pilgrims do. Think about how tired the group will be. If you would rather rest first, we can plan the start of the drive for the next morning.",
      },
      {
        question: "Can we visit Makkah on the way?",
        answer:
          "Makkah is not on the direct road. If you want to go there first, see [Jeddah Airport to Makkah](/routes/jeddah-airport-to-makkah) and book the Makkah to Madinah leg separately.",
      },
      {
        question: "Can the driver stop for prayer?",
        answer:
          "Yes. Tell us when you book and we will plan the stops with you.",
      },
      {
        question: "How many people can travel in one vehicle?",
        answer:
          "A Luxury Van seats eight passengers with six bags. For larger groups we can plan more than one vehicle.",
      },
      {
        question: "What do you need from me to quote this trip?",
        answer:
          "Your flight number, the number of passengers and bags, and the name of your Madinah hotel. We confirm the vehicle and the price before you travel.",
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
      "Private taxi from a Jeddah hotel or home to Makkah for Umrah or a family visit, with a return time agreed in advance so you are not stuck in the crowds.",
    h1: "Jeddah to Makkah Taxi",
    heroDescription:
      "Private rides from Jeddah hotels and homes to Makkah, for Umrah, family visits and business.",
    intro:
      "A large part of the traffic on this road is people who already live in or are staying in Jeddah: residents making Umrah for the weekend, visitors on a stopover, families going to see relatives. This page is for them. It is about travelling from a Jeddah address, not arriving from an airport, so the details are different from [Jeddah Airport to Makkah](/routes/jeddah-airport-to-makkah).",
    sections: [
      {
        heading: "A day trip for Umrah",
        paragraphs: [
          "Many people make Umrah in a single day from Jeddah. That works well with a driver who stays with you or returns at an agreed time. Decide the return time before you leave. Leaving Makkah right after prayers or on a Friday afternoon can mean a long wait for a ride when everyone is leaving at once.",
          "If you are not sure where to enter ihram before Makkah, ask your group leader or a qualified scholar. We arrange the transport only and can stop where you need.",
        ],
        subsections: [
          {
            heading: "Same-day return",
            paragraphs: [
              "Tell us when you want to leave Jeddah and when you will be ready to come back. If your plans might run long, say so and we will leave room in the schedule instead of fixing a time that is too tight.",
            ],
          },
        ],
        cta: true,
      },
      {
        heading: "Pickups from Jeddah hotels, flats and homes",
        paragraphs: [
          "Jeddah is spread along the coast and distances inside the city are large. Give us the exact address or hotel name and a pin if you have one. The road to Makkah leaves from the eastern side of the city, so a pickup in the north or on the Corniche can add time before you are on the highway.",
        ],
      },
      {
        heading: "Moving hotels between the cities",
        paragraphs: [
          "If you are changing from a Jeddah hotel to a Makkah hotel, we take you and your luggage in one vehicle on the day you check out. Agree checkout and check-in times so you do not arrive hours before the room is ready. See [hotel transfers](/services/hotel-transfers) for how those moves are arranged.",
        ],
      },
      {
        heading: "Timing the 80 km",
        paragraphs: [
          "In normal traffic the drive takes about an hour. Fridays, prayer times, school holidays and the Umrah and Hajj seasons can all double it. If you have a fixed appointment, a flight or a hotel check-in, leave more time than the map suggests.",
        ],
      },
    ],
    locationSlugs: ["jeddah", "makkah"],
    serviceSlugs: ["intercity-transfers", "hotel-transfers"],
    relatedRouteSlugs: ["makkah-to-jeddah", "jeddah-airport-to-makkah", "jeddah-to-madinah"],
    faqs: [
      {
        question: "Can the driver wait while I perform Umrah?",
        answer:
          "Umrah can take several hours. Tell us how long you expect and we will plan either a waiting driver or a return pickup at an agreed time.",
      },
      {
        question: "Is a Friday a bad day to travel?",
        answer:
          "Fridays are busier, especially around the midday prayer. If you can, travel in the morning and agree your return time in advance.",
      },
      {
        question: "Can you collect from a private address in Jeddah?",
        answer:
          "Yes. Give us the address and a location pin and we will plan the pickup.",
      },
      {
        question: "We are a family of seven. What vehicle do we need?",
        answer:
          "A Luxury Van carries eight passengers and six bags. See the [fleet page](/fleet) for the other options.",
      },
      {
        question: "How do I get a price for Jeddah to Makkah?",
        answer:
          "Send the pickup address, the date, the number of passengers and whether you want a return. We confirm the vehicle and the price before you travel.",
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
      "Private taxi from Makkah to anywhere in Jeddah: Al-Balad, the Corniche, business districts and hotels, with the option of a driver for the day.",
    h1: "Makkah to Jeddah Taxi",
    heroDescription:
      "Private rides from Makkah to Jeddah city, hotels and business addresses on the Red Sea coast.",
    intro:
      "This page is for people leaving Makkah for Jeddah itself, not for the airport: a few days on the coast after Umrah, a business meeting, a family visit or a hotel on the Corniche. Jeddah is a long, spread-out city, so where in the city you are going matters more than the 80 km on the highway. For the airport see [Makkah to Jeddah Airport](/routes/makkah-to-jeddah-airport).",
    sections: [
      {
        heading: "Leaving Makkah",
        paragraphs: [
          "Traffic in central Makkah is slowest around prayer times and after the congregational prayers, and on Fridays. Agree a pickup time that avoids them and a pickup point that a car can reach. Tell us the hotel and we will confirm where the car can wait.",
        ],
      },
      {
        heading: "Where in Jeddah are you going?",
        paragraphs: [
          "The highway from Makkah enters Jeddah from the east. From there, trips to different parts of the city differ a lot in length.",
        ],
        bullets: [
          "Al-Balad, the historic district, has narrow streets, so we agree a drop-off point near your destination.",
          "The Corniche and the north have many hotels and restaurants and are a longer drive across the city.",
          "Business districts and malls are spread along the main roads, so give us the exact address.",
        ],
        cta: true,
      },
      {
        heading: "If you are staying on the coast after Umrah",
        paragraphs: [
          "Some pilgrims spend a few days in Jeddah before flying home. If your flight is a few days away, take the hotel transfer now and book [Jeddah Airport](/airports/jeddah-airport) separately for the day you fly, so the airport pickup is timed to the flight and not to today's journey.",
        ],
      },
      {
        heading: "A driver for the day in Jeddah",
        paragraphs: [
          "If you have several places to go, hire the driver for the day instead of booking separate rides. The car and driver stay with you between stops. See [private chauffeur](/services/private-chauffeur) for how that works, and tell us your itinerary when you book.",
        ],
      },
      {
        heading: "Business trips",
        paragraphs: [
          "For meetings, tell us the time and the address and we will plan to arrive with a margin. If a colleague or client is travelling with you, see [business transportation](/services/business-transportation) for executive vehicles and delegations.",
        ],
      },
    ],
    locationSlugs: ["makkah", "jeddah"],
    serviceSlugs: ["intercity-transfers", "private-chauffeur"],
    relatedRouteSlugs: ["jeddah-to-makkah", "makkah-to-jeddah-airport", "makkah-to-madinah"],
    faqs: [
      {
        question: "Can you take me to a specific address in Jeddah?",
        answer:
          "Yes. Give us the address and a location pin when you book and we will take you there.",
      },
      {
        question: "Can I keep the driver after I arrive?",
        answer:
          "Yes. Tell us your plans and we will arrange the driver by the hour or for the day.",
      },
      {
        question: "Is Al-Balad accessible by car?",
        answer:
          "Parts of it have narrow streets. Tell us where you are going and we will agree the nearest sensible drop-off.",
      },
      {
        question: "Can I book a pickup at night?",
        answer: "Yes. Bookings are taken all day and night.",
      },
      {
        question: "What do you need to give me a price?",
        answer:
          "Your Makkah hotel, the Jeddah address, the date, and how many passengers and bags. We confirm the price and the vehicle before you travel.",
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
      "Private car from Makkah to Madinah after Umrah, with stops for prayer and rest and room for the family. We plan the day around your Madinah check-in.",
    h1: "Makkah to Madinah Taxi",
    heroDescription:
      "A comfortable private journey between the two Holy Cities, planned around your group, luggage and prayer times.",
    intro:
      "For most pilgrims, the Makkah to Madinah leg comes after Umrah, when the group is tired and the luggage has grown. The road is about 450 km on the highway known as the Hijrah Road. This page covers how to leave Makkah, plan the day, and arrive in Madinah, with the Ziyarat you may want to add on arrival.",
    sections: [
      {
        heading: "Checking out and leaving Makkah",
        paragraphs: [
          "Plan the day around two things: your hotel checkout time and your Madinah check-in time. Rooms are often not ready until the afternoon, so an early arrival can mean waiting. We can suggest a departure time that gets you there when the room is likely to be ready.",
          "Some pilgrims want to visit the Haram one last time before they leave. If you do, allow for it, and tell us what time you expect to be back at the hotel.",
        ],
      },
      {
        heading: "The day on the road",
        paragraphs: [
          "The distance is about 450 km and takes four and a half to five hours without stops. A prayer stop, a meal and a break for children add to that, so a realistic door-to-door time is six hours or more. Leaving early avoids the midday heat on the highway.",
        ],
        subsections: [
          {
            heading: "Prayer times and Fridays",
            paragraphs: [
              "If a prayer falls during the drive, we stop where there is a mosque or a prayer area. On a Friday we plan around the Jumu'ah prayer, which may mean leaving earlier or later than you first thought.",
            ],
          },
          {
            heading: "Older passengers and children",
            paragraphs: [
              "Tell us who is travelling. For older passengers we plan more frequent stops and a vehicle with easy access. For young children, ask us about a child seat.",
            ],
          },
        ],
        cta: true,
      },
      {
        heading: "Arriving in Madinah and adding Ziyarat",
        paragraphs: [
          "Hotels near Al-Masjid an-Nabawi are in a restricted central area, so the car may drop you close but not at the door. Send us the hotel name beforehand. Many pilgrims add Ziyarat to the arrival day or the next morning, for example Quba Mosque, Masjid al-Qiblatain and Mount Uhud. See [Ziyarat tours](/services/ziyarat-tours) to plan it, or [Madinah taxi service](/locations/madinah) for getting around the city.",
        ],
      },
      {
        heading: "Private car or the Haramain train",
        paragraphs: [
          "The Haramain railway runs between Makkah and Madinah and some pilgrims prefer it. A private car goes from your hotel to your hotel, carries all your luggage and leaves when you are ready. It also lets you add a stop. Choose what fits your group.",
        ],
      },
    ],
    locationSlugs: ["makkah", "madinah"],
    serviceSlugs: ["intercity-transfers", "ziyarat-tours"],
    relatedRouteSlugs: ["madinah-to-makkah", "makkah-to-jeddah", "jeddah-to-madinah"],
    faqs: [
      {
        question: "What time should we leave Makkah?",
        answer:
          "Work back from your Madinah hotel's check-in time and the heat. An early start gets you there with time to rest, but the room may not be ready. Tell us your plans and we will suggest a time.",
      },
      {
        question: "Can we visit the Haram on the morning we leave?",
        answer:
          "Yes. Tell us roughly when you expect to be back at the hotel and we will arrange the pickup for that time.",
      },
      {
        question: "Will we stop for prayer?",
        answer:
          "Yes. We plan stops for prayer and rest when you book. On a Friday we plan around Jumu'ah.",
      },
      {
        question: "Can we visit places in Madinah on the day we arrive?",
        answer:
          "Yes. Tell us which places and we will plan the order. See [Ziyarat tours](/services/ziyarat-tours) for the places commonly visited.",
      },
      {
        question: "How do I get a price from Makkah to Madinah?",
        answer:
          "Send your hotel names, the date, the number of passengers and bags. We confirm the vehicle and the price before you travel.",
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
      "Private taxi from Madinah to Makkah for Umrah with a planned stop at Dhul Hulayfah (Abyar Ali) to enter ihram, then straight on to your Makkah hotel.",
    h1: "Madinah to Makkah Taxi",
    heroDescription:
      "A private journey from Madinah to Makkah, with a planned stop at the miqat for pilgrims travelling for Umrah.",
    intro:
      "Going from Madinah to Makkah for Umrah is a different trip from the reverse one, because it has a fixed religious stop in the middle: the miqat. This page explains how that stop fits into the day, so the journey from the Prophet's Mosque to the Haram runs the way the pilgrim intends.",
    sections: [
      {
        heading: "Dhul Hulayfah (Abyar Ali) on the way",
        paragraphs: [
          "Pilgrims travelling from Madinah to Makkah for Umrah commonly enter ihram at Dhul Hulayfah, also called Abyar Ali, a short drive out of Madinah on the road towards Makkah. Tell us when you book. We will plan to stop there and give you time to prepare, pray and set off again.",
          "Questions about the rites themselves, or about whether you should enter ihram, are for your group leader or a qualified scholar. We provide the transport and the stop.",
        ],
        subsections: [
          {
            heading: "Preparing before you leave the hotel",
            paragraphs: [
              "Many pilgrims wash and put on ihram clothing at the hotel and only pray and make the intention at the miqat. Others do everything at the miqat, which has facilities. Either way, tell us your plan so we give you the right amount of time there.",
            ],
          },
        ],
      },
      {
        heading: "After the miqat",
        paragraphs: [
          "Once in ihram, the rest of the drive is about 450 km. With the miqat stop the whole trip typically takes five and a half hours or more. You will want to stop for water and the toilet, so ask the driver, and plan on a longer day than the map shows.",
        ],
        cta: true,
      },
      {
        heading: "Arriving in Makkah in ihram",
        paragraphs: [
          "Many pilgrims go straight to the Haram to perform Umrah on arrival. The roads and the vehicle access near the Masjid al-Haram change with crowd levels, so your drop-off may be a short walk from the hotel or the Haram. Tell us whether you want the hotel first (to leave bags) or the Haram first. Decide before you arrive where your bags will go.",
        ],
      },
      {
        heading: "Coming from Madinah Airport instead",
        paragraphs: [
          "If you land at Madinah Airport and go straight to Makkah, see [Madinah Airport to Makkah](/routes/madinah-airport-to-makkah). If you want to travel from Madinah to Jeddah and fly home, see [Madinah to Jeddah](/routes/madinah-to-jeddah).",
        ],
      },
    ],
    locationSlugs: ["madinah", "makkah"],
    airportSlug: "madinah-airport",
    serviceSlugs: ["intercity-transfers", "hotel-transfers"],
    relatedRouteSlugs: ["makkah-to-madinah", "madinah-airport-to-makkah", "madinah-to-jeddah"],
    faqs: [
      {
        question: "How long will we spend at the miqat?",
        answer:
          "That is up to you. Tell us how long you need and we will plan it. If you have already put on ihram at the hotel, it can be short.",
      },
      {
        question: "Can we put on ihram at the hotel?",
        answer:
          "Many pilgrims do. Tell us and we will plan accordingly. For rulings, ask your group leader or a qualified scholar.",
      },
      {
        question: "Can we go to the Haram first, before the hotel?",
        answer:
          "Yes, if you wish. The closest practical drop-off can vary with the crowd, and your bags would need a plan. Tell us which you prefer.",
      },
      {
        question: "Can the driver wait while we do Umrah?",
        answer:
          "Umrah can take several hours. Tell us your plans when you book so the driver's time is planned.",
      },
      {
        question: "How do I get a price for Madinah to Makkah?",
        answer:
          "Send the pickup hotel, the destination, the date, the number of passengers and bags, and say if you need the miqat stop. We confirm the price before you travel.",
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
      "Private taxi from a Jeddah hotel or home to Madinah, door to door, with room for family luggage and stops planned for prayer. No station transfers needed.",
    h1: "Jeddah to Madinah Taxi",
    heroDescription:
      "Private long-distance rides from Jeddah hotels and homes to Madinah, for families, groups and business travellers.",
    intro:
      "Jeddah to Madinah is the direct route for people based in Jeddah or ending a stay on the coast: residents visiting the Prophet's Mosque, families on holiday and business travellers. It does not go through Makkah, which makes it a different journey from the pilgrim routes on this site. The drive is about 420 km.",
    sections: [
      {
        heading: "Door to door from a Jeddah address",
        paragraphs: [
          "We pick you up where you are staying, whether that is a hotel on the Corniche, a flat in the north or a family home, and drive to your Madinah hotel. There is no station or terminal to reach with your bags first. Give us exact addresses at both ends and a pin for the Jeddah pickup.",
        ],
      },
      {
        heading: "How long the day is",
        paragraphs: [
          "Plan on about four to four and a half hours of driving, plus stops. Leaving early avoids the middle of the day, and a morning departure gets you to Madinah in time for the afternoon prayers. If you want to arrive for a particular prayer, tell us and we will work back from it.",
        ],
        cta: true,
      },
      {
        heading: "Arriving in Madinah",
        paragraphs: [
          "Rooms in hotels near Al-Masjid an-Nabawi are often not ready until the afternoon, and roads around the mosque are restricted, so the car may stop short of the hotel door. Send the hotel name and your check-in time before you leave Jeddah. If you arrive early, many visitors go to [Ziyarat](/services/ziyarat-tours) or to the mosque first and check in later. For getting around once you are there, see [Madinah taxi service](/locations/madinah).",
        ],
      },
      {
        heading: "Families and groups",
        paragraphs: [
          "One vehicle keeps a family together and carries their luggage in the same place. A Premium SUV takes five passengers and four bags and a Luxury Van takes eight passengers and six bags. For larger parties we can plan more vehicles that leave together. See [the fleet](/fleet).",
        ],
      },
      {
        heading: "Business and day trips",
        paragraphs: [
          "Some travellers go to Madinah for a meeting and return the same day. That is possible, but the driving time is long, so plan the return before you set off. For repeated trips or several guests, see [business transportation](/services/business-transportation).",
        ],
      },
    ],
    locationSlugs: ["jeddah", "madinah"],
    serviceSlugs: ["intercity-transfers", "private-chauffeur"],
    relatedRouteSlugs: ["madinah-to-jeddah", "jeddah-airport-to-madinah", "jeddah-to-makkah"],
    faqs: [
      {
        question: "Does the road go through Makkah?",
        answer:
          "No. This is the direct road between Jeddah and Madinah. If you want to visit Makkah on the same trip, plan it as separate legs.",
      },
      {
        question: "Can we leave in the early morning?",
        answer:
          "Yes. Tell us the time and we will plan the pickup around it.",
      },
      {
        question: "Can the driver stop for prayer?",
        answer: "Yes. Mention it when you book and we will plan stops.",
      },
      {
        question: "Is a same-day return realistic?",
        answer:
          "It is possible but long. Tell us your timings and we will help you judge it.",
      },
      {
        question: "What do you need to quote this trip?",
        answer:
          "The pickup address, the Madinah hotel, the date, the number of passengers and bags. We confirm the vehicle and price before you travel.",
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
      "Private taxi from Madinah to Jeddah city or Jeddah Airport (JED), timed around your flight or onward plans with a buffer for stops and traffic.",
    h1: "Madinah to Jeddah Taxi",
    heroDescription:
      "Private rides from Madinah to Jeddah city or King Abdulaziz International Airport, timed around your flight or schedule.",
    intro:
      "Madinah to Jeddah is often the last leg of a trip, ending in a flight home or a few days on the coast. The reverse trip, [Jeddah to Madinah](/routes/jeddah-to-madinah), starts at a convenient time for you. This one often has a deadline at the end. This page is about getting to Jeddah with enough margin.",
    sections: [
      {
        heading: "If you are flying from Jeddah",
        paragraphs: [
          "Work backwards from your flight. First find your airline's check-in closing time. Then allow four to four and a half hours of driving, then a buffer for stops and traffic on the highway. A pickup in the early hours of the morning for a midday flight is not unusual. Tell us your flight number and we will help set a time. The airport page for [Jeddah Airport](/airports/jeddah-airport) has more on arrivals and departures.",
        ],
        subsections: [
          {
            heading: "Do not cut it close",
            paragraphs: [
              "Stops and traffic can cost an hour you did not plan for, so be conservative. A long wait at the airport is better than a missed flight.",
            ],
          },
        ],
        cta: true,
      },
      {
        heading: "If you are staying in Jeddah",
        paragraphs: [
          "Give us the hotel or address. Jeddah is a long city, so tell us which part you are going to, such as the Corniche, Al-Balad or a business district, and we will plan the drop-off.",
        ],
      },
      {
        heading: "Leaving a Madinah hotel",
        paragraphs: [
          "Checkout near the mosque is busy in the morning, and the car may have to wait some way from the entrance because of the road restrictions. Tell us the hotel and we will agree where to meet, and ask the hotel to bring your bags to that point if it can. Leaving after the dawn prayer gives you the cooler part of the day on the highway and a margin if you are flying.",
        ],
      },
      {
        heading: "Stopping in Makkah on the way",
        paragraphs: [
          "Some people go from Madinah to Jeddah via Makkah, for example to do Umrah before flying home. That adds a long detour and several hours, so plan it as separate legs: [Madinah to Makkah](/routes/madinah-to-makkah), then [Makkah to Jeddah Airport](/routes/makkah-to-jeddah-airport).",
        ],
      },
      {
        heading: "Luggage at the end of a trip",
        paragraphs: [
          "After Madinah, bags often include gifts and dates. Count them before you book so the vehicle is big enough, particularly if the group is large.",
        ],
      },
    ],
    locationSlugs: ["madinah", "jeddah"],
    airportSlug: "jeddah-airport",
    serviceSlugs: ["intercity-transfers", "airport-transfers"],
    relatedRouteSlugs: ["jeddah-to-madinah", "madinah-to-makkah", "makkah-to-jeddah-airport"],
    faqs: [
      {
        question: "How early should we leave Madinah for a flight from Jeddah?",
        answer:
          "Work back from your airline's check-in closing time, add four to four and a half hours of driving and a buffer for stops. We will help you choose.",
      },
      {
        question: "Can you take us to Jeddah city instead of the airport?",
        answer:
          "Yes. Give us the hotel or address and we will plan the drop-off.",
      },
      {
        question: "Is a late-night departure possible?",
        answer: "Yes. We take bookings all day and night.",
      },
      {
        question: "Can we stop in Makkah on the way?",
        answer:
          "It is a big detour. We suggest booking separate legs. Tell us your plan and we will help you work out the timing.",
      },
      {
        question: "How do I get a price?",
        answer:
          "Send the pickup hotel, the destination, the date, the number of passengers and bags. We confirm the price before you travel.",
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
      "Private taxi from Makkah up to Taif for a day trip or short stay: mountain road driving, cooler weather and a return time you choose in advance.",
    h1: "Makkah to Taif Taxi",
    heroDescription:
      "A private journey from Makkah up into the Taif highlands, for day trips or overnight stays.",
    intro:
      "Makkah to Taif is the shortest way out of the heat. In about 90 km the road climbs from the city into the Sarawat mountains, and Taif is much cooler than Makkah, especially in summer. This page is for a day out or a short stay: what the road is like, what to see, and how to plan the return.",
    sections: [
      {
        heading: "The climb",
        paragraphs: [
          "Taif sits more than 1,500 metres higher than Makkah, so most of the 90 km is a climb through steep, winding mountain roads. There is more than one road. Which one the driver uses can depend on the conditions on the day and whether you need a particular stop. Families with children or older passengers who get car sick should tell us, and we can drive more gently and take a break.",
        ],
        subsections: [
          {
            heading: "Weather",
            paragraphs: [
              "It can be cloudy, misty or windy on the heights, and it can be much cooler than Makkah. Take a jacket, even in summer evenings.",
            ],
          },
        ],
      },
      {
        heading: "What people go for",
        paragraphs: ["Popular reasons for the trip include:"],
        bullets: [
          "Al Hada and its views over the mountains",
          "Al Shafa, the highland area known for its cool weather and farms",
          "Shubra Palace, a historic building in Taif that is now a museum",
          "Rose farms, which are at their best in spring when the roses are harvested",
        ],
        cta: true,
      },
      {
        heading: "Day trip or overnight",
        paragraphs: [
          "For a day trip, tell us when you want to arrive and when you want to be back in Makkah. Allow for at least four or five hours in Taif to make the 3-hour round trip worthwhile. For an overnight stay we can take you to your hotel or resort and arrange the return for the next day. Weekends and summer holidays are busy, so book early.",
        ],
      },
      {
        heading: "Combining with other plans",
        paragraphs: [
          "If you are heading to Taif from Jeddah instead, see [Jeddah to Taif](/routes/jeddah-to-taif). If you are returning to Makkah and are a pilgrim, see [Taif to Makkah](/routes/taif-to-makkah) for the miqat stop on the way back. For a driver in Taif during your stay, see [Taif taxi service](/locations/taif).",
        ],
      },
    ],
    locationSlugs: ["makkah", "taif"],
    airportSlug: "taif-airport",
    serviceSlugs: ["intercity-transfers", "private-chauffeur"],
    relatedRouteSlugs: ["taif-to-makkah", "jeddah-to-taif", "taif-to-jeddah"],
    faqs: [
      {
        question: "Is the road comfortable for children and older passengers?",
        answer:
          "It is a normal highway with steep and winding sections. A calm driver and a break help. Tell us if anyone gets car sick.",
      },
      {
        question: "How long should we stay in Taif on a day trip?",
        answer:
          "At least four or five hours. Less than that and most of the day is spent on the road.",
      },
      {
        question: "Can you take us to a hotel or resort?",
        answer: "Yes. Give us the name and we will take you there.",
      },
      {
        question: "When is the rose season?",
        answer:
          "Roses are generally harvested in spring. The exact dates change from year to year, so check before you plan a trip around it.",
      },
      {
        question: "How do I get a quote for a day trip with a return?",
        answer:
          "Tell us the date, the pickup point, the number of passengers and when you want to return. We confirm the price before you travel.",
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
      "Private taxi from Taif down to Makkah for Umrah, with a stop at Qarn al-Manazil (As-Sayl al-Kabir) to enter ihram if you need it, then on to your hotel.",
    h1: "Taif to Makkah Taxi",
    heroDescription:
      "A private journey from Taif down to Makkah, with a planned stop at the miqat for pilgrims travelling for Umrah.",
    intro:
      "Taif to Makkah is a descent from the highlands to the Haram, and for a pilgrim it also crosses a miqat. This page is about that: the stop at Qarn al-Manazil, the mountain road down, and how to plan an Umrah trip that begins in Taif.",
    sections: [
      {
        heading: "Qarn al-Manazil (As-Sayl al-Kabir)",
        paragraphs: [
          "Travellers coming down from Taif commonly pass Qarn al-Manazil, also known as As-Sayl al-Kabir, the miqat for people on this road. Tell us when you book if you need to stop there to enter ihram. The road we take is chosen so that it passes the miqat, and we leave time for you to prepare and pray.",
          "For any question about the rites, consult your group leader or a qualified scholar. We arrange the journey and the stop.",
        ],
        cta: true,
      },
      {
        heading: "Going down the mountain",
        paragraphs: [
          "The 90 km road descends from the highlands through steep and winding sections to the plain around Makkah. It takes about an hour and a half. If anyone in the group is unwell on bends or nervous on mountain roads, tell us, and we will take it more slowly and stop if needed.",
        ],
      },
      {
        heading: "Leaving Taif",
        paragraphs: [
          "Resorts and hotels in Taif can be some way up side roads. Give us the name and a location pin, and be ready at the agreed time, since mountain roads leave less room for waiting. If you are travelling for Umrah, tell us the time you want to reach Makkah, and we will work back from it.",
        ],
      },
      {
        heading: "Planning Umrah from Taif",
        paragraphs: [
          "People staying in Taif often go to Makkah for one day and return. Decide whether you want a driver who waits or a return pickup at a set time. Umrah can take several hours, longer at busy times. If you are moving to a Makkah hotel instead, agree the check-in time so you do not arrive before the room is ready.",
        ],
      },
      {
        heading: "Arriving in Makkah",
        paragraphs: [
          "Vehicle access around the Masjid al-Haram changes with crowd levels, so we confirm the nearest practical drop-off for your hotel. Send us the hotel name beforehand. If you are arriving by air at Taif, see [Taif Airport to Makkah](/routes/taif-airport-to-makkah).",
        ],
      },
    ],
    locationSlugs: ["taif", "makkah"],
    airportSlug: "taif-airport",
    serviceSlugs: ["intercity-transfers", "hotel-transfers"],
    relatedRouteSlugs: ["makkah-to-taif", "taif-airport-to-makkah", "taif-to-jeddah"],
    faqs: [
      {
        question: "Do we pass the miqat on the road from Taif?",
        answer:
          "Travellers on the Taif road commonly stop at Qarn al-Manazil (As-Sayl al-Kabir). Tell us if you need to, so the stop is planned.",
      },
      {
        question: "Can we put on ihram in Taif and just drive through?",
        answer:
          "That is a question for your group leader or a scholar. We plan the journey you choose, with or without a stop.",
      },
      {
        question: "Is the road down difficult?",
        answer:
          "It is steep and winding in places. A calm driver and the option of a short break help.",
      },
      {
        question: "Can the driver wait while we do Umrah?",
        answer:
          "Tell us how long you expect and we will plan either a waiting driver or a return pickup.",
      },
      {
        question: "How do I get a price from Taif to Makkah?",
        answer:
          "Send the pickup, the Makkah hotel, the date, the number of passengers and bags, and say if you need the miqat stop. We confirm the price before you travel.",
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
      "Private taxi from Jeddah to Taif for a cool weekend or summer break: a longer coast-to-highlands drive with family luggage and a return day you choose.",
    h1: "Jeddah to Taif Taxi",
    heroDescription:
      "Private rides from Jeddah up to Taif's cooler highlands, for weekends, summer breaks and day trips.",
    intro:
      "Jeddah is hot and humid for much of the year and Taif is up in the mountains. Many Jeddah families drive to Taif for a weekend or a summer break. The distance is about 170 km, so it is a longer trip than [Makkah to Taif](/routes/makkah-to-taif).",
    sections: [
      {
        heading: "A weekend away",
        paragraphs: [
          "Weekend trips and school holidays are the busiest times, and the road up to Taif can be crowded. If you are going on a Thursday evening or a Friday morning, leave earlier than you think you need to. Tell us the day and time and we will plan around the traffic. Returning on a Friday afternoon or a Saturday evening can be slow too.",
        ],
        cta: true,
      },
      {
        heading: "What the drive is like",
        paragraphs: [
          "The first part is flat coastal road. After that the road climbs into the mountains and the temperature drops. The whole trip takes about two to two and a half hours. If you want a stop on the way, for prayer or a meal, tell us.",
        ],
        subsections: [
          {
            heading: "Luggage for a stay",
            paragraphs: [
              "A weekend with children means more bags. Tell us how many. A Premium SUV takes five passengers and four bags and a Luxury Van eight passengers and six bags. See [the fleet](/fleet).",
            ],
          },
        ],
      },
      {
        heading: "The return on a busy weekend",
        paragraphs: [
          "Everyone going back to the coast leaves on the same afternoon, so the descent can be slow. If you can, return midweek, or leave Taif in the morning instead of the evening. Tell us the day and we will suggest a time. If you are flying out of Jeddah the next morning, plan the return so you are not arriving late the night before.",
        ],
      },
      {
        heading: "Staying in Taif",
        paragraphs: [
          "Hotels and resorts in Taif can be some way from the centre and from the viewpoints. If you want a driver while you stay, see [private chauffeur](/services/private-chauffeur) or [Taif taxi service](/locations/taif). Many visitors like to visit Al Hada, Al Shafa or the rose farms in spring, so tell us your plans.",
        ],
      },
      {
        heading: "Going the other way",
        paragraphs: [
          "For the return, see [Taif to Jeddah](/routes/taif-to-jeddah), which covers connecting to a flight.",
        ],
      },
    ],
    locationSlugs: ["jeddah", "taif"],
    serviceSlugs: ["intercity-transfers", "private-chauffeur"],
    relatedRouteSlugs: ["taif-to-jeddah", "makkah-to-taif", "jeddah-to-makkah"],
    faqs: [
      {
        question: "What is the best day to travel?",
        answer:
          "Midweek is quieter. Thursday evening, Friday and Saturday are busy in the summer months.",
      },
      {
        question: "Can you collect us from our home in Jeddah?",
        answer:
          "Yes. Give us the address and a location pin and we will plan the pickup.",
      },
      {
        question: "Is it worth a day trip from Jeddah?",
        answer:
          "It is a five-hour round trip, so a day trip is short. An overnight stay gives you more time in the cooler weather.",
      },
      {
        question: "Can we have a driver for the whole stay?",
        answer:
          "Yes. Tell us the dates and the places you want to visit and we will arrange it.",
      },
      {
        question: "How do I get a price?",
        answer:
          "Send the pickup address, the dates, the number of passengers and bags and whether you want a return. We confirm the price before you travel.",
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
      "Private taxi from Taif down to Jeddah city or Jeddah Airport (JED), timed around your flight with a buffer for the mountain road and coastal traffic.",
    h1: "Taif to Jeddah Taxi",
    heroDescription:
      "Private rides from Taif down to Jeddah city or King Abdulaziz International Airport, timed around your plans.",
    intro:
      "Going from Taif to Jeddah usually has a purpose at the end: a flight, a business meeting, a hotel on the coast. This page is about the descent, planning the journey around that purpose, and what changes if you are flying. For the way up, see [Jeddah to Taif](/routes/jeddah-to-taif).",
    sections: [
      {
        heading: "Connecting to a flight",
        paragraphs: [
          "Start with your flight and your airline's check-in closing time. Then add the two to two and a half hours of driving, and a buffer. Leaving Taif in the early morning for a flight in the late morning is common. Tell us your flight number and we will suggest a pickup time and agree it with you. Arrival and departure information is on the [Jeddah Airport](/airports/jeddah-airport) page.",
        ],
        cta: true,
      },
      {
        heading: "Choosing a vehicle",
        paragraphs: [
          "A weekend in Taif often means more bags than the outward trip. A Premium SUV takes five passengers and four bags and a Luxury Van takes eight passengers and six bags. If you also have a pram or gifts from the rose farms, mention them. See [the fleet](/fleet).",
        ],
      },
      {
        heading: "Down the mountain",
        paragraphs: [
          "The first part of the road descends through steep, winding sections. In winter or after rain there can be mist. Then the road runs onto the coastal plain towards Jeddah. If it has been a busy weekend, the road can be congested as people return from Taif, so leave earlier on Fridays and Saturdays.",
        ],
      },
      {
        heading: "If you are staying in Jeddah",
        paragraphs: [
          "Give us the hotel or the address. Jeddah is a long city, so a hotel on the north Corniche is a much longer drive than one near the centre. We will plan the drop-off.",
        ],
      },
      {
        heading: "Visiting Makkah on the way",
        paragraphs: [
          "Some people break the trip in Makkah. That is a different route, so plan it as two journeys: [Taif to Makkah](/routes/taif-to-makkah), then [Makkah to Jeddah](/routes/makkah-to-jeddah).",
        ],
      },
    ],
    locationSlugs: ["taif", "jeddah"],
    airportSlug: "jeddah-airport",
    serviceSlugs: ["intercity-transfers", "airport-transfers"],
    relatedRouteSlugs: ["jeddah-to-taif", "taif-to-makkah", "makkah-to-jeddah-airport"],
    faqs: [
      {
        question: "How early should we leave Taif for a flight?",
        answer:
          "Check your airline's check-in closing time, add two to two and a half hours of driving, and a buffer. We will help you choose the time.",
      },
      {
        question: "Can we be collected from a Taif hotel or resort?",
        answer:
          "Yes. Give us the name and we will plan the pickup. Resorts can be some distance from the main roads, so tell us where to find you.",
      },
      {
        question: "Is the road bad in winter?",
        answer:
          "There can be mist or rain in the mountains. Tell us if you are worried and we will plan extra time.",
      },
      {
        question: "Can we go via Makkah?",
        answer:
          "It is a different route. We suggest booking separate legs, and we will help you plan the timing.",
      },
      {
        question: "How do I get a price?",
        answer:
          "Send the pickup, the destination (Jeddah address or airport), the date, the number of passengers and bags. We confirm the price before you travel.",
      },
    ],
  },
  {
    slug: "madinah-airport-to-makkah",
    from: "Madinah Airport",
    to: "Makkah",
    distance: "Roughly 450 km",
    duration: "About 4.5 to 5 hours, plus any planned stops",
    metaDescription:
      "Private transfer from Madinah Airport (MED) to Makkah with a stop at Dhul Hulayfah to enter ihram, for pilgrims who fly into Madinah first.",
    h1: "Madinah Airport to Makkah Taxi",
    heroDescription:
      "A private transfer from Madinah Airport straight to Makkah, with a planned stop at the miqat for pilgrims travelling for Umrah.",
    intro:
      "Some pilgrims fly into Prince Mohammad bin Abdulaziz International Airport and go directly to Makkah for Umrah. It is a long trip after a flight, with a miqat stop on the way. This page is about that specific journey. If you want to visit Madinah first and go to Makkah later, see [Madinah to Makkah](/routes/madinah-to-makkah).",
    sections: [
      {
        heading: "Meeting your driver",
        paragraphs: [
          "Send us your flight number, the date and the number of passengers and bags. The driver is arranged around your actual arrival. After immigration and baggage claim, you go to the car and the journey starts. Tell us if your arrival time changes.",
        ],
      },
      {
        heading: "The stop at Dhul Hulayfah",
        paragraphs: [
          "The airport is close to Madinah, and the road to Makkah passes Dhul Hulayfah (Abyar Ali), where pilgrims commonly enter ihram. Many pilgrims wash and wear ihram at the hotel or at the miqat, so tell us your plan. If you do not want to go into Madinah first, we drive straight there from the airport.",
          "We arrange the stop. Questions about the rites are for your group leader or a qualified scholar.",
        ],
        cta: true,
      },
      {
        heading: "Keep your ihram clothing within reach",
        paragraphs: [
          "If you plan to change at the miqat, keep your ihram clothing in your hand luggage, not in a suitcase in the boot. The driver can stop, but it is easier if what you need is on your lap. Tell us how many bags you have so a Premium SUV, which takes five passengers and four bags, or a Luxury Van, which takes eight passengers and six bags, is sent as needed.",
        ],
      },
      {
        heading: "A very long day",
        paragraphs: [
          "With the flight, the airport, the miqat and 450 km on the road, this is often more than ten hours from take-off to the hotel. Pilgrims arriving with children or older relatives should plan for it, and consider whether to break the journey in Madinah. If you rest first, we can take you from the airport to your hotel, and you can book [Madinah to Makkah](/routes/madinah-to-makkah) for the next day.",
        ],
      },
      {
        heading: "Arriving in Makkah",
        paragraphs: [
          "The closest practical drop-off to the Masjid al-Haram can change with the crowds. Tell us your hotel name before you arrive. If you plan to perform Umrah straight away, tell us, and discuss where your bags will go.",
        ],
      },
    ],
    locationSlugs: ["madinah", "makkah"],
    airportSlug: "madinah-airport",
    serviceSlugs: ["airport-transfers", "intercity-transfers"],
    relatedRouteSlugs: ["madinah-to-makkah", "makkah-to-madinah", "jeddah-airport-to-makkah"],
    faqs: [
      {
        question: "Do we have to go through Madinah city?",
        answer:
          "Not necessarily. We can go from the airport towards Makkah and stop at the miqat. Tell us what you want.",
      },
      {
        question: "Is it too much to do in one day?",
        answer:
          "It is a long day, and many pilgrims prefer to rest in Madinah and go to Makkah later. Both are possible.",
      },
      {
        question: "What if our flight is late?",
        answer:
          "Message us. We take bookings all day and night and will adjust the pickup.",
      },
      {
        question: "Can we carry several bags?",
        answer:
          "Tell us how many. A Premium SUV takes five passengers and four bags, and a Luxury Van takes eight passengers and six bags.",
      },
      {
        question: "How do I get a price?",
        answer:
          "Send the flight number, the number of passengers and bags, and the Makkah hotel. Say if you need the miqat stop. We confirm the price before you travel.",
      },
    ],
  },
  {
    slug: "taif-airport-to-makkah",
    from: "Taif Airport",
    to: "Makkah",
    distance: "Roughly 100 km",
    duration: "About 1.5 to 2 hours",
    metaDescription:
      "Private transfer from Taif Airport (TIF) down to Makkah via the Sarawat mountain road, with a stop at Qarn al-Manazil for pilgrims who need the miqat.",
    h1: "Taif Airport to Makkah Taxi",
    heroDescription:
      "A private transfer from Taif International Airport down to your Makkah hotel, with a planned stop at the miqat for pilgrims.",
    intro:
      "Taif International Airport (TIF) is a smaller airport than Jeddah, and some pilgrims and visitors use it to reach Makkah. The road goes down through the mountains, so it is a different drive from the one from Jeddah. This page covers the airport pickup, the mountain road and the miqat stop for pilgrims.",
    sections: [
      {
        heading: "At the airport",
        paragraphs: [
          "Send us the flight number, the date, the number of passengers and bags, and your Makkah hotel. We confirm the driver and the vehicle. Message us if your plans change. More on the airport is on the [Taif Airport](/airports/taif-airport) page.",
        ],
      },
      {
        heading: "Hand luggage for the miqat",
        paragraphs: [
          "If you want to enter ihram at Qarn al-Manazil, have the clothing and anything you need to pray in hand luggage when you collect your bags at Taif. It saves unpacking suitcases at the roadside.",
        ],
      },
      {
        heading: "The road down",
        paragraphs: [
          "The distance is about 100 km, and it takes an hour and a half to two hours. The road descends through the Sarawat mountains on steep, winding sections, and the last part is the busier road into Makkah. Fridays and the Umrah and Hajj seasons slow the final stretch.",
        ],
        subsections: [
          {
            heading: "Qarn al-Manazil (As-Sayl al-Kabir)",
            paragraphs: [
              "If you are travelling for Umrah, travellers on this road commonly stop at Qarn al-Manazil to enter ihram. Tell us when you book and we will plan the stop and the road that passes it. Rulings are for your group leader or a scholar.",
            ],
          },
        ],
        cta: true,
      },
      {
        heading: "Arriving at your hotel",
        paragraphs: [
          "Vehicle access around the Masjid al-Haram changes with the crowds. Give us the hotel name and we will confirm the drop-off in advance.",
        ],
      },
      {
        heading: "If you are not going straight to Makkah",
        paragraphs: [
          "If you want to rest in Taif first, see [Taif taxi service](/locations/taif) for getting to a hotel, and book [Taif to Makkah](/routes/taif-to-makkah) for the day you choose.",
        ],
      },
    ],
    locationSlugs: ["taif", "makkah"],
    airportSlug: "taif-airport",
    serviceSlugs: ["airport-transfers", "intercity-transfers"],
    relatedRouteSlugs: ["taif-to-makkah", "makkah-to-taif", "taif-to-jeddah"],
    faqs: [
      {
        question: "Is Taif Airport a good way to reach Makkah?",
        answer:
          "It depends on where you fly from. Check which airport has a flight for your route. We run transfers from Jeddah Airport too.",
      },
      {
        question: "What if our flight is late?",
        answer:
          "Message us. We take bookings all day and night and will adjust the pickup.",
      },
      {
        question: "Do we stop at the miqat?",
        answer:
          "If you need to, tell us when you book and we will plan the stop at Qarn al-Manazil.",
      },
      {
        question: "Can we travel at night?",
        answer:
          "Yes, we take bookings all day and night. The road has steep and winding sections, so tell us if you would rather travel in daylight.",
      },
      {
        question: "How do I get a price?",
        answer:
          "Send the flight number, the number of passengers and bags, and the Makkah hotel. We confirm the vehicle and price before you travel.",
      },
    ],
  },
];

export const routePages: RoutePage[] = baseRoutePages.map((page) => ({
  ...page,
  sections: [...page.sections, ...(routeExtras[page.slug] ?? []), ...(routeExtrasMore[page.slug] ?? [])],
}));

export function getRoutePage(slug: string) {
  return routePages.find((route) => route.slug === slug);
}
