import { Item } from "../../models/items";

export const SoothingHerb: Item = {
  name: "Soothing herb",
  description:
    "When consumed, regain 3 morale. If you have already consumed a soothing herb since your last rest, you take 1d12 damage.",
  effects: [
    {
      morale: {
        bonus: 3,
      },
    },
  ],
  singleUse: true,
  weight: 0.2,
  defaultCost: 150,
};
