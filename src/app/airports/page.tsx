import type { Metadata } from "next";
import AirportsHubPage from "@/components/airports-hub/AirportsHubPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Saudi Airport Transfers | Jeddah, Madinah & Taif",
  description:
    "Private airport transfers at Jeddah (JED), Madinah (MED) and Taif (TIF) airports, with onward travel to Makkah and Madinah hotels. Book 24/7.",
  path: "/airports",
});

export default function AirportsPage() {
  return <AirportsHubPage />;
}
