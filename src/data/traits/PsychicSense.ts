import { SenseType } from "../../enums/SenseType";
import { Trait } from "./../../models/traits";

export const PsychicSense: Trait = {
  name: "Psychic sense",
  description:
    "You can sense the presence, proximity and direction of other creatures within 100m.",
  effects: [
    {
      sense: {
        gain: SenseType.Psychic,
      },
    },
  ],
};
