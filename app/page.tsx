"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Steps } from "@/components/sections/Steps";
import { Reviews } from "@/components/sections/Reviews";
import { Gallery } from "@/components/sections/Gallery";
import { Prices } from "@/components/sections/Prices";
import { Contacts } from "@/components/sections/Contacts";
import { MobileCTA } from "@/components/sections/MobileCTA";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { CityProvider } from "@/context/CityContext";
import { Loader } from "@/components/ui/Loader";

export default function Home() {
  return (
    <ThemeProvider>
      <CityProvider>
        <LanguageProvider>
          <Loader />
          <Header />
          <main className="min-h-screen pb-20 md:pb-0">
            <Hero />
            <Services />
            <WhyUs />
            <Steps />
            <Reviews />
            <Gallery />
            <Prices />
            <Contacts />
            <MobileCTA />
          </main>
          <Footer />
        </LanguageProvider>
      </CityProvider>
    </ThemeProvider>
  );
}
