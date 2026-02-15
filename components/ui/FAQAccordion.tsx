"use client";

import { useState, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: readonly FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleToggle(index);
      }
      if (e.key === "ArrowDown" && index < items.length - 1) {
        e.preventDefault();
        const next = document.querySelector(`[data-faq-trigger="${index + 1}"]`) as HTMLButtonElement;
        next?.focus();
      }
      if (e.key === "ArrowUp" && index > 0) {
        e.preventDefault();
        const prev = document.querySelector(`[data-faq-trigger="${index - 1}"]`) as HTMLButtonElement;
        prev?.focus();
      }
    },
    [handleToggle, items.length]
  );

  return (
    <div
      className={cn("space-y-2", className)}
      role="region"
      aria-label="FAQ"
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const id = `faq-answer-${index}`;
        const triggerId = `faq-trigger-${index}`;

        return (
          <div
            key={index}
            className="rounded-xl border border-border bg-card overflow-hidden transition-shadow duration-300 hover:shadow-md"
          >
            <h3>
              <button
                type="button"
                id={triggerId}
                data-faq-trigger={index}
                onClick={() => handleToggle(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                aria-expanded={isOpen}
                aria-controls={id}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-foreground transition-colors hover:bg-accent/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
              >
                <span className="text-base md:text-lg">{item.q}</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 shrink-0 text-muted-foreground transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
                    isOpen && "rotate-180"
                  )}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              id={id}
              role="region"
              aria-labelledby={triggerId}
              className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="border-t border-border px-5 py-4">
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed whitespace-pre-line">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
