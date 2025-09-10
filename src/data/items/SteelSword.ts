import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";

export const SteelSword: Item = {
  name: "Steel sword",
  description: "Your weapon attacks deal 3 slash damage when wielded.",
  effects: [
    {
      weapon: {
        bonus: 3,
        damageType: DamageType.Slash,
      },
    },
  ],
  singleUse: false,
  weight: 1,
  defaultCost: 400,
};
