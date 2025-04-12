import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";

export const SteelJavelin: Item = {
  name: "Steel javelin",
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
  weight: 1,
  defaultCost: 400,
};
