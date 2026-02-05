"use client";

import { Phone, MessageCircle } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/content/i18n";

export function MobileCTA() {
  const { t } = useTranslation();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-sm border-t border-border safe-area-inset-bottom">
      <div className="flex gap-2 p-2 max-w-md mx-auto">
        <a
          href={`tel:${SITE_CONFIG.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm transition-all hover:bg-primary/90 active:scale-[0.98]"
        >
          <Phone className="w-4 h-4 flex-shrink-0" />
          <span className="truncate">{t.mobileCta.call}</span>
        </a>
        <a
          href={SITE_CONFIG.telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border-2 border-primary text-primary font-semibold text-sm transition-all hover:bg-primary hover:text-primary-foreground active:scale-[0.98]"
        >
          <MessageCircle className="w-4 h-4 flex-shrink-0" />
          <span className="truncate">{t.mobileCta.write}</span>
        </a>
      </div>
    </div>
  );
}
