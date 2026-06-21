import { Item } from "../../models/items";

export const SoothingHerb: Item = {
  name: "Soothing herb",
  consumedEffect: {
    mind: 3,
    condition: "Soothed",
    custom:
      "Grants the Soothed condition until your next rest. If you already have this condition and consume another, you take 2 damage.",
  },
  singleUse: true,
  slots: 1,
  stackable: true,
  defaultCost: 150,
};
