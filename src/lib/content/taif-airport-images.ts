import type { ContentImage } from "@/lib/content/images";
import type { PagePhotos } from "@/lib/content/jeddah-airport-images";

// Photos of Taif International Airport, in /public/taif-airport.
export const taifAirportPhotos: Record<string, ContentImage> = {
  "taif-airport-terminal-facade-arched-windows": {
    "src": "/taif-airport/taif-airport-terminal-facade-arched-windows.webp",
    "alt": "Cream terminal building of Taif International Airport with arched windows, English and Arabic signage and an empty car park in front",
    "title": "Taif International Airport terminal building",
    "width": 1920,
    "height": 1440
  },
  "taif-airport-entrance-gatehouse-sign": {
    "src": "/taif-airport/taif-airport-entrance-gatehouse-sign.webp",
    "alt": "Entrance gatehouse with the Taif International Airport sign in Arabic and English, beside yellow and black barriers",
    "title": "Entrance gatehouse at Taif Airport",
    "width": 1920,
    "height": 1080
  },
  "taif-airport-welcome-gantry-approach-road": {
    "src": "/taif-airport/taif-airport-welcome-gantry-approach-road.webp",
    "alt": "Welcome to Taif International Airport gantry over the approach road, with direction signs and flower beds",
    "title": "Welcome gantry on the road to Taif Airport",
    "width": 1920,
    "height": 1080
  },
  "taif-airport-approach-road-palm-trees": {
    "src": "/taif-airport/taif-airport-approach-road-palm-trees.webp",
    "alt": "Tall palm trees beside the approach road to Taif International Airport, with the welcome gantry in the distance",
    "title": "Palm trees on the approach to Taif Airport",
    "width": 1544,
    "height": 869
  },
  "taif-airport-terminal-exit-doors-view": {
    "src": "/taif-airport/taif-airport-terminal-exit-doors-view.webp",
    "alt": "View through the terminal exit doors towards the airport traffic police and car rental building and a pedestrian crossing",
    "title": "Terminal exit at Taif Airport",
    "width": 1095,
    "height": 1460
  },
  "taif-airport-welcome-to-taif-billboard": {
    "src": "/taif-airport/taif-airport-welcome-to-taif-billboard.webp",
    "alt": "Welcome to Taif billboard beside a landscaped airport road with palm trees and a flower bed",
    "title": "Welcome to Taif billboard at the airport",
    "width": 1095,
    "height": 1460
  },
  "taif-airport-apron-bus-and-terminal": {
    "src": "/taif-airport/taif-airport-apron-bus-and-terminal.webp",
    "alt": "Passenger bus and baggage tractor on the apron in front of the Taif International Airport terminal",
    "title": "Apron bus and terminal at Taif Airport",
    "width": 822,
    "height": 1460
  },
  "taif-airport-apron-buses-from-aircraft-steps": {
    "src": "/taif-airport/taif-airport-apron-buses-from-aircraft-steps.webp",
    "alt": "Apron buses and the terminal seen from the steps of an aircraft at Taif Airport",
    "title": "Apron buses at Taif Airport",
    "width": 822,
    "height": 1460
  },
  "taif-airport-aircraft-boarding-steps-apron": {
    "src": "/taif-airport/taif-airport-aircraft-boarding-steps-apron.webp",
    "alt": "Passenger aircraft on the apron at Taif Airport with green boarding steps and ground crew",
    "title": "Aircraft on the apron at Taif Airport",
    "width": 822,
    "height": 1460
  },
  "taif-airport-departures-lounge-flight-board": {
    "src": "/taif-airport/taif-airport-departures-lounge-flight-board.webp",
    "alt": "Departures lounge with seating, a flight information board and a tall window at Taif Airport",
    "title": "Departures lounge at Taif Airport",
    "width": 1095,
    "height": 1460
  }
};

const photo = (name: string) => taifAirportPhotos[name];

export const taifAirportPagePhotos: Record<string, PagePhotos> = {
  "airports/taif-airport": {
    figure: photo("taif-airport-terminal-facade-arched-windows"),
    galleryTitle: "Arriving at Taif International Airport",
    gallery: [
      photo("taif-airport-entrance-gatehouse-sign"),
      photo("taif-airport-welcome-gantry-approach-road"),
      photo("taif-airport-approach-road-palm-trees"),
      photo("taif-airport-terminal-exit-doors-view"),
      photo("taif-airport-apron-bus-and-terminal"),
      photo("taif-airport-aircraft-boarding-steps-apron"),
      photo("taif-airport-departures-lounge-flight-board"),
      photo("taif-airport-welcome-to-taif-billboard"),
      photo("taif-airport-apron-buses-from-aircraft-steps"),
    ],
  },
  "routes/taif-airport-to-makkah": {
    galleryTitle: "Leaving Taif Airport",
    gallery: [
      photo("taif-airport-terminal-exit-doors-view"),
      photo("taif-airport-approach-road-palm-trees"),
      photo("taif-airport-welcome-gantry-approach-road"),
    ],
  },
  "locations/taif": {
    galleryTitle: "Arriving in Taif by air",
    gallery: [
      photo("taif-airport-entrance-gatehouse-sign"),
      photo("taif-airport-welcome-to-taif-billboard"),
      photo("taif-airport-apron-bus-and-terminal"),
    ],
  },
};
