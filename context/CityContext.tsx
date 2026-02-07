"use client";

import { createContext, useContext, ReactNode } from "react";
import { useCity } from "@/hooks/useCity";
import { City } from "@/content/i18n";

interface CityContextType {
  city: City;
  setCity: (city: City) => void;
  isLoaded: boolean;
}

const CityContext = createContext<CityContextType | undefined>(undefined);

export function CityProvider({ children }: { children: ReactNode }) {
  const cityState = useCity();

  return (
    <CityContext.Provider value={cityState}>
      {children}
    </CityContext.Provider>
  );
}

export function useCityContext() {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error("useCityContext must be used within CityProvider");
  }
  return context;
}
