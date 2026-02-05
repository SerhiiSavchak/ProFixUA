"use client";

import { Container } from "./Container";
import { Logo } from "@/components/ui/Logo";
import { useTranslation } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/content/i18n";

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo size="sm" />
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="hover:text-primary transition-colors"
            >
              {SITE_CONFIG.phone}
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
