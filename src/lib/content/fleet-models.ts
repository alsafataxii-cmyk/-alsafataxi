import type { ContentImage } from "@/lib/content/images";

export type FleetModel = {
  slug: string;
  name: string;
  body: string;
  use: string;
  image: ContentImage;
};

// Vehicle models shown on the fleet page. Images are in /public/fleet.
export const fleetModels: FleetModel[] = [
  {
    slug: "toyota-camry",
    name: "Toyota Camry",
    body: "Sedan",
    use: "Couples, solo travellers and business visitors on airport transfers and city rides.",
    image: {
      src: "/fleet/toyota-camry-sedan.webp",
      alt: "White Toyota Camry sedan with black alloy wheels, seen from the front three-quarter angle",
      title: "Toyota Camry sedan",
      width: 611,
      height: 278,
    },
  },
  {
    slug: "gmc-yukon-xl",
    name: "GMC Yukon XL",
    body: "Full-size SUV",
    use: "Families with luggage, and guests who want more space and a more formal arrival.",
    image: {
      src: "/fleet/gmc-yukon-xl-suv.webp",
      alt: "Black GMC Yukon XL full-size SUV seen from the front three-quarter angle",
      title: "GMC Yukon XL SUV",
      width: 960,
      height: 541,
    },
  },
  {
    slug: "hyundai-staria",
    name: "Hyundai Staria",
    body: "Minivan",
    use: "Families and small groups travelling together, with room for bags.",
    image: {
      src: "/fleet/hyundai-staria-minivan.webp",
      alt: "Black Hyundai Staria minivan seen from the front three-quarter angle",
      title: "Hyundai Staria minivan",
      width: 374,
      height: 219,
    },
  },
  {
    slug: "toyota-hiace",
    name: "Toyota Hiace",
    body: "Passenger van",
    use: "Larger families and groups, and long road journeys such as Makkah to Madinah.",
    image: {
      src: "/fleet/toyota-hiace-passenger-van.webp",
      alt: "White Toyota Hiace high-roof passenger van seen from the front three-quarter angle",
      title: "Toyota Hiace passenger van",
      width: 679,
      height: 452,
    },
  },
  {
    slug: "toyota-coaster",
    name: "Toyota Coaster",
    body: "Minibus",
    use: "Big groups travelling as one party, such as tour groups and large families.",
    image: {
      src: "/fleet/toyota-coaster-minibus.webp",
      alt: "White Toyota Coaster minibus seen from the front three-quarter angle",
      title: "Toyota Coaster minibus",
      width: 390,
      height: 236,
    },
  },
];
