import { Item } from "../../models/items";

export const SoothingHerb: Item = {
  name: "Soothing herb",
  description:
    "When consumed, your mind immediately recovers 3 health and grants the Soothed condition until your next rest. If you already have this condition and consume another, you take 2 damage.",
  immediateEffect: {
    mind: 3,
    condition: "Soothed",
  },
  singleUse: true,
  weight: 0.2,
  defaultCost: 150,
};
