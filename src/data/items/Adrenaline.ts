import { Item } from "../../models/items";

export const Adrenaline: Item = {
  name: "Adrenaline Shot",
  consumedEffect: {
    stamina: 5,
    condition: "Adrenaline Rush",
    custom: "Each additional use deals 2 damage.",
  },
  singleUse: true,
  slots: 1,
  stackable: true,
  defaultCost: 125,
};
