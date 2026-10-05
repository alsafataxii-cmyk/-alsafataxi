import type { ContentSection } from "@/lib/content/types";

// Hand-written additions for city pages.
export const locationExtras: Record<string, ContentSection[]> = {
  makkah: [
    {
      heading: "Makkah is not open to everyone",
      paragraphs: [
        "Entry to Makkah is restricted to Muslims, and there are checkpoints on the main roads into the city. Carry your passport and any permit in hand luggage, not in a bag in the boot, since officers may ask to see them. Visitors who are not Muslim can still stay in Jeddah or Taif and travel between them without entering the restricted area, and we can plan routes accordingly.",
        "If you are travelling for Hajj, special arrangements and permit requirements apply, and they are set by the authorities and your operator, not by us. We plan around the instructions you receive.",
      ],
    },
  ],

  madinah: [
    {
      heading: "Dates, markets and last-day shopping",
      paragraphs: [
        "Madinah is known for its dates, and many visitors want to buy them before they leave. Markets are usually close to the mosque area, though stalls and shops vary in what they sell and when they open. If you plan to buy a lot, tell us, because boxes of dates and bags of gifts take space and a larger vehicle may be better for the trip home.",
        "Check opening hours around prayer times, since many shops close briefly while the congregation prays.",
      ],
    },
  ],

  jeddah: [
    {
      heading: "A city measured in kilometres, not minutes",
      paragraphs: [
        "Jeddah is a long, low city, and a trip from the northern districts near the airport to the historic district in the south can take as long as the road to Makkah on a bad day. When you book, give the district and a landmark, not only a hotel name. Many Jeddah hotels share names with places elsewhere, and a wrong guess costs time.",
        "Traffic is at its worst in the late afternoon and early evening. For flights and meetings, we suggest leaving more margin than you would in a smaller city.",
      ],
    },
    {
      heading: "The old city and the waterfront",
      paragraphs: [
        "The historic district of Al-Balad has narrow streets that cars cannot enter, so pickups happen at the edges. The Corniche, by contrast, is wide and easy for vehicles. If you plan an evening on the waterfront and a late return, agree a pickup time in advance, since taxis are harder to find when the crowds leave.",
      ],
    },
  ],

  taif: [
    {
      heading: "Planning a rose-season visit",
      paragraphs: [
        "Taif is known for its roses, which flower in spring and are harvested early in the morning to be turned into rose water and oil. If this is why you are going, ask the farm about the season and its opening hours before you set off, since they vary with the weather. Visiting early means cooler weather and a better chance of seeing the harvest, but it also means an early start from the hotel.",
        "Farms are often on side roads where the lane is narrower than the highway, so tell the driver the name or give the pin.",
      ],
    },
    {
      heading: "A stay of several days",
      paragraphs: [
        "Visitors who stay for a few days often use Taif as a base, going out each day to a different place and returning to the hotel to rest. A car with a driver for the day is usually simpler than several bookings, and it allows spontaneous changes. If you want a driver on certain days only, tell us which, and book the rest as you go.",
      ],
    },
    {
      heading: "Summer crowds, winter cold",
      paragraphs: [
        "In summer, Taif fills with visitors escaping the heat, and hotels and restaurants are crowded, particularly at weekends. In winter, nights can be cold enough for frost on higher ground, and some visitors are surprised by how much warm clothing they need. Check the forecast a few days before travelling and pack accordingly.",
      ],
    },
  ],
};

// Hand-written additions for airport pages.
export const airportExtras: Record<string, ContentSection[]> = {
  "madinah-airport": [
    {
      heading: "If your group lands on more than one flight",
      paragraphs: [
        "Large families and tour groups do not always travel together. Some arrive on the morning flight and others on the evening one. If your party is split, tell us how many are on each flight and whether you want one car to wait for everyone or separate cars at different times. Waiting in an arrivals hall for several hours is tiring, especially with children or older relatives.",
        "A single van can carry a bigger group, but it may mean the first arrivals wait for the last. Weigh the wait against the cost of extra vehicles.",
      ],
    },
  ],

  "taif-airport": [
    {
      heading: "What to expect from a smaller terminal",
      paragraphs: [
        "A smaller airport is usually calmer than Jeddah, with fewer people at immigration and shorter walks to the exit. Services around the terminal are more limited, so bring water, any medicines and a charger in hand luggage, and do not rely on finding a shop open at an odd hour. If you have to wait, the arrivals area is a pleasant place to sit rather than a crowded hall.",
        "Because there are fewer flights, schedule changes can be sudden. Check your airline's status on the morning you fly and message us if anything has moved.",
      ],
    },
    {
      heading: "A long stay or a short one",
      paragraphs: [
        "Visitors flying to Taif fall into two groups: those who plan to stay in the highlands and those who treat it as a gateway to Makkah. The first group will want local rides and perhaps a driver for the day. The second wants a road transfer as soon as they land. Telling us which group you are in lets us plan around it, and we can add or change legs later.",
      ],
    },
    {
      heading: "Luggage that travelled with a family",
      paragraphs: [
        "Families flying into a small airport sometimes bring more luggage than they planned, including baby equipment, shopping and gifts. Count the pieces at the baggage belt, send us the final number and we will check that the vehicle has room before we set off. Items on a seat or on laps are not safe on mountain roads.",
      ],
    },
  ],
};
