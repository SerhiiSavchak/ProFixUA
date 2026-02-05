"use client";

import { Sun, Moon } from "lucide-react";
import { useThemeContext } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  compact?: boolean;
}

export function ThemeToggle({ className, compact = false }: ThemeToggleProps) {
  const { theme, toggleTheme, isLoaded } = useThemeContext();

  const baseClasses = compact
    ? "p-1.5 rounded-lg bg-accent hover:bg-accent/80 transition-all duration-200"
    : "p-2 rounded-lg bg-accent hover:bg-accent/80 transition-all duration-200";

  const iconClasses = compact ? "w-4 h-4" : "w-5 h-5";

  if (!isLoaded) {
    return (
      <button
        className={cn(baseClasses, className)}
        aria-label="Toggle theme"
      >
        <Sun className={cn(iconClasses, "text-foreground")} />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        baseClasses,
        "hover:scale-105 active:scale-95",
        className
      )}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === "light" ? (
        <Moon className={cn(iconClasses, "text-foreground transition-transform")} />
      ) : (
        <Sun className={cn(iconClasses, "text-foreground transition-transform")} />
      )}
    </button>
  );
}
