import { Squirrel, PawPrint, Fish, Bird } from "lucide-react";
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
      return <Fish {...props} />;
    case Locomotion.Climb:
      return <Squirrel {...props} />;
    case Locomotion.Fly:
      return <Bird {...props} />;
  }
};
