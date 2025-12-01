import { cn } from "@/lib/utils";

export interface OfferCardProps {
  title: string;
  subtitle?: string;
  discount: string;
  discountLabel?: string;
  backgroundImage?: string;
  variant?: "pink" | "gray";
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
}

export function OfferCard({
  title,
  subtitle,
  discount,
  discountLabel = "OFF",
  backgroundImage,
  variant = "pink",
  isActive = false,
  className,
  onClick,
}: OfferCardProps) {
  const gradientStyles = {
    pink: "bg-gradient-to-b from-rose-300 via-rose-200 to-rose-100",
    gray: "bg-gradient-to-b from-gray-400 via-gray-300 to-rose-100",
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        "relative flex h-[380px] w-[350px] flex-col items-center justify-center overflow-hidden rounded-2xl p-6 text-center transition-all duration-300",
        gradientStyles[variant],
        isActive && "border-5 border-[#EFC96D]",
        className
      )}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <div className="mt-8">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        {subtitle && <p className="text-xl text-gray-700">{subtitle}</p>}
      </div>

      <div className="mt-4">
        <p className="text-sm tracking-widest text-gray-600">UP TO</p>
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-4xl font-bold text-gray-800">{discount}</span>
          <span className="text-lg text-gray-600">{discountLabel}</span>
        </div>
      </div>
    </div>
  );
}
