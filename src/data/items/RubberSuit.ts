import { DamageType } from "../../enums/DamageType";
import { Item } from "../../models/items";

export const RubberSuit: Item = {
  name: "Rubber suit",
  description:
    "You gain +4 armour for electric damage.",
  effects: [
    {
      armour: {
        damageType: DamageType.Electric,
        bonus: 4,
      },
    },
  ],
  singleUse: false,
  weight: 8.0,
  defaultCost: 1000,
};
