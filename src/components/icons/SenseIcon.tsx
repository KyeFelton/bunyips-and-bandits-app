import {
  Eye,
  Ear,
  Soup,
  Sun,
  Flame,
  Wind,
  Mountain,
  Brain,
} from "lucide-react";
import { cn } from "../../utils/cn";
import { SenseType } from "../../enums/SenseType";

interface IconProps {
  className?: string;
}

const StandardSightIcon = ({ className }: IconProps) => (
  <div className={cn(`relative w-5`, className)}>
    <Eye className="w-[80%] h-[80%]" />
    <Sun className={`absolute -top-1 -right-2 h-3 w-3`} />
  </div>
);

const InfraredSightIcon = ({ className }: IconProps) => (
  <div className={cn(`relative w-5`, className)}>
    <Eye className="w-[80%] h-[80%]" />
    <Flame className={`absolute -bottom-1 -right-2 h-3 w-3`} />
  </div>
);

const StandardHearingIcon = ({ className }: IconProps) => (
  <div className={cn(`relative w-5`, className)}>
    <Ear className="w-[80%] h-[80%]" />
    <Wind className={`absolute -top-1 -right-2 h-3 w-3`} />
  </div>
);

const TremorSenseIcon = ({ className }: IconProps) => (
  <div className={cn(`relative w-5`, className)}>
    <Ear className="w-[80%] h-[80%]" />
    <Mountain className={`absolute -bottom-1 -right-2 h-3 w-3`} />
  </div>
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
      return <TremorSenseIcon className={className} />;
    case SenseType.Smell:
      return <SmellIcon className={className} />;
    case SenseType.Psychic:
      return <PsychicSenseIcon className={className} />;
    default:
      return null;
  }
};
