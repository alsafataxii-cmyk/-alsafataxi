import { jeddahAirportPagePhotos, type PagePhotos } from "@/lib/content/jeddah-airport-images";
import { madinahAirportPagePhotos } from "@/lib/content/madinah-airport-images";

// Photos shown on each page, keyed by "type/slug".
export const airportPagePhotos: Record<string, PagePhotos> = {
  ...jeddahAirportPagePhotos,
  ...madinahAirportPagePhotos,
};
