import { useAtomValue } from "jotai";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { SenseType } from "../../enums/SenseType";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { sensesAtom } from "../../state/character";
import { PropsWithChildren } from "react";
import {
  HearingIcon,
  PsychicSenseIcon,
  SightIcon,
  SmellIcon,
} from "../icons/SenseIcon";

type Senses = Partial<Record<SenseType, boolean>>;

const getSightTooltip = (senses: Senses) => {
  if (senses[SenseType.Sight] && senses[SenseType.InfraredSight])
    return "Standard & infrared sight";
  if (senses[SenseType.Sight]) return "Standard sight";
  if (senses[SenseType.InfraredSight]) return "Infrared sight";
  return "";
};

const getHearingTooltip = (senses: Senses) => {
  if (senses[SenseType.Hearing] && senses[SenseType.TremorHearing])
    return "Standard & tremor hearing";
  if (senses[SenseType.Hearing]) return "Standard hearing";
  if (senses[SenseType.TremorHearing]) return "Tremor hearing";
  return "";
};

const SenseIconWrapper = ({
  children,
  tooltip,
}: PropsWithChildren<{ tooltip: string }>) => (
  <div className="text-muted-foreground hover:text-foreground transition-colors">
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="cursor-default">{children}</div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  </div>
);

export const SensesCard = () => {
  const senses = useAtomValue(sensesAtom);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Senses</CardTitle>
      </CardHeader>
      <CardContent>
        <TooltipProvider>
          <div className="grid grid-cols-4 gap-3">
            {(senses[SenseType.Sight] || senses[SenseType.InfraredSight]) && (
              <SenseIconWrapper tooltip={getSightTooltip(senses)}>
                <SightIcon
                  standard={senses[SenseType.Sight]}
                  infrared={senses[SenseType.InfraredSight]}
                />
              </SenseIconWrapper>
            )}
            {(senses[SenseType.Hearing] || senses[SenseType.TremorHearing]) && (
              <SenseIconWrapper tooltip={getHearingTooltip(senses)}>
                <HearingIcon
                  standard={senses[SenseType.Hearing]}
                  tremor={senses[SenseType.TremorHearing]}
                />
              </SenseIconWrapper>
            )}
            {senses[SenseType.Smell] && (
              <SenseIconWrapper tooltip="Smell">
                <SmellIcon />
              </SenseIconWrapper>
            )}
            {senses[SenseType.Psychic] && (
              <SenseIconWrapper tooltip="Psychic sense">
                <PsychicSenseIcon />
              </SenseIconWrapper>
            )}
          </div>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
};
