"use client";

import { useState, useEffect, useCallback } from "react";
import { City } from "@/content/i18n";

const STORAGE_KEY = "profix-city";
const DEFAULT_CITY: City = "lviv";

// Маппинг ключевых слов для определения города
const CITY_KEYWORDS: Record<City, string[]> = {
  lviv: ["lviv", "львів", "львов", "lvov", "lwow"],
  dnipro: ["dnipro", "дніпро", "днепр", "dnepr", "dnepropetrovsk"],
};

// Функция для нормализации значения города
function normalizeCityValue(value: string | null): City | null {
  if (!value) return null;
  
  const normalized = value.toLowerCase().trim();
  
  // Прямое совпадение
  if (normalized === "lviv" || normalized === "dnipro") {
    return normalized as City;
  }
  
  // Проверка по ключевым словам
  for (const [city, keywords] of Object.entries(CITY_KEYWORDS)) {
    if (keywords.some(keyword => normalized.includes(keyword))) {
      return city as City;
    }
  }
  
  return null;
}

// Функция для определения города из различных источников
function detectCityFromParams(): City | null {
  if (typeof window === "undefined") return null;
  
  const params = new URLSearchParams(window.location.search);
  const url = window.location;
  
  // 1. Прямой параметр ?city=
  const cityParam = params.get("city");
  const directCity = normalizeCityValue(cityParam);
  if (directCity) return directCity;
  
  // 2. UTM параметры
  const utmCity = params.get("utm_city");
  const utmCityDetected = normalizeCityValue(utmCity);
  if (utmCityDetected) return utmCityDetected;
  
  // 3. Параметр source (может содержать название города)
  const source = params.get("source");
  const sourceCity = normalizeCityValue(source);
  if (sourceCity) return sourceCity;
  
  // 4. Параметр ref (реферальный)
  const ref = params.get("ref");
  const refCity = normalizeCityValue(ref);
  if (refCity) return refCity;
  
  // 5. Параметр campaign (может содержать город)
  const campaign = params.get("utm_campaign");
  const campaignCity = normalizeCityValue(campaign);
  if (campaignCity) return campaignCity;
  
  // 6. Параметр utm_source (может содержать город)
  const utmSource = params.get("utm_source");
  const utmSourceCity = normalizeCityValue(utmSource);
  if (utmSourceCity) return utmSourceCity;
  
  // 7. Анализ поддомена (если используется)
  const hostname = url.hostname.toLowerCase();
  if (hostname.includes("dnipro") || hostname.includes("днепр") || hostname.includes("дніпро")) {
    return "dnipro";
  }
  if (hostname.includes("lviv") || hostname.includes("львов") || hostname.includes("львів")) {
    return "lviv";
  }
  
  // 8. Анализ referrer (если есть)
  if (document.referrer) {
    try {
      const referrerUrl = new URL(document.referrer);
      const referrerHost = referrerUrl.hostname.toLowerCase();
      
      // Проверка по ключевым словам в домене
      for (const [city, keywords] of Object.entries(CITY_KEYWORDS)) {
        if (keywords.some(keyword => referrerHost.includes(keyword))) {
          return city as City;
        }
      }
      
      // Проверка параметров в referrer URL
      const referrerParams = new URLSearchParams(referrerUrl.search);
      const referrerCity = normalizeCityValue(referrerParams.get("city"));
      if (referrerCity) return referrerCity;
    } catch (e) {
      // Игнорируем ошибки парсинга referrer
    }
  }
  
  return null;
}

export function useCity() {
  const [city, setCityState] = useState<City>(DEFAULT_CITY);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 1. Сначала пытаемся определить город из параметров URL
    const detectedCity = detectCityFromParams();
    if (detectedCity) {
      setCityState(detectedCity);
      localStorage.setItem(STORAGE_KEY, detectedCity);
      
      // Обновляем URL с параметром city для консистентности
      if (typeof window !== "undefined") {
        const url = new URL(window.location.href);
        if (!url.searchParams.has("city")) {
          url.searchParams.set("city", detectedCity);
          window.history.replaceState({}, "", url.toString());
        }
      }
      
      setIsLoaded(true);
      return;
    }

    // 2. Если город не определен из параметров, проверяем localStorage
    const stored = localStorage.getItem(STORAGE_KEY) as City | null;
    if (stored && ["lviv", "dnipro"].includes(stored)) {
      setCityState(stored);
    }
    
    setIsLoaded(true);
  }, []);

  const setCity = useCallback((newCity: City) => {
    setCityState(newCity);
    localStorage.setItem(STORAGE_KEY, newCity);
    
    // Обновляем URL без перезагрузки страницы
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("city", newCity);
      window.history.replaceState({}, "", url.toString());
    }
  }, []);

  return { city, setCity, isLoaded };
}
