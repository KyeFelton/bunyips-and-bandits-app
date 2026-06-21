import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { DamageType } from "../../enums/DamageType";

export const WoodenBoomerang: Item = {
  name: "Wooden boomerang",
  equippedEffects: [
    {
      weapon: {
        damageType: DamageType.Force,
        bonus: 1,
      },
    },
    {
      custom:
        "If thrown and misses the target, the weapon returns back to you.",
    },
  ],
  singleUse: false,
  slots: 1,
  defaultCost: 50,
  itemType: ItemType.RangedWeapon,
};
