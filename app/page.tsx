"use client";

import { useCityContext } from "@/context/CityContext";
import { useTranslation } from "@/context/LanguageContext";
import { MapPin } from "lucide-react";

export default function Home() {
  const { showCityModal, setShowCityModal } = useCityContext();
  const { language } = useTranslation();

  const copy = {
    ua: { choose: "Оберіть місто", cta: "Обрати місто" },
    ru: { choose: "Выберите город", cta: "Выбрать город" },
    en: { choose: "Choose your city", cta: "Choose city" },
  };
  const t = copy[language] || copy.ua;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      {!showCityModal && (
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <p className="text-lg text-muted-foreground">{t.choose}</p>
          <button
            type="button"
            onClick={() => setShowCityModal(true)}
            className="px-6 py-3 rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            {t.cta}
          </button>
        </div>
      )}
    </div>
  );
}
