"use client";

import { DestinationCard } from "./DestinationCard";
import { SectionHeading } from "./SectionHeading";

const destinations = [
  {
    image: "/paris-city.jpg",
    title: "Paris",
    description: "Culinary nights & art walks",
  },
  {
    image: "/japan.jpg",
    title: "Tokyo",
    description: "Hidden rooftop bars & pop-up events",
  },
  {
    image: "/New-york.jpg",
    title: "New York",
    description: "Adventure escapes & wine tours",
  },
  {
    image: "/thailand.jpg",
    title: "New York",
    description: "Adventure escapes & wine tours",
  },
];

export function GlobalHighlightsSection() {
  return (
    <section className="w-full py-8">
      <SectionHeading title="Global Highlights" />
      <div className="flex gap-4 overflow-x-auto pb-4">
        {destinations.map((destination, index) => (
          <DestinationCard
            key={index}
            image={destination.image}
            title={destination.title}
            description={destination.description}
            hasExploreLink
            variant="city"
          />
        ))}
      </div>
    </section>
  );
}
