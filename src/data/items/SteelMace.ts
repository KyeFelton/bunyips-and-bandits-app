import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";

export const SteelMace: Item = {
  name: "Steel mace",
  description: "Your weapon attacks deal 3 force damage when wielded.",
  effects: [
    {
      weapon: {
        bonus: 3,
        damageType: DamageType.Force,
      },
    },
  ],
  singleUse: false,
  slots: 2,
  defaultCost: 400,
};
