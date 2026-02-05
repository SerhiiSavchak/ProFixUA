"use client";

import { useState, useEffect, useCallback } from "react";
import { Language, translations, Translations } from "@/content/i18n";

const STORAGE_KEY = "profix-language";
const DEFAULT_LANGUAGE: Language = "ua";

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored && ["ua", "ru", "en"].includes(stored)) {
      setLanguageState(stored);
    }
    setIsLoaded(true);
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }, []);

  const t: Translations = translations[language] as Translations;

  return { language, setLanguage, t, isLoaded };
}
