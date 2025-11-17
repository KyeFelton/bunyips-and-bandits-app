import { Item } from "../../models/items";

export const SleepingAid: Item = {
  name: "Sleeping aid",
  description:
    "When consumed, you must pass an extreme willpower check or gain the Sleeping condition for 1hr. Can also be consumed in small doses to relieve pain.",
  immediateEffect: {
    condition: "Sleeping",
  },
  singleUse: true,
  weight: 0.2,
  defaultCost: 105,
};
