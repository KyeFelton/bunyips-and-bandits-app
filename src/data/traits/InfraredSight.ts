import { SenseType } from "../../enums/SenseType";
import { Trait } from "./../../models/traits";

export const InfraredSight: Trait = {
  name: "Infrared sight",
  description: "Gain {{sense:infrared}} sense.",
  effects: [
    {
      sense: {
        gain: SenseType.InfraredSight,
      },
    },
  ],
};
