import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { DamageType } from "../../enums/DamageType";

export const SteelJavelin: Item = {
  name: "Steel javelin",
  equippedEffects: [
    {
      weapon: {
        bonus: 2,
        damageType: DamageType.Slash,
      },
    },
    {
      custom:
        "When thrown, roll with advantage.",
    }
  ],
  singleUse: false,
  slots: 1,
  defaultCost: 400,
  itemType: ItemType.Weapon,
};
