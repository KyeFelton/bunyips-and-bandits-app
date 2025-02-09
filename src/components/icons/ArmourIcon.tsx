import { Flame, Droplets, Gavel, Sword, Zap } from 'lucide-react';
import { DamageType } from '../../enums/DamageType';

type Props = {
  type: DamageType;
  size?: number;
  className?: string;
};

export const ArmourIcon = ({ type, size = 16, className = '' }: Props) => {
  const props = {
    className,
    width: size,
    height: size,
  };

  switch (type) {
    case DamageType.Fire:
      return <Flame {...props} />;
    case DamageType.Electric:
      return <Zap {...props} />;
    case DamageType.Toxic:
      return <Droplets {...props} />;
    case DamageType.Slash:
      return <Sword {...props} />;
    case DamageType.Force:
      return <Gavel {...props} />;
  }
};