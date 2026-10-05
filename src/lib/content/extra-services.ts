import type { ContentSection } from "@/lib/content/types";

// Hand-written additions for individual service pages. Each service gets
// material that belongs to that service only.
export const serviceExtras: Record<string, ContentSection[]> = {
  "airport-transfers": [
    {
      heading: "When the airport is only the first leg",
      paragraphs: [
        "For pilgrims, a landing at Jeddah is rarely the end of the day. It may be followed by a long drive to Madinah, a hotel check-in in Makkah and an Umrah the same night. Think about the whole sequence when you book, not just the airport: how tired will the group be, when will rooms be ready, and is there a prayer you want to catch on arrival? A transfer that looks perfect on paper can be exhausting in practice if it is stacked behind a long flight and a late hotel check-in.",
        "If you are flying in with a tour group, check which parts of the day are already arranged by your operator. Some packages include the airport pickup and others leave it to you. Telling us what is already covered stops us arranging something that duplicates it.",
      ],
    },
    {
      heading: "Sending the right flight details",
      paragraphs: [
        "Give the flight number that lands in Saudi Arabia, not the one you departed on. If you are connecting through another country, that is the second flight. Add the date of landing in local time, since a night flight can arrive on a different calendar day from the one on your ticket. If you booked a codeshare, send the operating airline's number if you know it.",
      ],
    },
  ],

  "ziyarat-tours": [
    {
      heading: "Planning around dress, shade and walking",
      paragraphs: [
        "Ziyarat days involve more standing and walking than most people expect: short walks from the car, steps at some sites and long waits in direct sun. Comfortable shoes that are easy to slip off at mosque entrances make the day easier. Carry water and, in summer, a hat or umbrella. Women travelling with children may want a bag with spare clothes.",
        "Dress modestly and be ready to follow instructions at each site. Rules on photography, entry and timings can change, and guards will tell you what applies on the day.",
      ],
    },
    {
      heading: "A tour that keeps the group together",
      paragraphs: [
        "Larger families sometimes lose people in crowds. Agree on a meeting point at each stop, share the driver's number with at least two adults and check that everyone knows the colour and plate of the car. It sounds obvious until a child wanders off at a busy site.",
      ],
    },
  ],

  "city-taxi": [
    {
      heading: "Common short trips we are asked for",
      paragraphs: [
        "City rides are usually small jobs with a particular purpose: a lift to a restaurant after the evening prayer, a visit to a hospital or clinic, a trip to a market or a shopping mall, or a transfer between two hotels in the same city. Because each has a different pattern, it helps to tell us what the ride is for. A hospital visit, for example, may need a driver who can wait, while a restaurant dinner is usually a drop-off and a later pickup.",
        "Parents with young children often ask for a car that can wait a few minutes while they put on a seat or load a pram. Say so when you book and the pickup will be planned with that in mind.",
      ],
    },
    {
      heading: "Paying attention to access near the holy mosques",
      paragraphs: [
        "In central Makkah and Madinah, pickup and drop-off points can be a few streets from the destination, and they change with crowd levels. Agree where to meet before you go, not when you are already outside. In other parts of both cities, and in Jeddah and Taif, cars can usually reach the door.",
      ],
    },
    {
      heading: "Using a city taxi alongside other plans",
      paragraphs: [
        "A city taxi pairs well with the longer services. A pilgrim who arrives by an [airport transfer](/services/airport-transfers) may use a few short rides during the stay, then leave with a [hotel transfer](/services/hotel-transfers). If you find yourself booking three or four rides a day, ask about a [private chauffeur](/services/private-chauffeur), which is usually easier than booking each one separately.",
      ],
    },
  ],

  "intercity-transfers": [
    {
      heading: "What changes between a short intercity ride and a long one",
      paragraphs: [
        "Jeddah to Makkah is an hour on a busy road. Makkah to Madinah is a different kind of trip, with several hours of desert and a service stop in the middle. Comfort and stops matter more as the distance grows, and so does the choice of vehicle. If you are comparing the two, think about who is in the car: a family with three children needs a different plan for a five-hour road than for a one-hour road.",
        "Our [route pages](/routes) give time estimates for each journey so you can decide before you book.",
      ],
    },
  ],

  "private-chauffeur": [
    {
      heading: "Planning a chauffeur day around prayer",
      paragraphs: [
        "A chauffeur day is built around fixed points, and for most of our passengers those are the five prayers. Decide in advance where you want to pray at each time, and tell the driver so that he is parked near the mosque rather than across town. Prayer halls can be crowded, particularly at Dhuhr and Maghrib in busy seasons, so a few minutes' buffer after the iqamah makes the next move easier.",
        "If you plan to pray at the Haram or the Prophet's Mosque, expect the driver to wait at a distance and call you when he is in position. The more precisely you describe the plan, the less time is spent finding each other.",
      ],
    },
    {
      heading: "What the chauffeur does not do",
      paragraphs: [
        "A chauffeur drives, waits and helps with bags. They are not a guide to the sites, and they cannot enter restricted areas for you. If you want a guided tour with historical commentary, ask us whether a [Ziyarat tour](/services/ziyarat-tours) suits you. If you need a driver for meetings and logistics, [business transportation](/services/business-transportation) may be a better match.",
      ],
    },
    {
      heading: "A plan for a multi-city day",
      paragraphs: [
        "Some guests want a single driver to take them from Jeddah to Makkah, to wait during Umrah and to bring them back that night. That is possible, but it is a long day and the hours in the middle depend on how long the rituals take. Agree a flexible window in advance and keep the driver informed about progress, so that the vehicle is where you expect it when you come out.",
      ],
    },
  ],

  "hotel-transfers": [
    {
      heading: "Hotels with more than one entrance",
      paragraphs: [
        "Many large hotels near the Haram have a main lobby, a side entrance for luggage and sometimes a separate door for tour groups. Check which one the hotel wants you to use and tell us, since cars cannot always stop at the main door. If you are given a gate or street name, include it in your message.",
        "Some hotels have porters who collect bags at the kerb and deliver them to the room, which is a useful service when the car cannot stop for long. Ask the hotel what it offers before you arrive.",
      ],
    },
    {
      heading: "When your hotel changes mid-trip",
      paragraphs: [
        "Pilgrims who stay in Makkah and Madinah often change hotels, and some move between two hotels in the same city to get a better location for the last nights. A transfer in this case involves two sets of details: where the bags come from and where they go. Tell us the checkout time at the first and the check-in time at the second, so that the car is not waiting for a room that is not ready.",
      ],
    },
    {
      heading: "Tell the hotel as well as us",
      paragraphs: [
        "Let your hotel know your arrival time. Rooms may be released early if the reception is aware, and bags can be stored if they are not. We can only arrange the road, but a short message to the hotel often removes the last obstacle between you and a place to rest.",
      ],
    },
  ],

  "business-transportation": [
    {
      heading: "What business travellers ask us most",
      paragraphs: [
        "Most questions are about reliability. Will the driver be at the arrivals gate when the flight lands? Will the car wait during a long meeting? Can the vehicle be changed if the guest list grows? We plan around these by asking for the schedule and the contact person up front, and by agreeing in advance what happens if a meeting overruns. If you have your own rules for supplier cars, tell us at the start.",
        "For senior guests, we recommend sending the exact name that should be used at the pickup, and the phone number of whoever will be on site.",
      ],
    },
    {
      heading: "Travelling during Hajj and Umrah seasons",
      paragraphs: [
        "Business visits during Ramadan or the Hajj season are harder to plan than usual. Roads are busier, hotels are fully booked and some areas are restricted. If your visit coincides, book earlier, add margin to every schedule and consider a driver who stays with you for the day rather than separate rides. See [private chauffeur](/services/private-chauffeur) for how that works.",
      ],
    },
    {
      heading: "Combining the airport, hotel and venue",
      paragraphs: [
        "Large groups often have three or four legs in a day: from the airport to a hotel, from the hotel to a meeting, from the meeting to a dinner and back. Plan them as one schedule so that vehicles and drivers are aligned, and tell us if anyone in the group needs a different departure time. A short written itinerary is easier for a driver to follow than a series of messages.",
      ],
    },
  ],
};
