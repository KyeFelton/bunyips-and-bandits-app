import {
  BicepsFlexed,
  Route,
  Hand,
  Swords,
  Book,
  Leaf,
  ShipWheel,
  Speech,
  BrainCog,
  VenetianMask,
  Eye,
  Ear,
  Soup,
  Flame,
  Zap,
  Wind,
  Sun,
  Music2,
  BrainCircuit,
  Droplets,
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
    case SkillType.Martial:
      return <Swords className={className} />;
    case SkillType.Intelligence:
      return <Book className={className} />;
    case SkillType.Nature:
      return <Leaf className={className} />;
    case SkillType.Willpower:
      return <ShipWheel className={className} />;
    case SkillType.Charisma:
      return <Speech className={className} />;
    case SkillType.Psychology:
      return <BrainCog className={className} />;
    case SkillType.Stealth:
      return <VenetianMask className={className} />;
    case SkillType.Sight:
      return <Eye className={className} />;
    case SkillType.Hearing:
      return <Ear className={className} />;
    case SkillType.Smell:
      return <Soup className={className} />;
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
    case SkillType.Toxic:
      return <Droplets className={className} />;
    case SkillType.Healing:
      return <Heart className={className} />;
    case SkillType.Spirit:
      return <Ghost className={className} />;
    default:
      return null;
  }
};
