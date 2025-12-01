import { ChevronRight } from "lucide-react";

export function SectionHeading({
  title,
  hideArrow,
}: {
  title: string;
  hideArrow?: boolean;
}) {
  return (
    <div className="flex items-center gap-2 mb-6">
      <h2 className="text-md font-bold text-[#484848]">{title}</h2>
      {!hideArrow && <ChevronRight className="w-4 h-4 text-[#484848]" />}
    </div>
  );
}
