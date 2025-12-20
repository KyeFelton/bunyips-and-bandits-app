import { DamageType } from "../../enums/DamageType";
import { Trait } from "../../models/traits";

export const ThickSkin: Trait = {
  name: "Thick skin",
  description: "You gain +1 armour for all physical damage types.",
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
};
