import { Trait } from "../../../models/traits";

export const DamagedLung: Trait = {
  name: "Damaged lung",
  description: "{{health:stamina}} capacity is halved.",
  effects: [
    {
      stamina: {
        multiplier: 0.5,
      },
    },
  ],
};
