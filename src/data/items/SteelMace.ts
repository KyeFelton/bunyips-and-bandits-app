import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";

export const SteelMace: Item = {
  name: "Steel mace",
  description: "Your weapon attacks deal 5 force damage when wielded.",
  effects: [
    {
      weapon: {
        bonus: 5,
        damageType: DamageType.Force,
      },
    },
  ],
  singleUse: false,
  weight: 1.5,
  defaultCost: 400,
};
