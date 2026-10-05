import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  image?: { url: string; width: number; height: number; alt: string };
};

const ogImage = {
  url: "/brand/og-image.png",
  width: 1200,
  height: 630,
  alt: siteConfig.name,
};

export function pageMetadata({ title, description, path, noindex, image }: PageMetadataInput): Metadata {
  const shareImage = image ?? ogImage;
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      type: "website",
      locale: "en_SA",
      url: path,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [shareImage.url],
    },
  };
}
