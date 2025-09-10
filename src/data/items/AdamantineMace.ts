import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";

export const AdamantineMace: Item = {
  name: "Adamantine mace",
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
  weight: 1,
  defaultCost: 6000,
};
