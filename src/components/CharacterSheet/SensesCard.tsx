import { useAtomValue } from 'jotai';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import {
  Eye,
  Ear,
  Soup,
  Brain,
  Sun,
  Flame,
  Mountain,
  Wind,
} from 'lucide-react';
import { SenseType } from '../../enums/SenseType';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';
import { sensesAtom } from '../../state/character';
import { PropsWithChildren } from 'react';

type Senses = Partial<Record<SenseType, boolean>>;

const getSightTooltip = (senses: Senses) => {
  if (senses[SenseType.Sight] && senses[SenseType.InfraredSight])
    return 'Standard & infrared sight';
  if (senses[SenseType.Sight]) return 'Standard sight';
  if (senses[SenseType.InfraredSight]) return 'Infrared sight';
  return '';
};

const getHearingTooltip = (senses: Senses) => {
  if (senses[SenseType.Hearing] && senses[SenseType.TremorHearing])
    return 'Standard & tremor hearing';
  if (senses[SenseType.Hearing]) return 'Standard hearing';
  if (senses[SenseType.TremorHearing]) return 'Tremor hearing';
  return '';
};

const SightIcon = ({ senses }: { senses: Senses }) => (
  <div className="relative w-7">
    <Eye className="h-5 w-5" />
    {senses[SenseType.Sight] && (
      <Sun className="absolute -top-1 -right-1 h-3 w-3" />
    )}
    {senses[SenseType.InfraredSight] && (
      <Flame className="absolute -bottom-1 -right-1 h-3 w-3" />
    )}
  </div>
);

const HearingIcon = ({ senses }: { senses: Senses }) => (
  <div className="relative w-7">
    <Ear className="h-5 w-5" />
    {senses[SenseType.Hearing] && (
      <Wind className="absolute -top-1 -right-1 h-3 w-3" />
    )}
    {senses[SenseType.TremorHearing] && (
      <Mountain className="absolute -bottom-1 -right-1 h-3 w-3" />
    )}
  </div>
);

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
                <SightIcon senses={senses} />
              </SenseIconWrapper>
            )}
            {(senses[SenseType.Hearing] || senses[SenseType.TremorHearing]) && (
              <SenseIconWrapper tooltip={getHearingTooltip(senses)}>
                <HearingIcon senses={senses} />
              </SenseIconWrapper>
            )}
            {senses[SenseType.Smell] && (
              <SenseIconWrapper tooltip="Smell">
                <Soup className="h-5 w-5" />
              </SenseIconWrapper>
            )}
            {senses[SenseType.Psychic] && (
              <SenseIconWrapper tooltip="Psychic sense">
                <Brain className="h-5 w-5" />
              </SenseIconWrapper>
            )}
          </div>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
};
