import { Circle, CircleDot } from "lucide-react";

interface CriticalSuccessIndicatorProps {
  count: number;
}

export const CriticalSuccessIndicator = ({
  count,
}: CriticalSuccessIndicatorProps) => {
  // Count is modulo 2 because every 2 critical successes levels up the skill
  const displayCount = count % 2;

  return (
    <div className="flex items-center justify-center">
      {displayCount === 0 ? (
        <Circle className="h-4 w-4 text-muted-foreground" />
      ) : (
        <CircleDot className="h-4 w-4 text-yellow-500" />
      )}
    </div>
  );
};
