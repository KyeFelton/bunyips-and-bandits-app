import { DamageType } from "../../enums/DamageType";
import { Item } from "../../models/items";
import { WearType } from "../../enums/WearType";

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
  wearType: WearType.Clothes,
  slots: 3,
  defaultCost: 1000,
};
