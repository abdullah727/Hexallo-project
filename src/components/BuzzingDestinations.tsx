"use client";

import { DestinationCard } from "./DestinationCard";
import { SectionHeading } from "./SectionHeading";

const destinations = [
  {
    image: "/paris-city.jpg",
    title: "Kina Mountain",
    description: (
      <div className="text-sm text-black/50">
        <p>1.2k check-ins this week</p>
        <p className="mt-2">
          Your guide to the most happening events this weekend — from concerts
          to pop-ups.
        </p>
      </div>
    ),
  },
  {
    image: "/japan.jpg",
    title: "Kina Mountain",
    description: (
      <div className="text-sm text-black/50">
        <p>1.2k check-ins this week</p>
        <p className="mt-2">
          Your guide to the most happening events this weekend — from concerts
          to pop-ups.
        </p>
      </div>
    ),
  },
  {
    image: "/New-york.jpg",
    title: "Kina Mountain",
    description: (
      <div className="text-sm text-black/50">
        <p>1.2k check-ins this week</p>
        <p className="mt-2">
          Your guide to the most happening events this weekend — from concerts
          to pop-ups.
        </p>
      </div>
    ),
  },
  {
    image: "/thailand.jpg",
    title: "Kina Mountain",
    description: (
      <div className="text-sm text-black/50">
        <p>1.2k check-ins this week</p>
        <p className="mt-2">
          Your guide to the most happening events this weekend — from concerts
          to pop-ups.
        </p>
      </div>
    ),
  },
];

export function BuzzingDestinations() {
  return (
    <section className="w-full py-8">
      <SectionHeading title="Buzzing Destinations" />
      <div className="flex gap-4 overflow-x-auto pb-4">
        {destinations.map((destination, index) => (
          <DestinationCard
            key={index}
            image={destination.image}
            title={destination.title}
            description={destination.description}
            variant="white-background"
          />
        ))}
      </div>
    </section>
  );
}
