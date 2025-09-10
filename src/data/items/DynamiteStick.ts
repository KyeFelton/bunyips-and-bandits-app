import { Item } from "../../models/items";

export const DynamiteStick: Item = {
  name: "Dynamite stick",
  description:
    "The dynamite explodes upon ignition. Targets within 3m take 5 force damage. The dynamite can be stacked, with each additional stick adding 1 force damage.",
  effects: [],
  singleUse: true,
  weight: 0.25,
  defaultCost: 500,
};
