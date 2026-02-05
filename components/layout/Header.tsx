"use client";

import { Container } from "./Container";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

import { useTranslation } from "@/context/LanguageContext";

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
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguageSwitcher dropdown />
            <ThemeToggle compact />
          </div>
        </div>
      </Container>
    </header>
  );
}
