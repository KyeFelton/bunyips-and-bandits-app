import { useAtomValue } from "jotai";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { SenseType } from "./../enums/SenseType";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { sensesAtom } from "./../state/character";
import { SenseIcon } from "./icons/SenseIcon";

const getSenseTooltipText = (senseType: SenseType, isPrimary: boolean) => {
  const senseNameMap: Record<SenseType, string> = {
    [SenseType.Sight]: "Standard sight",
    [SenseType.InfraredSight]: "Infrared sight",
    [SenseType.Hearing]: "Standard hearing",
    [SenseType.TremorHearing]: "Tremor hearing",
    [SenseType.Smell]: "Smell",
    [SenseType.Psychic]: "Psychic sense",
  };

  const actionText = isPrimary
    ? `is a primary sense. You can roll normally for Perception checks involving this sense.`
    : `is a secondary sense. You must roll with disadvantage for Perception checks involving this sense.`;

  return `${senseNameMap[senseType]} ${actionText}`;
};

export const SensesCard = () => {
  const senses = useAtomValue(sensesAtom);
  const { primary: primarySenses, secondary: secondarySenses } = senses;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Senses</CardTitle>
      </CardHeader>
      <CardContent>
        <TooltipProvider>
          <div className="flex items-center gap-3">
            <div className="flex gap-3">
              {primarySenses.map((senseType: SenseType) => (
                <Tooltip key={senseType}>
                  <TooltipTrigger asChild>
                    <div className="text-muted-foreground hover:text-foreground transition-colors cursor-default">
                      <SenseIcon type={senseType} className="w-6" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    align="center"
                    className="max-w-[250px]"
                  >
                    <p className="text-xs">
                      {getSenseTooltipText(senseType, true)}
                    </p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
            {secondarySenses.length > 0 && (
              <>
                <div className="h-6 w-px bg-border" />
                <div className="flex gap-2 opacity-50">
                  {secondarySenses.map((senseType: SenseType) => (
                    <Tooltip key={senseType}>
                      <TooltipTrigger asChild>
                        <div className="text-muted-foreground hover:text-foreground transition-colors cursor-default">
                          <SenseIcon type={senseType} className="w-6" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent
                        side="top"
                        align="center"
                        className="max-w-[250px]"
                      >
                        <p className="text-xs">
                          {getSenseTooltipText(senseType, false)}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </>
            )}
          </div>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
};
