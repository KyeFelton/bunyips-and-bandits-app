import { DamageType } from "../../enums/DamageType";
import { Trait } from "./../../models/traits";

export const ElectricResistance: Trait = {
  name: "Electric resistance",
  description: "Gain 2 {{damage:electric}} armour.",
  effects: [
    {
      armour: {
        damageType: DamageType.Electric,
        bonus: 2,
      },
    },
  ],
};
