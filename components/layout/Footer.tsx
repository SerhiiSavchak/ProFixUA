"use client";

import { Container } from "./Container";
import { Logo } from "@/components/ui/Logo";
import { useTranslation } from "@/context/LanguageContext";
import { useCityContext } from "@/context/CityContext";
import { CITY_CONFIG } from "@/content/i18n";

export function Footer() {
  const { t } = useTranslation();
  const { city } = useCityContext();
  const cityConfig = city ? CITY_CONFIG[city] : CITY_CONFIG.lviv;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo size="sm" />
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a
              href={`tel:${cityConfig.phone}`}
              className="hover:text-primary transition-colors"
            >
              {cityConfig.phone}
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} ProFixUA. {t.footer.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}
