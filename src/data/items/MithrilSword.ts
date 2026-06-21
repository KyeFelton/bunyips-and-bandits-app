import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";

export const MithrilSword: Item = {
  name: "Mithril sword",
  equippedEffects: [
    {
      weapon: {
        bonus: 4,
        damageType: DamageType.Slash,
      },
    },
  ],
  singleUse: false,
  slots: 1,
  defaultCost: 1000,
};
