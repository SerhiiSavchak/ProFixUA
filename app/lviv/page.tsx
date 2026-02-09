import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { CITY_SEO } from "@/content/i18n";

export const metadata: Metadata = {
  title: CITY_SEO.lviv.title,
  description: CITY_SEO.lviv.description,
  keywords: CITY_SEO.lviv.keywords,
  openGraph: {
    title: CITY_SEO.lviv.title,
    description: CITY_SEO.lviv.description,
    type: "website",
    locale: "uk_UA",
  },
};

export default function LvivPage() {
  return <LandingPage />;
}
