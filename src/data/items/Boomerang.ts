import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { DamageType } from "../../enums/DamageType";

export const Boomerang: Item = {
  name: "Boomerang",
  equippedEffects: [
    {
      weapon: {
        damageType: DamageType.Force,
        bonus: 1,
      },
    },
    {
      custom:
        "If thrown at a target and misses, returns back to your hand.",
    },
  ],
  singleUse: false,
  slots: 1,
  defaultCost: 50,
  itemType: ItemType.Weapon,
};
