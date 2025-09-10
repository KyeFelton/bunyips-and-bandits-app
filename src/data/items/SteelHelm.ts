import { DamageType } from "../../enums/DamageType";
import { Item } from "../../models/items";

export const SteelHelm: Item = {
  name: "Steel helm",
  description: "You gain +1 armour for slash and force damage.",
  effects: [
    {
      armour: {
        damageType: DamageType.Slash,
        bonus: 1,
      },
    },
    {
      armour: {
        damageType: DamageType.Force,
        bonus: 1,
      },
    },
  ],
  singleUse: false,
  weight: 2,
  defaultCost: 200,
};
