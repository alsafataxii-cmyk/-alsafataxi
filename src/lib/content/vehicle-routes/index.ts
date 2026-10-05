import type { VehicleRoutePage } from "@/lib/content/vehicle-routes/types";
import {
  jeddahAirportToMakkah7,
  jeddahToMakkah7,
  madinahToMakkah7,
  makkahToMadinah7,
} from "@/lib/content/vehicle-routes/seven-seater";
import {
  jeddahAirportToMakkahStaria,
  jeddahToMakkahStaria,
  madinahToMakkahStaria,
  makkahToMadinahStaria,
} from "@/lib/content/vehicle-routes/staria";
import { jeddahToMakkahYukon, makkahToMadinahYukon } from "@/lib/content/vehicle-routes/yukon";
import { extraBlocks } from "@/lib/content/vehicle-routes/extra";
import { extraTwo } from "@/lib/content/vehicle-routes/extra-two";
import { extraThree } from "@/lib/content/vehicle-routes/extra-three";

const basePages: VehicleRoutePage[] = [
  jeddahToMakkah7,
  jeddahAirportToMakkah7,
  makkahToMadinah7,
  madinahToMakkah7,
  jeddahToMakkahStaria,
  jeddahAirportToMakkahStaria,
  makkahToMadinahStaria,
  madinahToMakkahStaria,
  jeddahToMakkahYukon,
  makkahToMadinahYukon,
];

export const vehicleRoutePages: VehicleRoutePage[] = basePages.map((page) => {
  const key = `${page.route}/${page.vehicle}`;
  let blocks = [...page.blocks];
  const extra = extraBlocks[key];
  if (extra) blocks.splice(extra.before, 0, ...extra.blocks);
  const more = extraTwo[key];
  if (more) {
    const faqIndex = blocks.findIndex((block) => block.type === "faq");
    blocks.splice(faqIndex, 0, ...more.blocks);
    blocks = blocks.map((block) =>
      block.type === "faq" ? { ...block, faqs: [...block.faqs, ...more.faqs] } : block,
    );
  }
  const closing = extraThree[key];
  if (closing) {
    const relatedIndex = blocks.findIndex((block) => block.type === "related");
    blocks.splice(relatedIndex, 0, closing);
  }
  return { ...page, blocks };
});

export const vehicleLabels: Record<VehicleRoutePage["vehicle"], string> = {
  "7-seater": "7 Seater",
  staria: "Hyundai Staria",
  yukon: "GMC Yukon",
};

export function getVehicleRoutePage(route: string, vehicle: string) {
  return vehicleRoutePages.find((page) => page.route === route && page.vehicle === vehicle);
}

export function vehicleOptionsFor(route: string) {
  return vehicleRoutePages.filter((page) => page.route === route);
}
