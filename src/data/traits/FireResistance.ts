import { DamageType } from "../../enums/DamageType";
import { Trait } from "./../../models/traits";

export const FireResistance: Trait = {
  name: "Fire resistant",
  description: "Gain 2 {{damage:fire}} armour.",
  effects: [
    {
      armour: {
        damageType: DamageType.Fire,
        bonus: 2,
      },
    },
  ],
};
