import { Mountain, PlaneTakeoff, SportShoe, Waves } from "lucide-react";
import { Locomotion } from "../../enums/Locomotion";
import { cn } from "../../utils/cn";

type Props = {
  type: Locomotion;
  size?: number;
  className?: string;
  showText?: boolean;
};

export const SpeedIcon = ({ type, size = 16, className = "" }: Props) => {
  const props = {
    className: cn("inline-flex align-text-text-bottom", className),
    width: size,
    height: size,
  };

  switch (type) {
    case Locomotion.Run:
      return <SportShoe {...props} />;
    case Locomotion.Swim:
      return <Waves {...props} />;
    case Locomotion.Climb:
      return <Mountain {...props} />;
    case Locomotion.Fly:
      return <PlaneTakeoff {...props} />;
  }
};
