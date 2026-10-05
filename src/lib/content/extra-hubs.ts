import type { ContentSection } from "@/lib/content/types";
import { hubMore } from "@/lib/content/extra-hubs-more";

// Hand-written long-form sections for the hub and utility pages. Each page
// answers its own questions; nothing here is shared between pages.
export const hubExtras: Record<string, ContentSection[]> = {
  contact: [
    {
      heading: "Which way to contact us suits which situation",
      paragraphs: [
        "WhatsApp is the best choice for most bookings, because you can paste a flight number, drop a map pin and attach a screenshot of your hotel confirmation in one message. A phone call is better when your pickup is in the next hour, when you are standing in an arrivals hall and cannot find the driver, or when your plan is complicated enough that typing it would take longer than saying it. Email suits group enquiries and anything you want to keep a record of, such as a request from a tour operator or a company.",
        "Whichever you use, the same details move the conversation along: where you are starting, where you are going, when, how many people and how many bags.",
      ],
    },
    {
      heading: "What a good first message looks like",
      paragraphs: [
        "A message such as 'Jeddah Airport to a Makkah hotel on 14 March, flight SV123 lands at 21:40, four adults, five suitcases, the hotel is called X' lets us reply with a vehicle and a price straight away. A message that says only 'taxi to Makkah' makes us ask five questions before we can help. The first approach is faster for you, and it avoids confusion later.",
        "If you are not sure of some details, send what you have and say what you do not know. For example, if you do not yet have a hotel booking, tell us, and we will say what we need to confirm closer to the date.",
      ],
      bullets: [
        "Route, date and time, with the time zone if you are abroad",
        "Number of adults, children and bags",
        "Flight number for airport pickups or drop-offs",
        "Hotel name and area for pickups near the holy mosques",
        "Any need for a child seat, wheelchair space or an early stop",
      ],
    },
    {
      heading: "When to message us on the day of travel",
      paragraphs: [
        "Three moments are worth a short message. The first is when you land, so that the driver knows to start moving. The second is when you are through baggage claim, so that he knows when to meet you. The third is if anything changes, such as a delayed bag, a missing family member or a different exit. A one-line message at each stage is better than a call from the arrivals hall with no signal.",
        "If you are travelling abroad, check that your phone will receive messages in Saudi Arabia before you fly. A local SIM or an international plan is easier than relying on airport Wi-Fi.",
      ],
    },
    {
      heading: "Questions travellers often ask before they book",
      paragraphs: [
        "Many visitors write to ask how long a journey will take and whether to book a larger vehicle than they think they need. We are glad to answer both. For journey times, see our [route pages](/routes), which show typical distances and times and explain the factors that change them. For vehicles, see the [fleet page](/fleet), which lists seats and luggage space for each model.",
        "Others ask whether we can arrange stops for prayer, a visit to a particular place or a quick call at a pharmacy. Usually we can, as long as we know in advance. We would rather hear the request while the plan is still flexible than on the day.",
      ],
    },
    {
      heading: "Group, tour operator and company enquiries",
      paragraphs: [
        "If you are arranging transport for a group, include the number of people, the arrival times, the cities involved and whether the group moves together or splits. For a company, say how many trips you expect and whether you need invoices or a single point of contact. A tour operator should tell us which parts of the trip are already covered by other providers, so that we do not plan something that overlaps.",
        "We will tell you plainly what we can arrange and what we cannot, and we will confirm the vehicles and price before you travel.",
      ],
    },
    {
      heading: "If something goes wrong",
      paragraphs: [
        "Plans fail for ordinary reasons: a flight is cancelled, a hotel overbooks, a child falls ill. When it happens, contact us as soon as you can, by WhatsApp for speed or by phone if the pickup is imminent. We cannot control airlines or hotels, but we can adjust the car, the time and the route, and the earlier we hear, the more we can do.",
      ],
    },
  ],

  locations: [
    {
      heading: "How the four cities relate to each other",
      paragraphs: [
        "Makkah and Madinah are the holy cities. Jeddah is the commercial hub, with the largest airport, and Taif is a mountain town above Makkah. Together they form a rough Y: Jeddah and Makkah are about an hour apart, Makkah and Taif a little further, and Madinah is the long arm of the Y, four to five hours north of both. Seeing it this way helps with planning. A trip that looks like four destinations is really a coastal pair, a mountain detour and a long highway.",
        "The city pages explain each place on its own terms, while the [route pages](/routes) deal with the roads between them.",
      ],
    },
    {
      heading: "What makes a city page different from a route page",
      paragraphs: [
        "A city page tells you how we work inside that city: how to handle hotels near the mosques, what to expect from traffic, and where our service helps most. A route page is about a single journey, such as [Jeddah to Makkah](/routes/jeddah-to-makkah) or [Makkah to Madinah](/routes/makkah-to-madinah), and focuses on distance, timing and what to prepare. If you are planning a trip, use the city pages to choose where to stay and the route pages to plan how to move between them.",
      ],
    },
    {
      heading: "Picking a base for a longer stay",
      paragraphs: [
        "Pilgrims choose where to stay according to how close they want to be to the mosques, what they can afford and how much time they will spend in each city. Staying in Makkah gives easy access to the Haram but crowded surroundings. Jeddah is quieter and more spread out, so a base there means a day trip to Makkah. Madinah is compact, and many visitors stay near the mosque on foot. Taif is a retreat rather than a pilgrimage base, but suits those who want a few cool days.",
        "Tell us where you are staying and we will explain how transport works from there, including where cars may and may not stop.",
      ],
    },
    {
      heading: "Airports and the cities they serve",
      paragraphs: [
        "Three airports serve the region, and each links most naturally to one city. Jeddah serves Makkah and the coast. Madinah's airport serves the Prophet's city. Taif's serves the highlands. You can fly into one and out of another to avoid a return drive, and many pilgrims do. See the [airports page](/airports) for details on each, and the pages for [Jeddah Airport](/airports/jeddah-airport), [Madinah Airport](/airports/madinah-airport) and [Taif Airport](/airports/taif-airport).",
      ],
    },
    {
      heading: "Seasons that change how each city feels",
      paragraphs: [
        "Ramadan, the days before Hajj and school holidays bring far larger crowds to Makkah and Madinah. In summer, the heat on the coast pushes visitors to Taif. In winter, Jeddah and Makkah are pleasant, while Taif can be cold at night. A visit in a quiet period is easier to plan, but a visit in a busy one can still go smoothly if you book early and leave margin.",
      ],
    },
  ],

  book: [
    {
      heading: "Prepare these details before you open the form",
      paragraphs: [
        "A booking form is quick to fill in when you have the details to hand. Gather your flight number, the date and time, the hotel name, the number of passengers and bags, and a phone number that works in Saudi Arabia. If you are booking for someone else, such as a parent flying alone, get their flight details and contact number as well as your own.",
        "If you are unsure of any detail, say so in the message box. A note such as 'hotel not yet confirmed' is more useful than a guess.",
      ],
    },
    {
      heading: "Choosing between one-way, return and multi-leg bookings",
      paragraphs: [
        "A one-way transfer is the simplest booking. A return, such as from Jeddah to Makkah and back the same night, needs a second pickup time, so tell us both. A multi-leg trip, such as Jeddah Airport to Makkah, then Makkah to Madinah, then Madinah to the airport, is easiest to plan if you give us the dates for each leg in one message. We can then check that the timings between the legs make sense.",
        "For a long trip, you do not have to book everything at once. Book the legs that are fixed, and add the others when your plans settle.",
      ],
    },
    {
      heading: "What happens to a request once it is sent",
      paragraphs: [
        "We read each request and check it against the route, the date and the vehicle needed. If something is missing, we write back with a question. If everything is clear, we confirm the vehicle and the price. If the pickup is soon, WhatsApp or a phone call will get a faster answer than the form.",
      ],
    },
    {
      heading: "Special requirements to mention up front",
      paragraphs: [
        "Some needs are easy to meet when we know early and awkward to meet on the day. These include a child seat, space for a wheelchair or walker, an unusually large number of bags, a stop at the Miqat, and a pickup from a hotel that is hard to reach by road. Mention them in the form, even if you are not sure that they will apply.",
      ],
      bullets: [
        "Child seats and booster seats",
        "Wheelchairs, walkers and help boarding",
        "Large luggage, prams and equipment",
        "Stops for prayer, the Miqat or a meal",
      ],
    },
    {
      heading: "Changing or cancelling after you have booked",
      paragraphs: [
        "Plans change, and we try to be flexible. If your flight is moved, your hotel changes or your group grows, message us as soon as you know. Changes close to the pickup time are harder to accommodate, but we will do what we can. If you need to cancel, tell us promptly so that the vehicle can be used elsewhere.",
      ],
    },
  ],

  airports: [
    {
      heading: "How to choose which airport to fly into",
      paragraphs: [
        "Choose first by your first stop. If you are going to Makkah, Jeddah is the closest and usually has the most flights and the widest choice of fares. If you are going to Madinah first, flying directly there avoids a four-hour drive. If you plan to stay in the highlands, Taif is the shortest route. Many pilgrims visit both holy cities and fly into one airport and out of the other, which saves a long drive back.",
        "Fares, schedules and visa arrangements change, so check them before committing. We can help with the ground side once you know your flights.",
      ],
    },
    {
      heading: "Pilgrim terminals and regular terminals",
      paragraphs: [
        "At Jeddah, flights carrying pilgrims may use different arrival facilities from regular flights, and the walk from the aircraft to the exit can vary. Your airline or tour operator will tell you where you arrive. If you are unsure, send us your flight number and we will explain where the meeting point usually is. See [Jeddah Airport](/airports/jeddah-airport) for more.",
      ],
    },
    {
      heading: "Planning around a delayed or early flight",
      paragraphs: [
        "Most delays are short, but long ones happen, and flights sometimes land early. If your flight is delayed, tell us as soon as the airline tells you. If it lands early, send us a message so that the driver can be ready sooner. Sharing your flight number lets us follow the schedule, but it does not replace a message from you when something changes.",
        "In busy seasons, arrival halls fill up and immigration queues lengthen. Do not plan a tight connection or a fixed appointment within a couple of hours of landing.",
      ],
    },
    {
      heading: "Luggage, prams, wheelchairs and other extras",
      paragraphs: [
        "Pilgrims often carry more than the usual number of bags, particularly on the way home. Count them before you book and tell us the number, including any large or awkward items. A wheelchair or walker takes space and needs help to load. Tell us if you will use one, and ask your airline about assistance at the airport itself.",
      ],
    },
    {
      heading: "Between airports and hotels: three common patterns",
      paragraphs: [
        "The first pattern is a straight run from the airport to a hotel in the same city, such as Madinah Airport to a hotel near the Prophet's Mosque. The second is a longer run to a different city, such as Jeddah Airport to Makkah. The third is a departure, where the key detail is the time you need to be at the airport. Each has its own page, linked from the airport and route pages, with advice that fits.",
      ],
    },
  ],

  routes: [
    {
      heading: "Reading distance and time sensibly",
      paragraphs: [
        "The distances on our route pages are approximate, and the times are typical, not guaranteed. The same road can take an hour on a quiet Tuesday morning and two on a Friday night. As a rule, add half as much again for busy periods, and more if you have a flight at the other end. When in doubt, leave earlier. An early arrival is a small inconvenience, while a late one can cost a flight.",
        "Remember too that the time on the road is not the whole journey. Getting out of a hotel area, loading bags and passing checkpoints all take time that does not appear in the figure.",
      ],
    },
    {
      heading: "Which routes people combine",
      paragraphs: [
        "Most pilgrims use a chain of routes. A typical sequence is [Jeddah Airport to Makkah](/routes/jeddah-airport-to-makkah), then [Makkah to Madinah](/routes/makkah-to-madinah), then [Madinah to Jeddah](/routes/madinah-to-jeddah) for the flight home. Others reverse it, beginning in Madinah and finishing in Makkah, and they use [Madinah Airport to Makkah](/routes/madinah-airport-to-makkah). Taif visitors add a detour, such as [Makkah to Taif](/routes/makkah-to-taif).",
      ],
    },
    {
      heading: "Why each direction has its own page",
      paragraphs: [
        "Travelling from A to B is not the same as travelling from B to A. Leaving Makkah for the airport means you must plan for a flight. Arriving from the airport means you plan around immigration. Going up to Taif means a climb. Coming down means weather and traffic. We have written each direction separately so that the advice matches the situation you are actually in.",
      ],
    },
    {
      heading: "Planning a route that is not listed",
      paragraphs: [
        "We cannot list every journey. If you have in mind a trip such as a drive to a smaller town, a stop at a particular site or a loop that returns to the same place, send us the details. We will tell you whether we can arrange it and how long it is likely to take.",
      ],
    },
    {
      heading: "Seasonal effects on all routes",
      paragraphs: [
        "In the last ten days of Ramadan and the weeks around Hajj, almost every route is slower, and checkpoints may be stricter. School holidays bring families to Taif and to Jeddah's coast. In summer, afternoon heat makes long trips more tiring, and in winter some roads in the mountains are foggy at dawn. Check the season before you fix a time.",
      ],
    },
  ],

  about: [
    {
      heading: "The problems we try to remove",
      paragraphs: [
        "Most travel stress in this region comes from small uncertainties: not knowing who will collect you, how much a ride will cost, whether the car will fit the luggage, or where the driver will wait. Our job is to remove them before you travel. That means asking questions early, confirming the vehicle and price in advance, and staying in contact on the day.",
        "We do not pretend to remove the uncertainties we cannot control. Flights are delayed, roads are busy and crowds near the holy mosques are unpredictable. We tell you honestly where those risks lie so that you can plan around them.",
      ],
    },
    {
      heading: "A typical booking from start to finish",
      paragraphs: [
        "A family flying into Jeddah for Umrah sends us their flight number, hotel and bags. We reply with a suitable vehicle and a price. On the day, the driver follows the flight, meets them after baggage claim and drives to Makkah, stopping for prayer if they ask. A week later, they send a second message about the road to Madinah. A few days after that, a third arranges the drive to the airport. Each booking is simple, but together they cover the whole trip.",
      ],
    },
    {
      heading: "Respect for the places we work in",
      paragraphs: [
        "We work in places that matter deeply to our passengers. That shapes how we plan: around prayer times where we can, away from restricted areas, and with patience for travellers who move slowly. We follow local rules on access and traffic, and we ask our passengers to do the same.",
      ],
    },
    {
      heading: "How to tell us what we can do better",
      paragraphs: [
        "We learn from comments, good and bad. If a journey did not go as you expected, tell us what happened, ideally with the date and route, so that we can look at it properly. You can use the contact details on our [contact page](/contact), and you can leave a public review if you wish.",
      ],
    },
  ],

  fleet: [
    {
      heading: "Reading seat and bag figures honestly",
      paragraphs: [
        "The numbers on the fleet page are guides. A sedan that seats three adults has room for two cases, not for three adults and four large suitcases. A van that seats eight leaves little space for luggage if all eight seats are used. When you are near a limit, choose the next size up, or tell us the real number of bags and we will say whether a vehicle suits you.",
        "Soft bags pack more easily than hard cases, and prams and walkers take space that is easy to forget.",
      ],
    },
    {
      heading: "Which vehicle for which kind of trip",
      paragraphs: [
        "For a couple flying to Makkah with two cases, the [Executive Sedan](/fleet) is usually enough. For a family of four or five with several bags, the Premium SUV is the safer choice. For a group of six to eight, the Luxury Van keeps everyone together. For a guest who needs a formal arrival, the VIP Chauffeur Car is the right fit. If your group is larger than eight, we can plan more than one vehicle and arrange them to leave together.",
      ],
    },
    {
      heading: "Child seats and special equipment",
      paragraphs: [
        "If you need a child seat, tell us the age or weight of the child when you book. We will tell you what we can arrange. Prams, walkers and wheelchairs take space, so mention them too. If anyone in your group has difficulty getting in and out of a car, say so, and we will advise on which vehicle is easiest to board.",
      ],
    },
    {
      heading: "Availability in busy seasons",
      paragraphs: [
        "Vehicle availability tightens in Ramadan, around Hajj and in school holidays. The larger vehicles are the first to go, so if your group needs a van, book as early as you can. Flexible dates help us plan, and we can sometimes offer a different vehicle on an adjacent day if the preferred one is taken.",
      ],
    },
  ],

  services: [
    {
      heading: "How the services fit together",
      paragraphs: [
        "Our services are different ways of using the same cars and drivers. An [airport transfer](/services/airport-transfers) and a [hotel transfer](/services/hotel-transfers) are single journeys with a fixed start and end. An [intercity transfer](/services/intercity-transfers) is a longer single journey. A [city taxi](/services/city-taxi) is a short ride within one place. A [private chauffeur](/services/private-chauffeur) is a driver for hours or days. [Ziyarat tours](/services/ziyarat-tours) and [Umrah transportation](/umrah-transportation) are built around the sites and rituals of pilgrimage, and [business transportation](/services/business-transportation) covers corporate travel.",
        "Many trips use several of these. Choose the one that matches the moment, not the whole trip.",
      ],
    },
    {
      heading: "Single journey or a driver for the day?",
      paragraphs: [
        "If you need to go from A to B once, book a single journey. If you need to go from A to B, wait, go to C and come back, a chauffeur is usually simpler and often better value than several separate rides. A rough rule is that three or more stops in a day makes a chauffeur worth considering.",
      ],
    },
    {
      heading: "Services for pilgrims and services for residents",
      paragraphs: [
        "Pilgrims tend to use airport transfers, hotel transfers, intercity journeys and Ziyarat. Residents use city taxis, chauffeurs for family outings and business transport. The service names overlap, but the planning differs: a pilgrim needs a plan for the whole journey, while a resident needs flexibility in a place they know.",
      ],
    },
    {
      heading: "What does not change between services",
      paragraphs: [
        "No matter which service you choose, the basics stay the same. We ask for details, confirm the vehicle and price in advance, and have a driver ready at the time and place agreed. We tell you about any local factor, such as crowds or restricted roads, that may affect the plan, and we keep in touch on the day.",
      ],
    },
    {
      heading: "If you are not sure which service you need",
      paragraphs: [
        "Describe your plan in your own words, such as 'We land in Jeddah at 9 p.m., stay two nights in Makkah, then go to Madinah for three days.' We will suggest which services fit and how to book them. You do not need to know the names of the services in advance.",
      ],
    },
  ],
};

for (const [key, more] of Object.entries(hubMore)) {
  hubExtras[key].push(...more);
}
