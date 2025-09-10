import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";

export const SteelSpear: Item = {
  name: "Steel spear",
  description:
    "Your weapon attacks deal 3 slash damage when wielded. Creatures that are 2m away from you are considered adjacent when attacking with this weapon.",
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
