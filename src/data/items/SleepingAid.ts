import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const SleepingAid: Item = {
  name: "Sleeping aid",
  consumedEffect: {
    custom:
      "You must pass a hard {{skill:willpower}} check or gain the Sleeping condition for 1hr.",
  },
  singleUse: true,
  slots: 1,
  defaultCost: 105,
  itemType: ItemType.Consumable,
};
