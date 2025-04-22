import { DamageType } from "../../enums/DamageType";
import { Trait } from "./../../models/traits";

export const ToxicResistance: Trait = {
  name: "Toxic resistance",
  description:
    "Your body has grown resilient to the many types of poisons and acids. Gain 3 toxic armour.",
  effects: [
    {
      armour: {
        damageType: DamageType.Toxic,
        bonus: 3,
      },
    },
  ],
};
