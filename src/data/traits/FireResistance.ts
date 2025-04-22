import { DamageType } from "../../enums/DamageType";
import { Trait } from "./../../models/traits";

export const FireResistance: Trait = {
  name: "Fire resistant",
  description:
    "Your body adapts to hot environments. Gain +3 armour for fire damage.",
  effects: [
    {
      armour: {
        damageType: DamageType.Fire,
        bonus: 3,
      },
    },
  ],
};
