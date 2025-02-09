import { Mountain, PawPrint, Waves, Wind } from 'lucide-react';
import { MovementType } from '../../enums/MovementType';

type Props = {
  type: MovementType;
  size?: number;
  className?: string;
};

export const SpeedIcon = ({ type, size = 16, className = '' }: Props) => {
  const props = {
    className,
    width: size,
    height: size,
  };

  switch (type) {
    case MovementType.Walk:
      return <PawPrint {...props} />;
    case MovementType.Swim:
      return <Waves {...props} />;
    case MovementType.Climb:
      return <Mountain {...props} />;
    case MovementType.Fly:
      return <Wind {...props} />;
  }
};