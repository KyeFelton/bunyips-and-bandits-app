import { Locomotion } from "../../enums/Locomotion";
import { Trait } from "./../../models/traits";

export const Swift: Trait = {
  name: "Swift",
  description: "Your walking and swimming speed increases.",
  effects: [
    {
      speed: {
        locomotion: Locomotion.Walk,
        increase: true,
      },
    },
    {
      speed: {
        locomotion: Locomotion.Swim,
        increase: true,
      },
    },
  ],
};
