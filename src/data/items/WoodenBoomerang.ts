import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";

export const WoodenBoomerang: Item = {
  name: "Wooden boomerang",
  description:
    "Your weapon attacks deal 1 force damage when wielded. If thrown and misses the target, the weapon returns back to you.",
  effects: [
    {
      weapon: {
        damageType: DamageType.Force,
        bonus: 1,
      },
    },
  ],
  singleUse: false,
  weight: 0.25,
  defaultCost: 50,
};
