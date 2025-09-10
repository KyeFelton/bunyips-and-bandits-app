import { Item } from "../../models/items";

export const Antidote: Item = {
  name: "Antidote",
  description:
    "When consumed within one minute of taking toxic damage, you regain up to 3 physique lost from the toxic damage.",
  effects: [
    {
      physique: {
        bonus: 3,
      },
    },
  ],
  singleUse: true,
  weight: 0.2,
};
