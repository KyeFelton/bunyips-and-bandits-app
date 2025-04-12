import { Item } from "../../models/items";

export const Steroid: Item = {
  name: "Steroid",
  description:
    "You gain +1 bonus to strength and agility checks for 1 hour. If you have already consumed a steroid within the last hour, you also take 1d6 damage. At most three steroids can be consumed at one time.",
  effects: [],
  singleUse: true,
  weight: 0.2,
  defaultCost: 110,
};
