import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { DamageType } from "../../enums/DamageType";

export const Pitchfork: Item = {
  name: "Pitchfork",
  description:
    "A long-handled fork used for moving hay.",
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
