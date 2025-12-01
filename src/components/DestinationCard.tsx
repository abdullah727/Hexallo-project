"use client";
import { ArrowRight } from "lucide-react";

interface DestinationCardProps {
  image: string;
  title: string;
  description: React.ReactNode;
  variant?: "city" | "white-background";
  hasExploreLink?: boolean;
}

export function DestinationCard({
  image,
  title,
  description,
  variant,
  hasExploreLink = false,
}: DestinationCardProps) {
  const isCity = variant === "city";
  return (
    <div className="relative group overflow-hidden rounded-2xl aspect-[3/4] min-w-[280px] flex-1 cursor-pointer h-[360px]">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-2xl"
      />
      <div
        className={`absolute bottom-0 left-0 right-0 p-5 ${
          variant === "white-background" ? "bg-white" : "bg-[#2D3134]/50"
        }`}
      >
        <p
          className={`${
            variant === "white-background" ? "text-black" : "text-white"
          } mb-2 ${isCity ? "text-xs" : "font-bold text-sm"}`}
        >
          {title}
        </p>
        <p
          className={`${
            variant === "white-background" ? "text-black" : "text-white"
          } text-xs leading-snug ${isCity ? "font-bold" : ""}`}
        >
          {description}
        </p>
        {hasExploreLink && (
          <button className="flex items-center gap-1 text-white/90 text-[10px] font-medium hover:text-white transition-colors mt-2">
            Explore Now
            <ArrowRight className="w-4 h-3" />
          </button>
        )}
      </div>
    </div>
  );
}
