import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site-config";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Al Safa Taxi | Premium Private Transportation in Makkah, Madinah, Jeddah & Taif",
    template: "%s | Al Safa Taxi",
  },
  description: siteConfig.description,
  keywords: [
    "Al Safa Taxi",
    "Makkah taxi",
    "Madinah taxi",
    "Jeddah taxi",
    "Taif taxi",
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
    title: "Al Safa Taxi | Premium Private Transportation in Makkah, Madinah, Jeddah & Taif",
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
    title: "Al Safa Taxi | Premium Private Transportation in Makkah, Madinah, Jeddah & Taif",
    description: siteConfig.description,
    images: ["/brand/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
