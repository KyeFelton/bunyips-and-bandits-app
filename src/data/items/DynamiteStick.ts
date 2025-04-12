import { Item } from "../../models/items";

export const DynamiteStick: Item = {
  name: "Dynamite stick",
  description:
    "The dynamite explodes upon ignition. Targets within 3m take 15 force damage. The dynamite can be stacked, with each additional stick adding 5 force damage.",
  effects: [],
  singleUse: true,
  weight: 0.25,
  defaultCost: 500,
};
