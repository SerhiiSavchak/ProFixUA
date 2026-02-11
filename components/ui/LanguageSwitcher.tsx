"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";
import { LANGUAGES, Language } from "@/content/i18n";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
  compact?: boolean;
  dropdown?: boolean;
}

export function LanguageSwitcher({ className, compact = false, dropdown = false }: LanguageSwitcherProps) {
  const { language, setLanguage, isLoaded } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!isLoaded) {
    return dropdown || compact ? (
      <button className="p-2 rounded-lg bg-accent text-muted-foreground cursor-pointer">
        <Globe className="w-5 h-5" />
      </button>
    ) : (
      <div className={cn("flex gap-1", className)}>
        {LANGUAGES.map((lang) => (
          <span
            key={lang.code}
            className="px-2 py-1 text-sm font-medium rounded text-muted-foreground"
          >
            {lang.label}
          </span>
        ))}
      </div>
    );
  }

  // Dropdown version for mobile
  if (dropdown) {
    return (
      <div ref={dropdownRef} className={cn("relative", className)}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 px-2 py-1.5 rounded-lg bg-accent hover:bg-accent/80 transition-colors text-sm font-medium cursor-pointer select-none"
          aria-label="Select language"
        >
          <Globe className="w-4 h-4" />
          <span>{language.toUpperCase()}</span>
          <ChevronDown className={cn("w-3 h-3 transition-transform", isOpen && "rotate-180")} />
        </button>

        {isOpen && (
          <div className="absolute top-full right-0 mt-1 bg-card border border-border rounded-lg shadow-xl overflow-hidden z-[200] min-w-[100px]">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as Language);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full px-4 py-2 text-left text-sm font-medium transition-colors cursor-pointer select-none",
                  language === lang.code
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-accent"
                )}
              >
                {lang.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Compact version (cycle through)
  if (compact) {
    const currentIndex = LANGUAGES.findIndex((l) => l.code === language);
    const nextLang = LANGUAGES[(currentIndex + 1) % LANGUAGES.length];

    return (
      <button
        onClick={() => setLanguage(nextLang.code as Language)}
        className={cn(
          "flex items-center gap-1 px-2 py-1.5 rounded-lg bg-accent hover:bg-accent/80 transition-colors text-sm font-medium cursor-pointer select-none",
          className
        )}
        aria-label={`Switch language to ${nextLang.label}`}
      >
        <Globe className="w-4 h-4" />
        <span>{language.toUpperCase()}</span>
      </button>
    );
  }

  // Desktop version
  return (
    <div className={cn("flex gap-0.5", className)}>
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code as Language)}
          className={cn(
            "px-1.5 py-1 text-xs font-medium rounded transition-colors cursor-pointer select-none",
            language === lang.code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-accent"
          )}
          aria-label={`Switch to ${lang.label}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
