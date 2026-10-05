import type { Block } from "@/lib/content/vehicle-routes/types";

// Further page-specific sections, inserted before the block at index `before`.
export const extraBlocks: Record<string, { before: number; blocks: Block[] }> = {
  "jeddah-to-makkah/7-seater": {
    before: 8,
    blocks: [
      {
        type: "prose",
        heading: "Timing a group departure from Jeddah",
        paragraphs: [
          "With a family, the departure time is set by the slowest part of the morning, not by the road. Children need breakfast, someone always needs one more thing from upstairs, and the luggage has to come down in two trips. Ask for the pickup half an hour after the time you think you will be ready, and the day starts calmly.",
          "Avoid Thursday evenings and Friday late mornings if your dates are flexible. The road to Makkah fills with weekend traffic, and a one-hour drive can stretch well beyond that. Early mornings and mid-afternoons on weekdays are usually easier.",
        ],
      },
    ],
  },

  "jeddah-airport-to-makkah/7-seater": {
    before: 7,
    blocks: [
      {
        type: "cards",
        heading: "Common arrival-day problems, and how groups avoid them",
        columns: 2,
        items: [
          { title: "One phone that will not connect", copy: "Set up roaming or a local SIM before the trip, or make sure at least one adult's phone works on landing. The driver can only reach a number that answers." },
          { title: "A suitcase left on the belt", copy: "Count the group's bags before leaving baggage claim. Once you are on the road to Makkah, going back is a long detour." },
          { title: "The group splits up in the hall", copy: "Agree one place to wait while the contact person finds the driver, rather than everyone walking out with trolleys." },
          { title: "A late change of hotel", copy: "If your Makkah hotel changes after you book, send the new name before you fly, since the drop-off point depends on it." },
        ],
      },
      {
        type: "prose",
        heading: "Night arrivals with children",
        tone: "sand",
        paragraphs: [
          "Many flights land at Jeddah late at night or in the early hours. For a family, that means sleepy children, a long queue and the road to Makkah in the dark. A larger vehicle helps here more than at any other time: children can lie across a seat or sleep on a parent, and nobody has to hold a bag on their lap.",
          "Check that your Makkah hotel knows you are arriving at night and will hold the rooms. Arriving at a hotel that has released your booking is a far bigger problem than any delay at the airport.",
        ],
      },
    ],
  },

  "makkah-to-madinah/7-seater": {
    before: 7,
    blocks: [
      {
        type: "prose",
        heading: "Choosing between a morning and a night departure",
        paragraphs: [
          "A morning departure suits most families. The group is rested, the heat is lower for the first hours and you arrive in Madinah in daylight, which makes finding the hotel and settling children much easier.",
          "A night departure suits groups who want to arrive around dawn, or who prefer to travel when the roads are quieter and the temperature has dropped. It is harder on young children, and the driver and the group both need to have rested during the day.",
          "Whichever you choose, tell us before the day so the vehicle and the driver are planned for that time.",
        ],
      },
      {
        type: "cards",
        heading: "A long road with older relatives",
        columns: 3,
        items: [
          { title: "Seat choice", copy: "Give the seat with the easiest access to the person who finds getting in and out hardest." },
          { title: "Regular breaks", copy: "Older passengers often prefer a short stop every couple of hours to stretch and walk a little." },
          { title: "Medicines on time", copy: "Keep medicines and water in the cabin, and plan stops around any doses that need to be taken with food." },
        ],
      },
    ],
  },

  "madinah-to-makkah/7-seater": {
    before: 6,
    blocks: [
      {
        type: "capacity",
        heading: "Group and luggage for this leg",
        intro: "Usually the leg with the most luggage of the whole trip.",
        items: [
          { label: "Passengers", value: "A family or small group of about six or seven" },
          { label: "Luggage", value: "Suitcases plus what was bought in Madinah" },
          { label: "Vehicle", value: "Van class, such as Staria or Hiace" },
          { label: "Road", value: "About 450 km, before stops" },
        ],
        note: "Our van class is listed for up to eight passengers and about six bags. We confirm the vehicle assigned to your date before you travel.",
      },
      {
        type: "prose",
        heading: "Timing the departure from Madinah",
        paragraphs: [
          "Start from the time you want to reach Makkah, not from the time you want to leave Madinah. Add four and a half to five hours of road, the time for any stop, and the time it takes a group to leave a busy hotel area. That gives you the pickup time.",
          "If your group intends to perform Umrah on arrival, think about how tired everyone will be after the drive. Some families prefer to arrive, rest and go to the Haram later; others prefer to go straight away. Neither is wrong, but the plan affects the departure time, so decide it before you book.",
          "Avoid leaving Madinah right after a congregational prayer if you can. The streets around the mosque are at their busiest, and the first kilometre can take longer than the next twenty.",
        ],
      },
    ],
  },

  "jeddah-to-makkah/staria": {
    before: 6,
    blocks: [
      {
        type: "prose",
        heading: "What the Staria is best at on this short route",
        paragraphs: [
          "On an hour's drive, comfort over distance is not the issue. What the Staria is good at here is moving a family and its luggage in one go: from a Jeddah hotel at the end of a stay to a Makkah hotel for the next part of the trip, or from a relative's home to the Haram and back.",
          "It is also useful when the group includes someone who finds a low car hard to get into. Many older passengers find a minivan easier, and loading a folded wheelchair or a pushchair is simpler when there is a proper luggage area behind the seats.",
          "If your group is small and your bags are light, choose a sedan instead. The Staria is the right vehicle when the group or the luggage needs it, not by default.",
        ],
      },
      {
        type: "cards",
        heading: "Typical Staria trips between Jeddah and Makkah",
        columns: 3,
        items: [
          { title: "Hotel to hotel", copy: "Checking out of Jeddah and checking in to Makkah, with the whole family's luggage in one vehicle." },
          { title: "A family day in Makkah", copy: "Relatives travelling together from a Jeddah home for Umrah, with an agreed time for the drive back." },
          { title: "Visiting guests", copy: "Collecting guests from their Jeddah hotel and taking them to Makkah as a group." },
        ],
      },
    ],
  },

  "jeddah-airport-to-makkah/staria": {
    before: 6,
    blocks: [
      {
        type: "compare",
        heading: "Staria or sedan after a flight?",
        intro: "The question is really about the luggage and the group, not the road.",
        columns: ["Hyundai Staria", "Sedan"],
        rows: [
          ["After a long flight", "Room to rest; children can sleep", "Fine for one or two adults"],
          ["Trolleys of suitcases", "Luggage area for a family's cases", "Boot space for a couple's bags"],
          ["Group arriving together", "Everyone in one vehicle", "May need a second car"],
        ],
        note: "If you are flying in as a couple with two suitcases, a sedan is the simpler and more economical choice.",
      },
      {
        type: "prose",
        heading: "Pilgrim flights and busy seasons",
        tone: "sand",
        paragraphs: [
          "In Ramadan and in the weeks around Hajj, Jeddah Airport handles very large numbers of arriving pilgrims. Immigration and baggage collection can take much longer than usual, and the arrival areas are crowded. That is when a pre-booked vehicle helps most, because you are not looking for transport for a whole family in a busy hall.",
          "In these periods, send your booking early so we can confirm the Staria for your date, and expect the road to Makkah to be busier too. Plan your first evening in Makkah with that in mind.",
        ],
      },
    ],
  },

  "makkah-to-madinah/staria": {
    before: 6,
    blocks: [
      {
        type: "prose",
        heading: "Why a minivan suits this road",
        paragraphs: [
          "Over five hours, the difference between a minivan and a car is felt in small ways. Passengers can sit upright in individual seats rather than three across a bench. There is space to move a child from one seat to another at a stop. The luggage stays behind the passengers instead of pressing against the back of the seats.",
          "None of that matters much for two people. For a family of five or six, it is usually the reason they ask for a Staria by name.",
        ],
      },
      {
        type: "cards",
        heading: "Ideas for a calmer journey north",
        columns: 3,
        items: [
          { title: "Eat before you go", copy: "Have a proper meal before the pickup, so the first stop can be a short one." },
          { title: "One contact person", copy: "One phone number for the driver, and one person who knows the plan and the hotel details." },
          { title: "Hotel details ready", copy: "Keep the Madinah hotel's phone number and booking confirmation to hand for the arrival." },
        ],
      },
      {
        type: "checklist",
        heading: "Send these with your Staria request",
        tone: "sand",
        items: [
          "Makkah hotel and pickup time",
          "Madinah hotel name",
          "Travel date",
          "Passengers, including children",
          "Updated luggage count",
          "Stops you would like on the way",
        ],
      },
    ],
  },

  "madinah-to-makkah/staria": {
    before: 5,
    blocks: [
      {
        type: "split",
        heading: "A group vehicle for the longest leg",
        side: "left",
        image: {
          src: "/fleet/hyundai-staria-minivan.webp",
          alt: "Black Hyundai Staria minivan seen from the front three-quarter angle",
          title: "Hyundai Staria minivan",
          width: 374,
          height: 219,
        },
        paragraphs: [
          "For many families the drive from Madinah to Makkah is the longest single journey of the trip. It comes after several days of prayer and visits, with bags that have grown, and it ends in the busiest part of Makkah.",
          "A Staria lets the group travel together for those five hours, with a seat each and the luggage behind. It is a practical choice rather than a luxury one, and it is most useful when the group is five or more or the luggage is heavy.",
        ],
      },
      {
        type: "cards",
        heading: "Keeping a group organised on the day",
        columns: 2,
        items: [
          { title: "A meeting time, not a pickup time", copy: "Tell the group to be in the lobby fifteen minutes before the vehicle arrives. The pickup time is when you leave, not when people start coming down." },
          { title: "Bags labelled", copy: "Large groups often have identical suitcases. A coloured tag on each makes the arrival in Makkah much quicker." },
          { title: "Who sits where", copy: "Agree seats before boarding: older passengers near the door, children next to a parent." },
          { title: "One plan for arrival", copy: "Decide before you leave whether the group goes to the hotel first or straight to the Haram." },
        ],
      },
    ],
  },

  "jeddah-to-makkah/yukon": {
    before: 6,
    blocks: [
      {
        type: "prose",
        heading: "Collecting guests in a Yukon",
        paragraphs: [
          "One of the most common reasons for asking for a Yukon on this route is hosting. A family in Jeddah wants to collect visiting relatives and take them to Makkah, or a company wants to bring a guest to the city, and the vehicle is part of the welcome.",
          "If you are booking for someone else, send their name and phone number as well as your own, and the details of where they are staying. The driver contacts the traveller on the day, not the person who booked.",
        ],
      },
      {
        type: "checklist",
        heading: "What to send for a Yukon booking",
        tone: "sand",
        items: [
          "Pickup address or map pin in Jeddah",
          "Makkah hotel or destination",
          "Date and time",
          "Number of passengers",
          "Number of suitcases",
          "Traveller's name and phone, if booking for someone else",
        ],
      },
    ],
  },

  "makkah-to-madinah/yukon": {
    before: 5,
    blocks: [
      {
        type: "compare",
        heading: "Yukon or sedan for five hours?",
        intro: "Both are private, with a driver, and follow the same road. The difference is space.",
        columns: ["GMC Yukon XL", "Sedan"],
        rows: [
          ["Passenger space", "More room per person over a long road", "Comfortable for two or three"],
          ["Luggage", "More practical after a stay in Makkah", "Light luggage"],
          ["Group travel", "A family travels together", "Small parties only"],
          ["Vehicle type", "Full-size SUV", "Saloon car"],
        ],
      },
      {
        type: "prose",
        heading: "Rest stops on the road north",
        tone: "sand",
        paragraphs: [
          "The highway between Makkah and Madinah has service areas with fuel, food and places to pray, though what is open varies with the time of day. Most travellers stop once, around the middle of the journey. Families with young children or older relatives may prefer two shorter stops.",
          "Tell us your preference when you book, and whether you want the stop timed around a prayer. A stop adds time to the journey, so include it when you plan your arrival in Madinah.",
          "If you are travelling at night, ask the hotel in Madinah to expect a late arrival, and keep its number handy in case the driver needs directions to the right entrance.",
        ],
      },
      {
        type: "cards",
        heading: "After you arrive in Madinah",
        columns: 2,
        items: [
          { title: "Ziyarat on another day", copy: "Most visitors rest after the drive and plan Ziyarat for the next morning. See our Ziyarat tours page for how a morning is planned." },
          { title: "The road home", copy: "If you fly home from Jeddah or Madinah, you can book that leg now and give us the flight time." },
        ],
      },
    ],
  },
};
