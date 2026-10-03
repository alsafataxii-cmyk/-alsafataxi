import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
};

const ogImage = {
  url: "/brand/og-image.png",
  width: 1200,
  height: 630,
  alt: siteConfig.name,
};

export function pageMetadata({ title, description, path, noindex }: PageMetadataInput): Metadata {
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
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}
