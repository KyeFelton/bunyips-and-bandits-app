import {
  BicepsFlexed,
  Route,
  Hand,
  Book,
  Leaf,
  ShipWheel,
  Speech,
  VenetianMask,
  Radio,
  Flame,
  Zap,
  Wind,
  Sun,
  Music2,
  BrainCircuit,
  Ghost,
  BrainCog,
  Dna,
} from "lucide-react";
import { SkillType } from "../../enums/SkillType";
import { cn } from "../../utils/cn";

type Props = {
  type: SkillType;
  className?: string;
  size?: number;
};

export const SkillIcon = ({ type, size = 16, className = "" }: Props) => {
  const props = {
    className: cn("inline-flex align-text-text-bottom", className),
    width: size,
    height: size,
  };

  switch (type) {
    case SkillType.Strength:
      return <BicepsFlexed {...props} />;
    case SkillType.Agility:
      return <Route {...props} />;
    case SkillType.Dexterity:
      return <Hand {...props} />;
    case SkillType.Lore:
      return <Book {...props} />;
    case SkillType.Nature:
      return <Leaf {...props} />;
    case SkillType.Willpower:
      return <ShipWheel {...props} />;
    case SkillType.Charisma:
      return <Speech {...props} />;
    case SkillType.Psychology:
      return <BrainCog {...props} />;
    case SkillType.Stealth:
      return <VenetianMask {...props} />;
    case SkillType.Perception:
      return <Radio {...props} />;
    case SkillType.Pyro:
      return <Flame {...props} />;
    case SkillType.Electric:
      return <Zap {...props} />;
    case SkillType.Kinetic:
      return <Wind {...props} />;
    case SkillType.Radiant:
      return <Sun {...props} />;
    case SkillType.Sonic:
      return <Music2 {...props} />;
    case SkillType.Psychic:
      return <BrainCircuit {...props} />;
    case SkillType.Biotic:
      return <Dna {...props} />;
    case SkillType.Spirit:
      return <Ghost {...props} />;
    default:
      return null;
  }
};
