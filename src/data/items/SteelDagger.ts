import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";

export const SteelDagger: Item = {
  name: "Steel dagger",
  description: "Your weapon attacks deal 2 slash damage when wielded.",
  effects: [
    {
      weapon: {
        bonus: 2,
        damageType: DamageType.Slash,
      },
    },
  ],
  singleUse: false,
  slots: 1,
  defaultCost: 50,
};
