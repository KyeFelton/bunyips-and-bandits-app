import { Trait } from "./../../models/traits";

export const Vigilant: Trait = {
  name: "Vigilant",
  description: "Gain an extra evasion.",
  effects: [
    {
      evasions: {
        bonus: 1,
      },
    },
  ],
};
