import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { DamageType } from "../../enums/DamageType";

export const Scythe: Item = {
  name: "Scythe",
  description:
    "A long-handled farming tool with a curved blade.",
  equippedEffects: [
    {
      weapon: {
        bonus: 2,
        damageType: DamageType.Slash,
      },
    },
  ],
  singleUse: false,
  slots: 1,
  itemType: ItemType.Weapon,
};
