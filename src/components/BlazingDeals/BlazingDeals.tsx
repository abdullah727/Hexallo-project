"use client";

import { CountdownTimer } from "./CountdownTimer";
import { OfferCard, type OfferCardProps } from "./OfferCard";
import { Carousel } from "./Carousel";
import { useState } from "react";

const offers: OfferCardProps[] = [
  {
    title: "New User",
    subtitle: "Offer",
    discount: "20%",
    variant: "pink",
    isActive: true,
  },
  {
    title: "Black Friday",
    subtitle: "Offers",
    discount: "20%",
    variant: "gray",
  },
  {
    title: "New User",
    subtitle: "Offer",
    discount: "20%",
    variant: "pink",
  },
  {
    title: "Holiday",
    subtitle: "Special",
    discount: "25%",
    variant: "gray",
  },
  {
    title: "Cyber Monday",
    subtitle: "Deals",
    discount: "30%",
    variant: "pink",
  },
];

export function BlazingDeals() {
  const [activeIndex, setActiveIndex] = useState(0);
  // Set target date to 2 days, 6 hours, 5 minutes, and 30 seconds from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 2);
  targetDate.setHours(targetDate.getHours() + 6);
  targetDate.setMinutes(targetDate.getMinutes() + 5);
  targetDate.setSeconds(targetDate.getSeconds() + 30);

  return (
    <section className="w-full py-12">
      <div className="mr-[-40px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
          <div className="lg:w-[320px]">
            <h2 className="text-lg font-semibold text-foreground">
              Blazing Deals
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Don't miss our most exciting limited-time offers and new-user
              specials.
            </p>

            <button className="text-xs mt-4 rounded-full bg-[#2D3134] px-4 py-2.5 text-background hover:bg-foreground/90">
              Explore Offers Now
            </button>

            <div className="mt-8">
              <p className="text-xs text-[#D00E28]">Offer ends in...</p>
              <CountdownTimer targetDate={targetDate} className="mt-6" />
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <Carousel gap={14}>
              {offers.map((offer, index) => (
                <OfferCard
                  key={index}
                  {...offer}
                  isActive={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
