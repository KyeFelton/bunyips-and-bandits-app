import { Trait } from "./../../models/traits";

export const Lethal: Trait = {
  name: "Lethal",
  description: "Gain +2 weapon damage.",
  effects: [
    {
      weapon: {
        bonus: 2,
      },
    },
  ],
};
