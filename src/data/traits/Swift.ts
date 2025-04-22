import { Locomotion } from "../../enums/Locomotion";
import { Trait } from "./../../models/traits";

export const Swift: Trait = {
  name: "Swift",
  description: "Your speed increases by 50%.",
  effects: [
    {
      speed: {
        locomotion: Locomotion.Walk,
        bonus: 1.5,
      },
    },
    {
      speed: {
        locomotion: Locomotion.Swim,
        bonus: 1.5,
      },
    },
    {
      speed: {
        locomotion: Locomotion.Climb,
        bonus: 1.5,
      },
    },
    {
      speed: {
        locomotion: Locomotion.Fly,
        bonus: 1.5,
      },
    },
  ],
};
