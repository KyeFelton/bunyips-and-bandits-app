import { DamageType } from "../../enums/DamageType";
import { Item } from "../../models/items";

export const SteelHelm: Item = {
  name: "Steel helm",
  description: "You gain +1 armour for all damage types.",
  effects: [
    {
      armour: {
        damageType: DamageType.Fire,
        bonus: 1,
      },
    },
    {
      armour: {
        damageType: DamageType.Electric,
        bonus: 1,
      },
    },
    {
      armour: {
        damageType: DamageType.Toxic,
        bonus: 1,
      },
    },
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
