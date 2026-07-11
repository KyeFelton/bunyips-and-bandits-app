import { SenseType } from "../../enums/SenseType";
import { Trait } from "./../../models/traits";

export const SharpNose: Trait = {
  name: "Sharp nose",
  description: "Your {{sense:smell}} sense is keen.",
  effects: [
    {
      sense: {
        gain: SenseType.Smell,
      },
    },
  ],
};
