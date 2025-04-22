import { DamageType } from "../../enums/DamageType";
import { Trait } from "./../../models/traits";

export const ElectricResistance: Trait = {
  name: "Electric resistance",
  description: "Gain +3 armour for electric damage.",
  effects: [
    {
      armour: {
        damageType: DamageType.Electric,
        bonus: 3,
      },
    },
  ],
};
