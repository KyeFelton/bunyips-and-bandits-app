import { Item } from "../../models/items";

export const Caltrops: Item = {
  name: "Caltrops",
  consumedEffect: {
    custom:
      "Scattered caltrops injure creatures that step on them. A handful covers a small area.",
  },
  singleUse: true,
  slots: 0.1,
  defaultCost: 2,
};
