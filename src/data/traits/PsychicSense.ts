import { SenseType } from "../../enums/SenseType";
import { Trait } from "./../../models/traits";

export const PsychicSense: Trait = {
  name: "Psychic sense",
  description:
    "You can sense the presence of other creatures and can communicate with them telepathically.",
  effects: [
    {
      sense: SenseType.Psychic,
    },
  ],
};
