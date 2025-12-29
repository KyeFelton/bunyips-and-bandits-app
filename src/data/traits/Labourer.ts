import { Trait } from "../../models/traits";

export const Labourer: Trait = {
  name: "Labourer",
  description:
    "Years of hard labor have built your endurance. Gain +1 maximum stamina.",
  effects: [
    {
      stamina: {
        bonus: 1,
      },
    },
  ],
};
