"use client";

import { useState, useEffect, useCallback } from "react";
import { City } from "@/content/i18n";

const STORAGE_KEY = "profix-city";

const VALID_CITIES: City[] = ["lviv", "dnipro"];

// Mapping keywords for city detection
const CITY_KEYWORDS: Record<City, string[]> = {
  lviv: ["lviv", "львів", "львов", "lvov", "lwow"],
  dnipro: ["dnipro", "дніпро", "днепр", "dnepr", "dnepropetrovsk"],
};

function normalizeCityValue(value: string | null): City | null {
  if (!value) return null;
  const normalized = value.toLowerCase().trim();
  if (normalized === "lviv" || normalized === "dnipro") return normalized as City;
  for (const [city, keywords] of Object.entries(CITY_KEYWORDS)) {
    if (keywords.some((keyword) => normalized.includes(keyword))) return city as City;
  }
  return null;
}

function detectCityFromParams(): City | null {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);

  // Direct ?city= param
  const directCity = normalizeCityValue(params.get("city"));
  if (directCity) return directCity;

  // UTM params
  for (const key of ["utm_city", "source", "ref", "utm_campaign", "utm_source"]) {
    const found = normalizeCityValue(params.get(key));
    if (found) return found;
  }

  // Subdomain analysis
  const hostname = window.location.hostname.toLowerCase();
  for (const [city, keywords] of Object.entries(CITY_KEYWORDS)) {
    if (keywords.some((kw) => hostname.includes(kw))) return city as City;
  }

  return null;
}

export function useCity() {
  const [city, setCityState] = useState<City | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showCityModal, setShowCityModal] = useState(false);

  useEffect(() => {
    // 1. Try to detect city from URL params
    const detectedCity = detectCityFromParams();
    if (detectedCity) {
      setCityState(detectedCity);
      localStorage.setItem(STORAGE_KEY, detectedCity);
      // Ensure ?city= is in URL for consistency
      const url = new URL(window.location.href);
      if (url.searchParams.get("city") !== detectedCity) {
        url.searchParams.set("city", detectedCity);
        window.history.replaceState({}, "", url.toString());
      }
      setIsLoaded(true);
      return;
    }

    // 2. Check localStorage
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && VALID_CITIES.includes(stored as City)) {
      const storedCity = stored as City;
      setCityState(storedCity);
      // Auto-redirect: add city param to URL
      const url = new URL(window.location.href);
      url.searchParams.set("city", storedCity);
      window.history.replaceState({}, "", url.toString());
      setIsLoaded(true);
      return;
    }

    // 3. No city found — show modal
    setShowCityModal(true);
    setIsLoaded(true);
  }, []);

  const setCity = useCallback((newCity: City) => {
    setCityState(newCity);
    localStorage.setItem(STORAGE_KEY, newCity);
    setShowCityModal(false);

    // Update URL with city param
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("city", newCity);
      window.history.replaceState({}, "", url.toString());
    }
  }, []);

  return { city, setCity, isLoaded, showCityModal, setShowCityModal };
}
