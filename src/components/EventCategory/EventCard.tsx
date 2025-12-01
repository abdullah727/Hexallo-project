"use client";

import { Heart, Clock, MapPin, StarIcon } from "lucide-react";

interface EventCardProps {
  image: string;
  category: string;
  title: string;
  time: string;
  location: string;
  price: number;
  currency?: string;
  description?: string;
  hasShadow?: boolean;
  hasRating?: boolean;
}

export function EventCard({
  image,
  category,
  title,
  time,
  location,
  price,
  currency = "USD",
  description = "Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.",
  hasShadow = false,
  hasRating = false,
}: EventCardProps) {
  return (
    <div
      className={`p-2 max-w-[333px] group rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer ${
        hasShadow
          ? "shadow-xl"
          : "border-2 border-white bg-[#FAF8ED] hover:bg-[#F7E4B6]"
      }`}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 rounded-lg hover:rounded-lg"
        />

        <button className="absolute top-3 right-3 bg-[#F7E4B6] rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100">
          <Heart className="w-4 h-4 text-[#AE6F28]" />
        </button>
      </div>

      <div className="p-4 px-1">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-[#F7E4B6] rounded-md mb-3 group-hover:bg-[#EFC96D] transition-colors duration-300">
          {category}
        </span>

        <div className="flex align-middle justify-between">
          <h3 className="font-semibold text-sm text-gray-900 mb-2">{title}</h3>
          {hasRating && (
            <span className="text-xs text-gray-500 flex gap-2 align-middle">
              <StarIcon className="w-4 h-4 text-[#FCD53F] fill-[#FCD53F]" />
              <span className="text-[#5B5F62]"> {3.8}</span>
            </span>
          )}
        </div>

        {/* Time with icon */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
          <Clock className="w-4 h-4 text-[#B8956A] hidden group-hover:block" />
          <span>{time}</span>
        </div>

        {/* Location with icon */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <MapPin className="w-4 h-4 text-[#B8956A] hidden group-hover:block" />
          <span>{location}</span>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm">
            <span className="text-gray-500">From </span>
            <span className="font-semibold text-gray-900">
              {currency} {price}
            </span>
          </p>
        </div>

        <p className="text-sm text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
          {description}
        </p>
      </div>
    </div>
  );
}
