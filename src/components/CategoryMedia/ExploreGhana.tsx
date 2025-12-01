import { CategoryCard } from "./CategoryCard";
import { SectionHeading } from "../SectionHeading";

const categories = [
  {
    title: "Events",
    image: "/african-cultural-festival-with-traditional-dancers.jpg",
    rating: 3.5,
  },
  {
    title: "Activities",
    image: "/people-riding-quad-bikes-atv-through-muddy-trail.png",
    rating: 3.5,
  },
  {
    title: "Restaurants",
    image: "/grilled-steak-with-mashed-potatoes-and-vegetables-.jpg",
    rating: 3.5,
  },
  {
    title: "Tours",
    image: "/cape-coast-castle-ghana-historic-fortress-on-beach.png",
    rating: 3.5,
  },
  {
    title: "Services",
    image: "/african-woman-getting-hair-braided-at-salon.png",
    rating: 3.5,
  },
  {
    title: "Destinations",
    image: "/independence-arch-accra-ghana-with-flag-tourists.png",
    rating: 3.5,
  },
  {
    title: "Places",
    image: "/modern-hotel-lobby-interior-with-wooden-panels.jpg",
    rating: 3.5,
  },
  {
    title: "Accommodations",
    image: "/the-crown-pub-hotel-exterior-at-night-with-lights.jpg",
    rating: 3.5,
  },
];

export function ExploreGhana() {
  return (
    <section className="py-8 w-full">
      <SectionHeading title="Explore Ghana" hideArrow />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-4 auto-rows-[222px]">
        {/* Row 1 */}
        <CategoryCard
          title={categories[0].title}
          image={categories[0].image}
          rating={categories[0].rating}
          className="md:col-span-1 lg:col-span-3 md:row-span-1"
        />
        <CategoryCard
          title={categories[1].title}
          image={categories[1].image}
          rating={categories[1].rating}
          className="md:col-span-1 lg:col-span-5 md:row-span-1"
        />
        <CategoryCard
          title={categories[2].title}
          image={categories[2].image}
          rating={categories[2].rating}
          className="md:col-span-1 lg:col-span-4 md:row-span-1"
        />

        {/* Row 2 */}
        <CategoryCard
          title={categories[3].title}
          image={categories[3].image}
          rating={categories[3].rating}
          className="md:col-span-2 lg:col-span-7 md:row-span-1 lg:row-span-1 min-h-[220px]"
        />
        <CategoryCard
          title={categories[4].title}
          image={categories[4].image}
          rating={categories[4].rating}
          className="md:col-span-1 lg:col-span-5 md:row-span-1 lg:row-span-1 min-h-[220px]"
        />

        {/* Row 3 */}
        <CategoryCard
          title={categories[5].title}
          image={categories[5].image}
          rating={categories[5].rating}
          className="md:col-span-1 lg:col-span-4 md:row-span-1"
        />
        <CategoryCard
          title={categories[6].title}
          image={categories[6].image}
          rating={categories[6].rating}
          className="md:col-span-1 lg:col-span-3 md:row-span-1"
        />
        <CategoryCard
          title={categories[7].title}
          image={categories[7].image}
          rating={categories[7].rating}
          className="md:col-span-1 lg:col-span-5 md:row-span-1"
        />
      </div>
    </section>
  );
}
