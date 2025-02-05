import { useAtomValue } from "jotai";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { PawPrint, Waves, Mountain, Wind } from "lucide-react";
import { MovementType } from "../enums/MovementType";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { speedAtom } from "../state/derived";

const SpeedIcon = ({ type, value }: { type: MovementType; value: number }) => {
  const getIcon = () => {
    switch (type) {
      case MovementType.Walk:
        return <PawPrint className="h-5 w-5" />;
      case MovementType.Swim:
        return <Waves className="h-5 w-5" />;
      case MovementType.Climb:
        return <Mountain className="h-5 w-5" />;
      case MovementType.Fly:
        return <Wind className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="flex items-center gap-1 cursor-default">
          {getIcon()}
          <span>{value}m</span>
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
  );
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
                <SpeedIcon type={type as MovementType} value={value} />
              </div>
            ))}
          </div>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
};
