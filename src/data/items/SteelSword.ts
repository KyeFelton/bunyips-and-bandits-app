import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";

export const SteelSword: Item = {
  name: "Steel sword",
  equippedEffects: [
    {
      weapon: {
        bonus: 3,
        damageType: DamageType.Slash,
      },
    },
  ],
  singleUse: false,
  slots: 1,
  defaultCost: 400,
};
