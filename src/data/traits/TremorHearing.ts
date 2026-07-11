import { SenseType } from "../../enums/SenseType";
import { Trait } from "./../../models/traits";

export const TremorHearing: Trait = {
  name: "Tremor hearing",
  description: "Gain {{sense:tremor}} sense.",
  effects: [
    {
      sense: {
        gain: SenseType.TremorHearing,
      },
    },
  ],
};
