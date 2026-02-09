"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { CityProvider } from "@/context/CityContext";
import { CityModal } from "@/components/ui/CityModal";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <CityProvider>
        <LanguageProvider>
          <CityModal />
          {children}
        </LanguageProvider>
      </CityProvider>
    </ThemeProvider>
  );
}
