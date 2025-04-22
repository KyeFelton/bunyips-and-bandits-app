import { Trait } from "./../../models/traits";

export const Unbending: Trait = {
  name: "Unbending",
  description: "Your morale increases by 50%.",
  effects: [
    {
      morale: {
        multiplier: 1.5,
      },
    },
  ],
};
