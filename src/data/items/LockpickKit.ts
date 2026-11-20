import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const LockpickKit: Item = {
  name: "Lockpick kit",
  description: "A set of tools for picking locks.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Tool,
};
