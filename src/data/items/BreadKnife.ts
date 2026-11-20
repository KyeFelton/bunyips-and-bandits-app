import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { DamageType } from "../../enums/DamageType";

export const BreadKnife: Item = {
  name: "Bread knife",
  description:
    "A sturdy knife for cutting bread.",
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
