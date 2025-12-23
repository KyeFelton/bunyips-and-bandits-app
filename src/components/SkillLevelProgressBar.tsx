import { CRIT_TO_LEVEL_UP } from "../state/character";
import { cn } from "../utils/cn";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface SkillLevelProgressBarProps {
  startingLevel: number;
  currentLevel: number;
  criticalSuccesses: number;
  maxAllowedLevel: number;
  onCriticalSuccessChange: (newCount: number) => void;
}

export const SkillLevelProgressBar = ({
  startingLevel,
  currentLevel,
  criticalSuccesses,
  maxAllowedLevel,
  onCriticalSuccessChange,
}: SkillLevelProgressBarProps) => {
  const remainingCrits = criticalSuccesses % CRIT_TO_LEVEL_UP;

  const handleCircleClick = (level: number) => {
    if (level === currentLevel) {
      onCriticalSuccessChange(criticalSuccesses - 2);
    } else if (level === currentLevel + 1 && remainingCrits === 0) {
      onCriticalSuccessChange(criticalSuccesses + 1);
    } else if (level > startingLevel && level <= maxAllowedLevel) {
      onCriticalSuccessChange((level - startingLevel) * CRIT_TO_LEVEL_UP);
    }
  };

  const getCircleState = (
    level: number
  ): "starting" | "completed" | "half" | "empty" => {
    if (level <= startingLevel) return "starting";

    const progressedLevels = currentLevel - startingLevel;
    if (level <= startingLevel + progressedLevels) return "completed";
    if (level === startingLevel + progressedLevels + 1 && remainingCrits > 0)
      return "half";
    return "empty";
  };

  const getCircleColor = (fromLevel: number): string => {
    const state = getCircleState(fromLevel);
    if (state === "starting") return "border-foreground bg-foreground/80";
    if (state === "completed")
      return "border-green-foreground bg-green-foreground/80";
    if (state === "half") return "border-green-foreground";
    if (state === "empty") return "border-muted-foreground";
    return "";
  };

  const getLineColor = (fromLevel: number): string => {
    const toState = getCircleState(fromLevel + 1);
    if (toState === "starting") return "bg-foreground";
    if (toState === "completed") return "bg-green-foreground";
    if (toState === "half") return "bg-green-foreground";
    return "bg-muted-foreground/30";
  };

  return (
    <TooltipProvider>
      <div className="flex items-center w-full py-1">
        <div className="flex items-center gap-0 relative max-w-full overflow-x-auto">
          {Array.from({ length: maxAllowedLevel }).map((_, index) => {
            const level = index + 1;
            const state = getCircleState(level);
            const isClickable =
              state === "completed" ||
              state === "half" ||
              (state === "empty" &&
                level >= startingLevel &&
                level <= maxAllowedLevel);

            return (
              <div key={level} className="flex items-center">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => handleCircleClick(level)}
                      disabled={!isClickable}
                      className={cn(
                        "relative flex items-center justify-center",
                        "w-4 h-4 flex-shrink-0",
                        isClickable && "cursor-pointer",
                        !isClickable && "cursor-default"
                      )}
                      aria-label={`Level ${level}`}
                    >
                      {/* Circle border */}
                      <div
                        className={cn(
                          "absolute inset-0 rounded-full border-2",
                          getCircleColor(level)
                        )}
                      />
                      {/* Half fill for one crit */}
                      {state === "half" && (
                        <div
                          className="absolute inset-0 rounded-full overflow-hidden"
                          style={{
                            clipPath: "inset(0 50% 0 0)",
                          }}
                        >
                          <div className="w-full h-full bg-green-foreground/80" />
                        </div>
                      )}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">Level {level}</p>
                  </TooltipContent>
                </Tooltip>

                {/* Connecting line */}
                {level < maxAllowedLevel && (
                  <div
                    className={cn("h-1 w-2 flex-shrink-0", getLineColor(level))}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </TooltipProvider>
  );
};
