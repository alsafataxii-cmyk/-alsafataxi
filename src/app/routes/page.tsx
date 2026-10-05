import type { Metadata } from "next";
import RoutesHubPage from "@/components/routes-hub/RoutesHubPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Taxi Routes: Makkah, Madinah, Jeddah & Taif",
  description:
    "Private taxi routes between Makkah, Madinah, Jeddah, Taif and Jeddah Airport, with distances, journey times and booking information. Al Safa Taxi, 24/7.",
  path: "/routes",
});

export default function RoutesPage() {
  return <RoutesHubPage />;
}
