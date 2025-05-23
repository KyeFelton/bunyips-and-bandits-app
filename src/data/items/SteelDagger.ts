import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";

export const SteelDagger: Item = {
  name: "Steel dagger",
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
  weight: 0.5,
  defaultCost: 50,
};
