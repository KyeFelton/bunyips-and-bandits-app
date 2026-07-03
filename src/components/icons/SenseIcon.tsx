import { Eye, Ear, Soup, Brain, ThermometerSun, Activity } from "lucide-react";
import { cn } from "../../utils/cn";
import { SenseType } from "../../enums/SenseType";

interface IconProps {
  className?: string;
}

const StandardSightIcon = ({ className }: IconProps) => (
  <Eye className={cn("h-4 w-4", className)} />
);

const InfraredSightIcon = ({ className }: IconProps) => (
  <ThermometerSun className={cn("h-4 w-4", className)} />
);

const StandardHearingIcon = ({ className }: IconProps) => (
  <Ear className={cn("h-4 w-4", className)} />
);

const TremorHearingIcon = ({ className }: IconProps) => (
  <Activity className={cn("h-4 w-4", className)} />
);

const SmellIcon = ({ className }: IconProps) => (
  <Soup className={cn("h-4 w-4", className)} />
);

const PsychicSenseIcon = ({ className }: IconProps) => (
  <Brain className={cn("h-4 w-4", className)} />
);

type Props = {
  type: SenseType;
  className?: string;
};

export const SenseIcon = ({ type, className = "" }: Props) => {
  switch (type) {
    case SenseType.Sight:
      return <StandardSightIcon className={className} />;
    case SenseType.InfraredSight:
      return <InfraredSightIcon className={className} />;
    case SenseType.Hearing:
      return <StandardHearingIcon className={className} />;
    case SenseType.TremorHearing:
      return <TremorHearingIcon className={className} />;
    case SenseType.Smell:
      return <SmellIcon className={className} />;
    case SenseType.Psychic:
      return <PsychicSenseIcon className={className} />;
    default:
      return null;
  }
};
