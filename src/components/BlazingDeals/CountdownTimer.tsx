"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TimeUnit {
  value: number;
  label: string;
}

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

export function CountdownTimer({ targetDate, className }: CountdownTimerProps) {
  const [timeUnits, setTimeUnits] = useState<TimeUnit[]>([
    { value: 0, label: "Days" },
    { value: 0, label: "Hr" },
    { value: 0, label: "Mins" },
    { value: 0, label: "Sec" },
  ]);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeUnits([
          { value: days, label: "Days" },
          { value: hours, label: "Hr" },
          { value: minutes, label: "Mins" },
          { value: seconds, label: "Sec" },
        ]);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={cn("flex gap-2", className)}>
      {timeUnits.map((unit, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="flex h-18 w-18 items-center justify-center rounded-lg bg-white text-2xl font-bold text-[#484848] shadow-xl">
            {String(unit.value).padStart(2, "0")}
          </div>
          <span className="mt-2 text-xs text-muted-foreground">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
