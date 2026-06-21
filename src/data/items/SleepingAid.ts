import { Item } from "../../models/items";

export const SleepingAid: Item = {
  name: "Sleeping aid",
  consumedEffect: {
    condition: "Sleeping",
    custom:
      "When consumed, you must pass an extreme willpower check or gain the Sleeping condition for 1hr. Can also be consumed in small doses to relieve pain.",
  },
  singleUse: true,
  slots: 1,
  stackable: true,
  defaultCost: 105,
};
