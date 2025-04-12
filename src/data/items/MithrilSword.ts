import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";

export const MithrilSword: Item = {
  name: "Mithril sword",
  description: "Your weapon attacks deal 7 slash damage when wielded.",
  effects: [
    {
      weapon: {
        bonus: 7,
        damageType: DamageType.Slash,
      },
    },
  ],
  singleUse: false,
  weight: 0.8,
  defaultCost: 1000,
};
