import type { Faq } from "@/lib/content/types";
import { madinahAirportPhotos } from "@/lib/content/madinah-airport-images";
import { morePhotos } from "@/lib/content/airport-photos-extra";
import type { ContentImage } from "@/lib/content/images";

const allMadinahPhotos: Record<string, ContentImage> = { ...madinahAirportPhotos, ...morePhotos };

// Finds a Madinah Airport photo by part of its file name.
export function madinahPhoto(fragment: string): ContentImage {
  const key = Object.keys(allMadinahPhotos).find(
    (name) => name.startsWith("madinah-airport-") && name.includes(fragment),
  );
  if (!key) throw new Error(`Madinah Airport photo not found: ${fragment}`);
  return allMadinahPhotos[key];
}

// Every Madinah Airport photo except the ones passed in.
export function otherMadinahPhotos(exclude: ContentImage[]): ContentImage[] {
  const used = new Set(exclude.map((image) => image.src));
  return Object.entries(allMadinahPhotos)
    .filter(([name, image]) => name.startsWith("madinah-airport-") && !used.has(image.src))
    .map(([, image]) => image);
}

export const madinahFaqs: Faq[] = [
  {
    question: "How far is Madinah Airport from the Prophet's Mosque?",
    answer:
      "Roughly 15 to 20 km, and usually 20 to 30 minutes outside heavy traffic. The last part is the slowest: cars cannot always stop beside the mosque, so the drop-off point depends on your hotel and on the time of day.",
  },
  {
    question: "Can I go directly from Madinah Airport to Makkah?",
    answer:
      "Yes. The road is about 450 km and takes around four and a half to five hours before stops. Send your flight number, the number of passengers and bags, and the Makkah hotel, and we will confirm the vehicle and the price. The route page for [Madinah Airport to Makkah](/routes/madinah-airport-to-makkah) explains the journey in more detail.",
  },
  {
    question: "Can I stop at Dhul Hulayfah (Abyar Ali) on the way to Makkah?",
    answer:
      "Yes, if you ask when you book. Many Umrah travellers stop there on the way out of Madinah, and we plan the time for it. Which steps you take there is a question for your scholar or tour operator, not for us.",
  },
  {
    question: "Can you take me directly to a hotel near Al-Masjid an-Nabawi?",
    answer:
      "We take you to the closest point the car can reach. Roads around the mosque are restricted at times and some streets are pedestrian zones, so a short walk may be needed. Send the hotel name in advance and we will confirm where the car can stop.",
  },
  {
    question: "What happens if my flight is delayed?",
    answer:
      "Tell us as soon as the airline updates you. We use the flight details you gave us to plan the pickup, and we adjust it when the arrival time changes. The earlier we hear, the easier it is to rearrange.",
  },
  {
    question: "Where will I meet the driver at Madinah Airport?",
    answer:
      "We agree the meeting point with you before you fly. After you clear immigration and collect your bags, message us and the driver will meet you there. If you cannot find each other, call or message and we will guide you.",
  },
  {
    question: "Can I book a private vehicle for my family?",
    answer:
      "Yes. A transfer is private, so the vehicle is for your family only. Tell us how many people are travelling and how many bags, and we will suggest a vehicle from the [fleet](/fleet). Mention a child seat or mobility needs at the same time.",
  },
  {
    question: "Can you accommodate large luggage?",
    answer:
      "Usually, if we know the numbers in advance. Pilgrims often carry extra bags, gifts and Zamzam containers on the way home. Count every piece, including hand luggage, and we will check the vehicle has room before the day.",
  },
  {
    question: "Can we add Madinah Ziyarat to our journey?",
    answer:
      "Yes. Quba Mosque, Masjid al-Qiblatain and Mount Uhud are the places people ask for most. Tell us which you want and whether you would like to go before check-in or on another day. See [Ziyarat tours](/services/ziyarat-tours) for how a trip is planned.",
  },
  {
    question: "What details do you need to confirm my airport transfer?",
    answer:
      "Your flight number and arrival date, the number of passengers and bags, the hotel name or onward destination, and any need for a child seat or help with mobility. A phone number that works in Saudi Arabia helps the driver reach you.",
  },
];
