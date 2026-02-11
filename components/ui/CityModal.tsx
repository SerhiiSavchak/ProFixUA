"use client";

import { useEffect, useRef, useCallback } from "react";
import { MapPin, X } from "lucide-react";
import { useCityContext } from "@/context/CityContext";
import { CITIES, City } from "@/content/i18n";
import { useTranslation } from "@/context/LanguageContext";

const MODAL_TITLE: Record<string, string> = {
  ua: "Оберіть ваше місто",
  ru: "Выберите ваш город",
  en: "Choose your city",
};

export function CityModal() {
  const { showCityModal, setCity, setShowCityModal } = useCityContext();
  const { language } = useTranslation();
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstBtnRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showCityModal) {
      document.body.style.overflow = "hidden";
      // Focus first button on open
      setTimeout(() => firstBtnRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showCityModal]);

  // ESC to close
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowCityModal(false);
    },
    [setShowCityModal]
  );

  useEffect(() => {
    if (showCityModal) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [showCityModal, handleKeyDown]);

  if (!showCityModal) return null;

  const handleSelect = (cityCode: City) => {
    setCity(cityCode);
  };

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={MODAL_TITLE[language] || MODAL_TITLE.ua}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === overlayRef.current) setShowCityModal(false);
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-md bg-card rounded-2xl shadow-2xl border border-border p-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setShowCityModal(false)}
          className="absolute top-4 right-4 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-card"
          aria-label={language === "ru" ? "Закрыть" : language === "en" ? "Close" : "Закрити"}
        >
          <X className="w-5 h-5" />
        </button>
        <div className="flex flex-col items-center gap-6">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
            <MapPin className="w-7 h-7 text-primary" />
          </div>

          <h2 className="text-2xl font-bold text-card-foreground text-center text-balance">
            {MODAL_TITLE[language] || MODAL_TITLE.ua}
          </h2>

          <div className="flex flex-col gap-3 w-full">
            {CITIES.map((c, index) => (
              <button
                key={c.code}
                ref={index === 0 ? firstBtnRef : undefined}
                onClick={() => handleSelect(c.code)}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 text-lg font-semibold rounded-xl transition-all duration-200 bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-card hover-lift"
              >
                <MapPin className="w-5 h-5" />
                {c.label[language] || c.label.ua}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
