"use client";

import { Container } from "./Container";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { CitySelectButton } from "@/components/ui/CitySelectButton";
import { useTranslation } from "@/context/LanguageContext";

const NAV_ITEMS = [
  { href: "#services", key: "services" },
  { href: "#why-us", key: "advantages" },
  { href: "#how-we-work", key: "howWeWork" },
  { href: "#reviews", key: "reviews" },
  { href: "#gallery", key: "gallery" },
  { href: "#faq", key: "faq" },
  { href: "#contacts", key: "contacts" },
] as const;

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-[100] bg-background/95 backdrop-blur-sm border-b border-border">
      <Container>
        <div className="flex items-center justify-between h-14 md:h-16">
          <a href="#" className="flex items-center shrink-0">
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
          <div className="hidden lg:flex items-center gap-1.5 shrink-0">
            <CitySelectButton variant="header" />
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          {/* Mobile / Tablet Controls */}
          <div className="flex lg:hidden items-center justify-end gap-1.5 shrink-0">
              <CitySelectButton variant="header-mobile" />
            <LanguageSwitcher dropdown />
            <ThemeToggle compact />
          </div>
        </div>
      </Container>
    </header>
  );
}
