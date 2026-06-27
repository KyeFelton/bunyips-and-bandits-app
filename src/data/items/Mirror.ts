import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const Mirror: Item = {
  name: "Mirror",
  description: "Signals allies or peeks around corners.",
  singleUse: false,
  slots: 1,
  defaultCost: 10,
  itemType: ItemType.Gear,
};
