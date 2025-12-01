"use client";

import { DestinationCard } from "./DestinationCard";
import { SectionHeading } from "./SectionHeading";

const destinations = [
  {
    image: "/rome-colosseum-at-sunset-with-warm-lighting.jpg",
    title: "The Secret Garden Café",
    description:
      "AccraHidden courtyard serving organic brunch & live music evenings.",
  },
  {
    image: "/ancient-greek-or-roman-ruins-with-carved-statues-a.jpg",
    title: "Napa's Underground Jazz",
    description: "Vintage cellar turned into an intimate live stages.",
  },
  {
    image: "/gateway-of-india-mumbai-at-sunset-with-crowds.jpg",
    title: "Sky Hammock Trail",
    description: "BaliSwing over the valley — a serene thrill far from crowds",
  },
  {
    image: "/colorful-rainbow-stairs-in-nature-with-people-clim.jpg",
    title: "Sky Hammock Trail",
    description: "BaliSwing over the valley — a serene thrill far from crowds",
  },
];

export function HiddenGemsSection() {
  return (
    <section className="w-full py-8">
      <SectionHeading title="Discover Hidden Gems" />
      <div className="flex gap-4 overflow-x-auto pb-4">
        {destinations.map((destination, index) => (
          <DestinationCard
            key={index}
            image={destination.image}
            title={destination.title}
            description={destination.description}
          />
        ))}
      </div>
    </section>
  );
}
