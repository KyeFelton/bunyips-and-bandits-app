import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";

export const MithrilSword: Item = {
  name: "Mithril sword",
  description: "Your weapon attacks deal 4 slash damage when wielded.",
  effects: [
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
