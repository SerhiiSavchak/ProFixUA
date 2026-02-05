"use client";

import { useState, useEffect, useCallback, useRef, TouchEvent, MouseEvent } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SliderImage {
  src: string;
  alt: string;
}

interface SliderProps {
  images: SliderImage[];
  autoplayInterval?: number;
  className?: string;
}

export function Slider({ images, autoplayInterval = 4000, className }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const startX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Autoplay
  useEffect(() => {
    if (isPaused || images.length <= 1) return;

    const interval = setInterval(goToNext, autoplayInterval);
    return () => clearInterval(interval);
  }, [isPaused, goToNext, autoplayInterval, images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev]);

  // Touch/Mouse handlers for swipe
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    startX.current = clientX;
    setIsPaused(true);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const diff = clientX - startX.current;
    setDragOffset(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 50;
    if (dragOffset < -threshold) {
      goToNext();
    } else if (dragOffset > threshold) {
      goToPrev();
    }
    
    setDragOffset(0);
    setTimeout(() => setIsPaused(false), 100);
  };

  // Touch events
  const handleTouchStart = (e: TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  // Mouse events for desktop drag
  const handleMouseDown = (e: MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd();
    }
    setIsPaused(false);
  };

  if (images.length === 0) return null;

  const translateX = -currentIndex * 100 + (dragOffset / (containerRef.current?.offsetWidth || 1)) * 100;

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden rounded-2xl select-none", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Slides */}
      <div
        className={cn(
          "flex",
          !isDragging && "transition-transform duration-500 ease-out"
        )}
        style={{ 
          transform: `translateX(${translateX}%)`,
          cursor: isDragging ? "grabbing" : "grab"
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="relative w-full flex-shrink-0 aspect-[16/10]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              className="object-cover pointer-events-none"
              priority={index === 0}
              draggable={false}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); goToPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background text-foreground shadow-lg transition-all hover:scale-110 active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background text-foreground shadow-lg transition-all hover:scale-110 active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Progress dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                currentIndex === index
                  ? "bg-primary w-8"
                  : "bg-background/60 hover:bg-background w-2.5"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
