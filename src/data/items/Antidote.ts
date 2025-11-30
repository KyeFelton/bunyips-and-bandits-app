import { Item } from "../../models/items";

export const Antidote: Item = {
  name: "Antidote",
  description:
    "When consumed within one minute of taking toxic damage, your body immediately recovers 3 health lost from the toxic damage.",
  immediateEffect: {
    body: 3,
  },
  singleUse: true,
  weight: 0.2,
};
