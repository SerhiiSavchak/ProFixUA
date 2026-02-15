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
import { FAQ } from "@/components/sections/FAQ";
import { Contacts } from "@/components/sections/Contacts";
import { MobileCTA } from "@/components/sections/MobileCTA";
import { Loader } from "@/components/ui/Loader";

export function LandingPage() {
  return (
    <>
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
        <FAQ />
        <Contacts />
        <MobileCTA />
      </main>
      <Footer />
    </>
  );
}
