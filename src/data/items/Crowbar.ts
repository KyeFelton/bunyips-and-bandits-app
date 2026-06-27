import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const Crowbar: Item = {
  name: "Crowbar",
  description: "Grants advantage on checks to pry open stuck objects.",
  singleUse: false,
  slots: 1,
  defaultCost: 10,
  itemType: ItemType.Gear,
};
