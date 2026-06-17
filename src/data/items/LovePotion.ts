import { Item } from "../../models/items";

export const LovePotion: Item = {
  name: "Love potion",
  description:
    "When consumed, you must pass an extreme willpower check or gain the Infatuated condition with the first creature you see.",
  immediateEffect: {
    condition: "Infatuated",
  },
  singleUse: true,
  slots: 1,
  stackable: true,
  defaultCost: 450,
};
