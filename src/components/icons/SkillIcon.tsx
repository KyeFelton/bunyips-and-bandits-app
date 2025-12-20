import {
  BicepsFlexed,
  Route,
  Hand,
  Book,
  Leaf,
  ShipWheel,
  Speech,
  Brain,
  VenetianMask,
  Radio,
  Flame,
  Zap,
  Wind,
  Sun,
  Music2,
  BrainCircuit,
  Heart,
  Ghost,
} from "lucide-react";
import { SkillType } from "../../enums/SkillType";

type Props = {
  type: SkillType;
  className?: string;
};

export const SkillIcon = ({ type, className = "h-4 w-4" }: Props) => {
  switch (type) {
    case SkillType.Strength:
      return <BicepsFlexed className={className} />;
    case SkillType.Agility:
      return <Route className={className} />;
    case SkillType.Dexterity:
      return <Hand className={className} />;
    case SkillType.Intelligence:
      return <Book className={className} />;
    case SkillType.Nature:
      return <Leaf className={className} />;
    case SkillType.Willpower:
      return <ShipWheel className={className} />;
    case SkillType.Charisma:
      return <Speech className={className} />;
    case SkillType.Psychology:
      return <Brain className={className} />;
    case SkillType.Stealth:
      return <VenetianMask className={className} />;
    case SkillType.Perception:
      return <Radio className={className} />;
    case SkillType.Pyro:
      return <Flame className={className} />;
    case SkillType.Electric:
      return <Zap className={className} />;
    case SkillType.Kinetic:
      return <Wind className={className} />;
    case SkillType.Radiant:
      return <Sun className={className} />;
    case SkillType.Sonic:
      return <Music2 className={className} />;
    case SkillType.Psychic:
      return <BrainCircuit className={className} />;
    case SkillType.Biotic:
      return <Heart className={className} />;
    case SkillType.Spirit:
      return <Ghost className={className} />;
    default:
      return null;
  }
};
