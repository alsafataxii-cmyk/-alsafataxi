import type { ContentSection } from "@/lib/content/types";

// Further hand-written sections for pages that were still short.
export const serviceTopups: Record<string, ContentSection[]> = {
  "business-transportation": [
    {
      heading: "Briefing the driver before an important guest arrives",
      paragraphs: [
        "A good pickup starts with a short brief. Tell us who is arriving, how they should be addressed, whether they will have luggage, and whether the guest prefers to talk or to be left in peace during the drive. Share the name of the person on site, the venue entrance that should be used and any security or access arrangements. Details like these are small, but they decide whether a first impression feels organised.",
        "If the guest list changes at the last minute, send the update as soon as you can, even if it is only a rough number. We would rather replan a vehicle early than find ourselves a seat short at the kerb.",
      ],
    },
    {
      heading: "Invoices, receipts and company details",
      paragraphs: [
        "Companies often need a clear record of what was booked. Tell us at the start what information your accounts team requires, such as names, dates and routes, and we will tell you what we are able to provide. It is easier to agree this before the trip than to reconstruct it afterwards.",
      ],
    },
  ],

  "city-taxi": [
    {
      heading: "Late nights and early mornings",
      paragraphs: [
        "The city does not stop when the prayers end, and neither do our rides. Late-evening bookings are common after dinners and evening prayers, and early-morning rides are common before Fajr at the mosque. If you need a car at an unusual hour, book it the day before and confirm the pickup point, since streets are quieter but fewer vehicles are available at short notice.",
        "For a late return from a dinner or a gathering, agree a pickup time and place before you go, and message us if the evening runs long.",
      ],
    },
  ],

  "private-chauffeur": [
    {
      heading: "Several days with the same driver",
      paragraphs: [
        "Guests staying for several days often prefer to keep the same driver. Over time he learns where you are staying, how you like to travel and which entrances work best at each place. If you want that continuity, say so when you book and we will plan it where we can. Where a different driver is needed for a particular day, we will tell you in advance.",
      ],
    },
  ],

  "intercity-transfers": [
    {
      heading: "Sleeping on the road",
      paragraphs: [
        "Long intercity journeys are a chance for the group to rest, particularly after an overnight flight. A calm driver, a cool cabin and a seat that reclines can matter more than anything else. Tell us if anyone needs to sleep, and we will keep the pace smooth and the stops short. Keep a light blanket or shawl within reach, since the air conditioning can feel cold after an hour.",
      ],
    },
  ],
};

export const placeTopups: Record<string, ContentSection[]> = {
  jeddah: [
    {
      heading: "Using Jeddah as a base between holy cities",
      paragraphs: [
        "Some pilgrims prefer to stay in Jeddah and visit Makkah and Madinah in separate trips, because hotels, restaurants and shops are easier in a larger city. If that is your plan, a driver for each outing keeps things simple: out to Makkah in the morning, back for rest and out again another day. Agree the times in advance, since the busiest hours on the road to Makkah are predictable.",
      ],
    },
  ],

  madinah: [
    {
      heading: "A short stay or a long one",
      paragraphs: [
        "Visitors to Madinah often stay for a few days, split between prayer, rest and Ziyarat. If you have only a day, a single morning tour and a calm afternoon is more realistic than a packed itinerary. If you have a week, spread the visits and leave space for unplanned prayer. Tell us how long you have, and we will suggest a plan that fits.",
      ],
    },
  ],

  taif: [
    {
      heading: "Taif for pilgrims and for families on holiday",
      paragraphs: [
        "Not everyone in Taif is on a pilgrimage. Many visitors are families on a school-holiday break, and the pace is slower, with long meals, park visits and shopping. Pilgrims who stop in Taif for a few days often use the time to rest between rituals. We plan differently for the two: for families we think about children and play, for pilgrims we plan around prayer and the road down to Makkah.",
      ],
    },
  ],
};

export const airportTopups: Record<string, ContentSection[]> = {
  "madinah-airport": [
    {
      heading: "A calm arrival for older travellers",
      paragraphs: [
        "Many travellers into Madinah are older, and a long flight followed by immigration queues is tiring. If you are collecting parents or grandparents, let us know whether they need help with bags or time to rest, and ask the airline about wheelchair assistance at the airport. A prepared pickup, with the car close to the exit, makes the transition from the terminal much easier.",
      ],
    },
  ],
};
