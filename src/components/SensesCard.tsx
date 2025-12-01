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
import {
  HearingIcon,
  PsychicSenseIcon,
  SightIcon,
  SmellIcon,
} from "./icons/SenseIcon";

const getSenseTooltipText = (
  senseType: SenseType,
  isPrimary: boolean,
  allSenses: SenseType[]
) => {
  // Build sense name with variants
  let senseName = "";

  if (senseType === SenseType.Sight || senseType === SenseType.InfraredSight) {
    const hasSight = allSenses.includes(SenseType.Sight);
    const hasInfrared = allSenses.includes(SenseType.InfraredSight);
    if (hasSight && hasInfrared) {
      senseName = "Standard & infrared sight";
    } else if (hasInfrared) {
      senseName = "Infrared sight";
    } else {
      senseName = "Sight";
    }
  } else if (
    senseType === SenseType.Hearing ||
    senseType === SenseType.TremorHearing
  ) {
    const hasHearing = allSenses.includes(SenseType.Hearing);
    const hasTremor = allSenses.includes(SenseType.TremorHearing);
    if (hasHearing && hasTremor) {
      senseName = "Airborne & tremor hearing";
    } else if (hasTremor) {
      senseName = "Tremor hearing";
    } else {
      senseName = "Hearing";
    }
  } else if (senseType === SenseType.Smell) {
    senseName = "Smell";
  } else if (senseType === SenseType.Psychic) {
    senseName = "Psychic sense";
  }

  const isPlural = senseName.includes("&");
  const verb = isPlural ? "are" : "is";
  const article = isPrimary
    ? isPlural
      ? "primary senses"
      : "a primary sense"
    : isPlural
    ? "secondary senses"
    : "a secondary sense";
  const actionText = isPrimary
    ? `You can roll normally for Perception checks involving this sense.`
    : `You must roll with disadvantage for Perception checks involving this sense.`;

  return `${senseName} ${verb} ${article}. ${actionText}`;
};

export const SensesCard = () => {
  const senses = useAtomValue(sensesAtom);
  const { primary: primarySenses, secondary: secondarySenses } = senses;
  const allSenses = [...primarySenses, ...secondarySenses];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Senses</CardTitle>
      </CardHeader>
      <CardContent>
        <TooltipProvider>
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              {primarySenses.map((senseType) => (
                <Tooltip key={senseType}>
                  <TooltipTrigger asChild>
                    <div className="text-muted-foreground hover:text-foreground transition-colors cursor-default">
                      {senseType === SenseType.Sight ? (
                        <SightIcon
                          standard={allSenses.includes(SenseType.Sight)}
                          infrared={allSenses.includes(SenseType.InfraredSight)}
                        />
                      ) : senseType === SenseType.Hearing ? (
                        <HearingIcon
                          standard={allSenses.includes(SenseType.Hearing)}
                          tremor={allSenses.includes(SenseType.TremorHearing)}
                        />
                      ) : senseType === SenseType.Smell ? (
                        <SmellIcon />
                      ) : senseType === SenseType.Psychic ? (
                        <PsychicSenseIcon />
                      ) : null}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    align="center"
                    className="max-w-[250px]"
                  >
                    <p className="text-xs">
                      {getSenseTooltipText(senseType, true, allSenses)}
                    </p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
            {secondarySenses.length > 0 && (
              <>
                <div className="h-6 w-px bg-border" />
                <div className="flex gap-2 opacity-50">
                  {secondarySenses.map((senseType) => (
                    <Tooltip key={senseType}>
                      <TooltipTrigger asChild>
                        <div className="text-muted-foreground hover:text-foreground transition-colors cursor-default">
                          {senseType === SenseType.Sight ? (
                            <SightIcon
                              standard={allSenses.includes(SenseType.Sight)}
                              infrared={allSenses.includes(
                                SenseType.InfraredSight
                              )}
                            />
                          ) : senseType === SenseType.Hearing ? (
                            <HearingIcon
                              standard={allSenses.includes(SenseType.Hearing)}
                              tremor={allSenses.includes(
                                SenseType.TremorHearing
                              )}
                            />
                          ) : senseType === SenseType.Smell ? (
                            <SmellIcon />
                          ) : senseType === SenseType.Psychic ? (
                            <PsychicSenseIcon />
                          ) : null}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent
                        side="top"
                        align="center"
                        className="max-w-[250px]"
                      >
                        <p className="text-xs">
                          {getSenseTooltipText(senseType, false, allSenses)}
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
