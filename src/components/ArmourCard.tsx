import { useAtomValue } from "jotai";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { DamageType } from "./../enums/DamageType";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { armourAtom } from "./../state/character";
import { ArmourIcon } from "./icons/ArmourIcon";

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
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-1 cursor-default">
                      <ArmourIcon type={type as DamageType} size={20} />
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
              </div>
            ))}
          </div>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
};
