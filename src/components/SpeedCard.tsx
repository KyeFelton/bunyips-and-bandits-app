import { useAtomValue } from "jotai";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Locomotion } from "./../enums/Locomotion";
import { SpeedRating } from "./../enums/SpeedRating";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { speedAtom } from "./../state/character";
import { SpeedIcon } from "./icons/SpeedIcon";

const getSpeedTooltip = (locomotion: string, rating: SpeedRating): string => {
  switch (rating) {
    case SpeedRating.None:
      return `You lack the ability to ${locomotion.toLowerCase()}.`;
    case SpeedRating.Slow:
      return `You can ${locomotion.toLowerCase()} to close places as an action in combat.`;
    case SpeedRating.Moderate:
      return `You can ${locomotion.toLowerCase()} to close places, and near places if dashing, as an action in combat.`;
    case SpeedRating.Fast:
      return `You can ${locomotion.toLowerCase()} up to near places, and far places if dashing, as an action in combat.`;
    case SpeedRating.Extreme:
      return `You can ${locomotion.toLowerCase()} up to far places as an action in combat.`;
  }
};

export const SpeedCard = () => {
  const speed = useAtomValue(speedAtom);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Speed</CardTitle>
      </CardHeader>
      <CardContent>
        <TooltipProvider>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(speed).map(([type, value]) => (
              <div
                key={type}
                className="flex text-muted-foreground hover:text-foreground transition-colors"
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-1 cursor-default">
                      <SpeedIcon type={type as Locomotion} size={20} />
                      <span className="text-xs mt-1">
                        {value === SpeedRating.None ? "-" : value}
                      </span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    align="center"
                    className="max-w-[250px]"
                  >
                    <p className="text-xs mt-1">
                      {getSpeedTooltip(type, value)}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
            ))}
          </div>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
};
