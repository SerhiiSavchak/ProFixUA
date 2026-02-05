"use client";

import { cn } from "@/lib/utils";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "py-12 md:py-16 lg:py-20 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
    >
      {children}
    </section>
  );
}
