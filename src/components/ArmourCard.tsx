import { useAtomValue } from "jotai";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Gavel, Flame, Zap, FlaskRound, Sword } from "lucide-react";
import { DamageType } from "../enums/DamageType";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { armourAtom } from "../state/derived";

const ArmourIcon = ({ type, value }: { type: DamageType; value: number }) => {
  const getIcon = () => {
    switch (type) {
      case DamageType.Fire:
        return <Flame className="h-5 w-5" />;
      case DamageType.Electric:
        return <Zap className="h-5 w-5" />;
      case DamageType.Toxic:
        return <FlaskRound className="h-5 w-5" />;
      case DamageType.Slash:
        return <Sword className="h-5 w-5" />;
      case DamageType.Force:
        return <Gavel className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="flex items-center gap-1 cursor-default">
          {getIcon()}
          <span className={value < 0 ? "text-destructive" : ""}>
            {value > 0 ? `+${value}` : value}
          </span>
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

export const ArmourCard = () => {
  const armour = useAtomValue(armourAtom);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Armour</CardTitle>
      </CardHeader>
      <CardContent>
        <TooltipProvider>
          <div className="grid grid-cols-3 gap-3">
            {Object.entries(armour).map(([type, value]) => (
              <div
                key={type}
                className="flex text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArmourIcon type={type as DamageType} value={value} />
              </div>
            ))}
          </div>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
};
