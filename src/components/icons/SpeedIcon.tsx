import { Mountain, PawPrint, Waves, Wind } from "lucide-react";
import { Locomotion } from "../../enums/Locomotion";

type Props = {
  type: Locomotion;
  size?: number;
  className?: string;
};

export const SpeedIcon = ({ type, size = 16, className = "" }: Props) => {
  const props = {
    className,
    width: size,
    height: size,
  };

  switch (type) {
    case Locomotion.Walk:
      return <PawPrint {...props} />;
    case Locomotion.Swim:
      return <Waves {...props} />;
    case Locomotion.Climb:
      return <Mountain {...props} />;
    case Locomotion.Fly:
      return <Wind {...props} />;
  }
};
