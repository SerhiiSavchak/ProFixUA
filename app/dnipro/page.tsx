import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { CITY_SEO } from "@/content/i18n";

export const metadata: Metadata = {
  title: CITY_SEO.dnipro.title,
  description: CITY_SEO.dnipro.description,
  keywords: CITY_SEO.dnipro.keywords,
  openGraph: {
    title: CITY_SEO.dnipro.title,
    description: CITY_SEO.dnipro.description,
    type: "website",
    locale: "uk_UA",
  },
};

export default function DniproPage() {
  return <LandingPage />;
}
