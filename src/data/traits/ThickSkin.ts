import { Trait } from "../../models/traits";

export const ThickSkin: Trait = {
  name: "Thick skin",
  description: "Gain 2 {{health:body}}.",
  effects: [
    {
      body: {
        bonus: 2,
      },
    },
  ],
};
