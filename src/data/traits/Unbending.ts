import { Trait } from "./../../models/traits";

export const Unbending: Trait = {
  name: "Unbending",
  description: "Your mind increases by 50%.",
  effects: [
    {
      mind: {
        multiplier: 1.5,
      },
    },
  ],
};
