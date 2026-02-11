"use client";

import { MapPin } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";
import { useCityContext } from "@/context/CityContext";
import { cn } from "@/lib/utils";

interface CitySelectButtonProps {
  variant?: "header" | "header-mobile" | "hero";
  className?: string;
}

export function CitySelectButton({ variant = "header", className }: CitySelectButtonProps) {
  const { t } = useTranslation();
  const { city, setShowCityModal } = useCityContext();

  const label = city ? t.nav.changeCity : t.nav.selectCity;

  if (variant === "header-mobile") {
    return (
      <button
        type="button"
        onClick={() => setShowCityModal(true)}
        className={cn(
          "p-2 rounded-lg hover:bg-accent transition-colors shrink-0",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
          className
        )}
        aria-label={label}
        title={label}
      >
        <MapPin className="w-4 h-4 text-muted-foreground" />
      </button>
    );
  }

  if (variant === "hero") {
    return (
      <button
        type="button"
        onClick={() => setShowCityModal(true)}
        className={cn(
          "inline-flex items-center justify-center gap-2 px-6 py-4 text-lg font-semibold rounded-xl text-center",
          "bg-primary text-primary-foreground hover:bg-primary/90",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
          "transition-all duration-200 hover-lift",
          className
        )}
      >
        <MapPin className="w-5 h-5 shrink-0" />
        {label}
      </button>
    );
  }

  // header variant – compact for desktop
  return (
    <button
      type="button"
      onClick={() => setShowCityModal(true)}
      className={cn(
        "flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded-md px-2 py-1.5",
        className
      )}
      aria-label={label}
    >
      <MapPin className="w-4 h-4 shrink-0" />
      {label}
    </button>
  );
}
