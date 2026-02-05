"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const sizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <span className={cn("font-bold tracking-tight", sizes[size], className)}>
      <span className="text-foreground">Pro</span>
      <span className="text-primary">Fix</span>
      <span className="text-foreground">UA</span>
    </span>
  );
}
