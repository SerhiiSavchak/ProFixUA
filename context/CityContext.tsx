"use client";

import { createContext, useContext, useCallback, useState, useMemo, ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { City } from "@/content/i18n";

const VALID_CITIES: City[] = ["lviv", "dnipro"];

function cityFromPathname(pathname: string | null): City | null {
  if (!pathname) return null;
  const segment = pathname.slice(1).split("/")[0]?.toLowerCase();
  if (segment === "lviv" || segment === "dnipro") return segment as City;
  return null;
}

interface CityContextType {
  city: City | null;
  setCity: (city: City) => void;
  isLoaded: boolean;
  showCityModal: boolean;
  setShowCityModal: (show: boolean) => void;
}

const CityContext = createContext<CityContextType | undefined>(undefined);

export function CityProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [manualModalOpen, setManualModalOpen] = useState(false);
  const [dismissedOnRoot, setDismissedOnRoot] = useState(false);

  const city = useMemo(() => cityFromPathname(pathname), [pathname]);
  const isLoaded = true;

  const showCityModal = useMemo(
    () => (pathname === "/" && !dismissedOnRoot) || manualModalOpen,
    [pathname, dismissedOnRoot, manualModalOpen]
  );

  const setShowCityModal = useCallback(
    (show: boolean) => {
      if (show) {
        setManualModalOpen(true);
        setDismissedOnRoot(false);
      } else {
        if (pathname === "/") setDismissedOnRoot(true);
        setManualModalOpen(false);
      }
    },
    [pathname]
  );

  const setCity = useCallback(
    (newCity: City) => {
      if (!VALID_CITIES.includes(newCity)) return;
      setManualModalOpen(false);
      setDismissedOnRoot(false);
      router.push(`/${newCity}`);
    },
    [router]
  );

  const value = useMemo<CityContextType>(
    () => ({ city, setCity, isLoaded, showCityModal, setShowCityModal }),
    [city, setCity, showCityModal, setShowCityModal]
  );

  return <CityContext.Provider value={value}>{children}</CityContext.Provider>;
}

export function useCityContext() {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error("useCityContext must be used within CityProvider");
  }
  return context;
}
