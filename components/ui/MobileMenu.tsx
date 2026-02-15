"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  className?: string;
}

const NAV_ITEMS = [
  { href: "#services", key: "services" },
  { href: "#why-us", key: "advantages" },
  { href: "#how-we-work", key: "howWeWork" },
  { href: "#reviews", key: "reviews" },
  { href: "#gallery", key: "gallery" },
  { href: "#faq", key: "faq" },
  { href: "#contacts", key: "contacts" },
] as const;

export function MobileMenu({ className }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <div className={cn("lg:hidden", className)}>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-lg hover:bg-accent transition-colors cursor-pointer"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6 text-foreground" />
      </button>

      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[150] bg-foreground/50 backdrop-blur-md transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Menu Panel */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-[160] w-full max-w-sm bg-background border-l border-border shadow-2xl transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <Logo size="sm" />
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-accent transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 custom-scrollbar">
            <ul className="space-y-2">
              {NAV_ITEMS.map((item, index) => (
                <li 
                  key={item.key}
                  className="animate-slide-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="block px-4 py-3 text-lg font-medium text-foreground rounded-xl hover:bg-accent active:scale-[0.98] transition-all duration-200 cursor-pointer select-none"
                  >
                    {t.nav[item.key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
