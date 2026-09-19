import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site-config";
import JsonLd from "@/components/ui/JsonLd";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const defaultTitle = "Al Safa Taxi | Taxi & Ziyarat Tours in Makkah, Madinah, Jeddah, Taif";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultTitle,
    template: "%s | Al Safa Taxi",
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  verification: {
    google: "HlsZoIOx1pv6iuFthnbptdw5Do-B_3FisMYkdeE28aQ",
    other: {
      "msvalidate.01": "3C9354DD9C0D39A4B916CB3C823A4FD4",
      "p:domain_verify": "6744f9a5f9d4fae2cf46bc7fbcab3643",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  keywords: [
    "Al Safa Taxi",
    "Makkah taxi",
    "Madinah taxi",
    "Jeddah taxi",
    "Taif taxi",
    "Makkah Ziyarat",
    "Madinah Ziyarat",
    "Ziyarat taxi service",
    "Ziyarat tour Makkah Madinah",
    "airport transfer Jeddah",
    "airport transfer Madinah",
    "private chauffeur Saudi Arabia",
    "intercity transfer Makkah Madinah Jeddah",
  ],
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_SA",
    url: "/",
    siteName: siteConfig.name,
    title: defaultTitle,
    description: siteConfig.description,
    images: [
      {
        url: "/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: siteConfig.description,
    images: ["/brand/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
        {process.env.NODE_ENV === "production" ? (
          <script
            src="https://analytics.ahrefs.com/analytics.js"
            data-key="twaC2o2Bg6JSguFlIM9swQ"
            async
          />
        ) : null}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
