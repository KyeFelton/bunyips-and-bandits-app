import { SenseType } from "../../../enums/SenseType";
import { Trait } from "../../../models/traits";

export const Deaf: Trait = {
  name: "Deaf",
  description: "Lose {{sense:hearing}} and {{sense:tremor}} sense.",
  effects: [
    {
      sense: {
        lose: SenseType.Hearing,
      },
    },
    {
      sense: {
        lose: SenseType.TremorHearing,
      },
    },
  ],
};
