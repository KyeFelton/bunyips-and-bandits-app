import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";

export const MithrilMace: Item = {
  name: "Mithril mace",
  description: "Your weapon attacks deal 6 force damage when wielded.",
  effects: [
    {
      weapon: {
        bonus: 6,
        damageType: DamageType.Force,
      },
    },
  ],
  singleUse: false,
  weight: 1.2,
  defaultCost: 1000,
};
