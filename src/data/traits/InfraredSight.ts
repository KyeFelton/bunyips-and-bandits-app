import { SenseType } from "../../enums/SenseType";
import { Trait } from "./../../models/traits";

export const InfraredSight: Trait = {
  name: "Infrared sight",
  description:
    "Your eyes become attuned to the various spectrums of light. You can now see heat emitted in your environment as infrared light.",
  effects: [
    {
      sense: {
        gain: SenseType.InfraredSight,
      },
    },
  ],
};
