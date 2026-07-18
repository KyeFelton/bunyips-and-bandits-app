import { SenseType } from "../../../enums/SenseType";
import { Trait } from "../../../models/traits";

export const Blind: Trait = {
  name: "Blind",
  description: "Lose {{sense:sight}} and {{sense:infrared}} sense.",
  effects: [
    {
      sense: {
        lose: SenseType.Sight,
      },
    },
    {
      sense: {
        lose: SenseType.InfraredSight,
      },
    },
  ],
};
