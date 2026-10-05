import { jeddahAirportPagePhotos, type PagePhotos } from "@/lib/content/jeddah-airport-images";
import { madinahAirportPagePhotos } from "@/lib/content/madinah-airport-images";
import { extraAirportPhotos } from "@/lib/content/airport-photos-extra";

const base: Record<string, PagePhotos> = {
  ...jeddahAirportPagePhotos,
  ...madinahAirportPagePhotos,
};

// Photos shown on each page, keyed by "type/slug".
export const airportPagePhotos: Record<string, PagePhotos> = { ...base };

for (const [page, extra] of Object.entries(extraAirportPhotos)) {
  const existing = base[page];
  airportPagePhotos[page] = existing
    ? { ...existing, gallery: [...existing.gallery, ...extra.gallery] }
    : { galleryTitle: extra.galleryTitle ?? "Photos", gallery: extra.gallery };
}
