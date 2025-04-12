import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";

export const KangarooHideArmour: Item = {
  name: "Kangaroo hide armour",
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
  weight: 5.0,
  defaultCost: 100,
};
