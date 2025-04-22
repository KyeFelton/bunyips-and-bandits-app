import { SenseType } from "../../enums/SenseType";
import { Trait } from "./../../models/traits";

export const TremorHearing: Trait = {
  name: "Tremor hearing",
  description:
    "Your feet become ultra sensitive, enabling you to feel minor vibrations in the ground. Your ears also adapt to the water, enabling you to sense vibrations clearly when underwater.",
  effects: [
    {
      sense: SenseType.TremorHearing,
    },
  ],
};
