import { EventCard } from "./EventCard";
import { SectionHeading } from "../SectionHeading";

const SpotlightEvents = [
  {
    image: "/rock-band-concert-live-performance-with-colorful-l.png",
    category: "Lounge",
    title: "DJ Liv North Live",
    time: "10:30 PM - 12:30 PM",
    location: "NewYork City",
    price: 89,
  },
  {
    image: "/outdoor-festival-fireworks-celebration-night-event.png",
    category: "Lounge",
    title: "DJ Liv North Live",
    time: "10:30 PM - 12:30 PM",
    location: "NewYork City",
    price: 89,
  },
  {
    image: "/ferris-wheel-carnival-amusement-park-night-lights.png",
    category: "Lounge",
    title: "DJ Liv North Live",
    time: "10:30 PM - 12:30 PM",
    location: "NewYork City",
    price: 89,
  },
  {
    image: "/art-gallery-exhibition-modern-paintings-colorful-a.png",
    category: "Lounge",
    title: "DJ Liv North Live",
    time: "10:30 PM - 12:30 PM",
    location: "NewYork City",
    price: 89,
  },
];

export function EventCategoryList({
  title,
  hasShadow = false,
  hasRating = false,
}: {
  title: string;
  hasShadow?: boolean;
  hasRating?: boolean;
}) {
  return (
    <section className="w-full py-8">
      <SectionHeading title={title} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2.5">
        {SpotlightEvents.map((event, index) => (
          <EventCard
            key={index}
            {...event}
            hasShadow={hasShadow}
            hasRating={hasRating}
          />
        ))}
      </div>
    </section>
  );
}
