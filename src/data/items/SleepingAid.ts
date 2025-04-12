import { Item } from "../../models/items";

export const SleepingAid: Item = {
  name: "Sleeping aid",
  description:
    "When consumed, you must pass an extreme willpower check or fall asleep for 1hr. Can also be consumed in small doses to relieve pain.",
  effects: [],
  singleUse: true,
  weight: 0.2,
  defaultCost: 105,
};
