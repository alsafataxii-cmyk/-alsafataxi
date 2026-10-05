import type { Faq } from "@/lib/content/types";
import type { ContentImage } from "@/lib/content/images";
import { jeddahAirportPhotos } from "@/lib/content/jeddah-airport-images";
import { madinahAirportPhotos } from "@/lib/content/madinah-airport-images";

function find(record: Record<string, ContentImage>, fragment: string): ContentImage {
  const key = Object.keys(record).find((name) => name.includes(fragment));
  if (!key) throw new Error(`Airport photo not found: ${fragment}`);
  return record[key];
}

export const jeddahPhoto = (fragment: string) => find(jeddahAirportPhotos, fragment);
export const madinahPhoto = (fragment: string) => find(madinahAirportPhotos, fragment);

export const airportsHubFaqs: Faq[] = [
  {
    question: "Which airports does Al Safa Taxi serve?",
    answer:
      "King Abdulaziz International Airport in Jeddah (JED), Prince Mohammad bin Abdulaziz International Airport in Madinah (MED) and Taif International Airport (TIF). Each has its own page with arrival and departure details.",
  },
  {
    question: "Can I book a private transfer from Jeddah Airport to Makkah?",
    answer:
      "Yes. Makkah has no commercial airport, so most Makkah-bound travellers land at JED and continue by road. Send your flight number and Makkah hotel and we confirm the vehicle and price. See [Jeddah Airport to Makkah](/routes/jeddah-airport-to-makkah).",
  },
  {
    question: "Can I travel from Madinah Airport directly to Makkah?",
    answer:
      "Yes, in one journey. The road is long, so we size the vehicle for your bags and plan stops with you. The route page for [Madinah Airport to Makkah](/routes/madinah-airport-to-makkah) explains what to expect.",
  },
  {
    question: "Do you provide transfers from Taif Airport?",
    answer:
      "Yes, to hotels in Taif and onward to Makkah or Jeddah. Taif has fewer flights than the other two airports, so tell us early if your flight time changes. Details are on the [Taif Airport page](/airports/taif-airport).",
  },
  {
    question: "What information do you need for an airport booking?",
    answer:
      "The airport, flight number, arrival date and time, where you are going, how many people are travelling and how many bags. Add a child seat or mobility needs if they apply. The checklist above lists everything in one place.",
  },
  {
    question: "Can families book a larger vehicle?",
    answer:
      "Yes. Tell us how many people and bags you have and we recommend a vehicle from the [fleet](/fleet). Groups too large for one vehicle can be planned as two or more cars that leave together.",
  },
  {
    question: "Can you accommodate large luggage?",
    answer:
      "Usually, if we know the numbers beforehand. Count every piece, including hand luggage and anything you expect to buy, because bags often decide the vehicle before passengers do.",
  },
  {
    question: "What happens if my flight is delayed?",
    answer:
      "Send your flight number when you book and contact us if the airline changes the time. We use the updated information to coordinate the pickup. Questions about waiting time are best settled by message before you fly.",
  },
  {
    question: "Where will I meet the driver?",
    answer:
      "We agree the meeting point with you before you travel, because it depends on the airport and the arrangements for your booking. After you collect your bags, message us and the driver meets you there.",
  },
  {
    question: "Can I go directly from the airport to my hotel?",
    answer:
      "Yes. Send the exact hotel name and the area. Around the Haram in Makkah and the Prophet's Mosque in Madinah, access can be restricted, so we confirm the closest practical drop-off for your hotel. See [hotel transfers](/services/hotel-transfers).",
  },
  {
    question: "Can I arrange an onward transfer to another city?",
    answer:
      "Yes, between Makkah, Madinah, Jeddah and Taif, which is our service area. You can book the airport leg and the next leg together, or add the second one later from your hotel. See [intercity transfers](/services/intercity-transfers).",
  },
];
