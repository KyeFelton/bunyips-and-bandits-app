import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";

export const MithrilMace: Item = {
  name: "Mithril mace",
  description: "Your weapon attacks deal 4 force damage when wielded.",
  effects: [
    {
      weapon: {
        bonus: 4,
        damageType: DamageType.Force,
      },
    },
  ],
  singleUse: false,
  slots: 2,
  defaultCost: 1000,
};
