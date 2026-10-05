import type { ContentImage } from "@/lib/content/images";
import type { PagePhotos } from "@/lib/content/jeddah-airport-images";

// Photos of Prince Mohammad bin Abdulaziz International Airport (Madinah), in /public/madinah-airport.
const madinahAirportPhotos: Record<string, ContentImage> = {
  "madinah-airport-welcome-to-madinah-sign": {
    "src": "/madinah-airport/madinah-airport-welcome-to-madinah-sign.webp",
    "alt": "Illuminated Welcome to Madinah sign in Arabic and English with a drawing of the Prophet's Mosque, beside the baggage claim and exit signs at Madinah Airport.",
    "title": "Welcome to Madinah sign at the airport",
    "width": 1100,
    "height": 1460
  },
  "madinah-airport-mosque-golden-dome-exterior": {
    "src": "/madinah-airport/madinah-airport-mosque-golden-dome-exterior.webp",
    "alt": "White mosque with a golden dome and palm trees beside the road outside Madinah Airport.",
    "title": "Mosque at Madinah Airport",
    "width": 883,
    "height": 1178
  },
  "madinah-airport-international-departures-flight-boards": {
    "src": "/madinah-airport/madinah-airport-international-departures-flight-boards.webp",
    "alt": "Two flight information boards listing international departures with flight numbers, destinations and times at Madinah Airport.",
    "title": "International departures boards at Madinah Airport",
    "width": 1080,
    "height": 1440
  },
  "madinah-airport-check-in-counters-e1-e11": {
    "src": "/madinah-airport/madinah-airport-check-in-counters-e1-e11.webp",
    "alt": "Empty check-in counters E1 to E11 under the tall white canopy columns of the Madinah Airport departures hall.",
    "title": "Check-in counters at Madinah Airport",
    "width": 848,
    "height": 1131
  },
  "madinah-airport-domestic-departure-area-roof-canopy": {
    "src": "/madinah-airport/madinah-airport-domestic-departure-area-roof-canopy.webp",
    "alt": "Domestic departure area at Madinah Airport with the white canopy roof, a security check sign and travellers with luggage.",
    "title": "Domestic departure area at Madinah Airport",
    "width": 822,
    "height": 1096
  },
  "madinah-airport-baggage-claim-6-arrivals-hall": {
    "src": "/madinah-airport/madinah-airport-baggage-claim-6-arrivals-hall.webp",
    "alt": "Baggage claim carousel 6 with a flight information screen and arriving passengers in the Madinah Airport arrivals hall.",
    "title": "Baggage claim 6 at Madinah Airport",
    "width": 1080,
    "height": 1440
  },
  "madinah-airport-baggage-carousel-6-customs-notice": {
    "src": "/madinah-airport/madinah-airport-baggage-carousel-6-customs-notice.webp",
    "alt": "Empty baggage carousel number 6 in the Madinah Airport arrivals hall with a customs notice and canopy columns overhead.",
    "title": "Baggage carousel at Madinah Airport",
    "width": 1095,
    "height": 1460
  },
  "madinah-airport-terminal-facade-and-parking-view": {
    "src": "/madinah-airport/madinah-airport-terminal-facade-and-parking-view.webp",
    "alt": "View through the terminal glass of the Madinah Airport facade with arched columns, palm trees and the car park.",
    "title": "View of the terminal and car park at Madinah Airport",
    "width": 1920,
    "height": 1440
  },
  "madinah-airport-aircraft-at-gate-sunrise-mountains": {
    "src": "/madinah-airport/madinah-airport-aircraft-at-gate-sunrise-mountains.webp",
    "alt": "Passenger aircraft at a jet bridge at Madinah Airport with the sun rising over the mountains behind the runway.",
    "title": "Aircraft at a gate at Madinah Airport at sunrise",
    "width": 1095,
    "height": 1460
  },
  "madinah-airport-approach-road-palm-trees-taxi": {
    "src": "/madinah-airport/madinah-airport-approach-road-palm-trees-taxi.webp",
    "alt": "Palm trees, a roundabout and a green taxi on the road leading to Madinah Airport under a blue sky.",
    "title": "Approach road to Madinah Airport",
    "width": 1374,
    "height": 1030
  },
  "madinah-airport-international-arrivals-welcome-panels": {
    "src": "/madinah-airport/madinah-airport-international-arrivals-welcome-panels.webp",
    "alt": "International arrivals sign above panels reading Welcome to Madinah in Arabic and English, with drawings of the Prophet's Mosque.",
    "title": "International arrivals at Madinah Airport",
    "width": 664,
    "height": 1181
  },
  "madinah-airport-information-desk-flight-screens-world-clocks": {
    "src": "/madinah-airport/madinah-airport-information-desk-flight-screens-world-clocks.webp",
    "alt": "Airport information desk with flight screens and world clocks for New York, London, Cairo, Istanbul, Riyadh and Kuala Lumpur.",
    "title": "Information desk at Madinah Airport",
    "width": 1095,
    "height": 1460
  },
  "madinah-airport-aircraft-at-jet-bridge-ground-handling": {
    "src": "/madinah-airport/madinah-airport-aircraft-at-jet-bridge-ground-handling.webp",
    "alt": "Passenger aircraft parked at a jet bridge at Madinah Airport with baggage loaders and mountains in the distance.",
    "title": "Aircraft and ground handling at Madinah Airport",
    "width": 1920,
    "height": 1080
  },
  "madinah-airport-white-canopy-roof-structure-hall": {
    "src": "/madinah-airport/madinah-airport-white-canopy-roof-structure-hall.webp",
    "alt": "Interior of Madinah Airport showing the white branching canopy roof structure above the domestic departure area.",
    "title": "Canopy roof structure inside Madinah Airport",
    "width": 953,
    "height": 1270
  }
};

const photo = (name: string) => madinahAirportPhotos[name];

export const madinahAirportPagePhotos: Record<string, PagePhotos> = {
  "airports/madinah-airport": {
    figure: photo("madinah-airport-approach-road-palm-trees-taxi"),
    galleryTitle: "Inside Prince Mohammad bin Abdulaziz International Airport",
    gallery: [
      photo("madinah-airport-welcome-to-madinah-sign"),
      photo("madinah-airport-mosque-golden-dome-exterior"),
      photo("madinah-airport-check-in-counters-e1-e11"),
      photo("madinah-airport-international-departures-flight-boards"),
      photo("madinah-airport-domestic-departure-area-roof-canopy"),
      photo("madinah-airport-white-canopy-roof-structure-hall"),
      photo("madinah-airport-information-desk-flight-screens-world-clocks"),
      photo("madinah-airport-aircraft-at-gate-sunrise-mountains"),
      photo("madinah-airport-terminal-facade-and-parking-view"),
    ],
  },
  "routes/madinah-airport-to-makkah": {
    galleryTitle: "Arriving at Madinah Airport",
    gallery: [
      photo("madinah-airport-international-arrivals-welcome-panels"),
      photo("madinah-airport-baggage-claim-6-arrivals-hall"),
      photo("madinah-airport-baggage-carousel-6-customs-notice"),
      photo("madinah-airport-aircraft-at-jet-bridge-ground-handling"),
    ],
  },
};
