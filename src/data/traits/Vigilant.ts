import { Trait } from "./../../models/traits";

export const Vigilant: Trait = {
  name: "Vigilant",
  description: "Gain an extra action.",
  effects: [
    {
      actions: {
        bonus: 1,
      },
    },
  ],
};
