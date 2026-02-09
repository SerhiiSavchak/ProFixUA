"use client";

import { MapPin } from "lucide-react";
import { Container } from "./Container";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useTranslation } from "@/context/LanguageContext";
import { useCityContext } from "@/context/CityContext";

const NAV_ITEMS = [
  { href: "#services", key: "services" },
  { href: "#why-us", key: "advantages" },
  { href: "#how-we-work", key: "howWeWork" },
  { href: "#reviews", key: "reviews" },
  { href: "#gallery", key: "gallery" },
  { href: "#contacts", key: "contacts" },
] as const;

export function Header() {
  const { t } = useTranslation();
  const { city, setShowCityModal } = useCityContext();

  return (
    <header className="sticky top-0 z-[100] bg-background/95 backdrop-blur-sm border-b border-border">
      <Container>
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center">
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {t.nav[item.key]}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Controls */}
          <div className="hidden lg:flex items-center gap-3">
            {city && (
              <button
                type="button"
                onClick={() => setShowCityModal(true)}
                className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <MapPin className="w-4 h-4" />
                {t.nav.changeCity}
              </button>
            )}
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-2">
            {city && (
              <button
                type="button"
                onClick={() => setShowCityModal(true)}
                className="p-2 rounded-lg hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label={t.nav.changeCity}
                title={t.nav.changeCity}
              >
                <MapPin className="w-5 h-5 text-muted-foreground" />
              </button>
            )}
            <LanguageSwitcher dropdown />
            <ThemeToggle compact />
          </div>
        </div>
      </Container>
    </header>
  );
}
