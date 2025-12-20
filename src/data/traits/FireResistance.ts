import { DamageType } from "../../enums/DamageType";
import { Trait } from "./../../models/traits";

export const FireResistance: Trait = {
  name: "Fire resistant",
  description:
    "Your body adapts to hot environments. You gain +2 armour for fire damage.",
  effects: [
    {
      armour: {
        damageType: DamageType.Fire,
        bonus: 3,
      },
    },
  ],
};
