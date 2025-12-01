"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: ReactNode[];
  className?: string;
  gap?: number;
  showNavigation?: boolean;
}

export function Carousel({
  children,
  className,
  gap = 16,
  showNavigation = true,
}: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    const container = containerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 1
      );
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth =
      container.querySelector<HTMLElement>(":first-child")?.offsetWidth || 280;
    const scrollAmount = cardWidth + gap;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }

    setTimeout(checkScrollability, 300);
  };

  return (
    <div className={cn("relative", className)}>
      {showNavigation && (
        <>
          <button
            className={cn(
              "absolute flex items-center justify-center bg-white left-6 top-1/2 z-10 h-8 w-8 -translate-y-1/2 rounded-full shadow-lg backdrop-blur-sm transition-opacity",
              !canScrollLeft && "cursor-not-allowed opacity-50"
            )}
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
          >
            <ChevronLeft
              className="h-4 w-4"
              color={canScrollLeft ? "#000" : "#B6B6B6"}
            />
          </button>

          <button
            className={cn(
              "absolute flex items-center justify-center right-6 top-1/2 z-10 h-8 w-8 -translate-y-1/2 rounded-full bg-white shadow-lg backdrop-blur-sm transition-opacity",
              !canScrollRight && "cursor-not-allowed opacity-50"
            )}
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
          >
            <ChevronRight
              className="h-4 w-4"
              color={canScrollRight ? "#000" : "#B6B6B6"}
            />
          </button>
        </>
      )}

      <div
        ref={containerRef}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth scrollbar-hide"
        style={{ gap: `${gap}px` }}
        onScroll={checkScrollability}
      >
        {children.map((child, index) => (
          <div key={index} className="snap-start">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
