import { Eye, Ear, Soup, Brain, ThermometerSun, Activity } from "lucide-react";
import { SenseType } from "../../enums/SenseType";
import { cn } from "../../utils/cn";

type Props = {
  type: SenseType;
  size?: number;
  className?: string;
  showText?: boolean;
};

export const SenseIcon = ({ type, size = 16, className = "" }: Props) => {
  const props = {
    className: cn("inline-flex align-text-text-bottom", className),
    width: size,
    height: size,
  };

  switch (type) {
    case SenseType.Sight:
      return <Eye {...props} />;
    case SenseType.InfraredSight:
      return <ThermometerSun {...props} />;
    case SenseType.Hearing:
      return <Ear {...props} />;
    case SenseType.TremorHearing:
      return <Activity {...props} />;
    case SenseType.Smell:
      return <Soup {...props} />;
    case SenseType.Psychic:
      return <Brain {...props} />;
    default:
      return null;
  }
};
