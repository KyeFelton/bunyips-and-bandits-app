import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { Sleeping } from "../../models/conditions";

export const SleepingAid: Item = {
  name: "Sleeping aid",
  consumedEffect: {
    condition: Sleeping.name,
    custom:
      "You must pass a hard willpower check or gain the Sleeping condition for 1hr.",
  },
  singleUse: true,
  slots: 1,
  stackable: true,
  defaultCost: 105,
  itemType: ItemType.Concoction,
};
