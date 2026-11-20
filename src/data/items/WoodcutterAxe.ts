import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { DamageType } from "../../enums/DamageType";

export const WoodcutterAxe: Item = {
  name: "Woodcutter's axe",
  description:
    "A broad-headed felling axe built for splitting timber.",
  equippedEffects: [
    {
      weapon: {
        bonus: 2,
        damageType: DamageType.Slash,
      },
    },
  ],
  singleUse: false,
  slots: 2,
  itemType: ItemType.Weapon,
};
