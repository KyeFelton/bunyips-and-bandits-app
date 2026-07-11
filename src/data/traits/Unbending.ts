import { Trait } from "./../../models/traits";

export const Unbending: Trait = {
  name: "Unbending",
  description: "Gain 2 {{health:mind}}.",
  effects: [
    {
      mind: {
        bonus: 2,
      },
    },
  ],
};
