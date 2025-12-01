"use client";

import { DestinationCard } from "./DestinationCard";
import { SectionHeading } from "./SectionHeading";

const destinations = [
  {
    image: "/meeting-cafe.jpg",
    title: "Private Tours",
    description:
      "Your guide to the most happening events this weekend — from concerts to pop-ups.",
  },
  {
    image: "/beach-vacation.jpg",
    title: "Private Tours",
    description:
      "Your guide to the most happening events this weekend — from concerts to pop-ups.",
  },
];

export function ExclusiveSection() {
  return (
    <section className="w-full py-8">
      <SectionHeading title="Exclusives" />
      <div className="flex gap-4 overflow-x-auto pb-4">
        {destinations.map((destination, index) => (
          <DestinationCard
            key={index}
            image={destination.image}
            title={destination.title}
            description={destination.description}
            hasExploreLink
          />
        ))}
      </div>
    </section>
  );
}
