import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";

export const AdamantineSword: Item = {
  name: "Adamantine sword",
  description: "Your weapon attacks deal 8 slash damage when wielded.",
  effects: [
    {
      weapon: {
        bonus: 8,
        damageType: DamageType.Slash,
      },
    },
  ],
  singleUse: false,
  weight: 0.5,
  defaultCost: 6000,
};
