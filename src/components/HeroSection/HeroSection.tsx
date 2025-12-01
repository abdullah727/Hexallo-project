"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import "./HeroSection.css";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6;

  return (
    <section className="px-4 pt-6">
      <div className="relative rounded-2xl overflow-hidden h-[570px]">
        <div className="absolute inset-0 bg-cover bg-center hero-background">
          <div className="absolute inset-0 bg-[#7F7A7A4D]/90" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl font-semibold mb-4 text-balance max-w-3xl leading-tight">
            Discover, Book & Enjoy What's
            <br />
            Happening Around You
          </h1>
          <p className="text-sm mb-8 font-semibold">
            From local events to world-famous experiences — all in one place.
          </p>

          <div className="bg-white rounded-lg flex items-center w-full max-w-2xl overflow-hidden shadow-lg justify-between border-[1.75px] border-[#E3E3E1]">
            <input
              type="text"
              placeholder="Search any event"
              className="px-4 py-3 text-[#6A6A6A] placeholder-gray-400 outline-none"
            />
            <button className="px-6 py-3 text-[#131314] hover:text-gray-900 transition-colors">
              Where
            </button>
            <button className="px-6 py-3 text-[#131314] hover:text-gray-900 transition-colors">
              When
            </button>
            <button className="bg-[#AE6F28] text-white p-2 m-1 rounded-lg hover:bg-[#2D2D2D] transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      {/* Carousel Dots */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-gray-800" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
