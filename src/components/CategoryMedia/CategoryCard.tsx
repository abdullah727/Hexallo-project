interface CategoryCardProps {
  title: string;
  image: string;
  rating: number;
  className?: string;
}

export function CategoryCard({
  title,
  image,
  rating,
  className = "",
}: CategoryCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl group cursor-pointer ${className}`}
    >
      <img
        src={image || "/placeholder.svg"}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full">
        <span className="text-sm font-medium text-foreground">{rating}</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-xs font-semibold text-white">{title}</h3>
        <p className="text-xs text-white/80">Explore</p>
      </div>
    </div>
  );
}
