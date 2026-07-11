import { Trait } from "../../models/traits";

export const Labourer: Trait = {
  name: "Labourer",
  description: "Gain 1 {{health:stamina}}.",
  effects: [
    {
      stamina: {
        bonus: 1,
      },
    },
  ],
};
