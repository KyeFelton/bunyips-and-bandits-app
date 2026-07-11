import { Trait } from "../../models/traits";

export const Fighter: Trait = {
  name: "Fighter",
  description: "Deal an additional 1 damage for melee attacks.",
  effects: [
    {
      weapon: {
        bonus: 1,
      },
    },
  ],
};
