import type { Metadata } from "next";
import HomePage from "@/components/home/HomePage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Taxi Service in Makkah, Madinah, Jeddah & Taif",
    description:
      "Private taxi, airport transfers, Umrah transportation and Ziyarat tours in Makkah, Madinah, Jeddah and Taif. Book 24/7 with Al Safa Taxi.",
    path: "/",
  }),
  title: { absolute: "Taxi Service in Makkah, Madinah, Jeddah & Taif | Al Safa Taxi" },
};

export default function Home() {
  return <HomePage />;
}
