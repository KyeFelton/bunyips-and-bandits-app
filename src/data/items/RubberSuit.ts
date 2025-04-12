import { DamageType } from "../../enums/DamageType";
import { Item } from "../../models/items";

export const RubberSuit: Item = {
  name: "Rubber suit",
  description:
    "You gain +3 armour for fire and toxic damage, and an additional +2 armour for electric damage.",
  effects: [
    {
      armour: {
        damageType: DamageType.Fire,
        bonus: 3,
      },
    },
    {
      armour: {
        damageType: DamageType.Electric,
        bonus: 2,
      },
    },
    {
      armour: {
        damageType: DamageType.Toxic,
        bonus: 3,
      },
    },
  ],
  singleUse: false,
  weight: 8.0,
  defaultCost: 1000,
};
