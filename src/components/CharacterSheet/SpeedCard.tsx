import { useAtomValue } from "jotai";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Locomotion } from "../../enums/Locomotion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { speedAtom } from "../../state/character";
import { SpeedIcon } from "../icons/SpeedIcon";

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
            {Object.entries(speed)
              // .filter(([_, value]) => value > 0)
              .map(([type, value]) => (
                <div
                  key={type}
                  className="flex text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-1 cursor-default">
                        <SpeedIcon type={type as Locomotion} size={20} />
                        <span>{value ? `${value}m` : "-"}</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      align="center"
                      className="flex items-center justify-center"
                    >
                      <p>{type}</p>
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
