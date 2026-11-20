import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const Mirror: Item = {
  name: "Mirror",
  description: "A small mirror for seeing your reflection, peeking around corners and signaling allies.",
  singleUse: false,
  slots: 1,
  defaultCost: 10,
  itemType: ItemType.Tool,
};
