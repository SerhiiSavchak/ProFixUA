"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => setIsLoading(false), 600);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-background transition-all duration-600",
        isExiting && "opacity-0 scale-105"
      )}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated circles */}
        <div className="absolute -inset-16">
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/60" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/40" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/50" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/30" />
          </div>
        </div>

        {/* Outer rotating ring */}
        <div className="absolute -inset-12">
          <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-spin-reverse" />
          <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin-slow" />
        </div>

        {/* Middle pulsing ring */}
        <div className="absolute -inset-8">
          <div className="absolute inset-0 rounded-full bg-primary/5 animate-pulse-ring" />
        </div>

        {/* Inner ring */}
        <div className="absolute -inset-4 rounded-full border border-primary/30 animate-ping-slow" />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-1 animate-float">
          <span className="text-3xl font-bold text-foreground tracking-tight">Pro</span>
          <span className="text-3xl font-bold text-primary tracking-tight">Fix</span>
          <span className="text-3xl font-bold text-foreground tracking-tight">UA</span>
        </div>

        {/* Loading text */}
        <div className="mt-8 flex items-center gap-1">
          <span className="text-sm text-muted-foreground animate-pulse">Loading</span>
          <span className="flex gap-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce-dot-1" />
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce-dot-2" />
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce-dot-3" />
          </span>
        </div>
      </div>
    </div>
  );
}
