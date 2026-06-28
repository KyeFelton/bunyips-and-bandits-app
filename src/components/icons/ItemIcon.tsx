import {
  Asterisk,
  Bomb,
  Cross,
  FlaskConical,
  Gavel,
  Gem,
  Shirt,
  Sword,
  Crosshair,
  Hamburger,
  Wrench,
  HatGlasses,
  Shield,
} from "lucide-react";
import { ItemType } from "../../enums/ItemType";

type Props = {
  itemType?: ItemType;
  className?: string;
};

export const ItemIcon = ({ itemType, className = "h-4 w-4" }: Props) => {
  if (!itemType) return null;

  switch (itemType) {
    case ItemType.SlashWeapon:
      return <Sword className={className} />;
    case ItemType.ForceWeapon:
      return <Gavel className={className} />;
    case ItemType.RangedWeapon:
      return <Crosshair className={className} />;
    case ItemType.Armour:
      return <Shield className={className} />;
    case ItemType.Accessory:
      return <HatGlasses className={className} />;
    case ItemType.Medical:
      return <Cross className={className} />;
    case ItemType.Concoction:
      return <FlaskConical className={className} />;
    case ItemType.Poison:
      return <FlaskConical className={className} />;
    case ItemType.Explosive:
      return <Bomb className={className} />;
    case ItemType.Trap:
      return <Asterisk className={className} />;
    case ItemType.Gemstone:
      return <Gem className={className} />;
    case ItemType.Food:
      return <Hamburger className={className} />;
    case ItemType.Gear:
      return <Wrench className={className} />;
    case ItemType.Clothing:
      return <Shirt className={className} />;
    default:
      return null;
  }
};
