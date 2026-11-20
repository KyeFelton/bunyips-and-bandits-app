import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { DamageType } from "../../enums/DamageType";

export const SteelSpear: Item = {
  name: "Steel spear",
  equippedEffects: [
    {
      weapon: {
        bonus: 3,
        damageType: DamageType.Slash,
      },
    },
    {
      custom:
        "When a seen enemy moves from Near to Close distance with you, you may immediately make a free attack against them with the spear.",
    },
  ],
  singleUse: false,
  slots: 2,
  defaultCost: 500,
  itemType: ItemType.Weapon,
};
