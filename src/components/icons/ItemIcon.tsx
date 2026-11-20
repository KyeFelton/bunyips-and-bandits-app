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
  Beer,
  Guitar,
} from "lucide-react";
import { ItemType } from "../../enums/ItemType";

type Props = {
  itemType?: ItemType;
  className?: string;
};

export const ItemIcon = ({ itemType, className = "h-4 w-4" }: Props) => {
  if (!itemType) return null;

  switch (itemType) {
    case ItemType.Weapon:
      return <Sword className={className} />;
    case ItemType.Armour:
      return <Shield className={className} />;
    case ItemType.Accessory:
      return <HatGlasses className={className} />;
    case ItemType.Consumable:
      return <FlaskConical className={className} />;
    case ItemType.Ammunition:
      return <Bomb className={className} />;
    case ItemType.Relic:
      return <Gem className={className} />;
    case ItemType.Tool:
      return <Wrench className={className} />;
    case ItemType.Clothing:
      return <Shirt className={className} />;
    case ItemType.Instrument:
      return <Guitar className={className} />;
    default:
      return null;
  }
};
