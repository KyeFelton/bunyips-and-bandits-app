import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";

export const AdamantineMace: Item = {
  name: "Adamantine mace",
  description: "Your weapon attacks deal 7 force damage when wielded.",
  effects: [
    {
      weapon: {
        bonus: 7,
        damageType: DamageType.Force,
      },
    },
  ],
  singleUse: false,
  weight: 1,
  defaultCost: 6000,
};
