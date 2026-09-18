import Hero from "@/components/sections/Hero";
import TrustHighlights from "@/components/sections/TrustHighlights";
import Services from "@/components/sections/Services";
import Fleet from "@/components/sections/Fleet";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Routes from "@/components/sections/Routes";
import CTASection from "@/components/ui/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustHighlights />
      <Services />
      <Fleet />
      <WhyChooseUs />
      <Routes />
      <CTASection
        title="Ready to Book Your Ride?"
        description="Our dispatch team is available around the clock to arrange your airport transfer, city ride or intercity journey."
      />
    </>
  );
}
