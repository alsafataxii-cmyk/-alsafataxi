import { fleetModels } from "@/lib/content/fleet-models";
import { jeddahAirportPhotos } from "@/lib/content/jeddah-airport-images";
import { madinahAirportPhotos } from "@/lib/content/madinah-airport-images";
import { kaabaNightImage } from "@/lib/content/images";
import type { ContentImage } from "@/lib/content/images";

const model = (slug: string): ContentImage => {
  const found = fleetModels.find((item) => item.slug === slug);
  if (!found) throw new Error(`Fleet model not found: ${slug}`);
  return found.image;
};

const pick = (record: Record<string, ContentImage>, fragment: string): ContentImage => {
  const key = Object.keys(record).find((name) => name.includes(fragment));
  if (!key) throw new Error(`Photo not found: ${fragment}`);
  return record[key];
};

export const img = {
  staria: model("hyundai-staria"),
  yukon: model("gmc-yukon-xl"),
  hiace: model("toyota-hiace"),
  camry: model("toyota-camry"),
  kaaba: kaabaNightImage,
  jedBaggage: pick(jeddahAirportPhotos, "baggage-claim-hall"),
  jedWelcome: pick(jeddahAirportPhotos, "welcome-to-jeddah"),
  jedExterior: pick(jeddahAirportPhotos, "terminal-exterior-night"),
  jedCoachBay: pick(jeddahAirportPhotos, "coach-pickup-bay"),
  jedExit: pick(jeddahAirportPhotos, "escalator-to-ground"),
  medFacade: pick(madinahAirportPhotos, "terminal-facade"),
  medRoad: pick(madinahAirportPhotos, "approach-road"),
};
