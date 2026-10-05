import type { ContentSection } from "@/lib/content/types";

// A further layer of hub-page sections, each specific to its page.
export const hubMore: Record<string, ContentSection[]> = {
  locations: [
    {
      heading: "A first visit versus a return visit",
      paragraphs: [
        "A first-time visitor to the region needs a different kind of help from someone who has been before. If it is your first visit, we suggest booking the key legs in advance, sharing hotel names, and leaving generous margins. You will not know the roads, the crowd patterns or the places where cars can stop. A returning visitor usually knows these, and may prefer to book only the airport legs and arrange the rest as they go.",
        "Whichever you are, tell us at the start. We adjust how much detail we ask for, and how much advice we give, to suit the person we are talking to.",
      ],
    },
    {
      heading: "Moving between cities with elderly travellers",
      paragraphs: [
        "A long road between cities is a lot to ask of an older person, and the questions to ask are practical ones. Is the seat height easy to step into? Is there a place to rest at the midpoint? Are there medicines to take at set times, and are they in the cabin rather than the boot? Is the arrival time sensible, or does it mean a late check-in with no one to help? These details decide whether the trip is calm or draining.",
        "We can often suggest a gentler plan, such as an overnight stop or a split journey, if you tell us who is travelling.",
      ],
    },
    {
      heading: "What we mean by 'serving' a city",
      paragraphs: [
        "When we say that we serve a city, we mean that we can collect you there, take you somewhere within it, or take you onward to another. We do not mean that every street is reachable by car. Around the holy mosques, in the historic centre of Jeddah and in some narrow parts of Taif, vehicles stop at the edge, and the last stretch is on foot. We would rather say so honestly than promise a door-to-door service in places where it is not possible.",
      ],
    },
    {
      heading: "Cities, airports and routes on one map",
      paragraphs: [
        "If it helps to think of it spatially, Jeddah sits on the coast, Makkah about 80 km inland to the east, Taif further inland and uphill from Makkah, and Madinah roughly 420 km to the north. Jeddah's airport is on its northern side, Madinah's on its edge, and Taif's near the city. Each of these distances appears on the relevant [route page](/routes), together with advice that matches the road.",
      ],
    },
  ],

  book: [
    {
      heading: "Booking an airport pickup in detail",
      paragraphs: [
        "For an arrival, the three most useful details are the flight number, the date of landing and the number of bags. For a departure, they are the flight time, the hotel checkout time and the airport. Add the hotel name for both. If you are unsure which terminal you will use, say so, and we will explain what is usual. Our airport pages for [Jeddah](/airports/jeddah-airport), [Madinah](/airports/madinah-airport) and [Taif](/airports/taif-airport) have more.",
        "Keep your confirmation message. If your flight changes, reply to it, and the change will be attached to the right booking.",
      ],
    },
    {
      heading: "Booking when you do not know your hotel yet",
      paragraphs: [
        "Some travellers book flights first and hotels later. If that is you, book the airport leg with a note that the hotel is not yet confirmed, and send the name as soon as you have it. We will plan the vehicle and timing now and adjust the drop-off later. Make sure you send the hotel before you land, because the practical drop-off point near the mosques depends on it.",
      ],
    },
    {
      heading: "Booking for someone else",
      paragraphs: [
        "Children booking for parents, or companies booking for guests, should send the traveller's name and phone number in addition to their own. The driver needs to reach whoever is travelling, not whoever arranged it. If the traveller does not speak English or Arabic well, say what language they speak so that we can help the driver prepare.",
      ],
    },
  ],

  airports: [
    {
      heading: "A checklist for the hours before you fly",
      paragraphs: [
        "On the day before you travel, check your flight status, confirm your pickup with us and make sure that your phone is charged. Pack documents, medicines and a change of clothes in hand luggage. Write the hotel name and phone number on paper in case your phone fails. On the morning of the flight, check again for changes, and message us if anything is different.",
        "Once you land, switch your phone on straight away, send us a short message, and walk through the terminal at a steady pace. A relaxed arrival makes the whole trip easier.",
      ],
      bullets: [
        "Passport, visa and booking confirmations in hand luggage",
        "Medicines and any essentials for children",
        "Hotel name and phone number written down",
        "Our contact details saved in your phone",
      ],
    },
    {
      heading: "If you are meeting someone at the airport",
      paragraphs: [
        "Families often collect relatives who are flying in alone. If you are the person waiting, send us the arriving person's name, flight and phone number. We will plan the pickup with the driver in contact with them, and you can follow the flight yourself. If the relative is elderly or has never visited before, tell us so that the driver can look out for them.",
      ],
    },
  ],

  about: [
    {
      heading: "Who usually writes to us",
      paragraphs: [
        "Our messages come mainly from four kinds of people. Pilgrims planning their first or tenth Umrah. Families visiting relatives in the region. Residents of Jeddah, Makkah, Madinah and Taif who want a reliable ride. And organisers, such as tour operators and companies, who need transport for several people at once. Each has a different idea of what a good journey looks like, and our job is to understand that quickly.",
        "If you are not sure which group you belong to, it does not matter. Describe what you want to do and we will help you shape it.",
      ],
    },
    {
      heading: "What we ask of our passengers",
      paragraphs: [
        "A good journey depends on both sides. We ask passengers to give accurate details, to tell us about changes early, to keep their phones on and reachable, and to be at the agreed place at the agreed time. We ask them to follow the rules that apply near the holy mosques, and to be patient when roads are crowded. In return, we plan carefully and keep our promises.",
      ],
    },
    {
      heading: "Where to read more",
      paragraphs: [
        "If you want to see how we plan a particular journey, read the [route pages](/routes) and the [service pages](/services). If you want to know where we work, see the [locations page](/locations). If you are ready to book, go to the [booking page](/book) or [contact us](/contact) directly.",
      ],
    },
  ],

  routes: [
    {
      heading: "Using routes to plan a whole itinerary",
      paragraphs: [
        "Open the routes that make up your trip and write down the time for each, then add margins. For instance, Jeddah Airport to Makkah, a stay, Makkah to Madinah, a stay, Madinah to Jeddah Airport. The first leg is about an hour and a half, the second about five hours, the third about four and a half. Add those and you will see how much of your trip is spent on the road, and how much rest you need in between.",
      ],
    },
    {
      heading: "A comparison of short, medium and long routes",
      paragraphs: [
        "Short routes, such as Jeddah and Makkah, are about the first hour and the last few kilometres. Medium routes, such as Makkah and Taif, are about the climb and the weather. Long routes, such as Makkah and Madinah, are about stamina, stops and comfort. Each group needs a different mindset, and the pages for each reflect it.",
      ],
    },
  ],

  fleet: [
    {
      heading: "Matching vehicles to the people in them",
      paragraphs: [
        "Picture the group before you choose. Two adults and a baby need a car seat and room for a pram. Three generations of one family need steps that are easy to climb and seats that are easy to leave. A team of colleagues needs room for laptops and a quiet cabin. A group of friends needs space for six suitcases. Starting from the people, not the numbers, usually leads to a better choice.",
      ],
    },
    {
      heading: "A note on the VIP Chauffeur Car",
      paragraphs: [
        "The VIP Chauffeur Car is not defined by size. It is for guests who value a formal arrival, an attentive driver and a quiet cabin, usually for business or for special occasions. If you are not sure that it is right, describe the occasion and we will say whether the Executive Sedan would serve you equally well.",
      ],
    },
  ],

  contact: [
    {
      heading: "Where our base is and where we drive",
      paragraphs: [
        "The address and hours on this page are our business details, and our drivers work across Makkah, Madinah, Jeddah and Taif, not from a single counter. You do not need to visit us to book, and there is no office to find on arrival. Your driver comes to you, at the airport, the hotel or the address you give, and the best way to reach us before that is by phone or WhatsApp.",
        "If you are writing about a past journey, such as a lost item or a question about a ride, include the date, the route and the vehicle if you remember it, and we will look into it.",
      ],
    },
    {
      heading: "Time zones, languages and phone numbers",
      paragraphs: [
        "Saudi Arabia is three hours ahead of UTC and does not change its clocks. If you are writing from another country, state the time in local Saudi time or say which time zone you mean, to avoid confusion about the pickup hour. Use a phone number with the country code, written in full, and check that you can receive calls and WhatsApp messages in Saudi Arabia.",
      ],
    },
  ],

  services: [
    {
      heading: "Planning a complex trip",
      paragraphs: [
        "Some trips are made of many parts: several cities, several hotels, relatives arriving at different times. If this is yours, write out a rough timeline with dates and places, then send it. We will reply with the services that fit each part and suggest where to leave gaps. Planning on paper first almost always finds problems early, when they are easy to fix.",
      ],
    },
  ],
};
