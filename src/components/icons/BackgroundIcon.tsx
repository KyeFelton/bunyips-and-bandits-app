import {
  BowArrow,
  BookOpen,
  HandCoins,
  Crown,
  Gem,
  HatGlasses,
  Hammer,
  BriefcaseMedical,
  Leaf,
  Guitar,
  Pickaxe,
  Sailboat,
  HandFist,
  Swords,
  Wheat,
} from "lucide-react";

type Props = {
  name: string;
  className?: string;
};

export const BackgroundIcon = ({ name, className = "h-4 w-4" }: Props) => {
  switch (name) {
    case "Artisan":
      return <Hammer className={className} />;
    case "Bandit":
      return <HandFist className={className} />;
    case "Drifter":
      return <Sailboat className={className} />;
    case "Farmer":
      return <Wheat className={className} />;
    case "Herbalist":
      return <Leaf className={className} />;
    case "Hunter":
      return <BowArrow className={className} />;
    case "Labourer":
      return <Pickaxe className={className} />;
    case "Leader":
      return <Crown className={className} />;
    case "Medic":
      return <BriefcaseMedical className={className} />;
    case "Merchant":
      return <HandCoins className={className} />;
    case "Monk":
      return <BookOpen className={className} />;
    case "Noble":
      return <Gem className={className} />;
    case "Performer":
      return <Guitar className={className} />;
    case "Soldier":
      return <Swords className={className} />;
    case "Spy":
      return <HatGlasses className={className} />;
    default:
      return null;
  }
};
