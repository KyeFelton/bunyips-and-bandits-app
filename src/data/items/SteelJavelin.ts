import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";

export const SteelJavelin: Item = {
  name: "Steel javelin",
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
