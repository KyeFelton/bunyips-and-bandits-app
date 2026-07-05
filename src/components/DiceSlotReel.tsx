import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import {
  WHEEL_SPIN_CLICK_COUNT,
  WHEEL_SPIN_CLICK_TIMES_S,
} from "../utils/wheelSpinTiming";

const buildReelSequence = (
  sides: number,
  finalValue: number,
  length: number,
): number[] => {
  const items: number[] = [];
  let current = finalValue;

  for (let i = 0; i < length; i++) {
    items.unshift(current);
    current = current === 1 ? sides : current - 1;
  }

  return items;
};

type Props = {
  className?: string;
  sides: number;
  spinId: string;
  value: number;
};

export const DiceSlotReel = ({ className, sides, spinId, value }: Props) => {
  const prefersReducedMotion = useReducedMotion();
  const sequence = buildReelSequence(sides, value, WHEEL_SPIN_CLICK_COUNT);
  const [displayIndex, setDisplayIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayIndex(sequence.length - 1);
      return;
    }
    setDisplayIndex(0);

    const timers = WHEEL_SPIN_CLICK_TIMES_S.map((timeS, index) => {
      if (index === 0) return undefined;

      return window.setTimeout(() => {
        setDisplayIndex(index);
      }, timeS * 1000);
    }).filter((timer): timer is number => timer !== undefined);

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [spinId, sides, value, prefersReducedMotion, sequence.length]);

  return (
    <div
      className={cn(
        "relative w-14 overflow-hidden rounded-md border border-border bg-card shadow-inner",
        className,
      )}
      style={{ height: 56 }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-3 bg-gradient-to-b from-card to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-3 bg-gradient-to-t from-card to-transparent" />

      <div className="flex h-full items-center justify-center font-mono text-3xl font-bold tabular-nums text-foreground">
        {sequence[displayIndex]}
      </div>
    </div>
  );
};
