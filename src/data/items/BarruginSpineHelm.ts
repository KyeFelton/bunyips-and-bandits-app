import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";

export const BarruginSpineHelm: Item = {
  name: "Barrugin spine helm",
  description:
    "You gain +1 armour for all damage types. Foes that touch your helm take 1d4 slash damage.",
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
  weight: 2.0,
  defaultCost: 2500,
};
