import type { ContentSection } from "@/lib/content/types";

// Hand-written additions for individual route pages. Each entry answers a
// question specific to that journey, so no two routes share the same sections.
export const routeExtras: Record<string, ContentSection[]> = {
  "jeddah-airport-to-makkah": [
    {
      heading: "Landing at night or early in the morning",
      paragraphs: [
        "A large share of flights into Jeddah touch down in the small hours, which creates a problem that has nothing to do with the road: hotel rooms in Makkah are often not ready until the afternoon, and a pilgrim who arrives at 3 a.m. may reach the lobby with a long wait ahead. Ask your hotel before you fly whether an early check-in is possible or whether bags can be stored while you rest or pray.",
        "If you plan to perform Umrah straight away, it helps to know in advance where your hotel wants luggage handed over. We can agree a drop-off that suits that plan, so that you are not carrying bags into the mataf area. If you would rather check in first and go to the Haram later, say so, and the driver will go directly to the hotel entrance or the nearest practical point.",
      ],
    },
  ],

  "makkah-to-jeddah-airport": [
    {
      heading: "Working out your pickup time: a worked example",
      paragraphs: [
        "Take an imaginary flight that leaves Jeddah at 14:00. If your airline asks international passengers to check in three hours before departure, you want to be at the airport by 11:00. The road takes one to one and a half hours, so the car should leave Makkah by about 09:30 at the latest. Then add a margin for a slow exit from the hotel area and for a possible queue at a checkpoint, and a 08:45 pickup starts to look sensible. Your own numbers will differ, so check your airline's rules first.",
        "Notice what dominates that sum: it is not the drive, it is the rules and the margin. That is why we ask for your flight time rather than just a pickup time, and why we suggest a time back from it instead of accepting the latest one that might work.",
      ],
    },
    {
      heading: "Tawaf al-Wada and the day you leave",
      paragraphs: [
        "Pilgrims who make the farewell tawaf before leaving Makkah need to fit it around checkout, luggage and the road. Many choose to perform it the night before or in the early hours, and then return to the hotel to collect bags. If your plan is to go straight from the Haram to the car, tell us in advance, because the pickup point then becomes the nearest practical road to the mosque rather than the hotel door, and your bags need to be in the car before you go.",
      ],
    },
  ],

  "jeddah-airport-to-madinah": [
    {
      heading: "Who chooses to land in Jeddah and drive to Madinah",
      paragraphs: [
        "Madinah has its own airport, so this route is a deliberate choice. It tends to suit travellers whose airline or package flies only into Jeddah, groups who begin with Umrah in Makkah and move on afterwards, and families who simply found a better fare. It also suits anyone who wants one driver for the long journey after a flight, instead of splitting it between a bus, a train and a taxi.",
        "If you are making the trip after Umrah, see [Makkah to Madinah](/routes/makkah-to-madinah) instead. This page is for people who go to the Prophet's city first and will return to Makkah later.",
      ],
    },
    {
      heading: "Planning the first evening in Madinah",
      paragraphs: [
        "A four-to-five-hour road journey after a flight often means arriving in Madinah in the evening or at night. Check when your hotel closes its front desk, whether dinner is available and how far the walk to the Prophet's Mosque is. Entry to the Rawdah is managed through an official appointment system, so look at the current rules before you travel rather than hoping to arrange it on the day.",
      ],
    },
  ],

  "madinah-airport-to-makkah": [
    {
      heading: "Why this transfer is different from a normal airport run",
      paragraphs: [
        "Most airport transfers are short. This one is a five-hour drive across the Hejaz that begins with a queue for immigration. Pilgrims who fly into Madinah usually do so because the first part of their trip is the Prophet's Mosque, so by the time they are on this road they may already have spent days in the city. If that is you, the airport pickup is probably the departure leg of the journey, with a hotel checkout earlier the same day.",
        "In that case, send us the checkout time as well as the flight, because we need to know whether you are coming from the hotel or arriving off a plane. The two are planned in different ways even if the destination is the same.",
      ],
    },
    {
      heading: "Getting ready for ihram before you leave",
      paragraphs: [
        "If you intend to enter ihram at Dhul Hulayfah, it is easier to prepare at the hotel than in the airport arrivals hall. Wash, wear what you need and keep spare ihram sets in hand luggage. The practical details are for your scholar or tour operator, but we can plan the stop and the pickup time so that you are not rushing through prayer to make up time lost to a delayed flight.",
      ],
    },
  ],

  "makkah-to-madinah": [
    {
      heading: "When to leave Makkah for Madinah",
      paragraphs: [
        "Pilgrims usually leave Makkah soon after the farewell tawaf, but the real question is whether to travel by day or at night. A morning departure gives you daylight and cooler temperatures, and lets older passengers sleep in the afternoon. A night departure reaches Madinah around dawn, which suits those who want to pray Fajr at the Prophet's Mosque on arrival. Neither is better in general. Choose according to how rested the group will be.",
        "Whichever you pick, give us your hotel checkout time. If your room is held until midday but the car leaves in the evening, we need to know where to collect you and from which entrance.",
      ],
    },
    {
      heading: "A group that will not fit in one car",
      paragraphs: [
        "Large extended families often ask whether two cars can travel together. They can, and we plan them as one booking with matching times. Separate vehicles do not always travel at exactly the same speed, so agree in advance where each car will stop for rest and who will wait for whom, instead of assuming that they will keep each other in sight on a five-hour road.",
      ],
    },
  ],

  "madinah-to-makkah": [
    {
      heading: "Entering ihram on this journey",
      paragraphs: [
        "For travellers heading to Makkah for Umrah, the natural place to assume ihram is the Miqat at Dhul Hulayfah, known locally as Abyar Ali. It sits on the outskirts of Madinah, so it fits neatly into this journey. You can arrive already wearing ihram or change at the mosque there. Please check with your own scholar or tour operator about the rules that apply to you.",
        "What we can do is make the stop easy: tell us you want to stop at the Miqat and we will adjust the pickup time. Facilities at the mosque there are busy at peak periods, so give the group extra time.",
      ],
    },
    {
      heading: "Do not arrive in Makkah without a plan for the last kilometre",
      paragraphs: [
        "After roughly 450 km, drivers and passengers alike are tired, and the last kilometre into Makkah is often the slowest. Have your hotel's name, location and phone number ready before the car reaches the city, and confirm with them whether early check-in is available. If it is not, plan to leave bags with reception and head for the Haram, rather than waiting in a car that cannot stop.",
      ],
    },
  ],

  "jeddah-to-makkah": [
    {
      heading: "A city-to-city ride with no airport in it",
      paragraphs: [
        "This page is for people who are already in Jeddah, in a hotel, an apartment or a family home, and want to go to Makkah. Unlike the airport transfer, there is no flight to track. The key variable is where in Jeddah the car collects you. Jeddah stretches a long way along the coast, and the drive from the northern districts takes noticeably longer than from the south. A map pin removes the guesswork.",
        "Residents often make this journey for a weekend Umrah or a family visit, so they care about time at the other end. Tell us when you want to be at the Haram and we will work back to a pickup, keeping in mind that peak prayer times fill the roads around the mosque.",
      ],
    },
    {
      heading: "Returning to Jeddah the same day",
      paragraphs: [
        "Day trippers should decide on the return before they set off. A pickup agreed in advance, for example after Isha, is easier to guarantee than an open-ended one, and it avoids the situation where the driver is waiting somewhere the car cannot stop. If your plans change on the day, message us and we will adjust where possible.",
      ],
    },
  ],

  "makkah-to-jeddah": [
    {
      heading: "Where in Jeddah are you going?",
      paragraphs: [
        "This route ends in many different places: a hotel on the Corniche, a family home in a residential district, an office, or a ferry, rail or bus connection. For each, the driver chooses a different final approach, and the time varies. If your destination is the airport, use the [Makkah to Jeddah Airport](/routes/makkah-to-jeddah-airport) page, which is built around flights. This page is for everything else.",
        "Share the exact address or pin and we will confirm whether we can reach it by road easily. In older parts of the city streets are narrow, so the car may need to stop on the nearest main road.",
      ],
    },
    {
      heading: "Business travel from the holy city",
      paragraphs: [
        "Business visitors who are staying in Makkah while attending meetings in Jeddah sometimes find the road quicker than they expect and the central Makkah hotel exit slower. Allow time for the hotel forecourt, which can be congested after prayers, then add the hour on the road, then the last few kilometres inside Jeddah. If you need a driver for several stops, see [private chauffeur](/services/private-chauffeur).",
      ],
    },
  ],

  "jeddah-to-madinah": [
    {
      heading: "Choosing a Jeddah starting point",
      paragraphs: [
        "Many people begin this trip at a Jeddah hotel after landing the previous day, which is a good idea: it lets you rest before a long drive. If you are coming straight from the airport, the page for [Jeddah Airport to Madinah](/routes/jeddah-airport-to-madinah) covers flight timing. This page is for travellers collecting from a hotel or address in the city.",
        "Decide on the departure time based on the group. A seven o'clock start gets you to Madinah well before afternoon prayers, while a mid-morning start is gentler on a family with children but means arriving later in the day.",
      ],
    },
    {
      heading: "Keeping children and older passengers comfortable",
      paragraphs: [
        "Four hours is a long time for children, and for an older relative it can be a tiring day. Break the journey in a way that suits them: one proper stop rather than three short ones, a meal at the stop, a few minutes of walking. Tell us beforehand if anyone gets car sick, needs to take medicine on a schedule or needs help getting in and out of the vehicle, and we will plan accordingly.",
      ],
    },
  ],

  "madinah-to-jeddah": [
    {
      heading: "Three reasons people take this road",
      paragraphs: [
        "The first is the flight home: they are heading to Jeddah Airport at the end of a trip, and need to plan from the airline's departure time. The second is a return to a Jeddah home or hotel after visiting Madinah, where timing is flexible. The third is business, where the journey has to end at a specific appointment. These call for different planning, and the clearest way to get it right is to tell us which one you are in.",
        "For flight departures, you may find [Jeddah Airport](/airports/jeddah-airport) a useful page for terminal information and arrival advice.",
      ],
    },
    {
      heading: "A last morning in Madinah",
      paragraphs: [
        "Many visitors want one more prayer at the Prophet's Mosque before leaving. If you plan this, put the luggage in the car or at reception first, set an exact meeting time and leave margin for the crowds returning from the mosque. A car that must wait while a group walks back from the mosque loses time, and the road does not give it back.",
      ],
    },
  ],

  "makkah-to-taif": [
    {
      heading: "The road up the escarpment",
      paragraphs: [
        "Leaving Makkah for Taif means climbing from the coastal plain into the Sarawat mountains. Roads wind as they rise, the temperature drops and visibility can change quickly in fog or rain. A driver used to the route will adjust speed without making it a drama, but passengers prone to travel sickness should say so before leaving.",
        "Taif is popular on summer weekends, when families escape the heat of the coast. If your trip falls on a weekend or holiday, leave earlier than you think necessary, because the road is busiest in the morning going up and in the evening coming down.",
      ],
    },
    {
      heading: "What visitors usually do once they get there",
      paragraphs: [
        "A day in Taif often includes a park or viewpoint, a visit to the Masjid of Abdullah ibn Abbas, a stroll through the market and, in season, a visit to a rose farm. Plan a few stops rather than a dozen, because mountain roads between them take time. See [Taif](/locations/taif) for more on the city.",
      ],
    },
  ],

  "taif-to-makkah": [
    {
      heading: "Heading down at the end of a Taif stay",
      paragraphs: [
        "The descent from Taif to Makkah is the reverse of the climb, and it brings its own planning issues. Many visitors leave in the afternoon, so the road down fills with weekend traffic, and they arrive in Makkah around evening prayers when the central area is busy. If you have a hotel booking, check the check-in policy so that you are not left waiting with luggage.",
        "Pilgrims who have been to Taif for a break and are returning to Makkah to complete or begin Umrah may pass the Miqat of Qarn al-Manazil, also called As-Sail al-Kabir. Tell us if you want to stop there.",
      ],
    },
    {
      heading: "Dressing for the change in climate",
      paragraphs: [
        "The temperature rises as the road drops, and a jacket that was welcome in Taif can be uncomfortable in the car after an hour. Keep it where you can reach it, and carry water in the cabin. If you are in ihram for Umrah, plan accordingly, since fewer layers are permitted.",
      ],
    },
  ],

  "jeddah-to-taif": [
    {
      heading: "Two roads and one time of year",
      paragraphs: [
        "The way to Taif from Jeddah passes close to Makkah before heading up into the mountains, so a Jeddah trip to Taif is really a coastal run followed by a climb. In summer, when the heat on the coast is hardest, it feels like a different country at the top. In winter, evenings in Taif can be cold enough that visitors wish they had packed a coat.",
        "Because the drive is long enough that you will want a stop, plan one: a service station on the way, or a short break before the climb begins. Tell the driver if anyone in the group is likely to need one early.",
      ],
    },
    {
      heading: "Staying over or heading back",
      paragraphs: [
        "Some families travel up for a weekend, others for a single day. For a day trip, it is wise to agree the return pickup before you leave, since Taif is busy on Friday evenings. For a longer stay, you can book the way back later using [Taif to Jeddah](/routes/taif-to-jeddah), and we will plan it for the day you choose.",
      ],
    },
  ],

  "taif-to-jeddah": [
    {
      heading: "Leaving the highlands for a flight or a meeting",
      paragraphs: [
        "If you are catching a flight from Jeddah, work back from the airport time, adding the two-to-two-and-a-half-hour drive, then adding the margin for the descent. Mountain roads are slower when wet, and traffic from Makkah often joins the highway near the bottom. For airport departures, [Jeddah Airport](/airports/jeddah-airport) has more on terminals and arrival times.",
        "For a business meeting, treat the road time as a minimum and leave a buffer. Arriving early is easy to fill. Arriving late is not.",
      ],
    },
    {
      heading: "Buying things in Taif",
      paragraphs: [
        "Taif is known for its roses, honey, fruit and dried produce, and many visitors leave with more than they came with. Fragile jars and boxes of fruit travel better on the seat beside you than in a boot full of suitcases. If you expect to buy a lot, mention it so that we can send a vehicle with space.",
      ],
    },
  ],

  "taif-airport-to-makkah": [
    {
      heading: "A smaller airport, so confirm early",
      paragraphs: [
        "Taif has fewer flights than Jeddah, and a cancelled or retimed service has fewer alternatives. Check your flight details the day before and again on the morning, and send us any change. If your flight is delayed by several hours, tell us as soon as you know, so that the pickup is rearranged rather than left to run on.",
        "After landing, arrivals at a smaller airport are often quicker than at Jeddah, but baggage can still take time. Message us once you have your bags.",
      ],
    },
    {
      heading: "Heading to Makkah from the mountains",
      paragraphs: [
        "The road to Makkah drops from the highlands to the lowlands over about 100 km and takes one and a half to two hours. If you plan Umrah on arrival, the Miqat on this road is Qarn al-Manazil. Ask your scholar or operator how it applies to you, and tell us if you would like to stop. For the reverse journey, see [Makkah to Taif](/routes/makkah-to-taif).",
      ],
    },
  ],
};
