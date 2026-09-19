import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustHighlights from "@/components/sections/TrustHighlights";
import HomeIntro from "@/components/sections/HomeIntro";
import Services from "@/components/sections/Services";
import HomeCities from "@/components/sections/HomeCities";
import HomeAirports from "@/components/sections/HomeAirports";
import HomeUmrah from "@/components/sections/HomeUmrah";
import Fleet from "@/components/sections/Fleet";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Routes from "@/components/sections/Routes";
import HomeHowItWorks from "@/components/sections/HomeHowItWorks";
import FaqSection from "@/components/ui/FaqSection";
import CTASection from "@/components/ui/CTASection";
import { homeFaqs } from "@/lib/content/home";
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
  return (
    <>
      <Hero />
      <TrustHighlights />
      <HomeIntro />
      <Services />
      <HomeCities />
      <HomeAirports />
      <HomeUmrah />
      <Fleet />
      <WhyChooseUs />
      <Routes />
      <HomeHowItWorks />
      <FaqSection faqs={homeFaqs} title="Taxi Service FAQs" />
      <CTASection
        title="Ready to Book Your Ride?"
        description="Call or message us to arrange your airport transfer, city ride, Umrah trip or intercity journey. Our booking line is open around the clock."
      />
    </>
  );
}
