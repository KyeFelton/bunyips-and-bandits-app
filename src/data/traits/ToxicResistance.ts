import { DamageType } from "../../enums/DamageType";
import { Trait } from "./../../models/traits";

export const ToxicResistance: Trait = {
  name: "Toxic resistance",
  description: "Gain 2 {{damage:toxic}} armour.",
  effects: [
    {
      armour: {
        damageType: DamageType.Toxic,
        bonus: 2,
      },
    },
  ],
};
