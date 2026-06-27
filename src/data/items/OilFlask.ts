import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const OilFlask: Item = {
  name: "Oil flask",
  description: "Burns when lit. Can be used as a lubricant.",
  singleUse: true,
  slots: 1,
  stackable: true,
  defaultCost: 5,
  itemType: ItemType.Gear,
};
